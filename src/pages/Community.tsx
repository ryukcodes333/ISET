import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";

export default function Community() {
  const [, navigate] = useLocation();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const quotes = [
    {
      quote: "Finally a tool that doesn't guilt-trip me when life throws a curveball. It just adjusts and moves on. I've stuck with it longer than anything else I've tried.",
      name: "Samara K.",
      handle: "@samara_builds",
      role: "Indie founder",
    },
    {
      quote: "I used to spend Sunday nights replanning manually. Iset does it in seconds and the result is actually better because it accounts for what I can realistically do.",
      name: "Marcus D.",
      handle: "@mdesiign",
      role: "Product designer",
    },
    {
      quote: "The 'one clear next step' feature alone is worth it. I have ADHD and knowing exactly what to do next — not a list of fifty things — is a game changer.",
      name: "Priya N.",
      handle: "@priyanotion",
      role: "Software engineer",
    },
    {
      quote: "I've tried every productivity app. Iset is the first one that didn't make me feel like I was maintaining the tool instead of working toward my goal.",
      name: "Joel R.",
      handle: "@joelrambles",
      role: "Freelance writer",
    },
    {
      quote: "The replanning feature genuinely changed how I think about setbacks. They're not failures anymore. They're just recalculations.",
      name: "Anika T.",
      handle: "@anika.thinks",
      role: "UX researcher",
    },
    {
      quote: "Shipped my first product using Iset to structure the build. 4 months, 11 milestones, 3 replans. Worth every one of them.",
      name: "Chris W.",
      handle: "@chrisbuilds",
      role: "Solo developer",
    },
  ];

  const updates = [
    { week: "Week 12", update: "Adaptive replanning engine shipped to testers. Early feedback: overwhelmingly positive." },
    { week: "Week 10", update: "Daily focus view redesigned after community feedback. Cleaner, more deliberate." },
    { week: "Week 08", update: "Multi-goal management added to the Pro roadmap following 60+ requests." },
    { week: "Week 06", update: "First 100 waitlist signups in 48 hours. No paid ads. Just word of mouth." },
    { week: "Week 03", update: "Open-sourced our goal-to-milestone prompt template. 400 stars on GitHub." },
  ];

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
            <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">The Community</div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Built transparently, with you.</h1>
            <p className="text-muted-foreground text-xl max-w-xl mx-auto">
              Iset is being built in public. Follow the progress, give feedback, and shape what gets built next.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { value: "847", label: "On the waitlist" },
              { value: "12", label: "Weeks building" },
              { value: "100%", label: "In public" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-md p-8 text-center hover:border-primary/20 transition-colors"
              >
                <div className="text-5xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-8">Early Voices</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {quotes.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-md p-7 flex flex-col gap-5 hover:border-primary/20 hover:shadow-[0_0_25px_rgba(201,162,39,0.04)] transition-all"
                >
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm italic flex-1">"{q.quote}"</p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold text-foreground text-sm">{q.name}</div>
                    <div className="text-primary/60 text-xs mt-0.5">{q.handle} · {q.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-8">Build Log</div>
            <div className="flex flex-col divide-y divide-border border border-border rounded-md overflow-hidden">
              {updates.map((u, i) => (
                <div key={i} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] items-start gap-4 md:gap-8 px-6 py-5 bg-card hover:bg-card/80 transition-colors">
                  <div className="text-primary/60 font-mono text-xs font-bold pt-0.5">{u.week}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{u.update}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center border border-primary/20 bg-card/40 rounded-md p-10"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Follow the build.</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Get weekly updates, share feedback, and help decide what gets built next. No vanity metrics — just real progress.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-13 px-10 font-medium shadow-[0_0_25px_rgba(201,162,39,0.3)]"
                onClick={() => go("/waitlist")}
                data-testid="button-community-waitlist"
              >
                Join the waitlist
              </Button>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium border-b border-primary/30 hover:border-primary pb-1 text-sm"
              >
                Follow on X <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
