"use client";

import { Cormorant_Garamond } from "next/font/google";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
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

type ContactIcon =
  | "address"
  | "phone"
  | "whatsapp"
  | "email"
  | "instagram";

type ContactItem = {
  label: string;
  value: string;
  action: string;
  href: string;
  icon: ContactIcon;
  external: boolean;
};

const contactItems: ContactItem[] = [
  {
  label: "Address",
  value:
    "Plot No. 15, Noida–Greater Noida Link Road, Near Cherry County Street, Industrial Area GNIDA, Iteda, Greater Noida, Ithaira, Uttar Pradesh 201009",
  action: "Open location",
  href: "https://www.google.com/maps/dir/?api=1&destination=28.60274597568103,77.44345437610508",
  icon: "address",
  external: true,
},
  {
    label: "Contact Us",
    value: "+91 9311821282",
    action: "Call now",
    href: "tel:+91 9311821282",
    icon: "phone",
    external: false,
  },
  
  {
    label: "Email",
    value: "afterrmatch.pr@gmail.com",
    action: "Send an email",
    href: "mailto:afterrmatch.pr@gmail.com",
    icon: "email",
    external: false,
  },
  {
    label: "Instagram",
    value: "@afterrmatch",
    action: "Follow us",
    href: "https://www.instagram.com/afterrmatch/",
    icon: "instagram",
    external: true,
  },
];


const sectionVariants: Variants = {
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
    y: 38,
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

const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: premiumEase,
    },
  },
};

const revealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.97,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: premiumEase,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: premiumEase,
    },
  },
};

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ContactIcon({ icon }: { icon: ContactIcon }) {
  switch (icon) {
    case "address":
      return <MapPin size={19} aria-hidden="true" />;

    case "phone":
      return <Phone size={19} aria-hidden="true" />;

    

    case "email":
      return <Mail size={19} aria-hidden="true" />;

    case "instagram":
      return <InstagramIcon />;

    default:
      return null;
  }
}

export default function VisitAndGetInTouch() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="visit"
      className={`
        ${cormorant.className}
        relative
        w-full
        overflow-hidden
        bg-[#F4F7F8]
        py-20
        text-[#2B4E66]
        sm:py-24
        lg:py-28
      `}
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.4,
            ease: premiumEase,
          }}
          className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#2B4E66]/5 blur-3xl"
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: premiumEase,
          }}
          className="absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-[#2B4E66]/5 blur-3xl"
        />

        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            ease: premiumEase,
          }}
          className="absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#2B4E66]/20 to-transparent"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADING */}

        <motion.div
          variants={sectionVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-8 border-b border-[#2B4E66]/10 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-16"
        >
          <motion.div variants={revealLeft}>
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#2B4E66]/15 bg-white/80 px-4 py-2 shadow-[0_8px_30px_rgba(43,78,102,0.06)] backdrop-blur-xl">
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
                className="h-2 w-2 rounded-full bg-[#2B4E66]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
                Visit & Get in Touch
              </span>
            </div>

            <h2
              style={newYorkFont}
              className="mt-6 max-w-4xl text-[clamp(3rem,6vw,6.4rem)] font-medium leading-[0.92] tracking-[-0.055em]"
            >
              Find your game.

              <span className="block ">Meet your people.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={revealRight}
            className="max-w-xl lg:ml-auto lg:pb-2"
          >
            <p className="text-[17px] font-medium leading-7 text-[#2B4E66]/65 sm:text-lg sm:leading-8 lg:text-xl">
              Visit AfterrMatch near Cherry County Street, Greater Noida, for
premium pickleball courts, coaching sessions, social games,
private events and a complete entertainment experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "Pickleball",
                "PS5 Lounge",
                "Café",
                "Pool Table",
                "Private Events",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 12,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.2 + index * 0.06,
                    ease: premiumEase,
                  }}
                  className="rounded-full bg-[#2B4E66]/[0.07] px-4 py-2 text-sm font-semibold text-[#2B4E66]/60"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT */}

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* CONTACT CARDS AND HOURS */}

          <motion.div
            variants={sectionVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="flex min-w-0 flex-col gap-6"
          >
            <motion.div
              variants={sectionVariants}
              className="grid gap-4 sm:grid-cols-2"
            >
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  variants={cardVariants}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                          scale: 1.01,
                          transition: {
                            duration: 0.3,
                            ease: premiumEase,
                          },
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="group relative flex min-h-[205px] min-w-0 flex-col justify-between overflow-hidden rounded-[28px] border border-[#2B4E66]/10 bg-white p-6 shadow-[0_18px_60px_rgba(43,78,102,0.06)] sm:p-7"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2B4E66]/5 transition-transform duration-500 group-hover:scale-125" />

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
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2B4E66] text-white shadow-[0_10px_24px_rgba(43,78,102,0.22)]"
                    >
                      <ContactIcon icon={item.icon} />
                    </motion.div>

                    <ArrowUpRight
                      size={19}
                      aria-hidden="true"
                      className="shrink-0 text-[#2B4E66]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2B4E66]"
                    />
                  </div>

                  <div className="relative mt-8 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B4E66]/45">
                      {item.label}
                    </p>

                    <p className="mt-3 break-words text-lg font-semibold leading-7 tracking-[-0.02em] text-[#2B4E66] sm:text-xl">
                      {item.value}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-[#2B4E66]/45 transition-colors duration-300 group-hover:text-[#2B4E66]">
                      {item.action}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* OPENING HOURS */}

<motion.div
  variants={revealUp}
  whileHover={
    reduceMotion
      ? undefined
      : {
          y: -5,
          transition: {
            duration: 0.3,
            ease: premiumEase,
          },
        }
  }
  className="relative overflow-hidden rounded-[30px] bg-[#2B4E66] p-6 text-white shadow-[0_24px_70px_rgba(43,78,102,0.2)] sm:p-8"
>
  <motion.div
    aria-hidden="true"
    animate={
      reduceMotion
        ? undefined
        : {
            rotate: 360,
          }
    }
    transition={{
      duration: 28,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10"
  />

  <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/[0.06] blur-3xl" />

  <div className="relative">
    <div className="flex items-center justify-between gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
        <Clock3 size={19} aria-hidden="true" />
      </div>

      <span className="rounded-full bg-emerald-300/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
        Open 24/7
      </span>
    </div>

    <div className="mt-8 grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
          Always available
        </p>

        <h3
          style={newYorkFont}
          className="mt-3 text-4xl font-medium leading-none tracking-[-0.045em] sm:text-5xl"
        >
          Open all day.
          <span className="block text-white/55">Every day.</span>
        </h3>

        <p className="mt-5 max-w-lg text-base font-medium leading-7 text-white/60">
          AfterrMatch is available 24 hours a day, 7 days a week.
          Advance booking is recommended for courts, private events
          and group experiences.
        </p>
      </div>

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.04, 1],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border border-white/15 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-32 sm:w-32"
      >
        <span
          style={newYorkFont}
          className="text-4xl font-medium leading-none sm:text-5xl"
        >
          24
        </span>

        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Hours
        </span>
      </motion.div>
    </div>

    <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [1, 0.35, 1],
                scale: [1, 1.3, 1],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300"
      />

      <p className="text-sm font-semibold text-white/65">
        Available Monday to Sunday, including weekends and public
        holidays.
      </p>
    </div>
  </div>
</motion.div>
          </motion.div>

          {/* MAP */}

          <motion.div
            variants={revealRight}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="relative min-h-[620px] overflow-hidden rounded-[32px] border border-[#2B4E66]/10 bg-white shadow-[0_24px_80px_rgba(43,78,102,0.12)] lg:min-h-full"
          >
            <iframe
  title="AfterrMatch location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9010221258136!2d77.44345437610508!3d28.60274597568103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef4b12ddc04b%3A0xab8dcc06e756d987!2sAfterrmatch!5e0!3m2!1sen!2sin!4v1784893774568!5m2!1sen!2sin"
  loading="lazy"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
  className="absolute inset-0 h-full w-full border-0"
/>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#183247]/95 via-[#183247]/10 to-transparent" />

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 36,
                      scale: 0.96,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.85,
                delay: 0.2,
                ease: premiumEase,
              }}
              className="absolute inset-x-4 bottom-4 rounded-[26px] border border-white/15 bg-[#183247]/85 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-7"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                    <Navigation size={18} aria-hidden="true" />
                  </div>

                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Find AfterrMatch
                  </p>

                  <h3
                    style={newYorkFont}
                    className="mt-2 text-2xl font-medium tracking-[-0.035em] sm:text-3xl"
                  >
                    Your next game starts here.
                  </h3>

                 <p className="mt-3 max-w-lg text-base font-medium leading-6 text-white/60">
  Plot No. 15, Noida–Greater Noida Link Road, Near Cherry County
  Street, Industrial Area GNIDA, Iteda, Greater Noida, Ithaira,
  Uttar Pradesh 201009
</p>
                </div>

                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.60274597568103,77.44345437610508"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.02,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="pointer-events-auto inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-[#2B4E66]"
                >
                  Get Directions
                  <ArrowUpRight size={17} aria-hidden="true" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}