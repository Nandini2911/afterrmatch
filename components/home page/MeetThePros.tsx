"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pros = [
  {
    name: "RUHAN KAPOOR",
    role: "FOUNDER & CEO",
    image: "ruhan.jpeg",
    desc: "Ruhan Kapoor is the founder of Afterrmatch, a next-generation social sports and lifestyle destination built to bring people together through sports, gaming, food, and community experiences.",
  },
  {
    name: "RATIK KAPOOR",
    role: "FOUNDER & CEO",
    image: "ratik.jpeg",
    desc: "Ratik Kapoor is the Founder & CEO of Afterrmatch, a next-generation social sports and lifestyle destination built to make fitness enjoyable, accessible, and community-driven. A dedicated fitness enthusiast, he is redefining the way people stay active by bringing together world-class pickleball facilities, wellness activities, gaming, community events, and curated social experiences, creating a space where movement feels exciting and meaningful connections happen naturally.",
  },
  {
    name: "JITESH KAPOOR",
    role: "FOUNDER & CEO",
    image: "jitesh.jpeg",
    desc: "Jitesh Kapoor is an entrepreneur, Afro/Tech House DJ, and music producer dedicated to creating unique spaces where sports, culture, entertainment, and community come together.",
  },
];

export default function MeetTheProsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.82]);

  const leftCardY = useTransform(
    scrollYProgress,
    [0.12, 0.28],
    ["120%", "0%"]
  );

  const centerCardY = useTransform(
    scrollYProgress,
    [0.34, 0.5],
    ["120%", "0%"]
  );

  const rightCardY = useTransform(
    scrollYProgress,
    [0.56, 0.72],
    ["120%", "0%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f5f3]"
      style={{
        height: "420vh",
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* BIG TITLE */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
          }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4"
        >
          <h1
            className="
              text-center
              uppercase
              leading-none
              tracking-[-0.012em]
              text-[#2B4E66]
              text-[18vw]
              sm:text-[15vw]
              md:text-[10vw]
              lg:text-[8vw]
            "
            style={{
              fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
            }}
          >
            Meet The Founders
          </h1>
        </motion.div>

        {/* TABLET + DESKTOP */}
        <div className="relative hidden h-full w-full items-center justify-center px-6 md:flex lg:px-10 xl:px-16">
          {/* LEFT CARD */}
          <motion.div
            style={{ y: leftCardY }}
            className="
              absolute
              left-[1%]
              top-1/2
              z-20
              -translate-y-1/2
              origin-center
              md:scale-[0.68]
              lg:left-[3%]
              lg:scale-[0.82]
              xl:left-[5%]
              xl:scale-[0.92]
              2xl:scale-100
            "
          >
            <ProCard {...pros[0]} />
          </motion.div>

          {/* CENTER CARD - SAME SIZE AS LEFT & RIGHT */}
          <motion.div
            style={{ y: centerCardY }}
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              -translate-x-1/2
              -translate-y-1/2
              origin-center
              md:scale-[0.68]
              lg:scale-[0.82]
              xl:scale-[0.92]
              2xl:scale-100
            "
          >
            <ProCard {...pros[1]} />
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            style={{ y: rightCardY }}
            className="
              absolute
              right-[1%]
              top-1/2
              z-20
              -translate-y-1/2
              origin-center
              md:scale-[0.68]
              lg:right-[3%]
              lg:scale-[0.82]
              xl:right-[5%]
              xl:scale-[0.92]
              2xl:scale-100
            "
          >
            <ProCard {...pros[2]} />
          </motion.div>
        </div>

        {/* MOBILE */}
        <div className="relative flex h-full w-full items-center justify-center px-4 md:hidden">
          <motion.div
            style={{ y: leftCardY }}
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              flex
              w-full
              -translate-x-1/2
              -translate-y-1/2
              justify-center
            "
          >
            <ProCard {...pros[0]} mobile />
          </motion.div>

          <motion.div
            style={{ y: centerCardY }}
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              flex
              w-full
              -translate-x-1/2
              -translate-y-1/2
              justify-center
            "
          >
            <ProCard {...pros[1]} mobile />
          </motion.div>

          <motion.div
            style={{ y: rightCardY }}
            className="
              absolute
              left-1/2
              top-1/2
              z-40
              flex
              w-full
              -translate-x-1/2
              -translate-y-1/2
              justify-center
            "
          >
            <ProCard {...pros[2]} mobile />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProCard({
  name,
  role,
  image,
  desc,
  mobile = false,
}: {
  name: string;
  role: string;
  image: string;
  desc: string;
  mobile?: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`
        overflow-hidden
        rounded-[26px]
        border
        border-black/5
        bg-[#f3f3f1]
        shadow-[0_15px_60px_rgba(0,0,0,0.06)]
        sm:rounded-[30px]
        xl:rounded-[34px]

        ${
          mobile
            ? "w-[90vw] max-w-[360px] p-4 sm:p-5"
            : "w-[220px] p-4 md:w-[240px] lg:w-[285px] xl:w-[320px] xl:p-5 2xl:w-[340px]"
        }
      `}
    >
      {/* NAME */}
      <h2
        className={`
          uppercase
          leading-[0.9]
          text-black

          ${
            mobile
              ? "mb-4 text-[18px] sm:mb-5 sm:text-[20px]"
              : "mb-4 text-[11px] md:text-[14px] xl:mb-5 xl:text-[18px]"
          }
        `}
        style={{
          fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
        }}
      >
        {name}
      </h2>

      {/* IMAGE */}
      <div
        className={`
          relative
          mb-5
          aspect-[4/5]
          w-full
          overflow-hidden
          rounded-[22px]
          bg-[#d9d9d4]
          sm:rounded-[26px]
          xl:mb-6
          xl:rounded-[28px]
        `}
      >
        <motion.img
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          src={image}
          alt={name}
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* ROLE */}
      <h3
        className={`
          uppercase
          leading-[0.92]
          text-black

          ${
            mobile
              ? "mb-3 text-[24px] sm:mb-4 sm:text-[28px]"
              : "mb-2 text-[11px] md:text-[14px] xl:mb-3 xl:text-[18px]"
          }
        `}
        style={{
          fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
        }}
      >
        {role}
      </h3>

      {/* DESCRIPTION */}
      <p
        className={`
          font-light
          leading-[1.5]
          text-[#6b6b6b]

          ${
            mobile
              ? "text-[14px] sm:text-[15px]"
              : "text-[12px] md:text-[13px] xl:text-[16px]"
          }
        `}
      >
        {desc}
      </p>
    </motion.div>
  );
}