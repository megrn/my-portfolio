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
          <ul className="flex space-x-6 text-lg font-sans items-center">
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
            <li>
              <a
                href="/Megern_Qaisse_resume.pdf"
                download
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition"
              >
                Download CV
              </a>
            </li>
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
            {/* GitHub */}
            <Link
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .297c-6.627 0-12 5.373-12 12 
                  0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                  v-2.234C5.33 20.09 4.633 18.04 4.633 18.04 
                  c-.546-1.387-1.333-1.756-1.333-1.756 
                  -1.089-.745.084-.729.084-.729 
                  1.205.084 1.839 1.234 1.839 1.234 
                  1.07 1.834 2.809 1.304 3.495.996 
                  .108-.775.417-1.305.76-1.605 
                  -2.665-.304-5.467-1.332-5.467-5.931 
                  0-1.31.468-2.381 1.235-3.221 
                  -.123-.303-.535-1.524.117-3.176 
                  0 0 1.008-.322 3.301 1.23 
                  .957-.266 1.983-.399 3.003-.404 
                  1.02.005 2.047.138 3.006.404 
                  2.289-1.552 3.295-1.23 3.295-1.23 
                  .654 1.653.242 2.874.118 3.176 
                  .77.84 1.233 1.911 1.233 3.221 
                  0 4.61-2.807 5.625-5.479 5.922 
                  .43.368.812 1.096.812 2.21v3.285 
                  c0 .322.218.694.825.576 
                  C20.565 22.092 24 17.592 24 12.297 
                  24 5.67 18.627.297 12 .297z"
                />
              </svg>
            </Link>
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                  2.761 2.239 5 5 5h14c2.761 0 5-2.239 
                  5-5v-14c0-2.761-2.239-5-5-5zm-11 
                  19h-3v-9h3v9zm-1.5-10.25c-.966 
                  0-1.75-.784-1.75-1.75s.784-1.75 
                  1.75-1.75 1.75.784 1.75 1.75-.784 
                  1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.083
                  -.417-1.917-1.459-1.917-.796 0-1.27.531
                  -1.48 1.042-.076.186-.095.445-.095.704v4.671h-3s
                  .04-7.584 0-8.375h3v1.188c.395-.607 
                  1.101-1.472 2.675-1.472 1.952 0 3.422 
                  1.276 3.422 4.017v4.642z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
