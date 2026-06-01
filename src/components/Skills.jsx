"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Next.js", icon: "⬛", cat: "frontend" },
  { name: "React", icon: "⚛️", cat: "frontend" },
  { name: "JavaScript", icon: "🟡", cat: "frontend" },
  { name: "TypeScript", icon: "🔷", cat: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", cat: "frontend" },
  { name: "Framer Motion", icon: "🎭", cat: "frontend" },
  // { name: "Redux", icon: "🔮", cat: "frontend" },

  { name: "Node.js", icon: "🟢", cat: "backend" },
  { name: "Express", icon: "🚂", cat: "backend" },
  // { name: "PostgreSQL", icon: "🐘", cat: "backend" },
  { name: "MongoDB", icon: "🍃", cat: "backend" },
  { name: "Mongoose", icon: "🍃", cat: "backend" },
  { name: "Prisma", icon: "💎", cat: "backend" },
  { name: "GraphQL", icon: "🔺", cat: "backend" },

  // { name: "Docker", icon: "🐳", cat: "tools" },
  { name: "Git", icon: "🌿", cat: "tools" },
  { name: "Github", icon: "🐙", cat: "tools" },
  { name: "Vercel", icon: "▲", cat: "tools" },
  { name: "Netlify", icon: "🌲", cat: "tools" },
  { name: "Figma", icon: "🎯", cat: "tools" },
];

const tabs = ["All", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? skills
      : skills.filter((s) => s.cat === active.toLowerCase());

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 px-6 lg:px-16 container mx-auto"
    >
      {/* Section Label */}
      <motion.div
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
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight mb-3"
      >
        My{" "}
        <span
          className="text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
          }}
        >
          Tech
        </span>{" "}
        Stack
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="font-mono text-[0.75rem] text-white/25 tracking-wider mb-12"
      >
        // technologies I use to build modern web applications
      </motion.p>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-md border font-mono
              text-[0.65rem] tracking-[0.12em] uppercase
              transition-all duration-200
              
              ${
                active === tab
                  ? "border-[#00ffc8] text-[#00ffc8] bg-[#00ffc8]/10"
                  : "border-white/10 text-white/40 hover:border-[#00ffc8]/30 hover:text-[#00ffc8]"
              }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filtered.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.1 + i * 0.05,
            }}
            className="
              group
              bg-white/3
              border border-white/6
              rounded-xl
              p-5
              flex flex-col items-center justify-center
              gap-3
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#00ffc8]/30
              hover:bg-[#00ffc8]/3
            "
          >
            {/* Icon */}
            <span className="text-[2rem] leading-none transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </span>

            {/* Skill Name */}
            <span className="font-mono text-[0.7rem] tracking-wider text-white/70 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
