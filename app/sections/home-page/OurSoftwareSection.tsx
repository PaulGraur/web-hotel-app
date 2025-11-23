"use client";

import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/ButtonComponent";
import laptop from "@/images/home-page/our-software-section/laptop.png";
import { useTranslations } from "next-intl";

const OurSoftwareSection = () => {
  const t = useTranslations("homePage.ourSoftwareSection");

  return (
    <section
      id="presentation"
      className="bg-blush/10 py-[40px] xl:py-[90px] lg:rounded-[30px] lg:mx-[20px] xl:relative xl:overflow-visible"
    >
      <div className="container flex xl:relative xl:z-10">
        <div className="xl:w-[40%]">
          <Typography tag="h2" mb text={t("ourSoftwareTitle")} />
          <Typography tag="p" mb text={t("ourSoftwareText1")} />
          <Typography
            tag="p"
            className="mb-[60px]"
            text={t("ourSoftwareText2")}
          />
          <Button
            href="/presentation.pdf"
            text={t("ourSoftwareButton")}
            variant="filled"
            download
          />
        </div>
      </div>

      <Image
        src={laptop}
        alt="laptop"
        className="xl:absolute xl:right-14 xl:-bottom-28 xl:-translate-y-1/4 xl:z-0 mt-[40px] xl:mt-0 xl:w-[720px]"
      />
    </section>
  );
};

export default OurSoftwareSection;
