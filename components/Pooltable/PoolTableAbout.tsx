"use client";

import { useEffect, useRef, useState } from "react";

export default function PoolTableIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const headingText =
    "Aim better. Play smarter. Enjoy every break.";

  /* =========================
     SCROLL REVEAL
  ========================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =========================
     TYPEWRITER
  ========================= */

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;

    const typingSpeed = 55;

    const interval = setInterval(() => {
      setTypedText(headingText.slice(0, index + 1));

      index++;

      if (index >= headingText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="
        overflow-hidden
        bg-white
        px-6
        py-24
        sm:px-10
        lg:px-16
        lg:py-32
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-14
          lg:grid-cols-2
          lg:gap-20
        "
      >

        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <div
          className={`
            relative
            overflow-hidden
            rounded-[2rem]
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-28 opacity-0"
            }
          `}
        >

          <div
            className="
              group
              relative
              h-[440px]
              overflow-hidden
              sm:h-[580px]
            "
          >

            <img
              src="/servicepooltable1.png"
              alt="Pool table experience"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1800ms]
                ease-out
                group-hover:scale-105
              "
            />

            {/* Cinematic Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#172F40]/60 via-transparent to-transparent" />

            {/* Image Label */}

            <div className="absolute bottom-8 left-8">

              <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                The Table
              </p>

              <p
                className="mt-2 text-3xl text-white sm:text-4xl"
                style={{
                  fontFamily:
                    '"Cormorant Garamond", serif',
                }}
              >
                Where the game begins.
              </p>

            </div>

            {/* Image Number */}

            <div className="absolute right-7 top-7">

          
            </div>

          </div>

        </div>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

        <div
          className={`
            transition-all
            duration-[1200ms]
            delay-200
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-28 opacity-0"
            }
          `}
        >

          {/* Eyebrow */}

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#2B4E66]/30" />

            <p className="text-[10px] uppercase tracking-[0.4em] text-[#2B4E66]/50 sm:text-xs">
              The Pool Table Experience
            </p>

          </div>

          {/* Heading */}

          <h2
            className="
              mt-7
              max-w-2xl
              text-5xl
              leading-[0.95]
              tracking-[-0.03em]
              text-[#2B4E66]
              sm:text-6xl
              lg:text-7xl
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >

            {typedText}

            {/* Typewriter Cursor */}

            <span
              className={`
                ml-1
                inline-block
                h-[0.75em]
                w-[2px]
                align-middle
                bg-[#2B4E66]/50
                ${
                  typedText.length === headingText.length
                    ? "animate-pulse"
                    : ""
                }
              `}
            />

          </h2>

          {/* Decorative Line */}

          <div
            className={`
              mt-8
              h-px
              bg-[#2B4E66]/25
              transition-all
              duration-[1000ms]
              delay-[900ms]
              ${
                isVisible
                  ? "w-20 opacity-100"
                  : "w-0 opacity-0"
              }
            `}
          />

          {/* Description */}

          <p
            className={`
              mt-8
              max-w-xl
              text-base
              leading-8
              text-[#2B4E66]/65
              transition-all
              duration-700
              delay-[1000ms]
              sm:text-lg
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            Pool is all about precision, patience and good
            competition. Take your shot, read the table and
            enjoy a game that rewards every little decision.
          </p>

          {/* Second Paragraph */}

          <p
            className={`
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-[#2B4E66]/50
              transition-all
              duration-700
              delay-[1200ms]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            Whether you're discovering pool for the first time
            or already know your way around the table, every
            session gives you a chance to play, connect and
            enjoy the moment.
          </p>

          {/* Bottom Details */}


        </div>

      </div>

    </section>
  );
}