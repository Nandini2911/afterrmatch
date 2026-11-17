"use client";

import { useEffect, useRef, useState } from "react";

export default function PS5Intro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const headingText =
    "Play harder. Connect more. Make every game count.";

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

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(headingText.slice(0, index + 1));

      index++;

      if (index >= headingText.length) {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
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

        {/* IMAGE */}

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
              src="/serviceps53.webp"
              alt="PS5 gaming"
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

            <div className="absolute inset-0 bg-gradient-to-t from-[#172F40]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                The Gaming Room
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

            <div className="absolute right-7 top-7">
              <span className="text-xs tracking-[0.3em] text-white/50">
                01
              </span>
            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div
          className={`
            transition-all
            delay-200
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-28 opacity-0"
            }
          `}
        >

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#2B4E66]/30" />

            <p className="text-[10px] uppercase tracking-[0.4em] text-[#2B4E66]/50 sm:text-xs">
              The PS5 Experience
            </p>

          </div>

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
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >

            {typedText}

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
            Step into a gaming experience built for
            competition, connection and hours of pure fun.
            Pick your game, grab the controller and get ready.
          </p>

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
            Whether you're here for a casual session with
            friends or a serious gaming challenge, every
            session is about having a good time.
          </p>

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

            <span className="text-[8px] uppercase tracking-[0.35em] text-[#2B4E66]/30">
              Play
            </span>

            <span className="h-px w-6 bg-[#2B4E66]/20" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-[#2B4E66]/30">
              Compete
            </span>

            <span className="h-px w-6 bg-[#2B4E66]/20" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-[#2B4E66]/30">
              Connect
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}