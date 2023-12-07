import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";

import Contact from "./Component/Contact";

// import './Apps.css'
function App() {
  return(
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App;