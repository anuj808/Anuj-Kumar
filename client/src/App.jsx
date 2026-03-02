import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="scroll-smooth">

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />

      </main>

    </div>
  );
}

export default App;