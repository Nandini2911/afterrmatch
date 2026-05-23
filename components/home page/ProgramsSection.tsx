"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  useRef,
  useState,
} from "react";

const tabs = [
  "DESIGN DISTRICT",
  "SOLÉ MIA",
  "HUDSON YARDS",
  "UPPER EAST SIDE",
];

const programsData = {
  "DESIGN DISTRICT": [
    {
      title: "WOMEN'S BEGINNER",

      description:
        "Perfect for newcomers and those looking to refine their foundational skills, this clinic provides a supportive environment for learning and improvement.",

      price: "$40 / MEMBER: $32",
    },

    {
      title: "MIXED HIGH BEGINNER",

      description:
        "Ideal for players with some experience, this clinic focuses on advancing your technique and strategic understanding.",

      price: "$40 / MEMBER: $32",
    },

    {
      title: "MIXED INTERMEDIATE",

      description:
        "Experience match play with coach guidance to apply your skills in real-game scenarios.",

      price: "$40 / MEMBER: $32",
    },
  ],

  "SOLÉ MIA": [
    {
      title: "VOLLEY MACHINE",
      description:
        "Sharpen your reflexes and improve consistency with a focused session on the volley machine — perfect for dialing in control, timing, and precision.",
      price: "$25 / MEMBER: $20",
    },

    {
      title: "WOMEN'S BEGINNER",
      description:
        "An introduction to padel that focuses on building a strong foundation of essential skills and techniques.",
      price: "$45 / MEMBER: $36",
    },

    {
      title: "WOMEN'S HIGH BEGINNER",
      description:
        "Ideal for players with some experience, this clinic focuses on advancing your technique and strategic understanding.",
      price: "$45 / MEMBER: $36",
    },

    {
      title: "WOMEN'S INTERMEDIATE",
      description:
        "This clinic is for intermediate players looking to take their skills further with shot precision and effective match play.",
      price: "$50 / MEMBER: $40",
    },

    {
      title: "MEN'S INTERMEDIATE",
      description:
        "A men’s clinic designed to improve consistency and refine court tactics through structured drills.",
      price: "$50 / MEMBER: $40",
    },

    {
      title: "MEN'S ADVANCED",
      description:
        "Elevate your game with advanced sessions focused on tactical play and elite-level consistency.",
      price: "$50 / MEMBER: $40",
    },

    {
      title: "RESERVE JUNIORS (9-12)",
      description:
        "A structured clinic that guides juniors in refining their padel skills and understanding of the game.",
      price: "$45 / MEMBER: $36",
    },

    {
      title: "LITTLE ACES (5-8)",
      description:
        "A welcoming introduction to padel for young players, focusing on essential skills and fun learning.",
      price: "$45 / MEMBER: $36",
    },

    {
      title: "PADEL PIONEERS (13-15)",
      description:
        "A program designed for intermediate teen players looking to sharpen skills and integrate instructed match-play scenarios.",
      price: "$45 / MEMBER: $36",
    },
  ],

  "HUDSON YARDS": [],

  "UPPER EAST SIDE": [],
};

export default function ProgramsSection() {
  const [activeTab, setActiveTab] =
    useState("SOLÉ MIA");

  const heroRef = useRef(null);

  const programs =
    programsData[
      activeTab as keyof typeof programsData
    ];

  /* SCROLL */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* CINEMATIC ZOOM */

  const titleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 0.82]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  return (
    <section className="relative bg-white overflow-hidden">
      {/* HERO */}

      <div
        ref={heroRef}
        className="
          relative
          h-[82vh]
        "
      >
        {/* STICKY */}

        <div
          className="
            sticky
            top-0

            h-screen

            flex
            items-center
            justify-center

            px-6
            sm:px-10
            lg:px-20
          "
        >
          {/* LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              absolute

              top-[46%]

              z-20

              text-[11px]
              sm:text-[12px]

              tracking-[8px]

              uppercase

              text-[#2B4E66]
            "
          >
            MEMBERS-ONLY
          </motion.p>

          {/* TITLE */}

          <motion.h2
            style={{
              scale: titleScale,
              y: titleY,
              fontFamily:
                '"Cormorant Garamond", serif',
            }}
            className="
              text-center

              text-[#2B4E66]

              text-[40px]
              sm:text-[60px]
              lg:text-[100px]

              leading-[0.92]

              tracking-[-5px]
              sm:tracking-[-8px]

              uppercase

              max-w-[1400px]

              mx-auto
            "
          >
            DISCOVER OUR
            <br />
            PROGRAMS
          </motion.h2>
        </div>
      </div>

      {/* TABS */}

      <div
        className="
          flex
          flex-wrap

          justify-center

          border-b
          border-[#2B4E66]/10

          px-6
          sm:px-10
          lg:px-20
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative

              px-8
              sm:px-12

              pb-6

              text-[18px]
              sm:text-[20px]

              tracking-[-0.5px]

              transition-all
              duration-500

              ${
                activeTab === tab
                  ? "text-[#2B4E66]"
                  : "text-[#2B4E66]/45 hover:text-[#2B4E66]"
              }
            `}
          >
            {tab}

            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="
                  absolute
                  bottom-0
                  left-0

                  h-[2px]
                  w-full

                  bg-[#2B4E66]
                "
              />
            )}
          </button>
        ))}
      </div>

      {/* PROGRAM LIST */}

      <div className="px-4 sm:px-8 lg:px-16 py-10">
        {programs.length > 0 ? (
          <div className="space-y-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                }}
                className="
                  group
                  relative

                  overflow-hidden

                  grid
                  grid-cols-1
                  lg:grid-cols-[1.4fr_0.7fr_0.4fr]

                  gap-8
                  lg:gap-14

                  items-center

                  py-12
                  lg:py-14

                  px-6
                  lg:px-10

                  rounded-[34px]

                  border
                  border-[#2B4E66]/10

                 bg-gradient-to-r
                    from-[#EEF5FB]
                    via-white
                    to-[#023d70]

                  transition-all
                  duration-700

                  hover:bg-white

                  hover:shadow-[0_25px_80px_rgba(24,39,75,0.08)]

                  cursor-pointer
                "
              >
                {/* BACKGROUND GLOW */}

                <div
                  className="
                    absolute
                    inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-700

                    bg-gradient-to-r
                    from-[#EEF5FB]
                    via-white
                    to-[#023d70]

                    rounded-[34px]

                    -z-10
                  "
                />

                {/* LEFT */}

                <div>
                  <motion.h3
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", serif',
                    }}
                    className="
                      text-[#2B4E66]

                      text-[34px]
                      
                      md:text-[40px]
                      lg:text-[52px]

                      leading-[0.92]

                      tracking-[-4px]

                      uppercase
                    "
                  >
                    {program.title}
                  </motion.h3>

                  <motion.p
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      mt-4

                      text-[#2B4E66]/75

                      text-[17px]
                      sm:text-[21px]

                      leading-[1.7]

                      max-w-[700px]
                    "
                  >
                    {program.description}
                  </motion.p>
                </div>

                {/* PRICE */}

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    text-[#2B4E66]

                    text-[26px]
                    sm:text-[32px]

                    tracking-[-1px]

                    transition-all
                    duration-500
                  "
                >
                  {program.price}
                </motion.div>

                {/* BUTTON */}

                <div className="flex lg:justify-end">
                  <motion.button
                    whileHover={{
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      h-[60px]

                      px-9

                      rounded-full

                      border
                      border-[#2B4E66]/20

                      text-[#2B4E66]

                      text-[18px]

                      transition-all
                      duration-500

                      hover:bg-[#2B4E66]
                      hover:text-white

                      hover:shadow-[0_10px_30px_rgba(43,78,102,0.22)]
                    "
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className="
              flex
              items-center
              justify-center

              py-[180px]

              text-[#2B4E66]/60

              text-[32px]
            "
          >
            Coming Soon
          </div>
        )}
      </div>

      {/* BOTTOM SPACE */}

      <div className="h-[140px]" />
    </section>
  );
}