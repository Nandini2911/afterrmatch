"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const videoScale = useTransform(scrollY, [0, 500], [1, 1.04]);

  return (
    <section className="relative bg-white">
      <div
        className="
          relative
          overflow-hidden
          px-3
          sm:px-4
          pt-[88px]
          sm:pt-[95px]
          md:pt-[105px]
        "
      >
        <motion.div
          style={{ scale: videoScale }}
          className="
            relative
            mx-auto
            h-[110vh]
            sm:h-[110vh]
            md:h-[110vh]
            max-w-[1850px]
            overflow-hidden
            rounded-[18px]
            sm:rounded-[24px]
            md:h-[calc(100dvh-125px)]
            md:min-h-[650px]
            md:rounded-[30px]
            border
            border-white/10
          "
        >
          <video
            autoPlay
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.jpg"
            disablePictureInPicture
            className="
              absolute
              inset-0
              block
              h-full
              w-full
              object-cover
              object-center
            "
          >
            <source src="/hero.MP4" type="video/MP4" />
          </video>

          <div
            className="
              absolute
              inset-0
              z-10
              bg-gradient-to-t
              from-black/15
              via-transparent
              to-black/5
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              opacity-[0.06]
              mix-blend-soft-light
            "
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />

          <div
            className="
              relative
              z-20
              flex
              h-full
              flex-col
              items-center
              justify-center
              px-4
              sm:px-6
              text-center
            "
          />
        </motion.div>
      </div>
    </section>
  );
}