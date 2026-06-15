"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, CheckCircle, Shield, Star, ArrowRight } from "lucide-react";

const C = { primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C", sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8", gold: "#C79A3B", textDark: "#1C1007", textMuted: "#6B5B4E" };

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

const PRESET_AMOUNTS = [1000, 2500, 5000, 10000, 25000, 50000];

const IMPACT_CALC: Record<number, string> = {
  1000: "provides school supplies for 1 girl",
  2500: "funds one week of digital skills training for a youth",
  5000: "covers transport and materials for 2 programme participants",
  10000: "sponsors a girl's secondary school fees for one term",
  25000: "provides a micro-grant for one market woman",
  50000: "trains 5 women in the She Leads programme",
};

const PROJECTS = [
  { title: "She Leads Programme", goal: 5000000, raised: 3200000 },
  { title: "Youth Tech Hub", goal: 3000000, raised: 1800000 },
  { title: "Girls Education Fund", goal: 4000000, raised: 2600000 },
];

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const displayAmount = customAmount ? parseInt(customAmount) || 0 : amount;
  const impactMessage = IMPACT_CALC[displayAmount] || `supports ${Math.floor(displayAmount / 2500)} participants in our programmes`;

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div style={{ background: C.offWhite }}>
      <section className="pb-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.deep}, ${C.primary})`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>Make a Difference</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
            Your Gift <span style={{ color: C.gold }}>Changes Lives</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Every naira donated directly funds programmes that empower women and transform communities across Africa.
          </motion.p>
        </div>
      </section>

      <section className="py-24" style={{ background: C.offWhite }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation form */}
          <FadeUp>
            {submitted ? (
              <div className="text-center p-14 rounded-3xl" style={{ background: C.cream, boxShadow: "0 8px 40px rgba(111,78,55,0.12)" }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: `${C.gold}20` }}>
                  <Heart className="w-10 h-10" style={{ color: C.gold }} />
                </div>
                <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Thank You!</h2>
                <p className="text-base mb-2" style={{ color: C.textMuted }}>Your donation of <strong>₦{displayAmount.toLocaleString()}</strong> has been received.</p>
                <p className="text-sm" style={{ color: C.textMuted }}>A receipt will be sent to your email. Together, we are building a better Africa.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl space-y-6" style={{ background: C.cream, boxShadow: "0 8px 40px rgba(111,78,55,0.12)" }}>
                <h2 className="text-2xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Make Your Donation</h2>

                {/* Type toggle */}
                <div className="flex rounded-xl overflow-hidden border" style={{ borderColor: C.sand }}>
                  {(["one-time", "monthly"] as const).map((t) => (
                    <button key={t} type="button" onClick={() => setDonationType(t)}
                      className="flex-1 py-3 text-sm font-semibold transition-all capitalize"
                      style={{ background: donationType === t ? C.primary : "transparent", color: donationType === t ? "white" : C.textMuted }}>
                      {t === "one-time" ? "One-Time" : "Monthly"}
                    </button>
                  ))}
                </div>

                {/* Preset amounts */}
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.deep }}>Select Amount (₦)</p>
                  <div className="grid grid-cols-3 gap-2">
                    {PRESET_AMOUNTS.map((a) => (
                      <button key={a} type="button" onClick={() => { setAmount(a); setCustomAmount(""); }}
                        className="py-3 rounded-xl text-sm font-bold transition-all"
                        style={{ background: amount === a && !customAmount ? C.primary : C.offWhite, color: amount === a && !customAmount ? "white" : C.textMuted, border: `1px solid ${amount === a && !customAmount ? C.primary : C.sand}` }}>
                        ₦{a.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <input type="number" placeholder="Custom amount (₦)" value={customAmount}
                      onChange={e => { setCustomAmount(e.target.value); setAmount(0); }}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: `1px solid ${C.sand}`, background: C.offWhite, color: C.textDark }} />
                  </div>
                </div>

                {/* Impact calculator */}
                {displayAmount > 0 && (
                  <div className="p-4 rounded-xl" style={{ background: `${C.gold}15`, border: `1px solid ${C.gold}30` }}>
                    <p className="text-sm font-semibold" style={{ color: C.deep }}>
                      ₦{displayAmount.toLocaleString()} {impactMessage}
                    </p>
                  </div>
                )}

                {/* Personal info */}
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: C.deep }}>First Name *</label>
                      <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: `1px solid ${C.sand}`, background: C.offWhite, color: C.textDark }} required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: C.deep }}>Last Name *</label>
                      <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: `1px solid ${C.sand}`, background: C.offWhite, color: C.textDark }} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: C.deep }}>Email Address *</label>
                    <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: `1px solid ${C.sand}`, background: C.offWhite, color: C.textDark }} required />
                  </div>
                </div>

                <button type="submit"
                  className="w-full rounded-full text-sm font-bold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${C.gold}, #A07820)`, padding: "16px 32px" }}>
                  <Heart className="w-4 h-4" />
                  Donate ₦{displayAmount.toLocaleString()} {donationType === "monthly" ? "/ month" : ""}
                </button>
                <p className="text-xs text-center" style={{ color: C.textMuted }}>
                  🔒 Secured by Paystack · Your data is safe with us
                </p>
              </form>
            )}
          </FadeUp>

          {/* Right side info */}
          <FadeUp delay={0.2} className="space-y-8">
            <div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Why Your Gift Matters</h3>
              <div className="space-y-4">
                {[
                  "100% of programme donations reach beneficiaries directly",
                  "Transparent financial reporting — published annually",
                  "Every donor receives a tax-deductible receipt",
                  "Your impact is tracked and reported back to you",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: C.gold }} />
                    <span className="text-sm" style={{ color: C.textMuted }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project sponsorship */}
            <div>
              <h3 className="text-xl font-black mb-4" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Sponsor a Specific Project</h3>
              <div className="space-y-4">
                {PROJECTS.map((p) => {
                  const pct = Math.round((p.raised / p.goal) * 100);
                  return (
                    <div key={p.title} className="p-5 rounded-2xl" style={{ background: C.cream }}>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm font-bold" style={{ color: C.deep }}>{p.title}</p>
                        <span className="text-xs font-bold" style={{ color: C.gold }}>{pct}%</span>
                      </div>
                      <div className="h-2 rounded-full mb-2" style={{ background: C.sand }}>
                        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${C.primary}, ${C.gold})` }} />
                      </div>
                      <p className="text-xs" style={{ color: C.textMuted }}>₦{p.raised.toLocaleString()} raised of ₦{p.goal.toLocaleString()}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: `${C.primary}10`, border: `1px solid ${C.sand}` }}>
              <Shield className="w-8 h-8 mb-3" style={{ color: C.primary }} />
              <p className="text-sm font-bold mb-1" style={{ color: C.deep }}>Secure & Trusted</p>
              <p className="text-xs" style={{ color: C.textMuted }}>All transactions are processed securely. Thamani is a registered non-profit with full financial transparency.</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
