import "@/styles/components/skills.css";

const Skills = () => {
  const skills = [
    "Network Design",
    "Cisco Routers & Switches",
    "Firewall Configuration",
    "VLAN & Subnetting",
    "Wireshark & Packet Analysis",
    "Network Automation",
    "Cybersecurity",
    "Cloud Networking",
    "Fiber Optic Cable",
    "Linux Networking",
    "DNS & DHCP",
    "CCTV Camera"
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
