"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Flip to false to remove the hero mark assembly and leave the mesh unchanged. */
export const heroMarkAssemblyEnabled = true;

export const HERO_MARK_GATHER_MS = 1600;
export const HERO_MARK_HOLD_MS = 2800;
export const HERO_MARK_FADE_MS = 2600;
const TOTAL_MS = HERO_MARK_GATHER_MS + HERO_MARK_HOLD_MS + HERO_MARK_FADE_MS;

/** Hero copy starts as the arch fade begins, and lasts the same length. */
export const heroSettleDelay = (HERO_MARK_GATHER_MS + HERO_MARK_HOLD_MS) / 1000;
export const heroSettleDuration = HERO_MARK_FADE_MS / 1000;

const LINE_MS = 2500;
const CM = 96 / 2.54;
const HALO = "244, 176, 72";
const CORE = "255, 231, 163";

type Point = { x: number; y: number; peak: number };

type Particle = Point & {
  tx: number;
  ty: number;
  sx: number;
  sy: number;
  dx: number;
  dy: number;
  r: number;
  z: number;
  phase: number;
  freq: number;
  amp: number;
};

type GoldLine = {
  y: number;
  dir: -1 | 1;
  len: number;
  left: number;
  right: number;
  passStart: number;
};

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function quad(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  t: number,
) {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  };
}

function lineSamples(x1: number, y1: number, x2: number, y2: number, step: number) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const n = Math.max(1, Math.round(len / step));
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t });
  }
  return pts;
}

function quadSamples(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  n: number,
) {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i <= n; i++) pts.push(quad(p0, p1, p2, i / n));
  return pts;
}

function insidePolygon(x: number, y: number, poly: { x: number; y: number }[]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const yi = poly[i].y;
    const yj = poly[j].y;
    if (yi > y !== yj > y && x < ((poly[j].x - poly[i].x) * (y - yi)) / (yj - yi) + poly[i].x) {
      inside = !inside;
    }
  }
  return inside;
}

/** Fill under the outer arch. The rods and keystone are empty channels. */
function archFill(s: number): Point[] {
  const cx = s * 0.5;
  const top = s * 0.06;
  const base = s * 0.92;
  const r = s * 0.44;
  const step = 4;

  const outer = [
    ...lineSamples(cx - r, base, cx - r, cx, step),
    ...quadSamples({ x: cx - r, y: cx }, { x: cx - r, y: top }, { x: cx, y: top }, 28).slice(1),
    ...quadSamples({ x: cx, y: top }, { x: cx + r, y: top }, { x: cx + r, y: cx }, 28).slice(1),
    ...lineSamples(cx + r, cx, cx + r, base, step).slice(1),
  ];

  const mr = r * 0.58;
  const ir = r * 0.22;
  const channels = [
    ...outer.map((p) => ({ ...p, rad: s * 0.02 })),
    ...[
      ...lineSamples(cx - mr, base, cx - mr, cx * 1.05, step),
      ...quadSamples({ x: cx - mr, y: cx * 1.05 }, { x: cx - mr, y: top * 2.8 }, { x: cx, y: top * 2.8 }, 22).slice(1),
      ...quadSamples({ x: cx, y: top * 2.8 }, { x: cx + mr, y: top * 2.8 }, { x: cx + mr, y: cx * 1.05 }, 22).slice(1),
      ...lineSamples(cx + mr, cx * 1.05, cx + mr, base, step).slice(1),
    ].map((p) => ({ ...p, rad: s * 0.015 })),
    ...[
      ...lineSamples(cx - ir, base, cx - ir, cx * 1.18, step),
      ...quadSamples({ x: cx - ir, y: cx * 1.18 }, { x: cx - ir, y: top * 5 }, { x: cx, y: top * 5 }, 16).slice(1),
      ...quadSamples({ x: cx, y: top * 5 }, { x: cx + ir, y: top * 5 }, { x: cx + ir, y: cx * 1.18 }, 16).slice(1),
      ...lineSamples(cx + ir, cx * 1.18, cx + ir, base, step).slice(1),
    ].map((p) => ({ ...p, rad: s * 0.012 })),
    ...lineSamples(s * 0.04, base, s * 0.96, base, step).map((p) => ({ ...p, rad: s * 0.016 })),
    { x: cx, y: top, rad: s * 0.05 },
  ];

  const cell = Math.max(8, s * 0.05);
  const buckets = new Map<string, { x: number; y: number; rad: number }[]>();
  for (const channel of channels) {
    const key = `${Math.floor(channel.x / cell)}:${Math.floor(channel.y / cell)}`;
    const list = buckets.get(key);
    if (list) list.push(channel);
    else buckets.set(key, [channel]);
  }

  const spacing = Math.max(2.26, s * 0.0046);
  const pts: Point[] = [];
  let row = 0;
  for (let y = top; y <= base; y += spacing) {
    const shift = row % 2 === 0 ? 0 : spacing * 0.5;
    row += 1;
    const cy0 = Math.floor(y / cell);
    for (let x = cx - r + shift; x <= cx + r; x += spacing) {
      if (!insidePolygon(x, y, outer)) continue;
      const cx0 = Math.floor(x / cell);
      let clear = true;
      for (let oy = -1; oy <= 1 && clear; oy += 1) {
        for (let ox = -1; ox <= 1 && clear; ox += 1) {
          const near = buckets.get(`${cx0 + ox}:${cy0 + oy}`);
          if (!near) continue;
          for (const channel of near) {
            const dx = x - channel.x;
            const dy = y - channel.y;
            if (dx * dx + dy * dy < channel.rad * channel.rad) {
              clear = false;
              break;
            }
          }
        }
      }
      if (clear) pts.push({ x, y, peak: 0.92 });
    }
  }
  return pts;
}

function buildParticles(width: number, height: number, s: number, ox: number, oy: number): Particle[] {
  const particles = archFill(s).map((p) => {
    const tx = p.x + ox;
    const ty = p.y + oy;
    let sx = Math.random() * width;
    let sy = Math.random() * height;
    for (let i = 0; i < 6 && Math.hypot(sx - tx, sy - ty) < s * 0.12; i++) {
      sx = Math.random() * width;
      sy = Math.random() * height;
    }
    const roll = Math.random();
    const ember = roll > 0.96;
    const mote = roll > 0.78;
    const z = ember ? 0.82 + Math.random() * 0.18 : mote ? 0.5 + Math.random() * 0.28 : 0.12 + Math.random() * 0.38;
    const r = ember ? 1.35 + Math.random() * 0.7 : mote ? 0.7 + Math.random() * 0.35 : 0.32 + Math.random() * 0.2;
    const ang = Math.atan2(ty - (oy + s * 0.5), tx - (ox + s * 0.5)) + (Math.random() - 0.5) * 0.6;
    const dist = s * (0.06 + Math.random() * 0.12);
    return {
      ...p,
      peak: ember ? 1 : mote ? 0.9 : 0.7 + Math.random() * 0.16,
      tx,
      ty,
      sx,
      sy,
      dx: tx + Math.cos(ang) * dist,
      dy: ty + Math.sin(ang) * dist,
      r,
      z,
      phase: Math.random() * Math.PI * 2,
      freq: 0.7 + Math.random() * 0.8,
      amp: 1.6 + z * 1.8,
    };
  });
  particles.sort((a, b) => a.z - b.z);
  return particles;
}

function buildLines(s: number, ox: number, oy: number): GoldLine[] {
  const left = ox + s * 0.06;
  const right = ox + s * 0.94;
  const cy = oy + s * 0.48;
  const passStart = HERO_MARK_GATHER_MS + 300;
  const gaps = [s * 0.1, s * 0.18];
  const lines: GoldLine[] = [];
  gaps.forEach((gap, i) => {
    const dir: -1 | 1 = i % 2 === 0 ? 1 : -1;
    lines.push({ y: cy - gap, dir, len: CM, left, right, passStart });
    lines.push({ y: cy + gap, dir: dir === 1 ? -1 : 1, len: CM, left, right, passStart });
  });
  return lines;
}

function driftOf(p: Particle, elapsed: number) {
  const t = elapsed / 1000;
  return {
    x: Math.sin(t * p.freq + p.phase) * p.amp,
    y: Math.cos(t * p.freq * 0.73 + p.phase) * p.amp * 0.65,
  };
}

function frameAt(p: Particle, elapsed: number) {
  const drift = elapsed < HERO_MARK_GATHER_MS ? { x: 0, y: 0 } : driftOf(p, elapsed);
  if (elapsed < HERO_MARK_GATHER_MS) {
    const t = easeOutCubic(elapsed / HERO_MARK_GATHER_MS);
    return { x: p.sx + (p.tx - p.sx) * t, y: p.sy + (p.ty - p.sy) * t, a: p.peak * t, z: p.z, r: p.r };
  }
  if (elapsed < HERO_MARK_GATHER_MS + HERO_MARK_HOLD_MS) {
    return { x: p.tx + drift.x, y: p.ty + drift.y, a: p.peak, z: p.z, r: p.r };
  }
  const t = easeInOutCubic(Math.min(1, (elapsed - HERO_MARK_GATHER_MS - HERO_MARK_HOLD_MS) / HERO_MARK_FADE_MS));
  return {
    x: p.tx + (p.dx - p.tx) * t + drift.x * (1 - t),
    y: p.ty + (p.dy - p.ty) * t + drift.y * (1 - t),
    a: p.peak * (1 - t),
    z: p.z,
    r: p.r,
  };
}

function drawLines(ctx: CanvasRenderingContext2D, lines: GoldLine[], elapsed: number) {
  ctx.lineCap = "round";
  for (const line of lines) {
    const t = (elapsed - line.passStart) / LINE_MS;
    if (t <= 0 || t >= 1) continue;
    const travel = easeInOutCubic(t);
    const span = Math.max(0, line.right - line.left - line.len);
    const x = line.dir > 0 ? line.left + span * travel : line.right - line.len - span * travel;
    const fade = t < 0.12 ? t / 0.12 : t > 0.8 ? (1 - t) / 0.2 : 1;
    ctx.strokeStyle = `rgba(${HALO}, 1)`;
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = fade * 0.35;
    ctx.beginPath();
    ctx.moveTo(x, line.y);
    ctx.lineTo(x + line.len, line.y);
    ctx.stroke();
    ctx.strokeStyle = `rgba(${CORE}, 1)`;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = fade;
    ctx.beginPath();
    ctx.moveTo(x, line.y);
    ctx.lineTo(x + line.len, line.y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

export function MarkAssembly() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce === null) return;
    if (reduce) {
      setDone(true);
      return;
    }
    setActive(true);
  }, [reduce]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let cancelled = false;
    let started = 0;
    let particles: Particle[] = [];
    let lines: GoldLine[] = [];
    let width = 0;
    let height = 0;

    const draw = (now: number) => {
      if (cancelled) return;
      const elapsed = now - started;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
      const haloStyle = `rgba(${HALO}, 1)`;
      const coreStyle = `rgba(${CORE}, 1)`;
      for (const p of particles) {
        const frame = frameAt(p, elapsed);
        if (frame.a <= 0.02) continue;
        const depth = 0.72 + frame.z * 0.4;
        if (frame.z > 0.5) {
          ctx.fillStyle = haloStyle;
          ctx.beginPath();
          ctx.arc(frame.x, frame.y, frame.r * 2.1 * depth, 0, Math.PI * 2);
          ctx.globalAlpha = frame.a * 0.22;
          ctx.fill();
        }
        ctx.fillStyle = coreStyle;
        ctx.beginPath();
        ctx.arc(frame.x, frame.y, frame.r * depth, 0, Math.PI * 2);
        ctx.globalAlpha = frame.a * 0.9;
        ctx.fill();
      }
      drawLines(ctx, lines, elapsed);
      ctx.globalAlpha = 1;
      if (elapsed >= TOTAL_MS) {
        setDone(true);
        return;
      }
      raf = requestAnimationFrame(draw);
    };

    const begin = () => {
      if (cancelled) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (width < 2 || height < 2) {
        raf = requestAnimationFrame(begin);
        return;
      }
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const s = Math.min(width, height) * 0.85;
      const ox = (width - s) / 2;
      const oy = (height - s) / 2;
      particles = buildParticles(width, height, s, ox, oy);
      lines = buildLines(s, ox, oy);
      started = performance.now();
      raf = requestAnimationFrame(draw);
    };

    begin();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (reduce || done || !active) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
