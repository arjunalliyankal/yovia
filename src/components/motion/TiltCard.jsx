import React, { useRef, useState } from 'react';

export function TiltCard({ 
  children, 
  className = '', 
  maxTilt = 12,
  showGlow = true,
  ...props 
}) {
  const cardRef = useRef(null);
  const [glowStyle, setGlowStyle] = useState({ opacity: 0 });
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;

    const tiltX = -(dy / yc) * maxTilt;
    const tiltY = (dx / xc) * maxTilt;

    setTransformStyle(`perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`);
    
    if (showGlow) {
      setGlowStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(122, 64, 237, 0.12) 0%, transparent 65%)`
      });
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    if (showGlow) {
      setGlowStyle({ opacity: 0 });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out'
      }}
      className={`relative will-change-transform ${className}`}
      {...props}
    >
      {showGlow && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[inherit] z-10"
          style={glowStyle}
        />
      )}
      <div className="w-full h-full transform-gpu" style={{ transform: 'translateZ(10px)' }}>
        {children}
      </div>
    </div>
  );
}
