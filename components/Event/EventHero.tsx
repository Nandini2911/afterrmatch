"use client";

import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2B4E66] via-[#345c77] to-[#2B4E66]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-24">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md"
          >
            <span className="text-sm font-medium tracking-[0.3em] text-white">
              EXCLUSIVE EVENTS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-5xl leading-none text-white md:text-7xl lg:text-8xl"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            Unforgettable
            <br />
            <span className="font-semibold">
              Events Coming Soon
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            We're preparing exciting pickleball tournaments,
            gaming competitions, community gatherings, and
            unforgettable Afterr Match experiences.
          </motion.p>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mx-auto mt-14 max-w-2xl rounded-[32px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl"
          >
            <div className="text-7xl font-bold text-white/10 md:text-8xl">
              2026
            </div>

            <h3
              className="mt-3 text-3xl text-white"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Something Special Is On The Way
            </h3>

            <p className="mt-4 text-white/70">
              Stay tuned for exclusive tournaments, gaming nights,
              social events, and premium community experiences.
            </p>

            {/* Loading Dots */}
            <div className="mt-8 flex justify-center gap-3">
              <div className="h-3 w-3 animate-bounce rounded-full bg-white" />
              <div
                className="h-3 w-3 animate-bounce rounded-full bg-white"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="h-3 w-3 animate-bounce rounded-full bg-white"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}