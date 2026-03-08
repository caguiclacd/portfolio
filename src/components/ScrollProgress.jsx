import { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className={`scroll-progress ${progress === 100 ? 'scroll-progress--complete' : ''}`}
      style={{ width: `${progress}%` }}
    />
  );
};

export default ScrollProgress;
