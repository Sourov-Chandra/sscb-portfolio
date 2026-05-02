"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";

// If the above doesn't work, use this instead:
// import { ArrowRight, Download, GithubIcon as Github, Linkedin } from 'lucide-react';

const phrases = [
  "Next.js Developer",
  "UI/UX Enthusiast",
  "Backend Engineer",
  "Open Source Contributor",
];

const stats = [
  { num: "3+", label: "Years Exp." },
  { num: "20+", label: "Projects Done" },
  { num: "15+", label: "Happy Clients" },
];

const socials = [
  { icon: FaGithub, label: "github.com/yourname", href: "https://github.com" },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/yourname",
    href: "https://linkedin.com",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const charRef = useRef(0);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 55 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charRef.current + 1));
        charRef.current++;
        if (charRef.current === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, charRef.current - 1));
        charRef.current--;
        if (charRef.current === 0) {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, deleting, phraseIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_300px]
        items-center gap-12 px-8 lg:px-16 pt-24 pb-16 overflow-hidden container mx-auto"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

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

        {/* Title */}
        <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight mb-6">
          <motion.span
            suppressHydrationWarning
            {...fadeUp(0.3)}
            className="block text-white"
          >
            Hi, I'm
          </motion.span>
          <motion.span
            suppressHydrationWarning
            {...fadeUp(0.5)}
            className="block text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
          >
            Your Name
          </motion.span>

          <motion.span
            suppressHydrationWarning
            {...fadeUp(0.7)}
            className="block text-[#00ffc8]"
          >
            Full-Stack Dev.
          </motion.span>
        </h1>

        {/* Typewriter */}
        <motion.div
          suppressHydrationWarning
          {...fadeUp(0.9)}
          className="flex items-center gap-3 font-mono text-[0.95rem]
            text-white/35 mb-8"
        >
          <span className="text-[#00ffc8]">&gt;_</span>
          <span className="text-white/75 border-r-2 border-[#00ffc8] pr-0.5">
            {displayed}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          suppressHydrationWarning
          {...fadeUp(1.1)}
          className="max-w-[480px] text-[0.95rem] leading-[1.85]
            text-white/38 mb-10"
        >
          I craft high-performance web apps with obsessive attention to detail —
          pixel-perfect UIs, clean architecture, and scalable backend systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          suppressHydrationWarning
          {...fadeUp(1.3)}
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
            href="/cv.pdf"
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
          {...fadeUp(1.5)}
          className="flex gap-12 pt-8 border-t border-white/[0.05]"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-mono text-[1.7rem] font-bold text-white">
                {s.num.replace("+", "")}
                <span className="text-[#00ffc8]">+</span>
              </div>
              <div
                className="font-mono text-[0.6rem] tracking-[0.2em]
                uppercase text-white/25 mt-1"
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 hidden lg:block"
      >
        {/* Terminal card */}
        <div
          className="bg-white/[0.02] border border-[#00ffc8]/12
          rounded-lg overflow-hidden font-mono text-[0.68rem]"
        >
          <div
            className="flex items-center gap-1.5 px-4 py-2.5
            bg-[#00ffc8]/04 border-b border-[#00ffc8]/08"
          >
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
              &nbsp;&nbsp;<span className="text-sky-300">"name"</span>:{" "}
              <span className="text-red-300">"Your Name"</span>,
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-sky-300">"role"</span>:{" "}
              <span className="text-red-300">"Full-Stack Dev"</span>,
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-sky-300">"location"</span>:{" "}
              <span className="text-red-300">"Dhaka, BD"</span>,
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-sky-300">"experience"</span>:{" "}
              <span className="text-yellow-200">3</span>,
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-sky-300">"stack"</span>: [
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-red-300">"Next.js"</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-red-300">"TypeScript"</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-red-300">"Node.js"</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-red-300">"Tailwind"</span>
            </p>
            <p>&nbsp;&nbsp;],</p>
            <p>
              &nbsp;&nbsp;<span className="text-sky-300">"available"</span>:{" "}
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
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-[0.65rem]
                tracking-wide text-white/30 px-3 py-2.5
                border border-white/[0.05] rounded
                hover:text-[#00ffc8] hover:border-[#00ffc8]/20
                hover:bg-[#00ffc8]/04 transition-all duration-200"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_2s_forwards]"
      >
        <div className="w-px h-9 bg-[#00ffc8]/50 animate-[scrollDown_1.6s_ease-in-out_infinite]" />
        <span
          className="font-mono text-[0.55rem] tracking-[0.2em]
          uppercase text-white/20"
        >
          scroll
        </span>
      </div>
    </section>
  );
}
