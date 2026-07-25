import ContactHero from "@/components/contact/ContactHero";
import FAQSection from "@/components/contact/FAQSection";
import ReadyToPlaySection from "@/components/contact/ReadyToPlaySection";
import VisitAndGetInTouch from "@/components/contact/VisitAndGetInTouch";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main >
      <Navbar/>
      <ContactHero/>
      <VisitAndGetInTouch/>
      <FAQSection/>
      <ReadyToPlaySection/>
      <Footer/>
    </main>
  );
}