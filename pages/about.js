// pages/about.js
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About – Megern Qaisse</title>
        <meta name="description" content="Learn more about Megern Qaisse." />
        <meta property="og:title" content="About – Megern Qaisse" />
        <meta property="og:description" content="Learn more about Megern Qaisse." />
        <meta property="og:image" content="/og-image-about.png" />
      </Head>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-card max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-extrabold text-primary mb-4 dark:text-secondary">
          About Me
        </h1>
        <p className="text-lg text-text-muted dark:text-text-light leading-relaxed">
          I’m Megern Qaisse, a DevOps Engineer and SaaS Developer with 5+ years…
        </p>
      </div>
    </>
  );
}
