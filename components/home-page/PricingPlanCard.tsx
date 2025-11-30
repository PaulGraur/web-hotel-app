import React, { FC } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/ButtonComponent";
import icon from "@/images/home-page/feature-section/feature-icon.svg";
import { Plan } from "@/app/sections/home-page/PricingPlanSection";

interface PricingPlanCardProps {
  plan: Plan;
  onSelect?: () => void;
}

const PricingPlanCard: FC<PricingPlanCardProps> = ({ plan, onSelect }) => {
  return (
    <div className="bg-white rounded-[30px] shadow-lg py-[15px] px-[25px] flex flex-col items-center xl:py-[35px] xl:px-[30px] hover:scale-105 transition-transform duration-200">
      <div className="flex flex-col items-center">
        <Typography
          tag="h4"
          mb
          text={plan.title}
          className="text-ebony/50 font-semibold"
        />
        <Typography tag="h2" mb text={plan.price} />
      </div>

      <ul className="flex flex-wrap flex-col gap-[20px] mb-[40px] text-[18px] xl:text-[22px] xl:gap-[12px]">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex justify-between items-center md:gap-[60px] lg:gap-[80px]"
          >
            <div className="flex gap-[12px] ">
              <Image src={icon} alt="icon" />

              <p
                className={`${
                  feature.available ? "" : "text-gray-400 line-through"
                } break-words`}
              >
                {feature.name}
              </p>
            </div>

            <p
              className={`font-bold ${
                feature.available ? "text-ebony" : "text-gray-400 "
              }`}
            >
              {feature.available ? "Yes" : "No"}
            </p>
          </li>
        ))}
      </ul>

      <Button
        text={plan.actionLabel}
        variant="outline"
        className="mt-auto w-max"
        onClick={onSelect}
      />
    </div>
  );
};

export default PricingPlanCard;
