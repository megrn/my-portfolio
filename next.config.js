// next.config.js
const nextTranslate = require("next-translate");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
};

const wrapped = withPWA(nextTranslate(baseConfig));

// Sentry Webpack plugin options (adjust as needed)
const sentryWebpackPluginOptions = {
  silent: true, // Suppress all logs
};

module.exports = withSentryConfig(wrapped, sentryWebpackPluginOptions);
