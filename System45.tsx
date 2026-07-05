import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const phases = [
  {
    phase: "01",
    name: "Brand Foundation",
    days: "Days 1–7",
    description: "We identify your positioning, craft your core message and map your target audience.",
    deliverables: ["Positioning", "Message", "Audience"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.71.71m13.14 13.14.71.71M3 12H4m16 0h1M4.22 19.78l.71-.71M18.36 5.64l.71-.71" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  },
  {
    phase: "02",
    name: "AI Content Engine",
    days: "Days 8–20",
    description: "We build your content machine — viral ideas, sharp scripts and a strategy built for growth.",
    deliverables: ["Ideas", "Scripts", "Content strategy"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.5-1.975.994a11.54 11.54 0 01-8.65 0L5.175 15.5" />
      </svg>
    )
  },
  {
    phase: "03",
    name: "Content Production",
    days: "Days 21–35",
    description: "We produce, edit and craft visuals — storytelling that stops the scroll and builds real authority.",
    deliverables: ["Editing", "Visuals", "Storytelling"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125V5.625m0 12.75v-1.5m0-1.5V5.625m0 0A1.125 1.125 0 014.5 4.5h15a1.125 1.125 0 011.125 1.125M3.375 5.625H4.5m15 0H18.375M18.375 5.625A1.125 1.125 0 0119.5 6.75v11.625" />
      </svg>
    )
  },
  {
    phase: "04",
    name: "Authority Growth",
    days: "Days 36–45",
    description: "We distribute, optimize and scale — turning your content into a compounding authority engine.",
    deliverables: ["Distribution", "Optimization", "Growth"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  }
];

function AnimatedPath() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="hidden md:block absolute top-[52px] left-0 right-0 h-[2px] pointer-events-none z-0 px-[12.5%]">
      <svg
        ref={ref}
        className="w-full h-8 overflow-visible"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="particleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base dim line */}
        <line x1="0" y1="4" x2="100" y2="4" stroke="white" strokeOpacity="0.06" strokeWidth="0.4" />

        {/* Animated glowing line */}
        <motion.line
          x1="0" y1="4" x2="100" y2="4"
          stroke="url(#lineGrad)"
          strokeWidth="0.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Moving particle */}
        {inView && (
          <motion.line
            x1="0" y1="4" x2="8" y2="4"
            stroke="url(#particleGrad)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ x: -10 }}
            animate={{ x: 110 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              delay: 1.2,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        )}
      </svg>
    </div>
  );
}

export function System45() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="py-40 bg-[#080808] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6" ref={sectionRef}>

        {/* Heading */}
        <motion.div
          className="max-w-2xl mb-32"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.25em] text-white/30 uppercase mb-6 font-medium">
            The System
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            The Devfluencer <br />
            <span className="text-white/40">45-Day</span> Authority System
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          <AnimatedPath />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 + index * 0.15 }}
                whileHover={{ y: -4 }}
                className="group relative cursor-default"
              >
                {/* Node circle on the path */}
                <div className="hidden md:flex absolute -top-[38px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 bg-[#080808] items-center justify-center transition-all duration-500 group-hover:border-blue-500/60 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors duration-500" />
                </div>

                {/* Card */}
                <div className="relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group-hover:border-blue-500/20 group-hover:bg-white/[0.04] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]">

                  {/* Phase number + icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[3.5rem] font-bold leading-none text-white/[0.08] group-hover:text-white/[0.12] transition-colors duration-500 select-none">
                      {phase.phase}
                    </span>
                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:border-blue-500/30 group-hover:text-blue-400/70 transition-all duration-500">
                      {phase.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
                    {phase.name}
                  </h3>

                  {/* Days badge */}
                  <p className="text-[11px] tracking-widest text-white/25 uppercase font-medium mb-5">
                    {phase.days}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/40 font-light leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-2">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/35 font-light">
                        <span className="w-px h-3 bg-blue-500/40 group-hover:bg-blue-400/60 transition-colors duration-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
