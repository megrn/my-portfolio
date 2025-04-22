// pages/blog/index.js
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog – Megern Qaisse</title>
        <meta name="description" content="Deep dives into SaaS, DevOps, and cloud." />
        <meta property="og:title" content="Blog – Megern Qaisse" />
        <meta property="og:description" content="Deep dives into SaaS, DevOps, and cloud." />
        <meta property="og:image" content="/og-image-blog.png" />
      </Head>
      <article className="prose lg:prose-xl mx-auto bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-card">
        <h1>Blog</h1>
        <p>Coming soon: deep dives into SaaS development, DevOps best practices, and cloud-native architecture.</p>
      </article>
    </>
  );
}
