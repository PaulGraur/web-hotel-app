"use client";
import Image from "next/image";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { hasLength, isEmail, useForm } from "@mantine/form";

import Input from "@/components/InputComponent";
import Button from "@/components/ButtonComponent";
import Typography from "@/components/Typography";
import LoaderComponent from "@/components/LoaderComponent";
import { useTranslations } from "next-intl";

import Message from "@/images/contact-us/message.svg";
import information from "@/images/home-page/feature-section/feature.png";

const ContactUsSection = () => {
  const t = useTranslations("contactUsPage.contactUsSection");
  const MAX_ATTEMPTS = 3;
  const [value, setValue] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [showCloud, setShowCloud] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023.99);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerPosition = footerElement.getBoundingClientRect().top;
        if (footerPosition <= window.innerHeight) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCloud(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validate: {
      fullName: hasLength(
        { min: 3 },
        "Full Name must be at least 3 characters"
      ),
      email: isEmail("Invalid email"),
      message: hasLength({ min: 4 }, "Message must have at least 6 characters"),
    },
  });

  useEffect(() => {
    const savedAttempts = localStorage.getItem("contactUsAttempts");
    const savedTime = localStorage.getItem("contactUsTime");

    if (savedAttempts && savedTime) {
      const parsedAttempts = Number(savedAttempts);
      const lastAttemptTime = Number(savedTime);
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - lastAttemptTime;

      if (timeElapsed > 96 * 60 * 60 * 1000) {
        setAttempts(0);
        localStorage.setItem("contactUsAttempts", "0");
      } else {
        setAttempts(parsedAttempts);
      }

      if (parsedAttempts >= MAX_ATTEMPTS) {
        setIsDisabled(true);
      }
    } else {
      setAttempts(0);
    }
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const errors = form.validate();
    if (Object.keys(errors.errors).length > 0) {
      return;
    }

    setIsLoading(true);

    const values = form.values;

    if (attempts < MAX_ATTEMPTS) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem("contactUsAttempts", newAttempts.toString());
      localStorage.setItem("contactUsTime", new Date().getTime().toString());

      if (newAttempts >= MAX_ATTEMPTS) {
        setIsDisabled(true);
      }
    }

    setIsLoading(false);
    form.reset();
    setValue("");
  };

  return (
    <>
      {isLoading && <LoaderComponent />}

      <section className="bg-white py-[60px] lg:py-[100px] xl:rounded-[24px] xl:mx-[20px]">
        <div className="container relative flex flex-col items-center mt-[30px] mb-[60px] gap-[50px] lg:gap-0 lg:justify-between lg:flex-row">
          <div className="flex flex-col gap-[30px] items-center justify-center lg:w-[45%] xl:w-[55%]">
            <div>
              <Typography tag="h1" mb text={t("contactUsTitle")} />

              <Typography tag="p" text={t("contactUsText")} />
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center gap-[30px] lg:items-start"
            >
              {isDisabled ? (
                <Typography
                  tag="p"
                  align="center"
                  mt
                  fontWeight="bold"
                  text={t("contactUsAttempts")}
                ></Typography>
              ) : (
                attempts > 0 &&
                attempts < MAX_ATTEMPTS && (
                  <p className="text-black">
                    {t("contactUsAttemptsLeft")} {MAX_ATTEMPTS - attempts}
                  </p>
                )
              )}
              <div className="w-full flex flex-col gap-[14px]">
                <Input
                  inputType="input"
                  placeholder={t("contactUsName")}
                  required={true}
                  bordered={true}
                  className=" lg:w-[90%] xl:w-[70%] "
                  errorType="critical"
                  disabled={isDisabled}
                  {...form.getInputProps("fullName")}
                />

                <Input
                  inputType="input"
                  required={true}
                  bordered={true}
                  placeholder="Email"
                  type="email"
                  className="lg:w-[90%] xl:w-[70%] "
                  errorType="critical"
                  disabled={isDisabled}
                  {...form.getInputProps("email")}
                />

                <Input
                  inputType="textarea"
                  type="text"
                  placeholder={t("contactUsMessage")}
                  required={true}
                  bordered={true}
                  className="focus:outline-none focus:border-[1px] focus:border-darkBlack"
                  {...form.getInputProps("message")}
                  errorType="critical"
                  disabled={isDisabled}
                />
              </div>
              <Button text={t("contactUsSend")} variant="filled" />
            </form>
          </div>

          <Image
            src={information}
            alt="contact us"
            className="object-cover h-[500px] w-[100%]"
            height={1320}
            width={1080}
            loading="lazy"
          />
        </div>

        {isMobile && showButton && (
          <div className="fixed bottom-3 right-3 z-10">
            <div
              className={`cursor-pointer py-1 px-3 md:py-3 md:px-3 transition duration-300 rounded-full ${
                showCloud
                  ? "bg-blue-500 hover:bg-blue-600 transition duration-300 ease-out"
                  : "bg-darkBlack"
              }`}
            >
              {showCloud && (
                <motion.div
                  className="absolute left-[-370%] border bottom-10 md:bottom-[70%] bg-white text-darkBlack p-2 rounded-[24px] shadow-lg w-[185px] md:w-[240px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Typography tag="p" text={t("contactUsTelegram")} />
                </motion.div>
              )}
              <Link href="https://t.me/" target="_blank">
                <Image
                  src={Message}
                  alt="message"
                  className="w-6 h-10 md:w-10 md:h-10 transition-transform duration-300"
                  width={40}
                  height={53}
                />
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ContactUsSection;
