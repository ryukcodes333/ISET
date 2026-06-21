import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  const faqs = [
    {
      q: "Is Iset free?",
      a: "Iset will have a free tier covering individual goals with core features. A paid plan unlocks unlimited goals, advanced AI replanning, multi-goal management, progress insights, and priority support. Exact pricing will be announced at launch.",
    },
    {
      q: "When does Iset launch?",
      a: "We're building in public and targeting a beta launch in the coming months. Waitlist members get early access before anyone else — and have shaped what gets built.",
    },
    {
      q: "How does adaptive replanning actually work?",
      a: "When you miss a deadline or shift a priority, Iset analyses your remaining milestones, your available time, and your historical pace — then generates a revised roadmap that accounts for reality, not the original plan.",
    },
    {
      q: "What kinds of goals work best with Iset?",
      a: "Iset is designed for medium-to-long-horizon goals: launching a business, writing a book, learning a skill, getting fit, shipping a product. Not ideal for grocery lists — exceptional for anything that takes weeks or months.",
    },
    {
      q: "Will Iset integrate with my calendar or existing tools?",
      a: "Calendar integration is on the roadmap. We want Iset to be a single source of truth for your goals — other tools feed in, Iset tells you what matters today.",
    },
    {
      q: "Can I use Iset for team goals?",
      a: "The initial launch is focused on individuals. Team/collaborative features are being scoped based on demand. If you want this, let us know — it goes directly into the roadmap.",
    },
    {
      q: "What if I change my goal mid-way?",
      a: "Goals evolve. Iset lets you update or pivot your goal at any point and will regenerate the roadmap accordingly — preserving completed milestones and recalculating the rest.",
    },
  ];

  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Join Us</div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Be first when Iset launches.</h1>
            <p className="text-muted-foreground text-xl max-w-lg mx-auto">No spam. No noise. Just a message when you get access — and occasional build updates if you want them.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border border-primary/25 bg-card/80 backdrop-blur-sm p-10 md:p-14 rounded-md text-center shadow-[0_0_60px_rgba(201,162,39,0.06)] mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 gold-gradient opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <div className="mb-6 flex justify-center text-primary opacity-60 text-xl">◆</div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10"
                >
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-[0_0_35px_rgba(201,162,39,0.5)]">
                    <Check size={36} />
                  </div>
                  <div className="text-3xl font-heading font-bold text-foreground mb-2">You're on the list.</div>
                  <div className="text-muted-foreground text-lg">We'll be in touch before launch.</div>
                  <div className="mt-6 text-primary/60 text-sm">847 people ahead of you · We'll be fast</div>
                </motion.div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-background border-2 border-border rounded-sm px-6 h-16 text-foreground text-xl placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-all tracking-wide"
                      data-testid="input-waitlist-email"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-sm font-semibold shadow-[0_0_25px_rgba(201,162,39,0.35)] hover:shadow-[0_0_40px_rgba(201,162,39,0.55)] transition-all text-xl"
                      data-testid="button-waitlist-submit"
                    >
                      Join the Waitlist
                    </Button>
                  </form>
                  <p className="text-muted-foreground/40 text-sm">
                    847 people already waiting · No spam · Unsubscribe anytime
                  </p>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-20 text-center"
          >
            {[
              { v: "Free", l: "To join" },
              { v: "Early", l: "Access priority" },
              { v: "Input", l: "Shape the product" },
            ].map((s) => (
              <div key={s.l} className="border border-border rounded-md p-4 bg-card/50">
                <div className="font-heading font-bold text-primary text-lg">{s.v}</div>
                <div className="text-muted-foreground text-xs mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Questions</div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Frequently asked.</h2>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-testid={`button-faq-${i}`}
                  >
                    <span className="font-heading font-semibold text-foreground text-base group-hover:text-primary transition-colors pr-4">
                      {faq.q}
                    </span>
                    <span className="text-primary flex-shrink-0">
                      {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground leading-relaxed pb-5 text-sm">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
