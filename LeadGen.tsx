import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2.5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function LeadGen() {
  return (
    <section id="contact" className="py-40 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.25em] text-white/30 uppercase mb-6 font-medium">
              Free Analysis
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Analyze Your Brand Potential
            </h2>
            <p className="text-white/40 font-light text-lg leading-relaxed mb-14">
              Get a free personal brand audit — we'll review your online presence and tell you exactly what's holding your authority back.
            </p>
          </motion.div>

          <motion.a
            href="https://wa.me/919451988633"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(37,211,102,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-[#25D366] text-white px-10 py-5 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 shadow-[0_0_24px_rgba(37,211,102,0.2)]"
          >
            <WhatsAppIcon />
            Get Your Free Brand Analysis
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/20 text-sm mt-6 font-light"
          >
            We respond within 24 hours
          </motion.p>
        </div>
      </div>
    </section>
  );
}
