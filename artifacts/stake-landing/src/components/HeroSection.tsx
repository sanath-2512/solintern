import puzzleImage from "@assets/Frame_1_1776168153956.png";
import jigsawPiece from "@assets/jigsaw_1776168153957.png";
import arrow from "@assets/arrow_1776168153955.png";

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* Hero Text */}
      <div className="flex flex-col items-center text-center px-5 pt-6 pb-6 sm:pt-10 sm:pb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl" style={{ letterSpacing: "-0.02em" }}>
          <span className="text-white">Discover </span>
          <span style={{ color: "#f97316" }}>high-growth</span>
          <br />
          <span className="text-white">property investments</span>
        </h1>
        <p className="mt-4 text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
          Join the CEG Equity Token batch. Start building your portfolio with fractional ownership of global assets.
        </p>
        <button
          className="mt-7 flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold hover:opacity-90 active:scale-95 transition-all"
          style={{ background: "#f97316", boxShadow: "0 4px 24px rgba(249,115,22,0.35)" }}
        >
          Start Earning Now
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Property Card */}
      <div className="mx-4 sm:mx-8 lg:mx-auto lg:max-w-5xl">
        <div
          className="rounded-2xl overflow-hidden flex flex-col md:flex-row"
          style={{ background: "rgba(15,22,40,0.6)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
        >
          {/* Puzzle Image with arrow pinned to its right edge */}
          <div className="relative flex-1 min-h-[220px] sm:min-h-[280px] md:min-h-[320px]">
            <img src={puzzleImage} alt="Premium property" className="w-full h-full object-cover" />

            {/* Floating jigsaw piece */}
            <div className="absolute" style={{ bottom: "10%", left: "38%", width: "clamp(80px, 13vw, 140px)", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.7))", transform: "rotate(-6deg)" }}>
              <img src={jigsawPiece} alt="" className="w-full h-auto" />
            </div>

            {/* Arrow at the right edge of the image on md+ */}
            <img
              src={arrow}
              alt=""
              className="hidden md:block absolute"
              style={{ right: "-8px", top: "50%", transform: "translateY(-50%)", width: "clamp(80px, 9vw, 115px)", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))", zIndex: 10 }}
            />
          </div>

          {/* Right Panel */}
          <div className="flex flex-col justify-center px-6 py-7 md:px-8 md:py-8 md:w-72 lg:w-80 shrink-0">
            <img src={arrow} alt="" className="mb-4 w-24 md:hidden" />

            <h2 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
              Access<br />premium<br />property<br />ownership<br />
              <span style={{ color: "#f97316" }}>for $150</span>
            </h2>

            <div className="mt-5 rounded-xl p-3 w-fit" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ background: "#f97316" }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3"><circle cx="10" cy="10" r="4" fill="white" /></svg>
                </div>
                <span className="text-white/60 text-xs">All Time Returns</span>
              </div>
              <div className="flex items-baseline gap-2 pl-7">
                <span className="text-white font-bold">AED 165,000</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded" style={{ color: "#22c55e", background: "rgba(34,197,94,0.15)" }}>+111%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 sm:h-14" />
    </section>
  );
}
