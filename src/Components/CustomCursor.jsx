import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const isTouch = useRef(typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches);

  useEffect(() => {
    if (isTouch.current) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onDown = () => {
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(0.75)';
    };
    const onUp = () => {
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    const enterInteractive = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = '48px';
      ringRef.current.style.height = '48px';
      ringRef.current.style.borderColor = '#ff2d78';
      ringRef.current.style.background = 'rgba(255,45,120,0.08)';
    };
    const leaveInteractive = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = '24px';
      ringRef.current.style.height = '24px';
      ringRef.current.style.borderColor = '#00d4ff';
      ringRef.current.style.background = 'transparent';
    };

    const loop = () => {
      const ease = 0.14;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.left = `${pos.current.x}px`;
        ringRef.current.style.top = `${pos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', enterInteractive);
      el.addEventListener('mouseleave', leaveInteractive);
    });

    loop();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', enterInteractive);
        el.removeEventListener('mouseleave', leaveInteractive);
      });
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '24px',
          height: '24px',
          border: '2px solid #00d4ff',
          borderRadius: '50%',
          left: 0,
          top: 0,
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width .2s, height .2s, border-color .2s, background .2s, transform .1s',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '5px',
          height: '5px',
          background: '#00d4ff',
          borderRadius: '50%',
          left: 0,
          top: 0,
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
    </>
  );
}
