import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden bg-black pt-28"
    >
      {/* Background Glow (Responsive Sizes) */}
      <div className="absolute -top-32 -left-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#FF4D4D] opacity-20 blur-[120px] sm:blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-[#22D3EE] opacity-20 blur-[120px] sm:blur-[150px] rounded-full"></div>

      {/* Floating Circles (Smaller on Mobile) */}
      <div className="absolute top-28 right-10 sm:right-32 w-12 sm:w-20 h-12 sm:h-20 border-2 sm:border-4 border-[#22D3EE] rounded-full opacity-40"></div>
      <div className="absolute top-40 right-8 sm:right-20 w-3 sm:w-5 h-3 sm:h-5 bg-[#22D3EE] rounded-full opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Availability Badge */}
          <div className="mb-6 inline-block px-4 py-1 text-xs sm:text-sm border border-[#22D3EE] text-[#22D3EE] rounded-full">
            Available for Opportunities
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-[#FF4D4D]">Anuj Kumar</span>
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Final-year Computer Science student specializing in
            <span className="text-white font-semibold"> Java, DSA (500+ problems)</span>,
            and building scalable full-stack applications using
            <span className="text-white font-semibold"> React, Node.js & Spring Boot</span>.
          </p>

          {/* CTA Buttons */}
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

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Anuj Kumar"
            className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px] object-contain rounded-xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;