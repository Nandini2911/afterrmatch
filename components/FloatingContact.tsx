"use client";

const WHATSAPP_NUMBER = "919311821282";
const PHONE_NUMBER = "+919311821282";

export default function FloatingContact() {
  const whatsappMessage = encodeURIComponent(
    "Hi AFTERRMATCH, I would like to know more about your services."
  );

  return (
    <div
      className="
        fixed
        right-5
        bottom-6
        z-[9999]
        flex
        flex-col
        items-center
        gap-3
        sm:right-7
        sm:bottom-8
      "
    >

      {/* =========================
          WHATSAPP
      ========================= */}

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          contact-float
          group
          relative
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          border
          border-white/60
          bg-white/95
          text-[#2B4E66]
          shadow-[0_12px_35px_rgba(23,47,64,0.18)]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-105
          hover:bg-[#2B4E66]
          hover:text-white
          sm:h-[62px]
          sm:w-[62px]
        "
      >

        {/* OUTER DECORATIVE RING */}

        <span
          className="
            pointer-events-none
            absolute
            inset-[-5px]
            rounded-full
            border
            border-[#2B4E66]/10
            transition-all
            duration-500
            group-hover:inset-[-8px]
            group-hover:border-[#2B4E66]/25
          "
        />

        {/* ICON BACKGROUND */}

        <span
          className="
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#F3F6F8]
            transition-all
            duration-500
            group-hover:bg-white/10
          "
        >

          {/* WHATSAPP ICON */}

          <svg
            viewBox="0 0 24 24"
            className="
              h-[19px]
              w-[19px]
              transition-transform
              duration-500
              group-hover:scale-110
            "
            fill="currentColor"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.3-1.65a11.86 11.86 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.06 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.74.98 1-3.65-.23-.37a9.84 9.84 0 1 1 8.36 4.62Zm5.4-7.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
          </svg>

        </span>

        {/* LABEL */}

        <span
          className="
            pointer-events-none
            absolute
            right-[72px]
            whitespace-nowrap
            rounded-full
            border
            border-[#2B4E66]/10
            bg-white
            px-4
            py-2.5
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-[#2B4E66]
            opacity-0
            shadow-xl
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
            translate-x-2
          "
        >
          WhatsApp
        </span>

      </a>


      {/* =========================
          CALL
      ========================= */}

      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call AFTERRMATCH"
        className="
          group
          relative
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#2B4E66]
          text-white
          shadow-[0_12px_35px_rgba(23,47,64,0.25)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-105
          hover:bg-[#172F40]
          sm:h-[62px]
          sm:w-[62px]
        "
      >

        {/* OUTER RING */}

        <span
          className="
            pointer-events-none
            absolute
            inset-[-5px]
            rounded-full
            border
            border-[#2B4E66]/15
            transition-all
            duration-500
            group-hover:inset-[-8px]
            group-hover:border-[#2B4E66]/30
          "
        />

        {/* ICON BACKGROUND */}

        <span
          className="
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/10
            transition-all
            duration-500
            group-hover:bg-white/15
          "
        >

          {/* PHONE ICON */}

          <svg
            viewBox="0 0 24 24"
            className="
              h-[18px]
              w-[18px]
              transition-transform
              duration-500
              group-hover:rotate-12
              group-hover:scale-110
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path
              d="
                M22 16.92v3
                a2 2 0 0 1-2.18 2
                19.79 19.79 0 0 1-8.63-3.07
                19.5 19.5 0 0 1-6-6
                A19.79 19.79 0 0 1 2.12 4.2
                A2 2 0 0 1 4.11 2h3
                a2 2 0 0 1 2 1.72
                c.12.9.33 1.78.62 2.63
                a2 2 0 0 1-.45 2.11L8 9.73
                a16 16 0 0 0 6 6l1.27-1.27
                a2 2 0 0 1 2.11-.45
                c.85.29 1.73.5 2.63.62
                A2 2 0 0 1 22 16.92Z
              "
            />
          </svg>

        </span>

        {/* LABEL */}

        <span
          className="
            pointer-events-none
            absolute
            right-[72px]
            whitespace-nowrap
            rounded-full
            bg-[#172F40]
            px-4
            py-2.5
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-white/90
            opacity-0
            shadow-xl
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
            translate-x-2
          "
        >
          Call Us
        </span>

      </a>

    </div>
  );
}