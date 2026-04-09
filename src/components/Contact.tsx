import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'Joerozvicariato60@gmail.com',
      icon: 'Email',
      link: 'mailto:Joerozvicariato60@gmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/joeroz-vicariato',
      icon: 'LinkedIn',
      link: 'https://linkedin.com/in/joeroz-vicariato'
    },
    {
      title: 'GitHub',
      value: 'github.com/joerozviocariato',
      icon: 'GitHub',
      link: 'https://github.com/joerozviocariato'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm always interested in hearing about new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              {contactInfo.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="method-icon">
                    <span className="icon-placeholder">{method.icon[0]}</span>
                  </div>
                  <div className="method-content">
                    <h4 className="method-title">{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <h3 className="form-subtitle">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
