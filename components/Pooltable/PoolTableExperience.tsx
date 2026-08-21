"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

const experiences = [
  {
    
    title: "Focus & Energy",
    description:
      "A relaxed atmosphere where every frame feels focused, social and exciting.",
    tag: "Feel the game",
  },
  {
   
    title: "Beginner Friendly",
    description:
      "You don't need to be an expert. Pick up a cue and enjoy the game from your very first session.",
    tag: "Start anywhere",
  },
  {
    
    title: "Bring Your People",
    description:
      "Play with friends, challenge each other and turn a simple game into a great memory.",
    tag: "Better together",
  },
  {
   
    title: "Easy Booking",
    description:
      "Choose your preferred time and reserve your table without unnecessary hassle.",
    tag: "Your time",
  },
  {
   
    title: "Just Have Fun",
    description:
      "Come for a casual game, stay for the atmosphere and leave wanting another round.",
    tag: "Play your way",
  },
];

type Experience = (typeof experiences)[number];

function ExperienceRow({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const rowRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  const fromLeft = index % 2 === 0;

  useEffect(() => {
    const row = rowRef.current;

    if (!row) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(row);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={rowRef}
      className={`
        group
        relative
        overflow-hidden
        border-t
        border-[#29495E]/10

        transition-all
        duration-[1100ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          show
            ? "translate-x-0 opacity-100"
            : fromLeft
              ? "-translate-x-[90px] opacity-0"
              : "translate-x-[90px] opacity-0"
        }
      `}
    >
      {/* HOVER BACKGROUND */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          bg-[#29495E]

          transition-transform
          duration-[650ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            fromLeft
              ? "origin-left scale-x-0"
              : "origin-right scale-x-0"
          }

          lg:group-hover:scale-x-100
        `}
      />

      {/* BACKGROUND NUMBER */}

      

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          mx-auto
          grid
          w-full
          max-w-[1400px]

          gap-5

          px-5
          py-8

          sm:px-8
          sm:py-9

          md:grid-cols-[55px_1fr]
          md:gap-6
          md:px-10
          md:py-10

          lg:grid-cols-[65px_1fr_330px_50px]
          lg:items-center
          lg:gap-8
          lg:px-14
          lg:py-11

          xl:px-16
        "
      >
        {/* NUMBER */}

        <div
          className="
            flex
            items-center
            gap-2.5

            transition-transform
            duration-500

            lg:group-hover:translate-x-1
          "
        >
         

          <span
            className="
              h-px
              w-5

              bg-[#29495E]/20

              transition-all
              duration-500

              lg:group-hover:w-8
              lg:group-hover:bg-white/25
            "
          />
        </div>

        {/* TITLE */}

        <div>
          <span
            className="
              mb-2
              block

              text-[7px]
              uppercase
              tracking-[0.36em]
              text-[#29495E]/35

              transition-all
              duration-500

              lg:group-hover:translate-x-2
              lg:group-hover:text-white/45
            "
          >
            {experience.tag}
          </span>

          <h3
            className="
              text-[2rem]
              leading-[0.95]
              tracking-[-0.035em]
              text-[#29495E]

              transition-all
              duration-500

              sm:text-[2.3rem]

              md:text-[2.6rem]

              lg:text-[2.8rem]

              xl:text-[3rem]

              lg:group-hover:translate-x-2
              lg:group-hover:text-white
            "
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >
            {experience.title}
          </h3>
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            max-w-md

            text-[10px]
            leading-5
            text-[#29495E]/50

            transition-all
            duration-500

            sm:text-[11px]
            sm:leading-6

            md:col-start-2

            lg:col-start-auto
            lg:text-xs

            lg:group-hover:-translate-x-1
            lg:group-hover:text-white/60
          "
        >
          {experience.description}
        </p>

        {/* ARROW */}

       
          
      
      </div>
    </article>
  );
}

export default function PoolTableExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [headerVisible, setHeaderVisible] =
    useState(false);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    setMouse({
      x:
        ((event.clientX - rect.left) /
          rect.width) *
        100,
      y:
        ((event.clientY - rect.top) /
          rect.height) *
        100,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        w-full
        overflow-hidden
      
        text-[#29495E]
      "
    >
      {/* CURSOR MOVEMENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          lg:block
        "
        style={{
          background: `radial-gradient(
            420px circle at ${mouse.x}% ${mouse.y}%,
            rgba(41,73,94,0.07),
            transparent 62%
          )`,
        }}
      />

      {/* BACKGROUND DETAILS */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[7%]
            top-0
            h-full
            w-px
            bg-[#29495E]/[0.035]
          "
        />

        <div
          className="
            absolute
            right-[7%]
            top-0
            h-full
            w-px
            bg-[#29495E]/[0.035]
          "
        />

        <div
          className="
            absolute
            -right-32
            top-24

            h-[280px]
            w-[280px]

            rounded-full
            border
            border-[#29495E]/5

            sm:h-[360px]
            sm:w-[360px]
          "
        />
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1400px]

          px-5
          pb-14
          pt-16

          sm:px-8
          sm:pb-16
          sm:pt-20

          md:px-10

          lg:px-14
          lg:pb-20
          lg:pt-24

          xl:px-16
        "
      >
        {/* TOP LABEL */}

        

        {/* HERO */}

        <div
          className="
            grid
            gap-8

            pt-10

            md:pt-12

            lg:grid-cols-[1fr_300px]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
          

            <div className="overflow-hidden">
              <h2
                className={`
                  text-[2.8rem]
                  leading-[0.85]
                  tracking-[-0.045em]

                  transition-all
                  duration-[1300ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  sm:text-[3.6rem]

                  md:text-[4.3rem]

                  lg:text-[5rem]

                  xl:text-[5.5rem]

                  ${
                    headerVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }
                `}
                style={{
                  fontFamily:
                    '"Cormorant Garamond", serif',
                  fontWeight: 400,
                }}
              >
                The little things
                <br />

                <span
                  className="
                    italic
                    text-[#29495E]/25
                  "
                >
                  make the difference.
                </span>
              </h2>
            </div>
          </div>

          <div
            className={`
              transition-all
              delay-300
              duration-1000

              ${
                headerVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <p
              className="
                max-w-sm
                text-[11px]
                leading-6
                text-[#29495E]/50

                sm:text-xs
              "
            >
              Everything comes together to make your
              time on the table feel effortless,
              social and worth coming back to.
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
              "
            >
              

              
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ROWS
      ===================================================== */}

      <div className="relative z-10">
        {experiences.map((experience, index) => (
          <ExperienceRow
       
            experience={experience}
            index={index}
          />
        ))}

        <div
          className="
            border-t
            border-[#29495E]/10
          "
        />
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          flex
          w-full
          max-w-[1400px]

          flex-col
          gap-7

          px-5
          py-14

          sm:px-8
          sm:py-16

          md:flex-row
          md:items-end
          md:justify-between
          md:px-10

          lg:px-14
          lg:py-20

          xl:px-16
        "
      >
        <div>
          

          <h3
            className="
              mt-4

              text-[2.4rem]
              leading-[0.9]
              tracking-[-0.04em]

              sm:text-[3rem]

              md:text-[3.4rem]

              lg:text-[3.8rem]
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", serif',
              fontWeight: 400,
            }}
          >
            Come for the game.
            <br />

            <span
              className="
                italic
                text-[#29495E]/25
              "
            >
              Stay for the atmosphere.
            </span>
          </h3>
        </div>

        
      </div>
    </section>
  );
}