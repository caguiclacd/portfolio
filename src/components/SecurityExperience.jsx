import './SecurityExperience.css';

const SecurityExperience = () => {
  const experiences = [
    {
      title: 'Full Stack Web Development',
      icon: 'mobile',
      description: 'End-to-end development of modern web applications with focus on performance, scalability, and user experience.',
      capabilities: [
        'Building responsive React applications with component-based architecture',
        'Designing and implementing REST APIs with proper error handling',
        'Database schema design and query optimization for MongoDB',
        'State management and data flow patterns for complex applications'
      ]
    },
    {
      title: 'Development Workflow & Deployment',
      icon: 'file',
      description: 'Implementing professional development practices with automated testing, version control, and continuous deployment.',
      capabilities: [
        'Git-based collaborative workflows with branching strategies',
        'CI/CD pipeline configuration using GitHub Actions',
        'Automated deployment to Vercel with environment management',
        'Code testing, debugging, and performance optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">Development Experience</h2>
          <p className="section-subtitle">Practical application of software engineering principles and modern development practices</p>
        </header>

        <div className="security-exp-list">
          {experiences.map((exp, index) => (
            <article key={index} className="security-exp-card reveal">
              <div className="security-exp-card__header">
                <div className="security-exp-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {exp.icon === 'mobile' ? (
                      <>
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </>
                    ) : (
                      <>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </>
                    )}
                  </svg>
                </div>
                <div>
                  <h3 className="security-exp-card__title">{exp.title}</h3>
                  <p className="security-exp-card__description">{exp.description}</p>
                </div>
              </div>

              <ul className="security-exp-card__capabilities">
                {exp.capabilities.map((capability, capIndex) => (
                  <li key={capIndex} className="security-exp-card__capability">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityExperience;
