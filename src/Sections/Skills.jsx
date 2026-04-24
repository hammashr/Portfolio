import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaWordpress, FaReact, FaNodeJs, FaLayerGroup, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

/* ── Expertise cards ── */
const EXPERTISE = [
  {
    Icon: FaLayerGroup,
    title: 'Full Stack Web Developer',
    subtitle: 'MERN Stack',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.18)',
    desc: 'End-to-end web apps with MongoDB, Express.js, React.js & Node.js — from database design to deployed UI.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    startAngle: -18,
  },
  {
    Icon: FaBrain,
    title: 'AI Automation',
    subtitle: 'Build AI Agents',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.18)',
    desc: 'Designing and building intelligent AI agents, workflow automation, and LLM-powered web integrations.',
    tags: ['AI Agents', 'LLM APIs', 'Automation', 'Prompt Eng.'],
    startAngle: 0,
  },
  {
    Icon: FaWordpress,
    title: 'WordPress Expert',
    subtitle: 'Themes · Plugins · WooCommerce',
    color: '#21a0c4',
    glow: 'rgba(33,160,196,0.18)',
    desc: 'Custom WordPress themes, child themes, page builders, WooCommerce stores, speed & SEO optimisation.',
    tags: ['Custom Themes', 'WooCommerce', 'Elementor', 'SEO'],
    startAngle: 18,
  },
];

/* ── Proficiency rings ── */
const MAIN = [
  { name: 'WordPress', pct: 85, color: '#21a0c4', glow: 'rgba(33,160,196,0.5)',  Icon: FaWordpress },
  { name: 'React.js',  pct: 80, color: '#61dafb', glow: 'rgba(97,218,251,0.5)',   Icon: FaReact },
  { name: 'AI / LLM',  pct: 75, color: '#a855f7', glow: 'rgba(168,85,247,0.5)',   Icon: FaBrain },
  { name: 'Node.js',   pct: 75, color: '#68a063', glow: 'rgba(104,160,99,0.5)',   Icon: FaNodeJs },
  { name: 'MongoDB',   pct: 70, color: '#47a248', glow: 'rgba(71,162,72,0.5)',    Icon: SiMongodb },
  { name: 'Express.js',pct: 65, color: '#c0c0c0', glow: 'rgba(192,192,192,0.4)', Icon: SiExpress },
];

const OTHER = [
  'HTML5','CSS3','JavaScript','TypeScript','Tailwind CSS',
  'REST APIs','Git & GitHub','Figma','PHP','MySQL',
  'Elementor','WooCommerce','Vite','Framer Motion','n8n',
  'OpenAI API','LangChain','Prompt Engineering',
];

/* ══════════════════════════════════════════
   Hanging Card component
══════════════════════════════════════════ */
const ROPE_H = 72;

function HangingCard({ ex, i }) {
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) return;

    const sa = ex.startAngle;
    // Damped pendulum: big swing → smaller → settle → idle sway
    controls.start({
      rotate: [sa, -sa * 0.55, sa * 0.28, -sa * 0.1, 0],
      transition: { duration: 2, ease: 'easeOut', delay: i * 0.22 },
    }).then(() => {
      controls.start({
        rotate: [-1.8, 1.8],
        transition: {
          duration: 3.8,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: i * 0.4,
        },
      });
    });
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: i * 0.22 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}
    >
      {/* ── Rope + pin ── */}
      <div style={{ position: 'relative', height: ROPE_H, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Pin / nail */}
        <div style={{
          width: 14, height: 14, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, #fff 0%, ${ex.color} 50%, ${ex.color}80 100%)`,
          boxShadow: `0 0 10px ${ex.color}, 0 0 24px ${ex.color}60`,
          flexShrink: 0, zIndex: 2,
          border: `1px solid ${ex.color}`,
        }} />

        {/* Rope SVG */}
        <svg
          width="4" height={ROPE_H - 14}
          style={{ display: 'block', marginTop: 0, filter: `drop-shadow(0 0 4px ${ex.color}80)` }}
        >
          <defs>
            <linearGradient id={`rope-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor={ex.color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={ex.color} stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <line
            x1="2" y1="0" x2="2" y2={ROPE_H - 14}
            stroke={`url(#rope-${i})`}
            strokeWidth="2"
            strokeDasharray="4 3"
          />
        </svg>
      </div>

      {/* ── Card (pendulum pivot = top center) ── */}
      <motion.div
        animate={controls}
        whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.3 } }}
        style={{
          transformOrigin: 'top center',
          width: '100%',
          cursor: 'default',
        }}
      >
        {/* Card glow ring at top */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', width: '80%', height: 2,
          background: `linear-gradient(90deg,transparent,${ex.color}90,transparent)`,
          borderRadius: 2,
        }} />

        <div style={{
          background: 'rgba(1,7,18,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${ex.color}28`,
          borderRadius: 20,
          padding: '28px 24px 24px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${ex.color}10`,
          transition: 'box-shadow 0.3s ease',
        }}>
          {/* Ambient glow inside card */}
          <div style={{
            position: 'absolute', top: '-40%', left: '-20%',
            width: '140%', height: '140%',
            background: `radial-gradient(circle at 50% 0%, ${ex.color}08, transparent 55%)`,
            pointerEvents: 'none',
          }} />

          {/* Icon + title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: `${ex.color}14`, border: `1px solid ${ex.color}28`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              boxShadow: `0 0 18px ${ex.glow}`,
            }}>
              <ex.Icon size={24} color={ex.color} />
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'rgba(255,255,255,0.95)', lineHeight: 1.2 }}>
                {ex.title}
              </div>
              <div style={{ fontSize: '0.72rem', color: ex.color, fontWeight: 600, marginTop: 3 }}>
                {ex.subtitle}
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.72, marginBottom: 18 }}>
            {ex.desc}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {ex.tags.map(t => (
              <span key={t} style={{
                background: `${ex.color}10`, border: `1px solid ${ex.color}28`,
                borderRadius: 6, padding: '4px 10px', fontSize: '0.7rem', fontWeight: 700, color: ex.color,
              }}>{t}</span>
            ))}
          </div>

          {/* Bottom accent */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg,transparent,${ex.color}60,transparent)`, opacity: 0.6,
          }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   Ring component
══════════════════════════════════════════ */
function Ring({ skill, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const r      = 62;
  const circ   = 2 * Math.PI * r;
  const { Icon } = skill;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.55 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}
    >
      <div style={{ position: 'relative', width: 160, height: 160 }}>
        <div style={{
          position: 'absolute', inset: -4, borderRadius: '50%',
          boxShadow: inView ? `0 0 28px ${skill.glow}` : 'none',
          transition: 'box-shadow 1.2s ease',
        }} />
        <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
          <motion.circle
            cx="80" cy="80" r={r}
            fill="none" stroke={skill.color} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ * (1 - skill.pct / 100) } : {}}
            transition={{ duration: 1.6, delay: index * 0.1, ease: 'easeOut' }}
            style={{ filter: `drop-shadow(0 0 5px ${skill.color})` }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
        }}>
          <Icon size={22} color={skill.color} style={{ filter: `drop-shadow(0 0 6px ${skill.color})` }} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.6 }}
            style={{ fontSize: '1.2rem', fontWeight: 900, color: skill.color, textShadow: `0 0 14px ${skill.glow}`, lineHeight: 1 }}
          >
            {skill.pct}%
          </motion.span>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3 }}>
          {skill.name}
        </div>
        <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.36)' }}>
          {skill.pct >= 80 ? 'Expert' : skill.pct >= 70 ? 'Advanced' : 'Proficient'}
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   Main Skills section
══════════════════════════════════════════ */
export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle,rgba(0,212,255,0.04) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#915eff', fontWeight: 700 }}>
            WHAT I KNOW
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 900, marginTop: 10,
            background: 'linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.72) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Skills & Expertise
          </h2>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg,#915eff,#ff2d78)', margin: '18px auto 0', borderRadius: 2 }} />
        </motion.div>

        {/* ── Rope bar across top ── */}
        <div style={{ position: 'relative', marginBottom: 0, marginTop: 36 }} className="skills-rope-wrapper">
          {/* Horizontal wire */}
          <div className="skills-rope-bar" style={{
            position: 'absolute',
            top: 6,
            left: '5%',
            width: '90%',
            height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3) 15%, rgba(168,85,247,0.5) 50%, rgba(33,160,196,0.3) 85%, transparent)',
            boxShadow: '0 0 10px rgba(0,212,255,0.2), 0 0 20px rgba(168,85,247,0.15)',
            borderRadius: 2,
            zIndex: 1,
          }} />

          {/* Wall anchors (left & right) */}
          {[{ left: '4.5%' }, { right: '4.5%' }].map((pos, idx) => (
            <div key={idx} className="skills-rope-bar" style={{
              position: 'absolute', top: 0, ...pos,
              width: 14, height: 14, borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #fff, #00d4ff 60%)',
              boxShadow: '0 0 10px #00d4ff, 0 0 24px rgba(0,212,255,0.5)',
              zIndex: 2, transform: 'translateY(-1px)',
            }} />
          ))}

          {/* Hanging cards grid */}
          <div
            className="services-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}
          >
            {EXPERTISE.map((ex, i) => (
              <HangingCard key={ex.title} ex={ex} i={i} />
            ))}
          </div>
        </div>

        {/* ── Proficiency rings ── */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center', fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)', marginBottom: 48, marginTop: 72,
          }}
        >
          Proficiency Levels
        </motion.h3>

        <div
          className="rings-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 24, justifyItems: 'center', marginBottom: 72 }}
        >
          {MAIN.map((s, i) => <Ring key={s.name} skill={s} index={i} />)}
        </div>

        {/* ── Also experienced with ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(1,7,18,0.6)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(145,94,255,0.18)', borderRadius: 22, padding: 36,
          }}
        >
          <h3 style={{
            fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)',
            marginBottom: 22, textAlign: 'center', letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Also experienced with
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {OTHER.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(0,212,255,0.55)', color: '#00d4ff' }}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 8, padding: '7px 15px', fontSize: '0.82rem', fontWeight: 500,
                  color: 'rgba(255,255,255,0.62)', transition: 'all .22s ease',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
