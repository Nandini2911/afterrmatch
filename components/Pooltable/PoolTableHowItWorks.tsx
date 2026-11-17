"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Choose Your Session",
    description:
      "Find a date and time that works for you, your friends or your group.",
  },
  {
    number: "02",
    title: "Book Your Table",
    description:
      "Reserve your pool table session through our simple booking experience.",
  },
  {
    number: "03",
    title: "Play & Connect",
    description:
      "Show up, step onto the table and enjoy the game, the atmosphere and the people.",
  },
];

export default function PoolTableHowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const desktopTrackRef = useRef<HTMLDivElement | null>(null);

  const mobileDotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const desktopDotsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [visible, setVisible] = useState(false);

  const [mobileProgress, setMobileProgress] = useState(0);
  const [desktopProgress, setDesktopProgress] = useState(0);

  const [mobileActive, setMobileActive] = useState(0);
  const [desktopActive, setDesktopActive] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let raf = 0;

    const updateMobileProgress = () => {
      const dots = mobileDotsRef.current.filter(
        Boolean
      ) as HTMLDivElement[];

      if (!dots.length) return;

      const triggerPoint = window.innerHeight * 0.55;

      const firstRect =
        dots[0].getBoundingClientRect();

      const lastRect =
        dots[dots.length - 1].getBoundingClientRect();

      const firstY =
        firstRect.top + firstRect.height / 2;

      const lastY =
        lastRect.top + lastRect.height / 2;

      const totalDistance = lastY - firstY;

      if (totalDistance <= 0) return;

      let progress =
        (triggerPoint - firstY) / totalDistance;

      progress = Math.max(
        0,
        Math.min(1, progress)
      );

      setMobileProgress(progress);

      let closestStep = 0;
      let closestDistance = Infinity;

      dots.forEach((dot, index) => {
        const rect = dot.getBoundingClientRect();

        const center =
          rect.top + rect.height / 2;

        const distance = Math.abs(
          center - triggerPoint
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = index;
        }
      });

      setMobileActive(closestStep);
    };

    const updateDesktopProgress = () => {
      const track = desktopTrackRef.current;

      if (!track) return;

      const rect = track.getBoundingClientRect();

      const triggerPoint = window.innerHeight * 0.6;

      const start =
        window.innerHeight * 0.82;

      const end =
        window.innerHeight * 0.25;

      let progress =
        (start - rect.top) /
        (start - end);

      progress = Math.max(
        0,
        Math.min(1, progress)
      );

      setDesktopProgress(progress);

      if (progress < 0.28) {
        setDesktopActive(0);
      } else if (progress < 0.67) {
        setDesktopActive(1);
      } else {
        setDesktopActive(2);
      }
    };

    const update = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const mobile =
          window.innerWidth < 768;

        setIsMobile(mobile);

        if (mobile) {
          updateMobileProgress();
        } else {
          updateDesktopProgress();
        }
      });
    };

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          threshold: 0.05,
        }
      );

    observer.observe(section);

    window.addEventListener(
      "scroll",
      update,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      update
    );

    requestAnimationFrame(() => {
      requestAnimationFrame(update);
    });

    return () => {
      cancelAnimationFrame(raf);

      observer.disconnect();

      window.removeEventListener(
        "scroll",
        update
      );

      window.removeEventListener(
        "resize",
        update
      );
    };
  }, []);

  const currentActive = isMobile
    ? mobileActive
    : desktopActive;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden

        bg-[#2B4E66]
        text-[#EEF3F5]

        px-5
        py-20

        sm:px-8
        sm:py-24

        md:px-10
        md:py-28

        lg:px-16
        lg:py-32

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
        "
      >
        {/* SOFT GLOW */}

        <div
          className="
            absolute
            -right-32
            -top-32

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#31566C]/10
            blur-[110px]

            sm:h-[600px]
            sm:w-[600px]
          "
        />

        <div
          className="
            absolute
            -bottom-52
            -left-52

            h-[520px]
            w-[520px]

            rounded-full

            bg-[#31566C]/5
            blur-[130px]
          "
        />

        {/* CIRCLES */}

        <div
          className="
            absolute
            -right-28
            -top-28

            h-72
            w-72

            rounded-full
            border
            border-white/[0.035]

            sm:h-96
            sm:w-96
          "
        />

        <div
          className="
            absolute
            -bottom-44
            -left-44

            h-96
            w-96

            rounded-full
            border
            border-white/[0.025]
          "
        />

        {/* VERTICAL GRID */}

        <div
          className="
            absolute
            left-[12%]
            top-0

            h-full
            w-px

            bg-white/[0.025]
          "
        />

        <div
          className="
            absolute
            right-[12%]
            top-0

            h-full
            w-px

            bg-white/[0.025]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className={`
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-9
                bg-white/25
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.42em]
                text-white/35

                sm:text-[9px]
              "
            >
              How It Works
            </span>
          </div>

          <div
            className="
              mt-8
              grid
              gap-8

              lg:grid-cols-[minmax(0,1fr)_280px]
              lg:items-end
              lg:gap-16
            "
          >
            <h2
              className="
                max-w-4xl

                text-[2.8rem]
                leading-[0.88]
                tracking-[-0.045em]

                sm:text-[3.5rem]

                md:text-[4.2rem]

                lg:text-[4.8rem]

                xl:text-[5.2rem]
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond", serif',
                fontWeight: 400,
              }}
            >
              Three steps.
              <br />

              <span
                className="
                  italic
                  text-white/25
                "
              >
                Then you&apos;re on table.
              </span>
            </h2>

            <p
              className="
                max-w-sm

                text-[11px]
                leading-6
                text-white/40

                sm:text-xs
                sm:leading-6
              "
            >
              Getting started is simple. Pick your
              time, reserve your table and come
              ready to play.
            </p>
          </div>
        </div>

        {/* =====================================================
            DESKTOP
        ===================================================== */}

        <div
          ref={desktopTrackRef}
          className="
            relative

            mt-16

            hidden
            md:block

            lg:mt-20
          "
        >
          {/* BASE LINE */}

          <div
            className="
              absolute

              left-7
              right-7
              top-7

              h-px

              bg-white/10
            "
          />

          {/* ACTIVE LINE */}

          <div
            className="
              absolute

              left-7
              top-7

              h-px

              bg-[#A9C2D0]

              transition-[width]
              duration-150

              will-change-[width]
            "
            style={{
              width: `calc(${desktopProgress} * (100% - 56px))`,
            }}
          />

          <div className="grid grid-cols-3">
            {steps.map((step, index) => {
              const active =
                index === desktopActive;

              const passed =
                index <= desktopActive;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    min-w-0
                  "
                >
                  {/* DOT */}

                  <div
                    ref={(element) => {
                      desktopDotsRef.current[index] =
                        element;
                    }}
                    className={`
                      relative
                      z-10

                      flex
                      h-14
                      w-14

                      items-center
                      justify-center

                      rounded-full
                      border

                      text-[9px]
                      tracking-[0.15em]

                      transition-all
                      duration-500
                      ease-out

                      ${
                        passed
                          ? `
                            border-[#A9C2D0]
                            bg-[#A9C2D0]
                            text-[#0B1217]
                          `
                          : `
                            border-white/15
                            bg-[#0B1217]
                            text-white/30
                          `
                      }

                      ${
                        active
                          ? `
                            scale-110
                            shadow-[0_0_0_7px_rgba(169,194,208,0.07)]
                          `
                          : ""
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  {/* CONTENT */}

                  <div
                    className={`
                      mt-9
                      pr-8

                      transition-all
                      duration-700

                      ${
                        active
                          ? `
                            translate-y-0
                            opacity-100
                          `
                          : `
                            translate-y-3
                            opacity-35
                          `
                      }
                    `}
                  >
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.32em]
                        text-white/25
                      "
                    >
                      Step {step.number}
                    </p>

                    <h3
                      className="
                        mt-3

                        text-[1.9rem]
                        leading-[0.92]
                        tracking-[-0.025em]

                        text-white

                        lg:text-[2.3rem]

                        xl:text-[2.5rem]
                      "
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", serif',
                        fontWeight: 400,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4

                        max-w-sm

                        text-xs
                        leading-6

                        text-white/40
                      "
                    >
                      {step.description}
                    </p>

                    <div
                      className={`
                        mt-6

                        h-px

                        bg-[#A9C2D0]

                        transition-all
                        duration-700

                        ${
                          active
                            ? "w-16"
                            : "w-0"
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}

        <div
          ref={mobileTrackRef}
          className="
            relative

            mt-12

            md:hidden
          "
        >
          {/* BASE LINE */}

          <div
            className="
              absolute

              bottom-5
              left-5
              top-5

              w-px

              bg-white/10
            "
          />

          {/* ACTIVE LINE */}

          <div
            className="
              absolute

              left-5
              top-5

              w-px

              bg-[#A9C2D0]

              transition-[height]
              duration-150

              will-change-[height]
            "
            style={{
              height: `${mobileProgress * 100}%`,
            }}
          />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const active =
                index === mobileActive;

              const passed =
                index <= mobileActive;

              const fromLeft =
                index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="
                    relative
                    flex
                    gap-5
                  "
                >
                  {/* DOT */}

                  <div
                    ref={(element) => {
                      mobileDotsRef.current[index] =
                        element;
                    }}
                    className={`
                      relative
                      z-10

                      flex
                      h-10
                      w-10
                      shrink-0

                      items-center
                      justify-center

                      rounded-full
                      border

                      text-[8px]
                      tracking-[0.12em]

                      transition-all
                      duration-500

                      ${
                        passed
                          ? `
                            border-[#A9C2D0]
                            bg-[#A9C2D0]
                            text-[#0B1217]
                          `
                          : `
                            border-white/15
                            bg-[#0B1217]
                            text-white/30
                          `
                      }

                      ${
                        active
                          ? `
                            scale-110
                            shadow-[0_0_0_5px_rgba(169,194,208,0.07)]
                          `
                          : ""
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  {/* CONTENT */}

                  <div
                    className={`
                      min-w-0
                      flex-1

                      pb-1

                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      ${
                        active
                          ? `
                            translate-x-0
                            opacity-100
                          `
                          : fromLeft
                            ? `
                              -translate-x-5
                              opacity-35
                            `
                            : `
                              translate-x-5
                              opacity-35
                            `
                      }
                    `}
                  >
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-white/25
                      "
                    >
                      Step {step.number}
                    </p>

                    <h3
                      className="
                        mt-2

                        text-[1.9rem]
                        leading-[0.9]
                        tracking-[-0.025em]

                        text-white

                        sm:text-[2.1rem]
                      "
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", serif',
                        fontWeight: 400,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        max-w-md

                        text-xs
                        leading-6

                        text-white/40
                      "
                    >
                      {step.description}
                    </p>

                    <div
                      className={`
                        mt-5

                        h-px

                        bg-[#A9C2D0]

                        transition-all
                        duration-700

                        ${
                          active
                            ? "w-14"
                            : "w-0"
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            STATUS
        ===================================================== */}

        <div
          className="
            mt-12

            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/25
            "
          >
            0{currentActive + 1} / 03
          </span>

          <span
            className="
              h-px
              w-8
              bg-white/10
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            {steps[currentActive].title}
          </span>
        </div>

        {/* =====================================================
            BOTTOM / CTA
        ===================================================== */}

        <div
          className="
            mt-8

            flex
            flex-col
            gap-6

            border-t
            border-white/[0.07]

            pt-8

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-md

              text-[11px]
              leading-6

              text-white/30
            "
          >
            No complicated setup. Choose your time,
            book your table and we&apos;ll see you on
            the other side of the net.
          </p>

          <a
            href="/book"
            className="
              group

              inline-flex
              w-fit
              shrink-0

              items-center
              gap-4

              rounded-full

              border
              border-white/20

              px-6
              py-3.5

              text-[8px]
              uppercase
              tracking-[0.25em]

              text-white/70

              transition-all
              duration-500

              hover:border-[#A9C2D0]
              hover:bg-[#A9C2D0]
              hover:text-[#0B1217]

              active:scale-[0.98]
            "
          >
            Book Your Table

            <span
              className="
                transition-transform
                duration-500

                group-hover:translate-x-1.5
              "
            >
              &#8594;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}