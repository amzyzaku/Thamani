"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart, Users, BookOpen, Briefcase, Globe, Award,
  ArrowRight, ChevronRight, Quote, Star,
} from "lucide-react";
import Link from "next/link";

// ─── Color tokens ─────────────────────────────────────────────────────────────
const C = {
  primary: "#6F4E37",
  deep: "#4A2F22",
  warm: "#8B5E3C",
  sand: "#D8C3A5",
  cream: "#F8F4EF",
  offWhite: "#FCFAF8",
  gold: "#C79A3B",
  success: "#2E7D32",
  textDark: "#1C1007",
  textMuted: "#6B5B4E",
};

// ─── Animated counter ────────────────────────────────────────────────────────
function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── Fade-up wrapper ─────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 12500, suffix: "+", label: "Youth Reached" },
  { value: 8200, suffix: "+", label: "Women Empowered" },
  { value: 47, suffix: "", label: "Communities Impacted" },
  { value: 120, suffix: "+", label: "Projects Implemented" },
];

const FOCUS_AREAS = [
  { icon: Heart, title: "Women Empowerment", desc: "Providing women with skills, resources, and platforms to lead and thrive in their communities.", color: "#C79A3B" },
  { icon: Users, title: "Youth Development", desc: "Equipping young people with tools for leadership, entrepreneurship, and civic engagement.", color: "#6F4E37" },
  { icon: BookOpen, title: "Education Access", desc: "Expanding educational opportunities for underserved communities through scholarships and programs.", color: "#8B5E3C" },
  { icon: Award, title: "Leadership Training", desc: "Building the next generation of community leaders through mentorship and capacity building.", color: "#C79A3B" },
  { icon: Briefcase, title: "Economic Inclusion", desc: "Creating pathways to economic independence through skills training and micro-enterprise support.", color: "#6F4E37" },
  { icon: Globe, title: "Community Development", desc: "Strengthening communities through advocacy, infrastructure support, and social programmes.", color: "#8B5E3C" },
];

const INITIATIVES = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    title: "She Leads Programme",
    summary: "A 6-month leadership accelerator for women aged 18–35, building political and community leadership skills.",
    category: "Women Empowerment",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    title: "Youth Tech Hub",
    summary: "Free digital literacy and coding bootcamps for unemployed youth across 12 communities.",
    category: "Youth Development",
  },
  {
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80",
    title: "Market Women Support Fund",
    summary: "Micro-grants and business training for informal market women to grow sustainable enterprises.",
    category: "Economic Inclusion",
  },
];

const TESTIMONIALS = [
  {
    quote: "Thamani gave me the confidence and skills to start my own business. Today I employ 5 women in my community. This organisation changed my life.",
    name: "Aisha Mohammed",
    role: "Programme Graduate, She Leads 2024",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    program: "Women Empowerment",
  },
  {
    quote: "The Youth Tech Hub gave me skills I could not afford to learn elsewhere. I now work as a freelance developer and support my family.",
    name: "Emmanuel Okafor",
    role: "Youth Tech Hub Alumni",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    program: "Youth Development",
  },
  {
    quote: "With the micro-grant and business training, I tripled my market income. Thamani understands the real challenges we face.",
    name: "Fatima Yusuf",
    role: "Market Women Support Fund Beneficiary",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    program: "Economic Inclusion",
  },
];

const PARTNERS = [
  "UN Women", "UNICEF", "Ford Foundation", "MacArthur Foundation",
  "Bill & Melinda Gates Foundation", "EU Aid", "USAID", "ActionAid",
];

const NEWS = [
  {
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
    date: "June 10, 2026",
    category: "Programmes",
    title: "She Leads Programme Graduates 200 Women Leaders in 2026 Cohort",
    summary: "The fifth cohort of our flagship women leadership programme celebrated graduation with 200 new community leaders ready to drive change.",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    date: "May 22, 2026",
    category: "Partnership",
    title: "Thamani Partners with UNICEF to Expand Youth Education Reach",
    summary: "A new strategic partnership will extend our digital literacy programme to 20 additional communities across three states.",
  },
  {
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&q=80",
    date: "April 15, 2026",
    category: "Impact",
    title: "Market Women Fund Reaches ₦50M in Micro-Grants Disbursed",
    summary: "The Support Fund milestone marks a transformative moment for economic inclusion of informal sector women across Nigeria.",
  },
];

const NAV_LINKS = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Resources", href: "/resources" },
];



// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: C.offWhite }}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.deep} 0%, ${C.primary} 60%, ${C.warm} 100%)`, paddingTop: "50px", paddingBottom: "40px", paddingLeft: "0", paddingRight: "0" }}>

        {/* African pattern overlay */}
        <div className="absolute inset-0 pattern-bg opacity-20" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: C.gold, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: C.sand, filter: "blur(60px)" }} />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ padding: "70px 24px 60px 64px" }}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full text-xs font-semibold"
              style={{ background: "rgba(199,154,59,0.2)", padding: "10px 10px", color: C.gold, border: "1px solid rgba(199,154,59,0.3)", marginBottom: "18px" }}
            >
              <Star className="w-3.5 h-3.5" />
              Empowering Communities Since 2018
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "Manrope, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", marginBottom: "18px" }}
            >
              Building a{" "}
              <span style={{ color: C.gold }}>Better Africa</span>
              {" "}for Women & Youth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.75)", marginBottom: "24px" }}
            >
              Thamani empowers women and youth through transformative programmes, advocacy, partnerships, and community development — creating lasting impact across Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/donate"
                className="inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{ background: C.gold, color: C.deep, padding: "10px 16px" }}>
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
              <Link href="/get-involved"
                className="inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.3)", color: "white", padding: "10px 16px" }}>
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/who-we-are"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.6)", padding: "10px 5px" }}>
                Join Our Community
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right — image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2" style={{ gap: "10px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="rounded-2xl overflow-hidden" style={{ height: "240px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                    alt="Women empowerment" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden" style={{ height: "160px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
                    alt="Youth development" className="w-full h-full object-cover" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "40px" }}>
                <div className="rounded-2xl overflow-hidden" style={{ height: "160px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                  <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&q=80"
                    alt="Community" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden" style={{ height: "240px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                  <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80"
                    alt="Impact" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 text-white"
              style={{ background: C.gold, borderRadius:"8px", padding:"5px 10px", boxShadow: "0 12px 40px rgba(199,154,59,0.4)" }}
            >
              <p className="text-2xl font-black" style={{ fontFamily: "Manrope, sans-serif" }}>20K+</p>
              <p className="text-xs font-medium opacity-80">Lives Transformed</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z" fill={C.offWhite} />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          IMPACT STATS
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Our Impact</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
              Numbers That Tell Our Story
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl transition-all hover:scale-105"
                  style={{ background: C.cream, boxShadow: "0 4px 24px rgba(111,78,55,0.06)" }}>
                  <p className="text-4xl md:text-5xl font-black mb-2" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
                    <Counter end={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm font-semibold" style={{ color: C.textMuted }}>{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO WE ARE PREVIEW
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/3]"
                  style={{ boxShadow: "0 24px 80px rgba(111,78,55,0.15)" }}>
                  <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                    alt="Who we are" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-5 px-6 py-5 rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.warm})`, boxShadow: "0 12px 40px rgba(111,78,55,0.3)" }}>
                  <p className="text-xl font-black" style={{ fontFamily: "Manrope, sans-serif" }}>Est. 2018</p>
                  <p className="text-xs opacity-80">8 Years of Impact</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6"
                style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
                A Movement Built on{" "}
                <span style={{ color: C.primary }}>Purpose</span>
              </h2>
              <p className="text-base leading-8 mb-5" style={{ color: C.textMuted }}>
                Thamani for Women & Youth Development Initiative is a non-profit organisation founded in 2018 with a clear purpose: to create a world where every woman and young person has the opportunity to reach their full potential.
              </p>
              <p className="text-base leading-8 mb-8" style={{ color: C.textMuted }}>
                We operate at the intersection of empowerment, education, and advocacy — running programmes that create sustainable, measurable change in communities across Nigeria and Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/who-we-are"
                  className="inline-flex items-center gap-2 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.warm})`, padding: "14px 32px" }}>
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORE FOCUS AREAS
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
              Our Core Focus Areas
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: C.textMuted }}>
              Six pillars of work that define how we create lasting change for women, youth, and communities.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area, i) => (
              <FadeUp key={area.title} delay={i * 0.08}>
                <div className="group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{ background: C.cream, boxShadow: "0 4px 24px rgba(111,78,55,0.06)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                    style={{ background: `${area.color}18` }}>
                    <area.icon className="w-6 h-6" style={{ color: area.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: C.textMuted }}>{area.desc}</p>
                  <Link href="/what-we-do"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: area.color }}>
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED INITIATIVES
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Current Initiatives</p>
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
                Featured Programmes
              </h2>
            </div>
            <Link href="/what-we-do"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: C.primary }}>
              View All Programmes <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {INITIATIVES.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                  style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.08)" }}>
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                      style={{ background: `${C.primary}15`, color: C.primary }}>
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: C.textMuted }}>{item.summary}</p>
                    <Link href="/what-we-do"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: C.primary }}>
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20"
        style={{ background: `linear-gradient(135deg, ${C.deep} 0%, ${C.primary} 100%)` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Impact Stories</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-16"
              style={{ fontFamily: "Manrope, sans-serif" }}>
              Lives Transformed
            </h2>
          </FadeUp>

          <div className="relative min-h-[280px]">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === activeTestimonial ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className={`absolute inset-0 ${i === activeTestimonial ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                <Quote className="w-12 h-12 mx-auto mb-6" style={{ color: C.gold, opacity: 0.5 }} />
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-8 max-w-3xl mx-auto"
                  style={{ fontFamily: "Manrope, sans-serif" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img src={t.image} alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2"
                    style={{ borderColor: C.gold }} />
                  <div className="text-left">
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm" style={{ color: C.sand }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{ background: i === activeTestimonial ? C.gold : "rgba(255,255,255,0.3)" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNERS
      ══════════════════════════════════════════ */}
      <section className="py-16" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: C.textMuted }}>
              Trusted by Leading Global Organisations
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {PARTNERS.map((p) => (
              <FadeUp key={p}>
                <div className="flex items-center justify-center px-4 py-4 rounded-xl text-xs font-semibold text-center transition-all hover:scale-105 cursor-pointer"
                  style={{ background: C.cream, color: C.textMuted, boxShadow: "0 2px 12px rgba(111,78,55,0.06)" }}>
                  {p}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWS
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Latest Updates</p>
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
                News & Updates
              </h2>
            </div>
            <Link href="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: C.primary }}>
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <FadeUp key={n.title} delay={i * 0.1}>
                <article className="rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                  style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.08)" }}>
                  <div className="h-48 overflow-hidden">
                    <img src={n.image} alt={n.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${C.primary}15`, color: C.primary }}>
                        {n.category}
                      </span>
                      <span className="text-xs" style={{ color: C.textMuted }}>{n.date}</span>
                    </div>
                    <h3 className="text-base font-bold leading-snug mb-2"
                      style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>
                      {n.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: C.textMuted }}>{n.summary}</p>
                    <Link href="/resources"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: C.primary }}>
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.primary} 0%, ${C.deep} 100%)` }}>
        <div className="absolute inset-0 pattern-bg opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: C.gold, filter: "blur(100px)" }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>
              Be Part of the Change
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}>
              Join Us in Creating{" "}
              <span style={{ color: C.gold }}>Lasting Impact</span>
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Every contribution — whether through donation, volunteering, or partnership — directly transforms lives and communities across Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/donate"
                className="inline-flex items-center gap-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{ background: C.gold, color: C.deep, padding: "16px 40px" }}>
                <Heart className="w-4 h-4" />
                Donate Today
              </Link>
              <Link href="/get-involved"
                className="inline-flex items-center gap-2.5 rounded-full text-sm font-semibold text-white border-2 transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)", padding: "16px 40px" }}>
                <Users className="w-4 h-4" />
                Volunteer
              </Link>
              <Link href="/get-involved"
                className="inline-flex items-center gap-2.5 rounded-full text-sm font-semibold text-white border-2 transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)", padding: "16px 40px" }}>
                <Globe className="w-4 h-4" />
                Partner With Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}


