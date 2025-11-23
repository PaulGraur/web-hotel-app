import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import feature from "@/images/home-page/feature-section/feature.png";
import icon from "@/images/home-page/feature-section/feature-icon.svg";
import { useTranslations } from "next-intl";

const FeatureSection = () => {
  const t = useTranslations("homePage.featureSection");

  const featureList = [
    { text: t("featureList.featureItem1") },
    { text: t("featureList.featureItem2") },
    { text: t("featureList.featureItem3") },
    { text: t("featureList.featureItem4") },
  ];
  return (
    <section className="container">
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="xl:mt-[80px]">
          <Typography tag="h2" mb text={t("featureTitle")} />
          <Typography tag="p" mb text={t("featureText")} />

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
