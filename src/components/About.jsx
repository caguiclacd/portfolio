import './About.css';

const About = () => {
  const infoCards = [
    {
      icon: 'location',
      label: 'Location',
      value: 'Metro Manila, Philippines'
    },
    {
      icon: 'education',
      label: 'Degree',
      value: 'BS Computer Science, Expected 2026'
    },
    {
      icon: 'honor',
      label: 'Distinction',
      value: "Dean's Lister"
    },
    {
      icon: 'focus',
      label: 'Focus Areas',
      value: 'Digital Forensics & Security'
    }
  ];

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Academic background and professional interests</p>
        </header>

        <div className="about__content">
          <div className="about__narrative reveal">
            <p>
              I am a Computer Science student specializing in Digital Forensics, with a strong foundation
              in secure systems analysis and investigative methodologies. My academic journey has been
              defined by a focus on understanding how digital artifacts are created, preserved, and
              analyzed within various computing environments.
            </p>
            <p>
              My interest in security emerged from recognizing the critical importance of forensic readiness
              in modern IT infrastructure. I have pursued coursework and independent study in areas ranging
              from file system analysis to network artifact recovery, developing both technical proficiency
              and analytical discipline required for thorough investigations.
            </p>
            <p>
              Beyond technical knowledge, I cultivate the systematic thinking and attention to detail that
              forensic work demands. Whether analyzing malware behavior patterns or reconstructing timeline
              events from system logs, I prioritize methodical approaches that produce reproducible results.
            </p>
            <p>
              I am seeking internship opportunities where I can contribute to IT operations while continuing
              to develop my expertise in security tools, incident response procedures, and forensic analysis
              techniques within professional environments.
            </p>
          </div>

          <div className="about__info reveal">
            {infoCards.map((card, index) => (
              <div key={index} className="info-card">
                <div className="info-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {card.icon === 'location' && (
                      <>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </>
                    )}
                    {card.icon === 'education' && (
                      <>
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </>
                    )}
                    {card.icon === 'honor' && (
                      <>
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </>
                    )}
                    {card.icon === 'focus' && (
                      <>
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </>
                    )}
                  </svg>
                </div>
                <div className="info-card__content">
                  <span className="info-card__label">{card.label}</span>
                  <span className="info-card__value">{card.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
