"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "PICKLE BALL",
    text:
     "The pickleball courts at Afterr Match are designed to create a fun, energetic, and community-driven sports experience. The space encourages both casual play and competitive matches while bringing people together through fitness and social interaction.",
    button: "Inquire Today",
    image:
      "/pickle.png",
  },
  
  {
    id: 2,
    title: "PS5 LOUNGE",
    text:
      "The PS5 lounge at Afterr Match is a premium gaming and entertainment zone designed for casual gamers and social groups. It creates an immersive space for multiplayer gaming, tournaments, and interactive experiences.",
    button: "Inquire Today",
    image:
      "/ps5.PNG",
  },
  {
    id: 3,
    title: "CAFE",
    text:
      "The café at Afterr Match offers a modern and relaxed environment for guests to unwind, socialize, and recharge. With a mix of comfort food, beverages, and aesthetic interiors, it complements the active lifestyle experience of the venue.",
    button: "Inquire Today",
    image:
      "/cafe.png",
  },
  {
    id: 4,
    title: "POOL TABLE",
    text:
      "The pool table area at Afterr Match adds a classic recreational touch to the venue, offering guests a stylish and relaxed space to unwind and engage in friendly competition.",
    button: "Inquire Today",
    image:
      "/pin.jpeg",
  },
   {
    id: 5,
    title: "LOUNGE DECK",
    text:
      "The Afterr Match Lounge Deck is a premium outdoor lifestyle space crafted for relaxation, social connection, and elevated experiences. Inspired by luxury sports clubs and modern social lounges, it offers a sophisticated atmosphere where members can unwind, connect, and enjoy the club beyond the game.",
    button: "Inquire Today",
    image:
      "/deck.jpg",
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
         
                  md:text-[40px]
                 
                  font-bold
                  uppercase

           

                  text-[#2B4E66]

                  mb-15
                "
              >
                AFTERRMATCH EXPERIENCE AWAITS
              </p>

              {/* TITLE */}

              

              {/* DESCRIPTION */}

              <div
                className="
                  space-y-7

                  max-w-[1000px]

            
                "
              >
                <p
                  className="
                    text-[18px]
                
                    md:text-[20px]
                  

                    leading-[1.1]

                    text-[#2B4E66]
                  "
                >
                  AFTERRMATCH is where sport, entertainment, and lifestyle come together in one elevated social destination. Designed for a new generation of players and creators, the space blends high-energy experiences with premium hospitality and modern culture.
                </p>

                <p
                  className="
                    text-[18px]
                    
                    md:text-[20px]
                 

                    leading-[1.1]

                    text-[#2B4E66]
                  "
                >
                 From competitive matches to relaxed social moments, every corner is built to inspire connection, movement, and unforgettable memories. More than a club, AFTERRMATCH is a community driven by energy, style, and the love of the game.
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
                  
                    md:h-[110vh]

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

                  
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}