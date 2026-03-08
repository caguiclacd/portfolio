import './CoreCompetencies.css';

const CoreCompetencies = () => {
  const competencies = [
    {
      title: 'Web Development',
      items: [
        'React functional components and hooks',
        'Responsive design with CSS Grid and Flexbox',
        'State management and data flow patterns',
        'Progressive Web App (PWA) implementation',
        'Cross-browser compatibility and optimization'
      ]
    },
    {
      title: 'Backend & Systems',
      items: [
        'MongoDB schema design and aggregation queries',
        'REST API architecture and endpoint design',
        'Node.js server-side development',
        'Authentication and session management',
        'Database indexing and performance optimization'
      ]
    },
    {
      title: 'Development Practices',
      items: [
        'Git version control and collaborative workflows',
        'CI/CD pipeline automation with GitHub Actions',
        'Code testing and debugging methodologies',
        'API integration and third-party services',
        'Deployment with Vercel and cloud platforms'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-subtitle">Technical capabilities across frontend, backend, and development workflows</p>
        </header>

        <div className="competencies-grid reveal-group">
          {competencies.map((category, index) => (
            <div key={index} className="competency-card">
              <h3 className="competency-card__title">{category.title}</h3>
              <ul className="competency-card__list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="competency-card__item">
                    <span className="competency-card__bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
