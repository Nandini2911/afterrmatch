"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    /*
     * Muted playback is required for autoplay
     * on Safari, Chrome, iPhone and Android.
     */
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 1;
    video.playsInline = true;

    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn(
          "Muted video autoplay was blocked:",
          String(error)
        );
      }
    };

    /*
     * Start when enough video data is available.
     */
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, {
        once: true,
      });
    }

    /*
     * No sound button.
     *
     * Sound will turn on when the visitor first taps,
     * clicks, scrolls or presses a key anywhere.
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
        /*
         * Keep the video running muted if the browser
         * still blocks audio.
         */
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
      window.removeEventListener("scroll", enableSound);
    };

    window.addEventListener("pointerdown", enableSound, {
      passive: true,
    });

    window.addEventListener("touchstart", enableSound, {
      passive: true,
    });

    window.addEventListener("keydown", enableSound);

    window.addEventListener("scroll", enableSound, {
      passive: true,
      once: true,
    });

    /*
     * Resume playback when visitor comes back
     * to the browser tab.
     */
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "visible" &&
        video.paused
      ) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      video.removeEventListener("loadeddata", playVideo);

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
            bg-[#111111]
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
            onCanPlay={(event) => {
              const video = event.currentTarget;

              video.play().catch(() => {
                video.muted = true;
                video.defaultMuted = true;
                video.play().catch(() => {});
              });
            }}
            onError={(event) => {
              const video = event.currentTarget;

              console.warn(
                "Hero video failed:",
                `code=${video.error?.code ?? 0}`,
                `message=${video.error?.message ?? "Unknown error"}`,
                `source=${video.currentSrc}`
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
          >
            <source
              src="/hero.mp4?v=2"
              type="video/mp4"
            />
          </video>

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