import { useEffect, useState } from 'react';

function useIntersectionObserver() {
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleItems((prev) => ({
            ...prev,
            [entry.target.dataset.index]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 } // Adjust threshold as necessary
    );

    const elements = document.querySelectorAll('.observer-item');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return visibleItems; // Return the object without destructuring
}

export default useIntersectionObserver;
