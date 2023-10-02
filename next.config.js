/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

const nextConfig = withFonts({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
