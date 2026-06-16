"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // PREMIUM SMOOTH EFFECTS

  const titleScale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.12]
  );

  const titleOpacity = useTransform(
    scrollY,
    [0, 400],
    [1, 0]
  );

  const titleY = useTransform(
    scrollY,
    [0, 500],
    [0, 60]
  );

  const videoScale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.04]
  );

  return (
    <section className="relative bg-white">
      {/* HERO */}

      <div
        className="
          relative
          overflow-hidden
          px-3
          sm:px-4
          pt-[88px]
          sm:pt-[95px]
          md:pt-[105px]
        "
      >
        {/* VIDEO CONTAINER */}

        <motion.div
          style={{
            scale: videoScale,
          }}
          className="
            relative
            mx-auto
            h-[100vh]
            sm:h-[100vh]
            md:h-[100vh]
            max-w-[1850px]
            overflow-hidden
            rounded-[18px]
            sm:rounded-[24px]
            md:rounded-[30px]
            border
            border-white/10
          "
        >
          {/* VIDEO */}

          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          >
            <source
              src="intro.mp4"
              type="video/mp4"
            />
          </video>

         

          {/* GRAIN */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.06]
              mix-blend-soft-light
            "
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-20
              flex
              h-full
              flex-col
              items-center
              justify-center
              px-4
              sm:px-6
              text-center
            "
          >
            {/* TITLE */}

          

           {/* BUTTONS */}

<motion.div
  style={{
    opacity: titleOpacity,
    y: titleY,
  }}
  className="
    mt-20
  
    flex
    flex-col
    sm:flex-row
    items-center
    justify-center
    gap-2.5
    sm:gap-4
    w-full
    max-w-[390px]
    mx-auto
  "
>
  <button
    className="
      h-[44px]
      
      md:h-[44px]

      w-[44%]
  

    

      rounded-full
      border
      border-white/15

      bg-white
     

   

      text-[14px]
      
      md:text-[14px]

      font-[500]
      text-black

     

      transition-all
      duration-500

      hover:bg-[#2b4E66]
      hover:border-white
      hover:scale-[1.02]

      active:scale-[0.98]
    "
    style={{
      fontFamily:
        '"Cormorant Garamond", ui-serif, Georgia, serif',
    }}
  >
    <a href="/book">
  Book a Court
</a>
  </button>

   <button
    className="
      h-[44px]
      
      md:h-[44px]

    
  


      rounded-full
      border
      border-white/15

      bg-white
     

      px-5
      sm:px-7

      text-[12px]
      
      md:text-[14px]

      font-[500]
      text-black

     

      transition-all
      duration-500

      hover:bg-[#2b4E66]
      hover:border-white/30
      hover:scale-[1.02]

      active:scale-[0.98]
    "
    style={{
      fontFamily:
        '"Cormorant Garamond", ui-serif, Georgia, serif',
    }}
  >
    <a href="/membership">Become a Member</a>
  </button>

</motion.div>

            

           
          </div>
        </motion.div>
      </div>

      {/* THE LATEST */}

    
    </section>
  );
}