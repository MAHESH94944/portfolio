import React, { memo } from "react";
import { FaJs, FaReact, FaJava, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiMicrodotblog,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { MdOutlineApi } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa6";
import { TbCloudUpload } from "react-icons/tb";

const categories = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" size={36} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-400" size={36} />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-orange-400" size={36} />,
      },
      { name: "C", icon: <DiSqllite className="text-gray-400" size={36} /> },
      { name: "SQL", icon: <DiSqllite className="text-blue-300" size={36} /> },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-500" size={36} />,
      },
      {
        name: "CSS3",
        icon: <SiCss3 className="text-blue-500" size={36} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" size={36} />,
      },
      {
        name: "React.js",
        icon: <FaReact className="text-blue-400" size={36} />,
      },
    ],
  },
  {
    title: "Backend & Others",
    skills: [
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300" size={36} />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" size={36} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" size={36} />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-300" size={36} />,
      },
      {
        name: "Git & GitHub",
        icon: <FaGitAlt className="text-orange-500" size={36} />,
      },
      {
        name: "Full Stack Development",
        icon: <MdOutlineApi className="text-blue-500" size={36} />,
      },
      {
        name: "Backend Development",
        icon: <MdOutlineApi className="text-green-500" size={36} />,
      },
      {
        name: "Frontend Development",
        icon: <MdOutlineApi className="text-purple-400" size={36} />,
      },
      {
        name: "Data Structures & Algorithms",
        icon: <GiBrain className="text-purple-400" size={36} />,
      },
      {
        name: "Problem Solving",
        icon: <GiBrain className="text-blue-400" size={36} />,
      },
      {
        name: "Networking",
        icon: <MdOutlineApi className="text-gray-400" size={36} />,
      },
      {
        name: "GenAI",
        icon: <FaRobot className="text-pink-400" size={36} />,
      },
      {
        name: "Deployment",
        icon: <TbCloudUpload className="text-green-400" size={36} />,
      },
      {
        name: "Microservices",
        icon: <SiMicrodotblog className="text-yellow-500" size={36} />,
      },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = memo(() => (
  <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-blue-200 mb-10 text-center">
      Skills
    </h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {categories.map((cat) => (
        <div key={cat.title}>
          <h3 className="text-xl font-semibold text-blue-100 mb-6 text-center">
            {cat.title}
          </h3>
          <div className="flex flex-col items-center gap-6">
            {cat.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_24px_0_rgba(59,130,246,0.4)]"
                variants={item}
              >
                {skill.icon}
                <span className="mt-3 text-blue-100 font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  </section>
));

export default Skills;
