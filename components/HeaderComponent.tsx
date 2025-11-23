"use client";

import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import LanguageChangeComponent from "@/components/LanguageChangeComponent";
import Logo from "@/components/Logo";
import Close from "@/images/vectors/close.svg";
import Burger from "@/images/vectors/burger.svg";

interface HeaderProps {
  locale: string;
}

const dropDownVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

const HeaderComponent: FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations("header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: "/contact-us", label: t("headerNav.navContactUs") },
    { href: "/#presentation", label: t("headerNav.navPresentation")  },
    { href: "/#pricing", label: t("headerNav.navPricing")  },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);

  return (
    <header className="bg-white shadow-custom-header sticky top-0 z-[1000] rounded-[30px] mt-[10px] mx-[10px] xl:mt-[20px] xl:mx-[20px]">
      <div className="px-[20px] lg:px-[40px]">
        <div className="py-[16px] flex justify-between items-center">
          <Logo />

          <div className="flex items-center xl:gap-[200px] xxl:gap-[400px]">
            <nav className="hidden xl:flex space-x-6 text-[22px] font-medium">
              {navLinks.map(({ href, label }, idx) => (
                <Link key={`${href}-${idx}`} href={href}>
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageChangeComponent className="hidden xl:block" />

            <button
              className="xl:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Image src={Burger} alt="Burger" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed top-0 left-0 right-0 bottom-0 bg-ebony z-[1100]"
              />

              <motion.nav
                key="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropDownVariants}
                className="fixed rounded-[30px] mx-[10px] top-[90px] left-0 right-0 bg-white border-t border-charcoal/50 z-[1200] overflow-hidden"
              >
                <div className="flex flex-col gap-[20px] px-[16px] py-[32px] text-[22px] font-medium">
                  <div className="flex items-center justify-between">
                    <LanguageChangeComponent />

                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-end"
                    >
                      <Image
                        src={Close}
                        alt="Close"
                        width={30}
                        height={30}
                        className="rotate-45"
                      />
                    </button>
                  </div>

                  {navLinks.map(({ href, label }, index) => (
                    <Link
                      key={`${href}-${index}`}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="block px-3 py-2 text-ebony">
                        {label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default HeaderComponent;
