import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import tinyEscape from '../assets/thetinyescape.png';
import zentredge from '../assets/zentredge.png';
import alphaTango from '../assets/at-drone.png';
import courses from '../assets/courses.png';
import stp1 from '../assets/stp1.webp';
import sky1 from '../assets/SkyPulse1.png';

const FEATURED = [
  {
    id: 1,
    title: 'The Tiny Escape',
    tagline: 'Hotel Booking System',
    desc: 'The Tiny Escape is a full-stack hotel booking system with a dedicated reservation section. Complete frontend and backend were developed, tested extensively, optimized for SEO, and deployed using GitHub Pages and a Hostinger VPS.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    img: tinyEscape,
    live: 'https://www.thetinyescape.com',
  },
  {
    id: 2,
    title: 'Zentredge',
    tagline: 'MERN Software Agency',
    desc: 'Zentredge is a full-stack MERN website for a software development company. Implemented comprehensive technical SEO and page-speed optimizations, then deployed at zentredge.com.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    img: zentredge,
    live: 'https://www.zentredge.com',
  },
  {
    id: 3,
    title: 'Alpha Tango Drone Services',
    tagline: 'Corporate Website',
    desc: 'A corporate website for Alpha Tango Drone Services showcasing aviation certifications, training, and service offerings with clear navigation and strong calls to action.',
    tech: ['WordPress', 'WooCommerce', 'Fox LMS', 'PHP', 'Elementor'],
    img: alphaTango,
    live: 'https://at-drone.com/',
  },
];

const EXTRA = [
  {
    id: 4,
    title: 'TeachGen LMS',
    tagline: 'eLearning Platform',
    desc: 'Modern WordPress-based Learning Management System with course creation, quizzes, student dashboards, and real-time progress tracking.',
    tech: ['WordPress', 'Tutor LMS', 'PHP', 'MySQL', 'Astra'],
    img: courses,
    live: 'https://teachgen.free.nf/',
  },
  {
    id: 5,
    title: 'Smart Task Planner',
    tagline: 'Full-Stack SaaS',
    desc: 'Feature-rich task management system with JWT authentication, priority handling, categories, and dark / light mode support.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind'],
    img: stp1,
    live: 'https://github.com/Talha-Swati/Smart-Task-Planner.git',
  },
  {
    id: 6,
    title: 'SkyPulse',
    tagline: 'Weather App',
    desc: 'Real-time weather forecasting with geolocation, hourly charts, 5-day forecasts, C/F toggle, and dynamic gradient backgrounds.',
    tech: ['React.js', 'Node.js', 'Weather API', 'Tailwind'],
    img: sky1,
    live: 'https://sky-pulse-five.vercel.app/',
  },
];

function Card({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(10,14,28,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${hovered ? 'rgba(0,212,255,0.35)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 18,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color .3s ease, box-shadow .3s ease, transform .3s ease',
        boxShadow: hovered
          ? '0 8px 48px rgba(0,212,255,0.18), 0 2px 12px rgba(0,0,0,0.5)'
          : '0 4px 24px rgba(0,0,0,0.4)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 260, overflow: 'hidden', background: '#0a0f1e' }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'contain',
            transition: 'transform .5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(10,14,28,0.98) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: '28px 28px 30px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', flex: 1,
        }}
      >
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: 12, lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.855rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 22, flexGrow: 1 }}>
          {project.desc}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 26 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                background: 'transparent',
                border: '1px solid #00d4ff',
                borderRadius: 50,
                padding: '5px 14px',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#00d4ff',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            background: hovered ? 'linear-gradient(135deg,#00d4ff,#0099cc)' : '#00d4ff',
            color: '#050816',
            fontWeight: 700,
            fontSize: '0.875rem',
            padding: '12px 36px',
            borderRadius: 8,
            textDecoration: 'none',
            transition: 'background .3s ease, box-shadow .3s ease',
            boxShadow: hovered ? '0 0 24px rgba(0,212,255,0.5)' : '0 0 10px rgba(0,212,255,0.2)',
          }}
        >
          View Live Project
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#00d4ff' }}>
            Featured Projects
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', marginTop: 10 }}>
            Explore selected work and recent client projects
          </p>
          <div
            style={{
              width: 56, height: 3,
              background: 'linear-gradient(90deg,#00d4ff,#915eff)',
              margin: '18px auto 0', borderRadius: 2,
            }}
          />
        </motion.div>

        {/* Featured 3 */}
        <div
          className="projects-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}
        >
          {FEATURED.map((p, i) => <Card key={p.id} project={p} index={i} />)}
        </div>

        {/* Extra 3 — animated reveal */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              key="extra"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginTop: 28 }}
              >
                {EXTRA.map((p, i) => <Card key={p.id} project={p} index={i} />)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#00d4ff',
              color: '#050816',
              fontWeight: 700, fontSize: '1rem',
              padding: '14px 42px', borderRadius: 8,
              border: 'none', cursor: 'pointer',
              boxShadow: '0 0 18px rgba(0,212,255,0.3)',
              transition: 'box-shadow .3s ease, transform .3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 36px rgba(0,212,255,0.55)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 18px rgba(0,212,255,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {showAll ? 'View Less Projects ↑' : 'View All Projects →'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
