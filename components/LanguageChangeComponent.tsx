"use client";
import React, { FC, useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "@/images/vectors/arrowLoc.svg";

interface LanguageProps {
  className?: string;
}

type Country = {
  code: string;
  name: string;
  locale: "de" | "en" | undefined;
};

const countriesMenu: Country[] = [
  { code: "DE", name: "De", locale: "de" },
  { code: "EN", name: "En", locale: "en" },
];

const LanguageChangeComponent: FC<LanguageProps> = ({ className }) => {
  const pathname = usePathname();
  const router = useRouter();
  const defaultCountry = countriesMenu[1];

  const pathWithoutLanguage = useMemo(
    () => pathname.replace(/^\/[a-zA-Z]{2}(\/)?/, "/"),
    [pathname]
  );

  const initialLocale = useMemo(() => pathname.split("/")[1], [pathname]);

  const [isFlagDropdownOpen, setFlagDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countriesMenu.find((country) => country.locale === initialLocale) ||
      defaultCountry
  );

  useEffect(() => {
    const locale = pathname.split("/")[1];
    const matchingCountry = countriesMenu.find(
      (country) => country.locale === locale
    );

    setSelectedCountry(matchingCountry || defaultCountry);
  }, [pathname, defaultCountry]);

  const handleDropdownClick = useCallback(() => {
    setFlagDropdownOpen((open) => !open);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    setFlagDropdownOpen(true);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    setFlagDropdownOpen(false);
  }, []);

  const handleCountrySelection = useCallback(
    (country: Country) => {
      setSelectedCountry(country);
      setFlagDropdownOpen(false);
      const newPath = `/${country.locale}${pathWithoutLanguage}`;
      router.push(newPath);
    },
    [router, pathWithoutLanguage]
  );

  const FlagContent = useMemo(
    () => (
      <div
        className={classNames(className, "relative z-10 cursor-pointer")}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        onClick={handleDropdownClick}
      >
        <div className="flex items-center gap-[8px]">
          <p className="z-50 font-medium xl:w-[60px] mr-[4px] select-none text-right text-[22px] xl:text-[24px] text-ebony">
            {selectedCountry.name}
          </p>

          <motion.div
            animate={{ rotate: isFlagDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="transform"
          >
            <Image
              src={Arrow}
              alt="⌵"
              width={30}
              height={30}
              className="w-[12px] h-[12px] xl:w-[14px] xl:h-[14px] rotate-90"
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {isFlagDropdownOpen && (
            <motion.ul
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute bg-blush px-[14px] py-[20px] flex flex-col items-center gap-[8px] right-[0] w-max shadow-2xl rounded-[30px]"
            >
              {countriesMenu.map((country) => {
                if (country !== selectedCountry) {
                  return (
                    <motion.li
                      key={country.code}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleCountrySelection(country)}
                    >
                      <p className="w-[44px] xl:w-[60px] select-none font-bold text-center text-[22px] xl:text-[24px] text-ebony/80">
                        {country.name}
                      </p>
                    </motion.li>
                  );
                }
                return null;
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    ),
    [
      className,
      selectedCountry,
      isFlagDropdownOpen,
      handleDropdownMouseEnter,
      handleDropdownMouseLeave,
      handleDropdownClick,
      handleCountrySelection,
    ]
  );

  return <>{FlagContent}</>;
};

export default LanguageChangeComponent;
