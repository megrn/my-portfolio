/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // ⚠️ disable TS build-time errors
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;
  