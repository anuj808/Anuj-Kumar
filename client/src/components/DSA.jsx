import { motion } from "framer-motion";

const DSA = () => {
  const stats = [
    {
      title: "LeetCode Problems",
      value: "300+",
      desc: "Solved across Easy, Medium & Hard",
      color: "text-[#FACC15]",
      link: "https://leetcode.com/u/anuj_307/",
    },
    {
      title: "GFG Problems",
      value: "358",
      desc: "GeeksforGeeks Problem Solving",
      color: "text-[#34D399]",
      link: "https://www.geeksforgeeks.org/profile/anuj307",
    },
    {
      title: "Coding Score",
      value: "1149",
      desc: "GeeksforGeeks Coding Score",
      color: "text-[#22D3EE]",
      link: "https://www.geeksforgeeks.org/profile/anuj307",
    },
    {
      title: "Institute Rank",
      value: "233",
      desc: "Among Galgotias University",
      color: "text-[#FF4D4D]",
      link: "https://www.geeksforgeeks.org/profile/anuj307",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black flex items-center px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-20 right-20 w-[250px] h-[250px] bg-[#22D3EE] opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center text-white"
        >
          Problem <span className="text-[#22D3EE]">Solving</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#1f1f1f] hover:border-[#22D3EE] transition text-center"
            >

              <h3 className="text-gray-400 text-sm mb-2">
                {stat.title}
              </h3>

              <p className={`text-4xl font-bold mb-3 ${stat.color}`}>
                {stat.value}
              </p>

              <p className="text-gray-500 text-sm mb-5">
                {stat.desc}
              </p>

              <a
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22D3EE] text-sm underline hover:text-white transition"
              >
                View Profile →
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DSA;