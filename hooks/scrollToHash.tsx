"use client";

import React, { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return null;
};

export default ScrollToHash;
