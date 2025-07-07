import React, { memo } from "react";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, type: "spring", stiffness: 80 },
  }),
};

const Projects = memo(() => (
  <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-10 text-center">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project, i) => (
        <motion.div
          key={project.name}
          className="relative group bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 rounded-2xl shadow-xl p-7 flex flex-col transition-transform duration-300 hover:scale-[1.03] border border-blue-200 dark:border-gray-800"
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          {/* Animated border highlight on hover */}
          <span className="absolute inset-0 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-blue-400 via-blue-200 to-cyan-300 dark:from-blue-700 dark:via-blue-900 dark:to-cyan-900 blur-[2px]"></span>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 flex-1">
                {project.name}
              </h3>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-cyan-700 dark:text-cyan-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                  aria-label="Live Demo"
                  title="Live Website"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {project.desc}
            </p>
            {project.details && (
              <ul className="text-gray-600 dark:text-gray-400 text-sm mb-3 list-disc list-inside space-y-1">
                {project.details.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs px-2 py-1 rounded font-semibold border border-blue-200 dark:border-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 flex-wrap">
              {project.github?.frontend && (
                <a
                  href={project.github.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition"
                  aria-label="GitHub Frontend"
                  title="Frontend Repo"
                >
                  <FaGithub size={18} />
                  <span className="text-xs font-medium">Frontend</span>
                </a>
              )}
              {project.github?.backend && (
                <a
                  href={project.github.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition"
                  aria-label="GitHub Backend"
                  title="Backend Repo"
                >
                  <FaServer size={16} />
                  <span className="text-xs font-medium">Backend</span>
                </a>
              )}
              {project.github?.main && (
                <a
                  href={project.github.main}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition"
                  aria-label="GitHub"
                  title="GitHub Repo"
                >
                  <FaGithub size={18} />
                  <span className="text-xs font-medium">GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-700 dark:text-cyan-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                  aria-label="Live Demo"
                  title="Live Website"
                >
                  <FaExternalLinkAlt size={16} />
                  <span className="text-xs font-medium">Live</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
));

export default Projects;
