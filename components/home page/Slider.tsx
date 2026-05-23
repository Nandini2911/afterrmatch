"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Paddle",
    text:
      "Private Lessons offer one-on-one instruction with our professional coaches, tailored to your level and focused on refining technique, strategy, and overall performance on court.",
    button: "Inquire Today",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cafe",
    text:
      "Private Lessons offer one-on-one instruction with our professional coaches, tailored to your level and focused on refining technique, strategy, and overall performance on court.",
    button: "Inquire Today",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "PS5 Lounge",
    text:
      "Private Lessons offer one-on-one instruction with our professional coaches, tailored to your level and focused on refining technique, strategy, and overall performance on court.",
    button: "Inquire Today",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2200&auto=format&fit=crop",
  },
];

export default function Slider() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section
        className="
          relative

          md:h-[200vh]

          bg-[#ECE9E1]
        "
      >
        {/* STICKY CONTAINER */}

        <div
          className="
            md:sticky
            md:top-0

            min-h-screen

            overflow-hidden
          "
        >
          <div
            className="
              min-h-screen

              flex
              items-center
              justify-center

              px-6
              sm:px-10
              md:px-16
              lg:px-24

              bg-white
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-center
                max-w-[1100px]
              "
            >
              {/* EYEBROW */}

              <p
                style={{
                  fontFamily:
                    '"Cormorant Garamond", serif',
                }}
                className="
                  text-[16px]
                  sm:text-[20px]
                  md:text-[24px]
                 

                  uppercase

                  tracking-[4px]

                  text-[#2B4E66]

                  mb-6
                "
              >
                RESERVE CUP RETURNS TO
              </p>

              {/* TITLE */}

              <h1
                style={{
                  fontFamily:
                    '"Cormorant Garamond", serif',
                }}
                className="
                  text-[46px]
                 
                  md:text-[50px]
               

                  leading-[0.9]

                  tracking-[-4px]

                  uppercase

                  text-[#2B4E66]

                  mb-10
                "
              >
                PUENTE ROMANO MARBELLA
              </h1>

              {/* DESCRIPTION */}

              <div
                className="
                  space-y-7

                  max-w-[950px]

                  mx-auto
                "
              >
                <p
                  className="
                    text-[18px]
                
                    md:text-[22px]
                  

                    leading-[1.1]

                    text-[#2B4E66]
                  "
                >
                  Presented by Sierra Blanca Estates, the
                  2026 edition of Reserve Cup Marbella
                  marks the next chapter in the evolution
                  of the global Reserve Cup Series.
                </p>

                <p
                  className="
                    text-[18px]
                    sm:text-[22px]
                    md:text-[26px]
                    lg:text-[30px]

                    leading-[1.5]

                    text-[#2B4E66]/85
                  "
                >
                  The event brings together the world's
                  top padel players for elite competition
                  and hospitality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COVER SECTION ================= */}

      {sections.map((section, index) => (
        <section
          key={section.id}
          className="
            relative

            min-h-screen

            bg-[#2B4E66]

            overflow-hidden

            z-20
          "
          style={{
            marginTop:
              index === 0 ? "-100vh" : "0",
          }}
        >
          <div
            className="
              md:sticky
              md:top-0

              min-h-screen
              w-full
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="
                min-h-screen
                w-full
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-[52%_48%]

                  min-h-screen
                "
              >
                {/* LEFT IMAGE */}

                <div
                  className="
                    relative

                    h-[50vh]
                    sm:h-[60vh]
                    md:h-screen

                    p-4
                    sm:p-5
                    md:p-6
                    lg:p-8
                  "
                >
                  <div
                    className="
                      relative

                      h-full
                      w-full

                      overflow-hidden
                    "
                  >
                    <motion.img
                      src={section.image}
                      alt=""
                      initial={{
                        scale: 1.08,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 1.2,
                      }}
                      className="
                        absolute
                        inset-0

                        h-full
                        w-full

                        object-cover
                      "
                    />
                  </div>
                </div>

                {/* RIGHT CONTENT */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center

                    bg-[#2B4E66]

                    px-6
                    sm:px-10
                    md:px-12
                    lg:px-16
                    xl:px-20

                    py-8
                    sm:py-10
                    lg:py-12

                    text-white
                  "
                >
                  <h2
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", serif',
                    }}
                    className="
                      text-[22px]
                      leading-[1.2]

                      sm:text-[32px]
                      md:text-[36px]

                      tracking-[-2px]

                      mb-5
                    "
                  >
                    {section.title}
                  </h2>

                  <p
                    className="
                      text-[16px]
                      sm:text-[18px]
                      lg:text-[20px]

                      leading-[1.8]

                      text-white/80

                      max-w-[620px]
                    "
                  >
                    {section.text}
                  </p>

                  <div className="mt-8">
                    <button
                      className="
                        h-[34px]

                        px-5

                        rounded-full

                        border
                        border-white

                        text-[16px]

                        transition-all
                        duration-500

                        hover:bg-white
                        hover:text-black
                      "
                    >
                      {section.button}
                    </button>
                  </div>

                  {/* BOTTOM IMAGE */}

                  <div className="mt-10">
                    <div
                      className="
                        relative

                        overflow-hidden

                        h-[120px]
                        sm:h-[180px]
                        md:h-[200px]

                        w-full
                      "
                    >
                      <img
                        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1800&auto=format&fit=crop"
                        alt=""
                        className="
                          h-full
                          w-full

                          object-cover

                          transition-transform
                          duration-700

                          hover:scale-110
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}