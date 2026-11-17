"use client";

import { useEffect, useRef, useState } from "react";

export default function PickleballCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#2B4E66] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-40"
    >
      {/* =========================================
          AMBIENT CIRCLES
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.08]
            transition-all
            duration-[1800ms]
            ${
              visible
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }
          `}
        />

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.05]
            transition-all
            delay-150
            duration-[1800ms]
            ${
              visible
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
            }
          `}
        />

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            h-[800px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.035]
            transition-all
            delay-300
            duration-[1800ms]
            ${
              visible
                ? "scale-100 opacity-100"
                : "scale-90 opacity-0"
            }
          `}
        />

        {/* soft glow */}

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* label */}

        <div
          className={`
            flex
            items-center
            justify-center
            gap-4
            transition-all
            duration-1000
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          <span className="h-px w-8 bg-white/30" />

          <span className="text-[9px] uppercase tracking-[0.45em] text-white/45">
            Your Next Game
          </span>

          <span className="h-px w-8 bg-white/30" />
        </div>

        {/* heading */}

        <div className="mt-10 overflow-hidden">

          <h2
            className={`
              text-[3.6rem]
              leading-[0.88]
              tracking-[-0.025em]
              text-white
              transition-transform
              duration-[1300ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              sm:text-6xl
              lg:text-[6rem]
              ${
                visible
                  ? "translate-y-0"
                  : "translate-y-full"
              }
            `}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >
            Your court is waiting.
            <br />

            <span className="text-white/30">
              Are you ready?
            </span>
          </h2>

        </div>

        {/* description */}

        <p
          className={`
            mx-auto
            mt-8
            max-w-md
            text-sm
            leading-7
            text-white/45
            transition-all
            delay-300
            duration-1000
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          Bring your friends. Pick your time.
          Step onto the court and let the game begin.
        </p>

        {/* CTA */}

        <div
          className={`
            mt-10
            transition-all
            delay-500
            duration-1000
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >

          <a
            href="/book"
            className="group inline-flex items-center gap-5"
          >

            <span className="relative flex h-14 items-center rounded-full bg-white px-8 text-xs uppercase tracking-[0.2em] text-[#2B4E66] transition-all duration-500 group-hover:px-10">

              Book Your Court

              <span className="ml-4 transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>

            </span>

          </a>

        </div>

        {/* bottom detail */}

        <div
          className={`
            mt-16
            flex
            items-center
            justify-center
            gap-5
            transition-all
            delay-700
            duration-1000
            ${
              visible
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >

          <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
            Pick
          </span>

          <span className="h-px w-5 bg-white/10" />

          <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
            Play
          </span>

          <span className="h-px w-5 bg-white/10" />

          <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
            Repeat
          </span>

        </div>

      </div>
    </section>
  );
}