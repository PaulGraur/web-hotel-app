import HeroSection from "@/app/sections/home-page/HeroSection";
import SolutionSection from "@/app/sections/home-page/SolutionSection";
import FeatureSection from "@/app/sections/home-page/FeatureSection";
import InformationSections from "@/app/sections/home-page/InformationSections";
import OurSoftwareSection from "@/app/sections/home-page/OurSoftwareSection";
import PricingPlanSection from "@/app/sections/home-page/PricingPlanSection";

export default function Home() {
  return (
    <div className="grid gap-[80px] xl:gap-[180px]">
      <HeroSection />
      <SolutionSection />
      <FeatureSection />
      <InformationSections />
      <OurSoftwareSection />
      <PricingPlanSection />
    </div>
  );
}
