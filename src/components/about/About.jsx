import React, { useRef, useState, useEffect, useMemo } from "react";
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
  FaUserAstronaut,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";
import { SiTensorflow, SiFastapi, SiMongodb, SiDocker } from "react-icons/si";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const mouseRaf = useRef(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.9],
  );
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMobile) return;
      if (mouseRaf.current) return;
      const { clientX, clientY } = e;
      mouseRaf.current = window.requestAnimationFrame(() => {
        setMousePosition({
          x: (clientX / window.innerWidth - 0.5) * 20,
          y: (clientY / window.innerHeight - 0.5) * 20,
        });
        mouseRaf.current = 0;
      });
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mouseRaf.current) {
        window.cancelAnimationFrame(mouseRaf.current);
      }
    };
  }, [isMobile]);

  const stats = useMemo(
    () => [
      {
        icon: <FaCode />,
        label: "Projects Completed",
        value: "10+",
        color: "purple",
      },
      {
        icon: <FaAward />,
        label: "Hackathons Won",
        value: "1",
        color: "pink",
      },
      {
        icon: <FaRocket />,
        label: "Internship Experience",
        value: "5 Months",
        color: "blue",
      },
      { icon: <FaRobot />, label: "AI Models", value: "5+", color: "cyan" },
    ],
    [],
  );

  const interests = useMemo(
    () => [
      {
        icon: <FaRobot className="text-purple-400" />,
        title: "AI-powered systems",
        description: "Building intelligent applications with ML/AI",
        gradient: "from-purple-500/20 to-purple-600/20",
        glow: "purple",
      },
      {
        icon: <FaCloud className="text-blue-400" />,
        title: "Scalable backend",
        description: "Designing robust, scalable systems",
        gradient: "from-blue-500/20 to-blue-600/20",
        glow: "blue",
      },
      {
        icon: <FaMicrochip className="text-cyan-400" />,
        title: "Microservices",
        description: "Event-driven distributed architecture",
        gradient: "from-cyan-500/20 to-cyan-600/20",
        glow: "cyan",
      },
      {
        icon: <FaDatabase className="text-green-400" />,
        title: "Real-world AI",
        description: "Solving practical problems with AI",
        gradient: "from-green-500/20 to-green-600/20",
        glow: "green",
      },
    ],
    [],
  );

  const floatingIcons = useMemo(
    () => [
      {
        icon: <SiTensorflow />,
        name: "TensorFlow",
        x: -100,
        y: -60,
        color: "#FF6F00",
        delay: 0,
        size: 40,
      },
      {
        icon: <SiFastapi />,
        name: "FastAPI",
        x: 120,
        y: -80,
        color: "#009688",
        delay: 1.5,
        size: 36,
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        x: -130,
        y: 70,
        color: "#47A248",
        delay: 2,
        size: 38,
      },
      {
        icon: <SiDocker />,
        name: "Docker",
        x: 110,
        y: 60,
        color: "#2496ED",
        delay: 0.8,
        size: 42,
      },
      {
        icon: <FaGlobe />,
        name: "Cloud Native",
        x: 0,
        y: -100,
        color: "#8b5cf6",
        delay: 2.5,
        size: 35,
      },
      {
        icon: <FaUserAstronaut />,
        name: "Problem Solver",
        x: -80,
        y: 110,
        color: "#3b82f6",
        delay: 1.2,
        size: 38,
      },
    ],
    [],
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Animated Background - Matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 right-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Grid Pattern - Same as Hero */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 noise-layer" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            initial={{ x: icon.x, y: icon.y, opacity: 0, rotate: 0 }}
            animate={{
              x: [
                icon.x,
                icon.x + (Math.random() * 40 - 20),
                icon.x - (Math.random() * 30 - 15),
                icon.x + (Math.random() * 35 - 17),
                icon.x,
              ],
              y: [icon.y, icon.y - 35, icon.y + 25, icon.y - 30, icon.y],
              opacity: [0, 0.7, 0.9, 0.7, 0],
              rotate: [0, 15, -10, 12, 0],
            }}
            transition={{
              duration: 10,
              delay: icon.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative glass-dark rounded-xl p-2 border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl" style={{ color: icon.color }}>
                  {icon.icon}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-mono">
                    {icon.name}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-5 sm:px-6 relative z-10"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header - Matching Hero Style */}
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
            >
              Get to know me better — my journey, skills, and what drives me
            </motion.p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            style={{
              transformStyle: "preserve-3d",
              transform: isMobile
                ? "none"
                : `rotateX(${mousePosition.y * -0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Left Content - Main Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
              style={{ transform: isMobile ? "none" : "translateZ(15px)" }}
            >
              <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaUserAstronaut className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Mahesh Jadhao
                      </h3>
                      <p className="text-sm text-gray-400">
                        Final Year CSE (AI)
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                    I'm a{" "}
                    <span className="gradient-text font-semibold">
                      Final year CSE (AI) student
                    </span>{" "}
                    passionate about building technology that makes a
                    difference. My journey started with curiosity and evolved
                    into a mission to create scalable, intelligent systems.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                    I specialize in{" "}
                    <span className="text-blue-400 font-semibold">
                      full-stack development
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-400 font-semibold">
                      AI engineering
                    </span>
                    , with a focus on microservices architecture and real-world
                    applications that solve actual problems.
                  </p>

                  {/* Quote */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
                    <p className="text-gray-300 italic text-center text-sm sm:text-base">
                      "Turning complex problems into elegant, scalable solutions
                      — let's build something amazing together."
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-6 flex justify-end">
                    <div className="text-right">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mb-2" />
                      <p className="text-gray-500 text-sm font-mono">
                        mahesh.jadhao
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats & Interests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
              style={{ transform: isMobile ? "none" : "translateZ(20px)" }}
            >
              {/* Stats Grid - Enhanced with 3D */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotateY: 90 }}
                    animate={inView ? { scale: 1, rotateY: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                    <div className="relative glass-strong rounded-xl p-4 sm:p-6 text-center border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                      <div className="text-3xl sm:text-4xl text-purple-400 mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interests - Enhanced with hover effects */}
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`group relative bg-gradient-to-r ${interest.gradient} rounded-xl p-4 border border-gray-800 hover:border-purple-500/50 transition-all duration-300`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${interest.glow}-500/0 to-${interest.glow}-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative flex items-start gap-4">
                      <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                        {interest.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-base sm:text-lg">
                          {interest.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {interest.description}
                        </p>
                      </div>
                      <FaArrowRight className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300 ml-auto opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Tech Stack Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="glass-strong rounded-xl p-4 border border-gray-800 text-center"
              >
                <p className="text-gray-400 text-sm">
                  Currently exploring{" "}
                  <span className="text-purple-400 font-semibold">LLMs</span>,{" "}
                  <span className="text-blue-400 font-semibold">
                    Agentic AI
                  </span>
                  , and{" "}
                  <span className="text-cyan-400 font-semibold">
                    Cloud Native
                  </span>{" "}
                  technologies
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
