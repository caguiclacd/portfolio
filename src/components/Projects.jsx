import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Phishing URL Detection Autopsy Plugin',
      summary: 'A forensic plugin for Autopsy that automatically identifies and classifies suspicious URLs within digital artifacts. The system extracts URL features and applies a trained machine learning model to detect potential phishing indicators.',
      tags: ['Python', 'Autopsy API', 'Scikit-learn', 'Optuna', 'Random Forest'],
      githubLink: 'https://github.com/caguiclacd',
      wipNotice: 'GitHub repo currently work in progress.',
      contributions: [
        'Implemented feature extraction logic for URL pattern analysis (length, entropy, subdomain counts)',
        'Tuned Random Forest classifier using Optuna hyperparameter optimization, achieving 92% accuracy'
      ]
    },
    {
      title: 'Alaya: Intelligent Tour Planning App',
      summary: 'A route optimization application that calculates efficient tour itineraries based on user preferences, destination priorities, and traffic considerations. The system employs algorithmic approaches to the traveling salesperson variant problem.',
      tags: ['Python', 'Algorithm Design', 'Traffic API', 'Optimization'],
      githubLink: 'https://github.com/Sugarkoko/AlayaApp',
      contributions: [
        'Designed routing logic using greedy algorithm with local search optimization',
        'Implemented destination prioritization based on user-defined weights and time constraints',
        'Integrated real-time traffic data for dynamic route adjustment under congestion conditions',
        'Built itinerary comparison module for evaluating multiple routing strategies'
      ]
    },
    {
      title: 'Full Stack React Web Application',
      summary: 'A complete web application with responsive architecture, demonstrating modern frontend practices and backend integration. Features include data persistence, user authentication patterns, and automated deployment workflows.',
      tags: ['React', 'Vite', 'MongoDB', 'Vercel', 'CI/CD'],
      githubLink: 'https://github.com/caguiclacd/taglay',
      contributions: [
        'Architected component structure with reusable UI patterns and state management',
        'Implemented MongoDB integration with proper schema design and query optimization',
        'Built responsive layouts using CSS Grid and custom properties for theming',
        'Configured CI/CD pipeline via GitHub Actions for automated testing and Vercel deployment'
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-header reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Technical implementations demonstrating problem-solving and engineering discipline</p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={index} className="project-card reveal">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <a
                  href={project.githubLink}
                  className="project-card__github"
                  aria-label="View on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>

              <p className="project-card__summary">{project.summary}</p>

              {project.wipNotice && (
                <p className="project-card__notice">{project.wipNotice}</p>
              )}

              <div className="project-card__tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="project-card__contributions">
                {project.contributions.map((contribution, contribIndex) => (
                  <li key={contribIndex} className="project-card__contribution">
                    <span className="contribution-bullet"></span>
                    {contribution}
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

export default Projects;
