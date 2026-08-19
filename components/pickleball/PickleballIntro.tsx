"use client";

import { useEffect, useRef, useState } from "react";

export default function PickleballAbout() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const headingText = "Move more. Play more. Enjoy every rally.";

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
      className="overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

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
          <div className="group relative h-[440px] overflow-hidden sm:h-[580px]">

            <img
              src="/servicepickleball1.jpg"
              alt="Pickleball court experience"
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
                The Court
              </p>

              <p
                className="mt-2 text-3xl text-white sm:text-4xl"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                Where the game begins.
              </p>

            </div>

            {/* Image Number */}
            <div className="absolute right-7 top-7">

              <span className="text-xs tracking-[0.3em] text-white/50">
                01
              </span>

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
              The Pickleball Experience
            </p>

          </div>

          {/* Heading */}
          <h2
            className="mt-7 max-w-2xl text-5xl leading-[0.95] tracking-[-0.03em] text-[#2B4E66] sm:text-6xl lg:text-7xl"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
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
            Pickleball is all about movement, energy and good
            competition. Grab your paddle, bring your friends and
            enjoy a game that is easy to pick up and hard to put down.
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
            Whether you are discovering the game for the first time
            or already love being on the court, every session gives
            you a chance to play, connect and have fun.
          </p>

          {/* Bottom Details */}
          <div
            className={`
              mt-10
              flex
              items-center
              gap-5
              transition-all
              duration-700
              delay-[1400ms]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >

           


            

           

          </div>

        </div>

      </div>
    </section>
  );
}