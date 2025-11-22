"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import hero from "@/images/home-page/hero-section/hero.svg";

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
        <div className="flex flex-col items-center xl:items-start xl:mt-[100px] w-[40%]">
          <Typography
            tag="h1"
            align="left"
            mb
            className="text-[#021206]"
            text="Develop Your Life With One Step..."
          />

          <Typography
            tag="p"
            mb
            className="text-[#021206]"
            text="Pushing the possibilities of the internet. Good for
            the last software. Make it A software night."
          />

          <div className="flex items-center bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-2 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />

            <button
              onClick={handleSubmit}
              className="bg-[#FF4B47] text-white font-semibold rounded-full px-6 py-2"
            >
              Send
            </button>
          </div>
        </div>

        <div className="xl:flex-1 xl:ml-10 flex justify-center xl:justify-end">
          <Image src={hero} alt="hero" className="w-[55vw] max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
