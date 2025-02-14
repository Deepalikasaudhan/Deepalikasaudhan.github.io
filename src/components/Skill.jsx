import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFileExcel, FaFileWord, FaFilePowerpoint } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCanva } from "react-icons/si";
import "./Skill.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
  { name: "React", icon: <FaReact className="skill-icon react" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
  { name: "Express.js", icon: <SiExpress className="skill-icon express" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon mongo" /> },
  { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
  { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
  { name: "Microsoft Word", icon: <FaFileWord className="skill-icon word" /> },
  { name: "Excel", icon: <FaFileExcel className="skill-icon excel" /> },
  { name: "PowerPoint", icon: <FaFilePowerpoint className="skill-icon ppt" /> },
  { name: "Canva", icon: <SiCanva className="skill-icon canva" /> },
];

const Skill = () => {
  return (
    <section id="skill" className="section">
      <h1>My Skills</h1>
      <p>Here are some of the technologies and tools I work with:</p>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
