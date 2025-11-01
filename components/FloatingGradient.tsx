import React, { useRef, useEffect } from 'react';

interface FloatingGradientProps {
  speed?: number;
  reverse?: boolean;
}

const FloatingGradient: React.FC<FloatingGradientProps> = ({ speed = 0.1, reverse = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        if (containerRef.current?.parentElement) {
          const parent = containerRef.current.parentElement;
          const rect = parent.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Only calculate and apply transform if the parent element is in the viewport
          if (rect.bottom >= 0 && rect.top <= viewportHeight) {
            const elementCenterY = rect.top + rect.height / 2;
            const viewportCenterY = viewportHeight / 2;
            const distanceFromCenter = elementCenterY - viewportCenterY;
            
            // A negative speed factor makes the gradient move against the scroll direction
            // relative to the viewport's center, creating a subtle parallax effect.
            const translateY = distanceFromCenter * -speed;

            containerRef.current.style.transform = `translateY(${translateY}px)`;
          }
        }
      });
    };

    // Run once on mount to set initial position
    handleScrollOrResize();

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [speed]);
  
  const blueClasses = `absolute w-2/3 h-2/3 bg-blue-500 rounded-full opacity-30 dark:opacity-20 gradient-blur animate-mix-A ${
    reverse ? '-top-1/4 -right-1/4' : '-top-1/4 -left-1/4'
  }`;
  
  const redClasses = `absolute w-2/3 h-2/3 bg-red-500 rounded-full opacity-30 dark:opacity-20 gradient-blur animate-mix-B ${
    reverse ? '-bottom-1/4 -left-1/4' : '-bottom-1/4 -right-1/4'
  }`;

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full will-change-transform">
      <div className="relative w-full h-full">
        <div
          className={blueClasses}
        />
        <div
          className={redClasses}
          style={{ animationDelay: '3s' }}
        />
      </div>
    </div>
  );
};

export default FloatingGradient;