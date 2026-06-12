"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MembershipExperience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* SMOOTH PARALLAX */
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#2B4E66]
       
        text-white
 pb-20
  sm:pb-28
  lg:pb-36
        
      "
    >
      <div className="relative z-10 mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-14">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* TITLE */}
          <h2
            className="
              mt-8
              text-[2.7rem]
              font-semibold
              leading-[1.10]

              sm:text-[4rem]
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", ui-serif, Georgia, serif',
            }}
          >
            Designed For
            <br />
            Players Who Want More
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div
          className="
            mt-16
            grid
            gap-8

            lg:mt-24
            lg:grid-cols-[1.18fr_0.82fr]
            lg:gap-10
          "
        >
          {/* LEFT BIG CARD */}
          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-[42px]

              border
              border-white/10

              shadow-[0_35px_120px_rgba(0,0,0,0.35)]

              min-h-[400px]
            "
          >
            {/* IMAGE */}
            <Image
              src="/pickle ball.png"
              alt="Luxury Club Experience"
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-[1400ms]
                ease-out
                group-hover:scale-105
              "
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

            {/* CONTENT */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-full
                p-7

                sm:p-10
                lg:p-14
              "
            >
              <div className="max-w-[580px]">
                <h3
                  className="
                    mt-5
                    text-[2.4rem]
                    font-semibold
                    leading-[0.92]
                    tracking-[-0.05em]
                  "
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", ui-serif, Georgia, serif',
                  }}
                >
                  More Than Sport.
                  <br />
                  A Modern Social Club.
                </h3>

               
              </div>
            </div>

            {/* INNER BORDER */}
            <div className="absolute inset-[1px] rounded-[42px] border border-white/5 pointer-events-none" />
          </motion.div>

          {/* RIGHT STACK */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
            {/* TOP CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[38px]

                border
                border-white/10

                bg-[#11283d]/70
                shadow-[0_30px_100px_rgba(0,0,0,0.28)]

                min-h-[310px]
                lg:min-h-[365px]
              "
            >
              {/* IMAGE */}
              <Image
                src="/wellness.jpg"
                alt="Wellness Experience"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out

                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10">
                <h4
                  className="
                    mt-4
                    text-[1rem]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.04em]

                    sm:text-[2rem]
                  "
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", ui-serif, Georgia, serif',
                  }}
                >
                  Recharge
                  <br />
                  Beyond The Game
                </h4>

                
              </div>

              {/* INNER BORDER */}
              <div className="absolute inset-[1px] rounded-[38px] border border-white/5 pointer-events-none" />
            </motion.div>

            {/* SECOND CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[38px]

                border
                border-white/10

                bg-[#17324a]/80
                shadow-[0_30px_100px_rgba(0,0,0,0.28)]

                min-h-[310px]
                lg:min-h-[365px]
              "
            >
              {/* IMAGE */}
              <Image
                src="/socialclub.jpeg"
                alt="Luxury Social Club"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out

                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/60">
                  Social Atmosphere
                </p>

                <h4
                  className="
                    mt-4
                    text-[2rem]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.04em]

                    sm:text-[2rem]
                  "
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", ui-serif, Georgia, serif',
                  }}
                >
                  Built Around
                  <br />
                  Community & Culture
                </h4>

               
                
              </div>

              {/* INNER BORDER */}
              <div className="absolute inset-[1px] rounded-[38px] border border-white/5 pointer-events-none" />
            </motion.div>

            {/* THIRD CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[38px]

                border
                border-white/10

                bg-[#17324a]/80
                shadow-[0_30px_100px_rgba(0,0,0,0.28)]

                min-h-[310px]
                lg:min-h-[365px]
              "
            >
              {/* IMAGE */}
              <Image
                src="/launge.jpg"
                alt="Member Lounge"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out

                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/60">
                  Private Experience
                </p>

                <h4
                  className="
                    mt-4
                    text-[2rem]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.04em]

                    sm:text-[2rem]
                  "
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", ui-serif, Georgia, serif',
                  }}
                >
                  Exclusive
                  <br />
                  Member Lounge
                </h4>

                
              </div>

              {/* INNER BORDER */}
              <div className="absolute inset-[1px] rounded-[38px] border border-white/5 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}