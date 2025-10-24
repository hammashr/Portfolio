import React from "react";

/* ---------- Import images (Vite-friendly) ---------- */
// Try importing images differently
import hqsr1 from "../assets/hqsr1.webp";
import hqsr2 from "../assets/hqsr2.webp";
import hqsrmain from "../assets/hqsrmain.webp";
import stp1 from "../assets/stp1.webp";
import stp2 from "../assets/stp2.webp";
import stp3 from "../assets/stp3.webp";
import SkyPulse1 from "../assets/SkyPulse1.png";
import SkyPulse2 from "../assets/SkyPulse2.png";
import SkyPulse3 from "../assets/SkyPulse3.png";
import courses from "../assets/courses.png";
import lms1 from "../assets/lms1.png";
import dashboard from "../assets/dashboard.png";

/* ---------- Project Data ---------- */
const project = [
  {
    title: "TeachGen LMS",
    description:
      "TeachGen LMS is a WordPress-based learning management system built using the Astra theme and powered by the Tutor LMS plugin. It offers modern navigation, a fast and responsive design, and complete eLearning functionality including course creation, quizzes, student dashboards, and progress tracking. The project showcases a professional LMS solution that is both scalable and user-friendly.",
    tags: ["WordPress", "Astra Theme", "Tutor LMS", "PHP", "MySQL"],
    live: "https://teachgen.free.nf/",
    repo: "#",
    images: [courses, lms1, dashboard],
  },
  {
    title: "Smart Task Planner",
    description:
      "A full-stack task management system with authentication, priority handling, task categories, and dark/light mode support.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    repo: "https://github.com/Talha-Swati/Smart-Task-Planner.git",
    live: "#",
    images: [stp1, stp2, stp3],
  },
  {
    title: "SkyPulse",
    description:
      "SkyPulse is a modern weather forecasting web app designed with an intuitive UI and real-time API integration. It features a 'Use My Location' button to instantly fetch the user’s local weather, an hourly chart for precise forecasts, elegant 5-day forecast cards, and a unit toggle to seamlessly switch between Celsius and Fahrenheit. The background dynamically adapts its gradient colors based on live weather conditions—for example, a light bluish gradient for clear skies or gray tones for rainy weather—delivering both functionality and aesthetic appeal.",
    tags: ["React.js", "Node.js", "Weather API", "TailwindCSS"],
    repo: "https://github.com/Talha-Swati/SkyPulse.git",
    live: "https://sky-pulse-five.vercel.app/",
    images: [SkyPulse1, SkyPulse2, SkyPulse3],
  },
];


/* ---------- Small tag pill ---------- */
function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85">
      {children}
    </span>
  );
}

/* ---------- Preview grid (3 images) ---------- */
function TriplePreview({ shots = [] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {shots.slice(0, 3).map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20"
        >
          <img
            src={src}
            alt={`Preview ${i + 1}`}
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52 md:h-56"
            onError={(e) => {
              console.error(`Failed to load image: ${src}`);
              // Show placeholder on error
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            onLoad={() => console.log(`Image loaded: ${src}`)}
          />
          {/* Placeholder for failed images */}
          <div 
            className="h-44 w-full bg-gray-700 border-2 border-dashed border-gray-500 rounded-xl flex items-center justify-center text-gray-400 text-sm sm:h-52 md:h-56"
            style={{ display: 'none' }}
          >
            Image not found
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
        </div>
      ))}
    </div>
  );
}

/* ---------- Project Card ---------- */
function ProjectCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/40 hover:bg-white/10">
      {/* bottom glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[160%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 100%, rgba(249,115,22,0.55) 0%, rgba(168,85,247,0.35) 40%, transparent 70%)",
        }}
      />

      <div className="relative grid gap-6 md:grid-cols-2">
        {/* Left: Screenshots */}
        <TriplePreview shots={item.images} />

        {/* Right: Details */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-white/80">{item.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={item.live}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:brightness-110"
            >
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Live
            </a>
            <a
              href={item.repo}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-orange-400/50 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.62.07-.62 1.02.07 1.55 1.06 1.55 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.78 1.05.81-.23 1.68-.34 2.55-.34.87 0 1.75.11 2.56.34 1.93-1.33 2.77-1.05 2.77-1.05.55 1.42.21 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.55 5.06.36.31.68.93.68 1.88 0 1.36-.01 2.45-.01 2.78 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- Main Page ---------- */
export default function Project() {
  return (
    <section
      id="project"
      className="relative mx-auto max-w-7xl px-6 py-20 text-white"
    >
      {/* ornaments */}
      <div className="pointer-events-none absolute -top-28 -left-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      {/* header */}
      <p className="text-xs uppercase tracking-[0.25em] text-white/60">
        My Projects
      </p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Selected Work
        </span>
      </h2>
      <p className="mt-4 max-w-3xl text-white/80">
        A collection of projects showcasing both WordPress mastery and MERN
        development — combining speed, usability, and clean visual design.
      </p>

      {/* cards */}
      <div className="mt-10 space-y-8">
        {project.map((p) => (
          <ProjectCard key={p.title} item={p} />
        ))}
      </div>
    </section>
  );
}
