import React, { FC } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/ButtonComponent";
import icon from "@/images/home-page/feature-section/feature-icon.svg";
import classNames from "classnames";

import { Plan } from "@/app/sections/home-page/PricingPlanSection";

const PricingPlanCard: FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-[30px] shadow-lg py-[15px] px-[25px] flex flex-col items-center xl:py-[35px] xl:px-[70px]",
        plan.className
      )}
    >
      <div className="flex flex-col items-center">
        <Typography tag="h4" mb text={plan.title} className="text-ebony/50" />
        <Typography tag="h2" mb text={plan.price} />
      </div>

      <ul className="flex flex-col gap-[20px] mb-[40px] text-[18px] xl:text-[22px] space-y-2 xl:gap-[40px]">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex gap-[40px] justify-between items-center xl:gap-[60px]"
          >
            <div className="flex gap-[12px] w-max">
              <Image src={icon} alt="icon" />
              <p
                className={`${
                  feature.available ? "" : "text-gray-400 line-through w-max"
                }`}
              >
                {feature.name}
              </p>
            </div>

            <p
              className={`font-bold ${
                feature.available ? "text-ebony" : "text-gray-400"
              }`}
            >
              {feature.available ? "Yes" : "No"}
            </p>
          </li>
        ))}
      </ul>

      <Button text={plan.actionLabel} variant="outline" />
    </div>
  );
};

export default PricingPlanCard;
