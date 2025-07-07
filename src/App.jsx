import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

const App = () => {
  return (
    <HelmetProvider>
      <div
        className="
        min-h-screen
        bg-gradient-to-br from-gray-100 via-blue-100 to-blue-200
        dark:from-gray-950 dark:via-gray-900 dark:to-blue-950
        transition-colors duration-500
      "
      >
        <Helmet>
          <title>Mahesh Jadhao | Full Stack Developer Portfolio</title>
          <meta
            name="description"
            content="Mahesh Jadhao - Full Stack Developer portfolio. Explore MERN, TypeScript, React, Node.js projects, skills, and contact information."
          />
          <meta
            name="keywords"
            content="Mahesh Jadhao, Mahesh, Mahesh Portfolio, Mahesh Jadhao Portfolio, Full Stack Developer, MERN, React, Node.js, JavaScript, TypeScript, Pune, India, Developer Portfolio"
          />
          <meta name="author" content="Mahesh Jadhao" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://your-portfolio-domain.com/" />
          <meta
            property="og:title"
            content="Mahesh Jadhao | Full Stack Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Mahesh Jadhao - Full Stack Developer portfolio. Explore MERN, TypeScript, React, Node.js projects, skills, and contact information."
          />
          <meta
            property="og:image"
            content="https://your-portfolio-domain.com/MaheshJadhao_23.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://your-portfolio-domain.com/" />
          <meta
            name="twitter:title"
            content="Mahesh Jadhao | Full Stack Developer Portfolio"
          />
          <meta
            name="twitter:description"
            content="Mahesh Jadhao - Full Stack Developer portfolio. Explore MERN, TypeScript, React, Node.js projects, skills, and contact information."
          />
          <meta
            name="twitter:image"
            content="https://your-portfolio-domain.com/MaheshJadhao_23.jpg"
          />
          <link rel="canonical" href="https://your-portfolio-domain.com/" />
        </Helmet>
        <Navbar />
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-xl text-blue-700">
              Loading...
            </div>
          }
        >
          <Hero />
          <div className="space-y-16 md:space-y-24">
            <motion.section
              id="about"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <About />
            </motion.section>
            <motion.section
              id="projects"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <Projects />
            </motion.section>
            <motion.section
              id="skills"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <Skills />
            </motion.section>
            <motion.section
              id="contact"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <Contact />
            </motion.section>
          </div>
          <Footer />
        </Suspense>
        {/* ...other sections will go here... */}
      </div>
    </HelmetProvider>
  );
};

export default App;
