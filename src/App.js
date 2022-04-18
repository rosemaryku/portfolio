import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
