/* src/Components/SkillBar.jsx */
import React from "react";

export default function SkillBar({ name, level }) {
  const pct = Math.min(Math.max(level, 0), 100);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-sm font-semibold tracking-wide text-white">{name}</h4>
        <span className="text-xs text-white/70">{pct}%</span>
      </div>

      <div
        className="h-2 w-full rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div
          className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-fuchsia-500 transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
           style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), #fb923c33, transparent 40%)" }} />
    </div>
  );
}
