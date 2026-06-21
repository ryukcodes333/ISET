import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";

export default function Difference() {
  const [, navigate] = useLocation();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const comparisons = [
    {
      topic: "When you miss a deadline",
      others: "Marks the task overdue. Highlights it in red. The guilt accumulates with every login.",
      iset: "Analyses the remaining path. Recalculates what's still achievable. Proposes a revised plan and moves you forward.",
    },
    {
      topic: "When your priority shifts",
      others: "Your roadmap becomes stale. You're stuck managing a plan that no longer reflects your actual situation.",
      iset: "Update your goal's priority or timeline — Iset cascades the change through your milestones and tasks automatically.",
    },
    {
      topic: "What you see every day",
      others: "A list of everything you're supposed to do. Paralysis by volume.",
      iset: "The single most important thing to do today. Chosen by the AI based on your roadmap, your pace, and your remaining time.",
    },
    {
      topic: "What happens when life gets busy",
      others: "The backlog grows. The plan becomes fiction. You abandon the tool.",
      iset: "Iset detects the slowdown, compresses the plan where possible, and keeps you moving — at whatever pace is real right now.",
    },
  ];

  const philosophy = [
    {
      n: "01",
      heading: "Goals deserve more than a to-do list.",
      body: "Checklists are great for groceries. For goals that take months and involve real sacrifice, you need a system that thinks ahead — and thinks with you.",
    },
    {
      n: "02",
      heading: "Accountability without shame.",
      body: "Iset doesn't care that you missed yesterday. It cares about getting you to the finish line. The plan changes. The goal doesn't.",
    },
    {
      n: "03",
      heading: "AI that earns its place.",
      body: "The planning, the replanning, the prioritisation — AI is the engine that makes Iset possible at the depth it operates. Not a gimmick. The product.",
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
            className="text-center mb-20"
          >
            <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">The Difference</div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Life happens. Iset adapts.</h1>
            <p className="text-muted-foreground text-xl max-w-xl mx-auto">
              Most productivity tools punish you for being human. Iset was built around the assumption that you are.
            </p>
          </motion.div>

          <div className="mb-24">
            <div className="grid grid-cols-[1fr_1fr] gap-0 mb-3 text-center">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/40 px-6 pb-3 border-b border-border">Other apps</div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/60 px-6 pb-3 border-b border-primary/20">Iset</div>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {comparisons.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="px-0 py-1">
                    <div className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/40 py-3">{row.topic}</div>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-0 pb-6">
                    <div className="pr-6 text-muted-foreground/50 text-sm leading-relaxed border-r border-border">
                      {row.others}
                    </div>
                    <div className="pl-6 text-foreground/90 text-sm leading-relaxed flex gap-3">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{row.iset}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center mb-14"
            >
              <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">The Philosophy</div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why we built Iset.</h2>
            </motion.div>

            <div className="flex flex-col gap-8">
              {philosophy.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                  className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-10 items-start border-b border-border pb-8 last:border-0 last:pb-0"
                >
                  <div className="text-primary/25 font-mono text-sm font-bold pt-1">{p.n}</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative rounded-md border border-primary/20 bg-card/60 p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 gold-gradient opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <div className="text-primary mb-4 opacity-60">◆</div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Ready to stop falling behind?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">Join hundreds of people building toward goals that actually matter — with a plan that actually adapts.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-13 px-10 font-medium shadow-[0_0_25px_rgba(201,162,39,0.3)]"
                  onClick={() => go("/waitlist")}
                  data-testid="button-difference-waitlist"
                >
                  Join the waitlist
                </Button>
                <button
                  onClick={() => go("/community")}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium border-b border-primary/30 hover:border-primary pb-1 text-sm"
                >
                  See what people say <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
