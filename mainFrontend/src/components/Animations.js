import { useEffect, useRef } from 'react';

const useIntersectionObserver = (selector) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const targets = document.querySelectorAll(selector);
    targets.forEach((target) => observer.observe(target));

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [selector]);

  return observerRef;
};


export default useIntersectionObserver;
