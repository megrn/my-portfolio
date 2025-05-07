// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#1a202c" />
          {/* Manifest */}
          <link rel="manifest" href="/manifest.json" />
          {/* Fallback favicon */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          {/* Apple Touch Icon */}
          <link
            rel="apple-touch-icon"
            href="/icons/icon-192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
