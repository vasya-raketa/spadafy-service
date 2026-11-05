import { Hero } from "@/components/screens/home/Hero";
import { Intro } from "@/components/screens/home/Intro";
import { AllIn } from "@/components/screens/home/AllIn";
import { Services } from "@/components/screens/home/Services";
import { GreenFlags } from "@/components/screens/home/GreenFlags";
import { Team } from "@/components/screens/home/Team";
import { Testimonials } from "@/components/screens/home/Testimonials";
import { ContactScreen } from "@/components/screens/ContactScreen";
import { Footer } from "@/components/Footer";

// The homepage is an ordered list of screens (CLIENT_FEEDBACK order):
// Hero → Intro → All in → Services → Green flags → Team → Testimonials → Contact.
// Remove or reorder a line to change the page.
export default function Home() {
  return (
    <>
      <main id="main" className="page" data-behind-menu>
        <Hero />
        <Intro />
        <AllIn />
        <Services />
        <GreenFlags />
        <Team />
        <Testimonials />
        <ContactScreen />
      </main>
      <Footer />
    </>
  );
}
