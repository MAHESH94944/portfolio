import React, { Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  2000,
  "Frontend Engineer",
  2000,
  "React Enthusiast",
  2000,
  "Open Source Contributor",
  2000,
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800"
    >
      <motion.div
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="relative mb-6" variants={item}>
          <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-400 animate-gradient-spin blur-md opacity-60"></span>
          <Suspense
            fallback={<div className="w-40 h-40 rounded-full bg-gray-300" />}
          >
            <motion.img
              src="/MaheshJadhao_23.webp"
              alt="Profile"
              width={160}
              height={160}
              loading="lazy"
              className="w-40 h-40 rounded-full border-4 border-blue-700 shadow-xl animate-float relative z-10 transition-shadow duration-300 hover:shadow-[0_0_40px_10px_rgba(37,99,235,0.3)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            />
          </Suspense>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-3 text-center text-blue-100"
          variants={item}
        >
          Hi, I'm Mahesh Jadhao
        </motion.h1>
        <motion.div variants={item}>
          <TypeAnimation
            sequence={roles}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl text-blue-300 font-semibold mb-6 block text-center drop-shadow-lg"
          />
        </motion.div>
        <motion.div
          className="flex gap-4 mt-4 flex-wrap justify-center"
          variants={item}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 16px 0 #2563eb",
              background: "#2563eb",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 rounded bg-blue-700 text-white font-medium shadow hover:shadow-lg transition-all duration-200"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 16px 0 #334155",
              background: "#334155",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 rounded bg-slate-700 text-white font-medium shadow hover:shadow-lg transition-all duration-200"
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/Mahesh_Jadhao_VIT.pdf"
            download
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 16px 0 #22d3ee",
              background: "#0ea5e9",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 rounded bg-cyan-600 text-white font-medium shadow hover:shadow-lg transition-all duration-200"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
