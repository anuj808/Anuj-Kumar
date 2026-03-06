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
      className="relative min-h-screen bg-black flex items-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Decorative Rings */}
      <div className="absolute left-5 sm:left-10 top-32 sm:top-40 w-16 sm:w-24 h-16 sm:h-24 border border-purple-500 rounded-full opacity-30"></div>

      <div className="absolute right-10 sm:right-20 bottom-32 sm:bottom-40 w-8 sm:w-10 h-8 sm:h-10 border-2 border-[#22D3EE] rounded-full opacity-40"></div>

      <div className="absolute top-20 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-[#FF4D4D] rounded-full opacity-60"></div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-600 opacity-20 blur-[120px] sm:blur-[150px] rounded-full"></div>


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
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white text-center md:text-left"
        >
          About <span className="text-[#22D3EE]">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 text-center md:text-left"
        >
          Final-year Computer Science Engineering student proficient in
          <span className="text-white font-semibold"> Core Java</span>,
          <span className="text-white font-semibold">
            {" "}
            Data Structures & Algorithms (500+ problems solved)
          </span>
          , and backend development using
          <span className="text-white font-semibold">
            {" "}
            Spring Boot, Node.js, Express.js, REST APIs & JWT Authentication
          </span>
          . Passionate about architecting scalable and production-ready systems.
        </motion.p>


        {/* Animated Stats */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-6 text-center mb-10"
        >
          <div>
            <p className="text-3xl font-bold text-[#FF4D4D]">500+</p>
            <p className="text-gray-400 text-sm">DSA Problems</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#22D3EE]">3+</p>
            <p className="text-gray-400 text-sm">Major Projects</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-purple-400">1149</p>
            <p className="text-gray-400 text-sm">GFG Score</p>
          </div>
        </motion.div>


        {/* Skills Grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-gray-400"
        >

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl border border-[#222]"
          >
            <h3 className="text-white font-semibold mb-2">Frontend</h3>
            <p>ReactJS • Tailwind CSS • HTML5 • CSS3</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl border border-[#222]"
          >
            <h3 className="text-white font-semibold mb-2">Backend</h3>
            <p>Spring Boot • Node.js • Express.js • REST APIs • JWT</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl border border-[#222]"
          >
            <h3 className="text-white font-semibold mb-2">Database</h3>
            <p>MySQL • MongoDB Atlas • JDBC</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl border border-[#222]"
          >
            <h3 className="text-white font-semibold mb-2">Core Concepts</h3>
            <p>DSA • OOPS • DBMS • Operating Systems</p>
          </motion.div>

        </motion.div>


        {/* Floating Skill Tags */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-10"
        >

          {["Java", "React", "Node.js", "MongoDB", "Spring Boot", "DSA"].map(
            (skill, index) => (
              <motion.span
                key={index}
                variants={floating}
                animate="animate"
                className="px-4 py-2 text-sm border border-[#22D3EE] rounded-full text-[#22D3EE]"
              >
                {skill}
              </motion.span>
            )
          )}

        </motion.div>


        {/* Links */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-6 sm:gap-8"
        >

          <a
            href="https://www.linkedin.com/in/anuj-kumar-b02586257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#22D3EE] hover:text-white transition underline"
          >
            LinkedIn →
          </a>

          <a
            href="https://github.com/anuj808/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4D4D] hover:text-white transition underline"
          >
            GitHub →
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;