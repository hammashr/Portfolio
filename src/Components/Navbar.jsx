import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home',     id: 'hero' },
  { name: 'About',    id: 'about' },
  { name: 'Skills',   id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Services', id: 'services' },
  { name: 'Contact',  id: 'contact' },
];

export default function Navbar() {
  const [active,   setActive]   = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY <= 80) setOpen(false);
    };
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    const observers = NAV_LINKS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    /* ── Outer nav: always full-width fixed, never moves ── */
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: scrolled ? '12px 24px' : '0',
      transition: 'padding 0.45s cubic-bezier(0.4,0,0.2,1)',
      pointerEvents: 'none',           /* let clicks pass through the gap */
    }}>

      {/* ── Inner pill / full-bar — this is what animates ── */}
      <div style={{
        maxWidth: scrolled ? 860 : 1200,
        margin: '0 auto',
        borderRadius: scrolled ? 50 : 0,
        background: scrolled ? 'rgba(5,8,22,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(28px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(28px)' : 'none',
        border: scrolled ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(0,212,255,0.07)' : 'none',
        overflow: 'hidden',
        transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: 'auto',         /* re-enable clicks on the bar */
      }}>

        {/* ── Top bar row ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled
            ? (isMobile ? '10px 18px' : '10px 28px')
            : '18px 24px',
          transition: 'padding 0.45s cubic-bezier(0.4,0,0.2,1)',
        }}>

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }}
          >
            <div style={{
              width: scrolled ? 34 : 44,
              height: scrolled ? 34 : 44,
              borderRadius: '50%',
              border: '2px solid #00d4ff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,212,255,0.07)',
              boxShadow: '0 0 14px rgba(0,212,255,0.28)',
              flexShrink: 0,
              transition: 'all 0.45s ease',
            }}>
              <span style={{ fontSize: scrolled ? '0.72rem' : '0.85rem', fontWeight: 800, color: '#00d4ff', transition: 'font-size 0.45s ease' }}>
                HA
              </span>
            </div>
            {!scrolled && (
              <div style={{ lineHeight: 1.15, textAlign: 'left' }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Hammad</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#00d4ff' }}>Ashraf</div>
              </div>
            )}
          </button>

          {/* Desktop links */}
          {!isMobile && (
            <ul style={{ display: 'flex', gap: scrolled ? '26px' : '36px', listStyle: 'none', padding: 0, margin: 0, transition: 'gap 0.45s ease' }}>
              {NAV_LINKS.map(({ name, id }) => (
                <li key={id} style={{ position: 'relative' }}>
                  <button
                    onClick={() => scrollTo(id)}
                    style={{
                      background: 'none', border: 'none', padding: '4px 0',
                      fontSize: scrolled ? '0.82rem' : '0.875rem',
                      fontWeight: active === id ? 700 : 400,
                      color: active === id ? '#00d4ff' : 'rgba(255,255,255,0.65)',
                      textShadow: active === id ? '0 0 20px rgba(0,212,255,0.5)' : 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = active === id ? '#00d4ff' : 'rgba(255,255,255,0.65)'; }}
                  >
                    {name}
                    {active === id && (
                      <span style={{
                        position: 'absolute', bottom: -2, left: 0, right: 0,
                        height: 2,
                        background: 'linear-gradient(90deg,#00d4ff,#915eff)',
                        borderRadius: 2,
                      }} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.22)',
                borderRadius: 8, color: '#fff',
                padding: '7px 9px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
                transition: 'all 0.3s ease',
              }}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile dropdown */}
        {isMobile && (
          <div style={{
            maxHeight: open ? '400px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}>
            <div style={{
              borderTop: '1px solid rgba(0,212,255,0.1)',
              padding: '4px 20px 20px',
            }}>
              {NAV_LINKS.map(({ name, id }, i) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    width: '100%', textAlign: 'left',
                    background: 'none', border: 'none',
                    padding: '13px 4px',
                    color: active === id ? '#00d4ff' : 'rgba(255,255,255,0.72)',
                    fontSize: '0.95rem',
                    fontWeight: active === id ? 700 : 400,
                    borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {active === id && (
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 6px #00d4ff', flexShrink: 0 }} />
                  )}
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
