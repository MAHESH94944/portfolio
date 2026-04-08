import React, { Suspense, lazy, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";

const About = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Achievements = lazy(() =>
  import("./components/achievements/Achievements")
);
const ResumeSection = lazy(() => import("./components/resume/ResumeSection"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

const SectionFallback = () => (
  <div className="min-h-[40vh] w-full" aria-hidden="true" />
);

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <HelmetProvider>
      {/* ✅ SEO TAGS */}
      <Helmet>
        <title>
          Mahesh Jadhao | Full Stack Developer & AI Engineer Portfolio
        </title>

        <meta
          name="description"
          content="Mahesh Jadhao - Full Stack Developer and AI Engineer. Specializing in MERN, FastAPI, Microservices, and AI-powered applications."
        />

        <meta
          name="keywords"
          content="Mahesh Jadhao, Full Stack Developer, AI Engineer, MERN, FastAPI, Microservices, React, Node.js, MongoDB, Python, Portfolio, Pune, India"
        />

        <meta name="author" content="Mahesh Jadhao" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0f" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maheshjadhao.com/" />
        <meta
          property="og:title"
          content="Mahesh Jadhao | Full Stack Developer & AI Engineer"
        />
        <meta
          property="og:description"
          content="Building scalable AI-powered applications using MERN, FastAPI, and Microservices."
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
          content="Full Stack Developer and AI Engineer portfolio."
        />
        <meta
          name="twitter:image"
          content="https://maheshjadhao.com/og-image.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://maheshjadhao.com/" />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Helmet>

      {/* APP UI (UNCHANGED) */}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <ResumeSection />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;