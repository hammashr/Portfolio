import React, { useEffect, useRef } from 'react';

/*
  Simple 3-D animated background
  – Perspective grid floor that recedes into the distance
  – A handful of slowly drifting geometric shapes (rings + triangles)
  – Soft ambient colour blobs matching the cyan / purple / pink theme
  – Everything very subtle so content stays the hero
*/
export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let W, H, animId, t = 0;
    let mX = 0, mY = 0, smX = 0, smY = 0;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();

    /* ── Floating geometric shapes ── */
    const shapes = [
      { type: 'ring',     x: 0.18, y: 0.22, size: 38, speed: 0.6, phase: 0,    color: '0,212,255',   opacity: 0.18 },
      { type: 'ring',     x: 0.82, y: 0.35, size: 28, speed: 0.9, phase: 1.2,  color: '145,94,255',  opacity: 0.15 },
      { type: 'ring',     x: 0.55, y: 0.75, size: 22, speed: 0.7, phase: 2.4,  color: '255,45,120',  opacity: 0.12 },
      { type: 'ring',     x: 0.88, y: 0.78, size: 16, speed: 1.1, phase: 0.8,  color: '0,212,255',   opacity: 0.10 },
      { type: 'ring',     x: 0.12, y: 0.68, size: 20, speed: 0.5, phase: 3.5,  color: '145,94,255',  opacity: 0.12 },
      { type: 'triangle', x: 0.75, y: 0.18, size: 24, speed: 0.8, phase: 0.5,  color: '0,212,255',   opacity: 0.13 },
      { type: 'triangle', x: 0.25, y: 0.82, size: 18, speed: 1.0, phase: 2.0,  color: '145,94,255',  opacity: 0.11 },
      { type: 'triangle', x: 0.92, y: 0.55, size: 14, speed: 0.6, phase: 4.2,  color: '255,45,120',  opacity: 0.09 },
      { type: 'diamond',  x: 0.08, y: 0.42, size: 16, speed: 0.9, phase: 1.8,  color: '0,212,255',   opacity: 0.12 },
      { type: 'diamond',  x: 0.68, y: 0.88, size: 12, speed: 1.2, phase: 3.1,  color: '145,94,255',  opacity: 0.10 },
    ];

    function drawRing(cx, cy, r, color, alpha) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      /* inner glow */
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${color},${alpha * 0.4})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    function drawTriangle(cx, cy, size, rot, color, alpha) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
        i === 0
          ? ctx.moveTo(Math.cos(a) * size, Math.sin(a) * size)
          : ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1.1;
      ctx.stroke();
      ctx.restore();
    }

    function drawDiamond(cx, cy, size, rot, color, alpha) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.6, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.6, 0);
      ctx.closePath();
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1.0;
      ctx.stroke();
      ctx.restore();
    }

    /* ── Perspective 3-D grid ── */
    function drawGrid() {
      const horizon = H * 0.52;
      const vp      = { x: W * 0.5 + smX * 0.04, y: horizon }; /* vanishing point */
      const spread  = W * 1.6;
      const rows    = 14;
      const cols    = 16;

      /* horizontal lines */
      for (let i = 0; i <= rows; i++) {
        const progress = i / rows;
        const ease     = Math.pow(progress, 1.8);          /* perspective crowding */
        const y        = horizon + (H * 0.54) * ease;
        if (y > H + 2) continue;

        const xLeft  = vp.x - (spread / 2) * ease;
        const xRight = vp.x + (spread / 2) * ease;
        const alpha  = ease * 0.13;

        ctx.beginPath();
        ctx.moveTo(xLeft, y);
        ctx.lineTo(xRight, y);
        ctx.strokeStyle = `rgba(0,212,255,${alpha.toFixed(3)})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      /* vertical (converging) lines */
      for (let j = 0; j <= cols; j++) {
        const fraction  = j / cols;                          /* 0 → 1 left to right */
        const xBottom   = vp.x - spread / 2 + spread * fraction;
        const alpha     = 0.07;

        ctx.beginPath();
        ctx.moveTo(vp.x, vp.y);
        ctx.lineTo(xBottom, H + 2);
        ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
        ctx.lineWidth = 0.55;
        ctx.stroke();
      }

      /* horizon glow line */
      const hGrad = ctx.createLinearGradient(0, horizon, W, horizon);
      hGrad.addColorStop(0,    'rgba(0,212,255,0)');
      hGrad.addColorStop(0.25, 'rgba(0,212,255,0.18)');
      hGrad.addColorStop(0.5,  'rgba(145,94,255,0.22)');
      hGrad.addColorStop(0.75, 'rgba(0,212,255,0.18)');
      hGrad.addColorStop(1,    'rgba(0,212,255,0)');
      ctx.beginPath();
      ctx.moveTo(0, horizon);
      ctx.lineTo(W, horizon);
      ctx.strokeStyle = hGrad;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    /* ── main draw loop ── */
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      /* smooth mouse parallax */
      smX += (mX - smX) * 0.04;
      smY += (mY - smY) * 0.04;

      /* 3-D grid */
      drawGrid();

      /* geometric shapes */
      shapes.forEach(s => {
        const cx  = s.x * W + Math.sin(t * s.speed + s.phase) * 18;
        const cy  = s.y * H + Math.cos(t * s.speed * 0.7 + s.phase) * 14;
        const rot = t * s.speed * 0.4 + s.phase;

        /* parallax offset from mouse */
        const px = cx + (smX - W / 2) * 0.012 * (s.size / 30);
        const py = cy + (smY - H / 2) * 0.008 * (s.size / 30);

        if (s.type === 'ring')     drawRing(px, py, s.size, s.color, s.opacity);
        if (s.type === 'triangle') drawTriangle(px, py, s.size, rot, s.color, s.opacity);
        if (s.type === 'diamond')  drawDiamond(px, py, s.size, rot, s.color, s.opacity);
      });

      animId = requestAnimationFrame(draw);
    }

    const onMouse = e => { mX = e.clientX; mY = e.clientY; };
    const onTouch = e => {
      if (e.touches[0]) { mX = e.touches[0].clientX; mY = e.touches[0].clientY; }
    };
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>

      {/* Base */}
      <div style={{ position: 'absolute', inset: 0, background: '#050816' }} />

      {/* Soft ambient blobs — very low opacity */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: '60%', height: '65%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(121,40,202,0.09) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'blob-move 20s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '-12%',
        width: '55%', height: '70%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        filter: 'blur(90px)',
        animation: 'blob-move 26s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '30%',
        width: '45%', height: '50%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'blob-move 18s ease-in-out infinite',
        animationDelay: '-6s',
      }} />

      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 45%, rgba(5,8,22,0.78) 100%)',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%',
        background: 'linear-gradient(to top, #050816, transparent)',
      }} />
    </div>
  );
}
