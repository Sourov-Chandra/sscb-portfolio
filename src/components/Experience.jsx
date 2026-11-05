"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { education, certifications, languages, softSkills } from "@/lib/data";
import { HiExternalLink } from "react-icons/hi";

const tabs = ["education", "certifications", "skills & languages"];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("education");

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
            Qualifications
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight mb-2"
        >
          Education &{" "}
          <span
            className="text-white/30 lg:text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.65)" }}
          >
            Credentials
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-[0.75rem] text-white/55 tracking-wider mb-12"
        >
          {"// "}academic background, technical certifications & languages
        </motion.p>

        {/* Tabs */}
        <motion.div
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

        {/* ── EDUCATION TAB ── */}
        {active === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/2 border border-[#00ffc8]/15 rounded-xl p-6
                hover:border-[#00ffc8]/45 transition-all duration-300"
              >
                <div className="text-[1.8rem] mb-3">{edu.icon}</div>
                <h3 className="text-[1.05rem] font-bold text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>
                <div className="font-mono text-[0.72rem] text-[#00ffc8] mb-1">
                  {edu.school}
                </div>
                <div className="font-mono text-[0.62rem] text-white/50 mb-4">
                  {edu.year}
                </div>
                <p className="text-[0.83rem] text-white/70 leading-[1.7]">
                  {edu.desc}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── CERTIFICATIONS TAB ── */}
        {active === "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/2 border border-[#00ffc8]/15 rounded-xl p-6
                hover:border-[#00ffc8]/45 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[1.8rem] mb-3">{cert.icon}</div>
                  <h3 className="text-[1.05rem] font-bold text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-[0.72rem] text-[#00ffc8] mb-1">
                    {cert.issuer}
                  </div>
                  <div className="font-mono text-[0.62rem] text-white/50 mb-4">
                    {cert.year}
                  </div>
                  <p className="text-[0.83rem] text-white/70 leading-[1.7] mb-6">
                    {cert.desc}
                  </p>
                </div>

                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[0.68rem]
                    tracking-wider text-[#00ffc8] border border-[#00ffc8]/30
                    bg-[#00ffc8]/06 px-4 py-2.5 rounded w-fit hover:bg-[#00ffc8]/15 transition-all"
                  >
                    <HiExternalLink size={14} /> View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* ── SKILLS & LANGUAGES TAB ── */}
        {active === "skills & languages" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="bg-white/2 border border-[#00ffc8]/15 rounded-xl p-6"
            >
              <div className="text-[1.8rem] mb-3">🌐</div>
              <h3 className="text-[1.05rem] font-bold text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-col gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-3 rounded border border-white/08 bg-white/1"
                  >
                    <span className="font-mono text-[0.8rem] text-white">
                      {lang.name}
                    </span>
                    <span className="font-mono text-[0.65rem] text-[#00ffc8] bg-[#00ffc8]/10 px-3 py-1 rounded-full border border-[#00ffc8]/25">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/2 border border-[#00ffc8]/15 rounded-xl p-6"
            >
              <div className="text-[1.8rem] mb-3">💡</div>
              <h3 className="text-[1.05rem] font-bold text-white mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[0.72rem] text-white/80 bg-white/2 border border-[#00ffc8]/20 px-3.5 py-2 rounded-lg"
                  >
                    ✦ {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
}
