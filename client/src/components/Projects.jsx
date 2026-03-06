import { motion } from "framer-motion";

import hospitalVideo from "../assets/Hospital.mp4";
import quizVideo from "../assets/Quiz.mp4";
import bmwVideo from "../assets/BMW.mp4";

const Projects = () => {

  const projects = [
    {
      title: "Pakhi City Hospital",
      description:
        "Production-ready Hospital Management System with real-time booking, token management and secure Razorpay payment integration.",
      tech: "React.js • Node.js • Express • MongoDB • Razorpay • Tailwind",
      live: "https://pakhi-city-hospital.vercel.app/",
      github: "https://github.com/anuj808/Pakhi-City-Hospital",
      video: hospitalVideo,
    },
    {
      title: "Quiz Game",
      description:
        "Interactive quiz platform with dynamic question rendering using React Hooks, client-side routing and responsive UI.",
      tech: "React • Tailwind • Vite • React Router",
      live: "https://quiz-app-two-snowy.vercel.app/",
      github: "https://github.com/anuj808/QuizApp",
      video: quizVideo,
    },
    {
      title: "BMW Showcase",
      description:
        "Modern BMW showcase website featuring smooth UI animations and responsive design.",
      tech: "React • Tailwind • Framer Motion",
      live: "https://bmw-showcase.vercel.app/",
      github: "https://github.com/anuj808",
      video: bmwVideo,
    },
  ];

  /* Animation Variants */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black flex items-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >

      {/* Background UI */}
      <div className="absolute top-20 right-10 sm:right-1/4 w-20 sm:w-40 h-20 sm:h-40 border border-[#22D3EE] rounded-full opacity-20"></div>

      <div className="absolute bottom-20 left-10 sm:left-1/3 w-10 sm:w-20 h-10 sm:h-20 border-2 border-[#FF4D4D] rounded-full opacity-30"></div>


      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center text-white"
        >
          Featured <span className="text-[#FF4D4D]">Projects</span>
        </motion.h2>


        {/* Projects Grid with Stagger Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-[#111111] rounded-xl border border-[#1f1f1f] hover:border-[#FF4D4D] transition flex flex-col overflow-hidden"
            >

              {/* Project Video */}
              <div className="overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>


              <div className="p-6 flex flex-col justify-between h-full">

                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <p className="text-gray-500 text-xs mb-6">
                  {project.tech}
                </p>

                <div className="flex gap-4 flex-wrap">

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

              </div>

            </motion.div>
          ))}

        </motion.div>


        {/* More Projects Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://github.com/anuj808/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 border border-[#FF4D4D] text-[#FF4D4D] rounded-lg hover:bg-[#FF4D4D] hover:text-white transition"
          >
            View More Projects →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;          