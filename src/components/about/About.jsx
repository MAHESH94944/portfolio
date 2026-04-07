import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaMicrochip,
  FaCloud,
  FaRobot,
  FaDatabase,
  FaAward,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const stats = [
    { icon: <FaCode />, label: "Projects Completed", value: "10+" },
    { icon: <FaAward />, label: "Hackathons Won", value: "1" },
    { icon: <FaRocket />, label: "Internship Experience", value: "5 Months" },
    { icon: <FaRobot />, label: "AI Models", value: "5+" },
  ];

  const interests = [
    {
      icon: <FaRobot className="text-purple-400" />,
      title: "AI-powered systems",
      description: "Building intelligent applications with ML/AI",
      gradient: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: <FaCloud className="text-blue-400" />,
      title: "Scalable backend",
      description: "Designing robust, scalable systems",
      gradient: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: <FaMicrochip className="text-cyan-400" />,
      title: "Microservices",
      description: "Event-driven distributed architecture",
      gradient: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      icon: <FaDatabase className="text-green-400" />,
      title: "Real-world AI",
      description: "Solving practical problems with AI",
      gradient: "from-green-500/20 to-green-600/20",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
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
                Who Am I
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <div className="mx-auto mt-4 w-48 section-divider" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-gray-800">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I'm a{" "}
                  <span className="gradient-text font-semibold">
                    Final year CSE (AI) student
                  </span>{" "}
                  passionate about building technology that makes a difference.
                  My journey started with curiosity and evolved into a mission
                  to create scalable, intelligent systems.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                  I specialize in{" "}
                  <span className="text-blue-400">full-stack development</span>{" "}
                  and <span className="text-cyan-400">AI engineering</span>,
                  with a focus on microservices architecture and real-world
                  applications that solve actual problems.
                </p>

                {/* Quote */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
                  <p className="text-gray-300 italic text-center">
                    "Turning complex problems into elegant, scalable solutions —
                    let's build something amazing together."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats & Interests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-strong rounded-xl p-4 sm:p-6 text-center border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="text-3xl text-purple-400 mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Interests */}
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${interest.gradient} rounded-xl p-4 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.08)]`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{interest.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {interest.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
