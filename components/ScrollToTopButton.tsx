"use client";

import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Arrow from "@/images/navigation/arrow.svg";

const ScrollToTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-yellow-400 text-white shadow-lg hover:bg-yellow-500 transition flex items-center justify-center"
      style={{ width: 44, height: 44 }}
    >
      <Image
        src={Arrow}
        alt="Arrow"
        width={24}
        height={24}
        className="-rotate-90 filter invert"
      />
    </button>
  );
};

export default ScrollToTopButton;
