"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  CalendarClock,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CreditCard,
  FileText,
  Gavel,
  Globe2,
  Info,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";

const premiumEase = [0.22, 1, 0.36, 1] as const;

const headingFont = {
  fontFamily:
    '"New York", "Cormorant Garamond", ui-serif, Georgia, serif',
};

const tableOfContents = [
  { label: "Introduction", href: "#introduction" },
  { label: "About AfterrMatch", href: "#about-afterrmatch" },
  { label: "Acceptance of Terms", href: "#acceptance" },
  { label: "Website Usage", href: "#website-usage" },
  { label: "Court Bookings", href: "#court-bookings" },
  { label: "Membership", href: "#membership" },
  {
    label: "Events & Tournaments",
    href: "#events-and-tournaments",
  },
  { label: "Payments", href: "#payments" },
  {
    label: "User Responsibilities",
    href: "#user-responsibilities",
  },
  {
    label: "Intellectual Property",
    href: "#intellectual-property",
  },
  {
    label: "Third-Party Services",
    href: "#third-party-services",
  },
  {
    label: "Limitation of Liability",
    href: "#limitation-of-liability",
  },
  { label: "Privacy", href: "#privacy" },
  { label: "Changes to Terms", href: "#changes-to-terms" },
  { label: "Governing Law", href: "#governing-law" },
  { label: "Contact", href: "#contact" },
];

const acceptanceMethods = [
  "Visiting or browsing the AfterrMatch website",
  "Submitting a court booking request",
  "Registering for an event or tournament",
  "Applying for or purchasing a membership",
  "Submitting a contact, newsletter, or enquiry form",
  "Using any AfterrMatch facility or service",
];

const prohibitedWebsiteUse = [
  "Misuse the website or its services",
  "Attempt to gain unauthorized access to systems or accounts",
  "Upload malware, harmful files, or malicious code",
  "Use the website in violation of applicable laws",
  "Interfere with website security or operations",
  "Use automated systems to disrupt or overload the website",
  "Impersonate another person or provide misleading information",
];

const bookingRules = [
  "All bookings are subject to court availability",
  "A booking is confirmed only after successful confirmation",
  "Players should arrive before their scheduled start time",
  "Late arrival may reduce the available playing time",
  "Booking changes are subject to availability",
  "Cancellations are governed by the Refund & Cancellation Policy",
  "Repeated no-shows may affect future booking access",
];

const membershipRules = [
  "Membership benefits and inclusions may vary by plan",
  "Membership does not guarantee court availability",
  "Booking rules apply to both members and non-members",
  "Memberships are personal and may not be transferred unless stated otherwise",
  "Members must follow club policies and staff instructions",
  "AfterrMatch may modify, replace, or discontinue membership plans",
  "Plan changes will apply according to the terms communicated at that time",
];

const eventRules = [
  "Participants may be required to register before an event deadline",
  "Schedules, formats, venues, and timings may change",
  "Events may be postponed or cancelled due to operational or safety reasons",
  "Participants must follow event rules and staff instructions",
  "Players are responsible for declaring relevant health concerns",
  "Appropriate clothing, footwear, and sportsmanship are expected",
  "Photos and videos may be captured during public events",
];

const paymentRules = [
  "Prices may change without prior notice",
  "Payment may be required before a booking is confirmed",
  "Taxes and statutory charges may apply where applicable",
  "Refunds are governed by the Refund & Cancellation Policy",
  "Failed or incomplete payments do not create a confirmed booking",
  "Users are responsible for providing accurate payment information",
];

const userResponsibilities = [
  "Treat staff, members, guests, and other players respectfully",
  "Follow all club, court, safety, and event rules",
  "Use equipment and facilities responsibly",
  "Maintain appropriate sportsmanship",
  "Avoid behaviour that may disturb or endanger others",
  "Do not intentionally damage club property",
  "Report hazards, damage, or unsafe behaviour to staff",
  "Take reasonable care of personal belongings",
];

const intellectualProperty = [
  "AfterrMatch name and logo",
  "Website design and layout",
  "Written text and articles",
  "Images and photography",
  "Videos and motion content",
  "Graphics, icons, and illustrations",
  "Brand identity and promotional material",
  "Original downloadable or educational resources",
];

const thirdPartyServices = [
  "Payment gateways",
  "Court booking and reservation providers",
  "Google Maps",
  "Analytics and performance platforms",
  "Social media integrations",
  "Embedded video providers",
  "Email and communication platforms",
  "Hosting and technical service providers",
];

const liabilityItems = [
  "Loss, theft, or damage to personal belongings",
  "Injuries caused by misuse of equipment or facilities",
  "Injuries caused by failure to follow safety instructions",
  "Website downtime, interruptions, or technical errors",
  "Failures or interruptions involving third-party services",
  "Loss arising from inaccurate information provided by users",
  "Events outside reasonable control, including weather and power outages",
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
      viewport={{ once: true, amount: 0.06 }}
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

export default function TermsConditionsClient({
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
              Terms & Conditions
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
                <Scale size={15} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2B4E66]">
                  Club & Website Terms
                </span>
              </div>

              <h1
                style={headingFont}
                className="mt-8 text-[clamp(3.8rem,8.5vw,8.3rem)] font-medium leading-[0.86] tracking-[-0.075em] text-[#203f55]"
              >
                Terms &
                <span className="block italic text-[#638093]">
                  Conditions
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={revealUp}
              className="max-w-xl lg:ml-auto"
            >
              <p className="text-lg leading-8 text-[#5d7484] sm:text-xl sm:leading-9">
                These terms explain the rules that apply when using the
                AfterrMatch website, booking courts, becoming a member,
                attending events, or accessing our services.
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

      {/* CONTENT */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-12 xl:px-16">
          {/* SIDEBAR */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] border border-[#2B4E66]/10 bg-white p-6 shadow-[0_20px_70px_rgba(43,78,102,0.06)]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2B4E66]/40">
                On This Page
              </span>

              <nav
                aria-label="Terms and conditions sections"
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
                <Gavel size={20} />

                <p
                  style={headingFont}
                  className="mt-4 text-xl font-medium tracking-[-0.03em]"
                >
                  Need clarification?
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Contact the AfterrMatch team before booking or using a
                  service when you need help understanding these terms.
                </p>

                <Link
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white no-underline"
                >
                  Contact Us

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </aside>

          {/* TERMS DOCUMENT */}

          <article className="rounded-[32px] border border-[#2B4E66]/10 bg-white p-6 shadow-[0_24px_90px_rgba(43,78,102,0.06)] sm:p-10 lg:p-12 xl:p-16">
            <PolicySection
              id="introduction"
              number="01"
              title="Introduction"
            >
              <p>
                Welcome to AfterrMatch. These Terms & Conditions govern
                your access to and use of the AfterrMatch website,
                pickleball courts, memberships, events, community
                experiences, and related services.
              </p>

              <p>
                Please read these terms carefully before using the website
                or making a booking. By accessing the website or using any
                AfterrMatch service, you agree to comply with these Terms &
                Conditions.
              </p>

              <p>
                When you do not agree with these terms, you should not use
                the website, make a booking, register for an event, or
                access the relevant service.
              </p>
            </PolicySection>

            <PolicySection
              id="about-afterrmatch"
              number="02"
              title="About AfterrMatch"
            >
              <div className="rounded-[26px] bg-[#203f55] p-6 text-white sm:p-8">
                <Sparkles size={21} />

                <h3
                  style={headingFont}
                  className="mt-5 text-3xl font-medium tracking-[-0.04em]"
                >
                  A premium sports and lifestyle destination
                </h3>

                <p className="mt-5 leading-8 text-white/65">
                  AfterrMatch is a premium pickleball club and community
                  destination serving Greater Noida and surrounding areas.
                  It brings together sport, recreation, events, membership,
                  hospitality, and modern lifestyle experiences.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Premium pickleball courts",
                    "Community playing experiences",
                    "Events and tournaments",
                    "Membership opportunities",
                    "Sports and lifestyle programming",
                    "Social and recreational amenities",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0"
                      />

                      <span className="text-sm leading-6 text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="acceptance"
              number="03"
              title="Acceptance of Terms"
            >
              <p>
                You accept and agree to these terms when you interact with
                AfterrMatch in any of the following ways:
              </p>

              <BulletList items={acceptanceMethods} />

              <p>
                You must have the legal capacity to enter into these terms.
                Where a booking or registration is made for a minor, the
                parent, guardian, or responsible adult accepts these terms
                on the minor's behalf.
              </p>
            </PolicySection>

            <PolicySection
              id="website-usage"
              number="04"
              title="Website Usage"
            >
              <p>
                You may use the website only for lawful purposes and in a
                manner that does not damage, disable, interfere with, or
                compromise the website or its users.
              </p>

              <p>You agree not to:</p>

              <BulletList items={prohibitedWebsiteUse} />

              <p>
                AfterrMatch may restrict or suspend access where website
                misuse, security concerns, fraudulent activity, or unlawful
                behaviour is suspected.
              </p>
            </PolicySection>

            <PolicySection
              id="court-bookings"
              number="05"
              title="Court Bookings"
            >
              <p>
                Court availability may vary according to operating hours,
                events, maintenance, weather conditions, private bookings,
                and demand.
              </p>

              <BulletList items={bookingRules} />

              <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <CalendarClock size={19} />

                  <h3
                    style={headingFont}
                    className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                  >
                    Booking confirmation
                  </h3>
                </div>

                <p className="mt-4">
                  A payment attempt, enquiry, message, or form submission
                  does not automatically confirm a booking. A booking is
                  confirmed only when AfterrMatch or its authorized booking
                  system provides a clear confirmation.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2B4E66] px-5 py-3 text-sm font-semibold text-white no-underline"
                  >
                    Book a Court
                    <ArrowUpRight size={15} />
                  </Link>

                  <Link
                    href="/refund-cancellation-policy"
                    className="inline-flex items-center gap-2 rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                  >
                    Cancellation Policy
                  </Link>
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="membership"
              number="06"
              title="Membership"
            >
              <p>
                Membership options may offer benefits such as preferred
                access, community participation, selected privileges,
                special rates, or event opportunities depending on the
                applicable plan.
              </p>

              <BulletList items={membershipRules} />

              <p>
                Membership eligibility, duration, pricing, benefits, usage
                limits, renewal conditions, and exclusions may be stated
                separately at the time of purchase or application.
              </p>

              <Link
                href="/membership"
                className="group inline-flex items-center gap-2 font-semibold text-[#203f55] no-underline"
              >
                Explore Membership
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </PolicySection>

            <PolicySection
              id="events-and-tournaments"
              number="07"
              title="Events & Tournaments"
            >
              <p>
                AfterrMatch may organize tournaments, social games,
                workshops, coaching sessions, community events, private
                experiences, and other activities.
              </p>

              <BulletList items={eventRules} />

              <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <div className="flex gap-4">
                  <Trophy
                    size={20}
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <h3
                      style={headingFont}
                      className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                    >
                      Photography and media
                    </h3>

                    <p className="mt-3">
                      Photography or video recording may take place at public
                      events. Images and footage may be used for event
                      coverage, social media, marketing, archival, or
                      promotional purposes where permitted. Participants
                      should inform the team before the event when they have a
                      specific concern.
                    </p>
                  </div>
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="payments"
              number="08"
              title="Payments"
            >
              <p>
                Certain bookings, memberships, events, or services may
                require full or partial payment before confirmation.
              </p>

              <BulletList items={paymentRules} />

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: CreditCard,
                    title: "Confirmation",
                    text: "Payment and booking confirmation are separate unless expressly stated.",
                  },
                  {
                    icon: CircleDollarSign,
                    title: "Pricing",
                    text: "Current pricing shown at booking or checkout will apply.",
                  },
                  {
                    icon: WalletCards,
                    title: "Refunds",
                    text: "Eligibility depends on the applicable cancellation policy.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5"
                    >
                      <Icon size={19} />

                      <h3
                        style={headingFont}
                        className="mt-4 text-xl font-medium text-[#203f55]"
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </PolicySection>

            <PolicySection
              id="user-responsibilities"
              number="09"
              title="User Responsibilities"
            >
              <p>
                Every visitor, player, participant, member, and guest is
                expected to help maintain a safe, respectful, and welcoming
                environment.
              </p>

              <BulletList items={userResponsibilities} />

              <p>
                Users may be responsible for damage caused intentionally,
                negligently, or through misuse of facilities, equipment, or
                property.
              </p>
            </PolicySection>

            <PolicySection
              id="intellectual-property"
              number="10"
              title="Intellectual Property"
            >
              <p>
                Unless otherwise stated, all website content and brand
                material belongs to AfterrMatch or is used with permission.
                This includes:
              </p>

              <BulletList items={intellectualProperty} />

              <p>
                Content may not be copied, reproduced, modified, republished,
                distributed, sold, or used commercially without prior written
                permission from AfterrMatch or the relevant rights holder.
              </p>
            </PolicySection>

            <PolicySection
              id="third-party-services"
              number="11"
              title="Third-Party Services"
            >
              <p>
                The website and services may rely on independent third-party
                providers for payments, maps, analytics, communications,
                bookings, embedded content, and social integrations.
              </p>

              <BulletList items={thirdPartyServices} />

              <p>
                Third-party platforms are governed by their own terms,
                privacy policies, availability, and technical practices.
                AfterrMatch is not responsible for independent changes,
                interruptions, or failures in those external services.
              </p>
            </PolicySection>

            <PolicySection
              id="limitation-of-liability"
              number="12"
              title="Limitation of Liability"
            >
              <p>
                To the maximum extent permitted by applicable law,
                AfterrMatch will not be liable for indirect, incidental,
                consequential, or unforeseeable losses arising from use of
                the website, facilities, or third-party services.
              </p>

              <BulletList items={liabilityItems} />

              <div className="rounded-[26px] bg-[#203f55] p-6 text-white sm:p-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} />

                  <h3
                    style={headingFont}
                    className="text-2xl font-medium tracking-[-0.03em]"
                  >
                    Safety acknowledgement
                  </h3>
                </div>

                <p className="mt-4 leading-8 text-white/65">
                  Sport and physical activity involve inherent risks.
                  Players and participants are responsible for assessing
                  their fitness, following instructions, using suitable
                  equipment, and stopping activity when they feel unwell or
                  unsafe.
                </p>
              </div>

              <p>
                Nothing in these terms excludes liability that cannot legally
                be excluded under applicable law.
              </p>
            </PolicySection>

            <PolicySection
              id="privacy"
              number="13"
              title="Privacy"
            >
              <div className="flex gap-4 rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <LockKeyhole
                  size={20}
                  className="mt-1 shrink-0"
                />

                <div>
                  <p className="m-0">
                    Personal information submitted through bookings,
                    memberships, registrations, forms, and other
                    interactions is handled in accordance with the
                    AfterrMatch Privacy Policy.
                  </p>

                  <Link
                    href="/privacy-policy"
                    className="group mt-5 inline-flex items-center gap-2 font-semibold text-[#203f55] no-underline"
                  >
                    Read the Privacy Policy

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="changes-to-terms"
              number="14"
              title="Changes to These Terms"
            >
              <p>
                AfterrMatch may update these Terms & Conditions from time to
                time to reflect changes in services, pricing, facilities,
                technology, legal obligations, or business practices.
              </p>

              <p>
                The updated version will be published on this page. The
                revised “Last Updated” date will show when the terms were
                most recently changed.
              </p>

              <p>
                Continued use of the website or services after an update
                means the revised terms will apply from their effective
                date.
              </p>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#2B4E66]/10 bg-[#EDF3F5] px-5 py-3 text-sm text-[#203f55]">
                <Clock3 size={16} />
                Last updated: {lastUpdated}
              </div>
            </PolicySection>

            <PolicySection
              id="governing-law"
              number="15"
              title="Governing Law"
            >
              <div className="rounded-[26px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-6 sm:p-8">
                <Gavel size={21} />

                <p className="mt-5">
                  These Terms & Conditions are governed by and interpreted
                  in accordance with the laws of India.
                </p>

                <p>
                  Subject to applicable law, disputes arising from these
                  terms or AfterrMatch services will be subject to the
                  jurisdiction of the appropriate courts in Uttar Pradesh,
                  India.
                </p>

                <p>
                  Nothing in this section limits any mandatory right or
                  jurisdiction that cannot lawfully be excluded.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="contact"
              number="16"
              title="Contact Information"
            >
              <p>
                Contact AfterrMatch when you have questions about these
                terms, a booking, membership, event, payment, or other
                service.
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
                  href="/privacy-policy"
                  className="rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/refund-cancellation-policy"
                  className="rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Refund Policy
                </Link>

                <Link
                  href="/cookie-policy"
                  className="rounded-full border border-[#2B4E66]/15 px-5 py-3 text-sm font-semibold text-[#203f55] no-underline"
                >
                  Cookie Policy
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