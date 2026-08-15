import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const cards = [
  {
    category: "Roast Content Editing",
    description:
      "High-retention short-form editing focused on hooks, captions, pacing, storytelling and attention.",
    skills: [
      "Fast cuts",
      "Captions",
      "Meme timing",
      "Sound design",
      "Storytelling",
    ],
    src: "/roast.mp4",
  },
  {
    category: "Talking Head Edit",
    description:
      "Clean, engaging talking-head edits that make every word land — captions, pacing, and energy dialled in.",
    skills: [
      "Jump cuts",
      "Captions",
      "Eye contact retention",
      "Audio polish",
      "Pacing",
    ],
    src: "/talking-head.mp4",
  },
  {
    category: "Podcast Edit",
    description:
      "Punchy podcast clips cut for maximum retention — pulling the best moments and making them unmissable.",
    skills: [
      "Moment selection",
      "Dynamic zoom",
      "Captions",
      "Audio cleanup",
      "Hook creation",
    ],
    src: "/podcast-edit.mp4",
  },
  {
    category: "Faceless Video Edit",
    description:
      "High-impact faceless content that builds authority without showing the creator — visuals, voiceover and storytelling in sync.",
    skills: [
      "Visual storytelling",
      "Voiceover sync",
      "Motion graphics",
      "Retention pacing",
      "B-roll",
    ],
    src: "/facelesss.mp4",
  },
  {
    category: "AI Ad",
    description:
      "Scroll-stopping AI-powered ad edits built to convert — tight pacing, sharp hooks and clean storytelling.",
    skills: [
      "Hook writing",
      "Fast pacing",
      "Captions",
      "CTA design",
      "Retention",
    ],
    src: "/ai-ad.mp4",
  },
  {
    category: "Infotainment Edit",
    description:
      "Educational content made entertaining — blending facts, storytelling and pacing to keep audiences watching till the end.",
    skills: [
      "Storytelling",
      "Pacing",
      "B-roll",
      "Captions",
      "Sound design",
    ],
    src: "/infotaimenttt.mp4",
  },
];

type VideoCardProps = {
  src: string;
  category: string;
  onOpen: (src: string) => void;
};

function VideoCard({ src, category, onOpen }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          video
            .play()
            .catch(() => {
              // Autoplay can be blocked by some browsers.
            });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "100px 0px",
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <motion.div
      className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col h-full"
      onClick={() => onOpen(src)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Video */}
      <div className="relative aspect-[9/16] w-full bg-[#141414] overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 pointer-events-none" />

        {/* Click hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
            <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-black" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">
          {category}
        </h3>

        <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed flex-grow">
          {cards.find((card) => card.src === src)?.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {cards
            .find((card) => card.src === src)
            ?.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-[11px] font-medium text-white/70 bg-white/5 rounded border border-white/10"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  // Start modal video immediately
  useEffect(() => {
    const video = modalVideoRef.current;

    if (!video || !activeVideo) return;

    video.muted = false;
    video.playsInline = true;

    video.play().catch(() => {
      // Browser may require user interaction.
    });
  }, [activeVideo]);

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Content We Create
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Content that keeps people watching.
          </h2>

          <p className="text-lg text-white/60 font-light leading-relaxed">
            High-retention content built for founders and coaches.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
            >
              <VideoCard
                src={card.src}
                category={card.category}
                onOpen={setActiveVideo}
              />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close video"
              className="absolute top-5 right-5 md:top-8 md:right-8 z-[110] text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>

            {/* Modal video */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[500px] h-[85vh] max-h-[900px] bg-[#0f0f0f] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={activeVideo}
                ref={modalVideoRef}
                src={activeVideo}
                controls
                autoPlay
                playsInline
                preload="auto"
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
