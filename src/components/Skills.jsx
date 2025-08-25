import "@/styles/components/skills.css";

const Skills = () => {
  const skills = [
    { name: "IOT", icon: "fab fa-html5", level: "Expert" },
    { name: "WAN", icon: "fab fa-css3-alt", level: "Expert" },
    { name: "WINDOW SERVER", icon: "fab fa-js", level: "Expert" },
    { name: "FIBER OPTIC", icon: "fab fa-react", level: "Advanced" },
    { name: "PHP WEB APPLICATION", icon: "fab fa-node-js", level: "Advanced" },
    { name: "COMPUTER SKILLS", icon: "fab fa-python", level: "Intermediate" },
    { name: "CCTV CAMERA", icon: "fas fa-database", level: "Advanced" },
    { name: "LAN", icon: "fab fa-git-alt", level: "Expert" },
    { name: "IDE", icon: "fab fa-aws", level: "Intermediate" }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies I work with
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
