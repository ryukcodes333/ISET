import { motion } from "framer-motion";
import { Brain, RefreshCw, Calendar, Zap, Shield, Clock, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";

export default function Features() {
  const [, navigate] = useLocation();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const features = [
    {
      icon: Brain,
      title: "AI-generated roadmaps",
      badge: "Core",
      desc: "Describe your goal in plain language. Iset translates it into a structured, milestone-driven roadmap in seconds. The AI understands sequence, dependency, and realistic timelines.",
    },
    {
      icon: RefreshCw,
      title: "Adaptive replanning",
      badge: "Signature",
      desc: "Miss a deadline? Iset recalculates — not to shame you, but to propose a realistic new path forward. The goal stays. The plan evolves. That's the difference.",
    },
    {
      icon: Calendar,
      title: "Timeline-aware scheduling",
      badge: "Core",
      desc: "Iset understands your pace and available time, scheduling tasks that are ambitious but achievable. Input your hours per week and it does the rest.",
    },
    {
      icon: Zap,
      title: "Daily focus view",
      badge: "Core",
      desc: "Every morning: one clear view of what matters most today. No noise, no endless lists, no feature bloat. Just the next right thing.",
    },
    {
      icon: Shield,
      title: "Streak resilience",
      badge: "Unique",
      desc: "Unlike habit trackers, Iset doesn't reset your progress when life interrupts. It rebuilds around the interruption, treating setbacks as data — not failure.",
    },
    {
      icon: Clock,
      title: "Long-horizon thinking",
      badge: "Core",
      desc: "Iset is built for goals that take months, not tasks that take minutes. Real progress, real timelines, real accountability.",
    },
    {
      icon: Target,
      title: "Multi-goal management",
      badge: "Pro",
      desc: "Running multiple goals in parallel? Iset balances them intelligently — surfacing the right task from the right goal based on priority and timeline.",
    },
    {
      icon: Brain,
      title: "Progress insights",
      badge: "Pro",
      desc: "See your velocity over time, spot your most productive patterns, and understand where you tend to stall — so you can address it before it becomes a problem.",
    },
  ];

  const badgeColor: Record<string, string> = {
    Core: "text-primary/70 bg-primary/10 border-primary/20",
    Signature: "text-primary bg-primary/15 border-primary/40",
    Unique: "text-amber-300 bg-amber-300/10 border-amber-300/30",
    Pro: "text-muted-foreground bg-muted/50 border-border",
  };

  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">The Arsenal</div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Built for people who mean it.</h1>
            <p className="text-muted-foreground text-xl max-w-xl mx-auto">Every feature exists to serve one purpose: getting you to your goal.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-card border border-border rounded-md p-6 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(201,162,39,0.06)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors flex-shrink-0">
                    <f.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border tracking-wide ${badgeColor[f.badge]}`}>
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 border border-primary/20 bg-primary/5 rounded-md px-6 py-4 mb-8">
              <span className="text-primary text-xs">◆</span>
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground font-medium">Pro features</span> are available on paid plans. Everything in Core is free.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-13 px-10 text-base font-medium shadow-[0_0_25px_rgba(201,162,39,0.3)]"
                onClick={() => go("/waitlist")}
                data-testid="button-features-waitlist"
              >
                Join the waitlist
              </Button>
              <button
                onClick={() => go("/the-difference")}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium border-b border-primary/30 hover:border-primary pb-1 text-sm"
              >
                What makes Iset different <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
