import { motion } from "framer-motion";

const services = [
  {
    title: "AI Content Strategy",
    items: ["Content ideas", "Scripts", "Personal brand direction"],
  },
  {
    title: "Content Production",
    items: ["Short form edits", "Captions", "Visual storytelling"],
  },
  {
    title: "Authority Building",
    items: ["Consistency", "Positioning", "Audience growth"],
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What We Build For You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f0f0f] border border-[#1f1f1f] p-10 lg:p-14 rounded-xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-700" />
              
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight relative z-10">
                {service.title}
              </h3>
              
              <ul className="space-y-4 relative z-10">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground font-light">
                    <div className="w-1 h-1 bg-primary/70 mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}