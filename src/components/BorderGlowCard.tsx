import React, { useRef, useEffect } from 'react';

interface BorderGlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BorderGlowCard: React.FC<BorderGlowCardProps> = ({ children, className = '', ...props }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const dx = x - centerX;
      const dy = y - centerY;
      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      let proximity = 0;
      
      if (isInside) {
        proximity = 100;
      } else {
        const distToEdge = Math.sqrt(
          Math.pow(Math.max(0, -x, x - rect.width), 2) + 
          Math.pow(Math.max(0, -y, y - rect.height), 2)
        );
        proximity = Math.max(0, 100 - (distToEdge / 3));
      }

      card.style.setProperty('--cursor-angle', `${angle}deg`);
      card.style.setProperty('--edge-proximity', `${proximity}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`border-glow-card ${className}`} 
      style={{ '--card-bg': '#1a1a24', ...props.style } as React.CSSProperties}
      {...props}
    >
      <div className="edge-light"></div>
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
};
