"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
   
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";


const navLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Membership", href: "/membership" },
  { label: "Book", href: "/book" },
  { label: "Events", href: "/events" },
];
const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
  },
  {
    icon: MdEmail,
    href: "mailto:hello@afttermatch.com",
  },
];
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#dbe5eb] bg-white">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#2B4E66]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#2B4E66]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-[1.2fr_.8fr_1fr] gap-14 lg:gap-20 border-b border-[#dbe5eb] pb-16">
          
          {/* Brand */}
          <div>
            <Link href="/">
              <h2
                className="text-3xl sm:text-4xl font-light tracking-[0.15em] text-[#2B4E66] transition-all duration-500 hover:tracking-[0.2em]"
                style={{
                  fontFamily:
                    '"Cormorant Garamond", ui-serif, Georgia, serif',
                }}
              >
                AFTERRMATCH
              </h2>
            </Link>

            <p className="mt-6 max-w-md text-[#5b7283] leading-[1.9] font-light">
              Built for a community that embraces athletic elegance,
              elevated experiences, and the spirit of modern lifestyle.
            </p>

            <Link href="/membership">
              <button className="group mt-8 relative overflow-hidden rounded-full border border-[#2B4E66] px-8 py-4 uppercase tracking-[0.25em] text-sm text-[#2B4E66] transition-all duration-500 hover:text-white">
                <span className="relative z-10 flex items-center gap-2">
                  Become a Member
                  <ArrowRight size={16} />
                </span>

                <div className="absolute inset-0 bg-[#2B4E66] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] text-[#2B4E66] mb-8">
              Navigation
            </h3>

            <ul className="space-y-5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group relative inline-block text-[#2B4E66] text-[16px] font-light"
                  >
                    {item.label}

                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#2B4E66] transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] text-[#2B4E66] mb-8">
              Stay Connected
            </h3>

            <div className="rounded-3xl border border-[#dbe5eb] bg-gradient-to-br from-[#f7fafc] to-white p-7">
              <p className="text-[#5b7283] leading-[1.9] font-light mb-6">
                Join the newsletter and receive exclusive updates,
                events and member experiences.
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-[#cfdbe3] bg-white px-6 py-4 outline-none focus:border-[#2B4E66] transition-all"
                />

                <button className="w-full rounded-full bg-[#2B4E66] py-4 text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#1f3c50]">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm tracking-wide text-[#7c93a3] text-center md:text-left">
            © 2026 AFTERRMATCH. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe5eb] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#2B4E66] hover:bg-[#2B4E66]"
                >
                  <Icon
                    size={18}
                    className="text-[#2B4E66] transition-colors duration-500 group-hover:text-white"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}