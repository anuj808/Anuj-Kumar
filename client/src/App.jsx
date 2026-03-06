import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import DSA from "./components/DSA";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden">

      {/* Global UI Effects */}
      <CursorGlow />
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col w-full scroll-smooth">

        {/* Sections */}
        <section className="w-full">
          <Hero />
        </section>

        <section className="w-full">
          <About />
        </section>

        <section className="w-full">
          <Projects />
        </section>

        <section className="w-full">
          <Skills />
        </section>

        <section className="w-full">
          <DSA />
        </section>

        <section className="w-full">
          <Contact />
        </section>

      </main>

    </div>
  );
}

export default App;