
import Footer from "@/components/Footer";
import AmenitiesSection from "@/components/home page/AmenitiesSection";
import BecomeMemberSticky from "@/components/home page/BecomeMemberSticky";
import Hero from "@/components/home page/Hero";
import MeetThePros from "@/components/home page/MeetThePros";
import ProgramsSection from "@/components/home page/ProgramsSection";
import LuxuryStickySection from "@/components/home page/ProgramsSection";
import Slider from "@/components/home page/Slider";
import Navbar from "@/components/Navbar";
import { Sliders } from "lucide-react";


export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Slider/>
    
      <MeetThePros/>
      <AmenitiesSection/>
      <BecomeMemberSticky/>
      <Footer/>
    
    </main>
  );
}