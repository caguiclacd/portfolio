import { useState, useEffect, useRef } from 'react';

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(start + (end - start) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration, start]);

  return { count, ref };
};

export default useCountUp;
