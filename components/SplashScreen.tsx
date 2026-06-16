"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#2B4E66]
          "
        >
          {/* Soft background circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.18,
              scale: 1,
              transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              bg-white/20
            "
          />

          {/* Smooth outer ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 0.35,
              scale: 1,
              transition: {
                duration: 1.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              opacity: 0,
              scale: 1.12,
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="
              absolute
              h-[390px]
              w-[390px]
              rounded-full
              border
              border-white/25
            "
          />

          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Aftermatch Logo"
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1.4,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="
              relative
              z-10
              w-[330px]
              sm:w-[450px]
              md:w-[580px]
              lg:w-[680px]
              h-auto
              object-contain
              will-change-transform
            "
          />

          {/* Loading line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              transition: {
                duration: 1.6,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              opacity: 0,
              scaleX: 0.85,
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              bottom-[85px]
              h-[2px]
              w-[170px]
              origin-center
              rounded-full
              bg-white/60
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}