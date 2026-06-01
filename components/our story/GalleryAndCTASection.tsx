"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    src: "/ga1.jpg",
    height: "h-[320px]",
    title: "Championship Courts",
  },
  {
    src: "/ga2.jpg",
    height: "h-[460px]",
    title: "Players Lounge",
  },
  {
    src: "/ga3.jpg",
    height: "h-[380px]",
    title: "After Match Nights",
  },
  {
    src: "/ga4.jpg",
    height: "h-[520px]",
    title: "Luxury Fashion",
  },
  {
    src: "/ga5.jpg",
    height: "h-[340px]",
    title: "VIP Events",
  },
  {
    src: "/ga6.jpg",
    height: "h-[500px]",
    title: "Elite Community",
  },
  {
    src: "/ga7.jpg",
    height: "h-[390px]",
    title: "Padel Culture",
  },
  {
    src: "/ga8.jpg",
    height: "h-[450px]",
    title: "Members Only",
  },
];

export default function GalleryAndCTASection() {
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  // ZOOM IN → ZOOM OUT
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.15, 0.9]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.4]
  );

  return (
    <>
      {/* ========================= */}
      {/* LUXURY GALLERY SECTION */}
      {/* ========================= */}
      <section className="relative overflow-hidden bg-white py-28 md:py-36">
        {/* background glow */}
        <div className="absolute left-[-200px] top-20 h-[420px] w-[420px] rounded-full bg-[#2B4E66]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-[-180px] h-[380px] w-[380px] rounded-full bg-[#2B4E66]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.45em] text-[#2B4E66]/60">
              Lifestyle Gallery
            </p>

            <h2
              className="
                max-w-[1100px]
                text-5xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.05em]
                text-[#2B4E66]
                sm:text-7xl
                md:text-[90px]
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              SPORT.
              <br />
              CULTURE.
              <br />
              LUXURY.
            </h2>
          </motion.div>

          {/* masonry grid */}
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="mb-6 break-inside-avoid"
              >
                <div
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-[#2B4E66]/10
                    bg-[#f7f9fb]
                    ${item.height}
                  `}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* top glow */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[-100px]
                      h-[200px]
                      w-[200px]
                      -translate-x-1/2
                      rounded-full
                      bg-white/20
                      blur-[90px]
                    "
                  />

                  {/* text */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.4em]
                        text-white/60
                      "
                    >
                      After Match
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-bold
                        uppercase
                        leading-none
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FINAL CTA SECTION */}
      {/* ========================= */}
      <section
        ref={ctaRef}
        className="
          relative
          overflow-hidden
          bg-[#2B4E66]
          py-32
          md:py-44
        "
      >
        

        {/* glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#2B4E66]/40
            blur-[160px]
          "
        />

        <motion.div
          style={{
            scale,
            opacity,
          }}
          className="relative z-10 mx-auto max-w-[1200px] px-6 text-center will-change-transform"
        >
          {/* small text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mb-6
              text-sm
              font-medium
              uppercase
              tracking-[0.45em]
              text-white/50
            "
          >
            The Future Of Elite Sport Culture
          </motion.p>

          {/* main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              mx-auto
              max-w-[1100px]
              text-5xl
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              sm:text-7xl
              md:text-[70px]
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            JOIN THE
            <br />
            NEXT GENERATION
            <br />
            OF SPORT
          </motion.h2>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
            "
          >
            {/* primary */}
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-[#2B4E66]
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
             
                text-white
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_60px_rgba(43,78,102,0.7)]
              "
            >
              <span className="relative z-5">
                Become a Member
              </span>

              <div
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-white/20
                  transition-transform
                  duration-700
                  group-hover:translate-x-0
                "
              />
            </button>

            {/* secondary */}
            <button
              className="
                rounded-full
                border
                border-white/20
                bg-white/5
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                hover:text-[#2B4E66]
                text-white
                backdrop-blur-xl
                transition-all
                duration-500
                hover:scale-105
                hover:border-[#2B4E66]
                hover:bg-white
              "
            >
              Book a Court
            </button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}