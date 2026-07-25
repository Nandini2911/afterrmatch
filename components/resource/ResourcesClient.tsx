"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Dumbbell,
  FileText,
  Footprints,
  HeartPulse,
  ListChecks,
  NotebookTabs,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Video,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const premiumEase = [0.22, 1, 0.36, 1] as const;

const headingFont = {
  fontFamily:
    '"New York", "Cormorant Garamond", ui-serif, Georgia, serif',
};

type ResourceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  status?: "available" | "coming-soon";
};

type SimpleItem = {
  title: string;
  description: string;
};

const beginnerGuides: ResourceItem[] = [
  {
    title: "What is Pickleball?",
    description:
      "Understand the sport, its format, court setup and why it is becoming one of the most accessible social games.",
    icon: BookOpen,
    status: "coming-soon",
  },
  {
    title: "How to Play Pickleball",
    description:
      "Learn the serving sequence, scoring system, court positions and basic match flow.",
    icon: Play,
    status: "coming-soon",
  },
  {
    title: "Pickleball Rules Explained",
    description:
      "A beginner-friendly explanation of serving, faults, scoring and the non-volley zone.",
    icon: ListChecks,
    status: "coming-soon",
  },
  {
    title: "Beginner Mistakes",
    description:
      "Discover the common positioning, serving and shot-selection mistakes new players make.",
    icon: ShieldCheck,
    status: "coming-soon",
  },
  {
    title: "Pickleball Glossary",
    description:
      "Understand terms such as dink, volley, kitchen, side-out, rally and third-shot drop.",
    icon: NotebookTabs,
    status: "coming-soon",
  },
];

const equipmentGuides: ResourceItem[] = [
  {
    title: "Paddle Buying Guide",
    description:
      "Learn how paddle weight, grip size, shape and surface affect your playing experience.",
    icon: Target,
    status: "coming-soon",
  },
  {
    title: "Shoes Guide",
    description:
      "Choose suitable court shoes with the right grip, support and lateral stability.",
    icon: Footprints,
    status: "coming-soon",
  },
  {
    title: "Indoor vs Outdoor Balls",
    description:
      "Understand the differences in ball design, holes, durability and playing conditions.",
    icon: Trophy,
    status: "coming-soon",
  },
  {
    title: "Equipment Checklist",
    description:
      "Prepare paddles, balls, shoes, hydration and useful accessories before your session.",
    icon: ClipboardCheck,
    status: "coming-soon",
  },
  {
    title: "Gear Maintenance",
    description:
      "Keep your paddle, shoes and equipment clean, protected and ready for every match.",
    icon: Wrench,
    status: "coming-soon",
  },
];

const trainingGuides: ResourceItem[] = [
  {
    title: "Beginner Drills",
    description:
      "Simple exercises to improve control, consistency, coordination and confidence.",
    icon: Target,
    status: "coming-soon",
  },
  {
    title: "Serving Techniques",
    description:
      "Develop a reliable serve with better placement, rhythm and repeatable mechanics.",
    icon: Zap,
    status: "coming-soon",
  },
  {
    title: "Dinking Guide",
    description:
      "Learn patience, placement and control around the non-volley zone.",
    icon: Trophy,
    status: "coming-soon",
  },
  {
    title: "Footwork",
    description:
      "Improve balance, recovery movement and court coverage through practical footwork.",
    icon: Footprints,
    status: "coming-soon",
  },
  {
    title: "Warm-Up Routine",
    description:
      "Prepare your shoulders, hips, knees and ankles before stepping onto the court.",
    icon: Dumbbell,
    status: "coming-soon",
  },
  {
    title: "Stretching Guide",
    description:
      "Explore useful pre-game mobility and post-game recovery stretches.",
    icon: HeartPulse,
    status: "coming-soon",
  },
];

const fitnessGuides: ResourceItem[] = [
  {
    title: "Benefits of Pickleball",
    description:
      "Explore the physical, social and mental benefits of playing pickleball regularly.",
    icon: HeartPulse,
    status: "coming-soon",
  },
  {
    title: "Calories Burned",
    description:
      "Understand how match duration, intensity and playing style affect energy use.",
    icon: Zap,
    status: "coming-soon",
  },
  {
    title: "Injury Prevention",
    description:
      "Reduce common risks with proper preparation, movement awareness and progression.",
    icon: ShieldCheck,
    status: "coming-soon",
  },
  {
    title: "Recovery Tips",
    description:
      "Support recovery after matches with hydration, mobility, nutrition and rest.",
    icon: Dumbbell,
    status: "coming-soon",
  },
  {
    title: "Nutrition for Players",
    description:
      "Plan practical meals, snacks and hydration around training and match sessions.",
    icon: ClipboardCheck,
    status: "coming-soon",
  },
];

const freeResources: SimpleItem[] = [
  {
    title: "Beginner Checklist",
    description:
      "What to know, wear and carry before your first pickleball session.",
  },
  {
    title: "Pickleball Rules Cheat Sheet",
    description:
      "A quick reference covering serving, scoring, faults and kitchen rules.",
  },
  {
    title: "Match Score Sheet",
    description:
      "A practical score sheet for casual games and competitive matches.",
  },
  {
    title: "Court Etiquette Guide",
    description:
      "Simple guidelines for safe, respectful and enjoyable community play.",
  },
  {
    title: "Tournament Checklist",
    description:
      "A preparation list covering equipment, hydration and match-day essentials.",
  },
  {
    title: "Event Planning Checklist",
    description:
      "A planning resource for social games, celebrations and community events.",
  },
  {
    title: "Weekly Practice Planner",
    description:
      "Organize drills, practice sessions, recovery and improvement goals.",
  },
  {
    title: "Club Membership Guide",
    description:
      "Explore membership benefits, booking access and community opportunities.",
  },
];

const videos: SimpleItem[] = [
  {
    title: "Basic Rules",
    description:
      "A visual introduction to court positions, scoring and match structure.",
  },
  {
    title: "Serving Tutorial",
    description:
      "Learn the basic serving motion, placement and important serving rules.",
  },
  {
    title: "Match Highlights",
    description:
      "Watch selected moments from games, events and community sessions.",
  },
  {
    title: "Coaching Sessions",
    description:
      "Explore practical training demonstrations and player improvement sessions.",
  },
  {
    title: "Event Recaps",
    description:
      "Experience highlights from AfterrMatch events and community gatherings.",
  },
];

const faqGroups = [
  {
    title: "Playing",
    description:
      "Beginner support, rules, player levels and getting started.",
  },
  {
    title: "Booking",
    description:
      "Court availability, timings, reservations and booking assistance.",
  },
  {
    title: "Membership",
    description:
      "Member benefits, community access and regular playing opportunities.",
  },
  {
    title: "Events",
    description:
      "Private events, tournaments, community games and celebrations.",
  },
  {
    title: "Equipment",
    description:
      "Paddles, balls, shoes and equipment availability.",
  },
];

const articleCategories = [
  {
    title: "Pickleball Basics",
    description:
      "Beginner-friendly articles explaining the sport, rules and scoring.",
  },
  {
    title: "Tips & Techniques",
    description:
      "Practical advice for serving, dinking, movement and match preparation.",
  },
  {
    title: "Equipment",
    description:
      "Helpful guides for paddles, shoes, balls and equipment maintenance.",
  },
  {
    title: "Fitness",
    description:
      "Warm-ups, recovery, mobility, injury prevention and player nutrition.",
  },
];

const recommendedResources: ResourceItem[] = [
  {
    title: "Membership Benefits",
    description:
      "Discover membership options created for regular play and community access.",
    href: "/membership",
    icon: Users,
    status: "available",
  },
  {
    title: "Book a Court",
    description:
      "Plan your next pickleball session and explore available booking options.",
    href: "/book",
    icon: CalendarDays,
    status: "available",
  },
  {
    title: "Events",
    description:
      "Explore tournaments, social games, workshops and private experiences.",
    href: "/events",
    icon: Trophy,
    status: "available",
  },
  {
    title: "Community Games",
    description:
      "Meet players and take part in welcoming group playing sessions.",
    href: "/community-games",
    icon: Users,
    status: "available",
  },
  {
    title: "Pickleball Courts",
    description:
      "Learn more about the AfterrMatch playing environment and court experience.",
    href: "/pickleball-courts",
    icon: Target,
    status: "available",
  },
  {
    title: "Amenities",
    description:
      "Explore the lounge, café, entertainment and private-event facilities.",
    href: "/amenities",
    icon: Sparkles,
    status: "available",
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
    y: 32,
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

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-[#2B4E66]/25" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2B4E66]/50">
          {eyebrow}
        </span>

        {centered && <span className="h-px w-8 bg-[#2B4E66]/25" />}
      </div>

      <h2
        style={headingFont}
        className="mt-5 text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#203f55]"
      >
        {title}
      </h2>

      <p className="mt-6 text-base leading-8 text-[#607786] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function ResourceGrid({ items }: { items: ResourceItem[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const available = item.status === "available" && item.href;

        const content = (
          <>
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#2B4E66]/5 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2B4E66] text-white">
                <Icon size={19} aria-hidden="true" />
              </div>

              {available ? (
                <ArrowUpRight
                  size={18}
                  className="text-[#2B4E66]/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              ) : (
                <span className="rounded-full bg-[#2B4E66]/[0.07] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#2B4E66]/50">
                  Coming Soon
                </span>
              )}
            </div>

            <div className="relative mt-auto pt-12">
              <span className="text-xs font-semibold tracking-[0.16em] text-[#2B4E66]/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3
                style={headingFont}
                className="mt-3 text-[1.7rem] font-medium leading-tight tracking-[-0.035em] text-[#203f55]"
              >
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-[#667d8d]">
                {item.description}
              </p>

              {available && (
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2B4E66]">
                  Explore
                  <ChevronRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              )}
            </div>
          </>
        );

        return (
          <motion.div
            key={item.title}
            variants={revealUp}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -7,
                  }
            }
          >
            {available ? (
              <Link
                href={item.href!}
                className="group relative flex min-h-[275px] h-full flex-col overflow-hidden rounded-[28px] border border-[#2B4E66]/10 bg-white p-7 text-[#2B4E66] shadow-[0_20px_70px_rgba(43,78,102,0.06)] no-underline sm:p-8"
              >
                {content}
              </Link>
            ) : (
              <article className="group relative flex min-h-[275px] h-full flex-col overflow-hidden rounded-[28px] border border-[#2B4E66]/10 bg-white p-7 text-[#2B4E66] shadow-[0_20px_70px_rgba(43,78,102,0.06)] sm:p-8">
                {content}
              </article>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function ResourcesClient() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#F5F8F9] text-[#2B4E66]">
      {/* HERO */}

      <section className="relative min-h-[92vh] overflow-hidden border-b border-[#2B4E66]/10 bg-[#EDF3F5]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(43,78,102,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(43,78,102,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 35, 0],
                    y: [0, -20, 0],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#2B4E66]/10 blur-[120px]"
          />

          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-white blur-[110px]" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-12 xl:px-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-sm text-[#2B4E66]/45"
          >
            <Link href="/" className="transition-colors hover:text-[#2B4E66]">
              Home
            </Link>

            <ChevronRight size={14} />

            <span className="text-[#2B4E66]">Resource Center</span>
          </nav>

          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr]"
          >
            <motion.div variants={revealUp}>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#2B4E66]/15 bg-white/70 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#2B4E66]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2B4E66]">
                  Pickleball Knowledge Hub
                </span>
              </div>

              <h1
                style={headingFont}
                className="mt-8 max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em] text-[#203f55]"
              >
                AfterrMatch
                <span className="block italic text-[#607d8f]">
                  Resource Center
                </span>
              </h1>
            </motion.div>

            <motion.div variants={revealUp} className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-[#5d7484] sm:text-xl sm:leading-9">
                A one-stop destination for everything you need to learn,
                improve and enjoy pickleball. Explore beginner guides,
                equipment advice, training resources, fitness information and
                community support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#beginner-guides"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#2B4E66] px-7 text-sm font-semibold uppercase tracking-[0.17em] text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#203f55]"
                >
                  Explore Resources
                  <ArrowDown
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </Link>

                <Link
                  href="/book"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#2B4E66]/20 bg-white/70 px-7 text-sm font-semibold uppercase tracking-[0.17em] text-[#2B4E66] no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2B4E66]"
                >
                  Start Learning
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={revealUp}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="mt-16 grid overflow-hidden rounded-[30px] border border-[#2B4E66]/10 bg-white/65 shadow-[0_30px_90px_rgba(43,78,102,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              ["30+", "Learning Topics"],
              ["06", "Resource Categories"],
              ["05", "Video Topics"],
              ["01", "Knowledge Hub"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-b border-[#2B4E66]/10 px-7 py-7 text-center last:border-b-0 sm:border-r sm:border-b-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
              >
                <p
                  style={headingFont}
                  className="text-3xl font-medium tracking-[-0.04em] text-[#203f55]"
                >
                  {value}
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2B4E66]/45">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BEGINNER GUIDES */}

      <section
        id="beginner-guides"
        className="scroll-mt-24 py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="Learn Pickleball"
            title="Begin with the fundamentals."
            description="Clear beginner guides designed to help new players understand pickleball and step onto the court with confidence."
          />

          <ResourceGrid items={beginnerGuides} />
        </div>
      </section>

      {/* EQUIPMENT */}

      <section className="border-y border-[#2B4E66]/10 bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="Equipment Guides"
            title="Choose gear that supports your game."
            description="Understand paddles, balls, shoes and essential equipment through practical, beginner-friendly guidance."
          />

          <ResourceGrid items={equipmentGuides} />
        </div>
      </section>

      {/* TRAINING */}

      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="Training & Improvement"
            title="Build movement, control and confidence."
            description="Explore practical drills and techniques for serving, dinking, footwork, preparation and overall improvement."
          />

          <ResourceGrid items={trainingGuides} />
        </div>
      </section>

      {/* FITNESS */}

      <section className="relative overflow-hidden bg-[#203f55] py-24 text-white sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute -bottom-44 -left-40 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.27em] text-white/45">
                Health & Fitness
              </span>

              <h2
                style={headingFont}
                className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.96] tracking-[-0.055em]"
              >
                Play stronger.
                <span className="block italic text-white/55">
                  Recover smarter.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-white/60 lg:ml-auto">
              Support your performance with practical information about
              preparation, recovery, injury prevention, nutrition and the
              health benefits of pickleball.
            </p>
          </div>

          <div className="mt-14">
            <ResourceGrid items={fitnessGuides} />
          </div>
        </div>
      </section>

      {/* FREE RESOURCES */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="Downloads & Free Resources"
            title="Practical learning materials are coming."
            description="AfterrMatch is preparing useful checklists, score sheets, guides and planning resources for players, members and event organizers."
          />

          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            className="mt-12 grid overflow-hidden rounded-[32px] border border-[#2B4E66]/10 bg-[#F7FAFB] md:grid-cols-2"
          >
            {freeResources.map((item, index) => (
              <motion.article
                key={item.title}
                variants={revealUp}
                className="flex items-center gap-5 border-b border-[#2B4E66]/10 p-6 sm:p-8 md:odd:border-r"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2B4E66] text-white">
                  <FileText size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#2B4E66]/40">
                      Resource {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="rounded-full bg-[#2B4E66]/[0.07] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#2B4E66]/50">
                      Coming Soon
                    </span>
                  </div>

                  <h3
                    style={headingFont}
                    className="mt-3 text-xl font-medium tracking-[-0.03em] text-[#203f55] sm:text-2xl"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#687f8f]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO LEARNING */}

      <section className="border-y border-[#2B4E66]/10 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="Video Learning"
            title="Watch the game come to life."
            description="Video tutorials, coaching sessions, match highlights and event recaps will be added to this learning hub."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {videos.map((video, index) => (
              <article
                key={video.title}
                className="group overflow-hidden rounded-[28px] border border-[#2B4E66]/10 bg-white shadow-[0_20px_70px_rgba(43,78,102,0.06)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#203f55]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.16),transparent_35%)]" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl">
                      <Video size={20} />
                    </div>
                  </div>

                  <span
                    style={headingFont}
                    className="absolute bottom-4 left-5 text-6xl text-white/[0.06]"
                  >
                    0{index + 1}
                  </span>

                  <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
                    Coming Soon
                  </span>
                </div>

                <div className="p-6">
                  <h3
                    style={headingFont}
                    className="text-2xl font-medium tracking-[-0.035em] text-[#203f55]"
                  >
                    {video.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667d8d]">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12 xl:px-16">
          <div>
            <SectionHeading
              eyebrow="FAQs & Help Center"
              title="Find answers before you play."
              description="Explore support topics covering playing, booking, membership, events and equipment."
            />

            <Link
              href="/faq"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2B4E66] no-underline"
            >
              Visit the full FAQ page
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#2B4E66]/10 bg-[#F6F9FA]">
            {faqGroups.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-[#2B4E66]/10 p-6 last:border-b-0 sm:p-8"
              >
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2B4E66] text-white">
                    <CircleHelp size={17} />
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#2B4E66]/35">
                      Topic {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      style={headingFont}
                      className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#203f55]"
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#667d8d]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}

      <section className="border-y border-[#2B4E66]/10 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Latest Educational Articles"
              title="Continue learning through the journal."
              description="Explore educational content across pickleball basics, techniques, equipment and fitness."
            />

            <Link
              href="/blog"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#2B4E66] no-underline"
            >
              View all articles
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {articleCategories.map((item, index) => (
              <Link
                key={item.title}
                href="/blog"
                className="group flex min-h-[260px] flex-col rounded-[28px] border border-[#2B4E66]/10 bg-white p-7 text-[#2B4E66] shadow-[0_20px_70px_rgba(43,78,102,0.06)] no-underline transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2B4E66]/40">
                    Category
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-[#2B4E66]/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="mt-auto pt-10">
                  <span
                    style={headingFont}
                    className="text-5xl text-[#2B4E66]/[0.07]"
                  >
                    0{index + 1}
                  </span>

                  <h3
                    style={headingFont}
                    className="mt-3 text-2xl font-medium tracking-[-0.035em] text-[#203f55]"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667d8d]">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="Recommended Resources"
            title="Continue your AfterrMatch journey."
            description="Move from learning to playing by exploring bookings, memberships, community games, events and amenities."
            centered
          />

          <ResourceGrid items={recommendedResources} />
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="px-5 pb-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative mx-auto max-w-[1376px] overflow-hidden rounded-[38px] bg-[#203f55] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
            <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/10" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.27em] text-white/45">
                Ready to Start Playing?
              </span>

              <h2
                style={headingFont}
                className="mt-6 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em]"
              >
                Take your learning
                <span className="block italic text-white/55">
                  onto the court.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                Book your next session, join the AfterrMatch community and
                experience pickleball in a welcoming environment.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/book"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.17em] text-[#203f55] no-underline transition-transform duration-300 hover:-translate-y-1"
              >
                Book a Court
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/membership"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] px-7 text-sm font-semibold uppercase tracking-[0.17em] text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12]"
              >
                Join the Community
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-semibold uppercase tracking-[0.17em] text-white/75 no-underline transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7">
            {[
              "Beginner Friendly",
              "Community Focused",
              "Learning Resources",
              "Greater Noida",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm text-white/55"
              >
                <Check size={15} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}