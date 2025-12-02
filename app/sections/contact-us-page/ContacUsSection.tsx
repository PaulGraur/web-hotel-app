"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useForm, hasLength, isEmail } from "@mantine/form";

import Input from "@/components/InputComponent";
import Button from "@/components/ButtonComponent";
import Typography from "@/components/Typography";
import LoaderComponent from "@/components/LoaderComponent";

import Message from "@/images/contact-us/message.svg";
import information from "@/images/home-page/feature-section/feature.png";
import checkRound from "@/images/vectors/check-round.svg";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const ContactUsSection = () => {
  const t = useTranslations("contactUsPage.contactUsSection");

  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showCloud, setShowCloud] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [successModal, setSuccessModal] = useState(false);

  // Resize detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023.99);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show cloud after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShowCloud(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const footerPosition = footer.getBoundingClientRect().top;
      setShowButton(footerPosition > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form
  const form = useForm({
    initialValues: { fullName: "", email: "", message: "" },
    validate: {
      fullName: hasLength(
        { min: 2 },
        "Full Name must be at least 2 characters"
      ),
      email: isEmail("Invalid email"),
      message: hasLength({ min: 6 }, "Message must have at least 6 characters"),
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validation = form.validate();
    if (Object.keys(validation.errors).length > 0) return;

    setIsLoading(true);

    const { fullName, email, message } = form.values;
    const telegramText = `📬 Contact form:\n👤 Name: ${fullName}\n📩 Email: ${email}\n📝 Message: ${message}`;

    try {
      const res = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: telegramText }),
      });

      if (!res.ok) throw new Error("Failed to send");

      form.reset();
      setSuccessModal(true);

      // Автозакриття через 10 секунд
      setTimeout(() => setSuccessModal(false), 10000);
    } catch (err) {
      console.error(err);
      alert("Error. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoaderComponent />}

      <section className="bg-white py-[60px] lg:py-[100px] xl:rounded-[24px] xl:mx-[20px]">
        <div className="container relative flex flex-col items-center mt-[30px] mb-[60px] gap-[50px] lg:gap-0 lg:justify-between xl:flex-row">
          <div className="flex flex-col gap-[30px] items-center justify-center mb-[40px] xl:mb-0">
            <Typography
              tag="h1"
              align="left"
              className="w-full"
              text={t("contactUsTitle")}
            />
            <Typography tag="p" text={t("contactUsText")} />

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center gap-[30px] lg:items-start"
            >
              <div className="w-full flex flex-col gap-[14px]">
                <Input
                  inputType="input"
                  placeholder={t("contactUsName")}
                  required
                  bordered
                  className="lg:w-[90%] xl:w-[70%]"
                  errorType="critical"
                  {...form.getInputProps("fullName")}
                />

                <Input
                  inputType="input"
                  placeholder="Email"
                  required
                  type="email"
                  bordered
                  className="lg:w-[90%] xl:w-[70%]"
                  errorType="critical"
                  {...form.getInputProps("email")}
                />

                <Input
                  inputType="textarea"
                  placeholder={t("contactUsMessage")}
                  required
                  bordered
                  className="focus:outline-none focus:border-darkBlack"
                  errorType="critical"
                  {...form.getInputProps("message")}
                />
              </div>

              <Button
                text={t("contactUsSend")}
                variant="filled"
                className="px-12"
                disabled={isLoading}
              />
            </form>
          </div>

          <Image
            src={information}
            alt="contact us"
            className="object-cover w-max xl:w-[60%]"
            height={1320}
            width={1080}
            loading="lazy"
          />
        </div>

        {/* Mobile Telegram Cloud Button */}
        {isMobile && showButton && (
          <div className="fixed bottom-3 right-3 z-10">
            <div
              className={`cursor-pointer py-1 px-3 md:py-3 md:px-3 transition rounded-full ${
                showCloud ? "bg-blue-500 hover:bg-blue-600" : "bg-darkBlack"
              }`}
            >
              {showCloud && (
                <motion.div
                  className="absolute left-[-370%] bottom-10 md:bottom-[70%] bg-white text-darkBlack p-2 rounded-[24px] shadow-lg w-[185px] md:w-[240px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Typography tag="p" text={t("contactUsTelegram")} />
                </motion.div>
              )}

              <Link href="https://t.me/" target="_blank">
                <Image
                  src={Message}
                  alt="message"
                  width={40}
                  height={53}
                  className="w-6 h-10 md:w-10 md:h-10"
                />
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {successModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-[20px] text-center shadow-lg w-[90%] max-w-[350px] flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <Image src={checkRound} alt="Check" width={80} className="mb-5" />
              <Typography tag="h3" mb align="center" text={t("successTitle")} />
              <Typography tag="p" mb align="center" text={t("successText")} />
              <Button
                text="OK"
                variant="outline"
                className="w-full"
                onClick={() => setSuccessModal(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactUsSection;
