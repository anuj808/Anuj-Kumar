import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black flex items-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background UI (Responsive Sizes) */}
      <div className="absolute top-16 sm:top-20 right-10 sm:right-32 w-24 sm:w-40 h-24 sm:h-40 border-2 border-[#FF4D4D] rounded-full opacity-25"></div>

      <div className="absolute bottom-24 sm:bottom-32 left-10 sm:left-32 w-16 sm:w-24 h-16 sm:h-24 border border-[#22D3EE] rounded-full opacity-25"></div>

      <div className="absolute bottom-16 right-1/4 w-2 sm:w-4 h-2 sm:h-4 bg-[#22D3EE] rounded-full opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-[#FF4D4D] opacity-15 blur-[120px] sm:blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 text-white"
        >
          Get In <span className="text-[#FF4D4D]">Touch</span>
        </motion.h2>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base sm:text-lg"
        >
          {/* Email */}
          <div>
            <p className="text-gray-400 mb-2">Email</p>
            <a
              href="mailto:anuj766894@gmail.com"
              className="text-white hover:text-[#22D3EE] transition break-all"
            >
              anuj766894@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400 mb-2">Phone</p>
            <a
              href="tel:+917668943946"
              className="text-white hover:text-[#22D3EE] transition"
            >
              +91 7668943946
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="text-gray-400 mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/anuj-kumar-b02586257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#22D3EE] transition break-all"
            >
              linkedin.com/in/anuj-kumar
            </a>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-gray-400 mb-2">GitHub</p>
            <a
              href="https://github.com/anuj808/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#22D3EE] transition break-all"
            >
              github.com/anuj808
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;