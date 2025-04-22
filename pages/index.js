// pages/index.js
import Head from "next/head";
import DynamicButton from "../components/DynamicButton";

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
        <meta name="description" content="DevOps & SaaS Developer crafting scalable cloud platforms." />
        <meta property="og:title" content="Home – Megern Qaisse" />
        <meta property="og:description" content="DevOps & SaaS Developer crafting scalable cloud platforms." />
        <meta property="og:image" content="/og-image-home.png" />
      </Head>

      {/* Hero */}
      <section className="relative text-center py-32 px-6 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/>
          </linearGradient></defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-6xl font-extrabold mb-4">Megern Qaisse</h1>
          <p className="text-2xl mb-8">DevOps & SaaS Developer crafting scalable cloud platforms.</p>
          <DynamicButton href="/about">Learn More</DynamicButton>
        </div>
      </section>

      {/* Separator */}
      <svg viewBox="0 0 1440 100" className="w-full -mt-1">
        <path fill="currentColor" d="M0,64L60,74.7C120,85..."></path>
      </svg>

      {/* Services */}
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <h2 className="text-3xl font-heading font-bold text-center text-primary mb-8 dark:text-secondary">
          Services
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {services.map((svc) => (
            <DynamicButton key={svc} href={`/services?name=${encodeURIComponent(svc)}`}>
              {svc}
            </DynamicButton>
          ))}
        </div>
      </section>
    </>
  );
}
