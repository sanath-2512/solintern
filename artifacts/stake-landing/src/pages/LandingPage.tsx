import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PriceProgression from "@/components/PriceProgression";
import bgImage from "@assets/bg_1776168153956.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full relative" style={{ background: "#0d1321" }}>
      {/* Background image — covers the full page including behind the navbar */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover object-top" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,19,33,0.3) 0%, rgba(13,19,33,0.7) 50%, #0d1321 85%)" }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <PriceProgression />
      </div>
    </div>
  );
}
