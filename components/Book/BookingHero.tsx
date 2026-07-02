"use client";

export default function BookingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/book page.png"
          alt="Booking Background"
          className="h-full w-full object-cover scale-105 animate-slowZoom"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2B4E66]/30 blur-3xl animate-float" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-floatDelay" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          justify-center
          lg:justify-start
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Card */}
        <div
          className="
            w-full
            max-w-[340px]
            sm:max-w-[360px]
            animate-fadeUp
          "
        >
          <div
            className="
              rounded-[28px]
              border
              border-white/20
              bg-[#0f1720]/40
              p-5
              backdrop-blur-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
          >
            {/* Header */}
            <div className="mb-5 text-center">
              <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
                Instant Booking
              </p>

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  leading-[0.95]
                  font-semibold
                  text-white
                "
                style={{
                  fontFamily:
                    '"Cormorant Garamond", serif',
                }}
              >
                Book Your
                <br />
                Match
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Reserve your PS5 lounge or pool
                table instantly.
              </p>
            </div>

            {/* Inner Card */}
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.08]
                p-4
                backdrop-blur-xl
              "
            >
              {/* Badge */}
              <div className="mb-5 flex justify-center">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-green-500/15
                    px-3
                    py-1.5
                    text-xs
                    text-green-300
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Available Now
                </div>
              </div>

              {/* Icon */}
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-4xl
                "
              >
                💬
              </div>

              {/* Title */}
              <h2
                className="
                  text-center
                  text-2xl
                  font-semibold
                  text-white
                "
                style={{
                  fontFamily:
                    '"Cormorant Garamond", serif',
                }}
              >
                WhatsApp Booking
              </h2>

              <p className="mt-3 text-center text-sm leading-relaxed text-white/70">
                Connect directly on WhatsApp and
                reserve your preferred slot.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
  {/* PS5 Lounge */}
  <a
    href={`https://wa.me/918376923453?text=${encodeURIComponent(
      `🎮 NEW PS5 LOUNGE BOOKING REQUEST

Hello After Match Team,

I would like to reserve a PS5 Lounge slot.

📅 Preferred Date:
⏰ Preferred Time:
👤 Name:
📞 Contact Number:
👥 Number of Players:

Please confirm availability and booking details.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex
      flex-col
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/10
      p-4
      text-white
      transition-all
      duration-300
      hover:bg-[#25D366]/20
      hover:border-[#25D366]/60
      hover:shadow-lg
      hover:shadow-[#25D366]/20
      hover:scale-105
    "
  >
    <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
      🎮
    </span>

    <span className="mt-2 text-center text-sm font-semibold">
      Book PS5 Lounge
    </span>

    <span className="mt-1 text-[11px] text-white/60 group-hover:text-green-300">
      WhatsApp Booking
    </span>
  </a>

  {/* Pool Table */}
  <a
    href={`https://wa.me/918376923453?text=${encodeURIComponent(
      `🎱 NEW POOL TABLE BOOKING REQUEST

Hello After Match Team,

I would like to reserve a Pool Table slot.

📅 Preferred Date:
⏰ Preferred Time:
👤 Name:
📞 Contact Number:
👥 Number of Players:

Please confirm availability and booking details.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex
      flex-col
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/10
      p-4
      text-white
      transition-all
      duration-300
      hover:bg-[#25D366]/20
      hover:border-[#25D366]/60
      hover:shadow-lg
      hover:shadow-[#25D366]/20
      hover:scale-105
    "
  >
    <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
      🎱
    </span>

    <span className="mt-2 text-center text-sm font-semibold">
      Book Pool Table
    </span>

    <span className="mt-1 text-[11px] text-white/60 group-hover:text-green-300">
      WhatsApp Booking
    </span>
  </a>
</div>


              <p className="mt-3 text-center text-[11px] text-white/40">
                Typically replies within a few minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
