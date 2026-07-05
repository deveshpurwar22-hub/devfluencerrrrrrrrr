import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-3"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function FinalCTA() {
  return (
    <section className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-[1.1] tracking-tight">
            Your competitors are building attention. <br className="hidden md:block" />
            <span className="text-primary font-extrabold">Start building authority.</span>
          </h2>
          
          <a 
            href="https://wa.me/919451988633" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-primary text-white px-10 py-5 rounded font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:-translate-y-1"
          >
            <WhatsAppIcon />
            Chat On WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}