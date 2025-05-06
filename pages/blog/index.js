// pages/blog/index.js
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import SEO from "../../components/SEO";

export default function Blog({ posts }) {
  return (
    <>
      <SEO
        title="Blog – Megern Qaisse"
        description="Deep dives into SaaS, DevOps, and cloud."
        image="/og-image-blog.png"
      />

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8 dark:text-secondary">
          Blog
        </h1>
        <ul className="space-y-8">
          {posts.map(({ slug, title, date, excerpt }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a className="text-2xl font-semibold text-accent hover:underline">
                  {title}
                </a>
              </Link>
              <p className="text-sm text-text-muted dark:text-text-light">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-2 text-text-muted dark:text-text-light">
                {excerpt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
