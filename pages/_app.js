// pages/_app.js
import "../styles/globals.css";
import "prismjs/themes/prism.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!isProduction || !process.env.NEXT_PUBLIC_GA_ID) return;

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={Component.displayName || Component.name || ""}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </Layout>
  );
}
