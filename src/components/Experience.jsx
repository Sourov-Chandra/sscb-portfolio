"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { workExperience, education } from "@/lib/data";
import { section } from "framer-motion/client";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("work");

  return (
    <div className="container mx-auto">
      <section
        id="experience"
        ref={ref}
        className="relative py-28 px-8 lg:px-16"
      >
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-6 h-px bg-[#00ffc8]" />
          <span className="font-mono text-[#00ffc8] text-[0.65rem] tracking-[0.2em] uppercase">
            Experience
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
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
            Journey
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-[0.75rem] text-white/25 tracking-wider mb-12"
        >
          // where I've worked & studied
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 mb-12"
        >
          {["work", "education"].map((tab) => (
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

        {/* ── WORK TIMELINE ── */}
        {active === "work" && (
          <div className="relative pl-8">
            {/* vertical line */}
            <div
              className="absolute left-0 top-2 bottom-2 w-px
            bg-gradient-to-b from-[#00ffc8] to-[#00ffc8]/10"
            />

            {workExperience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="relative mb-10 group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[2.35rem] top-1.5 w-2.5 h-2.5
                rounded-full border-2 border-[#00ffc8] transition-all duration-300
                ${job.current ? "bg-[#00ffc8]" : "bg-[#080c10] group-hover:bg-[#00ffc8]"}`}
                />

                {/* Card */}
                <div
                  className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6
                hover:border-[#00ffc8]/20 hover:bg-[#00ffc8]/02 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-[1rem] font-bold text-white">
                      {job.role}
                    </h3>
                    <span
                      className="font-mono text-[0.6rem] text-[#00ffc8]
                    bg-[#00ffc8]/08 border border-[#00ffc8]/20
                    px-3 py-1 rounded-full whitespace-nowrap shrink-0"
                    >
                      {job.period}
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-1.5 font-mono text-[0.72rem]
                  text-white/40 mb-4"
                  >
                    <span className="text-[#00ffc8]">{job.company}</span>
                    <span>·</span>
                    <span>{job.type}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                  </div>

                  <p className="text-[0.85rem] leading-[1.8] text-white/40 mb-4">
                    {job.desc}
                  </p>

                  <ul className="flex flex-col gap-1.5 mb-5">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2
                      text-[0.82rem] text-white/38"
                      >
                        <span className="text-[#00ffc8] text-[0.65rem] mt-[3px] shrink-0">
                          ▸
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.58rem] tracking-wider
                      px-2.5 py-1 rounded-full border border-white/08 text-white/38"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── EDUCATION GRID ── */}
        {active === "education" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6
                hover:border-[#00ffc8]/20 transition-all duration-300"
              >
                <div className="text-[1.5rem] mb-3">{edu.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="font-mono text-[0.68rem] text-[#00ffc8]/70 mb-1">
                  {edu.school}
                </div>
                <div className="font-mono text-[0.6rem] text-white/25 mb-3">
                  {edu.year}
                </div>
                <p className="text-[0.8rem] text-white/35 leading-[1.6]">
                  {edu.desc}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
