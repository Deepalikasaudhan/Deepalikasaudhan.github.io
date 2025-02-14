import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience"
import Skill from "./components/Skill";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import "./components/Navbar.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Skill/>
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
