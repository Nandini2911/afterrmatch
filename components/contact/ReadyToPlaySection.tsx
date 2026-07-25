"use client";

import { Cormorant_Garamond } from "next/font/google";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Crown,
  PartyPopper,
  Sparkles,
  Users,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const newYorkFont = {
  fontFamily:
    '"New York", NewYork, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const premiumEase = [0.22, 1, 0.36, 1] as const;

type CTAItem = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  href: string;
  icon: React.ElementType;
  features: string[];
  featured?: boolean;
};

const ctaItems: CTAItem[] = [
  {
    number: "01",
    eyebrow: "Court Booking",
    title: "Book your next game.",
    description:
      "Reserve your court, choose your preferred slot and step into a premium pickleball experience.",
    action: "Book a Court",
    href: "/book",
    icon: CalendarDays,
    features: ["Flexible slots", "Premium courts", "Quick confirmation"],
  },
  {
    number: "02",
    eyebrow: "Membership",
    title: "Play more. Belong here.",
    description:
      "Unlock better value, priority access and a stronger connection with the AfterrMatch community.",
    action: "Explore Memberships",
    href: "/membership",
    icon: Crown,
    features: ["Priority access", "Member benefits", "Community games"],
    featured: true,
  },
  {
    number: "03",
    eyebrow: "Private Events",
    title: "Turn play into a celebration.",
    description:
      "Host birthdays, corporate games, tournaments and private social experiences designed around your group.",
    action: "Plan an Event",
    href: "/events",
    icon: PartyPopper,
    features: ["Custom formats", "Group experiences", "Event support"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: premiumEase,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.97,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: premiumEase,
    },
  },
};

export default function ReadyToPlaySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ready-to-play"
      className={`${cormorant.className} relative w-full overflow-hidden bg-[#17364A] py-16 text-white sm:py-20 lg:py-24`}
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
                  x: [0, 40, 0],
                  y: [0, -26, 0],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-white/[0.07] blur-3xl"
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -35, 0],
                  y: [0, 28, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#89A7B8]/10 blur-3xl"
        />

        <div className="absolute inset-0 opacity-[0.045]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:76px_76px]" />
        </div>

        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.15,
            ease: premiumEase,
          }}
          className="absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* TOP HEADING */}

        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-7 border-b border-white/10 pb-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pb-12"
        >
          <motion.div variants={revealUp}>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-xl">
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.4, 1],
                        opacity: [1, 0.45, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-white"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-white/70 sm:text-[11px]">
                Ready to Play
              </span>
            </div>

            <h2
              style={newYorkFont}
              className="mt-5 max-w-4xl text-[clamp(3rem,5.8vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.06em]"
            >
              Choose your way
              <span className="block italic text-white/70">
                into AfterrMatch.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={revealUp}
            className="max-w-xl lg:ml-auto lg:pb-2"
          >
            <p className="text-[16px] font-medium leading-7 text-white/60 sm:text-[17px] sm:leading-8">
              Whether you are booking your first game, joining as a member or
              planning a private experience, your next move starts here.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-12 bg-white/25" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Book · Join · Celebrate
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA CARDS */}

        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-8 grid gap-4 lg:grid-cols-3"
        >
          {ctaItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        transition: {
                          duration: 0.32,
                          ease: premiumEase,
                        },
                      }
                }
                className={`group relative flex min-h-[410px] flex-col overflow-hidden rounded-[30px] border p-6 sm:p-7 lg:p-8 ${
                  item.featured
                    ? "border-white bg-white text-[#17364A] shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
                    : "border-white/12 bg-white/[0.055] text-white backdrop-blur-xl"
                }`}
              >
                {/* CARD DECORATION */}

                <motion.div
                  aria-hidden="true"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: item.featured ? 360 : -360,
                        }
                  }
                  transition={{
                    duration: item.featured ? 30 : 36,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -right-20 -top-20 h-60 w-60 rounded-full border ${
                    item.featured
                      ? "border-[#17364A]/10"
                      : "border-white/10"
                  }`}
                />

                <div
                  className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t ${
                    item.featured
                      ? "from-[#17364A]/[0.06] to-transparent"
                      : "from-white/[0.04] to-transparent"
                  }`}
                />

                {/* CARD TOP */}

                <div className="relative flex items-start justify-between gap-4">
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: -8,
                            scale: 1.08,
                          }
                    }
                    transition={{
                      duration: 0.3,
                      ease: premiumEase,
                    }}
                    className={`flex h-13 w-13 items-center justify-center rounded-full p-4 ${
                      item.featured
                        ? "bg-[#17364A] text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </motion.div>

                  <span
                    className={`text-[11px] font-semibold tracking-[0.2em] ${
                      item.featured
                        ? "text-[#17364A]/35"
                        : "text-white/35"
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* CARD CONTENT */}

                <div className="relative mt-8 flex flex-1 flex-col">
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                      item.featured
                        ? "text-[#17364A]/45"
                        : "text-white/45"
                    }`}
                  >
                    {item.eyebrow}
                  </p>

                  <h3
                    style={newYorkFont}
                    className="mt-3 text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[0.98] tracking-[-0.045em]"
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-5 text-[15px] font-medium leading-7 ${
                      item.featured
                        ? "text-[#17364A]/62"
                        : "text-white/58"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: -12,
                              }
                        }
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.25 + index * 0.08,
                          ease: premiumEase,
                        }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.featured
                              ? "bg-[#17364A]"
                              : "bg-white/70"
                          }`}
                        />

                        <p
                          className={`text-sm font-semibold ${
                            item.featured
                              ? "text-[#17364A]/55"
                              : "text-white/55"
                          }`}
                        >
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href={item.href}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
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
                    className={`mt-8 inline-flex min-h-[54px] w-full items-center justify-between rounded-full px-6 text-base font-semibold transition-colors duration-300 ${
                      item.featured
                        ? "bg-[#17364A] text-white"
                        : "border border-white/15 bg-white/[0.08] text-white hover:bg-white hover:text-[#17364A]"
                    }`}
                  >
                    <span>{item.action}</span>

                    <motion.span
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 4,
                            }
                      }
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        item.featured
                          ? "bg-white/10"
                          : "bg-white/10 group-hover:bg-[#17364A]/10"
                      }`}
                    >
                      <ArrowRight size={17} aria-hidden="true" />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM STRIP */}

        <motion.div
          variants={revealUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-5 flex flex-col gap-5 rounded-[26px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Users size={18} aria-hidden="true" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Playing with a group?
              </p>

              <p className="mt-1 text-base font-medium text-white/70">
                Speak with our team for group bookings and custom experiences.
              </p>
            </div>
          </div>

          <motion.a
            href="https://wa.me/9217057386"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    x: 4,
                  }
            }
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white"
          >
            Contact our team
            <ArrowUpRight size={16} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}