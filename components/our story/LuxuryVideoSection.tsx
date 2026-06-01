"use client";

import { motion } from "framer-motion";

export default function LuxuryVideoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2B4E66] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="relative z-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1400px] text-center">
          {/* TOP LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mb-5
              text-white/70
              uppercase
              tracking-[0.45em]
              text-[10px]
              sm:text-xs
            "
          >
            AFTERRMATCH EXPERIENCE
          </motion.p>

          {/* TITLE */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >
            <h2
              className="
                uppercase
                leading-[0.92]
                tracking-[-0.03em]
                text-white

                text-[34px]
                sm:text-[52px]
                md:text-[68px]
                lg:text-[88px]
             
              
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              WHERE PERFORMANCE
              <br />
              MEETS LIFESTYLE
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-6
              sm:mt-8
              max-w-[820px]
              px-2

              text-white/75
              leading-[1.8]

              text-[15px]
              sm:text-[17px]
              md:text-[20px]
              lg:text-[22px]
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", ui-serif, Georgia, serif',
            }}
          >
            Discover the new era of modern sport — where competition,
            culture, luxury, and community come together through the
            energy of modern padel culture.
          </motion.p>

          {/* VIDEO CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              relative
              mt-10
              sm:mt-14
              lg:mt-16
              overflow-hidden

              rounded-[20px]
              sm:rounded-[24px]
              lg:rounded-[32px]

              border border-white/10
            "
          >
            {/* VIDEO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="
                w-full

                h-[220px]
                sm:h-[320px]
                md:h-[420px]
                lg:h-[550px]
                xl:h-[650px]
                2xl:h-[750px]

                object-cover
              "
              style={{
                filter: "brightness(0.88)",
              }}
            >
              <source
                src="https://video.wixstatic.com/video/2d8d9d_bf4f3ca8525f4aa4935b2d7f6659fe63/1080p/mp4/file.mp4"
                type="video/mp4"
              />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* VIDEO TEXT */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-10 lg:p-14 text-left">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="
                  text-white/70
                  uppercase
                  tracking-[0.35em]

                  text-[9px]
                  sm:text-[11px]
                  md:text-xs
                "
              >
                Luxury Padel Experience
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="
                  mt-3
                  text-white
                  uppercase
                  font-black
                  leading-[0.9]

                  text-[22px]
                  sm:text-[38px]
                  md:text-[54px]
               
                "
                style={{
                  fontFamily:
                    '"Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                PLAY BEYOND
                <br />
                COMPETITION
              </motion.h3>
            </div>
          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12"
          >
            <button
              className="
                group
                relative
                overflow-hidden

                border
                border-white/30

                px-6
                sm:px-8
                lg:px-10

                py-3
                sm:py-4

                uppercase
                tracking-[0.28em]

                text-[10px]
                sm:text-[11px]

                font-semibold
                text-white
              "
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Become a Member
              </span>

              <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}