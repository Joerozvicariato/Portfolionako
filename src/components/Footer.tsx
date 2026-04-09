const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/joerozviocariato' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/joeroz-vicariato' },
    { name: 'Email', url: 'mailto:Joerozvicariato60@gmail.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">Joross</h3>
            <p className="footer-tagline">
              IT Student | Web Developer | Gamer Tech Specialist
            </p>
            <p className="footer-description">
              Building innovative web solutions with passion and expertise.
            </p>
          </div>

          <div className="footer-center">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
                Home
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                About
              </button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Projects
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact
              </button>
            </nav>
          </div>

          <div className="footer-right">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <span className="social-icon">{link.name[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Joross. All rights reserved.
            </p>
            <button onClick={scrollToTop} className="back-to-top">
              <span className="arrow">^</span>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
