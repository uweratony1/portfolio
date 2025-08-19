import "@/styles/components/projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and user authentication.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather application with beautiful visualizations and forecasts.",
      image: "https://images.unsplash.com/photo-1534081333815-ae501910dd9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React", "Chart.js", "API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system for bloggers with rich text editing capabilities.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f726?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A mobile-first application for tracking workouts and nutrition goals.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React Native", "Redux", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent works that showcase my skills and creativity
        </p>
        <div className="project-grid grid-3">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;