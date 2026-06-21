import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";

export default function Home() {
  const [, navigate] = useLocation();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 gold-gradient pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.05)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center w-full mb-10 opacity-50"
            >
              <div className="h-[1px] w-20 bg-primary/60" />
              <div className="mx-4 text-primary text-sm">◆</div>
              <div className="h-[1px] w-20 bg-primary/60" />
            </motion.div>

            <h1 className="font-heading font-bold text-7xl md:text-9xl lg:text-[120px] tracking-[0.28em] text-foreground mb-6 uppercase">
              ISET
            </h1>

            <h2 className="text-2xl md:text-4xl font-medium text-foreground mb-6 tracking-tight">
              Know what to do next.
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Iset turns your goals into structured AI roadmaps — and adapts when life gets in the way.
              No more guilt. No more guessing. Just the next right step.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-sm h-14 px-10 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(201,162,39,0.35)] hover:shadow-[0_0_45px_rgba(201,162,39,0.5)] transition-all"
                onClick={() => go("/waitlist")}
                data-testid="button-hero-waitlist"
              >
                Join the Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 rounded-sm h-14 px-10 text-lg w-full sm:w-auto font-medium transition-all"
                onClick={() => go("/how-it-works")}
                data-testid="button-hero-howitworks"
              >
                See how it works
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap justify-center gap-8 text-muted-foreground/40 text-sm"
            >
              {["847 on waitlist", "Built in public", "Free to start"].map((stat) => (
                <span key={stat} className="flex items-center gap-2">
                  <span className="text-primary/50 text-xs">◆</span> {stat}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/30 text-xs cursor-pointer"
          onClick={() => go("/how-it-works")}
        >
          <span>Explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
