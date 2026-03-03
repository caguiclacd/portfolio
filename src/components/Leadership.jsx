import './Leadership.css';

const Leadership = () => {
  const involvements = [
    {
      organization: 'Computer Science Society',
      role: 'Member',
      period: '2023 - Present',
      activities: [
        'Created digital assets and promotional materials for department events',
        'Coordinated logistics for technical workshops and seminars',
        'Supported student engagement initiatives within the CS department'
      ]
    },
    {
      organization: 'PPCRV Volunteer',
      role: 'Poll Watcher',
      period: '2022',
      activities: [
        'Managed precinct logistics and voter assistance during national elections',
        'Documented electoral procedures and ensured compliance with regulations',
        'Contributed to transparent democratic process oversight'
      ]
    }
  ];

  return (
    <section className="section section--alt">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">Leadership & Community</h2>
          <p className="section-subtitle">Professional involvement and community service activities</p>
        </header>

        <div className="leadership-grid reveal-group">
          {involvements.map((item, index) => (
            <article key={index} className="leadership-card">
              <div className="leadership-card__header">
                <div>
                  <h3 className="leadership-card__organization">{item.organization}</h3>
                  <div className="leadership-card__meta">
                    <span className="leadership-card__role">{item.role}</span>
                    <span className="leadership-card__separator">•</span>
                    <span className="leadership-card__period">{item.period}</span>
                  </div>
                </div>
                <div className="leadership-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>

              <ul className="leadership-card__activities">
                {item.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="leadership-card__activity">
                    {activity}
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

export default Leadership;
