import React from "react";
import aboutImage from "../assets/about.png"; // Add your image path
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-container">
        
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h1>About Me</h1>
          
          <p>Hello! I’m Deepali Kasaudhan, a passionate Full Stack Web Developer, currently pursuing a Full Stack Web Development course at Masai School. My coding journey began with my first "Hello World", igniting a deep fascination for building aesthetically functional websites.<br />I am always eager to learn new technologies, enhance my skills, and contribute effectively to a dynamic team.<br />Currently, I am working in the IT sector at Rio International, where I apply my expertise in web development and digital <br />I am excited to join a growth-driven company where I can leverage my skills, learn continuously, and contribute to impactful projects.  <br />Dop a mail...<br/><a style={{textDecoration:"none", color:"#c1d2d3", fontStyle:"normal"}} href="mailto:kasaudhandeepali7@gmail.com">kasaudhandeepali7@gmail.com</a></p><a href="/Resume - Deepali Kasaudhan.pdf" className="resume-btn" target="_blank">
  View Resume
</a>

        </div>
      </div>

     

    </section>
  );
};

export default About;
