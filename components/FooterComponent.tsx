import React, { FC } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const FooterComponent: FC = () => {
  const t = useTranslations("header");
  const f = useTranslations("footer");

  const navLinks = [
    { href: "/contact-us", label: t("headerNav.navContactUs") },
    { href: "/#presentation", label: t("headerNav.navPresentation") },
    { href: "/#pricing", label: t("headerNav.navPricing") },
    { href: "/legal", label: t("headerNav.navLegal") },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/Recepio",
      label: "Facebook",
    },
    {
      href: "https://instagram.com/Recepio",
      label: "Instagram",
    },
    {
      href: "https://linkedin.com/company/Recepio",
      label: "LinkedIn",
    },
  ];

  const hover =
    "relative w-max hover:text-crimson transition-colors duration-300 ease-in-out after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-crimson hover:after:w-full after:transition-all after:duration-300 after:ease-in-out";

  return (
    <footer className="bg-blush/10 py-10 rounded-[30px] mx-[10px] mb-[10px] xl:mx-[20px] xl:mb-[20px]">
      <div className="container">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-ebony font-semibold mb-4">
              {f("navigationTitle")}
            </h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className={hover}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-ebony font-semibold mb-4">
              {f("contactTitle")}
            </h3>
            <address className="not-italic space-y-2 text-ebony">
              <p>Recepio</p>
              <p>Musterstraße 12</p>
              <p>1010 Wien, Österreich</p>
              <p>
                Telefon:{" "}
                <Link href="tel:+41445556677" className={hover}>
                  +41 44 555 66 77
                </Link>
              </p>
              <p>
                E-Mail:{" "}
                <Link href="mailto:info@point.at" className={hover}>
                  info@point.ch
                </Link>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-ebony font-semibold mb-4">
              {f("officesTitle")}
            </h3>
            <ul className="space-y-2 text-ebony">
              <li>St. Pölten</li>
              <li>Genf: Rue du Rhône 10</li>
              {/* <li>Bern: Kramgasse 5</li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-ebony font-semibold mb-4">
              {f("socialTitle")}
            </h3>
            <ul className="flex space-x-6">
              {socialLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={hover}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ebony pt-6 text-center text-ebony/70 text-sm">
          {f("rightsTitle")}
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
