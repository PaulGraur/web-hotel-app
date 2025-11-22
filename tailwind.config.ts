import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        spaceage: ["Space Age", "sans-serif"],
        frontrunner: ["Frontrunner", "sans-serif"],
      },
      fontSize: {
        default: ["14px", { lineHeight: "18px" }],
        xs: ["16px", { lineHeight: "22px" }],
        xl: ["22px", { lineHeight: "32px" }],
      },

      boxShadow: {
        "custom-header":
          "0 -4px 6px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.08), 0 6px 12px rgba(0, 0, 0, 0.2)",
      },

      dropShadow: {},
      colors: {
        ebony: "#120202",
        crimson: "#F44545",
        blush: "#E68E8E",
      },
      keyframes: {
        pulse: {},
      },
    },
    screens: {
      mini: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "20px",
        lg: "40px",
        xl: "60px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
