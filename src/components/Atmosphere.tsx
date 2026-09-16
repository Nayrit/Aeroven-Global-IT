"use client";

import { useEffect, useRef } from "react";

/**
 * Visible liquid WebGL field — brand blue/teal/red that clearly reacts to the cursor.
 * (Previous version was too close to paper and looked “static”.)
 */
const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos,0.0,1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;

float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){
  vec2 i=floor(p); vec2 f=fract(p);
  float a=hash(i), b=hash(i+vec2(1.,0.)), c=hash(i+vec2(0.,1.)), d=hash(i+vec2(1.,1.));
  vec2 u=f*f*(3.-2.*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v=0.; float a=.55;
  for(int i=0;i<6;i++){ v+=a*noise(p); p*=2.1; a*=.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = (uv - .5) * vec2(u_res.x/u_res.y, 1.0);
  vec2 m = (u_mouse / u_res) - .5;
  m.x *= u_res.x / u_res.y;

  float t = u_time * .09;
  float n = fbm(p * 1.55 + vec2(t * .55, -t * .4));
  n = fbm(p * 1.2 + n + t * .3);
  float d = length(p - m);
  float bloom = exp(-d * 1.9) * .85;
  float rip = sin(d * 14.0 - t * 6.0) * exp(-d * 3.5) * .18;
  float field = clamp(n * .75 + bloom + rip, 0.0, 1.2);

  vec3 paper = vec3(0.961, 0.953, 0.933);
  vec3 blue  = vec3(0.55, 0.72, 0.92);   // visible cobalt wash
  vec3 teal  = vec3(0.35, 0.62, 0.72);
  vec3 red   = vec3(0.90, 0.42, 0.42);

  vec3 col = paper;
  col = mix(col, blue, smoothstep(0.28, 0.62, field) * 0.85);
  col = mix(col, teal, smoothstep(0.48, 0.88, field) * 0.55);
  col = mix(col, red, bloom * 0.9);
  col += red * rip * 0.8;

  // soft vignette so the field reads as depth
  float vig = smoothstep(1.45, 0.35, length(p * 0.85));
  col = mix(col * 0.92, col, vig);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export function Atmosphere() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uTime = gl.getUniformLocation(prog, "u_time");

    const mouse = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
    const target = { ...mouse };
    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    let raf = 0;
    let running = true;
    const start = performance.now();
    const tick = (now: number) => {
      if (!running) return;
      mouse.x += (target.x - mouse.x) * 0.08;
      mouse.y += (target.y - mouse.y) * 0.08;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      const dpr = canvas.width / window.innerWidth;
      gl.uniform2f(uMouse, mouse.x * dpr, (window.innerHeight - mouse.y) * dpr);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
