// components/Layout.js
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("dark");
    if (stored === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("dark", next);
    document.documentElement.classList.toggle("dark", next);
  };

  const items = ["Home", "About", "Services", "Projects", "Contact", "Blog"];

  return (
    <>
      <Head>
        <title>Megern Qaisse – Portfolio</title>
        <meta name="description" content="DevOps & Cloud Engineer | SaaS Builder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-primary dark:bg-gray-900 text-white shadow-md">
        <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
          <Link
            href="/"
            className={`text-2xl font-heading font-bold transition ${
              pathname === "/" ? "text-accent underline" : "hover:text-secondary"
            }`}
          >
            Megern Qaisse
          </Link>
          <ul className="flex space-x-6 text-lg font-sans">
            {items.map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = pathname === href;
              return (
                <li key={item}>
                  <Link
                    href={href}
                    className={`transition ${
                      active ? "text-accent underline" : "hover:text-secondary"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={toggleDark}
            className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            aria-label="Toggle Dark Mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-160px)] max-w-5xl mx-auto py-12 px-6">
        {children}
      </main>

      <footer className="bg-gray-800 text-text-dark dark:text-text-light">
        <div className="max-w-5xl mx-auto py-6 text-center text-sm">
          © {new Date().getFullYear()} Megern Qaisse. All rights reserved.
          <div className="mt-4 flex justify-center space-x-6">
            <Link
              href="https://github.com/your-username"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* GitHub SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297a12 12 0 00-3.8 23.4..."/>
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/your-username"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* LinkedIn SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 11.001 5.001..."/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
