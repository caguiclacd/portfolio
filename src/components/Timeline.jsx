import './Timeline.css';

const Timeline = () => {
  const milestones = [
    {
      year: '2022',
      title: 'STEM Graduate with Honors',
      description: 'Completed senior high school STEM program with academic distinction',
      type: 'education'
    },
    {
      year: '2024',
      title: 'Alaya: Tour Planning App',
      description: 'Developed intelligent route optimization application with traffic-aware routing algorithms',
      type: 'project'
    },
    {
      year: '2025',
      title: 'Forensics Specialization',
      description: 'Advanced coursework in digital forensics, malware analysis, and incident response',
      type: 'education'
    },
    {
      year: '2025',
      title: 'Phishing URL Detection Plugin',
      description: 'Developed Autopsy plugin with ML-based phishing detection using feature extraction and Random Forest classification',
      type: 'thesis'
    },
    {
      year: '2026',
      title: 'BS Computer Science Expected Graduation',
      description: 'Anticipated completion of Bachelor of Science in Computer Science',
      type: 'education'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">Timeline</h2>
          <p className="section-subtitle">Academic and project progression milestones</p>
        </header>

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="timeline-item__marker">
                <span className="timeline-item__year">{milestone.year}</span>
              </div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">{milestone.title}</h3>
                <p className="timeline-item__description">{milestone.description}</p>
                <span className={`timeline-badge timeline-badge--${milestone.type}`}>
                  {milestone.type === 'education' ? 'Academic' : milestone.type === 'thesis' ? 'Thesis' : 'Project'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
