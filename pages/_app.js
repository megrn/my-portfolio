// pages/_app.js
import "../styles/globals.css";
import "prismjs/themes/prism.css";       // MDX syntax highlighting
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

export default function App({ Component, pageProps }) {
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
