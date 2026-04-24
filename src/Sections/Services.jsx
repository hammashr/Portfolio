import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaWordpress, FaPalette, FaRobot, FaCode, FaBullhorn } from 'react-icons/fa';

const SERVICES = [
  {
    Icon: FaLaptopCode,
    title: 'Web Development',
    color: '#00d4ff',
    desc: 'Building fast, modern, and scalable web applications with clean code and great UX.',
    points: [
      'SPA/MPA builds with React + Vite',
      'Reusable components & state management',
      'REST API integration',
      'Performance & accessibility first',
    ],
  },
  {
    Icon: FaWordpress,
    title: 'WordPress Development',
    color: '#21a0c4',
    desc: 'Custom WordPress solutions tailored precisely to your business goals.',
    points: [
      'Custom themes & child themes',
      'Page builders & custom blocks',
      'Speed, security & on-page SEO',
      'WooCommerce & plugin setup',
    ],
  },
  {
    Icon: FaPalette,
    title: 'UI/UX Designing',
    color: '#915eff',
    desc: 'Creating beautiful, intuitive experiences that users love and remember.',
    points: [
      'Wireframes & user flows',
      'Design systems & tokens',
      'Responsive, accessible layouts',
      'Prototypes & developer handoff',
    ],
  },
  {
    Icon: FaRobot,
    title: 'AI Automation',
    color: '#f7971e',
    desc: 'Streamlining workflows with intelligent automation that saves time and reduces manual effort.',
    points: [
      'AI-powered workflow automation',
      'Chatbot & assistant integration',
      'Data processing & smart triggers',
      'OpenAI / LLM API integration',
    ],
  },
  {
    Icon: FaCode,
    title: 'Full Stack Development',
    color: '#43e97b',
    desc: 'End-to-end development covering both frontend and backend for complete, production-ready apps.',
    points: [
      'React frontend + Node.js backend',
      'Database design (SQL & NoSQL)',
      'RESTful & GraphQL APIs',
      'Deployment, CI/CD & DevOps basics',
    ],
  },
  {
    Icon: FaBullhorn,
    title: 'Digital Marketing',
    color: '#fd79a8',
    desc: 'Growing your brand online with data-driven strategies that attract, engage, and convert.',
    points: [
      'SEO & on-page optimisation',
      'Social media strategy & content',
      'Email campaigns & funnels',
      'Analytics, tracking & reporting',
    ],
  },
];

function ServiceCard({ s, i }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.13, duration: 0.6 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="services-flip-card"
      style={{
        perspective: '1000px',
        height: 340,
        cursor: 'pointer',
      }}
    >
      {/* Inner flipper */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.65s cubic-bezier(0.4,0.2,0.2,1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >

        {/* ── FRONT FACE ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'rgba(1,7,18,0.75)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${s.color}30`,
            borderRadius: 22,
            padding: '34px 26px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Ambient glow */}
          <div style={{
            position: 'absolute', top: '-60%', left: '-50%',
            width: '200%', height: '200%',
            background: `radial-gradient(circle at 50% 0%,${s.color}0d,transparent 60%)`,
            pointerEvents: 'none',
          }} />

          {/* Icon box */}
          <div style={{
            width: 60, height: 60, borderRadius: 16,
            background: `${s.color}18`, border: `1px solid ${s.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 20, boxShadow: `0 0 18px ${s.color}20`, flexShrink: 0,
          }}>
            <s.Icon size={26} color={s.color} />
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'rgba(255,255,255,0.95)', marginBottom: 10 }}>
            {s.title}
          </h3>
          <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.72 }}>
            {s.desc}
          </p>


          {/* Bottom accent line */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg,transparent,${s.color}90,transparent)`, opacity: 0.55,
          }} />
        </div>

        {/* ── BACK FACE ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${s.color}18 0%, rgba(1,7,18,0.92) 60%)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${s.color}50`,
            borderRadius: 22,
            padding: '34px 26px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Ambient glow back */}
          <div style={{
            position: 'absolute', bottom: '-40%', right: '-40%',
            width: '180%', height: '180%',
            background: `radial-gradient(circle at 80% 80%,${s.color}12,transparent 55%)`,
            pointerEvents: 'none',
          }} />

          <h3 style={{
            fontSize: '1.15rem', fontWeight: 800,
            color: s.color, marginBottom: 24,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            {s.title}
          </h3>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {s.points.map((pt, idx) => (
              <li
                key={pt}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  fontSize: '0.88rem', color: 'rgba(255,255,255,0.82)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: s.color, boxShadow: `0 0 8px ${s.color}`,
                  flexShrink: 0, marginTop: 5,
                }} />
                {pt}
              </li>
            ))}
          </ul>

          {/* Bottom accent line */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg,transparent,${s.color},transparent)`, opacity: 0.7,
          }} />
        </div>

      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00d4ff', fontWeight: 700 }}>
            WHAT I OFFER
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 900, marginTop: 10,
            background: 'linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.72) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            My Services
          </h2>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg,#00d4ff,#915eff)', margin: '18px auto 0', borderRadius: 2 }} />
        </motion.div>

        <div
          className="services-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26 }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
