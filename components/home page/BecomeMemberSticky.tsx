"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BecomeMemberSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // IMAGE SCALE
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 2]
  );

  // IMAGE OPACITY
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0.95]
  );

  // TEXT OPACITY
  const textOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.32],
    [0, 1]
  );

  // 👇 BECOME MEMBER NICHE SE AAYEGA
  const textY = useTransform(
    scrollYProgress,
    [0.18, 0.38],
    [350, 0]
  );

  // CARD MOVE
  const cardY = useTransform(
    scrollYProgress,
    [0.48, 0.75],
    [250, 0]
  );

  // CARD OPACITY
  const cardOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.6],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[800vh]
        bg-black
      "
    >
      {/* ================= STICKY WRAPPER ================= */}

      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
        "
      >
        {/* ================= IMAGE ================= */}

        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity,
          }}
          className="absolute inset-0"
        >
          <Image
            src=           "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2200&auto=format&fit=crop"


            alt="Club"
            fill
            priority
            className="object-cover"
          />

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/60" />

          
        </motion.div>

        {/* ================= HUGE TEXT ================= */}

        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            z-20

            pointer-events-none
          "
        >
          <h1
            className="
              text-center

              leading-[0.82]
              tracking-[-5px]

              text-[#F1ECE4]

              text-[40px]
              sm:text-[60px]
              md:text-[100px]
             
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", ui-serif, Georgia, serif',
            }}
          >
            Become a Member
          </h1>
        </motion.div>

        {/* ================= CARD ================= */}

        <motion.div
  style={{
    y: cardY,
    opacity: cardOpacity,
  }}
  className="
    absolute
    inset-0

    z-30

    flex
    items-center
    justify-center

    px-5
  "
>
  <div
    className="
      w-full
      max-w-[520px]

      rounded-[32px]

      bg-white

      px-8
      sm:px-12

      py-10
      sm:py-14

      shadow-[0_20px_80px_rgba(0,0,0,0.18)]

      border
      border-[#2B4E66]/10

      backdrop-blur-0
    "
    style={{
      opacity: 1,
      backgroundColor: "#ffffff",
    }}
  >
    {/* TITLE */}

    <h3
      className="
        text-center
        uppercase

        text-[#2B4E66]

        text-[34px]
        sm:text-[48px]

        leading-none
        font-semibold
      "
      style={{
        fontFamily:
          '"Cormorant Garamond", ui-serif, Georgia, serif',
      }}
    >
      COME PLAY!
    </h3>

    {/* DESCRIPTION */}

    <p
      className="
        mt-8

        text-center

        text-[#2B4E66]

        text-[17px]
        sm:text-[22px]

        leading-relaxed
      "
    >
      Built for a community of people that embrace a life of
      athletic elegance; the spirit of competition and the
      pleasure of style.
    </p>
  


            {/* BUTTON */}

            <div className="flex justify-center mt-10">
              <button
                className="
                  rounded-full

                  border
                  border-black

                  bg-[#2B4E66]
                  text-white

                  px-7
                  sm:px-10

                  h-[42px]

                  text-[14px]
                  sm:text-[18px]

                  transition-all
                  duration-500

                  hover:bg-transparent
                  hover:text-black
                "
                style={{
                  fontFamily:
                    '"Cormorant Garamond", ui-serif, Georgia, serif',
                }}
              >
                Become a Member
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}