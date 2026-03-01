import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-10 overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FF4D4D] opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#22D3EE] opacity-20 blur-[150px] rounded-full"></div>

      {/* Floating Circles */}
      <div className="absolute top-32 right-32 w-20 h-20 border-4 border-[#22D3EE] rounded-full opacity-40"></div>
      <div className="absolute top-40 right-20 w-5 h-5 bg-[#22D3EE] rounded-full opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="mb-6 inline-block px-4 py-1 text-sm border border-[#22D3EE] text-[#22D3EE] rounded-full">
            Available for Opportunities
          </div>

          <h1 className="text-6xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-[#FF4D4D]">Anuj Kumar</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Final-year Computer Science student specializing in 
            <span className="text-white font-semibold"> Java, DSA (500+ problems)</span>, 
            and building scalable full-stack applications using 
            <span className="text-white font-semibold"> React, Node.js & Spring Boot</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-6 flex-wrap">

            <a
              href="mailto:anuj766894@gmail.com"
              className="px-6 py-3 bg-[#FF4D4D] rounded-lg hover:scale-105 transition"
            >
              Hire Me →
            </a>

            <a
              href="/cv.pdf"
              className="px-6 py-3 border border-[#22D3EE] text-[#22D3EE] rounded-lg hover:bg-[#22D3EE] hover:text-black transition"
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
            className="h-[520px] object-cover rounded-xl bg-transparent"
          />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;