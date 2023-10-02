/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

const nextConfig = withFonts({
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
