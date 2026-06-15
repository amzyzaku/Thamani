"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Heart, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";

const C = { primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C", sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8", gold: "#C79A3B", textDark: "#1C1007", textMuted: "#6B5B4E" };

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

function FormInput({ label, type = "text", placeholder, required = false }: { label: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ color: C.deep }}>{label}{required && <span style={{ color: C.primary }}> *</span>}</label>
      {type === "textarea" ? (
        <textarea rows={4} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
          style={{ border: `1px solid ${C.sand}`, background: C.offWhite, color: C.textDark }}
          onFocus={e => e.target.style.borderColor = C.primary} onBlur={e => e.target.style.borderColor = C.sand} />
      ) : (
        <input type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{ border: `1px solid ${C.sand}`, background: C.offWhite, color: C.textDark }}
          onFocus={e => e.target.style.borderColor = C.primary} onBlur={e => e.target.style.borderColor = C.sand} />
      )}
    </div>
  );
}

const OPPORTUNITIES = [
  { icon: GraduationCap, title: "Communications Fellow", type: "Fellowship", duration: "6 months", location: "Abuja (Hybrid)" },
  { icon: Briefcase, title: "Programme Officer Intern", type: "Internship", duration: "3 months", location: "Abuja (On-site)" },
  { icon: Users, title: "Community Mobilisation Volunteer", type: "Volunteer", duration: "Ongoing", location: "Multiple states" },
  { icon: Heart, title: "Monitoring & Evaluation Intern", type: "Internship", duration: "3 months", location: "Remote" },
];

export default function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (form: string) => (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div style={{ background: C.offWhite }}>
      <section className="pb-20"
        style={{ background: `linear-gradient(135deg, ${C.deep}, ${C.primary})`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>Get Involved</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Join Our Movement</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            There are many ways to contribute to the empowerment of women and youth in Africa.
          </motion.p>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${C.primary}18` }}>
              <Users className="w-7 h-7" style={{ color: C.primary }} />
            </div>
            <h2 className="text-4xl font-black mb-4" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Volunteer With Us</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.textMuted }}>
              Share your skills and time to directly support our programmes and communities.
            </p>
          </FadeUp>
          {submitted === "volunteer" ? (
            <FadeUp>
              <div className="text-center p-12 rounded-3xl" style={{ background: C.offWhite }}>
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: "#2E7D32" }} />
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Application Received!</h3>
                <p style={{ color: C.textMuted }}>Thank you for your interest. Our team will be in touch within 5 business days.</p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit("volunteer")} className="p-8 rounded-3xl space-y-5" style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.08)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput label="Full Name" placeholder="Your full name" required />
                  <FormInput label="Email Address" type="email" placeholder="your@email.com" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput label="Phone Number" type="tel" placeholder="+234 000 000 0000" />
                  <FormInput label="Location" placeholder="City, State" />
                </div>
                <FormInput label="Skills & Expertise" placeholder="e.g., Teaching, Digital Marketing, Project Management" required />
                <FormInput label="Areas of Interest" type="textarea" placeholder="Which of our programmes interests you most and why?" required />
                <button type="submit"
                  className="w-full rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.warm})`, padding: "16px 32px" }}>
                  Submit Volunteer Application
                </button>
              </form>
            </FadeUp>
          )}
        </div>
      </section>

      {/* Partner */}
      <section className="py-24" style={{ background: C.offWhite }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${C.gold}18` }}>
              <Briefcase className="w-7 h-7" style={{ color: C.gold }} />
            </div>
            <h2 className="text-4xl font-black mb-4" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Partner With Us</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.textMuted }}>
              Collaborate with Thamani to amplify impact through funding, expertise, or programme partnerships.
            </p>
          </FadeUp>
          {submitted === "partner" ? (
            <FadeUp>
              <div className="text-center p-12 rounded-3xl" style={{ background: C.cream }}>
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: "#2E7D32" }} />
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Inquiry Received!</h3>
                <p style={{ color: C.textMuted }}>Our partnerships team will contact you within 3 business days.</p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit("partner")} className="p-8 rounded-3xl space-y-5" style={{ background: C.cream, boxShadow: "0 4px 24px rgba(111,78,55,0.08)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput label="Organisation Name" placeholder="Your organisation" required />
                  <FormInput label="Contact Name" placeholder="Your full name" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput label="Email Address" type="email" placeholder="contact@org.com" required />
                  <FormInput label="Phone Number" type="tel" placeholder="+234 000 000 0000" />
                </div>
                <FormInput label="Partnership Interest" type="textarea" placeholder="Describe how you'd like to partner with Thamani" required />
                <button type="submit"
                  className="w-full rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${C.gold}, #A07820)`, padding: "16px 32px" }}>
                  Submit Partnership Inquiry
                </button>
              </form>
            </FadeUp>
          )}
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24" style={{ background: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>Open Opportunities</p>
            <h2 className="text-4xl font-black" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>Internships & Fellowships</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPPORTUNITIES.map((o, i) => (
              <FadeUp key={o.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl transition-all hover:scale-[1.02]" style={{ background: C.offWhite, boxShadow: "0 4px 24px rgba(111,78,55,0.07)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${C.primary}15` }}>
                    <o.icon className="w-5 h-5" style={{ color: C.primary }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: C.gold }}>{o.type}</span>
                  <h3 className="text-base font-bold mt-2 mb-3" style={{ fontFamily: "Manrope, sans-serif", color: C.deep }}>{o.title}</h3>
                  <p className="text-xs mb-1" style={{ color: C.textMuted }}>📅 {o.duration}</p>
                  <p className="text-xs mb-5" style={{ color: C.textMuted }}>📍 {o.location}</p>
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: C.primary }}>
                    Apply Now <ArrowRight className="w-4 h-4" />
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
