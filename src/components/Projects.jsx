"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { projects } from "@/lib/data";

const tabs = ["All", "Next.js", "Express.js", "BetterAuth", "MongoDB"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(active.toLowerCase()))
        );

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
        Featured{" "}
        <span
          className="text-white/30 lg:text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.65)" }}
        >
          Work
        </span>
      </motion.h2>

      <motion.p
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono text-[0.75rem] text-white/55 tracking-wider mb-10"
      >
        {"// "}production-grade platforms with full authentication, databases & APIs
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <motion.div
            suppressHydrationWarning
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="group bg-white/2 border border-[#00ffc8]/15
              rounded-xl overflow-hidden flex flex-col justify-between
              hover:border-[#00ffc8]/45 hover:-translate-y-1
              transition-all duration-300"
          >
            {/* Header banner */}
            <div
              className="relative h-32 bg-linear-to-br from-[#00ffc8]/08 to-[#004d3d]/20
              flex flex-col items-center justify-center p-4 border-b border-[#00ffc8]/10"
            >
              <span className="text-[3rem] font-extrabold text-white/05 select-none absolute">
                {String(project.id).padStart(2, "0")}
              </span>

              {/* Featured badge */}
              <span
                className="absolute top-3 right-3 font-mono text-[0.55rem]
                tracking-wider uppercase px-2.5 py-0.5 rounded-full
                bg-[#00ffc8]/10 border border-[#00ffc8]/30 text-[#00ffc8]"
              >
                ✦ Full-Stack
              </span>

              <h4 className="font-mono text-[0.95rem] font-bold text-white relative z-10 text-center">
                {project.name}
              </h4>
              <p className="font-mono text-[0.68rem] text-[#00ffc8]/80 relative z-10 text-center mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Card body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[0.82rem] leading-[1.7] text-white/70 mb-4">
                  {project.desc}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-5">
                  {project.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="text-[0.75rem] text-white/60 leading-[1.6] flex items-start gap-2"
                    >
                      <span className="text-[#00ffc8] text-[0.6rem] mt-1 shrink-0">
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.58rem] tracking-wider
                        px-2 py-0.5 rounded-full border border-white/08
                        text-white/65 bg-white/2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex flex-wrap gap-2.5 pt-3 border-t border-white/5 items-center">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[0.65rem]
                        tracking-wider text-[#00ffc8] bg-[#00ffc8]/08 border border-[#00ffc8]/30
                        px-3 py-1.5 rounded hover:bg-[#00ffc8]/20 transition-all"
                    >
                      <HiExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[0.65rem]
                        tracking-wider text-white/70 bg-white/3 border border-white/10
                        px-3 py-1.5 rounded hover:text-[#00ffc8] hover:border-[#00ffc8]/30 transition-all"
                    >
                      <FaGithub size={12} /> Client Repo
                    </a>
                  )}
                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[0.65rem]
                        tracking-wider text-white/70 bg-white/3 border border-white/10
                        px-3 py-1.5 rounded hover:text-[#00ffc8] hover:border-[#00ffc8]/30 transition-all"
                    >
                      <FaGithub size={12} /> Server Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
