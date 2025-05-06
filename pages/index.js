// pages/index.js
import Head from "next/head";
import DynamicButton from "../components/DynamicButton";
import Link from "next/link";

export default function Home() {
  const services = [
    "SaaS Development",
    "DevOps Automation",
    "Cloud Infrastructure",
    "Startup MVP",
  ];

  return (
    <>
      <Head>
        <title>Home – Megern Qaisse</title>
        <meta
          name="description"
          content="DevOps & SaaS Developer crafting scalable cloud platforms."
        />
        <meta property="og:title" content="Home – Megern Qaisse" />
        <meta
          property="og:description"
          content="DevOps & SaaS Developer crafting scalable cloud platforms."
        />
        <meta property="og:image" content="/og-image-home.png" />
      </Head>

      {/* Hero Section */}
      <section className="relative text-center py-32 px-6 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-6xl font-extrabold mb-4">Megern Qaisse</h1>
          <p className="text-2xl mb-8">
            DevOps & SaaS Developer crafting scalable cloud platforms.
          </p>
          <DynamicButton href="/about">Learn More</DynamicButton>
        </div>
      </section>

      {/* Separator SVG */}
      <svg viewBox="0 0 1440 100" className="w-full -mt-1">
        <path
          fill="currentColor"
          d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,112C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* Services Section */}
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <h2 className="text-3xl font-heading font-bold text-center text-primary mb-8 dark:text-secondary">
          Services
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {services.map((svc) => (
            <DynamicButton
              key={svc}
              href={`/services?name=${encodeURIComponent(svc)}`}
            >
              {svc}
            </DynamicButton>
          ))}
        </div>
      </section>

      {/* Blog Excerpt Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6 dark:text-secondary">
            From the Blog
          </h2>
          <p className="mb-8 text-text-muted dark:text-text-light">
            Dive into deep dives on SaaS development, DevOps best practices, and
            cloud-native architecture.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/90 transition"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </>
  );
}
