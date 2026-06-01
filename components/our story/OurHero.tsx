"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function LifestyleHero() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      id="our-story"
      className="
        relative
        min-h-screen
        overflow-hidden

        flex
        items-center
        justify-center

        px-4
        sm:px-6
        md:px-8
        lg:px-12

        py-24
        sm:py-28
        md:py-32
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/our_story.png"
          alt="Lifestyle Background"
          className="
            absolute
            inset-0
            h-[140%]
            w-full
            object-cover
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 " />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          w-full
          max-w-[1100px]

          mx-auto

          flex
          flex-col
          items-center
          justify-center

          text-center
        "
      >
        {/* HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mt-20
            uppercase
            text-white
            font-black

            leading-[1.05]

            tracking-[-0.04em]

            text-[28px]
           
            md:text-[40px]
            lg:text-[50px]
          

            max-w-[1000px]
            mx-auto
          "
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          RESERVED FOR
          <br />
          THE ATHLETE WHO
         
          MAKES SPORT A
          <br />
          LIFESTYLE
        </motion.h1>

        {/* SCROLL LINE */}
        <div
          className="
            relative

            mt-10
            sm:mt-12
            md:mt-14

            w-full

            h-[1px]

            bg-white/20

            overflow-hidden
          "
        >
          <motion.div
            style={{ scaleX }}
            className="
              absolute
              left-0
              top-0

              h-full
              w-full

              origin-left

              bg-white
            "
          />
        </div>
      </div>

      {/* GLOW EFFECT */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]

          pointer-events-none
        "
      />
    </section>
  );
}