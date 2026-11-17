"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EventsGallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFB] px-6 py-24 text-[#2B4E66] md:py-32">
      {/* Background Premium Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#2B4E66]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#6288B9]/15 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(43,78,102,0.18) 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#2B4E66]/15 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#2B4E66] shadow-sm backdrop-blur-md">
            Event Memories
          </span>
<motion.h2
  className="mt-7 overflow-hidden text-4xl leading-tight md:text-6xl"
  style={{
    fontFamily: '"Cormorant Garamond", serif',
  }}
>
  {/* Experience The - comes from right */}
  <motion.span
    initial={{
      opacity: 0,
      x: 120,
      filter: "blur(8px)",
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.85,
      ease: "easeOut",
    }}
    className="block"
  >
    Experience The
  </motion.span>

  {/* Afterr Match Moments - comes from left */}
  <motion.span
    initial={{
      opacity: 0,
      x: -120,
      filter: "blur(8px)",
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    }}
    viewport={{ once: true }}
    transition={{
      delay: 0.18,
      duration: 0.9,
      ease: "easeOut",
    }}
    className="block bg-gradient-to-r from-[#2B4E66] via-[#6288B9] to-[#2B4E66] bg-clip-text text-transparent"
  >
    Afterr Match Moments
  </motion.span>
</motion.h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#2B4E66]/70 md:text-lg">
            Explore our event highlights, launch memories, community moments,
            tournaments, gaming nights and premium experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Launch Day Card */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <Link href="/events/launch-day" className="group block">
              <div className="relative h-[470px] overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-[0_25px_80px_rgba(43,78,102,0.18)]">
                {/* Card Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/launch/launchday2.webp')",
                  }}
                />

                

                {/* Category */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2B4E66]"
                >
                  Launch Day
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  
                  <h3
                    className="mt-3 text-4xl leading-none text-white"
                    style={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
                  >
                    Launch Day
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/72">
                    A premium opening day filled with games, energy, community,
                    music and unforgettable Afterr Match moments.
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                   

                   
                  </div>
                </div>

                {/* Border Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/10 transition duration-500 group-hover:border-white/50" />
              </div>
            </Link>
          </motion.div>

        
        </div>
      </div>
    </section>
  );
}