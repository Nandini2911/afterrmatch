"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Plus,
  Minus,
  ArrowUpRight,
} from "lucide-react";

const faqItems = [
  {
    title: "ACCESS TO MEMBER-ONLY CLUBS",
    content:
      "Experience refined spaces designed for connection, wellness, and elevated social experiences reserved exclusively for members.",
  },
  {
    title: "PRIORITY BOOKING",
    content:
      "Secure early access to courts, curated events, private sessions, and premium experiences before public availability.",
  },
  {
    title:
      "MEMBER RATES FOR COURT BOOKING & CLINICS",
    content:
      "Unlock preferred pricing across coaching, clinics, court reservations, and member-exclusive programming.",
  },
  {
    title:
      "ACCESS TO MEMBER EVENTS & PROGRAMMING",
    content:
      "Enjoy private socials, curated wellness experiences, tournaments, networking evenings, and seasonal gatherings.",
  },
  {
    title: "ACCESS TO CLUB AMENITIES",
    content:
      "Relax in luxury lounges, recovery areas, wellness spaces, cafés, and hospitality-driven clubhouse environments.",
  },
];

export default function MembershipFAQ() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blur Effects */}
        <div className="absolute left-[-10%] top-0 h-[520px] w-[520px] rounded-full bg-[#2B4E66]/5 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#2B4E66]/8 blur-3xl" />

        {/* Luxury Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(43,78,102,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(43,78,102,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -120,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="flex flex-col justify-between"
        >
          <div>
            {/* LABEL */}
            <div
              className="mb-7 inline-flex items-center rounded-full border border-[#2B4E66]/10 bg-[#2B4E66]/5 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-[#2B4E66]"
              style={{
                fontFamily:
                  '"Inter", sans-serif',
              }}
            >
              Membership Access
            </div>

            {/* HEADING */}
            <h2
              className="max-w-lg text-[54px] font-semibold uppercase leading-[0.88] tracking-[-0.05em] text-[#2B4E66] sm:text-[76px]"
              style={{
                fontFamily:
                  '"Cormorant Garamond", serif',
              }}
            >
              Reserve Membership
            </h2>

            {/* DESCRIPTION */}
            <p
              className="mt-10 max-w-xl text-[17px] leading-[2.1] text-[#2B4E66]/72"
              style={{
                fontFamily:
                  '"Inter", sans-serif',
              }}
            >
              Membership at After Match is
              designed for individuals who
              appreciate refined experiences,
              meaningful community, and a
              lifestyle centered around sport,
              wellness, and elevated social
              culture.
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-16">
            <button className="group flex items-center gap-5">
              <span
                className="text-[14px] uppercase tracking-[0.24em] text-[#2B4E66]"
                style={{
                  fontFamily:
                    '"Inter", sans-serif',
                }}
              >
              
                  Apply Now
                
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2B4E66]/10 bg-[#2B4E66] text-white shadow-[0_10px_40px_rgba(43,78,102,0.25)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105">
                <a href="/book" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="border-t border-[#2B4E66]/10"
        >
          {faqItems.map((item, index) => {
            const isActive =
              activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="border-b border-[#2B4E66]/10"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  className="group flex w-full items-start justify-between gap-6 py-9 text-left"
                >
                  <h3
                    className="max-w-[88%] text-[18px] uppercase leading-[1.6] tracking-[0.24em] text-[#2B4E66] transition-all duration-300 group-hover:opacity-75 sm:text-[22px]"
                    style={{
                      fontFamily:
                        '"Inter", sans-serif',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* ICON */}
                  <div
                    className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive
                        ? "border-[#2B4E66] bg-[#2B4E66] text-white shadow-lg shadow-[#2B4E66]/20"
                        : "border-[#2B4E66]/12 bg-[#2B4E66]/5 text-[#2B4E66]"
                    }`}
                  >
                    {isActive ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="overflow-hidden"
                    >
                      <p
                        className="max-w-2xl pb-9 pr-16 text-[15px] leading-[2.1] text-[#2B4E66]/65"
                        style={{
                          fontFamily:
                            '"Inter", sans-serif',
                        }}
                      >
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}