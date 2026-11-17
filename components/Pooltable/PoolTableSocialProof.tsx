"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    target: 700,
    suffix: "+",
    label: "Players",
  },
  {
    target: 6,
    suffix: "+",
    label: "Games Played",
  },
  {
    target: 4.5,
    suffix: "/5",
    label: "Player Rating",
    decimal: true,
  },
];

export default function PoolTableSocialProof() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [counts, setCounts] = useState([0, 0, 0]);

  /* =====================================================
     SECTION REVEAL
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     STATS COUNTING
     
     IMPORTANT:
     Counting starts ONLY when the stats area
     itself enters the viewport.
  ===================================================== */

  useEffect(() => {
    const statsSection = statsRef.current;

    if (!statsSection) return;

    let animationFrame: number;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;

        hasStarted = true;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          /* Smooth ease-out */

          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          const nextCounts = stats.map((stat) => {
            const value = stat.target * easedProgress;

            if (stat.decimal) {
              return Number(value.toFixed(1));
            }

            return Math.floor(value);
          });

          setCounts(nextCounts);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);

        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(statsSection);

    return () => {
      observer.disconnect();

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  /* =====================================================
     VIDEO SOUND
  ===================================================== */

  const toggleSound = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);

      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#172F40]
        px-5
        py-28
        text-white
        sm:px-8
        md:px-10
        lg:px-16
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          border
          border-white/[0.025]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-[#2B4E66]/30
          blur-[140px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className={`
            text-center
            transition-all
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* EYEBROW */}

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-white/25" />

            <span className="text-[9px] uppercase tracking-[0.45em] text-white/40">
              The Pool Table Community
            </span>

            <span className="h-px w-8 bg-white/25" />
          </div>

          {/* HEADING */}

          <h2
            className="
              mx-auto
              mt-9
              max-w-4xl
              text-[4rem]
              leading-[0.82]
              tracking-[-0.045em]
              sm:text-6xl
              md:text-7xl
              lg:text-[7.5rem]
            "
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >
            More than a game.
            <br />

            <span className="italic text-white/30">
              It&apos;s a feeling.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-white/45 sm:text-base">
            Meet the people who bring the pool table experience to life.
            Real players. Real experiences. One community.
          </p>
        </div>

        {/* =====================================================
            VIDEO + TWO VERTICAL IMAGE CARDS
        ===================================================== */}

        <div
          className={`
            mx-auto
            mt-16
            grid
            max-w-5xl
            items-stretch
            gap-4
            sm:gap-5
            lg:grid-cols-[1fr_0.78fr]
            lg:gap-6
            transition-all
            delay-150
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
        >

          {/* ===================================================
              LEFT — VIDEO CARD
          =================================================== */}

          <div className="flex justify-center lg:justify-end">

            <div
              className="
                group
                relative
                w-full
                max-w-[420px]
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/10
                bg-[#091923]
                shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              "
            >

              {/* VIDEO */}

              <div className="relative aspect-[9/16] overflow-hidden">

                <video
                  ref={videoRef}
                  src="/poolmatch.mp4"
                
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1500ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.025]
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-transparent
                    to-black/15
                  "
                />

                {/* TOP */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-5
                    z-20
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-[8px] uppercase tracking-[0.35em] text-white/60">
                    Player Story
                  </span>

                  {/* SOUND BUTTON */}

                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={
                      isMuted
                        ? "Turn sound on"
                        : "Turn sound off"
                    }
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/20
                      text-sm
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-black/40
                    "
                  >
                    {isMuted ? "🔇" : "🔊"}
                  </button>
                </div>

                {/* SOUND PROMPT */}

                {isMuted && (
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="
                      absolute
                      bottom-28
                      left-1/2
                      z-20
                      -translate-x-1/2
                      whitespace-nowrap
                      rounded-full
                      border
                      border-white/20
                      bg-black/25
                      px-4
                      py-2
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/70
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-black/40
                    "
                  >
                    Tap for sound
                  </button>
                )}

                {/* VIDEO TEXT */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    z-10
                  "
                >
                  <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                    POOL TABLE
                  </p>

                  <p
                    className="
                      mt-3
                      text-3xl
                      leading-[0.92]
                      text-white
                      sm:text-4xl
                    "
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                    }}
                  >
                    Line it up.
                    <br />
                    Play it.
                  </p>
                </div>

              </div>

              {/* VIDEO FOOTER */}

              <div className="border-t border-white/10 px-5 py-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-white/75">
                      Player Name
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/25">
                      Pool Table Player
                    </p>
                  </div>

                  <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                    Player Story
                  </span>

                </div>

              </div>

            </div>
          </div>

          {/* ===================================================
              RIGHT — TWO VERTICAL IMAGE CARDS
          =================================================== */}

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-1">

            {/* =================================================
                IMAGE 01
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#091923]
                aspect-[4/5]
                lg:aspect-auto
                lg:min-h-0
              "
            >

              <img
                src="/poolmatch1.jpg"
                alt="POOL TABLE pool table community"
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-transparent
                  to-black/10
                "
              />

              <div className="absolute bottom-5 left-5 right-5 z-10">

                <span className="text-[8px] uppercase tracking-[0.35em] text-white/50">
                  The Pool Table Community
                </span>

                <p
                  className="mt-2 text-xl leading-none text-white sm:text-2xl"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  Bring your people.
                </p>

              </div>
            </div>

            {/* =================================================
                IMAGE 02
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#091923]
                aspect-[4/5]
                lg:mt-5
                lg:aspect-auto
                lg:min-h-0
              "
            >

              <img
                src="/poolmatch2.jpg"
                alt="Pool Table players at POOL TABLE"
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-transparent
                  to-black/10
                "
              />

              <div className="absolute bottom-5 left-5 right-5 z-10">

                <span className="text-[8px] uppercase tracking-[0.35em] text-white/50">
                  On Court
                </span>

                <p
                  className="mt-2 text-xl leading-none text-white sm:text-2xl"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  Make every shot count.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            TESTIMONIAL
        ===================================================== */}

        

         
          

          <div className="mt-7 flex items-center justify-center gap-3">

           

        
        </div>

        {/* =====================================================
            COUNTING STATS
            COUNTER STARTS WHEN THIS AREA ENTERS VIEW
        ===================================================== */}

        <div
          ref={statsRef}
          className={`
            mx-auto
            mt-20
            max-w-5xl
            border-y
            border-white/10
            transition-all
            delay-500
            duration-[1100ms]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >

          {/* =================================================
              DESKTOP / TABLET
          ================================================= */}

          <div className="hidden md:grid md:grid-cols-3">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="
                  border-r
                  border-white/10
                  px-6
                  py-12
                  text-center
                  last:border-r-0
                "
              >

                {/* NUMBER */}

                <div
                  className="
                    text-5xl
                    leading-none
                    text-white
                    lg:text-6xl
                  "
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  {stat.decimal
                    ? counts[index].toFixed(1)
                    : counts[index].toLocaleString()}

                  <span className="text-white/30">
                    {stat.suffix}
                  </span>
                </div>

                {/* LABEL */}

                <p className="mt-4 text-[8px] uppercase tracking-[0.35em] text-white/30">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="grid md:hidden">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="
                  border-b
                  border-white/10
                  px-5
                  py-9
                  text-center
                  last:border-b-0
                "
              >

                {/* NUMBER */}

                <div
                  className="text-5xl leading-none"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  {stat.decimal
                    ? counts[index].toFixed(1)
                    : counts[index].toLocaleString()}

                  <span className="text-white/30">
                    {stat.suffix}
                  </span>
                </div>

                {/* LABEL */}

                <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-white/30">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* =====================================================
            END
        ===================================================== */}

        <div
          className={`
            mt-14
            text-center
            transition-all
            delay-700
            duration-700
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <p className="text-[9px] uppercase tracking-[0.45em] text-white/20">
            Aim · Break · Repeat
          </p>
        </div>

      </div>
    </section>
  );
}