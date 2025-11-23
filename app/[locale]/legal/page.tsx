import LegalSection from "@/app/sections/legal-page/LegalSection ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recepio  - legal",
  description: "Інформація",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

export default function Page() {
  return (
    <>
      <LegalSection />
    </>
  );
}
