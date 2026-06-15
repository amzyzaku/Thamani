"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Star, Shield, Lightbulb, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const C = {
  primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C",
  sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8",
  gold: "#C79A3B", textDark: "#1C1007", textMuted: "#6B5B4E",
};

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const VALUES = [
  { icon: Shield, title: "Integrity", desc: "We operate with transparency, honesty, and accountability in all we do." },
  { icon: Heart, title: "Inclusion", desc: "We believe every person deserves dignity, opportunity, and a seat at the table." },
  { icon: Star, title: "Excellence", desc: "We hold ourselves to the highest standards in programme delivery and impact." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace creative solutions and continuously seek better ways to serve communities." },
  { icon: CheckCircle, title: "Accountability", desc: "We are accountable to our beneficiaries, donors, and the communities we serve." },
  { icon: TrendingUp, title: "Leadership", desc: "We cultivate leadership at all levels — from our team to our beneficiaries." },
];

const TEAM = [
  { name: "Dr. Fatima Al-Rashid", role: "Executive Director", bio: "With 20+ years in international development, Fatima leads Thamani's strategic vision and programme delivery.", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
  { name: "Emmanuel Osei", role: "Director of Programmes", bio: "Emmy oversees all field operations and ensures our programmes deliver measurable impact.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Amina Bello", role: "Head of Partnerships", bio: "Amina builds and nurtures relationships with donors, governments, and global development partners.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Chukwuemeka Eze", role: "Director of Finance", bio: "Emeka ensures financial integrity and stewardship across all Thamani operations.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" },
];

const BOARD = [
  { name: "Prof. Ngozi Adeyemi", role: "Board Chair", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80" },
  { name: "Mr. Suleiman Garba", role: "Vice Chair", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Dr. Adaeze Nwosu", role: "Treasurer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
  { name: "Barrister Musa Ibrahim", role: "Legal Advisor", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80" },
];

export default function WhoWeArePage() {
  return (
    <div style={{ background: C.offWhite }}>
      {/* Hero */}
      <section className="pb-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.deep}, ${C.primary})`, paddingTop: "140px" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>
            Who We Are
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
            Our Story
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            A movement rooted in community, driven by purpose, and sustained by the belief that every life deserves transformation.
          </motion.p>
        </div>
      </section>

      {/* About Thamani */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
              alt="About Thamani" className="rounded-3xl w-full object-cover aspect-[4/3]"
              style={{ boxShadow: "0 24px 80px rgba(111,78,55,0.15)" }} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>Our History</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
              From a Vision to a Movement
            </h2>
            <p className="text-base leading-8 mb-5" style={{ color: C.textMuted }}>
              Thamani was founded in 2018 by a group of development professionals who witnessed firsthand the untapped potential of women and youth in Nigerian communities. The word <em>Thamani</em> means "value" in Swahili — a declaration that every person has inherent worth and the right to opportunities.
            </p>
            <p className="text-base leading-8 mb-5" style={{ color: C.textMuted }}>
              What began as a small skills training initiative in Abuja has grown into a nationally recognised organisation operating across multiple states, with partnerships spanning international development agencies, governments, and the private sector.
            </p>
            <p className="text-base leading-8 mb-8" style={{ color: C.textMuted }}>
              Over eight years, we have reached more than 20,000 individuals, implemented over 120 projects, and built a reputation for transparency, excellence, and transformative impact.
            </p>
            <Link href="/impact"
              className="inline-flex items-center gap-2 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.warm})`, padding: "14px 32px" }}>
              See Our Impact <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8">
          {[
            { label: "Our Mission", title: "What We Do Every Day", content: "To empower women and youth through transformative education, skills development, advocacy, and community-centred programmes that create lasting economic and social impact across Africa.", color: C.primary },
            { label: "Our Vision", title: "The World We Are Building", content: "A world where every woman and young person in Africa has the opportunity, resources, and support to reach their full potential and actively shape the future of their communities.", color: C.gold },
          ].map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.15}>
              <div className="p-10 rounded-3xl h-full" style={{ background: C.cream, boxShadow: "0 4px 24px rgba(111,78,55,0.08)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: item.color }}>{item.label}</p>
                <h3 className="text-2xl font-black mb-5" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{item.title}</h3>
                <p className="text-base leading-8" style={{ color: C.textMuted }}>{item.content}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Core Values</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
              What We Stand For
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl transition-all hover:scale-[1.02]"
                  style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.06)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${C.primary}18` }}>
                    <v.icon className="w-6 h-6" style={{ color: C.primary }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Leadership</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Meet Our Team</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <FadeUp key={m.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                  style={{ background: C.cream, boxShadow: "0 4px 24px rgba(111,78,55,0.08)" }}>
                  <img src={m.image} alt={m.name} className="w-full h-56 object-cover" />
                  <div className="p-5">
                    <p className="font-bold mb-0.5" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{m.name}</p>
                    <p className="text-xs font-semibold mb-3" style={{ color: C.gold }}>{m.role}</p>
                    <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{m.bio}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Governance</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Board of Directors</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARD.map((b, i) => (
              <FadeUp key={b.name} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl" style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.06)" }}>
                  <img src={b.image} alt={b.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4" style={{ borderColor: C.sand }} />
                  <p className="font-bold" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{b.name}</p>
                  <p className="text-xs font-semibold mt-1" style={{ color: C.gold }}>{b.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
