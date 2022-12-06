/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
    };
    return config;
  },
};

module.exports = nextConfig;
