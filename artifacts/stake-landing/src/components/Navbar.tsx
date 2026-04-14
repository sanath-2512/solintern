import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 sm:px-10 py-4 relative z-50">
      <div className="flex items-center gap-1.5">
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}>
          <svg viewBox="0 0 28 28" fill="none" className="w-full h-full p-1">
            <path d="M6 20 L14 8 L22 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-white font-bold text-xl"><span style={{ color: "#f97316" }}>G</span>Stake</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Properties", "Digital Assets", "Stake & Earn"].map((l) => (
          <a key={l} href="#" className="text-white/75 hover:text-white text-sm font-medium transition-colors">{l}</a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <button className="text-white text-sm font-medium px-4 py-2 hover:text-white/70 transition-colors">Login</button>
        <button className="text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all" style={{ background: "#f97316" }}>Sign Up</button>
      </div>

      <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
        <div className="flex flex-col gap-1.5">
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-3 md:hidden" style={{ background: "rgba(13,19,33,0.95)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {["Properties", "Digital Assets", "Stake & Earn"].map((l) => (
            <a key={l} href="#" className="text-white/80 hover:text-white text-sm font-medium py-1.5 transition-colors">{l}</a>
          ))}
          <div className="flex gap-3 pt-1">
            <button className="flex-1 text-white text-sm py-2 rounded-full border border-white/20">Login</button>
            <button className="flex-1 text-white text-sm font-semibold py-2 rounded-full" style={{ background: "#f97316" }}>Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
