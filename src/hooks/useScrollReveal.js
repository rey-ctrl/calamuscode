import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    /* Handle initial appear elements */
    const appears = document.querySelectorAll('.appear');
    appears.forEach((el) => {
      const handleAnimEnd = () => el.classList.add('is-in');
      el.addEventListener('animationend', handleAnimEnd, { once: true });
    });

    /* IntersectionObserver for scroll reveals */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
