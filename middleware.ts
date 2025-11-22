import createMiddleware from "next-intl/middleware";
import { locales } from "@/navigation";

export default createMiddleware({
  locales,
  defaultLocale: "de",
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
