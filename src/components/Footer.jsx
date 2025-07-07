import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="border-t border-gray-800 py-6 mt-12 bg-blue-950"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-gray-300 text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Mahesh Jadhao. All rights reserved.
      </div>
      <div className="text-gray-300 text-sm text-center">
        Built with <span className="font-semibold text-blue-200">React</span> +{" "}
        <span className="font-semibold text-blue-200">Tailwind CSS</span>
      </div>
      <div className="flex gap-4 justify-center">
        <a
          href="https://github.com/MAHESH94944"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-300 transition"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/mahesh-jadhao-521959279/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
