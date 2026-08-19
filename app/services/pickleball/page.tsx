import PickleballHero from "@/components/pickleball/PickleballHero";
import PickleballFeatures from "@/components/pickleball/PickleballFeatures";
import PickleballExperience from "@/components/pickleball/PickleballExperience";
import PickleballCTA from "@/components/pickleball/PickleballCTA";
import PickleballAbout from "@/components/pickleball/PickleballIntro";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pickleball | Play. Move. Connect.",
  description:
    "Book your pickleball session and enjoy a fun, energetic sporting experience with friends.",
};

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function PickleballPage() {
  return (
    <main>
        <Navbar/>

      {/* Hero */}
      <PickleballHero />

      {/* About Pickleball */}
      <PickleballAbout />

      {/* Features */}
      <PickleballFeatures />

      {/* Why Pickleball */}
      <PickleballExperience />

      <PickleballCTA/>

    

    <Footer/>

     

    </main>
  );
}