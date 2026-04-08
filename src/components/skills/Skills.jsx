import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaDocker,
  FaJs,
  FaCloud,
  FaShieldAlt,
  FaServer,
  FaCode,
  FaBrain,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTensorflow,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiRabbitmq,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
      },
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

  const skillCategories = useMemo(
    () => [
      {
        title: "Frontend Architecture",
        icon: <FaCode className="text-purple-400" />,
        description: "Building responsive, performant interfaces",
        skills: [
          { name: "React.js", icon: <FaReact className="text-blue-400" /> },
          { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },
          {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-cyan-400" />,
          },
          {
            name: "JavaScript/TypeScript",
            icon: <FaJs className="text-yellow-400" />,
          },
        ],
      },
      {
        title: "Backend Engineering",
        icon: <FaServer className="text-blue-400" />,
        description: "Scalable, secure, and efficient systems",
        skills: [
          { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
          {
            name: "Python/FastAPI",
            icon: <SiFastapi className="text-teal-400" />,
          },
          { name: "Express.js", icon: <FaNodeJs className="text-gray-400" /> },
          { name: "RESTful APIs", icon: <FaCloud className="text-blue-400" /> },
        ],
      },
      {
        title: "Database Management",
        icon: <FaDatabase className="text-green-400" />,
        description: "Efficient data storage and retrieval",
        skills: [
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
          {
            name: "PostgreSQL",
            icon: <SiPostgresql className="text-blue-500" />,
          },
          { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
          { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        ],
      },
      {
        title: "AI & Machine Learning",
        icon: <FaBrain className="text-purple-500" />,
        description: "Intelligent solutions with AI",
        skills: [
          {
            name: "Gemini API",
            icon: <SiOpenai className="text-purple-400" />,
          },
          { name: "GenAI", icon: <FaBrain className="text-purple-400" /> },
          {
            name: "Agentic AI",
            icon: <FaMicrochip className="text-cyan-400" />,
          },
          {
            name: "Computer Vision",
            icon: <FaPython className="text-blue-400" />,
          },
        ],
      },
      {
        title: "DevOps & Tools",
        icon: <FaCloud className="text-cyan-400" />,
        description: "Streamlined development & deployment",
        skills: [
          { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
          {
            name: "Kubernetes",
            icon: <SiKubernetes className="text-blue-500" />,
          },
          {
            name: "Git/GitHub",
            icon: <FaGitAlt className="text-orange-600" />,
          },
          {
            name: "RabbitMQ",
            icon: <SiRabbitmq className="text-orange-500" />,
          },
        ],
      },
      {
        title: "Security & Auth",
        icon: <FaShieldAlt className="text-red-400" />,
        description: "Secure authentication & authorization",
        skills: [
          { name: "JWT", icon: <FaShieldAlt className="text-red-400" /> },
          {
            name: "OAuth 2.0",
            icon: <FaShieldAlt className="text-blue-400" />,
          },
          { name: "RBAC", icon: <FaShieldAlt className="text-purple-400" /> },
          {
            name: "Encryption",
            icon: <FaShieldAlt className="text-green-400" />,
          },
        ],
      },
    ],
    [],
  );

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

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
                Technical Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Leveraging modern technologies to build robust, scalable
              applications
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-white/5 to-white/0 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-purple-500/50">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl" />
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-3xl p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-purple-300/80 mb-2">
                        Focus
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + skillIndex * 0.05 }}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-gray-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-10 sm:mt-16 text-center"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Tech Stack Overview
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: <FaReact />, name: "React", color: "text-blue-400" },
                  {
                    icon: <FaNodeJs />,
                    name: "Node.js",
                    color: "text-green-500",
                  },
                  {
                    icon: <SiFastapi />,
                    name: "FastAPI",
                    color: "text-teal-400",
                  },
                  {
                    icon: <SiTensorflow />,
                    name: "TensorFlow",
                    color: "text-orange-500",
                  },
                  {
                    icon: <SiMongodb />,
                    name: "MongoDB",
                    color: "text-green-500",
                  },
                  {
                    icon: <FaDocker />,
                    name: "Docker",
                    color: "text-blue-400",
                  },
                  {
                    icon: <FaPython />,
                    name: "Python",
                    color: "text-yellow-500",
                  },
                  {
                    icon: <SiRabbitmq />,
                    name: "RabbitMQ",
                    color: "text-orange-500",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 1.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <span className={`text-xl ${tech.color}`}>{tech.icon}</span>
                    <span className="text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);
