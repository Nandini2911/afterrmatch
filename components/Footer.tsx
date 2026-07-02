"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Membership", href: "/membership" },
  { label: "Book", href: "/book" },
  { label: "Events", href: "/events" },
];

const socials = [
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/afterrmatch?igsh=MWx4NjBjYjQ3bjV5MA==",
    external: true,
  },
  {
    label: "Email",
    icon: MdEmail,
    href: "mailto:info@afterrmatch.com",
    external: false,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleJoinCommunity = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      if (!response.ok) {
        alert("Failed to join community");
        return;
      }

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setEmail("");

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        alert("Failed to join community");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#dbe5eb] bg-white">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#2B4E66]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#2B4E66]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-16">
        <div className="grid gap-14 border-b border-[#dbe5eb] pb-16 lg:grid-cols-[1.2fr_.8fr_1fr] lg:gap-20">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block no-underline">
              <h2
                className="text-3xl font-light tracking-[0.15em] text-[#2B4E66] transition-all duration-500 hover:tracking-[0.2em] sm:text-4xl"
                style={{
                  fontFamily:
                    '"Cormorant Garamond", ui-serif, Georgia, serif',
                }}
              >
                AFTERRMATCH
              </h2>
            </Link>

            <p className="mt-6 max-w-md font-light leading-[1.9] text-[#5b7283]">
              Built for a community that embraces athletic elegance, elevated
              experiences, and the spirit of modern lifestyle.
            </p>

            <Link
              href="/membership"
              className="group relative mt-8 inline-flex overflow-hidden rounded-full border border-[#2B4E66] px-8 py-4 text-sm uppercase tracking-[0.25em] text-[#2B4E66] no-underline transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-2">
                Become a Member
                <ArrowRight size={16} />
              </span>

              <span className="absolute inset-0 translate-y-full bg-[#2B4E66] transition-transform duration-500 group-hover:translate-y-0" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.4em] text-[#2B4E66]">
              Navigation
            </h3>

            <ul className="space-y-5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group relative inline-block text-[16px] font-light text-[#2B4E66] no-underline"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#2B4E66] transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.4em] text-[#2B4E66]">
              Stay Connected
            </h3>

            <div className="rounded-3xl border border-[#dbe5eb] bg-gradient-to-br from-[#f7fafc] to-white p-7">
              <p className="mb-6 font-light leading-[1.9] text-[#5b7283]">
                Join the newsletter and receive exclusive updates, events and
                member experiences.
              </p>

              <form onSubmit={handleJoinCommunity} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-[#cfdbe3] bg-white px-6 py-4 outline-none transition-all focus:border-[#2B4E66]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#2B4E66] py-4 text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#1f3c50] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Joining..." : "Join Community"}
                </button>

                {success && (
                  <div className="mt-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm text-green-700">
                    ✓ Your request has been sent successfully. Welcome to the
                    Afterrmatch Community.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Premium Bottom Bar */}
        <div className="pt-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#dbe5eb] bg-white/75 px-6 py-6 shadow-[0_24px_80px_rgba(43,78,102,0.08)] backdrop-blur-xl sm:px-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#2B4E66]/5 via-transparent to-[#2B4E66]/5" />

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-center text-sm tracking-wide text-[#7c93a3] md:text-left">
                © 2026{" "}
                <span className="font-medium tracking-[0.15em] text-[#2B4E66]">
                  AFTERRMATCH
                </span>
                . All rights reserved.
              </p>

              <a
                href="https://dtsworld.in"
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
                className="group rounded-full border border-[#dbe5eb] bg-white px-5 py-3 text-[#2B4E66] no-underline shadow-[0_12px_40px_rgba(43,78,102,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2B4E66]/40 hover:bg-[#f7fafc]"
              >
                <span className="block text-center text-[11px] uppercase tracking-[0.32em] text-[#7c93a3]">
                  Developed by{" "}
                  <span className="ml-1 font-semibold tracking-[0.28em] text-[#2B4E66] transition-all duration-500 group-hover:tracking-[0.32em]">
                    Double Trouble Studio
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? "_blank" : undefined}
                      rel={social.external ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      suppressHydrationWarning
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe5eb] bg-white text-[#2B4E66] no-underline shadow-[0_10px_30px_rgba(43,78,102,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2B4E66] hover:bg-[#2B4E66]"
                    >
                      <Icon
                        size={18}
                        className="transition-colors duration-500 group-hover:text-white"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}