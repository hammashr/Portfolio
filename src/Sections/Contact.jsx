import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const CONTACTS = [
  {
    Icon: FaEnvelope,
    label: 'Email',
    value: 'hammad2291@gmail.com',
    href: 'mailto:hammad2291@gmail.com',
    color: '#00d4ff',
    sub: 'Usually reply within 4 hours',
  },
  {
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+92 312 2497505',
    href: 'https://wa.me/923122497505',
    color: '#25d366',
    sub: 'Mon – Sat · 9:00 – 18:00 PKT',
  },
  {
    Icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'hammad-ashraf-',
    href: 'https://www.linkedin.com/in/hammad-ashraf-',
    color: '#0a66c2',
    sub: "Let's connect professionally",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 350,
        background: 'radial-gradient(ellipse at center bottom,rgba(0,212,255,0.07) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ff2d78', fontWeight: 700 }}>
            GET IN TOUCH
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 900, marginTop: 10, marginBottom: 18,
            background: 'linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.72) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Let's Work Together
          </h2>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg,#ff2d78,#915eff)', margin: '0 auto 32px', borderRadius: 2 }} />
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 60px' }}>
            Have a project in mind? I'd love to hear about it. Reach out via any channel below and let's create something amazing together.
          </p>
        </motion.div>

        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginBottom: 52 }}
        >
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 20px 55px ${c.color}25` }}
              style={{
                background: 'rgba(1,7,18,0.7)', backdropFilter: 'blur(20px)',
                border: `1px solid ${c.color}1e`, borderRadius: 20, padding: '32px 22px',
                textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden',
                transition: 'all .3s ease',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: '10%', width: '80%', height: 1,
                background: `linear-gradient(90deg,transparent,${c.color}80,transparent)`,
              }} />

              <div style={{
                width: 58, height: 58, borderRadius: 16,
                background: `${c.color}14`, border: `1px solid ${c.color}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px', boxShadow: `0 0 18px ${c.color}1c`,
              }}>
                <c.Icon size={24} color={c.color} />
              </div>

              <div style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.color, marginBottom: 7 }}>
                {c.label}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'rgba(255,255,255,0.88)', marginBottom: 5, wordBreak: 'break-all' }}>
                {c.value}
              </div>
              <div style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.38)' }}>{c.sub}</div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)' }}
        >
          For fastest response, use Email or WhatsApp.
        </motion.p>
      </div>
    </section>
  );
}
