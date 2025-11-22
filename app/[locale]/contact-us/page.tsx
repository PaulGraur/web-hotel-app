import ContactUsSection from "@/app/sections/contact-us-page/ContacUsSection";

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

export default function Page() {
  return (
    <>
      <ContactUsSection />
    </>
  );
}
