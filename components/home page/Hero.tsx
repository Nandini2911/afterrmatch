"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  const videoScale = useTransform(scrollY, [0, 500], [1, 1.04]);

  const toggleSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    const shouldMute = !video.muted;

    video.muted = shouldMute;
    setIsMuted(shouldMute);

    if (!shouldMute) {
      try {
        await video.play();
      } catch (error) {
        console.error("Unable to play video with audio:", error);
      }
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
            muted={isMuted}
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
            Your browser does not support the video element.
          </video>

          {/* Grain effect */}
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

          {/* Hero content */}
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
              text-center
              sm:px-6
            "
          />

          {/* Audio control */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Enable video sound" : "Mute video sound"}
            className="
              absolute
              bottom-6
              right-6
              z-30
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/35
              text-white
              shadow-lg
              backdrop-blur-md
              transition
              duration-300
              hover:scale-105
              hover:bg-black/55
              focus:outline-none
              focus:ring-2
              focus:ring-white/70
              sm:bottom-8
              sm:right-8
              sm:h-14
              sm:w-14
            "
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}