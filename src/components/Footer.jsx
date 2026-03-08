import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            &copy; {year} Christian Caguicla. Built with React and Vite.
          </p>
          <p className="footer__subtext">
            Computer Science Student | Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
