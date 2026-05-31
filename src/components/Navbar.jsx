'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home',       href: 'home'       },
  { label: 'About',      href: 'about'      },
  { label: 'Skills',     href: 'skills'     },
  { label: 'Projects',   href: 'projects'   },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact',    href: 'contact'    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState('home');
  const [menuOpen,  setMenuOpen]  = useState(false);

  // scrolled state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // active section on scroll using IntersectionObserver
  useEffect(() => {
    const observers = [];

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-[#080c10]/95 backdrop-blur-sm border-b border-[#00ffc8]/15'
        : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollTo('home')}
          className="font-mono text-[#00ffc8] text-base tracking-wider cursor-pointer"
        >
          _<span className="text-white/25">dev</span>.portfolio
        </motion.div>

        {/* Desktop links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 list-none"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`relative font-mono text-[0.68rem] tracking-widest
                  uppercase pb-1 transition-colors duration-200 group
                  ${active === link.href
                    ? 'text-[#00ffc8]'
                    : 'text-white/40 hover:text-white'
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-px bg-[#00ffc8]
                  transition-all duration-300
                  ${active === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </button>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => scrollTo('contact')}
          className="hidden md:block bg-[#00ffc8] text-[#080c10] font-mono
            font-bold text-[0.68rem] tracking-widest uppercase px-5 py-2.5
            rounded hover:bg-[#00e6b4] hover:-translate-y-0.5 transition-all duration-150"
        >
          Hire Me
        </motion.button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/60 hover:text-[#00ffc8] transition-colors"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#080c10]/98 backdrop-blur-sm
            border-b border-[#00ffc8]/10 flex flex-col px-8 py-6 gap-5"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`font-mono text-xs tracking-widest uppercase
                text-left transition-colors
                ${active === link.href
                  ? 'text-[#00ffc8]'
                  : 'text-white/40 hover:text-[#00ffc8]'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-[#00ffc8] text-[#080c10] font-mono font-bold
              text-xs tracking-widest uppercase px-5 py-2.5 rounded w-fit"
          >
            Hire Me
          </button>
        </motion.div>
      )}
    </header>
  );
}