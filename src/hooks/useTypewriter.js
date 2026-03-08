import { useState, useEffect } from 'react';

const useTypewriter = (words, delay = 100, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink(prev => !prev);
    }, 500);

    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const pauseTimeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && reverse) {
      const reverseTimeout = setTimeout(() => {
        setReverse(false);
        setIndex(prev => (prev + 1) % words.length);
      }, delay);
      return () => clearTimeout(reverseTimeout);
    }

    const typeTimeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1));
    }, reverse ? delay / 2 : delay);

    return () => clearTimeout(typeTimeout);
  }, [subIndex, index, reverse, words, delay, pause]);

  return {
    text: words[index].substring(0, subIndex),
    blink
  };
};

export default useTypewriter;
