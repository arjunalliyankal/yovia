import React, { useRef, useEffect } from 'react';

const lerp = (current, target, factor) => (1 - factor) * current + factor * target;

export function ProximityFloat({ children, className = '', factor = 0.02, speed = 0.08 }) {
  const elementRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetPos.current.x = (e.clientX - innerWidth / 2) * factor;
      targetPos.current.y = (e.clientY - innerHeight / 2) * factor;
    };

    const updateLoop = () => {
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, speed);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, speed);

      if (elementRef.current) {
        elementRef.current.style.transform = `translate3d(${currentPos.current.x.toFixed(2)}px, ${currentPos.current.y.toFixed(2)}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animFrameId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [factor, speed]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
