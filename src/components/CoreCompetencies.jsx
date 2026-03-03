import './CoreCompetencies.css';

const CoreCompetencies = () => {
  const competencies = [
    {
      title: 'Security & Forensics',
      items: [
        'Autopsy plugin development and integration',
        'Malware artifact extraction and analysis',
        'File system timeline reconstruction',
        'Android ADB acquisition techniques',
        'Log trace investigation methodologies'
      ]
    },
    {
      title: 'Software Development',
      items: [
        'React component architecture',
        'Vite build tooling and configuration',
        'MongoDB schema design and queries',
        'REST API architecture patterns',
        'CI/CD pipeline automation'
      ]
    },
    {
      title: 'IT & Systems',
      items: [
        'Operating systems internals',
        'Network fundamentals and protocols',
        'Process and memory analysis',
        'System administration concepts',
        'Incident response procedures'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-subtitle">Technical capabilities across security, development, and systems administration</p>
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
