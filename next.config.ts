/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  sassOptions: {
    includePaths: ["styles"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
module.exports = withNextIntl(baseConfig);
