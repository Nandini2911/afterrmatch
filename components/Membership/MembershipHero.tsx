"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MembershipHero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth cinematic parallax
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[620px] w-full overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0"
      >
        <Image
          src="/membership.png"
          alt="Luxury Pickleball Club"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/35" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8 md:px-10">

          {/* SMALL TAG */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    group
    relative
    mb-8
    overflow-hidden
    rounded-full
    border
    border-white/20

    bg-gradient-to-r
    from-[#0F2D45]/80
    via-[#1F5D8C]/70
    to-white/20

    px-4
    py-2
    backdrop-blur-2xl

    shadow-[0_8px_30px_rgba(31,93,140,0.35)]

    sm:px-6
    sm:py-3
  "
>
  {/* Glow Effect */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-white/0
      via-white/20
      to-white/0
      opacity-60
    "
  />

  <p
    className="
      relative
      z-10
      text-[10px]
      font-medium
      uppercase
      tracking-[0.35em]
      text-white
      sm:text-xs
    "
  >
    Exclusive Membership
  </p>
</motion.div>
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-5xl
              text-center
              font-semibold
              leading-[1.1]
              tracking-[-0.05em]
              text-white
              drop-shadow-md

              text-[2rem]
              sm:text-[2rem]
              md:text-[3rem]
             
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", ui-serif, Georgia, serif',
            }}
          >
            More Than A Club.
            <br />
            A Lifestyle Built Around The Game.
          </motion.h1>

          
          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              flex
              flex-col
              items-center
              gap-4
              sm:mt-12
              sm:flex-row
            "
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}