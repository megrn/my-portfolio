// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://megern.dev";
const DEFAULT_IMAGE = "/og-image-default.png";

export default function SEO({
  title = "Megern Qaisse – DevOps & SaaS Developer",
  description = "I’m Megern Qaisse, crafting scalable cloud platforms and SaaS products.",
  image = DEFAULT_IMAGE,
}) {
  const { asPath } = useRouter();
  const url = `${SITE_URL}${asPath}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
