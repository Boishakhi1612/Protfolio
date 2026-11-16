"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseRadius: number;
  alpha: number;
  color: string;
}

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const colors = [
      "rgba(190, 157, 253, ", // Lavender light
      "rgba(167, 113, 250, ", // Lavender mid
      "rgba(139, 92, 246, ",  // Violet
      "rgba(233, 226, 254, ", // Soft pale lavender
      "rgba(255, 255, 255, ", // Pure white stardust
    ];

    const particleCount = Math.min(Math.floor((width * height) / 14000), 110);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2.2 + 0.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: radius,
        baseRadius: radius,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let tick = 0;

    const render = () => {
      tick += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle glowing lavender ambient orbs
      const grad1 = ctx.createRadialGradient(
        width * 0.25 + Math.sin(tick * 0.5) * 60,
        height * 0.3 + Math.cos(tick * 0.7) * 40,
        10,
        width * 0.25,
        height * 0.3,
        width * 0.45
      );
      grad1.addColorStop(0, "rgba(167, 113, 250, 0.07)");
      grad1.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
      grad1.addColorStop(1, "rgba(9, 10, 15, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.75 + Math.cos(tick * 0.6) * 50,
        height * 0.7 + Math.sin(tick * 0.8) * 50,
        10,
        width * 0.75,
        height * 0.7,
        width * 0.4
      );
      grad2.addColorStop(0, "rgba(190, 157, 253, 0.06)");
      grad2.addColorStop(0.6, "rgba(91, 33, 182, 0.02)");
      grad2.addColorStop(1, "rgba(9, 10, 15, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse interaction: gentle repulsion / glow
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 140;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
          p.radius = p.baseRadius * (1 + force * 0.8);
        } else {
          p.radius = p.baseRadius;
        }

        // Particle pulse
        const dynamicAlpha = Math.min(
          1,
          Math.max(0.15, p.alpha + Math.sin(tick * 2 + i) * 0.25)
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${dynamicAlpha})`;
        ctx.fill();

        // Connect particles with delicate glowing lavender threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 105) {
            const lineAlpha = (1 - cdist / 105) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(190, 157, 253, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw interactive connection line to cursor
        if (dist < 120) {
          const cursorLineAlpha = (1 - dist / 120) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(222, 195, 254, ${cursorLineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      {/* Modern subtle grid matrix texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(190, 157, 253, 0.9) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}
