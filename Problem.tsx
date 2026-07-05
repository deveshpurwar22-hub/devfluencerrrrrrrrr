import { motion } from "framer-motion";
import { Clock, RouteOff, TrendingDown, EyeOff } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "No Time",
      description: "You're busy building the business. Content creation gets pushed to tomorrow, every day."
    },
    {
      icon: <RouteOff className="w-6 h-6 text-primary" />,
      title: "No Strategy",
      description: "You post randomly with no clear direction, hoping something eventually sticks."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-primary" />,
      title: "Inconsistent Posting",
      description: "You post three times one week, then ghost for a month. Brand growth stalls."
    },
    {
      icon: <EyeOff className="w-6 h-6 text-primary" />,
      title: "Low Visibility",
      description: "You have industry-leading expertise, but nobody knows who you are."
    }
  ];

  return (
    <section className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Most founders have knowledge. <br/>
            <span className="text-muted-foreground font-light italic">Few know how to build influence.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background border border-white/5 p-8 rounded-sm hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
