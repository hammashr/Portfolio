import React from 'react';
import './globals.css';

import CustomCursor from './Components/CustomCursor.jsx';
import GalaxyBackground from './Components/GalaxyBackground.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

import Hero from './Sections/Hero.jsx';
import About from './Sections/About.jsx';
import Skills from './Sections/Skills.jsx';
import Projects from './Sections/Projects.jsx';
import ClientsSlider from './Sections/ClientsSlider.jsx';
import Services from './Sections/Services.jsx';
import Contact from './Sections/Contact.jsx';

export default function App() {
  return (
    <div style={{ background: '#050816', minHeight: '100vh', position: 'relative' }}>
      <CustomCursor />
      <GalaxyBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <ClientsSlider />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
