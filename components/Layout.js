// components/Layout.js
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const { locale, asPath } = router;
  const otherLocale = locale === "en" ? "ar" : "en";
  const switchLocalePath =
    locale === "en" ? `/ar${asPath}` : asPath.replace(/^\/ar/, "") || "/";

  return (
    <>
      <Head>
        <title>Megern Qaisse – Portfolio</title>
        <meta
          name="description"
          content="DevOps & SaaS Developer crafting scalable cloud platforms."
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://megern.dev${asPath}`}
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href={`https://megern.dev/ar${asPath}`}
        />
      </Head>

      <header className="bg-primary dark:bg-gray-900 text-white shadow-md">
        <nav
          role="navigation"
          className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6"
        >
          {/* Your Name */}
          <Link
            href="/"
            locale={locale}
            className="text-2xl font-heading font-bold"
          >
            Megern Qaisse
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" locale={locale} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" locale={locale} className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                locale={locale}
                className="hover:underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                locale={locale}
                className="hover:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                locale={locale}
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" locale={locale} className="hover:underline">
                Blog
              </Link>
            </li>

            {/* Download CV */}
            <li>
              <Link
                href="/Megern_Qaisse.pdf"
                locale={locale}
                download
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition focus:outline-none focus:ring"
              >
                Download CV
              </Link>
            </li>

            {/* Language Toggle */}
            <li>
              <button
                onClick={() => router.push(switchLocalePath)}
                className="px-2 py-1 border rounded hover:bg-white/10 focus:outline-none focus:ring"
                aria-label="Switch language"
              >
                {locale === "en" ? "عربي" : "EN"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-160px)] max-w-5xl mx-auto py-12 px-6">
        {children}
      </main>

      <footer className="bg-gray-800 text-gray-300 text-center py-6 text-sm">
        <div className="max-w-5xl mx-auto space-y-2">
          <div>© {new Date().getFullYear()} Megern Qaisse. All rights reserved.</div>
          <div>
            Contact:{" "}
            <a
              href="mailto:mgrn054@gmail.com"
              className="underline hover:text-white"
            >
              mgrn054@gmail.com
            </a>{" "}
            | +966 508 397 239
          </div>
          <div className="mt-4 flex justify-center space-x-6">
            {/* GitHub */}
            <Link
              href="https://github.com/megrn"
              className="hover:text-white focus:outline-none focus:ring"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {/* SVG omitted for brevity; reuse your existing one */}
            </Link>
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/megrn"
              className="hover:text-white focus:outline-none focus:ring"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {/* SVG omitted for brevity; reuse your existing one */}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
