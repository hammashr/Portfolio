/* src/Pages/Home.jsx */
import React, { useRef } from "react";
import SkillBar from "../Components/SkillBar.jsx";
import profile from "../assets/hmddp.jpg"; // ← replace with your image

export default function Home() {
  const glowRef = useRef(null);

  // move the glow with the cursor for cards inside this section
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  const skills = [
    { name: "WordPress", level: 80 },
    { name: "React.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Express.js", level: 65 },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      ref={glowRef}
      className="
        relative isolate min-h-screen w-full overflow-hidden
        bg-gradient-to-b from-[#0b0f14] via-[#0b0f14] to-[#09060d]
        text-white
      "
    >
      {/* gradient ornaments */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-700/30 via-purple-700/25 to-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-orange-500/25 via-amber-400/20 to-purple-700/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* BIO / HERO */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* left: circular image */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-square w-full">
              <img
                src={profile}
                alt="Profile"
                className="h-full w-full rounded-full object-cover ring-4 ring-white/10 z-10"
              />
              {/* ring gradient */}
              <span
                className="pointer-events-none absolute inset-0 -z-10 rounded-full ring-8 ring-transparent
                [background:conic-gradient(from_0deg,theme(colors.orange.400),theme(colors.fuchsia.500),theme(colors.purple.600),theme(colors.orange.400))]
                [-webkit-mask:linear-gradient(#000,_#000)_content-box,linear-gradient(#000,_#000)]
                [-webkit-mask-composite:xor] [mask-composite:exclude] p-1"
              />
            </div>
          </div>

          {/* right: text */}
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/60">
              Frontend • MERN • WordPress
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-orange-400 to-fuchsia-500 bg-clip-text text-transparent">
                Hammad Ashraf
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              I build modern, performant web apps and CMS-driven sites. My
              stack:
              <span className="text-white"> React.js</span>,{" "}
              <span className="text-white">Tailwind CSS</span>,{" "}
              <span className="text-white">Express.js</span>,{" "}
              <span className="text-white">MongoDB</span>, and expert{" "}
              <span className="text-white">WordPress</span> development. I love
              clean UI, accessibility, and SEO-friendly builds.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/projects"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-orange-400/40 hover:bg-white/10"
              >
                View Work
              </a>
              <a
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-orange-500 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:brightness-110"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-wide">Skills</h2>
            <span className="text-xs text-white/60">*values are indicative</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </div>

      {/* curved top border for next section feel */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/40" />
    </section>
  );
}
