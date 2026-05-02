"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const info = [
  { label: "Name", value: "Your Name", accent: false },
  { label: "Location", value: "Dhaka, BD", accent: false },
  { label: "Email", value: "you@email.com", accent: true },
  { label: "Status", value: "Available ✦", accent: true },
  { label: "Experience", value: "3+ Years", accent: false },
  { label: "Degree", value: "B.Sc. CS", accent: false },
];

const strengths = [
  { label: "Frontend", pct: 95 },
  { label: "Backend", pct: 85 },
  { label: "DevOps", pct: 70 },
];

const techs = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Tailwind",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-8 lg:px-16 container mx-auto"
    >
      {/* Section tag - FIXED: removed conflicting animations */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex items-center gap-2 mb-3"
      >
        <span className="w-6 h-px bg-[#00ffc8]" />
        <span className="font-mono text-[#00ffc8] text-[0.65rem] tracking-[0.2em] uppercase">
          About Me
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        suppressHydrationWarning
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white
          tracking-tight mb-14"
      >
        Who I{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
        >
          Am
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* ── LEFT ── */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-[0.95rem] leading-[1.9] text-white/45 mb-5">
            I'm a{" "}
            <span className="text-[#00ffc8] font-bold">
              Full-Stack Developer
            </span>{" "}
            based in Dhaka, Bangladesh with 3+ years of experience building
            modern web applications that are fast, accessible, and visually
            compelling.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-white/45 mb-5">
            I specialize in{" "}
            <span className="text-[#00ffc8] font-bold">
              Next.js, TypeScript, and Node.js
            </span>{" "}
            — from pixel-perfect frontends to robust REST & GraphQL APIs. I care
            deeply about clean code, great UX, and shipping products that
            actually work.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-white/45">
            When I'm not coding, I'm exploring open source, reading about system
            design, or brewing the perfect cup of coffee ☕
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {info.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span
                  className="font-mono text-[0.58rem] tracking-[0.18em]
                  uppercase text-white/25"
                >
                  {item.label}
                </span>
                <span
                  className={`font-mono text-[0.75rem]
                  ${item.accent ? "text-[#00ffc8]" : "text-white/75"}`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Download CV - FIXED: added missing <a> tag */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 mt-8
              bg-[#00ffc8] text-[#080c10] font-mono font-bold
              text-[0.72rem] tracking-wider px-7 py-3.5 rounded
              hover:bg-[#00e6b4] hover:-translate-y-0.5 transition-all duration-150"
          >
            Download CV <HiDownload size={16} />
          </a>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col gap-5"
        >
          {/* Projects card */}
          <div
            className="bg-white/[0.02] border border-white/[0.06]
            rounded-lg p-6 hover:border-[#00ffc8]/20 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-md bg-[#00ffc8]/08
                border border-[#00ffc8]/15 flex items-center justify-center text-base"
              >
                ⚡
              </div>
              <span className="font-mono text-[0.72rem] text-white/60 tracking-wider">
                Projects Completed
              </span>
            </div>
            <div className="text-[1.6rem] font-extrabold text-white">
              20<span className="text-[#00ffc8]">+</span>
            </div>
            <div
              className="font-mono text-[0.62rem] text-white/25
              tracking-wider mt-1"
            >
              across web, mobile & api
            </div>
          </div>

          {/* Strengths card */}
          <div
            className="bg-white/[0.02] border border-white/[0.06]
            rounded-lg p-6 hover:border-[#00ffc8]/20 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-md bg-[#00ffc8]/08
                border border-[#00ffc8]/15 flex items-center justify-center text-base"
              >
                🎯
              </div>
              <span className="font-mono text-[0.72rem] text-white/60 tracking-wider">
                Core Strengths
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {strengths.map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono text-[0.62rem] text-white/35">
                      {s.label}
                    </span>
                    <span className="font-mono text-[0.62rem] text-white/35">
                      {s.pct}%
                    </span>
                  </div>
                  <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      suppressHydrationWarning
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${s.pct}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.6 + i * 0.15,
                        ease: "easeOut",
                      }}
                      className="h-full bg-[#00ffc8] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags card */}
          <div
            className="bg-white/[0.02] border border-white/[0.06]
            rounded-lg p-6 hover:border-[#00ffc8]/20 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-md bg-[#00ffc8]/08
                border border-[#00ffc8]/15 flex items-center justify-center text-base"
              >
                🛠
              </div>
              <span className="font-mono text-[0.72rem] text-white/60 tracking-wider">
                Tech I Love
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techs.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.6rem] tracking-wider
                    px-3 py-1.5 rounded-full border border-[#00ffc8]/20
                    text-[#00ffc8]/70 bg-[#00ffc8]/04"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
