import { motion } from "framer-motion";
import { Target, Layers, CheckSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";

export default function HowItWorks() {
  const [, navigate] = useLocation();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const steps = [
    {
      icon: Target,
      step: "01",
      title: "Define your goal",
      headline: "Start with what matters.",
      desc: "Tell Iset what you want to achieve in plain language. A career change. A product launch. A fitness milestone. A book written. No goal is too ambitious — Iset is built for the goals that actually matter to you.",
      detail: "You don't need to know how. Just know what. Iset takes care of the structure.",
    },
    {
      icon: Layers,
      step: "02",
      title: "AI builds your roadmap",
      headline: "From vision to milestones.",
      desc: "Iset's AI breaks your goal into meaningful, ordered milestones — each one a real checkpoint on the journey. It accounts for your timeline, your available hours, and the natural sequence things need to happen in.",
      detail: "The result is a roadmap that's ambitious but grounded. Not a wishlist — a plan.",
    },
    {
      icon: CheckSquare,
      step: "03",
      title: "Execute one task at a time",
      headline: "The only question that matters.",
      desc: "Every day, Iset answers: what should I do right now? It surfaces exactly the next task — not a list of fifty things, not a colour-coded calendar. Just the one thing that moves you forward today.",
      detail: "No overwhelm. No decision fatigue. Just clear, purposeful action.",
    },
  ];

  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">The Method</div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">One goal. A complete path forward.</h1>
            <p className="text-muted-foreground text-xl max-w-xl mx-auto">From ambition to action in three deliberate steps.</p>
          </motion.div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-0 md:gap-10"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[49px] top-20 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 to-transparent" />
                )}

                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-2 mb-6 md:mb-0 pt-10">
                  <div className="w-14 h-14 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(201,162,39,0.12)] flex-shrink-0 z-10 relative bg-background">
                    <step.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="text-primary/25 font-heading font-bold text-4xl md:text-center">{step.step}</div>
                </div>

                <div className="bg-card border border-border border-l-2 border-l-primary rounded-md p-8 md:p-10 mb-6 hover:shadow-[0_0_30px_rgba(201,162,39,0.05)] transition-all">
                  <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-3">{step.title}</div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{step.headline}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-base">{step.desc}</p>
                  <p className="text-muted-foreground/60 italic text-sm">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-13 px-10 text-base font-medium shadow-[0_0_25px_rgba(201,162,39,0.3)]"
              onClick={() => go("/waitlist")}
              data-testid="button-howitworks-waitlist"
            >
              Join the waitlist
            </Button>
            <button
              onClick={() => go("/features")}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium border-b border-primary/30 hover:border-primary pb-1 text-sm"
              data-testid="button-howitworks-features"
            >
              See all features <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
