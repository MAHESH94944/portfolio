import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaRegClock,
} from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your Formspree endpoint
    const formspreeEndpoint = "https://formspree.io/f/mgvejyve";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "/MAHESH94944",
      link: "https://github.com/MAHESH94944",
      color: "from-gray-500/20 to-gray-600/20",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "/mahesh-jadhao-521959279",
      link: "http://www.linkedin.com/in/mahesh-jadhao-521959279",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: <FaTwitter />,
      label: "X",
      value: "@Mahe29914Jadhao",
      link: "https://x.com/Mahe29914Jadhao",
      color: "from-sky-500/20 to-sky-600/20",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Pune, Maharashtra, India",
      link: null,
      color: "from-green-500/20 to-green-600/20",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg" />
      <div className="absolute inset-0 noise-layer" />
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block glass rounded-full px-4 py-2 mb-4"
            >
              <span className="text-sm font-medium gradient-text">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Let's <span className="gradient-text">Connect</span>
            </motion.h2>
            <div className="mx-auto mt-4 w-44 section-divider" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Have a project in mind? Let's discuss how we can work together
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const CardTag = method.link ? "a" : "div";
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={`bg-gradient-to-r ${method.color} rounded-xl p-4 border border-gray-800 hover:border-purple-500/50 transition-all duration-300`}
                      >
                        <CardTag
                          href={method.link || undefined}
                          target={method.link ? "_blank" : undefined}
                          rel={method.link ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-lg sm:text-xl">
                            {method.icon}
                          </div>
                          <div>
                            <p className="text-white font-semibold">
                              {method.label}
                            </p>
                            {!method.link && (
                              <p className="text-gray-400 text-sm">
                                {method.value}
                              </p>
                            )}
                          </div>
                        </CardTag>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Availability */}
                <div className="mt-8 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <FaRegClock className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-gray-300 text-sm">Available for</p>
                      <p className="text-white font-semibold">
                        Full-time opportunities & Freelance work
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4 border border-gray-800">
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-purple-400 text-lg" />
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
                          Call
                        </p>
                        <a
                          href="tel:+919307974201"
                          className="text-white font-semibold hover:text-purple-400 transition-colors"
                        >
                          +91 9307974201
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 border border-gray-800">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-purple-400 text-lg" />
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
                          Email
                        </p>
                        <a
                          href="mailto:maheshjadhao172@gmail.com"
                          className="text-white font-semibold hover:text-purple-400 transition-colors"
                        >
                          maheshjadhao172@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-glow disabled:opacity-50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-center"
                    >
                      ✓ Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center"
                    >
                      ✗ Failed to send. Please try again.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
