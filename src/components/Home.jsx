import { FaLinkedin, FaGithub } from "react-icons/fa";
import homeImage from "../assets/photo.png";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Side - Text */}
        <div className="home-text">
          <h1>Hello,<br />I'm Deepali Kasaudhan</h1>
          <h3 className="profession">Full Stack Web Developer</h3>
          <h2>Welcome to My Portfolio</h2>
         

          {/* Buttons */}
          <div className="home-buttons">
            <a href="#projects" className="primary-btn">Explore My Work</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/deepali-kasaudhan-86786327a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Deepalikasaudhan" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="home-image">
          <div className="image-container">
            <img src={homeImage} alt="Home Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
