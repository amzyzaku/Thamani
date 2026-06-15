"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Search, Filter, FileText, BookOpen, Wrench, TrendingUp } from "lucide-react";

const C = { primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C", sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8", gold: "#C79A3B", textDark: "#1C1007", textMuted: "#6B5B4E" };

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

const CATEGORIES = ["All", "Reports", "Publications", "Toolkits", "Research"];

const RESOURCES = [
  { title: "Annual Report 2025", category: "Reports", icon: FileText, date: "June 2026", desc: "Comprehensive overview of Thamani's programmes, impact metrics, and financial stewardship for 2025.", size: "4.2 MB" },
  { title: "She Leads Programme Impact Report", category: "Reports", icon: TrendingUp, date: "May 2026", desc: "Detailed impact assessment of the 2024–2025 She Leads cohort covering 1,200 graduates.", size: "2.8 MB" },
  { title: "Women's Economic Empowerment Toolkit", category: "Toolkits", icon: Wrench, date: "April 2026", desc: "A practical resource guide for practitioners implementing women's economic inclusion programmes.", size: "6.1 MB" },
  { title: "Youth Digital Skills: State of Play in Nigeria", category: "Research", icon: BookOpen, date: "March 2026", desc: "Original research on digital skills gaps among Nigerian youth and evidence-based recommendations.", size: "3.5 MB" },
  { title: "Annual Report 2024", category: "Reports", icon: FileText, date: "June 2025", desc: "Our 2024 annual report detailing programme delivery, partnerships, and organisational growth.", size: "3.9 MB" },
  { title: "Community Advocacy Handbook", category: "Toolkits", icon: Wrench, date: "February 2025", desc: "Step-by-step guide for community members on budget tracking, advocacy, and civic engagement.", size: "2.2 MB" },
  { title: "Girls Education in Nigeria: Barriers & Solutions", category: "Research", icon: BookOpen, date: "January 2025", desc: "Evidence-based research examining systemic barriers to girls' education and effective interventions.", size: "4.7 MB" },
  { title: "Thamani Strategic Plan 2024–2026", category: "Publications", icon: FileText, date: "December 2023", desc: "Our three-year strategic direction, theory of change, and programme priorities.", size: "3.1 MB" },
];

const NEWS = [
  { image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80", date: "June 10, 2026", category: "Programmes", title: "She Leads Programme Graduates 200 Women Leaders in 2026 Cohort", summary: "The fifth cohort celebrated graduation with 200 new community leaders." },
  { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", date: "May 22, 2026", category: "Partnership", title: "Thamani Partners with UNICEF to Expand Youth Education Reach", summary: "New strategic partnership extends our digital literacy programme to 20 additional communities." },
  { image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&q=80", date: "April 15, 2026", category: "Impact", title: "Market Women Fund Reaches ₦50M in Micro-Grants Disbursed", summary: "Milestone marks transformative moment for economic inclusion across Nigeria." },
  { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", date: "March 8, 2026", category: "Events", title: "Thamani Hosts International Women's Day Forum in Abuja", summary: "500+ women gathered for a day of dialogue, celebration, and commitment to gender equity." },
  { image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80", date: "February 20, 2026", category: "Research", title: "New Research: Digital Skills Gap Widening for Nigerian Youth", summary: "Our latest study reveals a 34% gap in digital skills access between urban and rural youth." },
  { image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80", date: "January 15, 2026", category: "Awards", title: "Thamani Recognised as Top NGO in West Africa by Development Monitor", summary: "Our work in women empowerment and youth development earns prestigious regional recognition." },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = RESOURCES.filter(r =>
    (activeCategory === "All" || r.category === activeCategory) &&
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ background: C.offWhite }}>
      <section className="pb-20"
        style={{ background: `linear-gradient(135deg, ${C.deep}, ${C.primary})`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>Resources</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Knowledge Hub</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Reports, research, toolkits, and publications from Thamani's work across Africa.
          </motion.p>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-24" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.textMuted }} />
                <input type="text" placeholder="Search resources..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                  style={{ border: `1px solid ${C.sand}`, background: C.cream, color: C.textDark }} />
              </div>
              <div className="flex gap-2 flex-wrap">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                    style={{ background: activeCategory === cat ? C.primary : C.cream, color: activeCategory === cat ? "white" : C.textMuted, border: `1px solid ${activeCategory === cat ? C.primary : C.sand}` }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.07}>
                <div className="p-6 rounded-2xl h-full flex flex-col transition-all hover:scale-[1.02]"
                  style={{ background: C.cream, boxShadow: "0 4px 24px rgba(111,78,55,0.07)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${C.primary}15` }}>
                    <r.icon className="w-5 h-5" style={{ color: C.primary }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold }}>{r.category} · {r.date}</span>
                  <h3 className="text-sm font-bold mb-2 flex-1" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{r.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: C.textMuted }}>{r.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: C.textMuted }}>{r.size}</span>
                    <button className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80" style={{ color: C.primary }}>
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg font-semibold" style={{ color: C.textMuted }}>No resources found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* News */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Latest</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>News & Updates</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <FadeUp key={n.title} delay={i * 0.07}>
                <article className="rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                  style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.08)" }}>
                  <img src={n.image} alt={n.title} className="w-full h-44 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${C.primary}15`, color: C.primary }}>{n.category}</span>
                      <span className="text-xs" style={{ color: C.textMuted }}>{n.date}</span>
                    </div>
                    <h3 className="text-sm font-bold leading-snug mb-2" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{n.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>{n.summary}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
