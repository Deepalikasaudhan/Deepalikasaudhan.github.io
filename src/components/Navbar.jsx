import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on selection
    setActiveSection(id);
  };

  const handleResumeClick = () => {
    const resumeUrl = "/Resume - Deepali Kasaudhan.pdf";
    window.open(resumeUrl, "_blank");

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume - Deepali Kasaudhan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav-center">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><button className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button className={activeSection === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>About</button></li>
            <li><button className={activeSection === "experience" ? "active" : ""} onClick={() => scrollToSection("experience")}>Experience</button></li>
            <li><button className={activeSection === "skill" ? "active" : ""} onClick={() => scrollToSection("skill")}>Skill</button></li>
            <li><button className={activeSection === "projects" ? "active" : ""} onClick={() => scrollToSection("projects")}>Projects</button></li>
            <li><button className={activeSection === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>Contact</button></li>
          </ul>
        </div>

        <div className="resume-button">
          <button onClick={handleResumeClick}>Resume</button>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
