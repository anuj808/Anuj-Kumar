import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center px-10 overflow-hidden">

      {/* Background UI */}
      <div className="absolute top-20 right-32 w-40 h-40 border-2 border-[#FF4D4D] rounded-full opacity-25"></div>
      <div className="absolute bottom-32 left-32 w-24 h-24 border border-[#22D3EE] rounded-full opacity-25"></div>
      <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-[#22D3EE] rounded-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF4D4D] opacity-15 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-white"
        >
          Get In <span className="text-[#FF4D4D]">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-lg"
        >

          {/* Email */}
          <div>
            <p className="text-gray-400">Email</p>
            <a
              href="mailto:anuj766894@gmail.com"
              className="text-white hover:text-[#22D3EE] transition"
            >
              anuj766894@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400">Phone</p>
            <a
              href="tel:+917668943946"
              className="text-white hover:text-[#22D3EE] transition"
            >
              +91 7668943946
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="text-gray-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/anuj-kumar-b02586257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#22D3EE] transition"
            >
              linkedin.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-gray-400">GitHub</p>
            <a
              href="https://github.com/anuj808/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#22D3EE] transition"
            >
              github.com
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;