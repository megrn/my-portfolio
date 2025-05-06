// lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: meta, content } = matter(fileContents);
  return { slug: realSlug, meta, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => {
    const { slug: realSlug, meta } = getPostBySlug(slug);
    return { slug: realSlug, ...meta };
  });
  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
