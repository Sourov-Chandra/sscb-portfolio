"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + "px";
        dotRef.current.style.top = mouseY + "px";
      }
    };

    // Smooth lagging ring
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }
      rafId = requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover on interactive elements
    const targets = document.querySelectorAll(
      'a, button, input, textarea, [data-cursor="pointer"]',
    );
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicking ? "6px" : hovering ? "12px" : "8px",
          height: clicking ? "6px" : hovering ? "12px" : "8px",
          borderRadius: "50%",
          background: hovering ? "#ffffff" : "#00ffc8",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.15s, height 0.15s, background 0.15s",
          boxShadow:
            "0 0 10px rgba(0,255,200,0.8), 0 0 20px rgba(0,255,200,0.3)",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicking ? "28px" : hovering ? "52px" : "36px",
          height: clicking ? "28px" : hovering ? "52px" : "36px",
          borderRadius: "50%",
          border: `1px solid ${hovering ? "#00ffc8" : "rgba(0,255,200,0.5)"}`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.2s",
        }}
      />
    </>
  );
}
