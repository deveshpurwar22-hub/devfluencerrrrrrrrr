import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { Portfolio } from "../sections/Portfolio";
import { Problem } from "../sections/Problem";
import { System45 } from "../sections/System45";
import { Process } from "../sections/Process";
import { Services } from "../sections/Services";
import { WhoWeHelp } from "../sections/WhoWeHelp";
import { Founder } from "../sections/Founder";
import { FinalCTA } from "../sections/FinalCTA";
import { Footer } from "../sections/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Problem />
        <System45 />
        <Process />
        <Services />
        <WhoWeHelp />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}