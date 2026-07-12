import { Mail } from "lucide-react";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-16">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

          <div>
            <a href="#home" className="inline-flex items-center mb-4">
              <img
                src="/favicon.svg.png"
                alt="Devfluencer"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
            </a>

            <p className="text-muted-foreground text-sm">
              AI Content Agency for Founders & Coaches
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-muted-foreground">

            <a
              href="https://wa.me/919451988633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <WhatsAppIcon />
              +91 9451988633
            </a>

            <span className="hidden sm:block text-white/20">|</span>

            <a
              href="https://www.linkedin.com/in/devesh-purwar-6497b6306"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Devesh Purwar
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex justify-center">
          <a
            href="mailto:hello@devfluencer.in"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <Mail size={16} />
            hello@devfluencer.in
          </a>
        </div>

      </div>
    </footer>
  );
}
