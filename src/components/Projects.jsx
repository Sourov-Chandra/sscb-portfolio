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
      className="relative py-28 px-6 lg:px-16 container mx-auto"
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
          Featured Work
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
        Production{" "}
        <span
          className="text-white/30 lg:text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.65)" }}
        >
          Projects
        </span>
      </motion.h2>

      <motion.p
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono text-[0.75rem] text-white/55 tracking-wider mb-10"
      >
        {"// "}full-stack applications with authentication, databases & payment integrations
      </motion.p>

      {/* Filter tabs */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-2 flex-wrap mb-12"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`font-mono text-[0.65rem] tracking-[0.12em] uppercase
              px-5 py-2 rounded-lg border transition-all duration-200 cursor-pointer
              ${
                active === tab
                  ? "border-[#00ffc8] text-[#00ffc8] bg-[#00ffc8]/10 shadow-[0_0_12px_rgba(0,255,200,0.2)]"
                  : "border-white/10 text-white/45 hover:border-[#00ffc8]/40 hover:text-[#00ffc8]"
              }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filtered.map((project, i) => {
          const displayUrl = project.demo
            ? project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : "localhost:3000";

          return (
            <motion.div
              suppressHydrationWarning
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="group bg-[#090e13]/90 backdrop-blur-md border border-[#00ffc8]/20
                rounded-2xl overflow-hidden flex flex-col justify-between
                shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]
                hover:border-[#00ffc8]/60 hover:shadow-[0_16px_40px_rgba(0,255,200,0.18)]
                hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* ── Top Browser Bar ── */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-[#00ffc8]/15">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  <div className="font-mono text-[0.62rem] text-white/55 bg-black/40 border border-white/08 px-3 py-1 rounded-full flex items-center gap-1.5 max-w-[55%] truncate">
                    <span className="text-[#00ffc8] text-[0.6rem]">🔒</span>
                    <span className="truncate">{displayUrl}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.58rem] font-mono font-medium text-[#00ffc8] bg-[#00ffc8]/10 border border-[#00ffc8]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ffc8] animate-pulse" />
                    Live
                  </span>
                </div>

                {/* ── Project Title & Summary ── */}
                <div className="p-6 pb-2">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="font-mono text-[0.62rem] text-[#00ffc8] tracking-[0.18em] uppercase font-bold">
                      Full-Stack Application
                    </span>
                    <span className="font-mono text-[0.6rem] text-white/45 bg-white/4 border border-white/08 px-2 py-0.5 rounded">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-[1.3rem] font-extrabold text-white tracking-tight group-hover:text-[#00ffc8] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="font-mono text-[0.7rem] text-[#00ffc8]/85 mb-3 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-[0.82rem] leading-[1.75] text-white/70">
                    {project.desc}
                  </p>
                </div>

                {/* ── Key Highlights Card ── */}
                <div className="px-6 py-2">
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    <span className="font-mono text-[0.6rem] text-[#00ffc8] uppercase tracking-wider font-bold block mb-2.5">
                      Key Highlights & Architecture
                    </span>
                    <ul className="flex flex-col gap-2">
                      {project.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="text-[0.74rem] text-white/65 leading-[1.6] flex items-start gap-2"
                        >
                          <span className="text-[#00ffc8] text-[0.7rem] mt-0.5 shrink-0">
                            ▹
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── Tech Tags ── */}
                <div className="px-6 pt-3 pb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.62rem] font-medium tracking-wide
                          px-2.5 py-1 rounded-md border border-[#00ffc8]/20
                          bg-[#00ffc8]/06 text-[#00ffc8]/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Action Buttons ── */}
              <div className="p-6 pt-4 border-t border-white/[0.06] bg-white/[0.01]">
                <div className="flex flex-wrap gap-2.5 items-center">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5
                        bg-linear-to-r from-[#00ffc8] to-[#00d4ff] text-[#080c10]
                        font-mono font-extrabold text-[0.72rem] tracking-wider
                        py-2.5 px-4 rounded-lg shadow-[0_0_15px_rgba(0,255,200,0.25)]
                        hover:shadow-[0_0_25px_rgba(0,255,200,0.5)]
                        hover:from-[#00e6b4] hover:to-[#00bfe6]
                        hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <HiExternalLink size={14} /> Live Demo
                    </a>
                  )}

                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[0.68rem] tracking-wide
                        text-white/80 bg-white/4 border border-white/12 py-2.5 px-3.5 rounded-lg
                        hover:text-[#00ffc8] hover:border-[#00ffc8]/40 hover:bg-[#00ffc8]/05
                        hover:-translate-y-0.5 transition-all duration-200"
                      title="Client Source Code"
                    >
                      <FaGithub size={13} /> {project.githubServer ? "Client" : "Source"}
                    </a>
                  )}

                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[0.68rem] tracking-wide
                        text-white/80 bg-white/4 border border-white/12 py-2.5 px-3.5 rounded-lg
                        hover:text-[#00ffc8] hover:border-[#00ffc8]/40 hover:bg-[#00ffc8]/05
                        hover:-translate-y-0.5 transition-all duration-200"
                      title="Server Source Code"
                    >
                      <FaGithub size={13} /> Server
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
