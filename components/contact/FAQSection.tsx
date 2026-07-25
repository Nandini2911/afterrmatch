"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Gamepad2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const premiumEase = [0.22, 1, 0.36, 1] as const;

type FAQItem = {
  question: string;
  answer: string;
  category: string;
  icon: React.ElementType;
};

const faqItems: FAQItem[] = [
  {
    question: "Do I need experience to play pickleball?",
    answer:
      "No experience is required. AfterrMatch welcomes first-time players, casual players and experienced athletes. Our beginner sessions help you learn serving, scoring, positioning and the basic rules before your first proper game.",
    category: "Beginners",
    icon: Trophy,
  },
  {
    question: "How can I book a court?",
    answer:
      "You can reserve a court through WhatsApp, phone or our online booking flow. Advance reservations are recommended for evening and weekend slots.",
    category: "Bookings",
    icon: CalendarDays,
  },
  {
    question: "Are paddles and balls available?",
    answer:
      "Yes. Paddles and balls are available at the venue for players who do not have their own equipment. You are also welcome to bring your personal paddle.",
    category: "Equipment",
    icon: ShieldCheck,
  },
  {
    question: "Can I visit alone?",
    answer:
      "Absolutely. Our social games and community sessions are designed to help individual players meet others, join matches and become part of the AfterrMatch community.",
    category: "Community",
    icon: Users,
  },
  {
    question: "Do you provide coaching?",
    answer:
      "Yes. We offer beginner coaching, guided practice and skill-development sessions. Coaching availability depends on the selected day, time and instructor schedule.",
    category: "Coaching",
    icon: Sparkles,
  },
  {
    question: "Can I host a private event?",
    answer:
      "Yes. AfterrMatch can host birthdays, corporate activities, tournaments, group games and private social events with customised packages.",
    category: "Events",
    icon: Gamepad2,
  },
  {
    question: "What are the operating hours?",
    answer:
      "AfterrMatch is open throughout the week, with extended hours on weekends. Timings may vary during tournaments, maintenance and private events.",
    category: "Timings",
    icon: Clock3,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.64,
      ease: premiumEase,
    },
  },
};

export default function PremiumFAQSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className={`${cormorant.className} relative overflow-hidden bg-[#EEF3F5] py-16 text-[#24475E] sm:py-20 lg:py-24`}
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 top-10 h-[360px] w-[360px] rounded-full bg-white/80 blur-3xl"
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -35, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 -left-20 h-[340px] w-[340px] rounded-full bg-[#24475E]/[0.07] blur-3xl"
        />

        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#24475E_1px,transparent_1px),linear-gradient(to_bottom,#24475E_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* HEADER */}

        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <motion.div variants={revealUp}>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#24475E]/10 bg-white/70 px-4 py-2 shadow-[0_10px_30px_rgba(36,71,94,0.05)] backdrop-blur-xl">
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.35, 1],
                        opacity: [1, 0.5, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-[#24475E]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.23em] sm:text-[11px]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-[clamp(2.9rem,5vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Clear answers.
              <span className="block italic">Better experiences.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={revealUp}
            className="max-w-lg text-[16px] font-medium leading-7 text-[#24475E]/60 sm:text-[17px] lg:ml-auto lg:text-right"
          >
            Everything you need to know before booking your court, joining a
            game or planning an experience at AfterrMatch.
          </motion.p>
        </motion.div>

        {/* MAIN PANEL */}

        <motion.div
          variants={revealUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 overflow-hidden rounded-[32px] border border-[#24475E]/10 bg-white/75 shadow-[0_28px_90px_rgba(36,71,94,0.1)] backdrop-blur-2xl"
        >
          <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
            {/* LEFT SIDE */}

            <div className="relative overflow-hidden bg-[#24475E] p-6 text-white sm:p-8 lg:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

              <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-white/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <MessageCircle size={19} aria-hidden="true" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                      Support
                    </span>
                  </div>

                  <h3 className="mt-8 text-[clamp(2.3rem,4vw,4rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                    Still have
                    <span className="block italic">a question?</span>
                  </h3>

                  <p className="mt-5 max-w-sm text-[15px] font-medium leading-7 text-white/62 sm:text-base">
                    Our team can help with bookings, coaching, memberships and
                    private event enquiries.
                  </p>
                </div>

                <motion.a
                  href="https://wa.me/9217057386"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.015,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-[#24475E]"
                >
                  Chat with our team
                  <ArrowUpRight size={17} aria-hidden="true" />
                </motion.a>
              </div>
            </div>

            {/* FAQ LIST */}

            <motion.div
              variants={containerVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="divide-y divide-[#24475E]/10"
            >
              {faqItems.map((item, index) => {
                const Icon = item.icon;
                const isOpen = activeIndex === index;
                const answerId = `faq-answer-${index}`;
                const questionId = `faq-question-${index}`;

                return (
                  <motion.article
                    key={item.question}
                    variants={itemVariants}
                    layout
                    className={`relative transition-colors duration-300 ${
                      isOpen ? "bg-[#F7F9FA]" : "bg-transparent"
                    }`}
                  >
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === index ? -1 : index,
                        )
                      }
                      className="group relative flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6 lg:px-8"
                    >
                      <motion.span
                        animate={{
                          color: isOpen
                            ? "#24475E"
                            : "rgba(36,71,94,0.25)",
                        }}
                        className="hidden w-7 shrink-0 text-[11px] font-semibold tracking-[0.18em] sm:block"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>

                      <motion.div
                        animate={{
                          rotate: isOpen ? -7 : 0,
                          scale: isOpen ? 1.06 : 1,
                          backgroundColor: isOpen
                            ? "#24475E"
                            : "rgba(36,71,94,0.07)",
                          color: isOpen ? "#ffffff" : "#24475E",
                        }}
                        transition={{
                          duration: 0.32,
                          ease: premiumEase,
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </motion.div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#24475E]/35">
                          {item.category}
                        </p>

                        <h3 className="mt-1.5 text-[19px] font-semibold leading-snug tracking-[-0.025em] text-[#24475E] sm:text-[21px]">
                          {item.question}
                        </h3>
                      </div>

                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          backgroundColor: isOpen
                            ? "#24475E"
                            : "rgba(36,71,94,0.06)",
                          color: isOpen ? "#ffffff" : "#24475E",
                        }}
                        transition={{
                          duration: 0.35,
                          ease: premiumEase,
                        }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      >
                        <ChevronDown size={17} aria-hidden="true" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={answerId}
                          role="region"
                          aria-labelledby={questionId}
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  height: 0,
                                  opacity: 0,
                                }
                          }
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: 0.46,
                              ease: premiumEase,
                            },
                            opacity: {
                              duration: 0.24,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    y: -8,
                                    filter: "blur(4px)",
                                  }
                            }
                            animate={{
                              y: 0,
                              filter: "blur(0px)",
                            }}
                            exit={{
                              y: -6,
                              filter: "blur(3px)",
                            }}
                            transition={{
                              duration: 0.34,
                              ease: premiumEase,
                            }}
                            className="px-5 pb-6 sm:px-7 lg:px-8"
                          >
                            <div className="border-t border-[#24475E]/10 pt-4 sm:ml-[87px]">
                              <p className="max-w-3xl text-[15px] font-medium leading-7 text-[#24475E]/62 sm:text-base">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}