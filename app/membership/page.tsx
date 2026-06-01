import Footer from "@/components/Footer";

import MembershipHero from "@/components/Membership/MembershipHero";
import Navbar from "@/components/Navbar";
import MembershipExperience from "@/components/Membership/MembershipExperience";
import MembershipTiers from "@/components/Membership/MembershipTiers";
import MembershipFAQ from "@/components/Membership/MembershipFAQ";





export default function Membership() {
  return (
    <main className="">
      <Navbar />
      
      <MembershipHero/>
    <MembershipTiers/>
      <MembershipExperience/>
      <MembershipFAQ/>
     
      
      <Footer/>
    
    </main>
  );
}