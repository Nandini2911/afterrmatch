"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.04]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Start video automatically in muted mode
    video.muted = true;
    video.volume = 1;

    void video.play().catch((error) => {
      console.error("Muted autoplay failed:", error);
    });

    // Turn sound on after the visitor's first interaction
    const enableSound = async () => {
      try {
        video.muted = false;
        video.defaultMuted = false;
        video.volume = 1;

        video.removeAttribute("muted");

        await video.play();

        // Remove listeners after sound is enabled
        window.removeEventListener("pointerdown", enableSound);
        window.removeEventListener("touchstart", enableSound);
        window.removeEventListener("keydown", enableSound);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    };

    window.addEventListener("pointerdown", enableSound, { once: true });
    window.addEventListener("touchstart", enableSound, { once: true });
    window.addEventListener("keydown", enableSound, { once: true });

    return () => {
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

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
          className="
            relative
            mx-auto
            h-[110vh]
            max-w-[1850px]
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
            <source src="/hero.MP4" type="video/mp4" />
          </video>

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

          <div
            className="
              pointer-events-none
              relative
              z-20
              flex
              h-full
              flex-col
              items-center
              justify-center
              px-4
              text-center
              sm:px-6
            "
          />
        </motion.div>
      </div>
    </section>
  );
}