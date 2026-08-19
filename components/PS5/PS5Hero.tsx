"use client";

import { useEffect, useRef } from "react";

export default function PS5Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number | null = null;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const image = imageRef.current;
        const content = contentRef.current;

        if (!section || !image || !content) return;

        const rect = section.getBoundingClientRect();

        const scrollableDistance =
          section.offsetHeight - window.innerHeight;

        const progress = Math.min(
          Math.max(
            -rect.top / Math.max(scrollableDistance, 1),
            0
          ),
          1
        );

        /* IMAGE MOTION */

        const imageScale = 1.04 + progress * 0.18;
        const imageMove = progress * 25;

        image.style.transform = `
          translate3d(0, ${imageMove}px, 0)
          scale(${imageScale})
        `;

        /* TEXT MOTION */

        const textScale = 1 + progress * 0.08;
        const textMove = progress * -35;
        const textOpacity = 1 - progress * 0.15;

        content.style.transform = `
          translate3d(0, ${textMove}px, 0)
          scale(${textScale})
        `;

        content.style.opacity = `${textOpacity}`;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[130vh] overflow-hidden text-white"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <img
          ref={imageRef}
          src="/serviceps5.png"
          alt="PS5 gaming experience"
          className="h-full w-full object-cover will-change-transform"
          style={{
            transform: "translate3d(0, 0, 0) scale(1.04)",
            transformOrigin: "center center",
          }}
        />

        <div className="absolute inset-0 bg-black/20" />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[65%]
            bg-gradient-to-t
            from-[#172F40]/90
            via-[#172F40]/30
            to-transparent
          "
        />

      </div>

      {/* TOP */}

      <div
        className="
          absolute
          left-6
          right-6
          top-8
          z-20
          flex
          items-center
          justify-between
          sm:left-10
          sm:right-10
          lg:left-16
          lg:right-16
        "
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/50">
          The Gaming Experience
        </span>

        <span className="text-[9px] tracking-[0.25em] text-white/40">
          03
        </span>
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[130vh]
          max-w-[1500px]
          items-center
          px-6
          py-32
          sm:px-10
          lg:px-16
        "
      >
        <div
          ref={contentRef}
          className="
            relative
            w-full
            origin-left
            will-change-transform
          "
        >

          <div className="mb-8 flex items-center gap-4">

            <span className="text-[10px] uppercase tracking-[0.45em] text-white/60 sm:text-xs">
              PS5
            </span>

            <span className="h-px w-16 bg-white/30" />

          </div>

          <h1
            className="
              max-w-[1100px]
              text-[20vw]
              leading-[0.78]
              tracking-[-0.055em]
              text-white
              sm:text-[15vw]
              lg:text-[11vw]
              xl:text-[9.5vw]
            "
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >
            PS5
          </h1>

          <div
            className="
              mt-8
              flex
              max-w-2xl
              flex-col
              gap-6
              sm:mt-10
              sm:flex-row
              sm:items-start
              sm:gap-12
            "
          >

            <span className="hidden h-px w-20 bg-white/40 sm:mt-4 sm:block" />

            <p
              className="
                max-w-xl
                text-xl
                leading-tight
                text-white/85
                sm:text-2xl
                lg:text-3xl
              "
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Where every game becomes
              <span className="italic text-white/60">
                {" "}an experience.
              </span>
            </p>

          </div>

        </div>
      </div>

      {/* SCROLL */}

      <div
        className="
          absolute
          bottom-8
          left-6
          right-6
          z-20
          sm:left-10
          sm:right-10
          lg:left-16
          lg:right-16
        "
      >

        <div className="absolute left-1/2 -translate-x-1/2">

          <div
            className="
              relative
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              backdrop-blur-sm
              transition-all
              duration-500
              hover:scale-110
              hover:border-white/60
            "
          >

            <span className="absolute inset-2 rounded-full border border-white/10" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/70">
              Scroll
            </span>

          </div>

        </div>

      </div>

      {/* GRAIN */}

      <div className="pointer-events-none absolute inset-0 z-[5] opacity-[0.06]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />

      </div>

    </section>
  );
}