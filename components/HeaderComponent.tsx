"use client";

import React, { FC, useState, useEffect } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import LanguageChangeComponent from "@/components/LanguageChangeComponent";
import Logo from "@/components/Logo";
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
    {
      href: "/presentation.pdf",
      label: "Download Presentation",
      download: true,
    },
    { href: "/", label: "Pricing" },
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

  return (
    <header className="bg-white shadow-custom-header sticky top-0 z-[1000] xl:rounded-[24px] xl:mt-[20px] xl:mx-[20px]">
      <div className="px-[10px] lg:px-[40px]">
        <div className="py-[16px] flex justify-between items-center">
          <Logo />

          <div className="flex items-center xl:gap-[200px] xxl:gap-[400px]">
            <nav className="hidden xl:flex space-x-6">
              {navLinks.map(({ href, label, download }, idx) => (
                <Link
                  key={`${href}-${idx}`}
                  href={href}
                  download={download ? true : undefined}
                  className="text-ebony/80"
                >
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageChangeComponent />

            <button
              className="xl:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-ebony"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
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
                className="fixed top-[64px] left-0 right-0 bottom-0 bg-black z-[1100]"
              />

              <motion.nav
                key="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropDownVariants}
                className="fixed top-[64px] left-0 right-0 bg-white border-t border-charcoal/50 z-[1200] overflow-hidden"
              >
                {navLinks.map(({ href, label, download }, index) => (
                  <Link
                    key={`${href}-${index}`}
                    href={href}
                    download={download ? true : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="block px-3 py-2 font-medium text-ebony">
                      {label}
                    </span>
                  </Link>
                ))}
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default HeaderComponent;
