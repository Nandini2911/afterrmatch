"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function ParallaxTextSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ULTRA SMOOTH */
  const smooth = {
    stiffness: 40,
    damping: 20,
    mass: 1,
  };

  /* STACK REVEAL */

  const playY = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [120, 0]),
    smooth
  );

  const competeY = useSpring(
    useTransform(scrollYProgress, [0.2, 0.45], [120, 0]),
    smooth
  );

  const connectY = useSpring(
    useTransform(scrollYProgress, [0.4, 0.65], [120, 0]),
    smooth
  );

  const belongY = useSpring(
    useTransform(scrollYProgress, [0.6, 0.85], [120, 0]),
    smooth
  );

  /* OPACITY */

  const playOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.12],
    [0, 1]
  );

  const competeOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.32],
    [0, 1]
  );

  const connectOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.52],
    [0, 1]
  );

  const belongOpacity = useTransform(
    scrollYProgress,
    [0.62, 0.72],
    [0, 1]
  );

  /* SCALE */

  const playScale = useTransform(
    scrollYProgress,
    [0.02, 0.12],
    [0.94, 1]
  );

  const competeScale = useTransform(
    scrollYProgress,
    [0.22, 0.32],
    [0.94, 1]
  );

  const connectScale = useTransform(
    scrollYProgress,
    [0.42, 0.52],
    [0.94, 1]
  );

  const belongScale = useTransform(
    scrollYProgress,
    [0.62, 0.72],
    [0.94, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[320vh] bg-[#f7f7f5]"
    >
      {/* STICKY SECTION */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] rounded-full bg-[#2B4E66]/10 blur-3xl" />
        </div>

        {/* TEXT CONTAINER */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
            w-full
            px-4
          "
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          {/* PLAY */}
          <motion.h2
            style={{
              y: playY,
              opacity: playOpacity,
              scale: playScale,
            }}
            className="
              uppercase
              font-black
              leading-[0.9]
              tracking-[-0.08em]
              text-center

              bg-gradient-to-r
              from-[#2B4E66]
              via-[#9DB4C3]
              to-[#2B4E66]
              bg-clip-text
              text-transparent

              text-[52px]
              sm:text-[80px]
              md:text-[110px]
              lg:text-[140px]
            "
          >
            PLAY
          </motion.h2>

          {/* COMPETE */}
          <motion.h2
            style={{
              y: competeY,
              opacity: competeOpacity,
              scale: competeScale,
            }}
            className="
              uppercase
              font-black
              leading-[0.9]
              tracking-[-0.08em]
              text-center

              bg-gradient-to-r
              from-[#2B4E66]
              via-[#9DB4C3]
              to-[#2B4E66]
              bg-clip-text
              text-transparent

              text-[58px]
              sm:text-[95px]
              md:text-[135px]
              lg:text-[170px]
            "
          >
            COMPETE
          </motion.h2>

          {/* CONNECT */}
          <motion.h2
            style={{
              y: connectY,
              opacity: connectOpacity,
              scale: connectScale,
            }}
            className="
              uppercase
              font-black
              leading-[0.9]
              tracking-[-0.08em]
              text-center

              bg-gradient-to-r
              from-[#2B4E66]
              via-[#9DB4C3]
              to-[#2B4E66]
              bg-clip-text
              text-transparent

              text-[62px]
              sm:text-[105px]
              md:text-[150px]
              lg:text-[190px]
            "
          >
            CONNECT
          </motion.h2>

          {/* BELONG */}
          <motion.h2
            style={{
              y: belongY,
              opacity: belongOpacity,
              scale: belongScale,
            }}
            className="
              uppercase
              font-black
              leading-[0.9]
              tracking-[-0.08em]
              text-center

              bg-gradient-to-r
              from-[#2B4E66]
              via-[#9DB4C3]
              to-[#2B4E66]
              bg-clip-text
              text-transparent

              text-[68px]
              sm:text-[120px]
              md:text-[170px]
              lg:text-[220px]
            "
          >
            BELONG
          </motion.h2>
        </div>

        {/* SIDE LABEL */}
        <div
          className="
            absolute
            left-8
            top-1/2
            hidden
            -translate-y-1/2
            -rotate-90
            md:block
          "
        >
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-[#2B4E66]/35
              text-[11px]
            "
          >
            AFTERMATCH EXPERIENCE
          </p>
        </div>
      </div>
    </section>
  );
}