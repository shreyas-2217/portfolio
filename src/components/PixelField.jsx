"use client";

import { useEffect, useRef } from "react";

const CELL = 28;

export default function PixelField() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let points = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let last = 0;
    let visible = true;
    let pointerX = -9999;
    let pointerY = -9999;
    let hasPointer = false;

    const build = () => {
      const rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / CELL) + 1;
      const rows = Math.ceil(height / CELL) + 1;
      points = [];

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const x = col * CELL + CELL / 2;
          const y = row * CELL + CELL / 2;
          const dx = x / width - 0.5;
          const dy = y / height - 0.5;
          const radial = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) * 1.8);

          points.push({
            x,
            y,
            base: Math.random() * 0.55 + 0.15,
            radial,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      points.forEach((point) => {
        const alpha = 0.03 + point.base * 0.11 * point.radial;
        const size = 2.2 + point.base * 1.6;
        ctx.save();
        ctx.translate(point.x, point.y);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = `rgba(139, 116, 226, ${alpha})`;
        ctx.fillRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      });
    };

    const draw = (time) => {
      if (!last) last = time;
      const delta = time - last;
      if (delta < 33) {
        frame = window.requestAnimationFrame(draw);
        return;
      }
      last = time;

      ctx.clearRect(0, 0, width, height);

      points.forEach((point) => {
        const dx = point.x - pointerX;
        const dy = point.y - pointerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const proximity = hasPointer ? Math.max(0, 1 - distance / 240) : 0;
        const shimmer =
          (Math.sin(time * 0.0012 + point.phase) + 1) * 0.5 * 0.35 + 0.65;
        const alpha =
          (0.07 + point.base * 0.18 * point.radial) * shimmer +
          proximity * 0.55;
        const size =
          (2.8 + point.base * 2.1) * (0.85 + shimmer * 0.3) + proximity * 4;

        if (alpha <= 0.02) return;

        const green = Math.round(132 + proximity * 26);
        const red = Math.round(158 + proximity * 24);

        ctx.save();
        ctx.translate(point.x, point.y);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = `rgba(${red}, ${green}, 240, ${Math.min(alpha, 0.68)})`;
        ctx.fillRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      });

      frame = window.requestAnimationFrame(draw);
    };

    const onPointer = (event) => {
      const rect = wrap.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      hasPointer =
        pointerX > -100 &&
        pointerX < rect.width + 100 &&
        pointerY > -100 &&
        pointerY < rect.height + 100;
    };

    const onLeave = () => {
      hasPointer = false;
    };

    const resizeObserver = new ResizeObserver(() => {
      build();
      if (reduce.matches) drawStatic();
    });
    resizeObserver.observe(wrap);

    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!visible) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        } else if (!reduce.matches && !frame) {
          last = 0;
          frame = window.requestAnimationFrame(draw);
        }
      },
      { threshold: 0 },
    );
    intersection.observe(wrap);

    build();
    if (reduce.matches) {
      drawStatic();
    } else {
      frame = window.requestAnimationFrame(draw);
    }

    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage:
          "radial-gradient(ellipse 92% 82% at 50% 58%, #000 32%, transparent 88%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 92% 82% at 50% 58%, #000 32%, transparent 88%)",
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
