/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // images: {
  //   unoptimized: true,
  // },
  trailingSlash: true,
};

module.exports = nextConfig;
