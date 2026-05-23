"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const amenities = [
  "New Equipment",
  "Showers and Locker Rooms",
  "Coffee and Snacks",
  "Juice Bar",
  "Cold Plunge",
  "Sauna and Steam Room",
];

export default function ClubExperience() {
  const amenitiesRef = useRef(null);

  // SCROLL
  const { scrollYProgress } = useScroll({
    target: amenitiesRef,
    offset: ["start end", "end start"],
  });

  // TITLE ZOOM
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.7, 1.15, 0.8]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.2, 1, 0.4]
  );

  // MOVING VERTICAL LINE
  const lineX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <main className="bg-[#2B4E66] text-white overflow-hidden">
      {/* ================= AMENITIES ================= */}
      <section
        ref={amenitiesRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-24"
      >
        {/* TITLE */}
        <motion.div
          style={{
            scale: titleScale,
            opacity: titleOpacity,
          }}
        >
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
            className="
            text-center uppercase leading-[0.9]
            text-[40px]
            md:text-[60px]
            lg:text-[90px]
            tracking-[-3px]
            text-white"
          >
            OUR CLUB AMENITIES
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <p
          className="
          max-w-4xl text-center text-white/80 mt-10
          text-sm sm:text-base md:text-xl leading-relaxed"
        >
          At Reserve, each of our clubs offers a unique selection of
          amenities from locker rooms, showers and cold plunges to a
          wellness center that features a steam room and sauna.
        </p>

        {/* ================= LINE ================= */}
        <div className="relative w-full max-w-[1800px] mt-20">
          {/* MAIN HORIZONTAL LINE */}
          <div className="w-full h-[1px] bg-white/30 relative" />

          {/* MOVING VERTICAL LINE */}
          <motion.div
            style={{
              left: lineX,
            }}
            className="
            absolute top-[-20px]
            w-[2px] h-[40px]
            bg-white z-50
           "
          />
        </div>

        {/* ================= ICONS ================= */}
        <div
          className="
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6
          gap-y-20 gap-x-8 mt-24
          w-full max-w-[1600px]"
        >
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* CONTINUOUS MOVING ICON */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative w-24 h-24 flex items-center justify-center"
              >
                {/* OUTER CIRCLE */}
                <div
                  className="
                  absolute inset-0 rounded-full
                  border border-white/90"
                />

                {/* INNER CIRCLE */}
                <div
                  className="
                  absolute w-12 h-12 rounded-full
                  border border-white/70"
                />

                {/* HORIZONTAL LINE */}
                <div
                  className="
                  absolute w-14 h-[1px]
                  bg-white/60"
                />

                {/* VERTICAL LINE */}
                <div
                  className="
                  absolute h-14 w-[1px]
                  bg-white/60"
                />

                {/* EXTRA GLOW CIRCLE */}
                <div
                  className="
                  absolute w-20 h-20 rounded-full
                  border border-white/20"
                />
              </motion.div>

              {/* TEXT */}
              <h3
                className="
                mt-8 text-base md:text-xl
                leading-snug max-w-[180px]"
              >
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}