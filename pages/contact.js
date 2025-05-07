// pages/contact.js
import { useForm } from "react-hook-form";
import { useState } from "react";
import SEO from "../components/SEO";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        console.error("Submission error:", json.message);
      }
    } catch (err) {
      setStatus("error");
      console.error("Network error:", err);
    }
  };

  return (
    <>
      <SEO
        title="Contact – Megern Qaisse"
        description="Get in touch with me - DevOps & Cloud Engineer."
        image="/og-image-contact.png"
      />

      <div className="max-w-2xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-heading font-bold text-primary mb-6 dark:text-secondary">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "Minimum 10 characters" },
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status === "success" && (
            <p className="mt-4 text-green-600">
              Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600">
              Oops! Something went wrong—please try again later.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
