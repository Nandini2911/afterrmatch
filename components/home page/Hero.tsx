"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // PREMIUM SMOOTH EFFECTS

  const titleScale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.12]
  );

  const titleOpacity = useTransform(
    scrollY,
    [0, 400],
    [1, 0]
  );

  const titleY = useTransform(
    scrollY,
    [0, 500],
    [0, 60]
  );

  const videoScale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.04]
  );

  return (
    <section className="relative bg-white">
      {/* HERO */}

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
        {/* VIDEO CONTAINER */}

        <motion.div
          style={{
            scale: videoScale,
          }}
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
            md:rounded-[30px]
            border
            border-white/10
          "
        >
          {/* VIDEO */}

          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          >
            <source
              src="hero.mp4"
              type="video/mp4"
            />
          </video>

         

          {/* GRAIN */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.06]
              mix-blend-soft-light
            "
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />

          {/* CONTENT */}

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
          >
          </div>
        </motion.div>
      </div>

      {/* THE LATEST */}

    
    </section>
  );
}