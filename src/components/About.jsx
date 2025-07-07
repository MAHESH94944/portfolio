import React, { memo } from "react";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { motion } from "framer-motion";

const skills = [
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    percent: 90,
    color: "bg-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-400" />,
    percent: 80,
    color: "bg-blue-400",
  },
  {
    name: "Java",
    icon: <FaJava className="text-orange-400" />,
    percent: 75,
    color: "bg-orange-400",
  },
  {
    name: "C",
    icon: <FaDatabase className="text-gray-400" />,
    percent: 70,
    color: "bg-gray-400",
  },
  {
    name: "SQL",
    icon: <DiSqllite className="text-blue-300" />,
    percent: 75,
    color: "bg-blue-300",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    percent: 95,
    color: "bg-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    percent: 90,
    color: "bg-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    percent: 85,
    color: "bg-cyan-400",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-blue-400" />,
    percent: 85,
    color: "bg-blue-400",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300" />,
    percent: 80,
    color: "bg-gray-300",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    percent: 80,
    color: "bg-green-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    percent: 75,
    color: "bg-green-600",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-300" />,
    percent: 70,
    color: "bg-blue-300",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-orange-500" />,
    percent: 85,
    color: "bg-orange-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const barVariants = {
  hidden: { width: 0 },
  show: (percent) => ({
    width: `${percent}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

const About = memo(() => (
  <section
    id="about"
    className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 items-center"
  >
    {/* Left: Bio and CTAs */}
    <motion.div
      className="flex-1"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-blue-200"
        variants={item}
      >
        About Me
      </motion.h2>
      <motion.p className="mb-3 text-gray-300" variants={item}>
        Hi, I'm Mahesh Jadhao, a passionate developer based in Pune,
        Maharashtra, India. I specialize in Full Stack Development and love
        building robust, scalable web applications.
      </motion.p>
      <motion.p className="mb-6 text-gray-300" variants={item}>
        My expertise includes JavaScript, TypeScript, Java, C, SQL, React.js,
        Node.js, Express.js, MongoDB, MySQL, and more. I enjoy solving problems,
        learning new technologies, and collaborating on impactful projects.
      </motion.p>
      <motion.div className="flex gap-4" variants={item}>
        <a
          href="#projects"
          className="px-5 py-2 rounded bg-blue-600 text-blue-100 font-medium shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-5 py-2 rounded bg-gray-700 text-blue-100 font-medium shadow hover:bg-gray-600 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.div>
    {/* Right: Skills */}
    <motion.div
      className="flex-1 w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="space-y-6 w-full">
        {skills.map((skill) => (
          <motion.div key={skill.name} className="w-full" variants={item}>
            <div className="flex items-center mb-1">
              <span className="mr-2">{skill.icon}</span>
              <span className="text-blue-100 font-medium">{skill.name}</span>
              <span className="ml-auto text-gray-300 font-semibold">
                {skill.percent}%
              </span>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className={`${skill.color} h-3 rounded`}
                custom={skill.percent}
                variants={barVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
));

export default About;
