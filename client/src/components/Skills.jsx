import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "JavaScript"],
      color: "text-[#FF4D4D]",
    },
    {
      title: "Frontend",
      skills: ["ReactJS", "Tailwind CSS", "HTML5", "CSS3"],
      color: "text-[#22D3EE]",
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT"],
      color: "text-[#A78BFA]",
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB Atlas", "JDBC"],
      color: "text-[#34D399]",
    },
    {
      title: "Core Concepts",
      skills: ["DSA (500+ Problems)", "OOPS", "DBMS", "Operating Systems"],
      color: "text-[#FACC15]",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Render"],
      color: "text-[#FB923C]",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black flex items-center px-10 overflow-hidden">

      {/* Background UI */}
      <div className="absolute top-10 right-20 w-28 h-28 border border-[#22D3EE] rounded-full opacity-25"></div>
      <div className="absolute bottom-10 left-20 w-16 h-16 border border-[#FF4D4D] rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-[#22D3EE] rounded-full opacity-60"></div>
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyan-500 opacity-10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-white"
        >
          Technical <span className="text-[#22D3EE]">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#1f1f1f] hover:border-[#22D3EE] transition"
            >
              <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-[#1a1a1a] text-gray-300 text-sm rounded-lg border border-[#222]"
                  >
                    {skill}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;