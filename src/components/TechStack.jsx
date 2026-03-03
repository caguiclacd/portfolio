import './TechStack.css';

const TechStack = () => {
  const categories = [
    {
      name: 'Programming & Scripting',
      items: ['Python', 'JavaScript', 'SQL', 'HTML/CSS']
    },
    {
      name: 'Web & Backend',
      items: ['React', 'Vite', 'MongoDB', 'Vercel']
    },
    {
      name: 'Security & Forensics',
      items: ['Autopsy', 'Incident Response', 'Malware Analysis', 'Network Forensics']
    },
    {
      name: 'Developer Tools',
      items: ['Git', 'GitHub', 'VS Code', 'CI/CD']
    }
  ];

  return (
    <section id="stack" className="section section--alt">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">Technical Stack</h2>
          <p className="section-subtitle">Tools and technologies used across development and forensic work</p>
        </header>

        <div className="techstack-grid reveal-group">
          {categories.map((category, index) => (
            <div key={index} className="techstack-card">
              <div className="techstack-card__header">
                <svg
                  className="techstack-card__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="techstack-card__title">{category.name}</h3>
              </div>
              <div className="techstack-card__items">
                {category.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="techstack-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
