import React, { FC } from "react";
import Typography from "@/components/Typography";
import PricingPlanCard from "@/components/home-page/PricingPlanCard";
import { useTranslations } from "next-intl";

export interface Plan {
  title: string;
  price: string;
  features: {
    name: string;
    available: boolean;
  }[];
  actionLabel: string;
  className?: string;
}

const PricingPlanSection: FC = () => {
  const t = useTranslations("homePage.pricingPlanSection");

  const plans: Plan[] = [
    {
      title: t("pricingCard.pricingTitle.title1"),
      price: "€149",
      features: [
        {
          name: `${t("pricingCard.pricingFeatures.item1") + " " + "1"}`,
          available: true,
        },
        { name: t("pricingCard.pricingFeatures.item2"), available: true },
        { name: t("pricingCard.pricingFeatures.item3"), available: true },
        { name: t("pricingCard.pricingFeatures.item4"), available: true },
        { name: t("pricingCard.pricingFeatures.item5"), available: true },
        { name: t("pricingCard.pricingFeatures.item6"), available: false },
        { name: t("pricingCard.pricingFeatures.item7"), available: false },
        { name: t("pricingCard.pricingFeatures.item8"), available: false },
        { name: t("pricingCard.pricingFeatures.item9"), available: false },
        { name: t("pricingCard.pricingFeatures.item10"), available: false },
      ],
      actionLabel: t("pricingCard.pricingButton"),
    },
    {
      title: t("pricingCard.pricingTitle.title2"),
      price: "€249",
      features: [
        {
          name: `${t("pricingCard.pricingFeatures.item1") + " " + "3"}`,
          available: true,
        },
        { name: t("pricingCard.pricingFeatures.item2"), available: true },
        { name: t("pricingCard.pricingFeatures.item3"), available: true },
        { name: t("pricingCard.pricingFeatures.item4"), available: true },
        { name: t("pricingCard.pricingFeatures.item5"), available: true },
        { name: t("pricingCard.pricingFeatures.item6"), available: false },
        { name: t("pricingCard.pricingFeatures.item7"), available: false },
        { name: t("pricingCard.pricingFeatures.item8"), available: false },
        { name: t("pricingCard.pricingFeatures.item9"), available: false },
        { name: t("pricingCard.pricingFeatures.item10"), available: false },
      ],
      actionLabel: t("pricingCard.pricingButton"),
      className: "xxl:scale-105",
    },
    {
      title: t("pricingCard.pricingTitle.title3"),
      price: "€449",
      features: [
        {
          name: `${t("pricingCard.pricingFeatures.item1") + " " + "5"}`,
          available: true,
        },
        { name: t("pricingCard.pricingFeatures.item2"), available: true },
        { name: t("pricingCard.pricingFeatures.item3"), available: true },
        { name: t("pricingCard.pricingFeatures.item4"), available: true },
        { name: t("pricingCard.pricingFeatures.item5"), available: true },
        { name: t("pricingCard.pricingFeatures.item6"), available: false },
        { name: t("pricingCard.pricingFeatures.item7"), available: false },
        { name: t("pricingCard.pricingFeatures.item8"), available: false },
        { name: t("pricingCard.pricingFeatures.item9"), available: false },
        { name: t("pricingCard.pricingFeatures.item10"), available: false },
      ],
      actionLabel: t("pricingCard.pricingButton"),
    },
  ];

  return (
    <section id="pricing" className="container mb-[140px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center xl:w-[50%] mb-12">
          <Typography tag="h2" mb text={t("pricingPlanTitle")} />
          <Typography tag="p" mb align="center" text={t("pricingPlanText")} />
        </div>

        <div className="w-[100%] grid gap-[20px] xxl:gap-[40px] xl:grid-cols-3">
          {plans.map((item, index) => (
            <PricingPlanCard key={index} plan={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlanSection;
