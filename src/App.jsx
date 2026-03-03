import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreCompetencies from './components/CoreCompetencies';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import SecurityExperience from './components/SecurityExperience';
import Timeline from './components/Timeline';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    const revealGroups = document.querySelectorAll('.reveal-group');

    revealElements.forEach(el => observerRef.current?.observe(el));
    revealGroups.forEach(el => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreCompetencies />
        <TechStack />
        <Projects />
        <SecurityExperience />
        <Timeline />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
