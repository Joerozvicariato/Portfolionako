const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Light Pollution Monitoring System',
      subtitle: 'Environmental Monitoring System',
      description: 'The Environmental Light Pollution Monitoring System (ELPMS) is designed to monitor and show light pollution around a school campus. It focuses on checking how bright different areas are at night, especially near academic buildings and nearby dormitories.',
      techStack: ['HTML', 'JavaScript', 'CSS', 'Electron', 'OpenStreetMap'],
      features: ['Real-time Monitoring', 'Interactive Maps', 'User Roles (Admin/Manager/User)', 'Responsive Design', 'Campus Area Tracking'],
      codeUrl: 'https://joerozvicariato.github.io/light/',
      demoUrl: 'https://joerozvicariato.github.io/light/'
    },
    {
      id: 2,
      title: 'Wedding Website',
      subtitle: 'Event Planning Website',
      description: 'A beautiful wedding website designed for event planning and guest management. Features elegant design with interactive elements and responsive layout for mobile and desktop devices.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      features: ['Event Details', 'RSVP System', 'Photo Gallery', 'Timeline', 'Guest Management'],
      codeUrl: 'https://github.com/joerozviocariato/wedding',
      demoUrl: 'https://joerozviocariato.github.io/wedding/'
    },
    {
      id: 3,
      title: 'CSS Art Gallery',
      subtitle: 'Creative Portfolio Website',
      description: 'An artistic CSS gallery showcasing creative web design techniques and animations. Demonstrates advanced CSS skills with interactive elements and modern design patterns.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Animations', 'Grid Layout'],
      features: ['CSS Animations', 'Interactive Gallery', 'Modern Design', 'Responsive Layout', 'Visual Effects'],
      codeUrl: 'https://github.com/css-art-gallery/WEB',
      demoUrl: 'https://css-art-gallery.github.io/WEB/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <div className="projects-title-section">
         
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-number">0{project.id}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <h4 className="tech-title">Tech Stack</h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature) => (
                      <li key={feature} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <a 
                  href={project.codeUrl} 
                  className="project-btn code-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-icon">&lt;/&gt;</span>
                  View Code
                </a>
                <a 
                  href={project.demoUrl} 
                  className="project-btn demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-icon">Launch</span>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
