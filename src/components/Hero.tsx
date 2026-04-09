const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Joross</span>
          </h1>
          <h2 className="hero-subtitle">
            IT Student | Web Developer | Gamer Tech Specialist
          </h2>
          <p className="hero-description">
            Passionate about creating innovative web solutions and optimizing systems.
            Combining technical expertise with creative problem-solving to build
            exceptional digital experiences.
          </p>
          <button className="hero-cta" onClick={scrollToProjects}>
            View My Projects
          </button>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img src="1.png" alt="Joross Profile" className="1.png" />
          </div>
          <div className="hero-card">
            <div className="card-content">
              <div className="code-symbol">&lt;/&gt;</div>
              <div className="tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
