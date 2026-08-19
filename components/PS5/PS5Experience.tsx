"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  {
    number: "01",
    title: "The Games",
    description:
      "Choose from your favourite games and settle in for a session built around pure entertainment.",
  },
  {
    number: "02",
    title: "The Competition",
    description:
      "Challenge your friends, test your skills and find out who really deserves the win.",
  },
  {
    number: "03",
    title: "Bring Your People",
    description:
      "The best gaming sessions are the ones shared with the people you enjoy being around.",
  },
  {
    number: "04",
    title: "Easy Booking",
    description:
      "Choose your preferred time and reserve your gaming session without unnecessary hassle.",
  },
  {
    number: "05",
    title: "Just Have Fun",
    description:
      "Forget the clock, pick up the controller and enjoy the game your way.",
  },
];

export default function PS5Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

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

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div
          className={`
            transition-all
            duration-[1000ms]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#2B4E66]/30" />

            <span className="text-[9px] uppercase tracking-[0.38em] text-[#2B4E66]/45">
              The Experience
            </span>

          </div>

        </div>

        {/* INTRO */}

        <div className="mt-9 grid gap-8 md:grid-cols-[1fr_260px] md:items-end">

          <div className="overflow-hidden">

            <h2
              className={`
                max-w-3xl
                text-[3.2rem]
                leading-[0.92]
                tracking-[-0.025em]
                text-[#2B4E66]
                transition-all
                duration-[1200ms]
                sm:text-5xl
                lg:text-[4.8rem]
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }
              `}
              style={{
                fontFamily:
                  '"Cormorant Garamond", serif',
                fontWeight: 400,
              }}
            >
              The little things
              <br />

              <span className="text-[#2B4E66]/30">
                make the difference.
              </span>
            </h2>

          </div>

          <p
            className={`
              max-w-xs
              text-sm
              leading-6
              text-[#2B4E66]/50
              transition-all
              delay-300
              duration-700
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            Everything comes together to make your gaming
            session feel effortless, social and worth coming back to.
          </p>

        </div>

        {/* INTERACTIVE */}

        <div
          className={`
            mt-16
            transition-all
            delay-200
            duration-1000
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >

          <div className="border-t border-[#2B4E66]/10">

            {points.map((point, index) => {

              const active = activeIndex === index;

              return (
                <div
                  key={point.number}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className="group relative border-b border-[#2B4E66]/10"
                >

                  {/* ACTIVE BACKGROUND */}

                  <div
                    className={`
                      absolute
                      inset-y-0
                      left-0
                      bg-[#F7F9FA]
                      transition-all
                      duration-[700ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        active
                          ? "right-0 opacity-100"
                          : "right-full opacity-0"
                      }
                    `}
                  />

                  {/* ROW */}

                  <div className="relative flex items-center gap-5 py-6 sm:gap-8 sm:py-7">

                    {/* NUMBER */}

                    <div className="relative h-5 w-7 shrink-0 overflow-hidden">

                      <span
                        className={`
                          absolute
                          left-0
                          top-0
                          text-[9px]
                          tracking-[0.25em]
                          transition-all
                          duration-500
                          ${
                            active
                              ? "translate-y-0 text-[#2B4E66]"
                              : "-translate-y-5 text-[#2B4E66]/25"
                          }
                        `}
                      >
                        {point.number}
                      </span>

                      <span
                        className={`
                          absolute
                          left-0
                          top-0
                          text-[9px]
                          tracking-[0.25em]
                          transition-all
                          duration-500
                          ${
                            active
                              ? "translate-y-5"
                              : "translate-y-0 text-[#2B4E66]/25"
                          }
                        `}
                      >
                        {point.number}
                      </span>

                    </div>

                    {/* TITLE */}

                    <div className="min-w-0 flex-1 overflow-hidden">

                      <div
                        className={`
                          transition-all
                          duration-700
                          ${
                            active
                              ? "translate-x-2"
                              : "translate-x-0"
                          }
                        `}
                      >

                        <h3
                          className={`
                            text-[1.65rem]
                            leading-none
                            tracking-[-0.02em]
                            transition-all
                            duration-700
                            sm:text-[2.2rem]
                            ${
                              active
                                ? "text-[#2B4E66]"
                                : "text-[#2B4E66]/35"
                            }
                          `}
                          style={{
                            fontFamily:
                              '"Cormorant Garamond", serif',
                            fontWeight: 400,
                          }}
                        >
                          {point.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <div
                          className={`
                            grid
                            transition-all
                            duration-700
                            ${
                              active
                                ? "mt-2 grid-rows-[1fr] opacity-100"
                                : "mt-0 grid-rows-[0fr] opacity-0"
                            }
                          `}
                        >

                          <div className="overflow-hidden">

                            <p className="max-w-md text-xs leading-6 text-[#2B4E66]/50 sm:text-sm">
                              {point.description}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* ARROW */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-xs
                        transition-all
                        duration-500
                        ${
                          active
                            ? "rotate-[-45deg] border-[#2B4E66] bg-[#2B4E66] text-white"
                            : "border-[#2B4E66]/10 text-[#2B4E66]/25"
                        }
                      `}
                    >
                      →
                    </span>

                  </div>

                  {/* MOVING LINE */}

                  <div
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-px
                      bg-[#2B4E66]
                      transition-all
                      duration-[800ms]
                      ${
                        active
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />

                </div>
              );
            })}

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className={`
            mt-7
            flex
            items-center
            justify-between
            transition-all
            delay-500
            duration-700
            ${
              isVisible
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >

          <span className="text-[8px] uppercase tracking-[0.35em] text-[#2B4E66]/25">
            Play · Compete · Connect
          </span>

          <span className="text-[8px] uppercase tracking-[0.35em] text-[#2B4E66]/25">
            05 / 05
          </span>

        </div>

      </div>

    </section>
  );
}