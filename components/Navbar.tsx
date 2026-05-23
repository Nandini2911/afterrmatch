"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Our Story",
    href: "/our-story",
  },
  {
    name: "Membership",
    href: "#membership",
  },
  {
    name: "Book",
    href: "#book",
  },
 
  {
    name: "Events",
    href: "#events",
  },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 120) {
        // SCROLL DOWN → HIDE NAVBAR
        setShowNavbar(false);
      } else {
        // SCROLL UP → SHOW NAVBAR
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.header
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -120, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="
              fixed
              top-0
              left-0
              w-full
              z-50
              px-3
              md:px-6
              pt-3
              md:pt-4
            "
          >
            <div
              className="
                relative
                max-w-[1550px]
                mx-auto
                h-[74px]
                md:h-[86px]
                rounded-[26px]
                md:rounded-[30px]
                border
                border-white/40
                bg-white/70
                backdrop-blur-3xl
                shadow-[0_10px_50px_rgba(0,0,0,0.08)]
                overflow-hidden
              "
            >
              {/* GLOW */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#2B4E66]/10
                  via-white/30
                  to-[#2B4E66]/10
                  pointer-events-none
                "
              />

              {/* CONTENT */}

              <div
                className="
                  relative
                  h-full
                  flex
                  items-center
                  justify-between
                  px-5
                  md:px-10
                  lg:px-14
                "
              >
                {/* MOBILE */}

                <div className="flex lg:hidden items-center justify-between w-full">
                  {/* LOGO */}

                  <Link href="/">
                    <motion.h1
                      whileHover={{ scale: 1.04 }}
                      className="
                        text-[34px]
                        font-bold
                        leading-none
                        text-[#2B4E66]
                        cursor-pointer
                      "
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      A
                    </motion.h1>
                  </Link>

                  {/* MENU BUTTON */}

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="
                      relative
                      w-[50px]
                      h-[50px]
                      rounded-full
                      border
                      border-[#2B4E66]/10
                      bg-white/80
                      backdrop-blur-xl
                      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <motion.div
                      animate={mobileMenu ? "open" : "closed"}
                      className="flex flex-col gap-[5px]"
                    >
                      <motion.span
                        variants={{
                          closed: { rotate: 0, y: 0 },
                          open: { rotate: 45, y: 7 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-[2px] bg-[#2B4E66] rounded-full block"
                      />

                      <motion.span
                        variants={{
                          closed: { opacity: 1 },
                          open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-[2px] bg-[#2B4E66] rounded-full block"
                      />

                      <motion.span
                        variants={{
                          closed: { rotate: 0, y: 0 },
                          open: { rotate: -45, y: -7 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-[2px] bg-[#2B4E66] rounded-full block"
                      />
                    </motion.div>
                  </motion.button>
                </div>

                {/* DESKTOP */}

                <div className="hidden lg:flex items-center justify-between w-full">
                  {/* LOGO */}

                  <Link href="/">
                    <motion.h1
                      whileHover={{
                        scale: 1.05,
                        rotate: -3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="
                        text-[52px]
                        leading-none
                        font-bold
                        text-[#2B4E66]
                        cursor-pointer
                      "
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      A
                    </motion.h1>
                  </Link>

                  {/* NAV LINKS */}

                  <nav className="flex items-center gap-3">
                    {navLinks.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        whileHover={{
                          y: -2,
                        }}
                        className="
                          group
                          relative
                          px-6
                          py-3
                          rounded-full
                          text-[17px]
                          font-medium
                          text-[#2B4E66]
                          overflow-hidden
                          cursor-pointer
                        "
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {/* HOVER BG */}

                        <span
                          className="
                            absolute
                            inset-0
                            scale-0
                            group-hover:scale-100
                            transition-all
                            duration-500
                            rounded-full
                            bg-[#2B4E66]
                          "
                        />

                        {/* TEXT */}

                        <span
                          className="
                            relative
                            z-10
                            transition-colors
                            duration-500
                            group-hover:text-white
                          "
                        >
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </nav>

                  {/* BUTTON */}

                  <motion.a
                    href="#membership"
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      relative
                      overflow-hidden
                      flex
                      items-center
                      justify-center
                      h-[54px]
                      px-8
                      rounded-full
                      bg-[#2B4E66]
                      text-white
                      text-[16px]
                      font-semibold
                      shadow-[0_10px_30px_rgba(43,78,102,0.35)]
                      transition-all
                      duration-500
                      cursor-pointer
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    <span
                      className="
                        absolute
                        inset-0
                        translate-y-full
                        hover:translate-y-0
                        bg-white/10
                        transition-transform
                        duration-500
                      "
                    />

                    <span className="relative z-10">
                      Become a Member
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              lg:hidden
              fixed
              top-[92px]
              left-3
              right-3
              bottom-3
              z-40
              rounded-[34px]
              border
              border-white/20
              bg-white/75
              backdrop-blur-3xl
              shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              overflow-hidden
            "
          >
            {/* BACKGROUND */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#2B4E66]/5
                via-white/40
                to-[#2B4E66]/10
              "
            />

            <div
              className="
                relative
                h-full
                flex
                flex-col
                justify-between
                p-7
              "
            >
              {/* LINKS */}

              <div className="flex flex-col gap-3 mt-6">
                {navLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      px-6
                      py-5
                      rounded-[22px]
                      bg-white/60
                      border
                      border-white/40
                      text-[#2B4E66]
                      text-[20px]
                      font-medium
                      shadow-sm
                      transition-all
                      duration-300
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    <span>{item.name}</span>

                    <span
                      className="
                        text-[22px]
                        opacity-40
                        group-hover:translate-x-1
                        transition-transform
                      "
                    >
                      →
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* BUTTON */}

              <motion.a
                href="#membership"
                onClick={() => setMobileMenu(false)}
                whileTap={{ scale: 0.97 }}
                className="
                  w-full
                  h-[62px]
                  rounded-full
                  bg-[#2B4E66]
                  text-white
                  text-[17px]
                  font-semibold
                  shadow-[0_15px_40px_rgba(43,78,102,0.35)]
                  flex
                  items-center
                  justify-center
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Become a Member
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}