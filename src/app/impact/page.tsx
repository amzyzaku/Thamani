"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Download, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const C = { primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C", sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8", gold: "#C79A3B", textDark: "#1C1007", textMuted: "#6B5B4E" };

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let s = 0; const step = end / 120;
    const t = setInterval(() => { s += step; if (s >= end) { setCount(end); clearInterval(t); } else setCount(Math.floor(s)); }, 16);
    return () => clearInterval(t);
  }, [inView, end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { value: 12500, suffix: "+", label: "Youth Reached", sub: "Across 12 states" },
  { value: 8200, suffix: "+", label: "Women Empowered", sub: "Through 6 programmes" },
  { value: 47, suffix: "", label: "Communities", sub: "Directly impacted" },
  { value: 120, suffix: "+", label: "Projects", sub: "Successfully implemented" },
  { value: 1200, suffix: "+", label: "She Leads Graduates", sub: "Women in leadership" },
  { value: 3000, suffix: "+", label: "Youth Trained", sub: "In digital skills" },
  { value: 2400, suffix: "+", label: "Scholarships Awarded", sub: "To girls" },
  { value: 50, suffix: "M+", label: "₦ Micro-Grants", sub: "Disbursed to women" },
];

const STORIES = [
  {
    name: "Aisha Mohammed", location: "Kano State", program: "She Leads Programme",
    before: "Aisha was a secondary school graduate with no employment prospects, struggling to support her family.",
    intervention: "She joined the 2023 She Leads cohort, receiving leadership training, mentorship, and a startup grant.",
    outcome: "Aisha now runs a tailoring cooperative employing 8 women and serves on her LGA women's council.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  },
  {
    name: "Emmanuel Okafor", location: "Lagos State", program: "Youth Tech Hub",
    before: "Emmanuel spent two years unemployed after university, unable to afford coding courses costing ₦500,000+.",
    intervention: "He enrolled in the free Youth Tech Hub bootcamp, completing a 6-week web development programme.",
    outcome: "Emmanuel now earns ₦250,000+ monthly as a freelance developer and mentors 5 other youth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Hadiza Musa", location: "Nasarawa State", program: "Market Women Support Fund",
    before: "Hadiza's small food stall was stagnating — she lacked capital and business knowledge to grow.",
    intervention: "She received a ₦150,000 micro-grant and completed 8 weeks of business management training.",
    outcome: "Hadiza tripled her revenue, opened a second stall, and formed a 15-member women's savings cooperative.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

const REPORTS = [
  { title: "Annual Report 2025", type: "Annual Report", year: "2025", pages: "48 pages" },
  { title: "She Leads Programme Impact Report", type: "Programme Report", year: "2025", pages: "32 pages" },
  { title: "Youth Tech Hub Outcomes Study", type: "Research", year: "2024", pages: "28 pages" },
  { title: "Annual Report 2024", type: "Annual Report", year: "2024", pages: "44 pages" },
];

export default function ImpactPage() {
  return (
    <div style={{ background: C.offWhite }}>
      <section className="pb-20"
        style={{ background: `linear-gradient(135deg, ${C.deep}, ${C.primary})`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>Our Impact</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Measuring Change</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Data-driven storytelling that shows exactly how Thamani transforms lives, communities, and futures.
          </motion.p>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Impact Dashboard</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>By The Numbers</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.07}>
                <div className="text-center p-7 rounded-2xl" style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.07)" }}>
                  <p className="text-4xl font-black mb-1" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
                    <Counter end={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm font-bold mb-1" style={{ color: C.deep }}>{s.label}</p>
                  <p className="text-xs" style={{ color: C.textMuted }}>{s.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Real Lives, Real Change</h2>
          </FadeUp>
          <div className="space-y-16">
            {STORIES.map((s, i) => (
              <FadeUp key={s.name} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <img src={s.image} alt={s.name} className="rounded-3xl w-full aspect-square object-cover" style={{ boxShadow: "0 24px 80px rgba(111,78,55,0.12)" }} />
                  </div>
                  <div className={`space-y-5 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: `${C.primary}15`, color: C.primary }}>{s.program}</span>
                    <h3 className="text-3xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{s.name}</h3>
                    <p className="text-sm font-semibold" style={{ color: C.gold }}>{s.location}</p>
                    {[{ label: "Before", text: s.before, color: "#DC2626" }, { label: "Intervention", text: s.intervention, color: C.primary }, { label: "Outcome", text: s.outcome, color: "#2E7D32" }].map((item) => (
                      <div key={item.label} className="p-5 rounded-xl border-l-4" style={{ background: C.cream, borderColor: item.color }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: item.color }}>{item.label}</p>
                        <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Transparency</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Reports & Publications</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REPORTS.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl transition-all hover:scale-[1.02]" style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.07)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${C.primary}15` }}>
                    <Download className="w-5 h-5" style={{ color: C.primary }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: C.gold }}>{r.type} · {r.year}</span>
                  <h3 className="text-base font-bold mt-2 mb-3" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{r.title}</h3>
                  <p className="text-xs mb-4" style={{ color: C.textMuted }}>{r.pages}</p>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: C.primary }}>
                    <Download className="w-4 h-4" /> Download PDF
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
