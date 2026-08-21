import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PickleballCTA from "@/components/pickleball/PickleballCTA";
import PickleballExperience from "@/components/pickleball/PickleballExperience";
import PickleballFeatures from "@/components/pickleball/PickleballFeatures";
import PickleballHero from "@/components/pickleball/PickleballHero";
import PickleballHowItWorks from "@/components/pickleball/PickleballHowItWorks";
import PickleballAbout from "@/components/pickleball/PickleballIntro";
import PickleballPricing from "@/components/pickleball/PickleballPricing";
import PickleballSocialProof from "@/components/pickleball/PickleballSocialProof";
import PickleballTrustFAQ from "@/components/pickleball/PickleballTrustFAQ";

export default function PickleballPage() {
  return (
    <main>
      <Navbar/>
      {/* 01 */}
      <PickleballHero />

      {/* 02 */}
      <PickleballAbout />

      {/* 03 */}
      <PickleballFeatures />

      {/* 04 */}
      <PickleballExperience />

      {/* 05 - NEW */}
      <PickleballHowItWorks />

      <PickleballPricing />

      {/* 06 - NEW */}
      <PickleballSocialProof />

      {/* 07 - NEW */}
      <PickleballTrustFAQ />

      {/* 08 */}
      <PickleballCTA />
      <Footer/>
    </main>
  );
}