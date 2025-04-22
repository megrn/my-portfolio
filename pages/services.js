// pages/services.js
import Head from "next/head";

export default function Services() {
  const items = ["SaaS Development", "DevOps Automation", "Cloud Infrastructure Design", "Startup MVP Launch"];
  return (
    <>
      <Head>
        <title>Services – Megern Qaisse</title>
        <meta name="description" content="Services offered by Megern Qaisse." />
        <meta property="og:title" content="Services – Megern Qaisse" />
        <meta property="og:description" content="Services offered by Megern Qaisse." />
        <meta property="og:image" content="/og-image-services.png" />
      </Head>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-card max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-extrabold text-primary mb-4 dark:text-secondary">
          Services
        </h1>
        <ul className="list-disc list-inside space-y-3 text-text-muted dark:text-text-light">
          {items.map(svc => <li key={svc}>{svc}</li>)}
        </ul>
      </div>
    </>
  );
}
