import './About.css';
import useCountUp from '../hooks/useCountUp';

const StatCounter = ({ end, suffix = '', label, duration = 2000 }) => {
  const { count, ref } = useCountUp(end, duration);

  return (
    <div className="stat-counter" ref={ref}>
      <span className="stat-counter__number">{count}{suffix}</span>
      <span className="stat-counter__label">{label}</span>
    </div>
  );
};

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
      value: 'Full Stack Development & Web Engineering'
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
              I am a Computer Science student specializing in Full Stack Development, with a strong foundation
              in modern web technologies and software engineering principles. My academic journey has been
              defined by a focus on building scalable applications and creating intuitive user experiences
              across the entire development stack.
            </p>
            <p>
              My interest in software development emerged from recognizing the power of technology to solve
              real-world problems. I have pursued coursework and independent study in areas ranging from
              frontend frameworks to backend architecture, developing both technical proficiency and
              the analytical discipline required for building production-quality applications.
            </p>
            <p>
              Beyond technical knowledge, I cultivate the problem-solving mindset and attention to detail that
              professional development demands. Whether designing responsive user interfaces or architecting
              efficient database schemas, I prioritize clean code and maintainable solutions that deliver
              lasting value.
            </p>
            <p>
              I am seeking internship opportunities where I can contribute to meaningful projects while continuing
              to develop my expertise in web frameworks, backend systems, and modern development practices
              within professional environments.
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

          <div className="about__stats reveal">
            <StatCounter end={3} suffix="+" label="Years Coding" />
            <StatCounter end={10} suffix="+" label="Projects Built" />
            <StatCounter end={5} suffix="" label="Frameworks Used" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
