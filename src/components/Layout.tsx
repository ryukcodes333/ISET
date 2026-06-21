import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Features", path: "/features" },
  { label: "The Difference", path: "/the-difference" },
  { label: "Community", path: "/community" },
  { label: "Join Waitlist", path: "/waitlist" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SlideUpMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 group"
          data-testid="link-nav-logo"
        >
          <span className="text-primary text-xs group-hover:scale-125 transition-transform">◆</span>
          <span className="font-heading font-bold text-xl tracking-widest uppercase group-hover:text-primary transition-colors">ISET</span>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
          aria-label="Toggle menu"
          data-testid="button-menu-toggle"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[2px] bg-foreground group-hover:bg-primary transition-colors origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-4 h-[2px] bg-foreground group-hover:bg-primary transition-colors"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[2px] bg-foreground group-hover:bg-primary transition-colors origin-center"
          />
        </button>
      </div>
    </nav>
  );
}

function SlideUpMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [location, navigate] = useLocation();

  const go = (path: string) => {
    navigate(path);
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
          />

          <motion.div
            key="menu"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            className="fixed bottom-0 inset-x-0 z-50 bg-card border-t border-primary/30 rounded-t-2xl shadow-[0_-20px_60px_rgba(201,162,39,0.08)] overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="max-w-lg mx-auto px-8 pt-6 pb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-xs">◆</span>
                  <span className="font-heading font-bold tracking-widest uppercase text-foreground/60 text-sm">Navigate</span>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all"
                  data-testid="button-menu-close"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = location === link.path;
                  const isWaitlist = link.path === "/waitlist";
                  return (
                    <motion.button
                      key={link.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.28 }}
                      onClick={() => go(link.path)}
                      className={`text-left px-4 py-3 rounded-sm font-heading font-medium text-lg transition-all group flex items-center justify-between
                        ${isWaitlist
                          ? "bg-primary text-primary-foreground mt-3 hover:bg-primary/90 shadow-[0_0_20px_rgba(201,162,39,0.3)]"
                          : isActive
                            ? "text-primary bg-primary/8 border border-primary/20"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/20"
                        }`}
                      data-testid={`link-menu-${link.path.replace("/", "") || "home"}`}
                    >
                      <span>{link.label}</span>
                      {!isWaitlist && (
                        <ArrowRight size={14} className={`transition-opacity text-primary ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground/40">
                <span>© 2025 Iset</span>
                <span>Built in public</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  const [, navigate] = useLocation();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background py-14 border-t border-border relative">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <button onClick={() => go("/")} className="flex items-center gap-2 group">
            <span className="text-primary text-xs group-hover:scale-125 transition-transform">◆</span>
            <span className="font-heading font-bold text-2xl tracking-widest uppercase text-foreground/50 group-hover:text-foreground/80 transition-colors">ISET</span>
          </button>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/60">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                className="hover:text-primary transition-colors"
                data-testid={`link-footer-${link.path.replace("/", "") || "home"}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a href="#" className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors text-sm font-medium">
            Follow on X <ArrowRight size={12} />
          </a>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/40">
          <span>© 2025 Iset. All rights reserved.</span>
          <span>Built in public · Know what to do next.</span>
        </div>
      </div>
    </footer>
  );
}
