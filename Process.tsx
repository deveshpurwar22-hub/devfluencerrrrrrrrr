import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Founder Knowledge",
    desc: "We extract your unique insights, story and expertise — the raw material no AI can replicate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "AI Research",
    desc: "Deep market intelligence — what your audience searches, shares and responds to right now.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M3 21l3-3m0 0l5.25-5.25M6 18l5.25-5.25m0 0L15 9m-3.75 3.75L15 9" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Strategy",
    desc: "A content architecture aligned with your goals — every piece has a purpose, a place and a payoff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Script",
    desc: "High-retention hooks, structured narratives and the exact words that stop the scroll.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    )
  },
  {
    num: "05",
    title: "Editing",
    desc: "Cinematic post-production — cuts, captions, pacing and visuals crafted for maximum impact.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125V5.625m0 0A1.125 1.125 0 014.5 4.5h15a1.125 1.125 0 011.125 1.125M3.375 5.625H21m0 0v12.75A1.125 1.125 0 0119.875 19.5H18.375" />
      </svg>
    )
  },
  {
    num: "06",
    title: "Publishing",
    desc: "Strategic distribution at peak times — turning content into compounding authority across platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    )
  }
];

function VerticalPath({ inView }: { inView: boolean }) {
  return (
    <div className="absolute left-[19px] top-6 bottom-6 w-[1px] overflow-visible">
      {/* Base line */}
      <div className="absolute inset-0 bg-white/[0.06]" />

      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.4), rgba(59,130,246,0.15), transparent)",
          filter: "blur(0.5px)"
        }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Travelling particle */}
      {inView && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[3px] h-8 rounded-full"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(147,197,253,0.9), transparent)",
            filter: "blur(1px)"
          }}
          initial={{ top: "-5%" }}
          animate={{ top: "105%" }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            delay: 1.4,
            repeat: Infinity,
            repeatDelay: 1.8
          }}
        />
      )}
    </div>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-40 bg-[#080808] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Two-column layout: heading left, steps right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 lg:gap-32 items-start">

          {/* Left: sticky heading */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.25em] text-white/25 uppercase mb-6 font-medium">
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-8">
              From One Idea To A Complete Content System
            </h2>
            <p className="text-white/35 font-light leading-relaxed text-base">
              Six deliberate steps that transform your expertise into a content engine — every time, without exception.
            </p>

            {/* Decorative element */}
            <div className="mt-16 hidden lg:block">
              <div className="w-12 h-[1px] bg-white/10 mb-3" />
              <p className="text-[11px] tracking-[0.2em] text-white/20 uppercase">
                Repeatable system
              </p>
            </div>
          </motion.div>

          {/* Right: animated step list */}
          <div className="relative pl-12" ref={ref}>
            <VerticalPath inView={inView} />

            <div className="space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + index * 0.12 }}
                  className="group relative flex items-start gap-8 pb-12 last:pb-0"
                >
                  {/* Node */}
                  <div className="absolute -left-12 mt-0.5 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-[38px] h-[38px] rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] group-hover:bg-[#0d0f14]"
                    >
                      <div className="text-white/25 group-hover:text-blue-400/70 transition-colors duration-500">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 flex-1 pb-0">
                    {/* Number + Title row */}
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-[11px] tracking-[0.2em] text-white/20 font-medium tabular-nums">
                        {step.num}
                      </span>
                      <h3 className="text-lg font-semibold text-white/90 tracking-tight group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-white/35 font-light leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Separator line between steps */}
                    {index < steps.length - 1 && (
                      <div className="mt-12 w-full h-[1px] bg-white/[0.04]" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
