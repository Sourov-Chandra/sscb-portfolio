"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { GiCoffeeCup } from "react-icons/gi";
import { BsFillLightningChargeFill } from "react-icons/bs";

const info = [
  { label: "Name", value: "Sourov Chandra Barmon", accent: false },
  { label: "Location", value: "Thakurgaon, Rangpur, BD", accent: false },
  { label: "Email", value: "sourov.cb.tech@gmail.com", accent: true },
  { label: "Status", value: "Available ✦", accent: true },
  { label: "Focus", value: "Full-Stack / MERN", accent: false },
  { label: "Education", value: "Diploma in CST", accent: false },
];

const strengths = [
  { icon: "⚡", label: "Frontend & UI (React, Next.js, Tailwind CSS)" },
  { icon: "🔧", label: "Backend & REST APIs (Express.js, Node.js)" },
  { icon: "🛡️", label: "Auth & Security (BetterAuth, JWT, OAuth)" },
  { icon: "🍃", label: "Databases (MongoDB, Mongoose, Atlas)" },
];

const techs = [
  "Next.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "BetterAuth",
  "Tailwind CSS",
  "Shadcn/UI",
  "Stripe",
  "Git",
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
          className="text-white/30 lg:text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.65)" }}
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
          <p className="text-[0.95rem] leading-[1.9] text-white/75 mb-5">
            I&apos;m a{" "}
            <span className="text-[#00ffc8] font-bold">
              Full-Stack Web Developer
            </span>{" "}
            based in Thakurgaon, Rangpur, Bangladesh. I have hands-on experience designing and building secure, scalable web applications with the MERN stack and Next.js.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-white/75 mb-5">
            I specialize in{" "}
            <span className="text-[#00ffc8] font-bold">
              Next.js (App Router), Express.js, MongoDB, and BetterAuth
            </span>{" "}
            — building robust authentication systems, real-time booking platforms, and RESTful APIs with clean architecture and user-focused design.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-white/75">
            Currently pursuing my Diploma in Engineering (Computer Science and Technology) at Thakurgaon Polytechnic Institute, looking to contribute to a professional engineering team while continuing to grow as a developer.
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {info.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-white/55">
                  {item.label}
                </span>
                <span
                  className={`font-mono text-[0.75rem] ${item.accent ? "text-[#00ffc8]" : "text-white/80"}`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download="Sourov_Chandra_Barmon_Resume.pdf"
            className="group inline-flex items-center gap-2.5 mt-8
              bg-linear-to-r from-[#00ffc8] to-[#00d4ff] text-[#080c10]
              font-mono font-extrabold text-[0.75rem] tracking-wider
              px-8 py-3.5 rounded-lg shadow-[0_0_20px_rgba(0,255,200,0.35)]
              hover:shadow-[0_0_30px_rgba(0,255,200,0.6)]
              hover:from-[#00e6b4] hover:to-[#00bfe6]
              hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Download Resume</span>
            <HiDownload size={17} className="group-hover:translate-y-0.5 transition-transform duration-200" />
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
          {/* Flagship Projects Card */}
          <div className="bg-white/2 border border-[#00ffc8]/15 rounded-lg p-6 hover:border-[#00ffc8]/40 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-[#00ffc8]/08 border border-[#00ffc8]/15 flex items-center justify-center text-base">
                <BsFillLightningChargeFill />
              </div>
              <span className="font-mono text-[0.72rem] text-white/75 tracking-wider">
                Full-Stack Architecture
              </span>
            </div>
            <div className="text-[1.6rem] font-extrabold text-white">
              3<span className="text-[#00ffc8]"> Flagship</span> Apps
            </div>
            <div className="font-mono text-[0.62rem] text-white/55 tracking-wider mt-1">
              RecipeHub · MediQueue · QurbaniHat
            </div>
          </div>

          {/* Core Strengths — badge style, NO bars */}
          <div className="bg-white/2 border border-[#00ffc8]/15 rounded-lg p-6 hover:border-[#00ffc8]/40 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-md bg-[#00ffc8]/08 border border-[#00ffc8]/15 flex items-center justify-center text-base">
                <BsFillLightningChargeFill />
              </div>
              <span className="font-mono text-[0.72rem] text-white/75 tracking-wider">
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
      px-4 py-3 rounded-md border border-[#00ffc8]/12
      bg-white/2 hover:border-[#00ffc8]/35
      hover:bg-[#00ffc8]/03 transition-all duration-200"
                >
                  <span className="text-base">{s.icon}</span>

                  <span className="font-mono text-[0.7rem] text-white/85 tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags card */}
          <div className="bg-white/2 border border-[#00ffc8]/15 rounded-lg p-6 hover:border-[#00ffc8]/40 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-[#00ffc8]/08 border border-[#00ffc8]/15 flex items-center justify-center text-base">
                🛠
              </div>
              <span className="font-mono text-[0.72rem] text-white/75 tracking-wider">
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
