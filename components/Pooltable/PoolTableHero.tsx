"use client";

import { useEffect, useRef } from "react";

export default function PoolTableHero() {
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

        const scrollableDistance = Math.max(
          section.offsetHeight - window.innerHeight,
          1
        );

        const progress = Math.min(
          Math.max(-rect.top / scrollableDistance, 0),
          1
        );

        const width = window.innerWidth;

        /* =====================================================
           RESPONSIVE ANIMATION
        ===================================================== */

        let imageZoom = 0.14;
        let imageMove = 24;
        let textZoom = 0.07;
        let textMove = -30;

        /*
          MOBILE
          Since we now have a dedicated portrait image,
          don't aggressively zoom or move it.
        */

        if (width < 640) {
          imageZoom = 0.015;
          imageMove = 3;
          textZoom = 0.015;
          textMove = -6;
        }

        /*
          TABLET
        */

        else if (width < 1024) {
          imageZoom = 0.06;
          imageMove = 12;
          textZoom = 0.04;
          textMove = -18;
        }

        /*
          DESKTOP
        */

        else {
          imageZoom = 0.14;
          imageMove = 24;
          textZoom = 0.07;
          textMove = -30;
        }

        /* =====================================================
           IMAGE PARALLAX
        ===================================================== */

        const imageScale = 1 + progress * imageZoom;
        const imageTranslate = progress * imageMove;

        image.style.transform = `
          translate3d(0, ${imageTranslate}px, 0)
          scale(${imageScale})
        `;

        /* =====================================================
           TEXT PARALLAX
        ===================================================== */

        const contentScale = 1 + progress * textZoom;
        const contentTranslate = progress * textMove;

        const contentOpacity = Math.max(
          0.82,
          1 - progress * 0.15
        );

        content.style.transform = `
          translate3d(0, ${contentTranslate}px, 0)
          scale(${contentScale})
        `;

        content.style.opacity = `${contentOpacity}`;
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
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#172F40]
        text-white

        sm:min-h-[110svh]

        md:min-h-[125svh]

        lg:min-h-[150vh]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <picture>
          {/* =================================================
              MOBILE IMAGE
          ================================================= */}

          <source
            media="(max-width: 639px)"
            srcSet="/servicepooltable.webp"
          />

          {/* =================================================
              DESKTOP / TABLET IMAGE
          ================================================= */}

          <img
            ref={imageRef}
            src="/servicepooltable.webp"
            alt="Pool Table table experience"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              will-change-transform
            "
            style={{
              transform:
                "translate3d(0, 0, 0) scale(1)",
              transformOrigin: "center center",
            }}
          />
        </picture>

        {/* =================================================
            GENERAL IMAGE OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-black/[0.05]
          "
        />

        {/* =================================================
            MOBILE BOTTOM GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[48%]
            bg-gradient-to-t
            from-[#172F40]
            via-[#172F40]/65
            to-transparent

            sm:h-[52%]
            sm:from-[#172F40]/95
            sm:via-[#172F40]/50

            md:h-[58%]
            md:from-[#172F40]/90
            md:via-[#172F40]/30

            lg:h-[65%]
            lg:from-[#172F40]/85
            lg:via-[#172F40]/25
          "
        />

        {/* =================================================
            TOP GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[18%]
            bg-gradient-to-b
            from-black/15
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1800px]
          items-end
          px-5
          pb-[8.5rem]
          pt-32

          sm:min-h-[110svh]
          sm:px-8
          sm:pb-32

          md:min-h-[125svh]
          md:px-10
          md:pb-36

          lg:min-h-[140vh]
          lg:items-center
          lg:px-16
          lg:pb-20
          lg:pt-32

          xl:px-20

          2xl:px-24
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
          style={{
            transform:
              "translate3d(0, 0, 0) scale(1)",
            opacity: 1,
          }}
        >

          {/* =================================================
              CATEGORY
          ================================================= */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-3

              sm:mb-7
              sm:gap-4

              md:mb-8

              lg:mb-8
            "
          >

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.38em]
                text-white/70

                sm:text-[9px]

                md:text-[10px]

                lg:text-xs
                lg:tracking-[0.45em]
              "
            >
              The Pool Table Experience
            </span>

            <span
              className="
                h-px
                w-9
                bg-white/40

                sm:w-12

                md:w-14

                lg:w-16
              "
            />

          </div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className="
              max-w-full
              text-[clamp(4.2rem,17vw,6.5rem)]
              leading-[0.78]
              tracking-[-0.055em]
              text-white

              sm:max-w-[900px]
              sm:text-[clamp(5rem,14vw,9rem)]

              md:max-w-[1050px]
              md:text-[clamp(6rem,12vw,10rem)]

              lg:max-w-[1200px]
              lg:text-[clamp(7rem,10vw,12rem)]

              xl:max-w-[1400px]
              xl:text-[clamp(8rem,9vw,13rem)]

              2xl:max-w-[1550px]
              2xl:text-[clamp(9rem,8vw,15rem)]
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >
            Pool Table
          </h1>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <div
            className="
              mt-5
              flex
              max-w-[390px]
              flex-col
              gap-3

              sm:mt-8
              sm:max-w-[650px]
              sm:gap-5

              md:mt-9
              md:max-w-[760px]
              md:flex-row
              md:items-start
              md:gap-8

              lg:mt-10
              lg:max-w-[850px]
              lg:gap-12
            "
          >

            {/* LINE */}

            <span
              className="
                hidden
                h-px
                shrink-0
                bg-white/40

                md:mt-4
                md:block
                md:w-14

                lg:mt-5
                lg:w-20
              "
            />

            {/* TEXT */}

            <p
              className="
                max-w-[370px]
                text-[1.4rem]
                leading-[0.98]
                text-white/90

                sm:max-w-[550px]
                sm:text-[1.8rem]

                md:text-[2.1rem]

                lg:text-[clamp(2rem,2.5vw,3rem)]
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond", serif',
              }}
            >
              Where movement meets{" "}
              <span className="italic text-white/55">
                momentum.
              </span>
            </p>

          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-0
          right-0
          z-20
          flex
          justify-center

          sm:bottom-7

          md:bottom-8

          lg:bottom-9
        "
      >

        <div
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/10
            backdrop-blur-md
            transition-all
            duration-500

            sm:h-16
            sm:w-16

            md:h-[72px]
            md:w-[72px]

            lg:h-20
            lg:w-20

            hover:scale-110
            hover:border-white/60
          "
        >

          <span
            className="
              absolute
              inset-1.5
              rounded-full
              border
              border-white/10

              sm:inset-2
            "
          />

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.18em]
              text-white/70

              sm:text-[8px]

              md:text-[9px]
            "
          >
            Scroll
          </span>

        </div>

      </div>

      {/* =====================================================
          GRAIN
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]
          opacity-[0.045]
        "
      >
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