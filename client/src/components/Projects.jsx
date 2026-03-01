import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Pakhi City Hospital",
      description:
        "Production-ready Hospital Management System with real-time booking, token management and secure Razorpay payment integration using HMAC verification.",
      tech: "React.js • Node.js • Express • MongoDB • Razorpay • Tailwind",
      live: "https://pakhi-city-hospital.vercel.app/",
      github: "https://github.com/anuj808/Pakhi-City-Hospital",
    },
    {
      title: "Quiz Game (React)",
      description:
        "Interactive quiz platform with dynamic question rendering using React Hooks, client-side routing and fully responsive UI.",
      tech: "React • Tailwind • Vite • React Router",
      live: "https://quiz-app-two-snowy.vercel.app/",
      github: "https://github.com/anuj808/QuizApp",
    },
    {
      title: "Java Quiz Application",
      description:
        "Multi-domain quiz application built using Core Java and OOP principles with MySQL integration via JDBC and real-time scoring logic.",
      tech: "Core Java • JDBC • MySQL • OOPS",
      live: null,
      github: "https://github.com/anuj808/Quiz-Game-",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black flex items-center px-10 overflow-hidden">

      {/* Background UI */}
      <div className="absolute top-32 right-1/4 w-40 h-40 border border-[#22D3EE] rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 border-2 border-[#FF4D4D] rounded-full opacity-30"></div>
      <div className="absolute top-1/3 left-20 w-3 h-3 bg-[#22D3EE] rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#FF4D4D] opacity-10 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-white"
        >
          Featured <span className="text-[#FF4D4D]">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#1f1f1f] hover:border-[#FF4D4D] transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <p className="text-gray-500 text-xs mb-6">
                  {project.tech}
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22D3EE] text-sm underline hover:text-white transition"
                  >
                    Live →
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4D4D] text-sm underline hover:text-white transition"
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}

        </div>

        {/* More Projects Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/anuj808/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#FF4D4D] text-[#FF4D4D] rounded-lg hover:bg-[#FF4D4D] hover:text-white transition"
          >
            View More Projects →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;