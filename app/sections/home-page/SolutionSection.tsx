import React from "react";
import { Link } from "@/navigation";

import Typography from "@/components/Typography";
import SolutionCard from "@/components/home-page/SolutionCardComponent";
import Button from "@/components/ButtonComponent";

import register from "@/images/home-page/solution-cart/register.svg";
import legal from "@/images/home-page/solution-cart/legal.svg";
import data from "@/images/home-page/solution-cart/data.svg";
import fileShredder from "@/images/home-page/solution-cart/file-shredder.svg";

import { useTranslations } from "next-intl";

const SolutionSection = () => {
  const t = useTranslations("homePage.solutionSection");

  const cardData = [
    {
      src: register,
      alt: t("cardEasySettings.title"),
      title: t("cardEasySettings.title"),
      text: t("cardEasySettings.text"),
      background: "linear-gradient(135deg, #FF9A9A, #F14C4C)",
      shadowColor: "rgba(241, 76, 76, 0.5)",
    },
    {
      src: legal,
      alt: t("cardUserFriendly.title"),
      title: t("cardUserFriendly.title"),
      text: t("cardUserFriendly.text"),
      background: "linear-gradient(135deg, #FFE49A, #F18C4C)",
      shadowColor: "rgba(241, 140, 76, 0.5)",
    },
    {
      src: data,
      alt: t("cardFullSecured.title"),
      title: t("cardFullSecured.title"),
      text: t("cardFullSecured.text"),
      background: "linear-gradient(135deg, #FCD876, #FABC13)",
      shadowColor: "rgba(250, 188, 19, 0.5)",
    },
    {
      src: fileShredder,
      alt: t("cardCleanCode.title"),
      title: t("cardCleanCode.title"),
      text: t("cardCleanCode.text"),
      background: "linear-gradient(135deg, #FE9AF4, #EC4EDC)",
      shadowColor: "rgba(236, 78, 220, 0.5)",
    },
  ];

  return (
    <section className="container">
      <div className="flex flex-col-reverse xl:flex-row gap-[74px]">
        <div className="grid xl:grid-cols-2 gap-[30px]">
          {cardData.map((item, index) => (
            <SolutionCard
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              text={item.text}
              background={item.background}
              shadowColor={item.shadowColor}
            />
          ))}
        </div>
        <div>
          <Typography tag="h2" mb text={t("solutionTitle")} />
          <Typography tag="p" mb text={t("solutionText1")} />
          <Typography tag="p" text={t("solutionText2")} />

          <div className="flex items-center gap-[25px] mt-[30px]">
            <Button
              href="#feature"
              text={t("solutionButton1")}
              variant="filled"
            />

            <Link
              href="/contact-us"
              className="font-bold text-[22px] text-crimson"
            >
              {t("solutionButton2")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
