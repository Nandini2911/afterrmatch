"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";

import Hero from "@/components/home page/Hero";
import Slider from "@/components/home page/Slider";
import MeetThePros from "@/components/home page/MeetThePros";
import AmenitiesSection from "@/components/home page/AmenitiesSection";
import BecomeMemberSticky from "@/components/home page/BecomeMemberSticky";

export default function Home() {
  const [showSplash, setShowSplash] =
    useState(false);

  useEffect(() => {
    const hasSeenSplash =
      sessionStorage.getItem(
        "aftermatch-splash"
      );

    if (!hasSeenSplash) {
      setShowSplash(true);

      sessionStorage.setItem(
        "aftermatch-splash",
        "true"
      );

      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 4800);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <SplashScreen />

      <main
        className={`
          bg-black
          transition-all
          duration-[2500ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            showSplash
              ? "opacity-0 scale-[1.06]"
              : "opacity-100 scale-100"
          }
        `}
      >
        <Navbar />
        <Hero />
        <Slider />
        <MeetThePros />
        <AmenitiesSection />
        <BecomeMemberSticky />
        <Footer />
      </main>
    </>
  );
}