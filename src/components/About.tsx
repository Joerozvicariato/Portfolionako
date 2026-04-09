const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              As an IT student with a passion for web development and technology,
              I'm dedicated to creating innovative solutions that bridge the gap
              between functionality and user experience.
            </p>
            <p className="about-detail">
              My journey in tech began with a curiosity about how things work
              behind the scenes. This curiosity evolved into a deep interest in
              web development, where I found my calling in building responsive,
              user-friendly applications that solve real-world problems.
            </p>
            <p className="about-focus">
              I specialize in front-end development using React and TypeScript,
              with a strong foundation in system optimization and PC troubleshooting.
              My gaming background has taught me the importance of performance
              optimization and attention to detail.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">Student</span>
                <span>Currently pursuing IT degree</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">Developer</span>
                <span>Web development enthusiast</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">Tech Specialist</span>
                <span>Gaming & PC optimization</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <div className="card-pattern"></div>
              <div className="card-content">
                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years Learning</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
