import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center px-10 overflow-hidden">

      {/* Decorative Rings */}
      <div className="absolute left-10 top-40 w-24 h-24 border border-purple-500 rounded-full opacity-30"></div>
      <div className="absolute right-20 bottom-40 w-10 h-10 border-2 border-[#22D3EE] rounded-full opacity-40"></div>
      <div className="absolute top-20 right-1/3 w-3 h-3 bg-[#FF4D4D] rounded-full opacity-60"></div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-8 text-white">
          About <span className="text-[#22D3EE]">Me</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Final-year Computer Science Engineering student proficient in 
          <span className="text-white font-semibold"> Core Java</span>, 
          <span className="text-white font-semibold"> Data Structures & Algorithms (500+ problems solved)</span>, 
          and backend development using 
          <span className="text-white font-semibold"> Spring Boot, Node.js, Express.js, REST APIs & JWT Authentication</span>. 
          Passionate about architecting scalable and production-ready systems.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 text-gray-400">

          <div>
            <h3 className="text-white font-semibold mb-2">Frontend</h3>
            <p>ReactJS • Tailwind CSS • HTML5 • CSS3</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Backend</h3>
            <p>Spring Boot • Node.js • Express.js • REST APIs • JWT</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Database</h3>
            <p>MySQL • MongoDB Atlas • JDBC</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Core Concepts</h3>
            <p>DSA • OOPS • DBMS • Operating Systems</p>
          </div>

        </div>

        {/* Links */}
        <div className="mt-10 flex gap-8">

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

        </div>

      </motion.div>

    </section>
  );
};

export default About;