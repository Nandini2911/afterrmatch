"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function LifestyleHero() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="our-story"
      className="
        relative
        min-h-screen
        bg-[#2b4E66]
        overflow-hidden

        flex
        items-center
        justify-center

        px-5
        md:px-8
        lg:px-12

        pt-[180px]
        md:pt-[220px]
      "
    >
      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          w-full
          max-w-[1000px]

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
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="
            uppercase

            text-white

            text-center

            font-black

            leading-[1.2]

            tracking-[-0.05em]

            text-[22px]
            sm:text-[30px]
            md:text-[40px]
          

            max-w-[900px]

            mx-auto
          "
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          RESERVED FOR
          
          THE ATHLETE WHO
          <br />
          MAKES SPORT A
          
          LIFESTYLE
        </motion.h1>

        {/* SUBTITLE */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="
            mt-10
            md:mt-14

            text-white/95

            text-center

            leading-[1.4]

            font-normal

            text-[15px]
            sm:text-[18px]
            md:text-[20px]
         

            max-w-[900px]

            mx-auto
          "
          style={{
            fontFamily:
              'Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        >
          Reserve is pioneering a new sport across the United States
          by creating players, fans and friends. This community,
          built on and around the court, will showcase the world’s
          newest, most exciting game: padel. Through padel clubs,
          activations, pop-ups, and tournaments, Reserve will propel
          to new heights by developing athletes throughout America.
        </motion.p>

        {/* SCROLL LINE */}

        <div
  className="
    relative

    mt-10

    w-screen
    max-w-full

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

      {/* GLOW */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]

          pointer-events-none
        "
      />
    </section>
  );
}