import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export function BeforeAfter() {
  const before = [
    "Random, unstructured posting",
    "No clear positioning or niche",
    "Low authority and trust",
    "Content creation feels like a chore",
    "Zero inbound leads or opportunities"
  ];

  const after = [
    "Strong, memorable brand identity",
    "Consistent, purposeful content system",
    "Recognized industry authority",
    "Automated ideation and strategy",
    "High-quality inbound opportunities"
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-white/5 p-10 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50" />
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Before Devfluencer</h3>
            <ul className="space-y-6">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-destructive/70 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/30 p-10 rounded-sm relative overflow-hidden shadow-[0_0_50px_rgba(201,168,76,0.05)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <h3 className="text-2xl font-serif font-bold text-white mb-8">After Devfluencer</h3>
            <ul className="space-y-6">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-white text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
