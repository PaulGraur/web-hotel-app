"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/ButtonComponent";
import hero from "@/images/home-page/hero-section/hero.png";

import { useTranslations } from "next-intl";

const HeroSection: FC = () => {
  const t = useTranslations("homePage.heroSection");
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setEmail("");
  }

  return (
    <section className="container mt-[60px] xl:mt-[110px]">
      <div className="xl:flex">
        <div className="flex flex-col items-start xl:mt-[100px] xl:w-[40%]">
          <Typography
            tag="h1"
            align="left"
            mb
            className="text-[#021206]"
            text={t("heroTitle")}
          />

          <Typography
            tag="p"
            mb
            className="text-[#021206]"
            text={t("heroText")}
          />

          <div className="flex items-center bg-white rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-2 w-full max-w-[500px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("heroInput")}
              className="flex-1 px-2 py-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 min-w-0"
            />

            <Button
              text={t("heroInputButton")}
              variant="filled"
              onClick={handleSubmit}
              className="px-2 py-2 xl:px-8"
            />
          </div>
        </div>

        <div className="xl:flex-1 xl:ml-10 flex justify-center xl:justify-end">
          <Image src={hero} alt="hero" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
