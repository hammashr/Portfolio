import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#1a1b20] via-[#241e2e] to-[#0e0e11] text-white border-t border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Left: Logo / About */}
          <div>
            <h3 className="text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Hammad 
              </span>
               Ashraf
            </h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Delivering <span className="text-white">Web Development</span>,{" "}
              <span className="text-white">WordPress</span>, and{" "}
              <span className="text-white">MERN</span> solutions that are modern,
              responsive, and SEO-optimized.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label} className="group relative w-max">
                  <a
                    href={link.href}
                    className="text-white/80 transition-colors duration-300 hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Socials */}
          <div className="md:ml-auto">
            <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
            <div className="flex gap-4">
              {["github", "linkedin", "instagram"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={icon}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-orange-400/50 hover:bg-white/10"
                >
                  <i
                    className={`fa-brands fa-${icon} text-lg text-white group-hover:text-orange-400`}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/70 md:flex md:items-center md:justify-between md:text-left">
          <p>© {year} Hammad Ashraf. All rights reserved.</p>
          <div className="mt-3 space-x-4 md:mt-0">
            <a href="#privacy" className="hover:text-orange-400 transition">
              Privacy Policy
            </a>
            <span className="text-white/30">|</span>
            <a href="#terms" className="hover:text-orange-400 transition">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
