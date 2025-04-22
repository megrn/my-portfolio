// pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <PageTransition keyValue={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </Layout>
  );
}
