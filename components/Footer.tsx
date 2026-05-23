"use client";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-[#dbe5eb]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#2B4E66]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2B4E66]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-b border-[#dbe5eb] pb-16">
          
          {/* Brand */}
          <div className="space-y-2">
            <div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-[.10em] text-[#2B4E66]"
                style={{
                  fontFamily:
                    '"Cormorant Garamond", ui-serif, Georgia, serif',
                }}
              >
                AFTERRMATCH
              </h2>
            </div>

            <p className="text-[#5b7283] text-[16px] leading-[1.9] max-w-md font-light">
              Built for a community that embraces athletic elegance,
              elevated experiences, and the spirit of modern lifestyle.
            </p>

            <button className="group relative overflow-hidden border border-[#2B4E66] rounded-full px-8 py-4 text-[#2B4E66] text-sm tracking-[0.28em] uppercase transition-all duration-500 hover:text-white">
              <span className="relative z-10">
                Become a Member
              </span>

              <div className="absolute inset-0 bg-[#2B4E66] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h3 className="text-[#2B4E66] text-xs tracking-[0.4em] uppercase mb-8 font-medium">
                Navigation
              </h3>

              <ul className="space-y-5">
                {[
                  "Our Story",
                  "Membership",
                  "Book",
                  "Clubs",
                  "Events",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#2B4E66] text-[16px] font-light hover:text-[#1f3c50] transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#2B4E66] text-xs tracking-[0.4em] uppercase mb-8 font-medium">
                Programs
              </h3>

              <ul className="space-y-5">
                {[
                  "Private Lessons",
                  "Women's Clinics",
                  "Junior Programs",
                  "Advanced Sessions",
                  "Reserve Courts",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#2B4E66] text-[16px] font-light hover:text-[#1f3c50] transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#2B4E66] text-xs tracking-[0.4em] uppercase mb-8 font-medium">
              Stay Connected
            </h3>

            <p className="text-[#5b7283] text-[16px] leading-[1.9] font-light mb-10 max-w-md">
              Join the newsletter and receive exclusive updates,
              events, and member experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-[#cfdbe3] rounded-full px-6 py-4 text-[#2B4E66] placeholder:text-[#8aa0af] outline-none focus:border-[#2B4E66] transition-all duration-300"
              />

              <button className="bg-[#2B4E66] hover:bg-[#1f3c50] text-white rounded-full px-10 py-4 text-sm tracking-[0.25em] uppercase transition-all duration-300 whitespace-nowrap">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          <p className="text-[#7c93a3] text-sm font-light tracking-wide text-center md:text-left">
            © 2026 AFTERRMATCH. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-10 flex-wrap justify-center">
            {["Instagram", "LinkedIn", "YouTube"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#6f8797] hover:text-[#2B4E66] text-sm tracking-[0.25em] uppercase transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}