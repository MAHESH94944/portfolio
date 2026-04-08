import React, { memo, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaProjectDiagram,
  FaBrain,
  FaLeaf,
  FaChartLine,
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaCode,
  FaArrowRight,
  FaTimes,
  FaComments,
  FaRegLightbulb,
  FaRocket,
} from "react-icons/fa";
import {
  SiRabbitmq,
  SiMongodb,
  SiTensorflow,
  SiFastapi,
  SiDocker,
} from "react-icons/si";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const gridVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.08 } },
    }),
    [],
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    [],
  );

  const projects = useMemo(
    () => [
      {
        id: 4,
        title: "AI-First CRM for Healthcare",
        subtitle: "Conversational CRM + Agentic AI",
        icon: <FaRobot />,
        gradient: "from-fuchsia-600 to-indigo-600",
        color: "fuchsia",
        description:
          "AI-driven CRM for healthcare field reps with dual data entry, real-time form autofill, and strategic insights from agentic tools.",
        problem:
          "Field teams need a faster, more intelligent way to log HCP interactions and extract actionable insights without losing context.",
        solution:
          "Built a dual-interface CRM with a stateful AI assistant that extracts, corrects, and summarizes interaction data, plus advanced history retrieval and recommendation tools.",
        techStack: [
          { name: "React + Redux", icon: <FaCode /> },
          { name: "Vite", icon: <FaRocket /> },
          { name: "Tailwind CSS", icon: <FaRegLightbulb /> },
          { name: "FastAPI", icon: <FaServer /> },
          { name: "SQLAlchemy", icon: <FaDatabase /> },
          { name: "MySQL", icon: <FaDatabase /> },
          { name: "LangChain", icon: <FaComments /> },
          { name: "Groq (gemma2-9b-it)", icon: <FaBrain /> },
        ],
        features: [
          "Dual data entry with AI autofill",
          "Stateful conversational assistant",
          "Strategic summaries and next-step suggestions",
          "Fuzzy search + date-range filters",
          "Context-aware corrections",
          "Pagination-ready history retrieval",
        ],
        architecture: {
          services: [
            "Conversational Tool",
            "Log Interaction Tool",
            "Edit Interaction Tool",
            "Fetch History Tool",
            "Summarize History Tool",
            "Suggest Next Action Tool",
          ],
          communication: "REST APIs + Agentic tool routing",
          database: "MySQL with SQLAlchemy",
        },
        metrics: [
          { label: "AI Tools", value: "6" },
          { label: "Modes", value: "Dual" },
          { label: "Focus", value: "HCP" },
        ],
        github: "https://github.com/MAHESH94944/aivoa-hcp-crm",
        live: null,
        challenges:
          "Designing reliable stateful updates while preserving conversation context. Solved by merging partial updates into a single source of truth.",
      },
      {
        id: 1,
        title: "AI Commerce Suite",
        subtitle: "Intelligent Marketplace Platform",
        icon: <FaProjectDiagram />,
        gradient: "from-purple-600 to-pink-600",
        color: "purple",
        description:
          "Production-style e-commerce platform with microservices architecture, event-driven communication, and AI-powered features.",
        problem:
          "Modern e-commerce platforms need scalable, fault-tolerant systems that can handle high traffic while maintaining data consistency across services.",
        solution:
          "Built using microservices architecture with independent services for auth, products, cart, orders, payments, and notifications, communicating via REST and RabbitMQ for async events.",
        techStack: [
          { name: "Node.js", icon: <FaCode /> },
          { name: "Express", icon: <FaServer /> },
          { name: "RabbitMQ", icon: <SiRabbitmq /> },
          { name: "MongoDB", icon: <SiMongodb /> },
          { name: "Docker", icon: <SiDocker /> },
          { name: "JWT", icon: <FaShieldAlt /> },
        ],
        features: [
          "Event-driven microservices architecture",
          "JWT authentication with RBAC",
          "Real payment integration (Razorpay)",
          "Transactional emails with Nodemailer",
          "AI Buddy for product discovery",
          "Docker containerization",
        ],
        architecture: {
          services: [
            "Auth Service",
            "Product Service",
            "Order Service",
            "Payment Service",
            "Notification Service",
          ],
          communication: "REST APIs + RabbitMQ Events",
          database: "MongoDB (per service)",
        },
        metrics: [
          { label: "Services", value: "5" },
          { label: "Response Time", value: "<200ms" },
          { label: "Events/sec", value: "1K+" },
        ],
        github:
          "https://github.com/MAHESH94944/Intelligent-Marketplace-Platform",
        live: null,
        challenges:
          "Managing distributed transactions and ensuring eventual consistency. Implemented Saga pattern with RabbitMQ for reliable event handling.",
      },
      {
        id: 2,
        title: "SyncX",
        subtitle: "Collaborative Platform",
        icon: <FaBrain />,
        gradient: "from-blue-600 to-cyan-600",
        color: "blue",
        description:
          "Real-time team collaboration platform with Google OAuth, workspace management, and optimized state handling.",
        problem:
          "Teams need better collaboration tools with seamless authentication and efficient state management for workspace coordination.",
        solution:
          "Built with clean MVC architecture, Google OAuth 2.0, and optimized state management for real-time team coordination.",
        techStack: [
          { name: "Node.js", icon: <FaCode /> },
          { name: "Express", icon: <FaServer /> },
          { name: "MongoDB", icon: <SiMongodb /> },
          { name: "OAuth 2.0", icon: <FaShieldAlt /> },
          { name: "Redux", icon: <FaCloud /> },
          { name: "Zod", icon: <FaCode /> },
        ],
        features: [
          "Google OAuth 2.0 authentication",
          "Workspace and project management",
          "Real-time task coordination",
          "Custom middleware for error handling",
          "Optimized token persistence",
        ],
        architecture: {
          services: ["Auth Service", "Workspace Service", "Task Service"],
          communication: "REST APIs",
          database: "MongoDB with Mongoose",
        },
        metrics: [
          { label: "Users", value: "100+" },
          { label: "Workspaces", value: "50+" },
          { label: "Tasks", value: "1K+" },
        ],
        github: "https://github.com/MAHESH94944/SyncX-Backend",
        extraLinks: [
          {
            label: "Frontend",
            url: "https://github.com/MAHESH94944/SyncX-Frontend",
          },
          {
            label: "Backend",
            url: "https://github.com/MAHESH94944/SyncX-Backend",
          },
        ],
        live: null,
        challenges:
          "Implementing secure OAuth flow while maintaining good UX and handling token refresh cycles.",
      },
      {
        id: 3,
        title: "Mango Disease Detection",
        subtitle: "AI & TinyML Solution",
        icon: <FaLeaf />,
        gradient: "from-green-600 to-emerald-600",
        color: "green",
        description:
          "CNN-based disease detection system optimized with TensorFlow Lite for offline inference on low-end devices.",
        problem:
          "Farmers in rural areas lack internet access and expensive hardware for disease detection.",
        solution:
          "Developed a lightweight CNN model with TensorFlow Lite optimization for offline inference on smartphones.",
        techStack: [
          { name: "Python", icon: <FaCode /> },
          { name: "TensorFlow", icon: <SiTensorflow /> },
          { name: "FastAPI", icon: <SiFastapi /> },
          { name: "OpenCV", icon: <FaBrain /> },
          { name: "CNN", icon: <FaRobot /> },
        ],
        features: [
          "CNN model with 94% accuracy",
          "TensorFlow Lite quantization",
          "<300ms inference time",
          "Offline inference capability",
          "Data augmentation for robustness",
          "Lightweight Flask/FastAPI",
        ],
        architecture: {
          services: ["Flask API", "TFLite Model", "OpenCV Preprocessing"],
          communication: "REST API",
          database: "Local storage",
        },
        metrics: [
          { label: "Accuracy", value: "94%" },
          { label: "Inference", value: "<300ms" },
          { label: "Model Size", value: "4.2MB" },
        ],
        github: null,
        live: null,
        challenges:
          "Optimizing the model for mobile deployment while maintaining accuracy required careful quantization and architecture choices.",
      },
    ],
    [],
  );

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

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
                Featured Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Real-world projects demonstrating expertise in full-stack
              development and AI
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.01 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  <div className="relative glass-strong rounded-2xl p-5 sm:p-6 border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Icon & Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`text-4xl p-3 bg-${project.color}-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="GitHub"
                          >
                            <FaGithub size={20} />
                          </a>
                        )}
                        {project.extraLinks?.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors"
                            title={link.label}
                          >
                            <FaExternalLinkAlt size={18} />
                          </a>
                        ))}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-purple-400 text-sm mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300 flex items-center gap-1"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-400">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-gray-800">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold gradient-text">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Learn More */}
                    <div className="mt-4 flex items-center gap-2 text-purple-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      View Details <FaArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-strong rounded-2xl border border-purple-500/30"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-gray-800 transition-colors z-10"
              >
                <FaTimes />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`text-5xl p-4 bg-gradient-to-r ${selectedProject.gradient} rounded-2xl`}
                  >
                    {selectedProject.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-purple-400">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">
                      Problem Statement
                    </h4>
                    <p className="text-gray-300">{selectedProject.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-300">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 glass rounded-full text-sm flex items-center gap-2"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">
                      Architecture Overview
                    </h4>
                    <div className="space-y-2">
                      <p>
                        <span className="text-gray-400">Services:</span>{" "}
                        {selectedProject.architecture.services.join(" → ")}
                      </p>
                      <p>
                        <span className="text-gray-400">Communication:</span>{" "}
                        {selectedProject.architecture.communication}
                      </p>
                      <p>
                        <span className="text-gray-400">Database:</span>{" "}
                        {selectedProject.architecture.database}
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">
                      Key Challenge
                    </h4>
                    <p className="text-gray-300">
                      {selectedProject.challenges}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-center hover:shadow-glow transition-all"
                      >
                        View on GitHub
                      </a>
                    )}
                    {selectedProject.extraLinks?.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 glass rounded-lg font-semibold text-center hover:border-purple-500 transition-all"
                      >
                        {link.label} Repo
                      </a>
                    ))}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 glass rounded-lg font-semibold text-center hover:border-purple-500 transition-all"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(Projects);
