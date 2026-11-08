"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiShadcnui,
  SiDaisyui,
  SiHtml5,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
  SiStripe,
  SiRender,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCss3Alt,
  FaShieldAlt,
} from "react-icons/fa";

const skills = [
  // Frontend
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, cat: "frontend" },
  { name: "React.js", icon: <FaReact className="text-[#61dafb]" />, cat: "frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6] rounded-sm bg-white" />, cat: "frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e] rounded-sm bg-black" />, cat: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" />, cat: "frontend" },
  { name: "Shadcn/UI", icon: <SiShadcnui className="text-white" />, cat: "frontend" },
  { name: "DaisyUI", icon: <SiDaisyui className="text-[#1ad1a5]" />, cat: "frontend" },
  { name: "HTML5", icon: <SiHtml5 className="text-[#e34f26]" />, cat: "frontend" },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572b6]" />, cat: "frontend" },

  // Backend & Auth & Database
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, cat: "backend" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, cat: "backend" },
  { name: "REST APIs", icon: <SiPostman className="text-[#ff6c37]" />, cat: "backend" },
  { name: "BetterAuth", icon: <FaShieldAlt className="text-[#00ffc8]" />, cat: "backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" />, cat: "backend" },
  { name: "Mongoose", icon: <SiMongoose className="text-[#880000]" />, cat: "backend" },
  { name: "Firebase Auth", icon: <SiFirebase className="text-[#ffca28]" />, cat: "backend" },
  { name: "JWT", icon: <SiJsonwebtokens className="text-[#d63aff]" />, cat: "backend" },

  // Tools
  { name: "Git", icon: <FaGitAlt className="text-[#f05032]" />, cat: "tools" },
  { name: "GitHub", icon: <FaGithub className="text-white" />, cat: "tools" },
  { name: "Vercel", icon: <SiVercel className="text-white" />, cat: "tools" },
  { name: "Render", icon: <SiRender className="text-[#46e3b7]" />, cat: "tools" },
  { name: "Figma", icon: <FaFigma className="text-[#f24e1e]" />, cat: "tools" },
  { name: "Stripe", icon: <SiStripe className="text-[#635bff]" />, cat: "tools" },
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
          className="text-white/30 lg:text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.65)",
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
        className="font-mono text-[0.75rem] text-white/55 tracking-wider mb-12"
      >
        {"// "}technologies I use to build modern web applications
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
                  : "border-white/10 text-white/60 hover:border-[#00ffc8]/30 hover:text-[#00ffc8]"
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
              border border-[#00ffc8]/12
              rounded-xl
              p-5
              flex flex-col items-center justify-center
              gap-3
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#00ffc8]/45
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
