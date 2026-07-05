import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img
            src="/logo-dark-trimmed.png"
            alt="Devfluencer"
            style={{ height: 50, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/919451988633"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium tracking-wide text-sm text-white transition-all duration-400"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(37,211,102,0.2)",
              boxShadow: "0 0 16px rgba(37,211,102,0.08), inset 0 1px 0 rgba(255,255,255,0.05)"
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(37,211,102,0.07)";
              el.style.border = "1px solid rgba(37,211,102,0.38)";
              el.style.boxShadow = "0 0 28px rgba(37,211,102,0.2), inset 0 1px 0 rgba(255,255,255,0.07)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.border = "1px solid rgba(37,211,102,0.2)";
              el.style.boxShadow = "0 0 16px rgba(37,211,102,0.08), inset 0 1px 0 rgba(255,255,255,0.05)";
            }}
          >
            <span className="text-[#25D366]"><WhatsAppIcon /></span>
            Chat On WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <ul className="flex flex-col gap-6 text-base font-medium text-white/80">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919451988633"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-medium tracking-wide text-sm mt-4 text-white"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(37,211,102,0.22)",
                  boxShadow: "0 0 20px rgba(37,211,102,0.1), inset 0 1px 0 rgba(255,255,255,0.05)"
                }}
              >
                <span className="text-[#25D366]"><WhatsAppIcon /></span>
                Chat On WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}