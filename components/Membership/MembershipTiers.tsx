"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Casual",
    subtitle: "Flexible pay-per-use access",
    access: "Casual Membership",
     whatsapp:
    "https://wa.me/919311821282?text=Hi%20Afterrmatch,%20I%20am%20interested%20in%20the%20Casual%20Membership.%20Please%20share%20more%20details.",
    features: [
      "Access to court bookings",
      "Access to gaming and social zones",
      "Participation in community events",
      "Pay-per-use model",
    ],
    button: "Join Casual",
    featured: false,
  },
  {
    name: "Regular",
    subtitle: "For active community members",

    access: "Regular Membership",
    whatsapp:
    "https://wa.me/919311821282?text=Hi%20Afterrmatch,%20I%20am%20interested%20in%20the%20Regular%20Membership.%20Please%20share%20more%20details.",
    features: [
      "Priority court bookings",
      "Discounted court rates",
      "Access to member-only events",
      "Special partner offers and benefits",
    ],
    button: "Get Membership",
    featured: true,
  },
  {
    name: "Premium",
    subtitle: "The ultimate After Match experience",

    access: "Premium Membership",
     whatsapp:
    "https://wa.me/919311821282?text=Hi%20Afterrmatch,%20I%20am%20interested%20in%20the%20Premium%20Membership.%20Please%20share%20more%20details.",
    features: [
      "Highest booking priority",
      "Exclusive member events",
      "Premium discounts across facilities",
      "VIP access to tournaments and experiences",
      "Special rewards and partner privileges",
    ],
    button: "Go Premium",
    featured: false,
  },
];

export default function MembershipTiers() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-[#2B4E66]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#2B4E66]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-[#2B4E66]/10 bg-[#2B4E66]/5 px-4 py-1.5 text-xs font-medium tracking-wide text-[#2B4E66]">
            MEMBERSHIP TIERS
          </span>

         <h2
  className="text-3xl font-semibold tracking-tight text-[#2B4E66] md:text-4xl"
  style={{
    fontFamily:
      '"Cormorant Garamond", serif',
  }}
>
  Membership Plans
</h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2B4E66]/70 md:text-base">
            Choose the membership that best fits your lifestyle and enjoy exclusive access, priority bookings, events, and premium community experiences.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[28px] border transition-all duration-500 ${
                plan.featured
                  ? "border-[#2B4E66] bg-[#2B4E66] text-white shadow-xl shadow-[#2B4E66]/15"
                  : "border-[#2B4E66]/10 bg-white hover:border-[#2B4E66]/20 hover:shadow-xl hover:shadow-[#2B4E66]/10"
              }`}
            >
              <div className="relative flex h-full flex-col p-6">
                {/* TAG */}
                {plan.featured && (
                  <div className="mb-5 inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                    Popular
                  </div>
                )}

                {/* TITLE */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-2 text-sm ${
                      plan.featured
                        ? "text-white/70"
                        : "text-[#2B4E66]/65"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

             

                {/* ACCESS */}
                <div
                  className={`mt-6 rounded-2xl border px-4 py-3 ${
                    plan.featured
                      ? "border-white/10 bg-white/5"
                      : "border-[#2B4E66]/10 bg-[#F8FAFC]"
                  }`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-[0.18em] ${
                      plan.featured
                        ? "text-white/55"
                        : "text-[#2B4E66]/50"
                    }`}
                  >
                    Access
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    {plan.access}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="mt-7 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-white/10"
                            : "bg-[#2B4E66]/5"
                        }`}
                      >
                        <Check
                          size={14}
                          className={
                            plan.featured
                              ? "text-white"
                              : "text-[#2B4E66]"
                          }
                        />
                      </div>

                      <span
                        className={`text-sm ${
                          plan.featured
                            ? "text-white/85"
                            : "text-[#2B4E66]/75"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-8">
  <a
    href={plan.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className={`w-full rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
        plan.featured
          ? "bg-white text-[#2B4E66] hover:scale-[1.02]"
          : "bg-[#2B4E66] text-white hover:scale-[1.02] hover:bg-[#1F3F55]"
      }`}
    >
      {plan.button}
    </button>
  </a>
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}