import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const cards = [
  {
    category: "Roast Content Editing",
    description: "High-retention short-form editing focused on hooks, captions, pacing, storytelling and attention.",
    skills: ["Fast cuts", "Captions", "Meme timing", "Sound design", "Storytelling"],
    src: "/roast.mp4"
  },
  {
    category: "Talking Head Edit",
    description: "Clean, engaging talking-head edits that make every word land — captions, pacing, and energy dialled in.",
    skills: ["Jump cuts", "Captions", "Eye contact retention", "Audio polish", "Pacing"],
    src: "/videos/talking-head.mp4"
  },
  {
    category: "Podcast Edit",
    description: "Punchy podcast clips cut for maximum retention — pulling the best moments and making them unmissable.",
    skills: ["Moment selection", "Dynamic zoom", "Captions", "Audio cleanup", "Hook creation"],
        src: "/podcast-edit.mp4"

  },
  {
    category: "Faceless Video Edit",
    description: "High-impact faceless content that builds authority without showing the creator — visuals, voiceover and storytelling in sync.",
    skills: ["Visual storytelling", "Voiceover sync", "Motion graphics", "Retention pacing", "B-roll"],
    src: "/videos/faceless.mp4"
  },
  {
    category: "AI Ad",
    description: "Scroll-stopping AI-powered ad edits built to convert — tight pacing, sharp hooks and clean storytelling.",
    skills: ["Hook writing", "Fast pacing", "Captions", "CTA design", "Retention"],
    src: "/ai-ad.mp4"
  },
  {
    category: "Infotainment Edit",
    description: "Educational content made entertaining — blending facts, storytelling and pacing to keep audiences watching till the end.",
    skills: ["Storytelling", "Pacing", "B-roll", "Captions", "Sound design"],
    src: "/videos/infotainment.mp4"
  }
];

export function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Content We Create
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            High-retention content built for founders and coaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col h-full"
              onClick={() => setActiveVideo(card.src)}
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-[9/16] w-full bg-[#141414] overflow-hidden">
                <video 
                  src={card.src} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  muted
                  autoPlay
                  playsInline 
                  loop
                  preload="auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors duration-500">
                  <div className="w-16 h-16 rounded-full border border-primary text-primary flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{card.category}</h3>
                <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed flex-grow">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 text-[11px] font-medium text-white/70 bg-white/5 rounded border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-full max-w-full aspect-[9/16] bg-[#0f0f0f] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
