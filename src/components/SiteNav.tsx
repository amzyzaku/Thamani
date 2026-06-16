"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const C = { primary: "#6F4E37", deep: "#4A2F22", warm: "#8B5E3C", sand: "#D8C3A5", cream: "#F8F4EF", offWhite: "#FCFAF8", gold: "#C79A3B", textDark: "#1C1007", textMuted: "#7c6450ff" };

const NAV_LINKS = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Resources", href: "/resources" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(252,250,248,0.98)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 1px 20px rgba(111,78,55,0.08)",
      }}>
      <div className="mx-auto h-20 flex items-center justify-between"
        style={{paddingRight:"30px", paddingLeft:"30px",}}>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.gold})` }}>T</div>
          <div>
            <p className="font-bold text-base leading-tight" style={{ color: C.warm, fontFamily: "Manrope, sans-serif" }}>Thamani</p>
            <p className="text-[10px] leading-tight" style={{ color: C.textMuted }}>For Women & Youth</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href}
              className="text-sm font-medium transition-colors hover:text-[#6F4E37]"
              style={{ color: pathname === l.href ? C.primary : C.textDark, fontWeight: pathname === l.href ? 700 : 500 }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/get-involved"
            className="text-sm font-medium rounded-full transition-all"
            style={{ color: C.primary, padding: "10px 20px" }}>
            Volunteer
          </Link>
          <Link href="/donate"
            className="text-sm font-semibold rounded-full text-white transition-all hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.warm})`, padding: "10px 24px" }}>
            Donate Now
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: C.primary }}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t px-6 py-6 flex flex-col gap-4" style={{ background: C.offWhite, borderColor: C.sand }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-base font-medium py-1" style={{ color: C.textDark }}>{l.label}</Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: C.sand }}>
            <Link href="/get-involved" onClick={() => setMenuOpen(false)}
              className="text-center py-3 rounded-full font-semibold text-sm border"
              style={{ color: C.primary, borderColor: C.sand }}>Volunteer</Link>
            <Link href="/donate" onClick={() => setMenuOpen(false)}
              className="text-center py-3 rounded-full font-semibold text-sm text-white"
              style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.warm})` }}>Donate Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
