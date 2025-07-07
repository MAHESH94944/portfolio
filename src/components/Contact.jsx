import React, { useState, useCallback, memo } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const initialForm = { name: "", email: "", message: "" };
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvejyve"; // <-- your real Formspree endpoint

const Contact = memo(() => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = useCallback((e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!form.name || !form.email || !form.message) {
        setResult({ type: "error", msg: "All fields are required." });
        return;
      }
      setLoading(true);
      setResult(null);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setResult({ type: "success", msg: "Message sent successfully!" });
          setForm(initialForm);
        } else {
          setResult({ type: "error", msg: "Something went wrong. Try again." });
        }
      } catch {
        setResult({ type: "error", msg: "Network error. Try again." });
      }
      setLoading(false);
    },
    [form]
  );

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-blue-200 mb-10 text-center">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Info */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3 text-blue-100">
            <FaEnvelope className="text-blue-400" />
            <span>maheshjadhao172@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-blue-100">
            <FaPhone className="text-blue-400" />
            <span>+91 9307974201</span>
          </div>
          <div className="flex items-center gap-3 text-blue-100">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Pune, Maharashtra, India</span>
          </div>
          <div className="flex gap-5 mt-8">
            <a
              href="https://github.com/MAHESH94944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-400 transition"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-jadhao-521959279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        {/* Right: Form */}
        <form
          className="flex-1 bg-gray-800 rounded-lg p-8 shadow space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-blue-100 mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-700 text-blue-100 focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-blue-100 mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-700 text-blue-100 focus:outline-none"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-blue-100 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 rounded bg-gray-700 text-blue-100 focus:outline-none"
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-600 text-blue-100 font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {result && (
            <div
              className={`mt-2 text-center ${
                result.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {result.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
});

export default Contact;
