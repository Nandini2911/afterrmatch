"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  CalendarClock,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CloudRain,
  CreditCard,
  FileText,
  Globe2,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  ShieldCheck,
  TicketCheck,
  UserRoundCheck,
  Users,
  WalletCards,
  XCircle,
} from "lucide-react";

const premiumEase = [0.22, 1, 0.36, 1] as const;

const headingFont = {
  fontFamily:
    '"New York", "Cormorant Garamond", ui-serif, Georgia, serif',
};

const tableOfContents = [
  { label: "Introduction", href: "#introduction" },
  {
    label: "Court Booking Cancellation",
    href: "#court-booking-cancellation",
  },
  {
    label: "Membership Refunds",
    href: "#membership-refunds",
  },
  {
    label: "Event Registration",
    href: "#event-registration",
  },
  {
    label: "Corporate & Private Events",
    href: "#private-events",
  },
  {
    label: "Payment Failures",
    href: "#payment-failures",
  },
  {
    label: "Refund Processing",
    href: "#refund-processing",
  },
  {
    label: "Non-Refundable Situations",
    href: "#non-refundable",
  },
  { label: "Force Majeure", href: "#force-majeure" },
  {
    label: "Request a Refund",
    href: "#request-refund",
  },
  {
    label: "Policy Changes",
    href: "#policy-changes",
  },
  { label: "Contact Us", href: "#contact" },
];

const courtCancellationRules = [
  "All court bookings are subject to the cancellation terms displayed at the time of booking.",
  "Where no separate booking terms are displayed, cancellation requests should be made at least 24 hours before the scheduled booking.",
  "Cancellation requests must be submitted through the available booking platform or by contacting the AfterrMatch support team.",
  "Eligible cancellations may receive a refund, booking credit, or rescheduling option.",
  "Late cancellation requests may not qualify for a refund or credit.",
  "Failure to arrive for a confirmed booking may be treated as a no-show.",
  "No-shows are generally not eligible for refunds or booking credits.",
];

const membershipRules = [
  "Membership fees are generally non-refundable once the membership has been activated.",
  "Membership benefits begin from the activation or commencement date communicated to the member.",
  "Exceptional refund requests may be reviewed individually.",
  "Approval may depend on whether membership benefits have already been used.",
  "Membership upgrades are subject to availability and the applicable price difference.",
  "Membership transfers are not permitted unless expressly approved by AfterrMatch.",
  "Approved membership changes may be subject to administrative conditions.",
];

const eventRules = [
  "Tournament and workshop registrations are subject to event-specific cancellation deadlines.",
  "Community game registrations may be transferred, credited, or rescheduled where expressly permitted.",
  "Private event cancellations are governed by the confirmation document or booking communication.",
  "AfterrMatch may change an event schedule, format, venue, or timing when reasonably necessary.",
  "When AfterrMatch cancels an event, eligible participants may receive a refund, credit, or alternative date.",
  "Weather-related postponements may be moved to another suitable date.",
  "Failure to attend an event without prior cancellation may be treated as a no-show.",
];

const privateEventRules = [
  "A corporate or private event is confirmed only after written confirmation from AfterrMatch.",
  "A deposit or advance payment may be required to reserve the date and facilities.",
  "Cancellation timelines may vary according to the scale and requirements of the event.",
  "Refund eligibility may reduce as the event date approaches.",
  "Costs already incurred for vendors, customization, food, staffing, or production may be deducted.",
  "Rescheduling requests are subject to venue and service availability.",
  "The revised date may be subject to current pricing and additional costs.",
];

const nonRefundableSituations = [
  "No-shows or missed court sessions",
  "Late arrival resulting in reduced playing time",
  "Services or sessions that have already been used",
  "Memberships after activation, except where approved",
  "Event registrations after the applicable cancellation deadline",
  "Cancellations caused by a violation of club rules",
  "Removal from the premises because of unsafe or inappropriate conduct",
  "Convenience fees or payment processing charges where non-refundable",
];

const requestSteps = [
  {
    number: "01",
    title: "Contact Support",
    description:
      "Email the AfterrMatch support team or use the contact page to submit your request.",
  },
  {
    number: "02",
    title: "Share Booking Details",
    description:
      "Provide your name, booking reference, event name, payment date, and transaction details.",
  },
  {
    number: "03",
    title: "Policy Review",
    description:
      "The team will review the request against the applicable booking or service conditions.",
  },
  {
    number: "04",
    title: "Receive Confirmation",
    description:
      "You will be informed whether the request is approved, declined, credited, or eligible for rescheduling.",
  },
  {
    number: "05",
    title: "Refund Processing",
    description:
      "Approved refunds will be initiated to the original payment method.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
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

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.06,
      }}
      className="scroll-mt-28 border-b border-[#2B4E66]/10 py-12 first:pt-0 last:border-b-0 last:pb-0 sm:py-14"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
        <span
          style={headingFont}
          className="shrink-0 text-3xl font-medium tracking-[-0.04em] text-[#2B4E66]/20"
        >
          {number}
        </span>

        <div className="min-w-0 flex-1">
          <h2
            style={headingFont}
            className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-tight tracking-[-0.045em] text-[#203f55]"
          >
            {title}
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#5f7584] sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-2xl border border-[#2B4E66]/10 bg-[#F7FAFB] px-4 py-4"
        >
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2B4E66] text-white">
            <Check size={12} aria-hidden="true" />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RefundPolicyClient({
  lastUpdated,
}: {
  lastUpdated: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#F5F8F9] text-[#2B4E66]">
      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#2B4E66]/10 bg-[#EDF3F5]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(43,78,102,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(43,78,102,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 34, 0],
                    y: [0, -24, 0],
                  }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#2B4E66]/10 blur-[120px]"
          />

          <div className="absolute -bottom-52 -left-40 h-[520px] w-[520px] rounded-full bg-white blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 xl:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-[#2B4E66]/45"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#2B4E66]"
            >
              Home
            </Link>

            <ChevronRight size={14} aria-hidden="true" />

            <span className="text-[#2B4E66]">
              Refund & Cancellation Policy
            </span>
          </nav>

          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end"
          >
            <motion.div variants={revealUp}>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#2B4E66]/15 bg-white/70 px-4 py-2 backdrop-blur-xl">
                <RefreshCcw size={15} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2B4E66]">
                  Bookings, Refunds & Credits
                </span>
              </div>

              <h1
                style={headingFont}
                className="mt-8 max-w-5xl text-[clamp(3.6rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.075em] text-[#203f55]"
              >
                Refund &
                <span className="block italic text-[#638093]">
                  Cancellation Policy
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={revealUp}
              className="max-w-xl lg:ml-auto"
            >
              <p className="text-lg leading-8 text-[#5d7484] sm:text-xl sm:leading-9">
                This policy explains how cancellations, refunds, booking
                credits, payment failures, and rescheduling requests are
                handled by AfterrMatch.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#2B4E66]/10 bg-white px-5 py-3 text-sm text-[#2B4E66] shadow-[0_15px_45px_rgba(43,78,102,0.08)]">
                <FileText size={16} />

                <span>
                  Last updated:{" "}
                  <strong className="font-semibold">
                    {lastUpdated}
                  </strong>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-12 xl:px-16">
          {/* STICKY SIDEBAR */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] border border-[#2B4E66]/10 bg-white p-6 shadow-[0_20px_70px_rgba(43,78,102,0.06)]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2B4E66]/40">
                On This Page
              </span>

              <nav
                aria-label="Refund policy sections"
                className="mt-6"
              >
                <ul className="space-y-1">
                  {tableOfContents.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-[#607786] no-underline transition-all duration-300 hover:bg-[#EDF3F5] hover:text-[#203f55]"
                      >
                        {item.label}

                        <ChevronRight
                          size={14}
                          className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 rounded-2xl bg-[#203f55] p-5 text-white">
                <WalletCards size={20} />

                <p
                  style={headingFont}
                  className="mt-4 text-xl font-medium tracking-[-0.03em]"
                >
                  Need help with a payment?
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Share your booking and transaction details with the
                  AfterrMatch support team.
                </p>

                <a
                  href="mailto:afterrmatch.pr@gmail.com"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white no-underline"
                >
                  Contact Support

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </aside>

          {/* POLICY DOCUMENT */}

          <article className="rounded-[32px] border border-[#2B4E66]/10 bg-white p-6 shadow-[0_24px_90px_rgba(43,78,102,0.06)] sm:p-10 lg:p-12 xl:p-16">
            <PolicySection
              id="introduction"
              number="01"
              title="Introduction"
            >
              <p>
                This Refund & Cancellation Policy explains how AfterrMatch
                handles cancellations, refunds, booking credits, payment
                issues, and rescheduling requests.
              </p>

              <p>
                Unless separate terms are provided for a specific service,
                this policy applies to court bookings, memberships, event
                registrations, corporate bookings, private events, and other
                paid AfterrMatch services.
              </p>

              <p>
                Certain bookings or events may have additional conditions.
                Where separate conditions are clearly communicated before
                payment, those service-specific conditions will also apply.
              </p>
            </PolicySection>

            <PolicySection
              id="court-booking-cancellation"
              number="02"
              title="Court Booking Cancellation"
            >
              <p>
                Court booking cancellation eligibility depends on how early
                the request is made and whether the booked time has already
                been reserved exclusively for the customer.
              </p>

              <BulletList items={courtCancellationRules} />

              <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <CalendarClock
                    size={21}
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <h3
                      style={headingFont}
                      className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                    >
                      Rescheduling
                    </h3>

                    <p className="mt-3">
                      Rescheduling requests are subject to court availability.
                      Any approved credit or rescheduled booking may need to be
                      used within the validity period communicated by
                      AfterrMatch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2B4E66] px-5 py-3 text-sm font-semibold text-white no-underline"
                >
                  Book a Court
                  <ArrowUpRight size={15} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Request Assistance
                </Link>
              </div>
            </PolicySection>

            <PolicySection
              id="membership-refunds"
              number="03"
              title="Membership Refunds"
            >
              <p>
                Membership plans provide access to selected benefits,
                privileges, rates, events, or community opportunities. The
                applicable inclusions are communicated at the time of
                membership.
              </p>

              <BulletList items={membershipRules} />

              <p>
                Exceptional circumstances may include a duplicate payment, an
                administrative error, or a situation in which AfterrMatch is
                unable to provide the purchased membership.
              </p>

              <Link
                href="/membership"
                className="group inline-flex items-center gap-2 font-semibold text-[#203f55] no-underline"
              >
                View Membership

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </PolicySection>

            <PolicySection
              id="event-registration"
              number="04"
              title="Event Registration Cancellation"
            >
              <p>
                This section applies to tournaments, workshops, community
                games, coaching sessions, social activities, and other
                ticketed or registered events.
              </p>

              <BulletList items={eventRules} />

              <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <TicketCheck
                    size={21}
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <h3
                      style={headingFont}
                      className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                    >
                      Event-specific conditions
                    </h3>

                    <p className="mt-3">
                      Some tournaments or limited-capacity events may have
                      stricter cancellation rules because planning, staffing,
                      prizes, vendors, or player formats are confirmed in
                      advance.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/events"
                className="group inline-flex items-center gap-2 font-semibold text-[#203f55] no-underline"
              >
                Explore Events

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </PolicySection>

            <PolicySection
              id="private-events"
              number="05"
              title="Corporate & Private Event Bookings"
            >
              <p>
                Corporate events, private celebrations, group sessions, and
                customized experiences may involve advance planning and
                reserved resources.
              </p>

              <BulletList items={privateEventRules} />

              <div className="rounded-[26px] bg-[#203f55] p-6 text-white sm:p-8">
                <Users size={21} />

                <h3
                  style={headingFont}
                  className="mt-5 text-2xl font-medium tracking-[-0.03em]"
                >
                  Customized bookings
                </h3>

                <p className="mt-4 leading-8 text-white/65">
                  The confirmation email, proposal, invoice, or agreement
                  issued for a customized event may contain specific
                  cancellation and refund conditions. Those conditions will
                  apply to that booking.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="payment-failures"
              number="06"
              title="Payment Failures"
            >
              <p>
                A failed, interrupted, pending, or incomplete transaction is
                not considered a confirmed booking unless a valid confirmation
                is issued.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5">
                  <XCircle size={20} />

                  <h3
                    style={headingFont}
                    className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                  >
                    Payment failed
                  </h3>

                  <p className="mt-3">
                    Retry the transaction only after checking whether the
                    original amount has been deducted.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5">
                  <AlertCircle size={20} />

                  <h3
                    style={headingFont}
                    className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                  >
                    Amount deducted
                  </h3>

                  <p className="mt-3">
                    Contact AfterrMatch with the payment reference,
                    transaction ID, date, amount, and registered contact
                    details.
                  </p>
                </div>
              </div>

              <p>
                In some cases, failed transaction amounts may be reversed
                automatically by the bank or payment gateway without action
                from AfterrMatch.
              </p>
            </PolicySection>

            <PolicySection
              id="refund-processing"
              number="07"
              title="Refund Processing"
            >
              <p>
                Once a refund is approved, AfterrMatch will initiate the
                amount to the original payment method wherever technically
                possible.
              </p>

              <div className="rounded-[26px] bg-[#203f55] p-6 text-white sm:p-8">
                <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    <Clock3 size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Typical Processing Time
                    </p>

                    <h3
                      style={headingFont}
                      className="mt-2 text-3xl font-medium tracking-[-0.04em]"
                    >
                      5–10 business days
                    </h3>

                    <p className="mt-3 leading-7 text-white/60">
                      The final credit time may vary according to the bank,
                      card issuer, UPI provider, or payment gateway.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Processing time begins after the refund request has been
                reviewed and formally approved. Weekends, public holidays,
                banking delays, and payment-provider procedures may extend the
                time required.
              </p>
            </PolicySection>

            <PolicySection
              id="non-refundable"
              number="08"
              title="Non-Refundable Situations"
            >
              <p>
                Unless otherwise approved in writing, refunds may not be
                available in the following situations:
              </p>

              <BulletList items={nonRefundableSituations} />

              <p>
                AfterrMatch may review exceptional circumstances individually,
                but submitting a request does not guarantee approval.
              </p>
            </PolicySection>

            <PolicySection
              id="force-majeure"
              number="09"
              title="Force Majeure"
            >
              <div className="rounded-[26px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-6 sm:p-8">
                <CloudRain size={22} />

                <h3
                  style={headingFont}
                  className="mt-5 text-3xl font-medium tracking-[-0.04em] text-[#203f55]"
                >
                  Events outside reasonable control
                </h3>

                <p className="mt-5">
                  AfterrMatch may postpone, modify, relocate, or cancel a
                  booking, activity, or event because of circumstances beyond
                  reasonable control.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Severe weather conditions",
                    "Government restrictions",
                    "Natural disasters",
                    "Safety or security concerns",
                    "Power or utility failures",
                    "Public emergencies",
                    "Court or facility damage",
                    "Other unavoidable operational disruptions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-[#2B4E66]/10 bg-white px-4 py-4"
                    >
                      <ShieldCheck
                        size={16}
                        className="mt-1 shrink-0"
                      />

                      <span className="text-sm leading-6">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Depending on the circumstances, AfterrMatch may offer an
                alternative date, booking credit, partial refund, or full
                refund. The available option will depend on whether the
                service can reasonably be rescheduled and whether costs have
                already been incurred.
              </p>
            </PolicySection>

            <PolicySection
              id="request-refund"
              number="10"
              title="How to Request a Refund"
            >
              <p>
                Follow these steps when requesting a refund, booking credit,
                or rescheduling review:
              </p>

              <div className="space-y-4">
                {requestSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:grid-cols-[56px_1fr] sm:items-start sm:p-6"
                  >
                    <div
                      style={headingFont}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2B4E66] text-lg font-medium text-white"
                    >
                      {step.number}
                    </div>

                    <div>
                      <h3
                        style={headingFont}
                        className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                      >
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#EDF3F5] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <CreditCard
                    size={21}
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <h3
                      style={headingFont}
                      className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                    >
                      Information to include
                    </h3>

                    <p className="mt-3">
                      Include your full name, registered email or phone number,
                      booking date, booking reference, payment amount,
                      transaction ID, and reason for the request.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:afterrmatch.pr@gmail.com?subject=Refund%20Request"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2B4E66] px-6 py-3.5 text-sm font-semibold text-white no-underline transition-transform duration-300 hover:-translate-y-1"
              >
                Submit Refund Request

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </PolicySection>

            <PolicySection
              id="policy-changes"
              number="11"
              title="Changes to This Policy"
            >
              <p>
                AfterrMatch may update this Refund & Cancellation Policy from
                time to time to reflect changes in services, booking systems,
                payment providers, business practices, or legal requirements.
              </p>

              <p>
                The most recent version will be published on this page. The
                date below identifies when the policy was most recently
                updated.
              </p>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#2B4E66]/10 bg-[#EDF3F5] px-5 py-3 text-sm text-[#203f55]">
                <FileText size={16} />
                Last updated: {lastUpdated}
              </div>
            </PolicySection>

            <PolicySection
              id="contact"
              number="12"
              title="Contact Us"
            >
              <p>
                Contact AfterrMatch for questions about cancellations,
                refunds, payments, booking credits, or rescheduling.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5">
                  <Globe2 size={19} />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2B4E66]/40">
                    Business Name
                  </p>

                  <p
                    style={headingFont}
                    className="mt-2 text-xl font-medium text-[#203f55]"
                  >
                    AfterrMatch
                  </p>
                </div>

                <a
                  href="mailto:afterrmatch.pr@gmail.com"
                  className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 text-[#2B4E66] no-underline transition-transform duration-300 hover:-translate-y-1"
                >
                  <Mail size={19} />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2B4E66]/40">
                    Email Address
                  </p>

                  <p
                    style={headingFont}
                    className="mt-2 break-all text-xl font-medium text-[#203f55]"
                  >
                    afterrmatch.pr@gmail.com
                  </p>
                </a>

                <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5">
                  <Phone size={19} />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2B4E66]/40">
                    Phone Number
                  </p>

                  <p
                    style={headingFont}
                    className="mt-2 text-xl font-medium text-[#203f55]"
                  >
                    Add your official phone number
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5">
                  <MapPin size={19} />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2B4E66]/40">
                    Business Address
                  </p>

                  <p
                    style={headingFont}
                    className="mt-2 text-xl font-medium leading-7 text-[#203f55]"
                  >
                    Greater Noida West, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/terms-and-conditions"
                  className="rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/privacy-policy"
                  className="rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/membership"
                  className="rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Membership
                </Link>

                <Link
                  href="/events"
                  className="rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Events
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full bg-[#2B4E66] px-5 py-3 text-sm font-semibold text-white no-underline"
                >
                  Contact Us
                </Link>
              </div>
            </PolicySection>
          </article>
        </div>
      </section>
    </main>
  );
}