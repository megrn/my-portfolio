// pages/api/contact.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    const { name, email, message } = req.body;
  
    // Basic server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    try {
      // Proxy to Formspree (replace FORM_ID with your actual ID)
      const FORM_ID = process.env.FORMSPREE_ID;
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (!response.ok) {
        throw new Error(`Formspree error: ${response.statusText}`);
      }
  
      return res.status(200).json({ message: "Message sent successfully." });
    } catch (err) {
      console.error("Contact API error:", err);
      return res
        .status(500)
        .json({ message: "There was an error sending your message." });
    }
  }
  