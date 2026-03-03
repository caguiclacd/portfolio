import './Hero.css';
import profilePic from '../assets/caguiclacd_profilepic.jpg';
import resumePdf from '../assets/caguiclacd_resume.pdf';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__grid"></div>
        <div className="hero__grid hero__grid--offset"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Christian Caguicla
            </h1>
            <p className="hero__subtitle">
              Computer Science Student | Digital Forensics
            </p>
            <p className="hero__summary">
              Focused on building secure systems, developing intelligent tools for digital investigation,
              and contributing to robust IT environments. Seeking opportunities to apply technical
              expertise in security-focused roles and IT internship positions.
            </p>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                View Projects
              </a>
              <a href={resumePdf} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__profile">
              <img src={profilePic} alt="Christian Caguicla" className="hero__image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
