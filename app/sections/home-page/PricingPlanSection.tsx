import React, { FC } from "react";
import Typography from "@/components/Typography";
import PricingPlanCard from "@/components/home-page/PricingPlanCard";

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
  const plans: Plan[] = [
    {
      title: "BASIC PLAN",
      price: "$50",
      features: [
        { name: "Limited Access Library", available: true },
        { name: "100+ HTML UI Elements", available: false },
        { name: "Hotline Support 24/7", available: false },
        { name: "API & extension support", available: false },
      ],
      actionLabel: "Buy Plan",
    },
    {
      title: "PREMIUM PLAN",
      price: "$130",
      features: [
        { name: "Limited Access Library", available: true },
        { name: "100+ HTML UI Elements", available: true },
        { name: "Hotline Support 24/7", available: false },
        { name: "API & extension support", available: false },
      ],
      className: "xl:scale-105",
      actionLabel: "Buy Plan",
    },
    {
      title: "ULTIMATE PLAN",
      price: "$250",
      features: [
        { name: "Limited Access Library", available: true },
        { name: "100+ HTML UI Elements", available: true },
        { name: "Hotline Support 24/7", available: true },
        { name: "API & extension support", available: true },
      ],
      actionLabel: "Buy Plan",
    },
  ];

  return (
    <section id="pricing" className="container mb-[140px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center xl:w-[50%] mb-12">
          <Typography tag="h2" mb text="Best Pricing Plans" />
          <Typography
            tag="p"
            mb
            align="center"
            text="Empowering the Internet Generation. Driving the Communication Revolution. Technology at the speed of life. Empowered by Innovation."
          />
          <Typography tag="p" mb text="Save up to 40%" />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((item, index) => (
            <PricingPlanCard key={index} plan={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlanSection;
