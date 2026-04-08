import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaArrowRight,
  FaUsers,
  FaClock,
  FaRocket,
  FaCode,
  FaBrain,
  FaMicrochip,
  FaDatabase,
} from "react-icons/fa";
import { SiTensorflow, SiFastapi, SiMongodb, SiReact } from "react-icons/si";

const Hero = () => {
  const targetRef = useRef(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [deviceOrientation, setDeviceOrientation] = useState({
    beta: 0,
    gamma: 0,
  });
  const [gyroEnabled, setGyroEnabled] = useState(false);
  const mouseRaf = useRef(0);
  const gyroRaf = useRef(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

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
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    const handleOrientation = (e) => {
      if (!isMobile || e.beta === null || e.gamma === null) return;
      if (gyroRaf.current) return;
      gyroRaf.current = window.requestAnimationFrame(() => {
        setDeviceOrientation({
          beta: Math.min(Math.max(e.beta / 30, -1), 1),
          gamma: Math.min(Math.max(e.gamma / 30, -1), 1),
        });
        setGyroEnabled(true);
        gyroRaf.current = 0;
      });
    };

    handleResize();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    if (window.DeviceOrientationEvent) {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        // iOS - will request on user interaction
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("deviceorientation", handleOrientation);
      if (mouseRaf.current) {
        window.cancelAnimationFrame(mouseRaf.current);
      }
      if (gyroRaf.current) {
        window.cancelAnimationFrame(gyroRaf.current);
      }
    };
  }, [isMobile]);

  // Function to request gyro permission (iOS)
  const requestGyroPermission = useCallback(async () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === "granted") {
          const handler = (e) => {
            if (e.beta === null || e.gamma === null) return;
            setDeviceOrientation({
              beta: Math.min(Math.max(e.beta / 30, -1), 1),
              gamma: Math.min(Math.max(e.gamma / 30, -1), 1),
            });
            setGyroEnabled(true);
          };
          window.addEventListener("deviceorientation", handler);
        }
      } catch (error) {
        console.log("Gyro permission denied");
      }
    }
  }, []);

  const handleAskQuestion = useCallback(() => {
    if (chatMessage.toLowerCase().includes("project")) {
      setChatResponse(
        "I've built AI Commerce Suite (microservices), SyncX (collaboration), and Mango Disease Detection (TinyML)! Check out my projects section!",
      );
    } else if (chatMessage.toLowerCase().includes("skill")) {
      setChatResponse(
        "I specialize in MERN, FastAPI, Microservices, TensorFlow, and Docker. Full-stack with AI integration!",
      );
    } else if (chatMessage.toLowerCase().includes("experience")) {
      setChatResponse(
        "5 months of internship experience in full-stack and AI engineering, with 10+ projects built!",
      );
    } else {
      setChatResponse(
        "Thanks for asking! I'm passionate about building scalable AI-powered applications. Feel free to explore my projects!",
      );
    }
    setTimeout(() => setChatResponse(""), 4000);
    setChatMessage("");
  }, [chatMessage]);

  const stats = useMemo(
    () => [
      {
        icon: <FaUsers className="text-purple-400" />,
        value: "1200+",
        label: "Users Analyzed",
        description: "Active users across platforms",
        gradient: "from-purple-500 to-pink-500",
      },
      {
        icon: <FaClock className="text-cyan-400" />,
        value: "<280ms",
        label: "Inference Time",
        description: "Real-time AI processing",
        gradient: "from-cyan-500 to-blue-500",
      },
      {
        icon: <FaRocket className="text-green-400" />,
        value: "100%",
        label: "Uptime",
        description: "99.9% reliability",
        gradient: "from-green-500 to-emerald-500",
      },
    ],
    [],
  );

  const floatingTech = useMemo(
    () => [
      {
        icon: <SiTensorflow />,
        name: "TensorFlow",
        x: -120,
        y: -80,
        color: "#FF6F00",
        delay: 0,
        rotate: "0deg",
        mobileX: -60,
        mobileY: -40,
      },
      {
        icon: <FaCode />,
        name: "MERN",
        x: 150,
        y: -100,
        color: "#61DAFB",
        delay: 1,
        rotate: "15deg",
        mobileX: 80,
        mobileY: -50,
      },
      {
        icon: <SiFastapi />,
        name: "FastAPI",
        x: -140,
        y: 90,
        color: "#009688",
        delay: 2,
        rotate: "-10deg",
        mobileX: -70,
        mobileY: 45,
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        x: 130,
        y: 80,
        color: "#47A248",
        delay: 1.5,
        rotate: "20deg",
        mobileX: 65,
        mobileY: 40,
      },
      {
        icon: <FaBrain />,
        name: "Gemini AI",
        x: 0,
        y: -130,
        color: "#8b5cf6",
        delay: 2.5,
        rotate: "5deg",
        mobileX: 0,
        mobileY: -65,
      },
      {
        icon: <FaMicrochip />,
        name: "Microservices",
        x: -80,
        y: 130,
        color: "#3b82f6",
        delay: 0.5,
        rotate: "-5deg",
        mobileX: -40,
        mobileY: 65,
      },
      {
        icon: <SiReact />,
        name: "React",
        x: 160,
        y: -40,
        color: "#61DAFB",
        delay: 1.8,
        rotate: "25deg",
        mobileX: 85,
        mobileY: -20,
      },
      {
        icon: <FaDatabase />,
        name: "PostgreSQL",
        x: -160,
        y: -20,
        color: "#336791",
        delay: 3,
        rotate: "-15deg",
        mobileX: -85,
        mobileY: -10,
      },
    ],
    [],
  );

  // Calculate transform based on device
  const get3DTransform = () => {
    if (isMobile && gyroEnabled) {
      // Use gyroscope for mobile
      return `rotateX(${deviceOrientation.beta * 15}deg) rotateY(${deviceOrientation.gamma * 15}deg)`;
    } else if (isMobile) {
      // Subtle auto-rotation for mobile without gyro
      return `rotateX(5deg) rotateY(5deg)`;
    } else {
      // Mouse-based for desktop
      return `rotateX(${mousePosition.y * -0.4}deg) rotateY(${mousePosition.x * 0.4}deg)`;
    }
  };

  const getCardDepth = () => {
    if (isMobile) return "translateZ(8px)";
    return "translateZ(20px)";
  };

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f]"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: isMobile ? "20px 20px" : "40px 40px",
          }}
        />
        <div className="absolute inset-0 noise-layer" />
      </div>

      {/* Gyro Permission Prompt for iOS */}
      {isMobile &&
        !gyroEnabled &&
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
          >
            <button
              onClick={requestGyroPermission}
              className="px-4 py-2 bg-purple-600 rounded-full text-xs text-white shadow-lg"
            >
              Enable 3D Effect 🎮
            </button>
          </motion.div>
        )}

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-5 sm:px-6 min-h-screen flex items-center"
      >
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Name with gradient */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Mahesh Jadhao
                  </span>
                </h1>
                <div className="text-lg sm:text-2xl md:text-3xl font-semibold mt-3 sm:mt-4">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      2000,
                      "AI Engineer",
                      2000,
                      "Microservices Architect",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-base sm:text-lg max-w-lg"
              >
                I build scalable AI-powered applications using{" "}
                <span className="text-purple-400 font-semibold">MERN</span>,{" "}
                <span className="text-blue-400 font-semibold">FastAPI</span> &{" "}
                <span className="text-cyan-400 font-semibold">
                  Microservices
                </span>
                .
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2 shadow-lg hover:shadow-purple-500/25 transition-all"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects{" "}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  href="/Mahesh_Jadhao_Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2 border border-gray-700 hover:border-purple-500 transition-all"
                >
                  <FaDownload /> Download Resume
                </motion.a>

                <motion.a
                  href="https://github.com/MAHESH94944"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2 border border-gray-700 hover:border-purple-500 transition-all"
                >
                  <FaGithub /> GitHub
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-6 pt-4"
              >
                <a
                  href="https://github.com/MAHESH94944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="http://www.linkedin.com/in/mahesh-jadhao-521959279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://x.com/Mahe29914Jadhao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats & Chat Interface with 3D */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative space-y-5 sm:space-y-6 overflow-visible"
              style={{ perspective: "1200px" }}
            >
              {/* Decorative elements - hidden on mobile */}
              {!isMobile && (
                <>
                  <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent blur-2xl" />
                  <div className="pointer-events-none absolute left-6 top-8 h-32 w-32 rounded-full border border-purple-500/20 shadow-[0_0_40px_rgba(139,92,246,0.4)] animate-spin-slow" />
                  <div className="pointer-events-none absolute right-4 top-20 h-20 w-20 rounded-full border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.35)] animate-spin-slow" />
                </>
              )}

              <motion.div
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                  transform: get3DTransform(),
                  transition: "transform 0.2s ease-out",
                }}
              >
                {/* Profile Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative glass-strong rounded-2xl p-5 sm:p-6 border border-purple-500/30 overflow-hidden"
                  style={{ transform: getCardDepth() }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
                  <div className="relative flex items-center gap-4 sm:gap-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-40" />
                      <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-purple-400/20 animate-spin-slow" />
                      <img
                        src="/avatar-photo3.jpg"
                        alt="Mahesh Jadhao"
                        className="relative h-20 w-20 sm:h-28 sm:w-28 rounded-full object-cover border-2 border-purple-500/60 shadow-lg neon-ring"
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">
                        AI Engineer · Full Stack Developer
                      </p>
                      <h3 className="text-base sm:text-xl font-semibold text-white">
                        Mahesh Jadhao
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Stats Grid with 3D hover effect */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-0">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      onHoverStart={() => setHoveredStat(index)}
                      onHoverEnd={() => setHoveredStat(null)}
                      className="relative group"
                      style={{
                        transform: isMobile
                          ? "translateZ(5px)"
                          : "translateZ(10px)",
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <div className="relative glass-strong rounded-2xl p-3 sm:p-5 text-center border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                        <div className="text-xl sm:text-3xl mb-1 sm:mb-2">
                          {stat.icon}
                        </div>
                        <div className="text-base sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-[8px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">
                          {stat.label}
                        </div>
                        <AnimatePresence>
                          {hoveredStat === index && !isMobile && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 rounded text-xs text-gray-300 whitespace-nowrap"
                            >
                              {stat.description}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* AI Chat Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative mt-4 sm:mt-0"
                  style={{
                    transform: isMobile
                      ? "translateZ(6px)"
                      : "translateZ(18px)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl" />
                  <div className="relative glass-strong rounded-2xl p-4 sm:p-6 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                            <FaBrain className="text-white text-base sm:text-xl" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-xs sm:text-base">
                            Ask Mahesh
                          </h3>
                          <p className="text-[8px] sm:text-xs text-gray-400">
                            Ask me about my projects & skills!
                          </p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base"
                      >
                        {isChatOpen ? "−" : "+"}
                      </motion.button>
                    </div>

                    <AnimatePresence>
                      {isChatOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3 sm:space-y-4"
                        >
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={chatMessage}
                              onChange={(e) => setChatMessage(e.target.value)}
                              onKeyPress={(e) =>
                                e.key === "Enter" && handleAskQuestion()
                              }
                              placeholder="Ask a question..."
                              className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-purple-500 outline-none text-white text-xs sm:text-sm"
                            />
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleAskQuestion}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-xs sm:text-sm font-semibold"
                            >
                              Send
                            </motion.button>
                          </div>

                          {chatResponse && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-2 sm:p-3 bg-purple-500/10 rounded-xl border border-purple-500/20"
                            >
                              <p className="text-xs sm:text-sm text-gray-300">
                                {chatResponse}
                              </p>
                            </motion.div>
                          )}

                          {/* Quick Questions - Scrollable on mobile */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-20 sm:max-h-none overflow-y-auto sm:overflow-visible">
                            {[
                              "What projects have you built?",
                              "What are your skills?",
                              "Tell me about your experience",
                            ].map((q, i) => (
                              <motion.button
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                  setChatMessage(q);
                                  setTimeout(handleAskQuestion, 100);
                                }}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800/50 rounded-full text-[9px] sm:text-xs text-gray-400 hover:text-purple-400 transition-colors"
                              >
                                {q}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Tech Icons - Responsive */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingTech.map((tech, index) => {
          const posX = isMobile ? tech.mobileX : tech.x;
          const posY = isMobile ? tech.mobileY : tech.y;
          const iconSize = isMobile ? 24 : 36;
          const blurSize = isMobile ? 20 : 40;

          return (
            <motion.div
              key={index}
              className={`absolute ${isMobile ? "hidden sm:block" : "hidden lg:block"} ${isMobile ? "opacity-50" : ""}`}
              initial={{ x: posX, y: posY, opacity: 0, rotate: 0 }}
              animate={{
                x: [
                  posX,
                  posX + (Math.random() * 30 - 15),
                  posX - (Math.random() * 20 - 10),
                  posX + (Math.random() * 25 - 12),
                  posX,
                ],
                y: [posY, posY - 25, posY + 20, posY - 22, posY],
                opacity: [0, 0.6, 0.8, 0.6, 0],
                rotate: [
                  0,
                  parseInt(tech.rotate) + 10,
                  parseInt(tech.rotate) - 8,
                  parseInt(tech.rotate) + 8,
                  0,
                ],
              }}
              transition={{
                duration: isMobile ? 8 : 12,
                delay: tech.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                transform: !isMobile
                  ? `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                  : "none",
              }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative glass-dark rounded-xl p-2 border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                  <div
                    className="text-2xl sm:text-3xl"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  {!isMobile && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-mono">
                        {tech.name}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Code Snippets - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute bottom-20 left-10 hidden xl:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="glass-dark rounded-xl p-4 border border-purple-500/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">
                $ npx create-portfolio
              </span>
            </div>
            <div className="font-mono text-xs space-y-1">
              <div className="text-purple-400">
                ✓ Building Mahesh's Portfolio...
              </div>
              <div className="text-blue-400">✓ Loading 3D animations...</div>
              <div className="text-cyan-400 animate-pulse">▌ Ready in 2.3s</div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Scroll Indicator - Adjusted for mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-[8px] sm:text-xs text-gray-500 uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-purple-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
