"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#080c10]/95 border-b border-[#00ffc8]/15"
            : "bg-[#080c10]/80 border-b border-[#00ffc8]/08"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-17 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[#00ffc8] text-base tracking-wider cursor-pointer"
        >
          _<span className="text-white/25">dev</span>.portfolio
        </motion.div>

        {/* Desktop Links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 list-none"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative font-mono text-[0.68rem] tracking-widest uppercase pb-1
                  transition-colors duration-200 group
                  ${active === link.label ? "text-[#00ffc8]" : "text-white/40 hover:text-white"}`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-[#00ffc8] transition-all duration-300
                    ${active === link.label ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            </li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block bg-[#00ffc8] text-[#080c10] font-mono font-bold
            text-[0.68rem] tracking-widest uppercase px-5 py-2.5 rounded
            hover:bg-[#00e6b4] hover:-translate-y-0.5 transition-all duration-150"
        >
          Hire Me
        </motion.button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/60 hover:text-[#00ffc8] transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#080c10]/98 border-b border-[#00ffc8]/10
            flex flex-col px-8 py-6 gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className={`font-mono text-xs tracking-widest uppercase transition-colors
                ${active === link.label ? "text-[#00ffc8]" : "text-white/40 hover:text-[#00ffc8]"}`}
            >
              {link.label}
            </a>
          ))}
          <button
            className="bg-[#00ffc8] text-[#080c10] font-mono font-bold
            text-xs tracking-widest uppercase px-5 py-2.5 rounded w-fit mt-2"
          >
            Hire Me
          </button>
        </motion.div>
      )}
    </header>
  );
}
