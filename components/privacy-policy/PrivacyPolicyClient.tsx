"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Cookie,
  Database,
  ExternalLink,
  FileText,
  Fingerprint,
  Globe2,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const premiumEase = [0.22, 1, 0.36, 1] as const;

const headingFont = {
  fontFamily:
    '"New York", "Cormorant Garamond", ui-serif, Georgia, serif',
};

const tableOfContents = [
  { label: "Introduction", href: "#introduction" },
  {
    label: "Information We Collect",
    href: "#information-we-collect",
  },
  {
    label: "How We Collect Information",
    href: "#how-we-collect-information",
  },
  {
    label: "How We Use Information",
    href: "#how-we-use-information",
  },
  { label: "Cookies", href: "#cookies" },
  {
    label: "Sharing Information",
    href: "#sharing-information",
  },
  { label: "Data Security", href: "#data-security" },
  { label: "Data Retention", href: "#data-retention" },
  { label: "Your Rights", href: "#your-rights" },
  {
    label: "Third-Party Services",
    href: "#third-party-services",
  },
  { label: "External Links", href: "#external-links" },
  {
    label: "Children's Privacy",
    href: "#childrens-privacy",
  },
  { label: "Policy Updates", href: "#policy-updates" },
  { label: "Contact", href: "#contact" },
];

const personalInformation = [
  "Full name",
  "Email address",
  "Phone number",
  "Date of birth, when required",
  "Membership details",
  "Court booking information",
  "Event registration information",
  "Messages or enquiries submitted to us",
];

const automaticInformation = [
  "IP address",
  "Browser type",
  "Device information",
  "Operating system",
  "Pages visited",
  "Time spent on the website",
  "Referral source",
  "General website interaction data",
];

const collectionMethods = [
  "Contact forms",
  "Court booking forms",
  "Membership forms",
  "Event registration forms",
  "Newsletter subscription forms",
  "Cookies and similar technologies",
  "Analytics and performance tools",
];

const informationUses = [
  "Respond to enquiries and requests",
  "Manage court bookings",
  "Process membership enquiries and applications",
  "Send confirmations and service-related updates",
  "Provide customer support",
  "Improve the website and user experience",
  "Understand website performance and usage",
  "Send marketing communications where consent has been provided",
  "Share relevant event and community updates",
  "Maintain records and meet legal obligations",
];

const cookieTypes = [
  {
    title: "Essential Cookies",
    description:
      "These cookies support core website functions such as navigation, security, form submission, and service availability.",
  },
  {
    title: "Analytics Cookies",
    description:
      "These cookies help us understand how visitors use the website and which pages or features are most useful.",
  },
  {
    title: "Performance Cookies",
    description:
      "These cookies help us monitor website speed, reliability, and technical performance.",
  },
  {
    title: "Marketing Cookies",
    description:
      "These cookies may be used to understand campaign performance and deliver more relevant communications where legally permitted.",
  },
];

const securityMeasures = [
  "Secure hosting and server infrastructure",
  "SSL encryption for information transmitted through the website",
  "Restricted access to personal information",
  "Administrative and technical security controls",
  "Regular website and software security updates",
];

const userRights = [
  "Request access to personal information we hold about you",
  "Ask us to correct inaccurate or incomplete information",
  "Request deletion of personal information where applicable",
  "Withdraw consent for marketing communications",
  "Request a copy of your information",
  "Raise questions about how your information is used",
];

const thirdPartyServices = [
  "Google Analytics",
  "Microsoft Clarity",
  "Meta Platforms and Meta Pixel",
  "Google Maps",
  "YouTube, when videos are embedded",
  "Booking platform providers",
  "Email service providers",
  "Payment gateways, when payment services are introduced or used",
];

const sharingPartners = [
  "Payment service providers, where applicable",
  "Court booking or reservation platform providers",
  "Email and communication service providers",
  "Website hosting and technical service providers",
  "Analytics and performance providers",
  "Professional advisers where necessary",
  "Government bodies or legal authorities when required by law",
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
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
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

export default function PrivacyPolicyClient({
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
                    x: [0, 35, 0],
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
              Privacy Policy
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
                <ShieldCheck size={15} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2B4E66]">
                  Privacy & Data Protection
                </span>
              </div>

              <h1
                style={headingFont}
                className="mt-8 text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.075em] text-[#203f55]"
              >
                Privacy
                <span className="block italic text-[#638093]">
                  Policy
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={revealUp}
              className="max-w-xl lg:ml-auto"
            >
              <p className="text-lg leading-8 text-[#5d7484] sm:text-xl sm:leading-9">
                AfterrMatch is committed to protecting your privacy and
                handling personal information responsibly, transparently,
                and securely.
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
          {/* STICKY SIDEBAR */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] border border-[#2B4E66]/10 bg-white p-6 shadow-[0_20px_70px_rgba(43,78,102,0.06)]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2B4E66]/40">
                On This Page
              </span>

              <nav
                aria-label="Privacy policy sections"
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
                <ShieldCheck size={20} />

                <p
                  style={headingFont}
                  className="mt-4 text-xl font-medium tracking-[-0.03em]"
                >
                  Questions about privacy?
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Contact the AfterrMatch team for assistance with your
                  information or privacy requests.
                </p>

                <a
                  href="mailto:afterrmatch.pr@gmail.com"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white no-underline"
                >
                  Contact Us

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
                AfterrMatch is a pickleball, community, and lifestyle
                destination offering court bookings, memberships, events,
                community experiences, and related services.
              </p>

              <p>
                This Privacy Policy explains how AfterrMatch collects,
                uses, stores, protects, and shares personal information
                when you visit our website, submit an enquiry, book a
                court, register for an event, apply for membership, or
                otherwise interact with our services.
              </p>

              <p>
                By using the AfterrMatch website or submitting information
                through our forms, you acknowledge that you have read and
                understood this Privacy Policy.
              </p>
            </PolicySection>

            <PolicySection
              id="information-we-collect"
              number="02"
              title="Information We Collect"
            >
              <div className="rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <UserRound
                    size={19}
                    className="text-[#2B4E66]"
                  />

                  <h3
                    style={headingFont}
                    className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                  >
                    Personal Information
                  </h3>
                </div>

                <p className="mt-4">
                  We may collect information that identifies or relates
                  to you when you voluntarily provide it to us.
                </p>

                <div className="mt-5">
                  <BulletList items={personalInformation} />
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Fingerprint
                    size={19}
                    className="text-[#2B4E66]"
                  />

                  <h3
                    style={headingFont}
                    className="text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                  >
                    Automatically Collected Information
                  </h3>
                </div>

                <p className="mt-4">
                  Certain technical and usage information may be collected
                  automatically when you access or use the website.
                </p>

                <div className="mt-5">
                  <BulletList items={automaticInformation} />
                </div>
              </div>
            </PolicySection>

            <PolicySection
              id="how-we-collect-information"
              number="03"
              title="How We Collect Information"
            >
              <p>
                We may collect information directly from you, automatically
                through the website, or through service providers that help
                us operate our digital services.
              </p>

              <BulletList items={collectionMethods} />
            </PolicySection>

            <PolicySection
              id="how-we-use-information"
              number="04"
              title="How We Use Your Information"
            >
              <p>
                We use personal information only where there is a legitimate
                business, service, legal, or consent-based reason to do so.
              </p>

              <BulletList items={informationUses} />
            </PolicySection>

            <PolicySection
              id="cookies"
              number="05"
              title="Cookies & Tracking Technologies"
            >
              <p>
                AfterrMatch may use cookies and similar tracking technologies
                to operate the website, understand visitor activity, improve
                performance, and evaluate marketing campaigns.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {cookieTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5"
                  >
                    <Cookie
                      size={18}
                      className="text-[#2B4E66]"
                    />

                    <h3
                      style={headingFont}
                      className="mt-4 text-xl font-medium tracking-[-0.03em] text-[#203f55]"
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Depending on the website configuration, we may use tools such
                as Google Analytics 4, Microsoft Clarity, and Meta Pixel.
                These providers may process information according to their
                own privacy terms.
              </p>

              <p>
                Additional information about cookie usage can be provided on
                a dedicated Cookie Policy page when that page is introduced.
              </p>
            </PolicySection>

            <PolicySection
              id="sharing-information"
              number="06"
              title="Sharing of Information"
            >
              <p>
                We do not sell personal information. We may share information
                only where reasonably necessary to provide services, operate
                the website, protect our rights, or comply with legal
                obligations.
              </p>

              <BulletList items={sharingPartners} />

              <p>
                Service providers are expected to use personal information
                only for the services they perform for AfterrMatch and to
                protect it using appropriate safeguards.
              </p>
            </PolicySection>

            <PolicySection
              id="data-security"
              number="07"
              title="Data Security"
            >
              <div className="rounded-[26px] bg-[#203f55] p-6 text-white sm:p-8">
                <div className="flex items-center gap-3">
                  <LockKeyhole size={21} />

                  <h3
                    style={headingFont}
                    className="text-2xl font-medium tracking-[-0.03em]"
                  >
                    Protecting your information
                  </h3>
                </div>

                <p className="mt-4 leading-8 text-white/65">
                  We use reasonable administrative, technical, and
                  organizational safeguards designed to protect personal
                  information from loss, misuse, unauthorized access,
                  alteration, or disclosure.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {securityMeasures.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4"
                    >
                      <ShieldCheck
                        size={17}
                        className="mt-1 shrink-0"
                      />

                      <span className="text-sm leading-6 text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                No online system can be guaranteed to be completely secure.
                Users should also take reasonable precautions when sharing
                personal information online.
              </p>
            </PolicySection>

            <PolicySection
              id="data-retention"
              number="08"
              title="Data Retention"
            >
              <p>
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected.
              </p>

              <p>
                Retention periods may depend on the type of information, the
                services requested, legal or accounting obligations, dispute
                resolution requirements, fraud prevention needs, and record
                maintenance.
              </p>

              <p>
                When information is no longer required, we may delete,
                anonymize, or securely archive it in accordance with our
                operational and legal requirements.
              </p>
            </PolicySection>

            <PolicySection
              id="your-rights"
              number="09"
              title="Your Rights"
            >
              <p>
                Depending on applicable law and the nature of your
                relationship with AfterrMatch, you may have certain rights
                regarding your personal information.
              </p>

              <BulletList items={userRights} />

              <p>
                To make a privacy request, email{" "}
                <a
                  href="mailto:afterrmatch.pr@gmail.com"
                  className="font-semibold text-[#203f55] underline decoration-[#2B4E66]/25 underline-offset-4"
                >
                  afterrmatch.pr@gmail.com
                </a>{" "}
                with the subject line “Privacy Request.” Please include enough
                information for us to identify your request and respond
                appropriately.
              </p>

              <p>
                We may need to verify your identity before providing,
                correcting, or deleting personal information.
              </p>
            </PolicySection>

            <PolicySection
              id="third-party-services"
              number="10"
              title="Third-Party Services"
            >
              <p>
                The AfterrMatch website may use third-party tools and services
                to support analytics, maps, embedded media, communication,
                bookings, and payments.
              </p>

              <BulletList items={thirdPartyServices} />

              <p>
                These third parties operate under their own privacy policies,
                terms, and security practices. AfterrMatch does not control
                how independent third-party providers process information
                outside the services they provide to us.
              </p>
            </PolicySection>

            <PolicySection
              id="external-links"
              number="11"
              title="External Links"
            >
              <div className="flex gap-4 rounded-[24px] border border-[#2B4E66]/10 bg-[#F7FAFB] p-5 sm:p-6">
                <ExternalLink
                  size={20}
                  className="mt-1 shrink-0 text-[#2B4E66]"
                />

                <p className="m-0">
                  The website may contain links to third-party websites,
                  social platforms, maps, booking services, or other external
                  resources. AfterrMatch is not responsible for the content,
                  privacy policies, security, or practices of those external
                  services. We recommend reviewing their privacy policies
                  before providing personal information.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="childrens-privacy"
              number="12"
              title="Children's Privacy"
            >
              <p>
                The AfterrMatch website is not intended to independently
                collect personal information from children without the
                involvement or consent of a parent or legal guardian.
              </p>

              <p>
                Where junior, family, coaching, or youth programs are offered,
                bookings or registrations should be completed by a parent,
                guardian, or authorized adult.
              </p>

              <p>
                This section may be updated if AfterrMatch introduces specific
                junior programs or services that require additional privacy
                procedures.
              </p>
            </PolicySection>

            <PolicySection
              id="policy-updates"
              number="13"
              title="Changes to This Privacy Policy"
            >
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our services, website, technology, legal
                obligations, or business practices.
              </p>

              <p>
                When changes are made, the revised policy will be published on
                this page and the “Last Updated” date will be changed.
                Continued use of the website after an update means the revised
                policy will apply from its effective date.
              </p>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#2B4E66]/10 bg-[#EDF3F5] px-5 py-3 text-sm text-[#203f55]">
                <FileText size={16} />
                Last updated: {lastUpdated}
              </div>
            </PolicySection>

            <PolicySection
              id="contact"
              number="14"
              title="Contact Us"
            >
              <p>
                For privacy questions, requests, or concerns about how your
                personal information is handled, contact AfterrMatch using
                the details below.
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
                    Contact details available on request
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

              <p className="text-sm">
                Replace the phone number and business address above with the
                exact registered or customer-support details you want to
                publish.
              </p>
            </PolicySection>
          </article>
        </div>
      </section>
    </main>
  );
}