"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Choose Your Time",
    description:
      "Pick a date and time that works for you and your group.",
  },
  {
    number: "02",
    title: "Bring Your Crew",
    description:
      "Come with friends, bring the competition and settle in.",
  },
  {
    number: "03",
    title: "Break & Play",
    description:
      "Rack up, take your shot and enjoy the game.",
  },
];

export default function PoolTableBooking() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(1);

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
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#2B4E66] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* heading */}

        <div
          className={`transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >

          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
            Your Game
          </span>

          <h2
            className="mt-6 text-[3.4rem] leading-[0.9] sm:text-5xl lg:text-[4.8rem]"
            style={{
              fontFamily:
                '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >
            Ready when
            <br />
            <span className="text-white/30">
              you are.
            </span>
          </h2>

        </div>

        {/* steps */}

        <div className="mt-16 border-t border-white/10">

          {steps.map((step, index) => {
            const isActive = active === index;

            return (
              <button
                key={step.number}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className="group relative flex w-full items-center gap-6 border-b border-white/10 py-7 text-left"
              >

                <span
                  className={`text-[9px] tracking-[0.25em] transition-colors duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-white/25"
                  }`}
                >
                  {step.number}
                </span>

                <div className="flex-1">

                  <h3
                    className={`text-2xl transition-all duration-600 sm:text-3xl ${
                      isActive
                        ? "translate-x-2 text-white"
                        : "text-white/30"
                    }`}
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", serif',
                    }}
                  >
                    {step.title}
                  </h3>

                  <div
                    className={`grid transition-all duration-600 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <p className="mt-3 max-w-md text-xs leading-6 text-white/45">
                        {step.description}
                      </p>

                    </div>
                  </div>

                </div>

                <span
                  className={`transition-all duration-500 ${
                    isActive
                      ? "rotate-[-45deg] text-white"
                      : "text-white/20"
                  }`}
                >
                  →
                </span>

              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
}