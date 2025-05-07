// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.2, // Adjust in production
  // replaysSessionSampleRate: 0.1, // if you want session replay
});
