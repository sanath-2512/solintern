import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="w-full flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 relative z-50"
      style={{
        background: "rgba(13, 19, 33, 0.45)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-1.5">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #f97316 40%, #f59e0b 100%)" }}
        >
          <svg viewBox="0 0 28 28" fill="none" className="w-full h-full p-1">
            <path d="M6 20 L14 8 L22 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">
          <span style={{ color: "#f97316" }}>G</span>Stake
        </span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-white/75 hover:text-white text-sm font-medium transition-colors">Properties</a>
        <a href="#" className="text-white/75 hover:text-white text-sm font-medium transition-colors">Digital Assets</a>
        <a href="#" className="text-white/75 hover:text-white text-sm font-medium transition-colors">Stake &amp; Earn</a>
      </div>

      {/* Desktop Auth */}
      <div className="hidden md:flex items-center gap-3">
        <button className="text-white text-sm font-medium px-4 py-2 hover:text-white/70 transition-colors">Login</button>
        <button className="text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all" style={{ background: "#f97316" }}>
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <div className="flex flex-col gap-1.5">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-3 md:hidden"
          style={{ background: "rgba(13,19,33,0.92)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <a href="#" className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors">Properties</a>
          <a href="#" className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors">Digital Assets</a>
          <a href="#" className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors">Stake &amp; Earn</a>
          <div className="flex gap-3 pt-1">
            <button className="flex-1 text-white text-sm font-medium py-2 rounded-full border border-white/20 hover:border-white/40 transition-colors">Login</button>
            <button className="flex-1 text-white text-sm font-semibold py-2 rounded-full hover:opacity-90 transition-all" style={{ background: "#f97316" }}>Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
