// components/Testimonials.js
export default function Testimonials() {
    const testimonials = [
      {
        name: "Ahmed Al-Farsi",
        role: "CFO, Desert Tech",
        text: "Megern’s SaaS solution transformed our month-end close process; it’s 40% faster and 100% reliable.",
      },
      {
        name: "Laila Hassan",
        role: "Founder, Riyadh Retail",
        text: "The AI-driven dashboards gave us insights we never had before. Highly recommended!",
      },
      {
        name: "Omar Zaid",
        role: "Finance Manager, GulfLogistics",
        text: "Switching from spreadsheets to Megern’s platform was the best decision we made this year.",
      },
    ];
  
    return (
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12 dark:text-secondary">
          What Clients Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {testimonials.map(({ name, role, text }) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-card hover:shadow-hover transition"
            >
              <p className="italic text-text-muted dark:text-text-light mb-4">“{text}”</p>
              <p className="font-semibold text-primary dark:text-secondary">{name}</p>
              <p className="text-sm text-text-muted dark:text-text-light">{role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  