"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasSound, setHasSound] = useState(false);

  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.04]);

  const enableSound = async () => {
    const video = videoRef.current;

    if (!video || hasSound) return;

    try {
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;

      await video.play();
      setHasSound(true);
    } catch (error) {
      console.error("Mobile audio error:", error);
    }
  };

  return (
    <section className="relative bg-white">
      <div
        className="
          relative
          overflow-hidden
          px-3
          pt-[88px]
          sm:px-4
          sm:pt-[95px]
          md:pt-[105px]
        "
      >
        <motion.div
          style={{ scale: videoScale }}
          onClick={enableSound}
          onTouchEnd={enableSound}
          className="
            relative
            mx-auto
            h-[110vh]
            max-w-[1850px]
            cursor-pointer
            overflow-hidden
            rounded-[18px]
            border
            border-white/10
            sm:rounded-[24px]
            md:rounded-[30px]
          "
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {!hasSound && (
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-8
                z-30
                text-center
                text-sm
                font-medium
                tracking-wide
                text-white
                drop-shadow-lg
              "
            >
              Tap anywhere for sound
            </div>
          )}

          <div
            className="
              pointer-events-none
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
        </motion.div>
      </div>
    </section>
  );
}