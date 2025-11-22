import HeroSection from "@/app/sections/home-page/HeroSection";
import SolutionSection from "@/app/sections/home-page/SolutionSection";
import FeatureSection from "@/app/sections/home-page/FeatureSection";

export default function Home() {
  return (
    <div className="grid gap-[60px] xl:gap-[180px]">
      <HeroSection />
      <SolutionSection />
      <FeatureSection />
    </div>
  );
}
