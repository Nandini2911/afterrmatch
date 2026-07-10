"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.volume = 1;

    const startVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn("Hero video autoplay blocked:", String(error));
      }
    };

    const enableSound = async () => {
      try {
        video.muted = false;
        video.defaultMuted = false;
        video.volume = 1;

        await video.play();

        removeListeners();
      } catch {
        video.muted = true;
        video.defaultMuted = true;
        video.play().catch(() => {});
      }
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    startVideo();

    window.addEventListener("pointerdown", enableSound, {
      passive: true,
    });

    window.addEventListener("touchstart", enableSound, {
      passive: true,
    });

    window.addEventListener("keydown", enableSound);

    const resumeVideo = () => {
      if (
        document.visibilityState === "visible" &&
        video.paused
      ) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", resumeVideo);

    return () => {
      removeListeners();
      document.removeEventListener(
        "visibilitychange",
        resumeVideo
      );
    };
  }, []);

  return (
    <section className="relative w-full bg-white">
      <div className="relative px-3 pt-[88px] sm:px-4 sm:pt-[95px] md:px-5 md:pt-[105px]">
        <div
          className="
            relative
            mx-auto
            h-[calc(100svh-100px)]
            min-h-[500px]
            w-full
            max-w-[1850px]
            overflow-hidden
            rounded-[18px]
            bg-black
            sm:h-[calc(100svh-110px)]
            sm:min-h-[580px]
            sm:rounded-[24px]
            md:h-[calc(100dvh-120px)]
            md:min-h-[650px]
            md:rounded-[30px]
          "
        >
          <video
            ref={videoRef}
            src="/afterrmatch.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
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
                `AfterrMatch video failed | code=${
                  video.error?.code ?? 0
                } | source=${video.currentSrc}`
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

          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
        </div>
      </div>
    </section>
  );
}