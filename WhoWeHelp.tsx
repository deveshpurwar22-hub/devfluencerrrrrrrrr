import { motion } from "framer-motion";

export function WhoWeHelp() {
  return (
    <section id="about" className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Built For The Ambitious
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We work exclusively with professionals who are serious about building authority online.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/30 tracking-tighter">
              Founders
            </h3>
          </motion.div>
          
          <div className="hidden md:block w-[1px] h-32 bg-white/10" />
          <div className="md:hidden w-32 h-[1px] bg-white/10" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-white to-white/30 tracking-tighter">
              Coaches
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}