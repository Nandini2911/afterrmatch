"use client";

const DISTRICT_BOOKING_URL =
  "https://www.district.in/play/afterrmatch-afterrmatch-greater-noida-slots-booking";

const PS5_WHATSAPP_URL = `https://wa.me/918376923453?text=${encodeURIComponent(
  `🎮 NEW PS5 LOUNGE BOOKING REQUEST

Hello After Match Team,

I would like to reserve a PS5 Lounge slot.

📅 Preferred Date:
⏰ Preferred Time:
👤 Name:
📞 Contact Number:
👥 Number of Players:

Please confirm availability and booking details.`
)}`;

const PICKLEBALL_WHATSAPP_URL = `https://wa.me/918376923453?text=${encodeURIComponent(
  `🏓 NEW PICKLEBALL BOOKING REQUEST

Hello After Match Team,

I would like to reserve a Pickleball slot.

📅 Preferred Date:
⏰ Preferred Time:
👤 Name:
📞 Contact Number:
👥 Number of Players:

Please confirm availability and booking details.`
)}`;

export default function BookingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/book page.png"
          alt="Afterrmatch booking background"
          className="h-full w-full scale-105 object-cover animate-slowZoom"
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
          px-4
          py-10
          sm:px-6
          lg:justify-start
          lg:px-8
          lg:py-12
        "
      >
        {/* Main Card */}
        <div className="w-full max-w-[580px] animate-fadeUp">
          <div
            className="
              rounded-[28px]
              border
              border-white/20
              bg-[#0f1720]/45
              p-4
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              sm:p-5
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
                  font-semibold
                  leading-[0.95]
                  text-white
                  sm:text-4xl
                "
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                Book Your
                <br />
                Match
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Reserve your PS5 lounge, pool table or pickleball slot
                instantly.
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
              {/* Availability Badge */}
              <div className="mb-5 flex justify-center">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-green-400/20
                    bg-green-500/10
                    px-3
                    py-1.5
                    text-xs
                    text-green-300
                  "
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  Available Now
                </div>
              </div>

              {/* Main Icon */}
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
                  border
                  border-white/10
                  bg-white/10
                  text-4xl
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                "
              >
                🎟️
              </div>

              <h2
                className="text-center text-2xl font-semibold text-white"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                Online Slot Booking
              </h2>

              <p className="mt-3 text-center text-sm leading-relaxed text-white/70">
                Select your preferred activity and continue with the booking.
              </p>

              {/* Booking Options */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* PS5 Lounge */}
                <div
                  className="
                    flex
                    min-h-[220px]
                    flex-col
                    items-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.07]
                    p-3
                    text-center
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.1]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/10
                      text-2xl
                    "
                  >
                    🎮
                  </div>

                  <h3 className="mt-3 text-sm font-semibold leading-tight text-white">
                    Book PS5 Lounge
                  </h3>

                  <p className="mt-2 text-[10px] leading-relaxed text-white/50">
                    Connect with our team and confirm your gaming slot.
                  </p>

                  <a
                    href={PS5_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book PS5 Lounge through WhatsApp"
                    className="
                      group
                      mt-auto
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-1.5
                      rounded-xl
                      border
                      border-[#25D366]/30
                      bg-[#25D366]/15
                      px-3
                      py-2.5
                      text-[11px]
                      font-semibold
                      text-green-300
                      transition-all
                      duration-300
                      hover:border-[#25D366]/60
                      hover:bg-[#25D366]
                      hover:text-white
                      hover:shadow-[0_8px_25px_rgba(37,211,102,0.25)]
                    "
                  >
                    Book Now
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Pool Table */}
                <div
                  className="
                    flex
                    min-h-[220px]
                    flex-col
                    items-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.07]
                    p-3
                    text-center
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.1]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/10
                      text-2xl
                    "
                  >
                    🎱
                  </div>

                  <h3 className="mt-3 text-sm font-semibold leading-tight text-white">
                    Book Pool Table
                  </h3>

                  <p className="mt-2 text-[10px] leading-relaxed text-white/50">
                    Choose your preferred date and time through District.
                  </p>

                  <a
                    href={DISTRICT_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book Pool Table on District"
                    className="
                      group
                      mt-auto
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-1.5
                      rounded-xl
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-2.5
                      text-[11px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:border-white/40
                      hover:bg-white
                      hover:text-[#0f1720]
                      hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                    "
                  >
                    Book Now
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Pickleball */}
                <div
                  className="
                    flex
                    min-h-[220px]
                    flex-col
                    items-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.07]
                    p-3
                    text-center
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.1]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/10
                      text-2xl
                    "
                  >
                    🏓
                  </div>

                  <h3 className="mt-3 text-sm font-semibold leading-tight text-white">
                    Book Pickleball
                  </h3>

                  <p className="mt-2 text-[10px] leading-relaxed text-white/50">
                    Connect with our team and reserve your court slot.
                  </p>

                  <a
                    href={PICKLEBALL_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book Pickleball through WhatsApp"
                    className="
                      group
                      mt-auto
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-1.5
                      rounded-xl
                      border
                      border-[#25D366]/30
                      bg-[#25D366]/15
                      px-3
                      py-2.5
                      text-[11px]
                      font-semibold
                      text-green-300
                      transition-all
                      duration-300
                      hover:border-[#25D366]/60
                      hover:bg-[#25D366]
                      hover:text-white
                      hover:shadow-[0_8px_25px_rgba(37,211,102,0.25)]
                    "
                  >
                    Book Now
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              <p className="mt-4 text-center text-[11px] text-white/40">
                Select an activity to continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}