import hospitalVideo from "/Hospital.mp4";
import quizVideo from "/Quiz.mp4";
import bmwVideo from "/BMW.mp4";
import CommerceVideo from "/E-Commerce.mp4";
import rapdlyVideo from "/rapdly.mp4"; 


const Projects = () => {

  const projects = [
    {
      title: "Pakhi City Hospital",
      video: hospitalVideo,
      live: "https://pakhi-city-hospital.vercel.app/",
      github: "https://github.com/anuj808/Pakhi-City-Hospital",
    },
    {
      title: "Quiz Game",
      video: quizVideo,
      live: "https://quiz-app-two-snowy.vercel.app/",
      github: "https://github.com/anuj808/QuizApp",
    },
    {
      title: "BMW Showcase",
      video: bmwVideo,
      live: "https://bmw-showcase.vercel.app/",
      github: "https://github.com/anuj808",
    },
    {
      title: "E-Commerce Store",
      video: CommerceVideo,
      live: "https://shoppoing-six.vercel.app/",
      github: "https://github.com/anuj808/",
    },
    {
      title: "10 min delivery app",
      video: rapdlyVideo,
      live: "https://rapidly-p91l.vercel.app/",
      github: "https://github.com/anuj808/",
    },
  ];

  return (
    <section className="projects-section">

      <h2 className="projects-title">
        Featured <span>Projects</span>
      </h2>

      <div className="creationsBlocUl">
        {projects.map((project, index) => (
          <figure key={index} className="creaBlock creaBlockPrez">

            <div className="lineSeparator"></div>

            <div className="blocImg">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <figcaption>{project.title}</figcaption>

            {/* Links */}
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live →
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub →
              </a>
            </div>

          </figure>
        ))}
      </div>

    </section>
  );
};

export default Projects;