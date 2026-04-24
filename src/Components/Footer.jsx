import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const LINKS = [
  { name: 'Home',     id: 'hero' },
  { name: 'About',    id: 'about' },
  { name: 'Skills',   id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Services', id: 'services' },
  { name: 'Contact',  id: 'contact' },
];

const SOCIALS = [
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/hammad-ashraf-', label: 'LinkedIn', color: '#0a66c2' },
  { Icon: FaWhatsapp,   href: 'https://wa.me/923122497505',                  label: 'WhatsApp', color: '#25d366' },
  { Icon: FaGithub,     href: 'https://github.com/hammashr',                  label: 'GitHub',   color: '#e6edf3' },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.055)', padding: '48px 24px 32px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div className="footer-inner" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, marginBottom: 36 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div
                style={{
                  width: 50, height: 50, borderRadius: '50%',
                  border: '2px solid #00d4ff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,212,255,0.07)',
                  boxShadow: '0 0 18px rgba(0,212,255,0.28)',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#00d4ff' }}>HA</span>
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>Hammad</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#00d4ff' }}>Ashraf</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.85rem', maxWidth: 260, lineHeight: 1.7 }}>
              WordPress & Frontend Developer crafting modern, performant web experiences.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {SOCIALS.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none', transition: 'all .25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}60`;
                    e.currentTarget.style.background  = `${color}15`;
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 0 14px ${color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                    e.currentTarget.style.background  = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-center" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 14 }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
              {LINKS.map(({ name, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', transition: 'color .2s ease', display: 'block' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 14 }}>
              Contact
            </h4>
            <a href="mailto:hammad2291@gmail.com" style={{ display: 'block', color: '#00d4ff', fontSize: '0.88rem', marginBottom: 6, textDecoration: 'none' }}>
              hammad2291@gmail.com
            </a>
            <a href="https://wa.me/923122497505" target="_blank" rel="noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', textDecoration: 'none' }}>
              +92 312 2497505
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,212,255,0.18),transparent)', marginBottom: 24 }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} Hammad Ashraf · All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.22)' }}>
            Designed & built with passion ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
