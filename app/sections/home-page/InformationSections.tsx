import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import information from "@/images/home-page/information-page/information.png";
import { useTranslations } from "next-intl";

const InformationSection = () => {
  const t = useTranslations("homePage.informationSections");

  return (
    <section className="container">
      <div className="flex flex-col-reverse gap-[40px] xl:flex-row">
        <Image src={information} alt="information" />

        <div className="xl:mt-[100px]">
          <Typography tag="h2" mb text={t("informationTitle")} />
          <Typography tag="p" mb text={t("informationtext1")} />
          <Typography tag="p" text={t("informationtext2")} />
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
