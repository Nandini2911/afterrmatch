"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pros = [
  {
    name: "JUAN MARTÍN DÍAZ",
    role: "CHIEF PADEL OFFICER",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    desc: "A padel legend from Argentina who dominated the sport for nearly two decades, holding the World Number 1 ranking for 13 consecutive years.",
  },
  {
    name: "ALEJANDRO GALÁN",
    role: "GLOBAL PERFORMANCE LEAD",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop",
    desc: "Known for explosive energy and elite athleticism, Galán represents the new generation of world-class padel excellence.",
  },
  {
    name: "ARTURO COELLO",
    role: "ELITE AMBASSADOR",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1200&auto=format&fit=crop",
    desc: "One of the most exciting young talents in the sport, bringing power, precision, and charisma to the global padel stage.",
  },
];

export default function MeetTheProsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // TITLE ANIMATION
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0]
  );

  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0.82]
  );

  // CARD ANIMATION
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
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <h1
            className="
              text-center
              uppercase
              leading-none
              tracking-[-0.012em]
              text-[#2B4E66]

              text-[20vw]
              sm:text-[16vw]
              md:text-[12vw]
              xl:text-[10vw]
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", ui-serif, Georgia, serif',
            }}
          >
            Meet The Pros
          </h1>
        </motion.div>

        {/* TABLET + DESKTOP */}
        <div className="hidden md:flex relative w-full h-full items-center justify-center">
          {/* LEFT CARD */}
          <motion.div
            style={{ y: leftCardY }}
            className="
              absolute
              left-[1%]
              lg:left-[3%]
              xl:left-[4%]
              top-1/2
              -translate-y-1/2
              z-20

              md:scale-[0.72]
              lg:scale-90
              xl:scale-100

              origin-center
            "
          >
            <ProCard {...pros[0]} />
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            style={{ y: centerCardY }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-30

              md:scale-[0.8]
              lg:scale-95
              xl:scale-100

              origin-center
            "
          >
            <ProCard {...pros[1]} featured />
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            style={{ y: rightCardY }}
            className="
              absolute
              right-[1%]
              lg:right-[3%]
              xl:right-[4%]
              top-1/2
              -translate-y-1/2
              z-20

              md:scale-[0.72]
              lg:scale-90
              xl:scale-100

              origin-center
            "
          >
            <ProCard {...pros[2]} />
          </motion.div>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden relative w-full h-full items-center justify-center">
          {/* CARD 1 */}
          <motion.div
            style={{ y: leftCardY }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-20
            "
          >
            <ProCard {...pros[0]} mobile />
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            style={{ y: centerCardY }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-30
            "
          >
            <ProCard {...pros[1]} mobile />
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            style={{ y: rightCardY }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-40
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
  featured = false,
}: {
  name: string;
  role: string;
  image: string;
  desc: string;
  mobile?: boolean;
  featured?: boolean;
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
        bg-[#f3f3f1]
        border
        border-black/5
        rounded-[34px]
        overflow-hidden
        shadow-[0_15px_60px_rgba(0,0,0,0.06)]

        ${
          mobile
            ? "w-[88vw] max-w-[360px] p-5"
            : featured
            ? "w-[300px] md:w-[320px] lg:w-[390px] xl:w-[430px] p-6"
            : "w-[230px] md:w-[250px] lg:w-[300px] xl:w-[340px] p-5"
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
              ? "text-[20px] mb-5"
              : featured
              ? "text-[12px] md:text-[15px] xl:text-[18px] mb-6"
              : "text-[12px] md:text-[15px] xl:text-[18px] mb-5"
          }
        `}
        style={{
          fontFamily:
            '"Cormorant Garamond", ui-serif, Georgia, serif',
        }}
      >
        {name}
      </h2>

      {/* IMAGE */}
      <div
        className={`
          overflow-hidden
          rounded-[28px]

          ${mobile ? "mb-5" : "mb-6"}
        `}
      >
        <motion.img
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.5,
          }}
          src={image}
          alt={name}
          className={`
            w-full
            object-cover

            ${
              mobile
                ? "h-[240px]"
                : featured
                ? "h-[220px] md:h-[240px] lg:h-[300px] xl:h-[360px]"
                : "h-[170px] md:h-[190px] lg:h-[220px] xl:h-[270px]"
            }
          `}
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
              ? "text-[28px] mb-4"
              : featured
              ? "text-[12px] md:text-[15px] xl:text-[18px] mb-4"
              : "text-[12px] md:text-[15px] xl:text-[18px] mb-3"
          }
        `}
        style={{
          fontFamily:
            '"Cormorant Garamond", ui-serif, Georgia, serif',
        }}
      >
        {role}
      </h3>

      {/* DESCRIPTION */}
      <p
        className={`
          text-[#6b6b6b]
          leading-[1.5]
          font-light

          ${
            mobile
              ? "text-[15px]"
              : featured
              ? "text-[15px] md:text-[16px] xl:text-[18px]"
              : "text-[13px] md:text-[14px] xl:text-[16px]"
          }
        `}
      >
        {desc}
      </p>
    </motion.div>
  );
}