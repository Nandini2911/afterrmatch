"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen({
  isVisible,
}: {
  isVisible: boolean;
}) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1.2,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            bg-black
          "
        >
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/intro.mp4"
              type="video/mp4"
            />
          </video>

          {/* Smooth cinematic fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              inset-0
              bg-black
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}