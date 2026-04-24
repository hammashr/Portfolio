import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaReact, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const STATS = [
  { value: 15,  suffix: '+', label: 'Projects Completed' },
  { value: 2,   suffix: '+', label: 'Years Experience' },
  { value: 5,   suffix: '',  label: 'Certifications' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const CERTS = [
  { Icon: FaGraduationCap, title: "Bachelor's in Computer Science", sub: 'Comsats University Islamabad', color: '#00d4ff' },
  { Icon: FaTrophy,        title: 'WordPress Development Certification', sub: 'Completed March 2024', color: '#21a0c4' },
  { Icon: FaReact,         title: 'Advanced React.js Development', sub: 'Completed Feb 2024', color: '#61dafb' },
  { Icon: FaLaptopCode,    title: 'Frontend Web Development', sub: 'FreeCodeCamp', color: '#915eff' },
  { Icon: FaMobileAlt,     title: 'Responsive Web Design', sub: 'Certification', color: '#ff2d78' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let n = 0;
          const step = value / 60;
          const timer = setInterval(() => {
            n += step;
            if (n >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(n));
          }, 16);
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '15%', right: '-12%', width: 420, height: 420,
        background: 'radial-gradient(circle,rgba(121,40,202,0.09) 0%,transparent 70%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00d4ff', fontWeight: 700 }}>WHO AM I</span>
          <h2 style={{
            fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 900, marginTop: 10,
            background: 'linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.72) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>About Me</h2>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg,#00d4ff,#915eff)', margin: '18px auto 0', borderRadius: 2 }} />
        </motion.div>

        {/* Stats */}
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginBottom: 72 }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -5, borderColor: 'rgba(0,212,255,0.45)', boxShadow: '0 0 28px rgba(0,212,255,0.1)' }}
              style={{
                background: 'rgba(1,7,18,0.62)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20,
                padding: '28px 20px', textAlign: 'center', transition: 'all .3s ease',
              }}
            >
              <div style={{
                fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900,
                background: 'linear-gradient(135deg,#00d4ff,#915eff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                lineHeight: 1, marginBottom: 8,
              }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bio + Certs */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>

          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00d4ff', marginBottom: 18 }}>My Story</h3>
            <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.82, marginBottom: 14, fontSize: '0.97rem' }}>
              I'm a <strong style={{ color: '#00d4ff' }}>WordPress & Frontend Developer</strong> passionate about creating fast, responsive, and visually stunning web experiences. I specialize in custom WordPress solutions and modern frontend technologies.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.82, marginBottom: 14, fontSize: '0.97rem' }}>
              My focus is on clean code, usability, and websites that perform flawlessly across all devices. I combine creative design with technical expertise to deliver solutions that truly matter.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26 }}>
              {[
                { label: 'Mission', text: 'Build performant, accessible, and beautiful websites that solve real business problems.', color: '#00d4ff' },
                { label: 'Vision',  text: 'Create digital experiences that feel effortless on every device and empower creators.', color: '#915eff' },
              ].map((item) => (
                <div key={item.label} style={{
                  background: 'rgba(1,7,18,0.55)', backdropFilter: 'blur(16px)',
                  border: `1px solid ${item.color}1e`, borderLeft: `3px solid ${item.color}`,
                  borderRadius: '0 12px 12px 0', padding: '14px 18px',
                }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: item.color, marginBottom: 5, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{item.label}</div>
                  <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#915eff', marginBottom: 18 }}>Education & Certs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {CERTS.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  whileHover={{ x: 6, borderColor: `${c.color}50`, boxShadow: `0 0 18px ${c.color}15` }}
                  style={{
                    background: 'rgba(1,7,18,0.5)', backdropFilter: 'blur(16px)',
                    border: `1px solid ${c.color}18`, borderRadius: 13,
                    padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14,
                    transition: 'all .3s ease',
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: `${c.color}15`, border: `1px solid ${c.color}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <c.Icon size={18} color={c.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{c.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{c.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
