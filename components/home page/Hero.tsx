"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Required for reliable autoplay on desktop and mobile.
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 1;
    video.playsInline = true;

    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const playVideo = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;

        await video.play();
      } catch (error) {
        console.warn("Hero autoplay blocked:", String(error));
      }
    };

    /*
     * No sound button is displayed.
     * Sound starts after the first tap or click anywhere.
     */
    const enableSound = async () => {
      try {
        video.muted = false;
        video.defaultMuted = false;
        video.volume = 1;
        video.removeAttribute("muted");

        await video.play();

        removeInteractionListeners();
      } catch {
        // Continue playing muted if sound is blocked.
        video.muted = true;
        video.defaultMuted = true;
        video.setAttribute("muted", "");

        video.play().catch(() => {});
      }
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    const resumeVideo = () => {
      if (
        document.visibilityState === "visible" &&
        video.paused
      ) {
        video.play().catch(() => {});
      }
    };

    playVideo();

    window.addEventListener("pointerdown", enableSound, {
      passive: true,
    });

    window.addEventListener("touchstart", enableSound, {
      passive: true,
    });

    window.addEventListener("keydown", enableSound);

    document.addEventListener(
      "visibilitychange",
      resumeVideo
    );

    return () => {
      removeInteractionListeners();

      document.removeEventListener(
        "visibilitychange",
        resumeVideo
      );
    };
  }, []);

  return (
    <section className="relative bg-white">
      <div
        className="
          relative
          px-3
          pt-[88px]
          sm:px-4
          sm:pt-[95px]
          md:pt-[105px]
        "
      >
        <div
          className="
            relative
            mx-auto
            h-[calc(100svh-100px)]
            min-h-[480px]
            w-full
            max-w-[1850px]
            overflow-hidden
            rounded-[18px]
            bg-black
            sm:h-[calc(100svh-110px)]
            sm:min-h-[560px]
            sm:rounded-[24px]
            md:h-[calc(100vh-120px)]
            md:min-h-[650px]
            md:rounded-[30px]
          "
        >
          <video
            ref={videoRef}
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
            onLoadedMetadata={(event) => {
              const video = event.currentTarget;

              video.muted = true;
              video.defaultMuted = true;
              video.playsInline = true;
            }}
            onLoadedData={(event) => {
              const video = event.currentTarget;

              video.muted = true;
              video.defaultMuted = true;

              video.play().catch(() => {});
            }}
            onCanPlay={(event) => {
              event.currentTarget.play().catch(() => {});
            }}
            onError={(event) => {
              const video = event.currentTarget;

              console.warn(
                [
                  "Hero video failed",
                  `code=${video.error?.code ?? 0}`,
                  `message=${video.error?.message ?? "Unknown"}`,
                  `source=${video.currentSrc}`,
                ].join(" | ")
              );
            }}
            className="
              absolute
              inset-0
              block
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              bg-gradient-to-t
              from-black/10
              via-transparent
              to-black/5
            "
          />
        </div>
      </div>
    </section>
  );
}