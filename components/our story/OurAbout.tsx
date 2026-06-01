"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative p-4 sm:p-6 md:p-6 lg:p-8"
        >
          <div className="relative overflow-hidden h-[55vh] sm:h-[65vh] md:h-[80vh] lg:h-[92vh] shadow-2xl">
           <Image
  src="/about.jpeg"
  alt=""
  fill
  sizes="100vw"
  className="object-cover"
/>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-0"
        >
          <div className="max-w-[620px] mt-7">
            
            {/* HEADING */}
            <h2
              className="text-[#2b4E66] uppercase leading-[0.92]
              text-[32px]
              sm:text-[38px]
              md:text-[48px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
            THE STORY OF 
              <br />
           AFTERRMATCH
            </h2>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }}
              className="h-[2px] bg-[#2b4E66] mt-4 mb-4"
            />

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-8 text-[#111] leading-[1.6]
              text-[15px]
              sm:text-[16px]
              md:text-[18px]"
              style={{
                fontFamily:
                  '"Cormorant Garamond", ui-serif, Georgia, serif',
              }}
            >
              <p>
               Not just a court. Not just a clubhouse.
A new kind of everyday escape is arriving.



              </p>

              <p>
                From high-energy pickleball matches to laid-back pool table nights, this space is designed for people who want more than a routine hangout. Whether you come to compete, unwind, socialize, network, or simply spend better time with better people — every corner is built around movement, community, and experience.

              </p>
              <p>
                With exclusive memberships, vibrant game zones, premium lounging spaces, and an atmosphere that feels alive from morning rallies to late-evening conversations, this is where sport, lifestyle, and culture come together.

              </p>
             
            </motion.div>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-12 mb-20"
            >
              <button className="group relative overflow-hidden border border-black px-8 py-4 uppercase tracking-[0.25em] text-[12px] font-semibold">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Learn More
                </span>

                <span className="absolute inset-0 bg-[#2b4E66] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}