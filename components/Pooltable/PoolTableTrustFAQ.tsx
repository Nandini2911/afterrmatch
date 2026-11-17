"use client";

import { useEffect, useRef, useState } from "react";

const trustPoints = [
  {
    number: "01",
    title: "Clear Booking",
    description:
      "Choose your preferred time and reserve your table through a simple booking experience.",
    micro: "BOOK WITH CONFIDENCE",
  },
  {
    number: "02",
    title: "Beginner Friendly",
    description:
      "You don't need to be an experienced player. Pick up the game at your own pace.",
    micro: "PLAY AT YOUR PACE",
  },
  {
    number: "03",
    title: "Transparent Policies",
    description:
      "Booking, pricing and cancellation information should always be clear before you confirm.",
    micro: "NO SURPRISES",
  },
];

const faqs = [
  {
    question: "Is pool table suitable for beginners?",
    answer:
      "Yes. Pool Table is easy to learn and is a great option whether you're playing for the first time or already enjoy the game.",
  },
  {
    question: "Do I need to bring my own cue?",
    answer:
      "You can bring your own equipment. If POOL TABLE provides or rents equipment, the available options and pricing can be mentioned here.",
  },
  {
    question: "Can I come with friends?",
    answer:
      "Absolutely. Pool Table is a social game and is ideal for playing with friends, family or your wider group.",
  },
  {
    question: "How do I book a table?",
    answer:
      "Select your preferred date and time from the booking page and complete your pool table reservation.",
  },
  {
    question: "How much does a pool table session cost?",
    answer:
      "Please check the current POOL TABLE booking page for the applicable table and session pricing.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Cancellation and refund eligibility depend on the applicable POOL TABLE cancellation policy. Please review the policy before confirming your booking.",
  },
];

export default function PoolTableTrustFAQ() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTrust, setActiveTrust] = useState(0);

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
        threshold: 0.12,
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
        bg-white
        px-5
        py-28
        text-[#2B4E66]
        sm:px-8
        md:px-10
        lg:px-16
        lg:py-40
      "
    >
      {/* =====================================================
          SUBTLE WHITE BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-[#2B4E66]/[0.025]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[120px]
          h-[550px]
          w-[550px]
          rounded-full
          border
          border-[#2B4E66]/[0.02]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER — WHITE
        =================================================== */}

        <div
          className={`
            grid
            gap-10
            lg:grid-cols-[1fr_0.55fr]
            lg:items-end
            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* LEFT */}

          <div>

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#2B4E66]/30" />

              <span className="text-[9px] uppercase tracking-[0.45em] text-[#2B4E66]/40">
                Good To Know
              </span>

            </div>

            <h2
              className="
                mt-8
                max-w-4xl
                text-[4rem]
                leading-[0.82]
                tracking-[-0.045em]
                text-[#2B4E66]
                sm:text-6xl
                md:text-7xl
                lg:text-[7rem]
              "
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
              }}
            >
              Before you
              <br />

              <span className="italic text-[#2B4E66]/20">
                step on table.
              </span>
            </h2>

          </div>

          {/* RIGHT */}

          <div className="max-w-sm lg:pb-2">

            <p className="text-sm leading-7 text-[#2B4E66]/50 sm:text-base">
              Everything you need to feel comfortable before your first
              session — from booking to playing.
            </p>

          </div>

        </div>

        {/* ===================================================
            TRUST POINTS
            ONLY THIS PART IS DARK
        =================================================== */}

        <div
          className={`
            relative
            mt-20
            overflow-hidden
            bg-[#172F40]
            text-white
            shadow-[0_30px_100px_rgba(23,47,64,0.10)]
            transition-all
            delay-150
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* =================================================
              DARK BACKGROUND DETAILS
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              border
              border-white/[0.035]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-40
              h-[450px]
              w-[450px]
              rounded-full
              border
              border-white/[0.025]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[15%]
              top-[20%]
              h-[260px]
              w-[260px]
              rounded-full
              bg-white/[0.015]
              blur-[100px]
            "
          />

          {/* =================================================
              DESKTOP TRUST LAYOUT
          ================================================= */}

          <div className="relative hidden lg:grid lg:grid-cols-[0.42fr_1fr]">

            {/* LEFT INDEX */}

            <div className="relative border-r border-white/10 px-10 py-12">

              <div className="sticky top-28">

                <p className="text-[8px] uppercase tracking-[0.4em] text-white/30">
                  Before You Play
                </p>

                {/* LARGE NUMBER */}

                <div className="mt-8">

                  <span
                    className="
                      block
                      text-[8rem]
                      leading-[0.75]
                      tracking-[-0.06em]
                      text-white/[0.08]
                    "
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                    }}
                  >
                    {trustPoints[activeTrust].number}
                  </span>

                </div>

                {/* MICRO TEXT */}

                <p className="mt-8 max-w-[150px] text-[8px] uppercase leading-5 tracking-[0.3em] text-white/30">
                  {trustPoints[activeTrust].micro}
                </p>

                {/* SMALL LINE */}

                <div className="mt-8 flex items-center gap-3">

                  <span className="h-px w-8 bg-white/20" />

                  <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
                    POOL TABLE
                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT TRUST ITEMS
            ================================================= */}

            <div>

              {trustPoints.map((point, index) => {

                const isActive = activeTrust === index;

                return (
                  <button
                    key={point.number}
                    type="button"
                    onMouseEnter={() => setActiveTrust(index)}
                    onFocus={() => setActiveTrust(index)}
                    className="
                      group
                      relative
                      grid
                      w-full
                      grid-cols-[90px_1fr]
                      gap-8
                      border-b
                      border-white/10
                      px-10
                      py-12
                      text-left
                      transition-all
                      duration-500
                      last:border-b-0
                      hover:bg-white/[0.025]
                    "
                  >
                    {/* NUMBER */}

                    <div>

                     

                    </div>

                    {/* CONTENT */}

                    <div>

                      <div className="flex items-center justify-between gap-6">

                        <h3
                          className={`
                            text-3xl
                            leading-none
                            transition-all
                            duration-500
                            lg:text-4xl
                            ${
                              isActive
                                ? "translate-x-1 text-white"
                                : "text-white/55"
                            }
                          `}
                          style={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 400,
                          }}
                        >
                          {point.title}
                        </h3>

                        {/* ARROW */}

                        <span
                          className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            text-sm
                            transition-all
                            duration-500
                            ${
                              isActive
                                ? "border-white bg-white text-[#172F40]"
                                : "border-white/10 text-white/30"
                            }
                          `}
                        >
                          →
                        </span>

                      </div>

                      {/* DESCRIPTION */}

                      <div
                        className={`
                          grid
                          transition-all
                          duration-500
                          ease-out
                          ${
                            isActive
                              ? "mt-5 grid-rows-[1fr] opacity-100"
                              : "mt-0 grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >

                        <div className="overflow-hidden">

                          <p className="max-w-xl text-sm leading-7 text-white/45">
                            {point.description}
                          </p>

                        </div>

                      </div>

                      {/* ACTIVE LINE */}

                      <div
                        className={`
                          mt-7
                          h-px
                          bg-white
                          transition-all
                          duration-700
                          ${
                            isActive
                              ? "w-24"
                              : "w-0"
                          }
                        `}
                      />

                    </div>

                  </button>
                );

              })}

            </div>

          </div>

          {/* =================================================
              MOBILE / TABLET TRUST LAYOUT
          ================================================= */}

          <div className="relative lg:hidden">

            {trustPoints.map((point, index) => {

              const isActive = activeTrust === index;

              return (
                <button
                  key={point.number}
                  type="button"
                  onClick={() =>
                    setActiveTrust(
                      isActive ? 0 : index
                    )
                  }
                  className="
                    group
                    w-full
                    border-b
                    border-white/10
                    px-6
                    py-9
                    text-left
                    transition-colors
                    duration-500
                    last:border-b-0
                    hover:bg-white/[0.025]
                    sm:px-10
                  "
                >

                  <div className="flex items-start justify-between gap-5">

                    {/* LEFT */}

                    <div className="flex gap-6">

                      <span
                        className={`
                          pt-1
                          text-[9px]
                          tracking-[0.3em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-white"
                              : "text-white/30"
                          }
                        `}
                      >
                        {point.number}
                      </span>

                      <div>

                        <h3
                          className={`
                            text-3xl
                            leading-none
                            transition-all
                            duration-500
                            ${
                              isActive
                                ? "text-white"
                                : "text-white/65"
                            }
                          `}
                          style={{
                            fontFamily: '"Cormorant Garamond", serif',
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
                            duration-500
                            ease-out
                            ${
                              isActive
                                ? "mt-4 grid-rows-[1fr] opacity-100"
                                : "mt-0 grid-rows-[0fr] opacity-0"
                            }
                          `}
                        >

                          <div className="overflow-hidden">

                            <p className="max-w-lg text-sm leading-7 text-white/45">
                              {point.description}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* ICON */}

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
                        text-sm
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "rotate-45 border-white bg-white text-[#172F40]"
                            : "border-white/10 text-white/40"
                        }
                      `}
                    >
                      +
                    </span>

                  </div>

                </button>
              );

            })}

          </div>

        </div>

        {/* ===================================================
            FAQ — WHITE
        =================================================== */}

        <div
          className="
            mt-32
            border-t
            border-[#2B4E66]/10
            pt-20
            lg:mt-40
          "
        >

          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            {/* =================================================
                FAQ INTRO
            ================================================= */}

            <div className="lg:sticky lg:top-28 lg:self-start">

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#2B4E66]/35">
                Frequently Asked Questions
              </p>

              <h3
                className="
                  mt-7
                  text-4xl
                  leading-[0.9]
                  tracking-[-0.03em]
                  text-[#2B4E66]
                  sm:text-5xl
                  lg:text-6xl
                "
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                }}
              >
                Everything you need
                <br />

                <span className="italic text-[#2B4E66]/20">
                  to know before playing.
                </span>
              </h3>

              <p className="mt-7 max-w-sm text-sm leading-7 text-[#2B4E66]/45">
                Still have a question? Our booking and support team can help
                before your session.
              </p>

              {/* CONTACT */}

              <a
                href="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-4
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#2B4E66]
                  transition-all
                  duration-300
                  hover:opacity-60
                "
              >
                <span>Contact Us</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

            {/* =================================================
                FAQ LIST
            ================================================= */}

            <div className="border-t border-[#2B4E66]/10">

              {faqs.map((faq, index) => {

                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#2B4E66]/10"
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(
                          isOpen ? null : index
                        )
                      }
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        py-7
                        text-left
                      "
                      aria-expanded={isOpen}
                    >

                      {/* QUESTION */}

                      <div className="flex items-start gap-6">

                        <span
                          className="
                            pt-1
                            text-[8px]
                            tracking-[0.25em]
                            text-[#2B4E66]/25
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`
                            text-sm
                            transition-colors
                            duration-300
                            sm:text-base
                            ${
                              isOpen
                                ? "text-[#2B4E66]"
                                : "text-[#2B4E66]/70"
                            }
                          `}
                        >
                          {faq.question}
                        </span>

                      </div>

                      {/* PLUS */}

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
                          text-sm
                          transition-all
                          duration-500
                          ${
                            isOpen
                              ? "rotate-45 border-[#2B4E66] bg-[#2B4E66] text-white"
                              : "border-[#2B4E66]/10 text-[#2B4E66]/35 group-hover:border-[#2B4E66]/30 group-hover:text-[#2B4E66]/60"
                          }
                        `}
                      >
                        +
                      </span>

                    </button>

                    {/* ANSWER */}

                    <div
                      className={`
                        grid
                        transition-all
                        duration-500
                        ease-out
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >

                      <div className="overflow-hidden">

                        <div className="pb-7 pl-[2.25rem] pr-10">

                          <p className="max-w-2xl text-xs leading-7 text-[#2B4E66]/50 sm:text-sm">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

        {/* ===================================================
            CANCELLATION POLICY — WHITE
        =================================================== */}

        <div
          className="
            mt-16
            border-t
            border-[#2B4E66]/10
            pt-7
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* TRUST MESSAGE */}

            <div className="flex items-center gap-3">

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#2B4E66]/10
                  text-[9px]
                  text-[#2B4E66]/50
                "
              >
                ✓
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-[#2B4E66]/35">
                Clear policies. Better experience.
              </span>

            </div>

            {/* POLICY LINK */}

           
          </div>

        </div>

      </div>
    </section>
  );
}