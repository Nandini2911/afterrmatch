"use client";

import { motion } from "framer-motion";

export default function ExperienceShowcase() {
  return (
    <section className="relative bg-white">
      {/* Total scroll area */}
      <div className="relative h-[300vh]">
        
        {/* ================= HEADING ================= */}

        <div className="sticky top-0 h-screen flex items-center justify-center bg-white z-10">
          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-center px-6"
          >
            <p className="mb-4 uppercase tracking-[0.35em] text-[#2B4E66] text-sm font-medium">
              Experiences
            </p>

            <h2
              className="mt-6 text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#2B4E66] via-[#4f738b] to-white"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              More Than A Match
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-500">
              Premium gaming, social experiences and unforgettable moments
              designed for the Afterr Match community.
            </p>
          </motion.div>
        </div>

        {/* ================= PS5 SECTION ================= */}

        <div className="sticky top-0 h-screen flex items-center bg-white z-20">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[40px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[342px] md:h-[492px] lg:h-[592px] w-full object-cover transition duration-1000 group-hover:scale-105"
                  >
                    <source src="/ps5 video.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
              >
                <span className="inline-block rounded-full bg-[#2B4E66]/10 px-4 py-2 text-sm font-medium text-[#2B4E66]">
                  PS5 Lounge
                </span>

                <h3
                  className="mt-6 text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#2B4E66] via-[#4f738b] to-white"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  The Ultimate Gaming Escape
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Experience next-generation gaming in a premium environment
                  crafted for competition, entertainment and connection.
                </p>

                <div className="mt-10 grid gap-4">
                  {[
                    "Private Gaming Pods",
                    "Latest PS5 Titles",
                    "Luxury Seating",
                    "Group Experiences",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-2xl
                        border border-[#2B4E66]/10
                        bg-gradient-to-br
                        from-white
                        via-white
                        to-[#2B4E66]
                        p-5
                        shadow-[0_10px_30px_rgba(43,78,102,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:shadow-[0_20px_50px_rgba(43,78,102,0.15)]
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= POOL TABLE ================= */}

        <div className="sticky top-0 h-screen flex items-center bg-white z-30">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <span className="inline-block rounded-full bg-[#2B4E66]/10 px-4 py-2 text-sm font-medium text-[#2B4E66]">
                  Pool Tables
                </span>

                <h3
                  className="mt-6 text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#2B4E66] via-[#4f738b] to-white"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  Precision Meets Social Energy
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Relax, compete and connect around professionally maintained
                  pool tables in a refined social atmosphere.
                </p>

                <div className="mt-10 grid gap-4">
                  {[
                    "Premium Tables",
                    "Friendly Competitions",
                    "Private Bookings",
                    "Luxury Lounge Environment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-2xl
                        border border-[#2B4E66]/10
                        bg-gradient-to-br
                        from-white
                        via-white
                        to-[#2B4E66]
                        p-5
                        shadow-[0_10px_30px_rgba(43,78,102,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:shadow-[0_20px_50px_rgba(43,78,102,0.15)]
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="group relative order-1 lg:order-2"
              >
                <div className="relative overflow-hidden rounded-[40px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[350px] md:h-[500px] lg:h-[600px] w-full object-cover transition duration-1000 group-hover:scale-105"
                  >
                    <source src="/pool_table_video.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
       

      </div>
       <div className="relative z-15 flex justify-center py-24 bg-white">
  <button
    className="
      rounded-full
      bg-gradient-to-r from-[#4f738b] via-[#2B4E66]
      px-5
      py-2
      text-lg
      font-medium
      text-white
      transition-all
      duration-500
      hover:scale-105
      hover:shadow-[0_20px_50px_rgba(43,78,102,0.25)]
    "
  >
    Book Now
  </button>
</div>
    </section>
    
  );
}