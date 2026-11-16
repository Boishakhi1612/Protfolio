"use client";

import React, { useEffect, useState } from "react";

export default function CursorLight() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: -500,
    y: -500,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      // Smooth linear interpolation (lerp)
      const ease = 0.15;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      setPosition({ x: currentX, y: currentY });
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300">
      {/* Broad soft ambient lavender spotlight / shadow light */}
      <div
        className="absolute rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? "480px" : "400px",
          height: isPointer ? "480px" : "400px",
          transform: "translate(-50%, -50%)",
          background: isPointer
            ? "radial-gradient(circle, rgba(190, 157, 253, 0.16) 0%, rgba(139, 92, 246, 0.08) 35%, rgba(9, 10, 15, 0) 70%)"
            : "radial-gradient(circle, rgba(167, 113, 250, 0.12) 0%, rgba(139, 92, 246, 0.05) 40%, rgba(9, 10, 15, 0) 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Crisp inner halo dot */}
      <div
        className="absolute rounded-full transition-all duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? "36px" : "18px",
          height: isPointer ? "36px" : "18px",
          transform: "translate(-50%, -50%)",
          background: isPointer
            ? "rgba(222, 195, 254, 0.4)"
            : "rgba(190, 157, 253, 0.35)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: isPointer
            ? "0 0 20px rgba(190, 157, 253, 0.6)"
            : "0 0 12px rgba(167, 113, 250, 0.4)",
          backdropFilter: "invert(10%)",
        }}
      />
    </div>
  );
}
