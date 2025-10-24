// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./globals.css";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";

const App = () => {
  return (
    <Router>
      {/* Fixed navbar at top */}
      <Navbar />

      {/* Main content (pad-top so it doesn't hide under fixed navbar) */}
      <main className="pt-16 min-h-screen bg-[#0b0f14] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
