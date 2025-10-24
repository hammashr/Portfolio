// src/Pages/About.jsx
import React from "react";

const certifications = [
  // Degree (from your provided data)
  {
    title:
      "Bachelor's in Computer Science — Comsats University Islamabad, Wah Campus, Pakistan",
    link: "#",
    icon: "degree",
  },

  // Certifications (from your provided data)
  {
    title: "WordPress Development Certification (Completed March 2024)",
    link: "#",
    icon: "badge",
  },
  {
    title: "Advanced React.js Development Course (Completed Feb 2024)",
    link: "#",
    icon: "badge",
  },
  {
    title: "Frontend Web Development by FreeCodeCamp",
    link: "#",
    icon: "badge",
  },
  {
    title: "Responsive Web Design Certification",
    link: "#",
    icon: "badge",
  },
];

// tiny inline icons (no external deps)
function Icon({ name, className = "h-5 w-5" }) {
  if (name === "degree") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 11L5.21 9 12 5.5 18.79 9 12 14z" />
      </svg>
    );
  }
  if (name === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M10 4h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2Zm4 3V6h-4v1h4Z" />
      </svg>
    );
  }
  // default badge
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Zm0 2.18L19 7v5c0 3.58-4.38 7.12-7 8.8-2.62-1.68-7-5.22-7-8.8V7l7-2.82ZM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

function CertCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px]">
      {/* bottom-focused glow on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-30%] h-[140%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(249,115,22,0.6) 0%, rgba(217,70,239,0.35) 40%, transparent 70%)",
        }}
      />
      <div className="relative flex items-start gap-3">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white/90">
          <Icon name={item.icon} className="h-5 w-5" />
        </div>
        <p className="text-sm leading-relaxed text-white/85">{item.title}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      {/* soft background ornaments */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      {/* meta heading */}
      <p className="text-xs uppercase tracking-[0.25em] text-white/60">
        About me
      </p>

      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      {/* intro text */}
      <p className="mt-4 max-w-3xl text-white/80">
        I'm a skilled <span className="text-white">WordPress</span> and{" "}
        <span className="text-white">Frontend Developer</span> passionate about
        creating fast, responsive, and visually appealing web experiences. I
        specialize in custom WordPress solutions and modern frontend
        technologies, focusing on clean code, usability, and websites that
        perform flawlessly across all devices.
      </p>

      {/* Mission & Vision cards */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10">
          <div
            className="absolute inset-x-0 bottom-[-40%] h-[150%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 100%, rgba(168,85,247,0.6) 0%, rgba(236,72,153,0.35) 40%, transparent 70%)",
            }}
          />
          <div className="relative">
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-white/80">
              Build performant, accessible, and beautiful websites that solve
              real business problems. I aim to combine clean engineering with
              thoughtful UX so every product feels fast, intuitive, and brand-true.
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10">
          <div
            className="absolute inset-x-0 bottom-[-40%] h-[150%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 100%, rgba(249,115,22,0.6) 0%, rgba(217,70,239,0.35) 40%, transparent 70%)",
            }}
          />
          <div className="relative">
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="mt-2 text-sm text-white/80">
              Create digital experiences that feel effortless on every device,
              empower creators and businesses, and push the web toward elegant,
              inclusive design—with WordPress and the modern MERN toolchain.
            </p>
          </div>
        </div>
      </div>

      {/* Education and Certifications */}
      <div className="mt-14">
        {/* heading */}
        <p className="text-xs uppercase tracking-[0.25em] text-white/60">
          Credentials
        </p>
        <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h3>

        <div className="mt-6 grid gap-4">
          {certifications.map((c) => (
            <CertCard key={c.title} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
