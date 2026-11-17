import PS5Hero from "@/components/PS5/PS5Hero";
import PS5Intro from "@/components/PS5/PS5Intro";
import PS5Features from "@/components/PS5/PS5Features";
import PS5Experience from "@/components/PS5/PS5Experience";
import PS5CTA from "@/components/PS5/PS5CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PS5TrustFAQ from "@/components/PS5/PS5TrustFAQ";
import PS5SocialProof from "@/components/PS5/PS5SocialProof";
import PS5Pricing from "@/components/PS5/PS5Pricing";
import PS5HowItWorks from "@/components/PS5/PS5HowItWorks";

export default function PS5Page() {
  return (
    <main className="overflow-hidden">
<Navbar/>
      {/* 01 — HERO */}
      <PS5Hero />

      {/* 02 — INTRO */}
      <PS5Intro />

      {/* 03 — FEATURES */}
      <PS5Features />

      {/* 04 — EXPERIENCE */}
      <PS5Experience />

      <PS5HowItWorks/>
      <PS5Pricing/>
      <PS5SocialProof/>
      <PS5TrustFAQ/>

      {/* 05 — CTA */}
      <PS5CTA />
<Footer/>
    </main>
  );
}