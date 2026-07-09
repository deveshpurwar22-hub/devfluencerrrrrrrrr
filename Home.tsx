import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Portfolio } from "./Portfolio";
import { Problem } from "./Problem";
import { System45 } from "./System45";
import { Process } from "./Process";
import { Services } from "./Services";
import { WhoWeHelp } from "./WhoWeHelp";
import { Founder } from "./Founder";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

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
