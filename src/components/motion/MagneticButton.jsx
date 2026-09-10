import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function MagneticButton({ 
  children, 
  className = '', 
  onClick, 
  type = 'button',
  strength = 0.4,
  textStrength = 0.2,
  ...props 
}) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isCoarsePointer) return;

    const handleMouseMove = (e) => {
      const boundBox = button.getBoundingClientRect();
      const mouseX = e.clientX - boundBox.left - boundBox.width / 2;
      const mouseY = e.clientY - boundBox.top - boundBox.height / 2;

      gsap.to(button, {
        x: mouseX * strength,
        y: mouseY * strength,
        duration: 0.3,
        ease: "power2.out"
      });

      if (text) {
        gsap.to(text, {
          x: mouseX * textStrength,
          y: mouseY * textStrength,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });

      if (text) {
        gsap.to(text, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      }
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, textStrength]);

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-shadow duration-300 will-change-transform ${className}`}
      {...props}
    >
      <span ref={textRef} className="inline-flex items-center justify-center w-full h-full pointer-events-none will-change-transform">
        {children}
      </span>
    </button>
  );
}
