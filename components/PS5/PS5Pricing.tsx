"use client";

import { useEffect, useRef, useState } from "react";

const includedItems = [
  "PS5 access",
  "Easy booking",
  "Play your way",
];

export default function PS5Pricing() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(0);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let animationFrame = 0;

    const targetPrice = 500;
    const duration = 1200;
    const startTime = performance.now();

    const animatePrice = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      setPrice(
        Math.round(
          targetPrice * easedProgress
        )
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animatePrice);
      }
    };

    animationFrame =
      requestAnimationFrame(animatePrice);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden

        bg-[#F5F3EE]
        text-[#29495E]

        px-5
        py-20

        sm:px-8
        sm:py-24

        md:px-10

        lg:px-16
        lg:py-28

        xl:px-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* SOFT TOP GLOW */}

        <div
          className="
            absolute
            -right-40
            -top-40

            h-[450px]
            w-[450px]

            rounded-full

            bg-[#7898AA]/[0.08]
            blur-[120px]

            sm:h-[560px]
            sm:w-[560px]
          "
        />

        {/* SOFT BOTTOM GLOW */}

        <div
          className="
            absolute
            -bottom-48
            -left-40

            h-[440px]
            w-[440px]

            rounded-full

            bg-[#A8BBC5]/[0.09]
            blur-[120px]
          "
        />

        {/* LARGE CIRCLES */}

        <div
          className="
            absolute
            -right-36
            top-20

            h-[320px]
            w-[320px]

            rounded-full

            border
            border-[#29495E]/[0.04]

            sm:h-[420px]
            sm:w-[420px]
          "
        />

        <div
          className="
            absolute
            -right-14
            top-40

            h-[180px]
            w-[180px]

            rounded-full

            border
            border-[#29495E]/[0.035]
          "
        />

        {/* LINES */}

        <div
          className="
            absolute
            left-[8%]
            top-0

            h-full
            w-px

            bg-[#29495E]/[0.025]
          "
        />

        <div
          className="
            absolute
            right-[8%]
            top-0

            h-full
            w-px

            bg-[#29495E]/[0.025]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-8

            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <div
              className={`
                flex
                items-center
                gap-3

                transition-all
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }
              `}
            >
              <span
                className={`
                  h-px
                  bg-[#29495E]/30

                  transition-all
                  delay-200
                  duration-1000

                  ${
                    visible
                      ? "w-8"
                      : "w-0"
                  }
                `}
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-[#29495E]/40
                "
              >
                Pricing
              </span>
            </div>

            <div className="mt-6 overflow-hidden">
              <h2
                className={`
                  text-[2.8rem]
                  leading-[0.88]
                  tracking-[-0.04em]

                  transition-all
                  duration-[1200ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  sm:text-[3.4rem]

                  md:text-[3.7rem]

                  lg:text-[4rem]

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }
                `}
                style={{
                  fontFamily:
                    '"Cormorant Garamond", serif',
                  fontWeight: 400,
                }}
              >
                Simple.
                <br />

                <span
                  className="
                    italic
                    text-[#29495E]/25
                  "
                >
                  Straightforward.
                </span>
              </h2>
            </div>
          </div>

          {/* RIGHT */}

          <p
            className={`
              max-w-sm

              text-[11px]
              leading-6
              text-[#29495E]/45

              transition-all
              delay-200
              duration-1000
              ease-[cubic-bezier(0.16,1,0.3,1)]

              sm:text-xs

              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }
            `}
          >
            Everything you need to get on court.
            One straightforward rate, with no
            unnecessary complexity.
          </p>
        </div>

        {/* =====================================================
            PRICING CARD
        ===================================================== */}

        <div
          className={`
            group
            relative

            mt-12

            overflow-hidden

            border
            border-[#29495E]/10

            bg-white/70

            backdrop-blur-sm

            transition-all
            duration-[1000ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            hover:-translate-y-1
            hover:border-[#29495E]/20
            hover:bg-white
            hover:shadow-[0_28px_70px_rgba(41,73,94,0.10)]

            ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-[0.98] opacity-0"
            }
          `}
        >
          {/* TOP LINE */}

          <div
            className={`
              absolute
              left-0
              top-0

              h-px

              bg-[#29495E]

              transition-all
              delay-300
              duration-[1300ms]
              ease-out

              ${
                visible
                  ? "w-full opacity-40"
                  : "w-0 opacity-0"
              }
            `}
          />

          {/* CARD HOVER GLOW */}

          <div
            className="
              pointer-events-none

              absolute
              -right-24
              -top-24

              h-64
              w-64

              rounded-full

              bg-[#7D9BAA]/[0.06]

              blur-[70px]

              transition-all
              duration-1000

              group-hover:scale-150
              group-hover:bg-[#7D9BAA]/[0.12]
            "
          />

          <div
            className="
              grid

              lg:grid-cols-[0.75fr_1.25fr]
            "
          >
            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div
              className={`
                relative

                flex
                flex-col
                justify-between

                border-b
                border-[#29495E]/10

                p-7

                transition-all
                delay-150
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]

                sm:p-9

                lg:border-b-0
                lg:border-r
                lg:p-10

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }
              `}
            >
              <div>
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.35em]
                    text-[#29495E]/35
                  "
                >
                  PS5 Experience
                </span>

                <h3
                  className="
                    mt-5

                    text-[2rem]
                    leading-none

                    text-[#29495E]

                    transition-all
                    duration-500

                    group-hover:translate-x-2

                    sm:text-[2.5rem]
                  "
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", serif',
                    fontWeight: 400,
                  }}
                >
                  PS5
                </h3>
              </div>

              <div
                className="
                  mt-10

                  flex
                  items-center
                  gap-3

                  lg:mt-20
                "
              >
                <span
                  className="
                    h-px
                    w-7

                    bg-[#29495E]/20

                    transition-all
                    duration-500

                    group-hover:w-12
                    group-hover:bg-[#29495E]/45
                  "
                />

                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-[#29495E]/30
                  "
                >
                  Play · Connect · Compete
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className={`
                relative

                p-7

                transition-all
                delay-250
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]

                sm:p-9

                lg:p-10

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }
              `}
            >
              <div
                className="
                  flex
                  flex-col
                  gap-8

                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                {/* PRICE */}

                <div>
                  <div
                    className="
                      flex
                      flex-wrap
                      items-end
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[3.7rem]
                        leading-[0.82]
                        tracking-[-0.04em]

                        text-[#29495E]

                        transition-all
                        duration-700

                        group-hover:translate-x-1

                        sm:text-[4.6rem]

                        lg:text-[5rem]
                      "
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", serif',
                        fontWeight: 400,
                      }}
                    >
                      ₹
                      {price.toLocaleString(
                        "en-IN"
                      )}
                    </span>

                    <span
                      className="
                        mb-1

                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-[#29495E]/35
                      "
                    >
                      / hour
                    </span>
                  </div>

                  <p
                    className="
                      mt-5

                      max-w-md

                      text-[11px]
                      leading-6
                      text-[#29495E]/45

                      sm:text-xs
                    "
                  >
                    Book the PS5 court for
                    your preferred time and enjoy
                    the game at your own pace.
                  </p>
                </div>

                {/* CTA */}

                <a
                  href="/book"
                  className="
                    group/button
                    relative

                    inline-flex
                    w-fit
                    shrink-0

                    items-center
                    justify-between
                    gap-8

                    overflow-hidden

                    border
                    border-[#29495E]/35

                    px-6
                    py-3.5

                    text-[8px]
                    uppercase
                    tracking-[0.22em]

                    text-[#29495E]

                    transition-all
                    duration-500

                    hover:border-[#29495E]
                  "
                >
                  {/* HOVER FILL */}

                  <span
                    className="
                      absolute
                      inset-0

                      origin-left
                      scale-x-0

                      bg-[#29495E]

                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      group-hover/button:scale-x-100
                    "
                  />

                  <span
                    className="
                      relative
                      z-10

                      transition-colors
                      duration-500

                      group-hover/button:text-white
                    "
                  >
                    Book Your PS5
                  </span>

                  <span
                    className="
                      relative
                      z-10

                      transition-all
                      duration-500

                      group-hover/button:translate-x-1.5
                      group-hover/button:text-white
                    "
                  >
                    &#8594;
                  </span>
                </a>
              </div>

              {/* =================================================
                  INCLUDED
              ================================================= */}

              <div
                className="
                  mt-9

                  grid
                  gap-4

                  border-t
                  border-[#29495E]/10

                  pt-6

                  sm:grid-cols-3
                "
              >
                {includedItems.map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`
                        flex
                        items-center
                        gap-2.5

                        transition-all
                        duration-700
                        ease-[cubic-bezier(0.16,1,0.3,1)]

                        ${
                          visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }
                      `}
                      style={{
                        transitionDelay: `${
                          500 +
                          index * 140
                        }ms`,
                      }}
                    >
                      <span
                        className="
                          flex
                          h-4
                          w-4
                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          border
                          border-[#29495E]/20

                          text-[7px]
                          text-[#29495E]/60

                          transition-all
                          duration-500

                          group-hover:border-[#29495E]/45
                        "
                      >
                        &#10003;
                      </span>

                      <span
                        className="
                          text-[10px]
                          text-[#29495E]/45
                        "
                      >
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div
          className={`
            mt-5

            flex
            flex-col
            gap-3

            transition-all
            delay-500
            duration-1000

            sm:flex-row
            sm:items-center
            sm:justify-between

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-[#29495E]/25
            "
          >
            Transparent pricing
          </span>

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-[#29495E]/25

              sm:text-right
            "
          >
            Pricing shown before confirmation
          </span>
        </div>
      </div>
    </section>
  );
}