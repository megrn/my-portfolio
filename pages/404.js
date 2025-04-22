// pages/404.js
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 – Page Not Found</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
        <div className="text-center p-8">
          <h1 className="text-6xl font-heading font-bold text-primary mb-4 dark:text-secondary">
            404
          </h1>
          <p className="text-xl text-text-muted dark:text-text-light mb-6">Page Not Found</p>
          <Link
            href="/"
            className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
