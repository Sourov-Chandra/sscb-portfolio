"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { projects } from "@/lib/data";
import Image from "next/image";

const tabs = ["All", "Fullstack", "Frontend", "Backend"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.cat === active.toLowerCase());

  return (
    <section
      id="projects"
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
          Projects
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
          Work
        </span>
      </motion.h2>

      <motion.p
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono text-[0.75rem] text-white/25 tracking-wider mb-12"
      >
        // things I've built with love & caffeine
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

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <motion.div
            suppressHydrationWarning
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="group bg-white/[0.02] border border-white/[0.06]
              rounded-xl overflow-hidden
              hover:border-[#00ffc8]/25 hover:-translate-y-1
              transition-all duration-300"
          >
            {/* Image / thumbnail */}
            <div
              className="relative h-44 bg-linear-to-br from-[#00ffc8]/08 to-[#004d3d]/15
              flex items-center justify-center overflow-hidden"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover opacity-60
    group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <span className="text-[4rem] font-extrabold text-white/04 select-none">
                  {String(project.id).padStart(2, "0")}
                </span>
              )}

              {/* Featured badge */}
              {project.featured && (
                <span
                  className="absolute top-3 right-3 font-mono text-[0.55rem]
                  tracking-wider uppercase px-3 py-1 rounded-full
                  bg-[#00ffc8]/10 border border-[#00ffc8]/30 text-[#00ffc8]"
                >
                  ✦ Featured
                </span>
              )}

              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-[#00ffc8]/0
                group-hover:bg-[#00ffc8]/05 transition-all duration-300
                flex items-center justify-center gap-3"
              >
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[0.62rem]
                      tracking-wider px-4 py-2 rounded border border-[#00ffc8]/40
                      text-[#00ffc8] bg-[#080c10]/80
                      opacity-0 translate-y-2 group-hover:opacity-100
                      group-hover:translate-y-0 transition-all duration-300"
                  >
                    <HiExternalLink size={13} /> Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-[0.62rem]
                    tracking-wider px-4 py-2 rounded border border-[#00ffc8]/40
                    text-[#00ffc8] bg-[#080c10]/80
                    opacity-0 translate-y-2 group-hover:opacity-100
                    group-hover:translate-y-0 transition-all duration-300 delay-75"
                >
                  <FaGithub size={13} /> GitHub
                </a>
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-[1rem] font-bold text-white leading-snug">
                  {project.name}
                </h3>
                <span className="font-mono text-[0.6rem] text-white/20 pt-0.5 shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-[0.82rem] leading-[1.75] text-white/40 mb-4">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.58rem] tracking-wider
                      px-2.5 py-1 rounded-full border border-white/08
                      text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom links */}
              <div className="flex gap-4 pt-3 border-t border-white/[0.05]">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[0.6rem]
                      tracking-wider text-white/35 hover:text-[#00ffc8] transition-colors"
                  >
                    <HiExternalLink size={13} /> Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[0.6rem]
                    tracking-wider text-white/35 hover:text-[#00ffc8] transition-colors"
                >
                  <FaGithub size={13} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
