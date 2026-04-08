import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaTrophy,
  FaBook,
  FaMedal,
  FaCode,
  FaAward,
  FaStar,
  FaCertificate,
} from "react-icons/fa";

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = useMemo(
    () => [
      {
        icon: <FaTrophy className="text-yellow-500" />,
        title: "Hackathon Winner",
        description:
          "First place at ByteVerse Hackathon for real-time collaboration platform",
        year: "2025",
        highlight: true,
        gradient: "from-yellow-500/20 to-yellow-600/20",
      },
      {
        icon: <FaBook className="text-purple-400" />,
        title: "IEEE Publication",
        description:
          "Published research paper on TinyML for agricultural disease detection",
        year: "2025",
        highlight: true,
        isIeee: true,
        gradient: "from-purple-500/20 to-purple-600/20",
      },
      {
        icon: <FaCode className="text-green-400" />,
        title: "150+ LeetCode Problems",
        description: "Solved over 500 DSA problems across various platforms",
        year: "2026",
        gradient: "from-green-500/20 to-green-600/20",
      },
      {
        icon: <FaCertificate className="text-orange-400" />,
        title: "IBM Certified",
        description: "IBM Full Stack Software Developer certification",
        year: "2025",
        gradient: "from-orange-500/20 to-orange-600/20",
      },
    ],
    [],
  );

  return (
    <section
      id="achievements"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 particle-bg" />
      <div className="absolute inset-0 noise-layer" />
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

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
                Recognition
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Achievements & <span className="gradient-text">Awards</span>
            </motion.h2>
            <div className="mx-auto mt-4 w-44 section-divider" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Recognition for excellence in technology and innovation
            </motion.p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`relative bg-gradient-to-r ${achievement.gradient} rounded-2xl p-5 sm:p-6 border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300 glass-strong`}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {achievement.highlight && (
                    <div className="absolute -top-2 -right-2">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                          <FaAward className="text-white text-xl" />
                        </div>
                        <div className="absolute inset-0 w-12 h-12 bg-purple-500 rounded-full animate-ping opacity-75" />
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {achievement.year}
                        </span>
                        {achievement.isIeee && (
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-semibold">
                            🏆 HIGHLIGHT
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Achievements);
