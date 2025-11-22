import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import feature from "@/images/home-page/feature-section/feature.svg";
import icon from "@/images/home-page/feature-section/feature-icon.svg";

const FeatureSection = () => {
  const featureList = [
    { text: "Software with new dimensions the better." },
    { text: "Effortlessly manages all your information." },
    { text: "Simple Solutions for Complex Connections." },
    { text: "Complete business solutions for customers." },
  ];
  return (
    <section className="container">
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="xl:mt-[80px]">
          <Typography tag="h2" mb text="Discover & growth with analysis." />

          <Typography
            tag="p"
            mb
            text="Software with new dimensions. The better future and information about
          the virtual world."
          />

          <ul className="flex flex-col gap-[18px] text-[22px] text-ebony mb-[40px] xl:mb-0">
            {featureList.map((item, index) => (
              <li key={index} className="flex gap-[12px]">
                <Image src={icon} alt="icon" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Image src={feature} alt="feature image" className="w-[1200px]" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
