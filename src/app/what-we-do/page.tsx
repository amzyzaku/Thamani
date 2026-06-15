"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, BookOpen, Award, Briefcase, Globe, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const C = { primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C", sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8", gold: "#C79A3B", textDark: "#1C1007", textMuted: "#6B5B4E" };

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

const PROGRAMS = [
  {
    icon: Heart, title: "She Leads Programme", category: "Women Empowerment", color: "#C79A3B",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80",
    desc: "A 6-month leadership accelerator equipping women aged 18–35 with political, civic, and community leadership skills.",
    objectives: ["Build leadership confidence and public speaking skills", "Provide mentorship from established women leaders", "Connect graduates to governance and civic opportunities", "Create a lasting alumni network for ongoing support"],
    beneficiaries: "Women aged 18–35 in underserved communities", achievements: "1,200+ graduates across 5 cohorts"
  },
  {
    icon: Users, title: "Youth Tech Hub", category: "Youth Development", color: "#6F4E37",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
    desc: "Free digital literacy and coding bootcamps for unemployed youth across 12 communities, preparing them for the digital economy.",
    objectives: ["Deliver 6-week coding and digital skills bootcamps", "Partner with tech companies for internship placements", "Provide access to devices and reliable internet", "Launch youth-led digital enterprises post-graduation"],
    beneficiaries: "Unemployed youth aged 16–28", achievements: "3,000+ youth trained in digital skills"
  },
  {
    icon: BookOpen, title: "Girls Education Initiative", category: "Education", color: "#8B5E3C",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=700&q=80",
    desc: "Scholarship programmes, school infrastructure support, and mentorship ensuring girls complete secondary and tertiary education.",
    objectives: ["Award annual scholarships to 500 girls", "Rehabilitate school facilities in rural communities", "Train teachers on gender-responsive pedagogy", "Engage parents in girls' education advocacy"],
    beneficiaries: "Girls aged 10–22 in underserved communities", achievements: "2,400+ scholarships awarded"
  },
  {
    icon: Award, title: "Community Leadership Academy", category: "Leadership", color: "#C79A3B",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700&q=80",
    desc: "A capacity-building programme for community leaders, local government officials, and civil society actors.",
    objectives: ["Train 200 community leaders annually", "Facilitate policy dialogue forums", "Build local advocacy and governance skills", "Connect leaders to national and international networks"],
    beneficiaries: "Community leaders, LGA officials, CSO staff", achievements: "800+ leaders trained"
  },
  {
    icon: Briefcase, title: "Market Women Support Fund", category: "Economic Inclusion", color: "#6F4E37",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=700&q=80",
    desc: "Micro-grants, business training, and cooperative support for informal market women to grow sustainable enterprises.",
    objectives: ["Disburse micro-grants of ₦50,000–₦200,000", "Provide 8-week business management training", "Form women's savings cooperatives", "Link beneficiaries to formal financial services"],
    beneficiaries: "Informal market women aged 20–55", achievements: "₦50M+ in micro-grants disbursed"
  },
  {
    icon: Globe, title: "Community Voice Programme", category: "Community Development", color: "#8B5E3C",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=700&q=80",
    desc: "Grassroots advocacy and community mobilisation programme ensuring local voices shape policies that affect their lives.",
    objectives: ["Train 500 community advocates annually", "Facilitate budget tracking in 20 LGAs", "Host quarterly policy dialogue townhalls", "Produce community-generated reports for policymakers"],
    beneficiaries: "Community members, youth groups, women's associations", achievements: "47 communities engaged"
  },
];

export default function WhatWeDoPage() {
  return (
    <div style={{ background: C.offWhite }}>
      <section className="pb-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.deep}, ${C.primary})`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>What We Do</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Our Programmes</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Six core intervention areas delivering measurable, sustainable impact for women and youth across Nigeria and Africa.
          </motion.p>
        </div>
      </section>

      <section className="py-24" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-20">
          {PROGRAMS.map((p, i) => (
            <FadeUp key={p.title} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img src={p.image} alt={p.title} className="rounded-3xl w-full object-cover aspect-[4/3]" style={{ boxShadow: "0 24px 80px rgba(111,78,55,0.15)" }} />
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: `${p.color}18`, color: p.color }}>{p.category}</span>
                  <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{p.title}</h2>
                  <p className="text-base leading-8 mb-6" style={{ color: C.textMuted }}>{p.desc}</p>
                  <div className="mb-6 space-y-3">
                    {p.objectives.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 mt-1 shrink-0" style={{ color: p.color }} />
                        <span className="text-sm" style={{ color: C.textMuted }}>{o}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 mb-8 flex-wrap">
                    <div><p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: C.gold }}>Beneficiaries</p><p className="text-sm font-medium" style={{ color: C.deep }}>{p.beneficiaries}</p></div>
                    <div><p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: C.gold }}>Achievements</p><p className="text-sm font-medium" style={{ color: C.deep }}>{p.achievements}</p></div>
                  </div>
                  <Link href="/get-involved"
                    className="inline-flex items-center gap-2 rounded-full text-sm font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.warm})`, padding: "14px 32px" }}>
                    Get Involved <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
