"use client";

import { useEffect, useRef } from "react";

/** Light, consultancy-grade WebGL field — mouse-reactive liquid color on paper. */
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
  float v=0.; float a=.5;
  for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.05; a*=.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = (uv - .5) * vec2(u_res.x/u_res.y, 1.0);
  vec2 m = (u_mouse / u_res) - .5;
  m.x *= u_res.x / u_res.y;

  float t = u_time * .06;
  float n = fbm(p*1.4 + vec2(t*.5, -t*.35) + fbm(p*2.1 - t));
  float d = length(p - m);
  float bloom = exp(-d * 2.4) * .55;
  float field = n * .85 + bloom;

  // paper → soft blue → teal → red accent near cursor
  vec3 paper = vec3(0.961, 0.953, 0.933);
  vec3 mist  = vec3(0.90, 0.91, 0.93);
  vec3 blue  = vec3(0.78, 0.86, 0.94);
  vec3 teal  = vec3(0.72, 0.84, 0.88);
  vec3 red   = vec3(0.95, 0.78, 0.78);

  vec3 col = mix(paper, mist, smoothstep(0.2, 0.5, field));
  col = mix(col, blue, smoothstep(0.4, 0.72, field) * 0.7);
  col = mix(col, teal, smoothstep(0.55, 0.9, field) * 0.45);
  col = mix(col, red, bloom * 0.65);

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
      powerPreference: "low-power",
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
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
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
      mouse.x += (target.x - mouse.x) * 0.07;
      mouse.y += (target.y - mouse.y) * 0.07;
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
