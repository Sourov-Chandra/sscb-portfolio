"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";

// ─── EDIT YOUR INFO HERE ───────────────────────────────────────────────────
const CONFIG = {
  name: "Sourov Chandra Barmon",
  role: "Full-Stack Dev.",
  location: "Dhaka, BD",
  experience: 3,
  cvPath: "/cv.pdf",
  github: "https://github.com/yourname",
  githubLabel: "github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  linkedinLabel: "linkedin.com/in/yourname",
  // stack: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
  stack: ["Next.js", "JavaScript", "Node.js", "Tailwind"],
  stats: [
    { num: "1+", label: "Years Exp." },
    { num: "10+", label: "Projects Done" },
    // { num: "15+", label: "Happy Clients" },
  ],
};

const TYPED_LINES = [CONFIG.name, "a Developer", "a Builder"];
// ──────────────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const [displayed, setDisplayed] = useState("");

  // Use a single ref object to hold all mutable state — avoids stale closure issues
  const stateRef = useRef({
    lineIdx: 0,
    charIdx: 0,
    deleting: false,
  });

  useEffect(() => {
    let timer;

    function tick() {
      const { lineIdx, charIdx, deleting } = stateRef.current;
      const currentLine = TYPED_LINES[lineIdx];

      if (!deleting) {
        // Typing forward
        const next = currentLine.slice(0, charIdx + 1);
        setDisplayed(next);
        stateRef.current.charIdx = charIdx + 1;

        if (charIdx + 1 === currentLine.length) {
          // Finished typing — pause then start deleting
          stateRef.current.deleting = true;
          timer = setTimeout(tick, 1800);
        } else {
          timer = setTimeout(tick, 80);
        }
      } else {
        // Deleting backward
        const next = currentLine.slice(0, charIdx - 1);
        setDisplayed(next);
        stateRef.current.charIdx = charIdx - 1;

        if (charIdx - 1 === 0) {
          // Finished deleting — move to next line
          const nextIdx = (lineIdx + 1) % TYPED_LINES.length;
          stateRef.current.lineIdx = nextIdx;
          stateRef.current.charIdx = 0;
          stateRef.current.deleting = false;
          timer = setTimeout(tick, 300); // small pause before typing next line
        } else {
          timer = setTimeout(tick, 45);
        }
      }
    }

    timer = setTimeout(tick, 600); // initial delay before first letter
    return () => clearTimeout(timer);
  }, []); // ← runs ONCE, no dependency array issues

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_300px]
        items-center gap-12 px-8 lg:px-16 pt-24 pb-16 overflow-hidden container mx-auto"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none" />

      {/* ── LEFT COLUMN ── */}
      <div className="relative z-10 flex flex-col">
        {/* Available badge */}
        <motion.div
          suppressHydrationWarning
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 w-fit mb-10
            border border-[#00ffc8]/20 bg-[#00ffc8]/5
            rounded-full px-4 py-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ffc8] animate-pulse" />
          <span className="font-mono text-[#00ffc8] text-[0.68rem] tracking-widest">
            Available for work
          </span>
        </motion.div>

        {/* ── HERO HEADING ── */}
        <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-tight mb-6">
          {/* "Hi, I'm" — static label */}
          <motion.span
            suppressHydrationWarning
            {...fadeUp(0.3)}
            className="block text-white/50 text-[0.38em] font-mono font-normal tracking-[0.18em] uppercase mb-2"
          >
            Hi, I&apos;m
          </motion.span>

          {/* Typewriter line — cycles: name → "a Developer" → "a Builder" */}
          <motion.span
            suppressHydrationWarning
            {...fadeUp(0.5)}
            className="block text-[#00ffc8] min-h-[1.15em]"
          >
            {displayed}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "0.85em",
                background: "#00ffc8",
                marginLeft: "3px",
                verticalAlign: "middle",
                animation: "cursorBlink 0.75s step-end infinite",
              }}
            />
          </motion.span>

          {/* "I Build Things For the Web." — static */}
          <motion.span
            suppressHydrationWarning
            {...fadeUp(0.7)}
            className="block text-white mt-1"
          >
            I Build Things
          </motion.span>
          <motion.span
            suppressHydrationWarning
            {...fadeUp(0.8)}
            className="block text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
          >
            For the Web.
          </motion.span>
        </h1>

        <style>{`@keyframes cursorBlink { 50% { opacity: 0; } }`}</style>

        {/* Description */}
        <motion.p
          suppressHydrationWarning
          {...fadeUp(1.0)}
          className="max-w-120 text-[0.95rem] leading-[1.85] text-white/38 mb-10"
        >
          I craft high-performance web apps with obsessive attention to detail —
          pixel-perfect UIs, clean architecture, and scalable backend systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          suppressHydrationWarning
          {...fadeUp(1.2)}
          className="flex gap-4 mb-14"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 bg-[#00ffc8] text-[#080c10]
              font-mono font-bold text-[0.72rem] tracking-wider
              px-7 py-3.5 rounded hover:-translate-y-0.5
              hover:bg-[#00e6b4] transition-all duration-150"
          >
            View Projects <HiArrowRight size={15} />
          </button>

          <a
            href={CONFIG.cvPath}
            download
            className="flex items-center gap-2 border border-white/10
              text-white/50 font-mono text-[0.72rem] tracking-wider
              px-7 py-3.5 rounded hover:border-[#00ffc8]/40
              hover:text-[#00ffc8] hover:-translate-y-0.5 transition-all duration-150"
          >
            Download CV <HiDownload size={15} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          suppressHydrationWarning
          {...fadeUp(1.4)}
          className="flex gap-12 pt-8 border-t border-white/5"
        >
          {CONFIG.stats.map((s) => (
            <div key={s.label}>
              <div className="font-mono text-[1.7rem] font-bold text-white">
                {s.num.replace("+", "")}
                <span className="text-[#00ffc8]">+</span>
              </div>
              <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN — Terminal card ── */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 hidden lg:block"
      >
        <div className="bg-white/2 border border-[#00ffc8]/12 rounded-lg overflow-hidden font-mono text-[0.68rem]">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#00ffc8]/04 border-b border-[#00ffc8]/08">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-white/25 text-[0.62rem]">
              about.json
            </span>
          </div>
          <div className="p-4 leading-[2.1]">
            <p className="text-white/20">{"// developer profile"}</p>
            <p>{"{"}</p>
            <p>
              &nbsp;&nbsp;<span className="text-sky-300">&quot;name&quot;</span>
              : <span className="text-red-300">&quot;{CONFIG.name}&quot;</span>,
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-sky-300">&quot;role&quot;</span>
              : <span className="text-red-300">&quot;{CONFIG.role}&quot;</span>,
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-sky-300">&quot;location&quot;</span>:{" "}
              <span className="text-red-300">
                &quot;{CONFIG.location}&quot;
              </span>
              ,
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-sky-300">&quot;experience&quot;</span>:{" "}
              <span className="text-yellow-200">{CONFIG.experience}</span>,
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-sky-300">&quot;stack&quot;</span>: [
            </p>
            {CONFIG.stack.map((tech, i) => (
              <p key={tech}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-red-300">&quot;{tech}&quot;</span>
                {i < CONFIG.stack.length - 1 ? "," : ""}
              </p>
            ))}
            <p>&nbsp;&nbsp;],</p>
            <p>
              &nbsp;&nbsp;
              <span className="text-sky-300">&quot;available&quot;</span>:{" "}
              <span className="text-green-300">true</span>
            </p>
            <p>
              {"}"}{" "}
              <span className="inline-block w-1.5 h-3 bg-[#00ffc8] animate-pulse align-middle" />
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3 mt-5">
          <a
            href={CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-[0.65rem]
              tracking-wide text-white/30 px-3 py-2.5
              border border-white/5 rounded
              hover:text-[#00ffc8] hover:border-[#00ffc8]/20
              hover:bg-[#00ffc8]/04 transition-all duration-200"
          >
            <FaGithub size={14} /> {CONFIG.githubLabel}
          </a>
          <a
            href={CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-[0.65rem]
              tracking-wide text-white/30 px-3 py-2.5
              border border-white/5 rounded
              hover:text-[#00ffc8] hover:border-[#00ffc8]/20
              hover:bg-[#00ffc8]/04 transition-all duration-200"
          >
            <FaLinkedin size={14} /> {CONFIG.linkedinLabel}
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_2s_forwards]">
        <div className="w-px h-9 bg-[#00ffc8]/50 animate-scroll-down" />
        <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-white/20">
          scroll
        </span>
      </div>
    </section>
  );
}
