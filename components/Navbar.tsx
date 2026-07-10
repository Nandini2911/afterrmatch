"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Membership", href: "/membership" },
  { name: "Book", href: "/book" },
  { name: "Events", href: "/events" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // ALWAYS SHOW AT TOP
      if (currentScrollY < 40) {
        setShowNavbar(true);
      }
      // SCROLL DOWN
      else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      }
      // SCROLL UP
      else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // LOCK BODY SCROLL
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  return (
    <>
      {/* NAVBAR */}

      <motion.header
        initial={false}
        animate={{
          y: showNavbar ? 0 : -130,
          opacity: showNavbar ? 1 : 0.95,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
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
          will-change-transform
        "
      >
        <div
          className="
            relative
            max-w-[1550px]
            mx-auto
            h-[74px]
            md:h-[84px]
            rounded-[24px]
            md:rounded-[28px]
            border
            border-white/30
            bg-[#2B4E66]
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
        >
          {/* SOFT GLOW */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#2B4E66]/10
              via-white
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
               <Image
    src="/afterrlogo.webp"
    alt="Afterr Match"
    width={180}
    height={70}
    priority
    className="h-auto w-[110px]"
  />
              </Link>

              {/* MENU BUTTON */}

              <motion.button
                whileTap={{ scale: 0.92 }}
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
                  flex
                  items-center
                  justify-center
                  overflow-hidden
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
  <motion.div
    whileHover={{
      scale: 1.03,
    }}
  >
    <Image
      src="/afterrlogo.webp"
      alt="Afterr Match"
      width={160}
      height={50}
      priority
      className="h-auto w-[160px] xl:w-[150px]"
    />
  </motion.div>
</Link>

              {/* NAV LINKS */}

              <nav className="flex items-center gap-2">
                {navLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      group
                      relative
                      px-6
                      py-3
                      rounded-full
                      text-[16px]
                      font-medium
                      text-[#2B4E66]
                      overflow-hidden
                      transition-colors
                      duration-300
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
                        rounded-full
                        bg-[#2B4E66]
                        scale-0
                        opacity-0
                        group-hover:scale-100
                        group-hover:opacity-100
                        transition-all
                        duration-300
                      "
                    />

                    {/* TEXT */}

                    <span
                      className="
                        relative
                        z-10
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA BUTTON */}

              <motion.a
                href="/membership"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  h-[44px]
                  px-4
                  rounded-full
                  bg-[#2B4E66]
                  text-white
                  text-[12px]
                  font-semibold
                  overflow-hidden
                  shadow-[0_10px_30px_rgba(43,78,102,0.28)]
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
                    bg-white/10
                    translate-y-full
                    hover:translate-y-0
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

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="
                fixed
                inset-0
                bg-black/20
                backdrop-blur-sm
                z-40
                lg:hidden
              "
            />

            {/* MENU */}

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                lg:hidden
                fixed
                top-[92px]
                left-3
                right-3
                bottom-3
                z-50
                rounded-[32px]
                border
                border-white/20
                bg-white/75
                backdrop-blur-3xl
                shadow-[0_20px_80px_rgba(0,0,0,0.12)]
                overflow-hidden
              "
            >
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
                        delay: index * 0.06,
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

                {/* CTA */}

                <motion.a
                  href="/membership"
                  onClick={() => setMobileMenu(false)}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full
                    h-[62px]
                    rounded-full
                    bg-[#2B4E66]
                    text-white
                    text-[17px]
                    font-semibold
                    shadow-[0_15px_40px_rgba(43,78,102,0.30)]
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}