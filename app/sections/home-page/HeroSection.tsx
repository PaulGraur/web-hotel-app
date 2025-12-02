"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/ButtonComponent";
import hero from "@/images/home-page/hero-section/hero.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import checkRound from "@/images/vectors/check-round.svg";

const HeroSection: FC = () => {
  const t = useTranslations("homePage.heroSection");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit() {
    if (!emailRegex.test(email)) return;

    setLoading(true);

    try {
      const message = `📩 New subscription:\nE-mail: ${email}`;

      const res = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error("Помилка");

      setEmail("");
      setSuccessModal(true);

      setTimeout(() => {
        setSuccessModal(false);
      }, 10000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
              text={loading ? t("heroSending") : t("heroInputButton")}
              variant="filled"
              onClick={handleSubmit}
              className="px-2 py-2 xl:px-8"
              disabled={!emailRegex.test(email)}
            />
          </div>
        </div>

        <div className="xl:flex-1 xl:ml-10 flex justify-center xl:justify-end">
          <Image src={hero} alt="hero" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {successModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center bg-white rounded-[20px] p-8 text-center shadow-lg w-[90%] max-w-[350px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <Image
                src={checkRound}
                alt="Check Round"
                width={80}
                className="mb-[20px]"
              />
              <Typography
                tag="h3"
                mb
                align="center"
                text={t("heroSuccessTitle")}
              />
              <Typography
                tag="p"
                mb
                align="center"
                text={t("heroSuccessText")}
              />

              <Button
                text="OK"
                variant="outline"
                onClick={() => setSuccessModal(false)}
                className="w-full mt-4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
