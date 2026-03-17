import { motion } from "framer-motion";
import profile from "../assets/profile.png";

import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const floating = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden bg-black pt-28">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#FF4D4D] opacity-20 blur-[120px] sm:blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-[#22D3EE] opacity-20 blur-[120px] sm:blur-[150px] rounded-full"></div>


      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center w-full">


        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          <div className="mb-6 inline-block px-4 py-1 text-xs sm:text-sm border border-[#22D3EE] text-[#22D3EE] rounded-full">
            Available for Opportunities
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-[#FF4D4D]">Anuj Kumar</span>
          </h1>

          <div className="mt-6 text-lg sm:text-xl text-gray-300 font-semibold">
            <TypeAnimation
              sequence={[
                "Java Backend Developer",
                2000,
                "Full Stack Developer",
                2000,
                "DSA Problem Solver (500+)",
                2000,
                "React & Node.js Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-white"
            />
          </div>

          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Final-year Computer Science student specializing in Java, DSA and
            building scalable full-stack applications using React, Node.js and Spring Boot.
          </p>

          <div className="mt-8 flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-start">

            <a
              href="mailto:anuj766894@gmail.com"
              className="px-5 sm:px-6 py-3 bg-[#FF4D4D] rounded-lg hover:scale-105 transition text-sm sm:text-base"
            >
              Hire Me →
            </a>

            <a
              href="/cv.pdf"
              className="px-5 sm:px-6 py-3 border border-[#22D3EE] text-[#22D3EE] rounded-lg hover:bg-[#22D3EE] hover:text-black transition text-sm sm:text-base"
              download
            >
              Download CV
            </a>

          </div>

        </motion.div>



        {/* RIGHT IMAGE + FLOATING ICONS */}
        <div className="relative flex justify-center items-center">

          <motion.div variants={floating} animate="animate" className="absolute top-10 left-10 text-[#61DBFB] text-4xl opacity-80"><FaReact /></motion.div>
          <motion.div variants={floating} animate="animate" className="absolute top-20 right-10 text-[#3C873A] text-4xl opacity-80"><FaNodeJs /></motion.div>
          <motion.div variants={floating} animate="animate" className="absolute bottom-20 left-10 text-[#4DB33D] text-4xl opacity-80"><SiMongodb /></motion.div>
          <motion.div variants={floating} animate="animate" className="absolute bottom-16 right-16 text-[#38BDF8] text-4xl opacity-80"><SiTailwindcss /></motion.div>
          <motion.div variants={floating} animate="animate" className="absolute top-1/3 left-0 text-[#f89820] text-4xl opacity-80"><FaJava /></motion.div>
          <motion.div variants={floating} animate="animate" className="absolute top-1/2 right-0 text-[#F7DF1E] text-4xl opacity-80"><FaJs /></motion.div>
          <motion.div variants={floating} animate="animate" className="absolute bottom-0 left-1/3 text-[#4479A1] text-4xl opacity-80"><SiMysql /></motion.div>
          <motion.div variants={floating} animate="animate" className="absolute bottom-10 right-1/3 text-[#F1502F] text-4xl opacity-80"><FaGitAlt /></motion.div>

          {/* PROFILE IMAGE (CLEAN ROUND) */}
          <motion.img
            src={profile}
            alt="Anuj Kumar"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[250px] sm:w-[320px] md:w-[380px] aspect-square object-cover rounded-full mx-auto relative z-10"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;