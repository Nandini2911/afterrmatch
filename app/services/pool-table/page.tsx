import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PoolTableAbout from "@/components/Pooltable/PoolTableAbout";
import PoolTableCTA from "@/components/Pooltable/PoolTableCTA";
import PoolTableExperience from "@/components/Pooltable/PoolTableExperience";
import PoolTableFeatures from "@/components/Pooltable/PoolTableFeatures";
import PoolTableHero from "@/components/Pooltable/PoolTableHero";

export default function PoolTablePage() {
  return (
    <main className="overflow-hidden">

<Navbar/>
      {/* =========================================
          01 — HERO
      ========================================= */}

      <PoolTableHero />

      {/* =========================================
          02 — INTRO
      ========================================= */}

      <PoolTableAbout />

      {/* =========================================
          03 — FEATURES
      ========================================= */}

      <PoolTableFeatures />

      {/* =========================================
          04 — EXPERIENCE
      ========================================= */}

      <PoolTableExperience />

      {/* =========================================
          05 — CTA
      ========================================= */}

      <PoolTableCTA />

      <Footer/>

    </main>
  );
}