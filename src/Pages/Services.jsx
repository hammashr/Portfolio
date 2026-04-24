import React from "react";

const services = [
  {
    title: "Web Development",
    intro:
      "Modern, performant web apps with clean architecture and maintainable code.",
    points: [
      "SPA/MPA builds with React + Vite",
      "Reusable components & state management",
      "API integration (REST/JSON)",
      "Performance & accessibility first",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14H3V4Zm2 0v2h14V4H5Zm0 4v8h14V8H5Zm2 2h3v4H7v-4Zm5 0h5v2h-5v-2Zm0 3h5v2h-5v-2Z" />
      </svg>
    ),
  },
  {
    title: "WordPress Development",
    intro:
      "Custom themes, plugin setup, and SEO-friendly sites that are easy to manage.",
    points: [
      "Custom themes / child themes",
      "Page builders & custom blocks",
      "Speed, security & on-page SEO",
      "Migrations & hosting setup",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.47 2 12s4.48 10 10 10 10-4.47 10-10S17.52 2 12 2Zm7.7 10c0 2.48-1.15 4.69-2.95 6.13l2.02-5.57c.66-1.65.93-2.98.93-4.17 0-.17-.01-.34-.03-.51A7.96 7.96 0 0 1 19.7 12ZM12 4c1.76 0 3.37.58 4.67 1.55-.04.31-.06.64-.06 1 0 .98.18 2.09.72 3.47l.75 2.06-2.6 7.18A7.98 7.98 0 0 1 12 20c-.75 0-1.47-.1-2.16-.29l2.3-6.68c.4.02.76.06 1.08.06.39 0 .75-.03 1.1-.08l.05-.01-.47-1.29c-.33-.83-.46-1.51-.46-2.09 0-.38.07-.73.21-1.06-.32-.02-.65-.04-.99-.04-1.66 0-3.11.57-4.2 1.51a3.5 3.5 0 0 0-.11.88c0 .85.32 1.81.86 2.94l1.16 2.52-1.53 4.45A8 8 0 0 1 4.3 12C4.3 7.8 7.8 4.3 12 4Z" />
      </svg>
    ),
  },
  {
    title: "UI / UX Designing",
    intro:
      "Interfaces that look great and feel effortless across devices and screen sizes.",
    points: [
      "Wireframes & user flows",
      "Design systems & tokens",
      "Responsive, accessible layouts",
      "Prototypes & developer handoff",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4 3h16v4H4V3Zm0 6h16v12H4V9Zm2 2v8h12v-8H6Zm1.5 1.5h4v4h-4v-4Zm6 0H17v2h-3.5v-2Zm0 3.5H17v2h-3.5v-2Z" />
      </svg>
    ),
  },
];

function Check({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-white/85">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function ServiceCard({ s }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10">
      {/* bottom-focused glow on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-45%] h-[160%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 100%, rgba(249,115,22,0.55) 0%, rgba(168,85,247,0.35) 40%, transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white">
          {s.icon}
        </div>
        <h3 className="text-lg font-semibold">{s.title}</h3>
        <p className="mt-2 text-sm text-white/75">{s.intro}</p>

        <ul className="mt-4 space-y-2">
          {s.points.map((p) => (
            <Check key={p}>{p}</Check>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      {/* subtle background ornaments */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      {/* meta heading */}
      <p className="text-xs uppercase tracking-[0.25em] text-white/60">Services</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          What I Offer
        </span>
      </h2>
      <p className="mt-4 max-w-3xl text-white/80">
        I help brands and teams ship fast, beautiful, and user-centered products—from
        WordPress sites to custom web apps and thoughtful UI/UX.
      </p>

      {/* cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} s={s} />
        ))}
      </div>
    </section>
  );
}
