import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

// Lazy loaded components
const Navbar = lazy(() => import('./components/layout/Navbar'));
const Footer = lazy(() => import('./components/layout/Footer'));
const Hero = lazy(() => import('./components/hero/Hero'));
const About = lazy(() => import('./components/about/About'));
const Projects = lazy(() => import('./components/projects/Projects'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Achievements = lazy(() => import('./components/achievements/Achievements'));
const ResumeSection = lazy(() => import('./components/resume/ResumeSection'));
const Contact = lazy(() => import('./components/contact/Contact'));

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Mahesh Jadhao | Full Stack Developer & AI Engineer Portfolio</title>
        <meta
          name="description"
          content="Mahesh Jadhao - Full Stack Developer and AI Engineer. Specializing in MERN, FastAPI, Microservices, and AI-powered applications. Explore projects, skills, and experience."
        />
        <meta
          name="keywords"
          content="Mahesh Jadhao, Mahesh, Mahesh Portfolio, Full Stack Developer, AI Engineer, MERN, FastAPI, Microservices, React, Node.js, TensorFlow, MongoDB, Python, JavaScript, TypeScript, Pune, India, Developer Portfolio, AI Projects"
        />
        <meta name="author" content="Mahesh Jadhao" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0f" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maheshjadhao.com/" />
        <meta
          property="og:title"
          content="Mahesh Jadhao | Full Stack Developer & AI Engineer"
        />
        <meta
          property="og:description"
          content="Mahesh Jadhao - Full Stack Developer and AI Engineer. Building scalable AI-powered applications using MERN, FastAPI, and Microservices."
        />
        <meta
          property="og:image"
          content="https://maheshjadhao.com/og-image.jpg"
        />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://maheshjadhao.com/" />
        <meta
          name="twitter:title"
          content="Mahesh Jadhao | Full Stack Developer & AI Engineer"
        />
        <meta
          name="twitter:description"
          content="Mahesh Jadhao - Full Stack Developer and AI Engineer. Building scalable AI-powered applications."
        />
        <meta
          name="twitter:image"
          content="https://maheshjadhao.com/og-image.jpg"
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://maheshjadhao.com/" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div className="min-h-screen bg-ink">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          }
        >
          <Navbar />
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
              id="achievements"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <Achievements />
            </motion.section>
            <motion.section
              id="resume"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <ResumeSection />
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
      </div>
    </HelmetProvider>
  );
}

export default App;