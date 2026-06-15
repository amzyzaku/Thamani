import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const C = { primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C", sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8", gold: "#C79A3B" };

export default function SiteFooter() {
  return (
    <footer style={{ background: C.deep, color: C.sand }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.gold})` }}>T</div>
              <div>
                <p className="font-bold text-white" style={{ fontFamily: "Manrope, sans-serif" }}>Thamani</p>
                <p className="text-xs" style={{ color: C.sand }}>For Women & Youth</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#B8A090" }}>
              Empowering women and youth through impactful programmes, advocacy, and community development across Africa.
            </p>
            <div className="flex gap-3">
              {["F", "T", "I", "L"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.1)", color: C.sand }}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Organisation</p>
            <div className="flex flex-col gap-2.5">
              {[["Who We Are", "/who-we-are"], ["What We Do", "/what-we-do"], ["Our Impact", "/impact"], ["Our Team", "/who-we-are"], ["Board", "/who-we-are"]].map(([l, h]) => (
                <Link key={l} href={h} className="text-sm transition-colors hover:text-white" style={{ color: "#B8A090" }}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get Involved</p>
            <div className="flex flex-col gap-2.5">
              {[["Donate", "/donate"], ["Volunteer", "/get-involved"], ["Partner With Us", "/get-involved"], ["Internships", "/get-involved"], ["Resources", "/resources"]].map(([l, h]) => (
                <Link key={l} href={h} className="text-sm transition-colors hover:text-white" style={{ color: "#B8A090" }}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-2.5"><Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.gold }} /><span className="text-sm" style={{ color: "#B8A090" }}>info@thamaniinitiative.org</span></div>
              <div className="flex items-start gap-2.5"><Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.gold }} /><span className="text-sm" style={{ color: "#B8A090" }}>+234 800 000 0000</span></div>
              <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.gold }} /><span className="text-sm" style={{ color: "#B8A090" }}>Abuja, Nigeria</span></div>
            </div>
            <p className="text-sm font-semibold text-white mb-2">Newsletter</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 text-sm px-3 py-2.5 rounded-lg outline-none"
                style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }} />
              <button className="px-3 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-80" style={{ background: C.gold }}>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-sm" style={{ color: "#B8A090" }}>© 2026 Thamani for Women & Youth Development Initiative. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-xs transition-colors hover:text-white" style={{ color: "#B8A090" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
