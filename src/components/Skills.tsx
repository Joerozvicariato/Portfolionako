const Skills = () => {
  const skillCategories = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    'Backend': ['Node.js'],
    'Tools': ['Git & GitHub', 'PC Troubleshooting']
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-content">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div key={skill} className="skill-card">
                    <div className="skill-icon">
                      <div className="icon-placeholder"></div>
                    </div>
                    <h4 className="skill-name">{skill}</h4>
                    <div className="skill-level">
                      <div className="level-bar">
                        <div className="level-fill"></div>
                      </div>
                      <span className="level-text">Proficient</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-summary">
          <p className="summary-text">
            Continuously learning and expanding my skill set to stay current
            with the latest web technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
