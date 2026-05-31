"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { GiCoffeeCup } from "react-icons/gi";
import { BsFillLightningChargeFill } from "react-icons/bs";

const info = [
  { label: "Name", value: "Sourov Chandra Barmon", accent: false },
  { label: "Location", value: "Thakurgaon, Rangpur, Bangladesh", accent: false },
  { label: "Email", value: "sourovtpi@yahoo.com", accent: true },
  { label: "Status", value: "Available ✦", accent: true },
  { label: "Experience", value: "1+ Years", accent: false },
  { label: "Degree", value: "Diploma in Engineering", accent: false },
];

// const strengths = [
//   { icon: "⚡", label: "Frontend", value: "Expert" },
//   { icon: "🔧", label: "Backend", value: "Advanced" },
//   { icon: "🐳", label: "DevOps", value: "Intermediate" },
// ];

const strengths = [
  { icon: "⚡", label: "Frontend Development" },
  { icon: "🔧", label: "Backend Systems" },
  { icon: "🐳", label: "Deployment & DevOps" },
];

const techs = [
  "Next.js",
  'JavaScript',
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Docker",
  "Tailwind",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-8 lg:px-16 container mx-auto"
    >
      {/* Section label */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
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
        className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight mb-14"
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
            I&apos;m a{" "}
            <span className="text-[#00ffc8] font-bold">
              Full-Stack Developer
            </span>{" "}
            based in Rangpur, Bangladesh with 1+ years of experience building
            modern web applications that are fast, accessible, and visually
            compelling.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-white/45 mb-5">
            I specialize in{" "}
            <span className="text-[#00ffc8] font-bold">
              Next.js, JavaScript, and Node.js
            </span>{" "}
            — from pixel-perfect frontends to robust REST {/* & GraphQL */}{" "}
            API(s). I care deeply about clean code, great UX, and shipping
            products that actually work.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-white/45">
            When I&apos;m not coding, I&apos;m exploring open source, reading
            about system design, or brewing the perfect cup of coffee{" "}
            <GiCoffeeCup className="inline" />
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {info.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-white/25">
                  {item.label}
                </span>
                <span
                  className={`font-mono text-[0.75rem] ${item.accent ? "text-[#00ffc8]" : "text-white/75"}`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <a
            // href="/cv.pdf"
            // href="https://drive.google.com/file/d/1EDxz7r58js_-jnqmBQcsNd-M6HMe4Yaa/view?usp=sharing"
            href="https://drive.google.com/uc?export=download&id=1EDxz7r58js_-jnqmBQcsNd-M6HMe4Yaa"
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
          {/* Projects completed card */}
          <div className="bg-white/2 border border-white/2 rounded-lg p-6 hover:border-[#00ffc8]/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-[#00ffc8]/08 border border-[#00ffc8]/15 flex items-center justify-center text-base">
                <BsFillLightningChargeFill />
              </div>
              <span className="font-mono text-[0.72rem] text-white/60 tracking-wider">
                Projects Completed
              </span>
            </div>
            <div className="text-[1.6rem] font-extrabold text-white">
              10<span className="text-[#00ffc8]">+</span>
            </div>
            <div className="font-mono text-[0.62rem] text-white/25 tracking-wider mt-1">
              across web, mobile & api
            </div>
          </div>

          {/* Core Strengths — badge style, NO bars */}
          <div className="bg-white/2 border border-white/2 rounded-lg p-6 hover:border-[#00ffc8]/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-md bg-[#00ffc8]/08 border border-[#00ffc8]/15 flex items-center justify-center text-base">
                
              </div>
              <span className="font-mono text-[0.72rem] text-white/60 tracking-wider">
                Core Strengths
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {/* {strengths.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between
                    px-4 py-3 rounded-md border border-white/[0.06]
                    bg-white/[0.02] hover:border-[#00ffc8]/25
                    hover:bg-[#00ffc8]/03 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{s.icon}</span>
                    <span className="font-mono text-[0.7rem] text-white/60 tracking-wider">
                      {s.label}
                    </span>
                  </div>
                  <span
                    className="font-mono text-[0.6rem] tracking-wider
                    text-[#00ffc8] border border-[#00ffc8]/25 bg-[#00ffc8]/06
                    px-3 py-1 rounded-full"
                  >
                    {s.value}
                  </span>
                </div>
              ))} */}
              {strengths.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3
      px-4 py-3 rounded-md border border-white/2
      bg-white/2 hover:border-[#00ffc8]/25
      hover:bg-[#00ffc8]/03 transition-all duration-200"
                >
                  <span className="text-base">{s.icon}</span>

                  <span className="font-mono text-[0.7rem] text-white/65 tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags card */}
          <div className="bg-white/2 border border-white/2 rounded-lg p-6 hover:border-[#00ffc8]/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-[#00ffc8]/08 border border-[#00ffc8]/15 flex items-center justify-center text-base">
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
