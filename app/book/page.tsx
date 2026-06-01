import BookingHero from "@/components/Book/BookingHero";
import ExperienceShowcase from "@/components/Book/ExperienceShowcase";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

export default function Book() {
  return (
    <main className="">
      <Navbar />
      
      <BookingHero/>
      <ExperienceShowcase/>
      
     
      
      <Footer/>
    
    </main>
  );
}