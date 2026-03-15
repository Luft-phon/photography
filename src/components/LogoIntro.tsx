"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Prevent scrolling while intro is active
    document.body.style.overflow = "hidden";

    // Hide the intro after 2 seconds
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "unset";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d130f] text-white"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tighter uppercase relative"
          >
            <div className="flex flex-col items-center gap-4">
              <img src="/logo/logo.png" alt="Logo" width={320} height={120} />
              <p className="text-4xl tracking-[0.1px] font-gloock">thanhphongchupanh</p>
            </div>
            <motion.div
              className="absolute -bottom-4 left-0 h-[2px] bg-white"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
