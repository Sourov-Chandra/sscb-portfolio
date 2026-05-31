"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 120);

    const timer = setTimeout(() => setVisible(false), 1800);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#080c10] flex flex-col
            items-center justify-center gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[#00ffc8] text-xl tracking-widest"
          >
            _<span className="text-white/25">dev</span>.portfolio
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#00ffc8] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Counter */}
          <span className="font-mono text-[0.65rem] text-white/25 tracking-widest">
            {Math.min(Math.round(progress), 100)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
