import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GalleryAndCTASection from "@/components/our story/GalleryAndCTASection";
import LuxuryVideoSection from "@/components/our story/LuxuryVideoSection";
import OurAbout from "@/components/our story/OurAbout";
import LifestyleHero from "@/components/our story/OurHero";
import ParallaxTextSection from "@/components/our story/ParallaxTextSection";




export default function OurStory() {
  return (
    <main className="bg-black">
      <Navbar />
      <LifestyleHero />
      <OurAbout/>
      <LuxuryVideoSection/>
  
      <GalleryAndCTASection/>
      <Footer/>
    
    </main>
  );
}