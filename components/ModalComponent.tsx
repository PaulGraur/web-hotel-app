"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import Button from "@/components/ButtonComponent";
import { motion, AnimatePresence } from "framer-motion";

import { useTranslations } from "next-intl";
import check from "@/images/vectors/check-round.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
  planPrice: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } },
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, planTitle, planPrice }) => {
  const t = useTranslations("homePage.pricingPlanSection.pricingModel");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!name || !surname || !phone || !city) {
      alert("Заповніть усі поля");
      return;
    }

    setLoading(true);
    try {
      const message = `
📝 Замовлення плану:
Title: ${planTitle}
Price: ${planPrice}
Name: ${name}
Surname: ${surname}
Phone: ${phone}
City: ${city}
      `;

      const res = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error("Помилка при відправці");

      setSuccess(true);
      setName("");
      setSurname("");
      setPhone("");
      setCity("");
    } catch (err) {
      console.error(err);
      alert("Помилка при відправці. Спробуйте ще раз");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "border border-gray-300 p-3 w-full rounded-[30px] text-ebony placeholder-gray-400 " +
    "focus:outline-none focus:border-crimson focus:ring-[0.5px] focus:ring-crimson transition-all duration-200";

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
      setSuccess(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            className="bg-white rounded-[30px] p-6 w-full max-w-md mx-4 shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {!success ? (
              <>
                <div className="flex flex-col items-center mb-6">
                  <Typography
                    tag="h4"
                    mb
                    text={planTitle}
                    className="text-ebony/50 font-semibold"
                  />
                  <Typography tag="h2" mb text={`Price: ${planPrice}`} />
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <Button
                    text={t("pricingClose")}
                    variant="outline"
                    onClick={onClose}
                  />
                  <Button
                    text={loading ? t("pricingSending") : t("pricingSend")}
                    onClick={handleSubmit}
                  />
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <Image src={check} alt="check" width={80} height={80} />
                <Typography tag="h3" mb align="center" text={t("modelTitle")} />
                <Typography
                  tag="p"
                  mb
                  align="center"
                  text={t("modelConection")}
                />
                <Button
                  text={t("pricingClose")}
                  variant="outline"
                  onClick={() => {
                    onClose();
                    setSuccess(false);
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
