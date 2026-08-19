"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Membership", href: "/membership" },
  { name: "Book", href: "/book" },
  { name: "Events", href: "/events" },
];

const services = [
  {
    name: "Pickleball",
    href: "/services/pickleball",
   
   
  },
  {
    name: "Pool Table",
    href: "/services/pool-table",
  },{
    name: "PS5",
    href: "/services/ps5",
  
  },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const lastScrollY = useRef(0);

  /* =========================
     NAVBAR SCROLL
  ========================= */

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

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     LOCK BODY SCROLL
  ========================= */

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
      {/* =====================================================
          NAVBAR
      ===================================================== */}

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
            overflow-visible
          "
        >

          {/* =========================
              SOFT GLOW
          ========================= */}

          <div
            className="
              absolute
              inset-0
              rounded-[24px]
              md:rounded-[28px]
              bg-gradient-to-r
              from-[#2B4E66]/10
              via-white
              to-[#2B4E66]/10
              pointer-events-none
              opacity-20
            "
          />

          {/* =========================
              CONTENT
          ========================= */}

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

            {/* =================================================
                MOBILE NAV
            ================================================= */}

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
                type="button"
                aria-label={
                  mobileMenu ? "Close menu" : "Open menu"
                }
                aria-expanded={mobileMenu}
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
                      closed: {
                        rotate: 0,
                        y: 0,
                      },
                      open: {
                        rotate: 45,
                        y: 7,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      w-6
                      h-[2px]
                      bg-[#2B4E66]
                      rounded-full
                      block
                    "
                  />

                  <motion.span
                    variants={{
                      closed: {
                        opacity: 1,
                      },
                      open: {
                        opacity: 0,
                      },
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      w-6
                      h-[2px]
                      bg-[#2B4E66]
                      rounded-full
                      block
                    "
                  />

                  <motion.span
                    variants={{
                      closed: {
                        rotate: 0,
                        y: 0,
                      },
                      open: {
                        rotate: -45,
                        y: -7,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      w-6
                      h-[2px]
                      bg-[#2B4E66]
                      rounded-full
                      block
                    "
                  />
                </motion.div>
              </motion.button>
            </div>


            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <div className="hidden lg:flex items-center justify-between w-full">

              {/* =========================
                  LOGO
              ========================= */}

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


              {/* =========================
                  NAVIGATION
              ========================= */}

              <nav className="flex items-center gap-1">

                {/* =========================
                    NORMAL NAV LINKS
                ========================= */}

                {navLinks.map((item) => (
                  <motion.div
                    key={item.href}
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="
                        group
                        relative
                        block
                        px-5
                        py-3
                        rounded-full
                        text-[15px]
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

                      {/* HOVER BACKGROUND */}

                      <span
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-white
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
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#2B4E66]
                        "
                      >
                        {item.name}
                      </span>

                    </Link>
                  </motion.div>
                ))}


                {/* =================================================
                    SERVICES DROPDOWN
                ================================================= */}

                <div className="group relative">

                  {/* SERVICES BUTTON */}

                  <motion.button
                    type="button"
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      px-5
                      py-3
                      text-[15px]
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-[#2B4E66]
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    Services

                    <motion.span
                      className="
                        text-[13px]
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                      "
                    >
                      ↓
                    </motion.span>
                  </motion.button>


                  {/* =========================
                      DROPDOWN
                  ========================= */}

                  <div
                    className="
                      pointer-events-none
                      invisible
                      absolute
                      left-1/2
                      top-full
                      z-[100]
                      w-[340px]
                      -translate-x-1/2
                      translate-y-3
                      pt-4
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:pointer-events-auto
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >

                    <div
                      className="
                        overflow-hidden
                        rounded-[26px]
                        border
                        border-[#2B4E66]/10
                        bg-white/95
                        p-3
                        shadow-[0_25px_80px_rgba(23,47,64,0.18)]
                        backdrop-blur-2xl
                      "
                    >

                      {/* DROPDOWN HEADER */}

                      <div className="px-4 pb-3 pt-3">

                        <div className="flex items-center gap-3">

                          <span className="h-px w-8 bg-[#2B4E66]/25" />

                          <p
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.3em]
                              text-[#2B4E66]/45
                            "
                          >
                            The Court Experience
                          </p>

                        </div>

                        <p
                          className="
                            mt-2
                            text-[24px]
                            leading-none
                            text-[#2B4E66]
                          "
                          style={{
                            fontFamily:
                              '"Cormorant Garamond", serif',
                            fontWeight: 400,
                          }}
                        >
                          Choose your experience.
                        </p>

                      </div>


                      {/* SERVICE ITEMS */}

                      <div className="space-y-1">

                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="
                              group/service
                              flex
                              items-center
                              gap-4
                              rounded-[18px]
                              px-4
                              py-3.5
                              transition-all
                              duration-300
                              hover:bg-[#2B4E66]
                            "
                          >

                            {/* NUMBER */}

                            


                            {/* CONTENT */}

                            <div className="flex-1">

                              <p
                                className="
                                  text-[16px]
                                  text-[#2B4E66]
                                  transition-colors
                                  duration-300
                                  group-hover/service:text-white
                                "
                                style={{
                                  fontFamily:
                                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                                }}
                              >
                                {service.name}
                              </p>

                             

                            </div>


                            {/* ARROW */}

                            <span
                              className="
                                text-sm
                                text-[#2B4E66]/30
                                transition-all
                                duration-300
                                group-hover/service:translate-x-1
                                group-hover/service:text-white
                              "
                            >
                              →
                            </span>

                          </Link>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </nav>


              {/* =========================
                  CONTACT BUTTON
              ========================= */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/contact"
                  className="
                    group
                    relative
                    flex
                    items-center
                    justify-center
                    h-[44px]
                    px-5
                    rounded-full
                    bg-white
                    text-[#2B4E66]
                    text-[12px]
                    font-semibold
                    overflow-hidden
                    shadow-[0_10px_30px_rgba(43,78,102,0.20)]
                    transition-all
                    duration-300
                    hover:bg-[#172F40]
                    hover:text-white
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  <span className="relative z-10">
                    Contact Us
                  </span>
                </Link>
              </motion.div>

            </div>

          </div>

        </div>
      </motion.header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>

        {mobileMenu && (
          <>

            {/* =========================
                BACKDROP
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
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


            {/* =========================
                MOBILE MENU
            ========================= */}

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

              {/* SOFT BACKGROUND */}

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


              {/* MENU CONTENT */}

              <div
                className="
                  relative
                  h-full
                  flex
                  flex-col
                  justify-between
                  overflow-y-auto
                  p-7
                "
              >

                {/* =========================
                    LINKS
                ========================= */}

                <div className="flex flex-col gap-3 mt-6">

                  {/* NORMAL LINKS */}

                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.href}
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
                      whileTap={{
                        scale: 0.98,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenu(false)}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          px-6
                          py-4
                          rounded-[22px]
                          bg-white/60
                          border
                          border-white/40
                          text-[#2B4E66]
                          text-[19px]
                          font-medium
                          transition-all
                          duration-300
                          hover:bg-[#2B4E66]
                          hover:text-white
                        "
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >

                        <span>
                          {item.name}
                        </span>

                        <span
                          className="
                            text-[22px]
                            opacity-40
                            group-hover:opacity-100
                            group-hover:translate-x-1
                            transition-all
                          "
                        >
                          →
                        </span>

                      </Link>
                    </motion.div>
                  ))}


                  {/* =================================================
                      MOBILE SERVICES
                  ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    className="
                      rounded-[22px]
                      border
                      border-white/40
                      bg-white/60
                      p-5
                    "
                  >

                    {/* SERVICES TITLE */}

                    <div className="mb-4 px-1">

                      <div className="flex items-center gap-3">

                        <span className="h-px w-7 bg-[#2B4E66]/25" />

                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.3em]
                            text-[#2B4E66]/45
                          "
                        >
                          Services
                        </p>

                      </div>

                    </div>


                    {/* SERVICE ITEMS */}

                    <div className="space-y-1">

                      {services.map((service, index) => (
                        <motion.div
                          key={service.href}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              0.3 + index * 0.07,
                          }}
                        >

                          <Link
                            href={service.href}
                            onClick={() =>
                              setMobileMenu(false)
                            }
                            className="
                              group
                              flex
                              items-center
                              gap-4
                              rounded-[17px]
                              px-3
                              py-3
                              transition-all
                              duration-300
                              hover:bg-[#2B4E66]
                            "
                          >

                            {/* NUMBER */}

                           


                            {/* TEXT */}

                            <div className="flex-1">

                              <p
                                className="
                                  text-[17px]
                                  text-[#2B4E66]
                                  transition-colors
                                  group-hover:text-white
                                "
                                style={{
                                  fontFamily:
                                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                                }}
                              >
                                {service.name}
                              </p>

                             

                            </div>


                            {/* ARROW */}

                            <span
                              className="
                                text-[#2B4E66]/30
                                transition-all
                                group-hover:translate-x-1
                                group-hover:text-white
                              "
                            >
                              →
                            </span>

                          </Link>

                        </motion.div>
                      ))}

                    </div>

                  </motion.div>

                </div>


                {/* =========================
                    CONTACT BUTTON
                ========================= */}

                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-6"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenu(false)}
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
                      transition-all
                      duration-300
                      hover:bg-[#172F40]
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    Contact Us
                  </Link>
                </motion.div>

              </div>

            </motion.div>

          </>
        )}

      </AnimatePresence>
    </>
  );
}