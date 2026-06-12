
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pros = [
  {
    name: "RUHAN KAPOOR",
    role: "FOUNDER & CEO",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
   desc: "Ruhan Kapoor is the founder of Afterrmatch, a next-generation social sports and lifestyle destination built to bring people together through sports, gaming, food, and community experiences."
  },

  {
    name: "RATIK KAPOOR",
    role: "CO-FOUNDER",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop",
    desc: "Ratik Kapoor is the co-founder of Afterrmatch and a fitness enthusiast focused on making wellness enjoyable, accessible, and community-driven through meaningful social experiences."
  },

  {
    name: "JITESH KAPOOR",
    role: "FOUNDER & CEO",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1200&auto=format&fit=crop",
    desc: "Jitesh Kapoor is an entrepreneur, Afro/Tech House DJ, and music producer dedicated to creating unique spaces where sports, culture, entertainment, and community come together."
  },
];
export default function MeetTheProsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // TITLE ANIMATION
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const titleScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.82]);

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
          className="absolute inset-0 z-10 flex items-center justify-center px-4 pointer-events-none"
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
              fontFamily:
                '"Cormorant Garamond", ui-serif, Georgia, serif',
            }}
          >
          Meet The Founders
          </h1>
        </motion.div>

        {/* TABLET + DESKTOP */}
        <div className="hidden md:flex relative w-full h-full items-center justify-center px-6 lg:px-10 xl:px-16">
          {/* LEFT CARD */}
          <motion.div
            style={{ y: leftCardY }}
            className="
              absolute
              left-[1%]
              lg:left-[3%]
              xl:left-[5%]
              top-1/2
              -translate-y-1/2
              z-20

              md:scale-[0.68]
              lg:scale-[0.82]
              xl:scale-[0.92]
              2xl:scale-100

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

              md:scale-[0.74]
              lg:scale-[0.88]
              xl:scale-[0.96]
              2xl:scale-100

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
              xl:right-[5%]
              top-1/2
              -translate-y-1/2
              z-20

              md:scale-[0.68]
              lg:scale-[0.82]
              xl:scale-[0.92]
              2xl:scale-100

              origin-center
            "
          >
            <ProCard {...pros[2]} />
          </motion.div>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden relative w-full h-full items-center justify-center px-4">
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
              w-full
              flex
              justify-center
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
              w-full
              flex
              justify-center
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
              w-full
              flex
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
        rounded-[26px]
        sm:rounded-[30px]
        xl:rounded-[34px]
        overflow-hidden
        shadow-[0_15px_60px_rgba(0,0,0,0.06)]

        ${
          mobile
            ? "w-[90vw] max-w-[360px] p-4 sm:p-5"
            : featured
            ? "w-[260px] md:w-[300px] lg:w-[360px] xl:w-[410px] 2xl:w-[430px] p-5 xl:p-6"
            : "w-[220px] md:w-[240px] lg:w-[285px] xl:w-[320px] 2xl:w-[340px] p-4 xl:p-5"
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
              ? "text-[18px] sm:text-[20px] mb-4 sm:mb-5"
              : featured
              ? "text-[12px] md:text-[14px] xl:text-[18px] mb-5 xl:mb-6"
              : "text-[11px] md:text-[14px] xl:text-[18px] mb-4 xl:mb-5"
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
          rounded-[22px]
          sm:rounded-[26px]
          xl:rounded-[28px]

          ${mobile ? "mb-5" : "mb-5 xl:mb-6"}
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
                ? "h-[220px] sm:h-[240px]"
                : featured
                ? "h-[220px] md:h-[240px] lg:h-[290px] xl:h-[340px] 2xl:h-[360px]"
                : "h-[170px] md:h-[185px] lg:h-[215px] xl:h-[250px] 2xl:h-[270px]"
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
              ? "text-[24px] sm:text-[28px] mb-3 sm:mb-4"
              : featured
              ? "text-[12px] md:text-[14px] xl:text-[18px] mb-3 xl:mb-4"
              : "text-[11px] md:text-[14px] xl:text-[18px] mb-2 xl:mb-3"
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
              ? "text-[14px] sm:text-[15px]"
              : featured
              ? "text-[14px] md:text-[15px] xl:text-[18px]"
              : "text-[12px] md:text-[13px] xl:text-[16px]"
          }
        `}
      >
        {desc}
      </p>
    </motion.div>
  );
}

