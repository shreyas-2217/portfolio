"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduce.matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return undefined;

    const root = document.documentElement;
    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let visible = false;

    const placeDot = (x, y) => {
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const reveal = () => {
      if (visible) return;
      visible = true;
      ring.classList.add("is-visible");
      dot.classList.add("is-visible");
    };

    const hide = () => {
      visible = false;
      ring.classList.remove("is-visible");
      dot.classList.remove("is-visible");
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      reveal();
      placeDot(targetX, targetY);
    };

    const onOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const custom = target.closest("[data-cursor]");
      const interactive = target.closest("a, button, [role='button']");

      ring.classList.toggle("is-active", Boolean(interactive || custom));
      dot.classList.toggle("is-active", Boolean(interactive || custom));
      ring.classList.toggle("is-label", Boolean(custom));
      label.textContent = custom ? custom.getAttribute("data-cursor") || "" : "";
    };

    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");
    const onEnter = () => reveal();
    const onLeave = () => hide();
    const onBlur = () => hide();

    const loop = () => {
      ringX += (targetX - ringX) * 0.28;
      ringY += (targetY - ringY) * 0.28;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(loop);
    };

    frame = window.requestAnimationFrame(loop);
    root.classList.add("has-cursor");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onBlur);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onBlur);
      root.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
