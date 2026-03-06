import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiVercel,
  SiRender
} from "react-icons/si";

const Skills = () => {

  const skillCategories = [
    {
      title: "Programming",
      color: "text-[#FF4D4D]",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend",
      color: "text-[#22D3EE]",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend",
      color: "text-[#A78BFA]",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
      ],
    },
    {
      title: "Database",
      color: "text-[#34D399]",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools",
      color: "text-[#FB923C]",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black flex items-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >

      {/* Background UI */}
      <div className="absolute top-10 right-10 sm:right-20 w-16 sm:w-28 h-16 sm:h-28 border border-[#22D3EE] rounded-full opacity-25"></div>
      <div className="absolute bottom-10 left-10 sm:left-20 w-10 sm:w-16 h-10 sm:h-16 border border-[#FF4D4D] rounded-full opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center text-white"
        >
          Technical <span className="text-[#22D3EE]">Skills</span>
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#111111] p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-[#1f1f1f] hover:border-[#22D3EE] transition"
            >

              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${category.color}`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <motion.div
                    key={i}

                    initial={{ y: -200, opacity: 0, rotate: -90 }}

                    whileInView={{ y: 0, opacity: 1, rotate: 0 }}

                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 12,
                      delay: i * 0.15
                    }}

                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 12px rgba(34,211,238,0.7)"
                    }}

                    className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] text-gray-300 text-sm rounded-lg border border-[#222]"
                  >

                    <span className="text-lg">{skill.icon}</span>

                    {skill.name}

                  </motion.div>

                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;