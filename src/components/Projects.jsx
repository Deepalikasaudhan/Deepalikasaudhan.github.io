import './Project.css';
import NetImage from "../assets/Net.png";
import BewakoofImage from "../assets/Bewakoof.png";
import UrbanImage from "../assets/Urban.png";
import BuleflyImage from "../assets/Bulefly.png";


const projects = [
  {
    id: 1,
    title: "Netflix Website",
    description: "A sleek and modern Netflix-inspired website built using HTML and CSS with a unique design. It features an eye-catching homepage, a stylish movie/show grid, and a responsive layout for a smooth user experience. The project is designed to be fast, visually appealing, and completed within 1 day.",
    image: NetImage , // Ensure this path is correct in the public folder
    tech: ["HTML", "CSS"],
    liveLink: "https://zingy-salmiakki-1aa20f.netlify.app/",
    codeLink: "https://github.com/Deepalikasaudhan/My-Project/tree/main/Netflix/Website",
  },
  {
    id: 2,
    title: "Bewakoof Website",
    description: "A unique and stylish e-commerce website inspired by Bewakoof.com, built with HTML, CSS, and JavaScript. It features an attractive homepage, product listings, a cart & checkout system, user authentication, and a responsive design with smooth animations. The project aims to deliver a fast and engaging shopping experience within 7 days. ",
    image: BewakoofImage,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jolly-daffodil-acc4f2.netlify.app/",
    codeLink: "https://github.com/Deepalikasaudhan/Bewakoof-Project",
  },
  {
    id: 3,
    title: "Bulefly Website",
    description: "A modern and stylish e-commerce website inspired by Bewakoof.com, built using React, CSS, and JavaScript. It features a unique UI, product listings, cart & checkout, user authentication, and smooth animations. Designed for a fast, responsive, and engaging shopping experience, completed in 7 days.",
    image:  BuleflyImage,
    tech: ["React", "CSS", "JS"],
    liveLink: "https://spectacular-daffodil-28f5b8.netlify.app/",
    codeLink: "https://github.com/Deepalikasaudhan/Backend-Project",
  },

  {
    id: 4,
    title: "Urban Company Website",
    description: "A trendy and modern e-commerce website inspired by Urban-style designs, built using React, CSS, and JavaScript. It features a unique UI, stylish product listings, a cart & checkout system, user authentication, and smooth animations. The project focuses on a fast, responsive, and engaging shopping experience, completed in 7 days. ",
    image: UrbanImage,
    tech: ["React", "CSS", "JS"],
    liveLink: "https://beamish-bonbon-fff4e7.netlify.app/",
    codeLink: "https://github.com/Deepalikasaudhan/URBAN-PROJECT",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h1>My Projects</h1>
      <p>Explore some of my work below.</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.liveLink} className="btn" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <a href={project.codeLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
