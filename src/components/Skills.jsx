"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Next.js", icon: "⬛", cat: "frontend", pct: 95, level: "Expert" },
  { name: "React", icon: "⚛️", cat: "frontend", pct: 92, level: "Expert" },
  {
    name: "TypeScript",
    icon: "🔷",
    cat: "frontend",
    pct: 88,
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    cat: "frontend",
    pct: 90,
    level: "Expert",
  },
  {
    name: "Framer Motion",
    icon: "🎭",
    cat: "frontend",
    pct: 78,
    level: "Intermediate",
  },
  { name: "Redux", icon: "🔮", cat: "frontend", pct: 80, level: "Advanced" },
  { name: "Node.js", icon: "🟢", cat: "backend", pct: 85, level: "Advanced" },
  { name: "Express", icon: "🚂", cat: "backend", pct: 83, level: "Advanced" },
  {
    name: "PostgreSQL",
    icon: "🐘",
    cat: "backend",
    pct: 78,
    level: "Advanced",
  },
  { name: "MongoDB", icon: "🍃", cat: "backend", pct: 80, level: "Advanced" },
  { name: "Prisma", icon: "💎", cat: "backend", pct: 82, level: "Advanced" },
  {
    name: "GraphQL",
    icon: "🔺",
    cat: "backend",
    pct: 72,
    level: "Intermediate",
  },
  { name: "Docker", icon: "🐳", cat: "tools", pct: 75, level: "Intermediate" },
  { name: "Git", icon: "🌿", cat: "tools", pct: 90, level: "Expert" },
  { name: "Vercel", icon: "▲", cat: "tools", pct: 88, level: "Advanced" },
  { name: "Figma", icon: "🎯", cat: "tools", pct: 70, level: "Intermediate" },
];

const tabs = ["All", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? skills
      : skills.filter((s) => s.cat === active.toLowerCase());

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 px-8 lg:px-16 container mx-auto"
    >
      {/* Section tag */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-3"
      >
        <span className="w-6 h-px bg-[#00ffc8]" />
        <span className="font-mono text-[#00ffc8] text-[0.65rem] tracking-[0.2em] uppercase">
          Skills
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        suppressHydrationWarning
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight mb-2"
      >
        My{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
        >
          Tech
        </span>{" "}
        Stack
      </motion.h2>

      <motion.p
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="font-mono text-[0.75rem] text-white/25 tracking-wider mb-12"
      >
        // technologies I work with daily
      </motion.p>

      {/* Filter tabs */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-2 flex-wrap mb-10"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`font-mono text-[0.65rem] tracking-[0.12em] uppercase
              px-5 py-2 rounded border transition-all duration-200
              ${
                active === tab
                  ? "border-[#00ffc8] text-[#00ffc8] bg-[#00ffc8]/06"
                  : "border-white/08 text-white/35 hover:border-[#00ffc8]/30 hover:text-[#00ffc8]/70"
              }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filtered.map((skill, i) => (
          <motion.div
            suppressHydrationWarning
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            className="group bg-white/[0.02] border border-white/[0.06]
              rounded-lg p-5 flex flex-col items-center gap-2.5
              hover:border-[#00ffc8]/25 hover:bg-[#00ffc8]/03
              hover:-translate-y-1 transition-all duration-250 cursor-default"
          >
            {/* Icon */}
            <span className="text-[1.8rem] leading-none">{skill.icon}</span>

            {/* Name */}
            <span
              className="font-mono text-[0.65rem] tracking-wider
              text-white/60 text-center leading-tight"
            >
              {skill.name}
            </span>

            {/* Bar */}
            <div className="w-full h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                suppressHydrationWarning
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.pct}%` } : {}}
                transition={{
                  duration: 1,
                  delay: 0.3 + i * 0.04,
                  ease: "easeOut",
                }}
                className="h-full bg-[#00ffc8] rounded-full"
              />
            </div>

            {/* Level */}
            <span className="font-mono text-[0.55rem] tracking-wider text-[#00ffc8]/60">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
