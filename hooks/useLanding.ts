import { useState, useEffect, useRef } from 'react';

export function useLanding() {
  // 1. The State
  const [activePanel, setActivePanel] = useState('climbers');
  
  // 2. The Reference (Typed for an HTML element)
  const heroRef = useRef<HTMLElement | null>(null);

  // 3. The Lifecycle / Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the hero section is at least 50% visible on screen
        if (entries[0].isIntersecting) {
          // Silently remove the #solutions or #about hash without refreshing the page
          window.history.replaceState(null, '', '/');
        }
      },
      { threshold: 0.5 } 
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Cleanup the observer when the page closes
    return () => observer.disconnect();
  }, []);

  // 4. Expose exactly what the View needs
  return {
    activePanel,
    setActivePanel,
    heroRef
  };
}