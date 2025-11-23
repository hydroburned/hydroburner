import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  offset?: number; // Distance to translate in pixels
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 800,
  className = '', 
  direction = 'up',
  fullWidth = false,
  offset = 40
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { 
      threshold: 0.1, 
      // Trigger slightly before the element comes fully into view
      rootMargin: '0px 0px -10% 0px' 
    });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransformClasses = () => {
      // We use inline styles for precise control, but these classes 
      // act as fallbacks or for tailwind processing if needed.
      switch(direction) {
          case 'up': return 'translate-y-10';
          case 'down': return '-translate-y-10';
          case 'left': return '-translate-x-10';
          case 'right': return 'translate-x-10';
          case 'none': return '';
          default: return 'translate-y-10';
      }
  };

  const getInitialStyle = () => {
    if (isVisible) return { opacity: 1, transform: 'translate(0, 0)' };
    
    switch(direction) {
        case 'up': return { opacity: 0, transform: `translateY(${offset}px)` };
        case 'down': return { opacity: 0, transform: `translateY(-${offset}px)` };
        case 'left': return { opacity: 0, transform: `translateX(-${offset}px)` };
        case 'right': return { opacity: 0, transform: `translateX(${offset}px)` };
        case 'none': return { opacity: 0, transform: 'none' };
        default: return { opacity: 0, transform: `translateY(${offset}px)` };
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out will-change-[opacity,transform] ${className} ${fullWidth ? 'w-full' : ''}`}
      style={{ 
        ...getInitialStyle(),
        transitionDuration: `${duration}ms`, 
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;