import BookingHero from "@/components/Book/BookingHero";
import EventHero from "@/components/Event/EventHero";
import EventsGallerySection from "@/components/Event/EventsGallerySection";

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

export default function Event() {
  return (
    <main className="">
      <Navbar />
      
  <EventHero/>
  <EventsGallerySection/>
      
     
      
      <Footer/>
    
    </main>
  );
}