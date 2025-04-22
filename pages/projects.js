// pages/projects.js
import Head from "next/head";
import Image from "next/image";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import DynamicButton from "../components/DynamicButton";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects – Megern Qaisse</title>
        <meta name="description" content="My SaaS and DevOps projects." />
        <meta property="og:title" content="Projects – Megern Qaisse" />
        <meta property="og:description" content="My SaaS and DevOps projects." />
        <meta property="og:image" content="/og-image-projects.png" />
      </Head>

      <div className="p-8 bg-background-light dark:bg-background-dark rounded-lg max-w-5xl mx-auto">
        <h1 className="text-4xl font-heading font-extrabold text-primary mb-6 dark:text-secondary">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-card hover:shadow-hover transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={proj.image}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-primary mb-2 dark:text-secondary">
                  {proj.title}
                </h2>
                <p className="text-text-muted dark:text-text-light mb-4">
                  {proj.description}
                </p>
                <DynamicButton
                  href={proj.link}
                  variants={["accent", "purple-500", "pink-500", "yellow-400"]}
                >
                  View Repo
                </DynamicButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
