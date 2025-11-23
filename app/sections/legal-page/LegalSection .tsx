"use client";
import Button from "@/components/ButtonComponent";
import Typography from "@/components/Typography";
import { useTranslations } from "next-intl";

const PrivacyPolicySection = () => {
  const t = useTranslations("legalPage");

  return (
    <section className="bg-white flex flex-col items-center lg:rounded-[24px] lg:mx-[20px] py-[60px] lg:py-[100px]">
      <div className="container flex flex-col gap-8">
        <Typography
          tag="h1"
          mb
          align="center"
          text={t("privacyPolicy.title")}
        />
        <Typography tag="h2" mb text={t("privacyPolicy.lastUpdated")} />
        <Typography tag="p" mb text={t("privacyPolicy.intro")} />
        <Typography tag="p" mb text={t("privacyPolicy.dataCollection")} />
        <Typography tag="p" mb text={t("privacyPolicy.cookies")} />
        <Typography tag="p" mb text={t("privacyPolicy.dataUse")} />
        <Typography tag="p" mb text={t("privacyPolicy.dataRights")} />
        <Typography tag="p" mb text={t("privacyPolicy.contactInfo")} />

        <div className="flex flex-col items-center">
          <Typography tag="h3" mb text={t("legalSection.legalTitle")} />
          <Typography tag="p" mb text={t("legalSection.legalText")} />
          <Button
            text={t("legalSection.legalButton")}
            href="/contact-us"
            variant="filled"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
