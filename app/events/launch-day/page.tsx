"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type LaunchDayMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

const launchDayMedia: LaunchDayMedia[] = [
  {
    type: "image",
    src: "/launch4.jpg",
  
  },
  {
    type: "image",
    src: "/launch4.jpg",
  },
  {
    type: "image",
    src: "/launch/launch5.jpg",
  },
  {
    type: "image",
    src: "/launch/launch6.jpg",
  },
  {
    type: "image",
    src: "/launch/launch7.jpg",
  },
  {
    type: "image",
    src: "/launch/launch8.jpg",
  },  
  {
    type: "image",
    src: "/launch/launch9.jpg", 
  },
  {
    type: "image",
    src: "/launch/launch10.jpg",
  },
  {
    type: "image",
    src: "/launch/launch11.jpg",
  },
  {
    type: "image",
    src: "/launch/launch12.jpg",
  },
  {
    type: "image",
    src: "/launch/launch13.jpg",
  },
  {
    type: "image", 
    src: "/launch/launch14.jpg",
  },
  {
    type: "image",
    src: "/launch/launch15.jpg",
  },
  {
    type: "image",
    src: "/launch/launch16.jpg",
  },
  
];

const masonryHeights = [
  "h-[520px]",
  "h-[390px]",
  "h-[470px]",
  "h-[360px]",
  "h-[560px]",
  "h-[430px]",
  "h-[500px]",
  "h-[380px]",
];

export default function LaunchDayPage() {
  return (
    <main className="relative overflow-hidden bg-[#F7FAFB] text-[#2B4E66]">
      <Navbar />

      {/* Top Hero */}
      <section className="relative overflow-hidden bg-[#F7FAFB] px-6 py-24 text-[#2B4E66] md:py-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#2B4E66]/10 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#6288B9]/15 blur-3xl"
          />

          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(43,78,102,0.16) 1px, transparent 0)",
              backgroundSize: "34px 34px",
            }}
          />
        </div>

        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="max-w-2xl"
          >
            <Link
              href="/events"
              className="mb-8 inline-flex rounded-full border border-[#2B4E66]/15 bg-white/80 px-5 py-2 text-sm uppercase tracking-[0.25em] text-[#2B4E66] shadow-sm backdrop-blur-md transition hover:bg-[#2B4E66] hover:text-white"
            >
              ← Back To Events
            </Link>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.75,
                ease: smoothEase,
              }}
              className="text-sm uppercase tracking-[0.35em] text-[#2B4E66]/60"
            >
              Opening Experience / Launch Day
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.85,
                ease: smoothEase,
              }}
              className="mt-6 text-5xl leading-none md:text-7xl lg:text-8xl"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Launch{" "}
              <span className="bg-gradient-to-r from-[#2B4E66] via-[#6288B9] to-[#2B4E66] bg-clip-text text-transparent">
                Day
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.75,
                ease: smoothEase,
              }}
              className="mt-7 max-w-xl text-base leading-relaxed text-[#2B4E66]/70 md:text-lg"
            >
              A premium opening day filled with energy, games, community, music
              and unforgettable Afterr Match experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.75,
                ease: smoothEase,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="rounded-full border border-[#2B4E66]/10 bg-white/75 px-5 py-3 text-sm uppercase tracking-[0.25em] shadow-[0_15px_45px_rgba(43,78,102,0.10)] backdrop-blur-md">
                Premium Moments
              </div>

              <div className="rounded-full border border-[#2B4E66]/10 bg-white/75 px-5 py-3 text-sm uppercase tracking-[0.25em] shadow-[0_15px_45px_rgba(43,78,102,0.10)] backdrop-blur-md">
                Photo & Video
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 90, rotate: 3, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, rotate: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.25,
              duration: 1,
              ease: smoothEase,
            }}
            className="relative"
          >
            <div className="relative mx-auto h-[500px] max-w-[520px] overflow-hidden rounded-[42px] border border-white bg-white p-3 shadow-[0_30px_100px_rgba(43,78,102,0.22)] md:h-[560px]">
              <div className="relative h-full w-full overflow-hidden rounded-[32px]">
                <img
                  src="/launch4.jpg"
                  alt="Launch Day"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102837]/55 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-8 top-8 rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md"
              >
                Launch Memories
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.75,
                  duration: 0.75,
                  ease: smoothEase,
                }}
                className="absolute bottom-8 left-8 right-8 rounded-[26px] border border-white/20 bg-white/15 p-5 text-white backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/65">
                  Afterr Match
                </p>

                <h3
                  className="mt-2 text-3xl"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  Opening Day
                </h3>
              </motion.div>
            </div>

            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[#2B4E66]/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-[#2B4E66]/10 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.15, 1, 1.15],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 right-[-10%] h-96 w-96 rounded-full bg-[#6288B9]/10 blur-3xl"
          />

          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(43,78,102,0.16) 1px, transparent 0)",
              backgroundSize: "34px 34px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: smoothEase,
            }}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: smoothEase,
                }}
                className="block text-sm uppercase tracking-[0.35em] text-[#2B4E66]/55"
              >
                Photo & Video Gallery
              </motion.span>

              <h2
                className="mt-4 overflow-hidden text-4xl leading-tight md:text-6xl"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: 100, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                    duration: 0.85,
                    ease: smoothEase,
                  }}
                  className="block"
                >
                  Moments From
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -100, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.22,
                    duration: 0.85,
                    ease: smoothEase,
                  }}
                  className="block bg-gradient-to-r from-[#2B4E66] via-[#6288B9] to-[#2B4E66] bg-clip-text text-transparent"
                >
                  The Launch
                </motion.span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.75,
                ease: smoothEase,
              }}
              className="max-w-md text-sm leading-relaxed text-[#2B4E66]/65"
            >
              A curated collection of premium launch memories, candid moments,
              event videos, court energy, community interactions and Afterr
              Match experiences.
            </motion.p>
          </motion.div>

          {/* Pinterest Style Photo + Video Masonry */}
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {launchDayMedia.map((media, index) => {
              const heightClass = masonryHeights[index % masonryHeights.length];

              return (
                <motion.div
                  key={`${media.type}-${media.src}`}
                  initial={{
                    opacity: 0,
                    y: 45,
                    scale: 0.96,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.75,
                    delay: (index % 3) * 0.08,
                    ease: smoothEase,
                  }}
                  className="group mb-6 break-inside-avoid overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-[0_20px_70px_rgba(43,78,102,0.14)]"
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-[24px] bg-[#102837] ${heightClass}`}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.src}
                        alt={`Launch Day Photo ${index + 1}`}
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <video
                        src={media.src}
                        poster={media.poster}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                      />
                    )}

                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#102837]/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute left-5 top-5 z-[2] rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                      {media.type === "image" ? "Photo" : "Video"}
                    </div>

                    <div className="pointer-events-none absolute bottom-5 left-5 z-[2] translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2B4E66]">
                        {media.type === "image"
                          ? `Photo ${index + 1}`
                          : `Video ${index + 1}`}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}