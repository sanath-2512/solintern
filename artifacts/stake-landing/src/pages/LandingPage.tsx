import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PriceProgression from "@/components/PriceProgression";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full" style={{ background: "#0d1321" }}>
      <Navbar />
      <HeroSection />
      <PriceProgression />
    </div>
  );
}
