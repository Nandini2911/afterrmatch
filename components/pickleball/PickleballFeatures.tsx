"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
   
    title: "The Court",
    tagline: "Made to play.",
    description:
      "A dedicated environment built around movement, comfort and the perfect game.",
    image: "/servicepickleball2.webp",
  },
  {
  
    title: "The Energy",
    tagline: "Bring your people.",
    description:
      "Good games become better memories when you share them with the right people.",
    image: "/servicepickleball3.webp",
  },
  {
    
    title: "The Game",
    tagline: "Easy to start.",
    description:
      "Pick up a paddle, step onto the court and discover why the game is hard to put down.",
    image: "/servicepickleball4.webp",
  },
  {
   
    title: "Your Time",
    tagline: "Play your way.",
    description:
      "Choose your time, bring your game and make the court yours.",
    image: "/servicepickleball5.webp",
  },
];

export default function PickleballFeatures() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
      className="
        relative
        overflow-hidden
        bg-[#172F40]
        px-5
        py-24
        text-white
        sm:px-8
        lg:px-12
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND LIGHT
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2B4E66]/40 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#2B4E66]/30 blur-[140px]" />

      {/* =====================================================
          TOP CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`
            flex
            flex-col
            gap-8
            transition-all
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            lg:flex-row
            lg:items-end
            lg:justify-between

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* LEFT */}

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
                The Experience
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                text-5xl
                leading-[0.9]
                tracking-[-0.03em]
                sm:text-6xl
                lg:text-7xl
              "
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
              }}
            >
              Come for the game.
              <br />

              <span className="italic text-white/40">
                Stay for the feeling.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="max-w-sm lg:pb-2">
            <p className="text-sm leading-7 text-white/50">
              More than just a court. A place to move, compete, connect and
              lose track of time.
            </p>
          </div>
        </div>

        {/* =====================================================
            LEFT → RIGHT CARD SLIDE
        ===================================================== */}

        <div
          className={`
            relative
            mt-16
            transform-gpu
            transition-transform
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            lg:mt-24

            ${
              visible
                ? "translate-x-0"
                : "-translate-x-[115vw]"
            }
          `}
        >
          {/* ALL FOUR CARDS MOVE TOGETHER */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
              lg:items-end
            "
          >
           {features.map((feature, index) => {
  const isActive = activeCard === index;

  return (
    <article
      key={feature.title}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    transform-gpu
                    transition-transform
                    duration-[700ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      index % 2 === 0
                        ? "lg:translate-y-0"
                        : "lg:translate-y-14"
                    }

                    ${
                      isActive
                        ? "lg:-translate-y-3"
                        : ""
                    }
                  `}
                >
                  {/* IMAGE */}

                  <div
                    className={`
                      relative
                      overflow-hidden

                      ${
                        index % 2 === 0
                          ? "h-[390px]"
                          : "h-[450px]"
                      }

                      sm:h-[450px]
                    `}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transform-gpu
                        transition-transform
                        duration-[1400ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        ${
                          isActive
                            ? "scale-110"
                            : "scale-100"
                        }
                      `}
                    />

                    {/* DARK GRADIENT */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C27] via-[#0B1C27]/20 to-transparent" />

                    {/* SUBTLE TOP OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

                    {/* HOVER LIGHT */}

                    <div
                      className={`
                        pointer-events-none
                        absolute
                        -left-20
                        top-0
                        h-full
                        w-20
                        rotate-[15deg]
                        bg-white/10
                        blur-xl
                        transition-transform
                        duration-[1200ms]
                        ease-out

                        ${
                          isActive
                            ? "translate-x-[450px]"
                            : "-translate-x-20"
                        }
                      `}
                    />

                    {/* NUMBER */}

                    

                    {/* CONTENT */}

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      {/* TAGLINE */}

                      <p
                        className={`
                          mb-3
                          text-[9px]
                          uppercase
                          tracking-[0.35em]
                          transition-colors
                          duration-500

                          ${
                            isActive
                              ? "text-white/70"
                              : "text-white/45"
                          }
                        `}
                      >
                        {feature.tagline}
                      </p>

                      {/* TITLE */}

                      <h3
                        className="text-4xl leading-none sm:text-5xl"
                        style={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 400,
                        }}
                      >
                        {feature.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <div
                        className={`
                          grid
                          transition-all
                          duration-700
                          ease-[cubic-bezier(0.22,1,0.36,1)]

                          ${
                            isActive
                              ? "mt-5 grid-rows-[1fr] opacity-100"
                              : "mt-0 grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xs text-xs leading-6 text-white/55">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                     

                     
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}