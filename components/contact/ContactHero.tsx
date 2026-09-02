"use client";

import Link from "next/link";
import {
  FormEvent,
  useState,
  type ChangeEvent,
} from "react";
import { Cormorant_Garamond } from "next/font/google";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  LoaderCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
  UserRound,
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

const quickContacts = [
  {
    label: "Contact",
    value: "+91 9311821282",
    href: "tel:+919311821282",
    icon: Phone,
    external: false,
  },
 
  {
    label: "Email",
    value: "afterrmatch.pr@gmail.com",
    href: "mailto:afterrmatch.pr@gmail.com",
    icon: Mail,
    external: false,
  },
];

const gameCategories = [
  "Pickleball",
  "PS5 Lounge",
  "Pool Table",
  "Cafeteria",
  "Lounge Deck for Private Events & Celebrations",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const revealUpVariants: Variants = {
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

const revealLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -42,
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

const revealRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 54,
    scale: 0.96,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: premiumEase,
    },
  },
};

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: premiumEase,
    },
  },
};

type FormData = {
  name: string;
  contactNumber: string;
  gameCategory: string;
};

const initialFormData: FormData = {
  name: "",
  contactNumber: "",
  gameCategory: "",
};

export default function ContactHero() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [formMessage, setFormMessage] = useState("");

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (formStatus !== "idle") {
      setFormStatus("idle");
      setFormMessage("");
    }
  };

  const handleSubmit = async (
  event: FormEvent<HTMLFormElement>,
) => {
  event.preventDefault();

  const customerName = formData.name.trim();
  const customerPhone =
    formData.contactNumber.trim();
  const selectedCategory =
    formData.gameCategory.trim();

  const cleanPhoneNumber =
    customerPhone.replace(/\D/g, "");

  if (customerName.length < 2) {
    setFormStatus("error");
    setFormMessage("Please enter your full name.");
    return;
  }

  if (
    cleanPhoneNumber.length < 10 ||
    cleanPhoneNumber.length > 13
  ) {
    setFormStatus("error");
    setFormMessage(
      "Please enter a valid contact number.",
    );
    return;
  }

  if (!selectedCategory) {
    setFormStatus("error");
    setFormMessage(
      "Please select a game category.",
    );
    return;
  }

  try {
    setFormStatus("submitting");
    setFormMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: customerName,
        contactNumber: customerPhone,
        gameCategory: selectedCategory,
      }),
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      throw new Error(
        result.message ||
          "Unable to submit your enquiry.",
      );
    }

    setFormStatus("success");
    setFormMessage(
      result.message ||
        "Thank you. Your enquiry has been submitted successfully.",
    );

    setFormData(initialFormData);
  } catch (error) {
    console.error(
      "Contact form submission error:",
      error,
    );

    setFormStatus("error");
    setFormMessage(
      error instanceof Error
        ? error.message
        : "Unable to submit your enquiry. Please try again.",
    );
  }
};
  return (
    <section
      className={`
        ${cormorant.className}
        relative
        block
        w-full
        max-w-full
        overflow-hidden
        bg-white
        text-[#2B4E66]
      `}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.7,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: premiumEase,
          }}
          className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[#2B4E66]/5 blur-3xl sm:h-[560px] sm:w-[560px]"
        />

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.7,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.15,
            ease: premiumEase,
          }}
          className="absolute -left-36 bottom-0 h-[360px] w-[360px] rounded-full bg-[#2B4E66]/5 blur-3xl"
        />

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  scaleX: 0,
                }
          }
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1.2,
            ease: premiumEase,
          }}
          className="absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#2B4E66]/20 to-transparent"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36 xl:px-16">
        <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 xl:gap-16">
          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial={
              reduceMotion ? false : "hidden"
            }
            animate="visible"
            className="flex min-w-0 flex-col justify-center py-2 lg:py-8"
          >
            <motion.div
              variants={revealLeftVariants}
              className="inline-flex w-fit items-center gap-3 rounded-full border border-[#2B4E66]/15 bg-white px-4 py-2 shadow-[0_8px_30px_rgba(43,78,102,0.06)]"
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.35, 1],
                        opacity: [1, 0.55, 1],
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
                Greater Noida West
              </span>
            </motion.div>

            <motion.h1
              variants={revealUpVariants}
              style={newYorkFont}
              className="mt-7 max-w-full text-[clamp(3.4rem,7.4vw,7.3rem)] font-medium leading-[0.88] tracking-[-0.055em]"
            >
              Contact

              <span className="block break-words">
                AfterrMatch
              </span>
            </motion.h1>

            <motion.p
              variants={revealUpVariants}
              className="mt-7 max-w-2xl text-[17px] font-medium leading-7 text-[#2B4E66]/65 sm:text-lg sm:leading-8 lg:text-xl"
            >
              Reach our team for pickleball court
              bookings, memberships, PS5 lounge, pool
              table, café visits, coaching sessions and
              private events.
            </motion.p>

            <motion.div
              variants={revealUpVariants}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
            >
              <motion.div
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
                        scale: 0.97,
                      }
                }
              >
                <Link
                  href="/book"
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#2B4E66] px-8 text-base font-semibold text-white shadow-[0_16px_36px_rgba(43,78,102,0.2)] sm:w-auto"
                >
                  Book a Court
                </Link>
              </motion.div>

              <motion.a
                href="https://wa.me/9217057386"
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
                        scale: 0.97,
                      }
                }
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full border border-[#2B4E66]/20 bg-white px-8 text-base font-semibold text-[#2B4E66] transition-colors duration-300 hover:border-[#2B4E66]/35 sm:w-auto"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {[
  "Pickleball",
  "PS5 Lounge",
  "Pool Table",
  "Cafeteria",
  "Private Events",
].map((item) => (
                <motion.span
                  key={item}
                  variants={cardVariants}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                          backgroundColor:
                            "rgba(43,78,102,0.1)",
                        }
                  }
                  className="rounded-full bg-[#2B4E66]/5 px-4 py-2 text-sm font-semibold text-[#2B4E66]/60"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM CARD */}

          <motion.div
            variants={revealRightVariants}
            initial={
              reduceMotion ? false : "hidden"
            }
            animate="visible"
            className="relative min-w-0 overflow-hidden rounded-[34px] bg-[#2B4E66] p-6 text-white shadow-[0_30px_80px_rgba(43,78,102,0.24)] sm:p-8 lg:p-10"
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
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
            />

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -right-2 top-10 h-40 w-40 rounded-full border border-white/[0.08]"
            />

            <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl" />

            <motion.div
              variants={containerVariants}
              initial={
                reduceMotion ? false : "hidden"
              }
              animate="visible"
              className="relative z-10"
            >
              <motion.p
                variants={revealUpVariants}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50 sm:text-xs"
              >
                Book your experience
              </motion.p>

              <motion.h2
                variants={revealUpVariants}
                style={newYorkFont}
                className="mt-4 max-w-xl text-[clamp(2.4rem,4.5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.045em]"
              >
                What would you like to play?
              </motion.h2>

              <motion.p
                variants={revealUpVariants}
                className="mt-5 max-w-xl text-base font-medium leading-7 text-white/65 sm:text-lg"
              >
                Share your details and select a category.
                Our team will contact you with availability
                and booking information.
              </motion.p>

              <motion.form
                variants={containerVariants}
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <motion.div
                  variants={revealUpVariants}
                >
                  <label
                    htmlFor="name"
                    className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.17em] text-white/100"
                  >
                    Full name
                  </label>

                  <div className="group relative">
                    <UserRound
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-white"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      disabled={
                        formStatus === "submitting"
                      }
                      className="min-h-[58px] w-full rounded-[18px] border border-white/10 bg-white/[0.08] py-3 pl-12 pr-4 text-base font-medium text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-white/35 focus:bg-white/[0.12] focus:ring-4 focus:ring-white/[0.05] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={revealUpVariants}
                >
                  <label
                    htmlFor="contactNumber"
                    className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.17em] text-white/100"
                  >
                    Contact number
                  </label>

                  <div className="group relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-white"
                    />

                    <input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      inputMode="tel"
                      value={
                        formData.contactNumber
                      }
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      disabled={
                        formStatus === "submitting"
                      }
                      className="min-h-[58px] w-full rounded-[18px] border border-white/10 bg-white/[0.08] py-3 pl-12 pr-4 text-base font-medium text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-white/35 focus:bg-white/[0.12] focus:ring-4 focus:ring-white/[0.05] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={revealUpVariants}
                >
                  <label
                    htmlFor="gameCategory"
                    className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.17em] text-white/100"
                  >
                    Game category
                  </label>

                  <div className="relative">
                    <select
                      id="gameCategory"
                      name="gameCategory"
                      value={
                        formData.gameCategory
                      }
                      onChange={handleInputChange}
                      disabled={
                        formStatus === "submitting"
                      }
                      className="min-h-[58px] w-full cursor-pointer appearance-none rounded-[18px] border border-white/10 bg-white/[0.08] px-4 pr-12 text-base font-medium text-white outline-none transition-all duration-300 focus:border-white/35 focus:bg-white/[0.12] focus:ring-4 focus:ring-white/[0.05] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#2B4E66] text-white"
                      >
                        Select a category
                      </option>

                      {gameCategories.map(
                        (category) => (
                          <option
                            key={category}
                            value={category}
                            className="bg-[#2B4E66] text-white"
                          >
                            {category}
                          </option>
                        ),
                      )}
                    </select>

                    <ChevronDown
                      size={19}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/45"
                    />
                  </div>
                </motion.div>

                <motion.button
                  variants={revealUpVariants}
                  type="submit"
                  disabled={
                    formStatus === "submitting"
                  }
                  whileHover={
                    reduceMotion ||
                    formStatus === "submitting"
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.01,
                        }
                  }
                  whileTap={
                    reduceMotion ||
                    formStatus === "submitting"
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="group inline-flex min-h-[58px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 text-base font-semibold text-[#2B4E66] shadow-[0_18px_40px_rgba(0,0,0,0.14)] disabled:cursor-not-allowed disabled:opacity-65"
                >
                  {formStatus ===
                  "submitting" ? (
                    <>
                      <LoaderCircle
                        size={18}
                        className="animate-spin"
                      />
                      Opening email
                    </>
                  ) : (
                    <>
                      Submit enquiry

                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>

                {formMessage && (
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 10,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-2 rounded-[18px] border px-4 py-3.5 text-sm font-medium leading-5 ${
                      formStatus === "success"
                        ? "border-emerald-200/20 bg-emerald-300/10 text-emerald-50"
                        : "border-red-200/20 bg-red-300/10 text-red-50"
                    }`}
                  >
                    {formStatus ===
                      "success" && (
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                    )}

                    <span>{formMessage}</span>
                  </motion.div>
                )}
              </motion.form>

              <motion.p
                variants={revealUpVariants}
                className="mt-5 text-center text-xs font-medium leading-5 text-white/100"
              >
                By submitting, you agree to be
                contacted by the AfterrMatch team
                regarding your enquiry.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* QUICK CONTACTS */}

        <motion.div
          variants={containerVariants}
          initial={
            reduceMotion ? false : "hidden"
          }
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-14 border-t border-[#2B4E66]/10 pt-8 sm:mt-16 lg:mt-20"
        >
          <motion.div
            variants={revealUpVariants}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B4E66]/45 sm:text-xs">
                Get in touch
              </p>

              <h2
                style={newYorkFont}
                className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl"
              >
                Contact information
              </h2>
            </div>

            <p className="max-w-md text-base font-medium leading-6 text-[#2B4E66]/55 md:text-right">
              Choose the easiest way to connect with
              the AfterrMatch team.
            </p>
          </motion.div>

          <motion.div
            variants={cardContainerVariants}
            className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {quickContacts.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  variants={cardVariants}
                  href={item.href}
                  target={
                    item.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
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
                  className="group flex min-w-0 items-center justify-between rounded-[24px] border border-[#2B4E66]/10 bg-[#F6F8F9] p-5 transition-colors duration-300 hover:border-[#2B4E66]/20 hover:bg-white hover:shadow-[0_18px_50px_rgba(43,78,102,0.08)] sm:p-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2B4E66] text-white">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2B4E66]/45">
                        {item.label}
                      </p>

                      <p
  className={`mt-1 truncate text-base font-semibold text-[#2B4E66] sm:text-lg ${
    item.label === "Email"
      ? "underline-offset-4 group-hover:underline"
      : ""
  }`}
>
  {item.value}
</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="ml-3 shrink-0 text-[#2B4E66]/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}