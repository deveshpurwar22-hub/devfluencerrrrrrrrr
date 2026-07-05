import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Cinematic Lighting Glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            We Build <span className="text-primary font-extrabold">Founder & Coach</span> Brands Through AI-Powered Content
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-light">
            We turn your expertise into high-retention content systems that build trust, authority and attract opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary — dark glass with WhatsApp glow */}
            <a
              href="https://wa.me/919451988633"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-medium tracking-wide text-white transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(37,211,102,0.18)",
                boxShadow: "0 0 24px rgba(37,211,102,0.08), inset 0 1px 0 rgba(255,255,255,0.05)"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(37,211,102,0.22), inset 0 1px 0 rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(37,211,102,0.35)";
                (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.07)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(37,211,102,0.08), inset 0 1px 0 rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(37,211,102,0.18)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <span className="flex-shrink-0 text-[#25D366]"><WhatsAppIcon /></span>
              Chat On WhatsApp
            </a>

            {/* Secondary — minimal outline */}
            <a
              href="#portfolio"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-medium tracking-wide text-white/60 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all duration-400 text-sm"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Abstract Cinematic Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] w-full hidden lg:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Floating Panels */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute w-[300px] h-[180px] bg-card border border-white/5 rounded-lg shadow-2xl overflow-hidden left-0 top-10 backdrop-blur-sm z-20"
            >
              <div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="h-2 w-1/3 bg-white/10 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
                <div className="mt-4 h-12 w-full bg-primary/20 rounded border border-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/2 bg-primary/40 blur-sm" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute w-[240px] h-[280px] bg-[#141414] border border-white/10 rounded-lg shadow-2xl overflow-hidden right-0 bottom-10 z-30"
            >
              <div className="p-5 flex flex-col gap-4 h-full">
                <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                <div className="h-3 w-2/3 bg-white/20 rounded mt-2" />
                <div className="flex-1 flex items-end gap-2">
                  <div className="w-full bg-white/5 rounded-t h-[30%]" />
                  <div className="w-full bg-primary/40 rounded-t h-[70%] border-t border-primary/50 relative shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
                  <div className="w-full bg-white/10 rounded-t h-[50%]" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute w-[280px] h-[100px] bg-card border border-white/5 rounded-lg shadow-2xl left-1/4 top-[40%] z-10 flex items-center px-4 gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-2/3 bg-white/10 rounded" />
              </div>
            </motion.div>

            {/* Glowing lines */}
            <div className="absolute right-20 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="absolute left-20 top-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}