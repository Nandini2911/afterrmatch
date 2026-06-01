"use client";

export default function BookingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/book page.png"
          alt="Booking Background"
          className="h-full w-full object-cover scale-105 animate-slowZoom"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Floating Glow */}
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2B4E66]/30 blur-3xl animate-float" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-floatDelay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-20 w-full max-w-md animate-fadeUp">
          <div
            className="
              rounded-[32px]
              border
              border-white/20
              bg-white/10
              p-6
              backdrop-blur-2xl
              shadow-2xl
              sm:p-7
            "
          >
            {/* Header */}
            <div className="mb-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
                Reserve Now
              </p>

              <h1
                className="text-4xl font-semibold text-white"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                Book Your Match
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Reserve your PS5 lounge or pool table instantly.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  text-sm
                  text-white
                  placeholder:text-white/50
                  outline-none
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:bg-white/15
                  hover:border-white/40
                  focus:border-white/50
                  focus:scale-[1.01]
                "
              />

              <input
                type="tel"
                placeholder="Contact Number"
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  text-sm
                  text-white
                  placeholder:text-white/50
                  outline-none
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:bg-white/15
                  hover:border-white/40
                  focus:border-white/50
                  focus:scale-[1.01]
                "
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  className="
                    h-12
                    w-full
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:bg-white/15
                    hover:border-white/40
                    focus:border-white/50
                  "
                />

                <input
                  type="time"
                  className="
                    h-12
                    w-full
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:bg-white/15
                    hover:border-white/40
                    focus:border-white/50
                  "
                />
              </div>

              <select
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  text-sm
                  text-white
                  outline-none
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:bg-white/15
                  hover:border-white/40
                  focus:border-white/50
                "
              >
                <option className="text-black">
                  Select Experience
                </option>

                <option className="text-black">
                  PS5 Lounge
                </option>

                <option className="text-black">
                  Pool Table
                </option>
              </select>

              {/* Button */}
              <button
                type="submit"
                className="
                  group
                  relative
                  mt-2
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  text-sm
                  font-medium
                  tracking-wide
                  text-[#2B4E66]
                  transition-all
                  duration-500
                  hover:scale-[1.03]
                "
              >
                <span className="relative z-10">
                  Book Now
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/80
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-full
                  "
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}