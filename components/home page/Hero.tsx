"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const videoScale = useTransform(
    scrollY,
    [0, 500],
    [1, prefersReducedMotion ? 1 : 1.04]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.volume = 1;

    const startVideo = async () => {
      try {
        /*
         * First try autoplaying with sound.
         * This may work when the browser has already granted
         * autoplay permission for the website.
         */
        video.muted = false;
        video.defaultMuted = false;

        await video.play();
      } catch (error) {
        /*
         * Most mobile browsers will block sound autoplay.
         * Keep the video visible by playing it muted.
         */
        try {
          video.muted = true;
          video.defaultMuted = true;

          await video.play();
        } catch (playError) {
          console.error("Hero video could not autoplay:", playError);
        }
      }
    };

    startVideo();

    /*
     * Enable audio on the first interaction anywhere on the page.
     * Nothing is displayed over the video.
     */
    const enableAudio = () => {
      const currentVideo = videoRef.current;

      if (!currentVideo) return;

      currentVideo.muted = false;
      currentVideo.defaultMuted = false;
      currentVideo.volume = 1;

      const playPromise = currentVideo.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            removeInteractionListeners();
          })
          .catch((error) => {
            console.error("Audio activation was blocked:", error);
          });
      }
    };

    const removeInteractionListeners = () => {
      document.removeEventListener("pointerdown", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
    };

    document.addEventListener("pointerdown", enableAudio);
    document.addEventListener("touchstart", enableAudio, {
      passive: true,
    });
    document.addEventListener("click", enableAudio);
    document.addEventListener("keydown", enableAudio);

    const handleVisibilityChange = () => {
      const currentVideo = videoRef.current;

      if (
        document.visibilityState === "visible" &&
        currentVideo?.paused
      ) {
        currentVideo.play().catch(() => {
          currentVideo.muted = true;
          currentVideo.play().catch(console.error);
        });
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      removeInteractionListeners();

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
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
          style={isDesktop ? { scale: videoScale } : undefined}
          className="
            relative
            mx-auto
            h-[calc(100svh-105px)]
            min-h-[520px]
            max-w-[1850px]
            overflow-hidden
            rounded-[18px]
            border
            border-white/10
            bg-black
            sm:h-[calc(100svh-115px)]
            sm:min-h-[600px]
            sm:rounded-[24px]
            md:h-[calc(100dvh-125px)]
            md:min-h-[650px]
            md:rounded-[30px]
          "
        >
          <video
            ref={videoRef}
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
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          <div
            className="
              pointer-events-none
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
        </motion.div>
      </div>
    </section>
  );
}