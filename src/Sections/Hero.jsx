import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaWordpress, FaArrowRight, FaDownload } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import profile from '../assets/hmddp.jpg';

const ROLES = [
  'MERN Stack Developer',
  'WordPress Expert',
  'AI Agent Builder',
  'Frontend Engineer',
];

const TECH = [
  { name: 'React',     color: '#61dafb', Icon: FaReact },
  { name: 'Node.js',   color: '#68a063', Icon: FaNodeJs },
  { name: 'WordPress', color: '#21a0c4', Icon: FaWordpress },
  { name: 'MongoDB',   color: '#47a248', Icon: SiMongodb },
  { name: 'Tailwind',  color: '#38bdf8', Icon: SiTailwindcss },
];

const STATS = [
  { value: '15+', label: 'Projects' },
  { value: '2+',  label: 'Years Exp' },
  { value: '100%', label: 'Satisfaction' },
];

export default function Hero() {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing,    setTyping]    = useState(true);
  const imgRef = useRef(null);

  /* ── Typewriter ── */
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t;
    if (typing) {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 72);
      } else {
        t = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 36);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  /* ── 3-D tilt on profile image ── */
  const onImgMove = e => {
    if (!imgRef.current) return;
    const r = imgRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    imgRef.current.style.transform = `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.03)`;
  };
  const onImgLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '110px 24px 70px',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* ── Grid ── */}
      <div className="hero-grid" style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 64, alignItems: 'center',
        position: 'relative', zIndex: 1, width: '100%',
      }}>

        {/* ════════════════ LEFT ════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'flex', flexDirection: 'column' }}
          className="hero-text-align"
        >

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              alignSelf: 'flex-start',
              background: 'rgba(0,255,136,0.06)',
              border: '1px solid rgba(0,255,136,0.25)',
              borderRadius: 50, padding: '7px 20px', marginBottom: 28,
              fontSize: '0.78rem', fontWeight: 600,
              color: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              letterSpacing: '0.04em',
            }}
          >
            <span className="animate-glow-dot" style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#00ff88', boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff8860',
              flexShrink: 0,
            }} />
            Available for Work
          </motion.div>

          {/* Intro label */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
            style={{
              fontSize: '0.8rem', color: 'rgba(255,255,255,0.38)',
              letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12,
            }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 5.8rem)',
              fontWeight: 900, lineHeight: 0.98,
              letterSpacing: '-0.03em', marginBottom: 20,
            }}
          >
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg,#ffffff 0%,rgba(255,255,255,0.88) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Hammad
            </span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg,#00d4ff 0%,#915eff 52%,#ff2d78 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 32px rgba(0,212,255,0.4))',
            }}>
              Ashraf
            </span>
          </motion.h1>

          {/* Typewriter row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              marginBottom: 24,
              background: 'rgba(0,212,255,0.05)',
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: 10, padding: '10px 18px',
              alignSelf: 'flex-start',
            }}
            className="hero-typewriter-row"
          >
            <span style={{
              fontSize: 'clamp(0.82rem,1.8vw,1.05rem)',
              color: 'rgba(255,255,255,0.4)', fontWeight: 400, whiteSpace: 'nowrap',
            }}>
              I build
            </span>
            <span style={{
              fontSize: 'clamp(0.9rem,2vw,1.12rem)',
              color: '#00d4ff', fontWeight: 700,
              minWidth: 'clamp(140px,18vw,230px)',
              letterSpacing: '0.01em',
            }}>
              {displayed}
              <span className="animate-blink" style={{
                display: 'inline-block', width: 2, height: '1em',
                background: '#00d4ff', marginLeft: 3, verticalAlign: 'middle',
                borderRadius: 2,
              }} />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            style={{
              color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.88rem,1.5vw,1rem)',
              lineHeight: 1.8, maxWidth: 480, marginBottom: 38,
            }}
          >
            Passionate about building modern, performant web apps with{' '}
            <span style={{ color: '#61dafb', fontWeight: 600 }}>React.js</span>,{' '}
            <span style={{ color: '#915eff', fontWeight: 600 }}>Node.js</span>,{' '}
            <span style={{ color: '#ff2d78', fontWeight: 600 }}>MongoDB</span>, and expert{' '}
            <span style={{ color: '#00d4ff', fontWeight: 600 }}>WordPress</span> development.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}
            className="hero-btns"
          >
            {/* Primary */}
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                position: 'relative', overflow: 'hidden',
                background: 'linear-gradient(135deg,#00d4ff 0%,#7928ca 100%)',
                color: '#fff', border: 'none',
                padding: '14px 32px', borderRadius: 50,
                fontSize: '0.92rem', fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 24px rgba(0,212,255,0.32), 0 0 0 1px rgba(0,212,255,0.2)',
                transition: 'all .3s ease', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,212,255,0.5), 0 0 0 1px rgba(0,212,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,212,255,0.32), 0 0 0 1px rgba(0,212,255,0.2)';
              }}
            >
              View My Work <FaArrowRight size={13} />
            </button>

            {/* Secondary */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                color: 'rgba(255,255,255,0.88)',
                border: '1px solid rgba(255,255,255,0.14)',
                padding: '14px 32px', borderRadius: 50,
                fontSize: '0.92rem', fontWeight: 600,
                transition: 'all .3s ease', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.45)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,212,255,0.14)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.88)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Contact Me
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 24, alignSelf: 'flex-start' }}
            className="hero-divider"
          />

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}
            className="hero-tech"
          >
            {TECH.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.07, type: 'spring', stiffness: 200 }}
                whileHover={{ y: -3, borderColor: tech.color }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${tech.color}30`,
                  borderRadius: 8, padding: '6px 13px',
                  fontSize: '0.72rem', fontWeight: 700, color: tech.color,
                  transition: 'all .22s ease',
                }}
              >
                <tech.Icon size={13} />
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ════════════════ RIGHT ════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}
        >

          {/* ── Profile image with rings ── */}
          <div className="hero-image-size" style={{ position: 'relative', width: 380, height: 380 }}>

            {/* Outer glow */}
            <div style={{
              position: 'absolute', inset: -30, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 65%)',
              filter: 'blur(20px)',
            }} />

            {/* Spinning ring 1 */}
            <div className="animate-spin-slow" style={{
              position: 'absolute', inset: -18, borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #00d4ff 0%, #7928ca 40%, #ff2d78 70%, #00d4ff 100%)',
              opacity: 0.6,
            }} />
            <div style={{ position: 'absolute', inset: -16, borderRadius: '50%', background: '#050816' }} />

            {/* Spinning ring 2 */}
            <div className="animate-spin-reverse" style={{
              position: 'absolute', inset: -8, borderRadius: '50%',
              background: 'conic-gradient(from 90deg, transparent 0%, #915eff 25%, transparent 55%, #00d4ff 80%, transparent 100%)',
              opacity: 0.75,
            }} />
            <div style={{ position: 'absolute', inset: -6, borderRadius: '50%', background: '#050816' }} />

            {/* Photo */}
            <div
              ref={imgRef}
              onMouseMove={onImgMove}
              onMouseLeave={onImgLeave}
              style={{
                position: 'relative', width: '100%', height: '100%',
                borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(0,212,255,0.2)',
                boxShadow: '0 0 50px rgba(0,212,255,0.15), 0 0 100px rgba(145,94,255,0.08)',
                transition: 'transform .28s ease', zIndex: 1,
              }}
            >
              <img
                src={profile} alt="Hammad Ashraf"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
              {/* Subtle inner overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, rgba(5,8,22,0.35) 100%)',
              }} />
            </div>

            {/* Dashed orbit ring */}
            <div style={{
              position: 'absolute', inset: -38, borderRadius: '50%',
              border: '1px dashed rgba(0,212,255,0.12)',
              animation: 'spin-slow 30s linear infinite',
            }} />
          </div>

          {/* ── Stats row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              display: 'flex', gap: 1,
              background: 'rgba(1,7,18,0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,212,255,0.1)',
              borderRadius: 18, overflow: 'hidden',
              width: '100%', maxWidth: 360,
            }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                flex: 1, textAlign: 'center',
                padding: '16px 12px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontSize: '1.5rem', fontWeight: 900,
                  background: 'linear-gradient(135deg,#00d4ff,#915eff)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  lineHeight: 1, marginBottom: 4,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.42)', fontWeight: 500, letterSpacing: '0.06em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Responsive style for typewriter row */}
      <style>{`
        @media (max-width: 900px) {
          .hero-typewriter-row { align-self: center !important; }
          .hero-divider { align-self: center !important; }
        }
      `}</style>
    </section>
  );
}
