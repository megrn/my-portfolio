// pages/contact.js
import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = async data => {
    await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  };

  return (
    <>
      <Head>
        <title>Contact – Megern Qaisse</title>
        <meta name="description" content="Get in touch with Megern Qaisse." />
        <meta property="og:title" content="Contact – Megern Qaisse" />
        <meta property="og:description" content="Get in touch with Megern Qaisse." />
        <meta property="og:image" content="/og-image-contact.png" />
      </Head>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-card max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-extrabold text-primary mb-4 dark:text-secondary">
          Contact
        </h1>

        {isSubmitSuccessful && (
          <p className="mb-4 text-green-600">Thank you! Your message was sent.</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>
          <div>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/
              })}
              placeholder="Your Email"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.email && <span className="text-red-500">Valid email is required</span>}
          </div>
          <div>
            <textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>
          <button
            type="submit"
            className="bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
