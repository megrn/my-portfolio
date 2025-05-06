// pages/blog/[slug].js
import { getPostSlugs, getPostBySlug } from "../../lib/posts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkPrism from "remark-prism";
import SEO from "../../components/SEO";

export default function PostPage({ source, meta }) {
  return (
    <>
      <SEO
        title={`${meta.title} – Blog`}
        description={meta.excerpt}
        image="/og-image-blog.png"
      />

      <article className="prose lg:prose-xl mx-auto py-16 px-6 dark:prose-invert">
        <h1>{meta.title}</h1>
        <p className="text-sm text-text-muted dark:text-text-light">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <MDXRemote {...source} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(/\.mdx$/, "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { meta, content } = getPostBySlug(params.slug);
  const source = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkPrism] },
  });
  return { props: { source, meta } };
}
