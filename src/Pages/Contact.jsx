import React from "react";

const contacts = [
  {
    label: "Email",
    value: "hammad2291@gmail.com",
    href: "mailto:hammad2291@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
      </svg>
    ),
    sub: "I usually reply within 4 hours",
    glow: "rgba(168,85,247,0.55)", // purple
  },
  {
    label: "WhatsApp",
    value: "+92 312 2497505",
    href: "https://wa.me/923122497505",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.39 0 .06 5.33.06 11.96c0 2.11.55 4.17 1.6 6.01L0 24l6.2-1.63a12.07 12.07 0 0 0 5.82 1.49h.01c6.63 0 12-5.33 12-11.96 0-3.2-1.25-6.2-3.51-8.42ZM12.03 21.3h-.01a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-3.69.97.99-3.6-.24-.37a9.97 9.97 0 0 1-1.57-5.4c0-5.6 4.57-10.16 10.19-10.16 2.72 0 5.28 1.05 7.21 2.96a10.06 10.06 0 0 1 3 7.19c0 5.6-4.57 10.16-10.31 10.16Zm5.81-7.58c-.32-.16-1.9-.93-2.19-1.03-.29-.1-.5-.16-.72.16-.21.32-.83 1.02-1.02 1.23-.19.21-.38.24-.7.08-.32-.16-1.33-.49-2.54-1.56-.94-.8-1.57-1.79-1.75-2.1-.18-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.06-.41-.03-.57-.08-.16-.72-1.72-.98-2.36-.26-.63-.52-.55-.72-.56h-.62c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2.02 3.1 4.88 4.35 1.82.78 2.53.85 3.44.72.55-.09 1.9-.78 2.17-1.54.26-.76.26-1.41.18-1.54-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    ),
    sub: "Mon–Sat · 9:00–18:00 PKT",
    glow: "rgba(34,197,94,0.55)", // green-ish
  },
  {
    label: "LinkedIn",
    value: "hammad-ashraf-",
    href: "https://www.linkedin.com/in/hammad-ashraf-",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M6.94 7.5A1.94 1.94 0 1 1 6.94 3.62 1.94 1.94 0 0 1 6.94 7.5zM4.98 8.98H8.9V20H4.98V8.98zM13.16 8.98h3.77v1.5h.05c.52-.98 1.8-2.02 3.7-2.02 3.95 0 4.68 2.6 4.68 5.97V20h-3.92v-5.4c0-1.29-.03-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V20h-3.92V8.98z" />
      </svg>
    ),
    sub: "Let’s connect professionally",
    glow: "rgba(59,130,246,0.55)", // blue-ish
  },
  {
    label: "Instagram",
    value: "@your_instagram",
    href: "#", // <-- update to your real handle when ready
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 7.35A4.65 4.65 0 1 0 12 16.65 4.65 4.65 0 1 0 12 7.35zm0 7.65a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.8-7.92a1.08 1.08 0 1 1 0-2.16 1.08 1.08 0 0 1 0 2.16zM12 2c3.2 0 3.58.01 4.85.07 1.26.06 2.12.26 2.86.55.77.3 1.42.7 2.07 1.35.65.65 1.05 1.3 1.35 2.07.29.74.49 1.6.55 2.86.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.26-.26 2.12-.55 2.86a5.07 5.07 0 0 1-2.07 1.35 5.07 5.07 0 0 1-2.07 1.35c-.74.29-1.6.49-2.86.55-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.26-.06-2.12-.26-2.86-.55a5.07 5.07 0 0 1-2.07-1.35 5.07 5.07 0 0 1-1.35-2.07c-.29-.74-.49-1.6-.55-2.86C2.01 15.58 2 15.2 2 12s.01-3.58.07-4.85c.06-1.26.26-2.12.55-2.86A5.07 5.07 0 0 1 4 2.22a5.07 5.07 0 0 1 2.07-1.35c.74-.29 1.6-.49 2.86-.55C8.2 2.01 8.58 2 11.78 2H12z" />
      </svg>
    ),
    sub: "Lifestyle & snippets",
    glow: "rgba(236,72,153,0.55)", // pink
  },
];

function Card({ item }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-400/40 hover:bg-white/10"
    >
      {/* bottom-focused glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-45%] h-[160%] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{
          background: `radial-gradient(70% 60% at 50% 100%, ${item.glow} 0%, rgba(168,85,247,0.35) 40%, transparent 70%)`,
        }}
      />
      <div className="relative flex items-start gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white">
          {item.icon}
        </div>
        <div>
          <h3 className="text-base font-semibold">{item.label}</h3>
          <p className="text-sm text-white/80">{item.value}</p>
          {item.sub && <p className="mt-1 text-xs text-white/60">{item.sub}</p>}
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      {/* ornaments */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      {/* header */}
      <p className="text-xs uppercase tracking-[0.25em] text-white/60">Contact</p>
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Let’s work together
        </span>
      </h1>
      <p className="mt-4 max-w-2xl text-white/80">
        Reach out via email or message me on WhatsApp/LinkedIn. I’m quick to respond and happy to discuss your project.
      </p>

      {/* cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <Card key={c.label} item={c} />
        ))}
      </div>

      {/* small note */}
      <p className="mt-10 text-xs text-white/60">
        *For fastest response, use Email or WhatsApp. No contact form submissions on this site.
      </p>
    </section>
  );
}
