import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black flex items-center px-5 sm:px-8 md:px-16 lg:px-24 py-20 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute left-5 sm:left-10 top-32 w-16 sm:w-24 h-16 sm:h-24 border border-purple-500 rounded-full opacity-30"></div>

      <div className="absolute right-10 sm:right-20 bottom-32 w-8 sm:w-10 h-8 sm:h-10 border-2 border-[#22D3EE] rounded-full opacity-40"></div>

      <div className="absolute top-20 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-[#FF4D4D] rounded-full opacity-60"></div>

      <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-center md:text-left"
        >
          About <span className="text-[#22D3EE]">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-center md:text-left max-w-3xl"
        >
          I'm a final-year Computer Science Engineering student passionate about
          building scalable applications and solving complex problems using
          modern technologies. I enjoy working with backend systems, designing
          APIs, and developing full-stack web applications using Java, React,
          Node.js and Spring Boot.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12"
        >
          <div className="bg-[#111] p-4 rounded-lg border border-[#1f1f1f]">
            <p className="text-2xl sm:text-3xl font-bold text-[#FF4D4D]">
              500+
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              DSA Problems
            </p>
          </div>

          <div className="bg-[#111] p-4 rounded-lg border border-[#1f1f1f]">
            <p className="text-2xl sm:text-3xl font-bold text-[#22D3EE]">
              3+
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Major Projects
            </p>
          </div>

          <div className="bg-[#111] p-4 rounded-lg border border-[#1f1f1f]">
            <p className="text-2xl sm:text-3xl font-bold text-purple-400">
              1149
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              GFG Score
            </p>
          </div>
        </motion.div>

        {/* Education + Achievements */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Education */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl border border-[#222]"
          >
            <h3 className="text-white font-semibold mb-3 text-lg">
              Education
            </h3>

            <p className="text-gray-400 text-sm">
              B.Tech Computer Science Engineering
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Galgotias University
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Final Year (2022 – 2026)
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl border border-[#222]"
          >
            <h3 className="text-white font-semibold mb-3 text-lg">
              Achievements
            </h3>

            <p className="text-gray-400 text-sm">
              🏸 Two-time State Runner-up in Badminton
            </p>

            <p className="text-gray-400 text-sm mt-2">
              💻 Solved 500+ DSA problems on LeetCode & GFG
            </p>

            <p className="text-gray-400 text-sm mt-2">
              🚀 Built multiple full-stack projects deployed on cloud
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Skill Tags */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-10"
        >
          {["Java", "React", "Node.js", "MongoDB", "Spring Boot", "DSA"].map(
            (skill, index) => (
              <motion.span
                key={index}
                variants={floating}
                animate="animate"
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-[#22D3EE] rounded-full text-[#22D3EE]"
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>

        {/* Links */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-6"
        >
          <a
            href="https://www.linkedin.com/in/anuj-kumar-b02586257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#22D3EE] hover:text-white transition underline text-sm sm:text-base"
          >
            LinkedIn →
          </a>

          <a
            href="https://github.com/anuj808/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4D4D] hover:text-white transition underline text-sm sm:text-base"
          >
            GitHub →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;