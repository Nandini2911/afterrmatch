"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const amenities = [
  {
    title: "New Equipment",
    image: "/new.jpg",
  },
  {
    title: "Showers and Locker Rooms",
    image: "/GYM.jpeg",
  },
  {
    title: "Coffee and Snacks",
    image: "/snack.png",
  },
  {
    title: "Juice Bar",
    image: "/juice.jpg",
  },
];

export default function ClubExperience() {
  const amenitiesRef = useRef(null);

  // ================= SMOOTH SCROLL =================
  const { scrollYProgress } = useScroll({
    target: amenitiesRef,
    offset: ["start end", "end start"],
  });

  // ================= ULTRA SMOOTH SPRING =================
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    mass: 0.7,
  });

  // ================= TITLE EFFECT =================
  const titleScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.98, 1, 0.99]
  );

  const titleOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 1],
    [0.5, 1, 0.9]
  );

  // ================= LIGHT FLOW =================
  const lineX = useTransform(
    smoothProgress,
    [0, 1],
    ["-10%", "110%"]
  );

  return (
    <main className="bg-[#2B4E66] text-white overflow-hidden">
      <section
        ref={amenitiesRef}
        className="
          relative
          transform-gpu
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          px-5
          md:px-10
          py-32
          overflow-hidden
        "
      >
        {/* ================= BACKGROUND GLOW ================= */}
        <div
          className="
            absolute
            top-[-180px]
            left-1/2
            -translate-x-1/2

            w-[900px]
            h-[900px]

            rounded-full
            bg-white/[0.04]

            blur-[140px]

            pointer-events-none
          "
        />

        {/* ================= TITLE ================= */}
        <motion.div
          style={{
            scale: titleScale,
            opacity: titleOpacity,
          }}
          className="relative z-10"
        >
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
            className="
              text-center
              uppercase
              leading-[0.92]

              text-[40px]
              sm:text-[58px]
              md:text-[76px]
              lg:text-[96px]

              tracking-[-3px]
              text-white
            "
          >
            OUR CLUB AMENITIES
          </h2>
        </motion.div>

      

        {/* ================= LINE ================= */}
        <div className="relative w-full max-w-[1800px] mt-24 z-10">
          <div className="w-full h-[1px] bg-white/15 relative overflow-hidden">
            {/* MOVING LIGHT */}
            <motion.div
              style={{
                x: lineX,
              }}
              className="
                absolute
                top-0

                w-52
                h-full

                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent

                opacity-60
              "
            />
          </div>

          {/* VERTICAL LINES */}
          <div
            className="
              absolute
              top-0
              left-0
              w-full

              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-4
            "
          >
            {amenities.map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                whileInView={{
                  height: "140px",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="
                  mx-auto
                  w-[1px]

                  bg-gradient-to-b
                  from-white/40
                  via-white/10
                  to-transparent
                "
              />
            ))}
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div
          className="
            relative
            z-10

            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4

            gap-y-20
            gap-x-8

            mt-28

            w-full
            max-w-[1800px]
          "
        >
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                flex
                flex-col
                items-center
                text-center
                group
                will-change-transform
              "
            >
              {/* ================= IMAGE ================= */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="relative will-change-transform"
              >
                {/* OUTER GLOW */}
                <div
                  className="
                    absolute
                    inset-[-15px]

                    rounded-full
                    bg-white/[0.06]

                    blur-2xl
                    opacity-60

                    group-hover:opacity-100

                    transition-all
                    duration-700
                  "
                />

                {/* OUTER RING */}
                <div
                  className="
                    absolute
                    inset-[-10px]

                    rounded-full
                    border
                    border-white/10

                    group-hover:border-white/25

                    transition-all
                    duration-700
                  "
                />

                {/* IMAGE WRAP */}
                <div
                  className="
                    relative

                    w-40
                    h-40

                    sm:w-44
                    sm:h-44

                    md:w-48
                    md:h-48

                    lg:w-52
                    lg:h-52

                    rounded-full
                    overflow-hidden

                    border
                    border-white/20

                    shadow-[0_20px_50px_rgba(0,0,0,0.25)]

                    transition-all
                    duration-700

                    group-hover:scale-[1.03]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      w-full
                      h-full
                      object-cover

                      transition-transform
                      duration-[1800ms]
                      ease-out

                      group-hover:scale-110
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-white/5
                    "
                  />
                </div>
              </motion.div>

              {/* ================= TITLE ================= */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.05,
                }}
                className="
                  mt-10

                  text-[28px]
                  sm:text-[30px]

                  leading-[1.2]
                  max-w-[260px]

                  text-white

                  tracking-[-0.5px]
                "
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 300,
                }}
              >
                {item.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        {/* ================= EXTRA SPACE ================= */}
 
      </section>
    </main>
  );
}