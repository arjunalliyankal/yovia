import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 165;

function getFrameUrl(index) {
  const paddedIndex = String(index + 1).padStart(4, '0');
  return `/VideoProject15-frames/frame-${paddedIndex}.jpg`;
}

export function AirplaneCanvas({ progress = 0, isReducedMotion = false }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef({});
  const loadedCountRef = useRef(0);
  const animationFrameRef = useRef(null);
  
  // Smooth target lerp state
  const targetProgressRef = useRef(progress);
  const currentProgressRef = useRef(progress);
  const lastDrawnFrameRef = useRef(-1);

  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState(false);

  // Keep target progress updated
  useEffect(() => {
    targetProgressRef.current = progress;
  }, [progress]);

  // Find best loaded frame close to target frame to guarantee flicker-free rendering
  const getBestAvailableImage = (targetIndex) => {
    if (imagesRef.current[targetIndex]?.complete && imagesRef.current[targetIndex]?.naturalWidth > 0) {
      return { img: imagesRef.current[targetIndex], index: targetIndex };
    }
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && imagesRef.current[prev]?.complete && imagesRef.current[prev]?.naturalWidth > 0) {
        return { img: imagesRef.current[prev], index: prev };
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && imagesRef.current[next]?.complete && imagesRef.current[next]?.naturalWidth > 0) {
        return { img: imagesRef.current[next], index: next };
      }
    }
    return null;
  };

  // Helper to draw a given frame onto the canvas
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const match = getBestAvailableImage(frameIndex);
    if (!match) return;

    renderImageToCanvas(ctx, canvas, match.img);
    lastDrawnFrameRef.current = match.index;
  }, []);

  const renderImageToCanvas = (ctx, canvas, img) => {
    const width = canvas.width;
    const height = canvas.height;
    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;

    ctx.clearRect(0, 0, width, height);

    // Calculate aspect ratio cover positioning
    const scale = Math.max(width / imgWidth, height / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Preloading Strategy:
  // 1. Instantly load frame 0 to render fallback immediately
  // 2. Preload remaining frames in prioritized batches up to frame 165
  useEffect(() => {
    let isMounted = true;

    // Load Frame 0 immediately
    const frame0 = new Image();
    frame0.src = getFrameUrl(0);
    frame0.onload = () => {
      if (!isMounted) return;
      imagesRef.current[0] = frame0;
      loadedCountRef.current += 1;
      setIsFirstFrameLoaded(true);
      drawFrame(0);
    };

    // Queue preloading remaining frames in background
    const loadRemainingFrames = async () => {
      // Priority 1: Key milestones (every 4th frame) for quick visual responsiveness
      for (let i = 1; i < TOTAL_FRAMES; i += 4) {
        if (!isMounted) return;
        if (!imagesRef.current[i]) {
          const img = new Image();
          img.src = getFrameUrl(i);
          img.onload = () => {
            if (isMounted) imagesRef.current[i] = img;
          };
          imagesRef.current[i] = img;
        }
      }

      // Priority 2: All remaining frames sequentially
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (!isMounted) return;
        if (!imagesRef.current[i]) {
          const img = new Image();
          img.src = getFrameUrl(i);
          img.onload = () => {
            if (isMounted) imagesRef.current[i] = img;
          };
          imagesRef.current[i] = img;
        }
      }
    };

    const timer = setTimeout(() => {
      loadRemainingFrames();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [drawFrame]);

  // Handle Resize and Retina DPI scaling
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const targetFrame = isReducedMotion
        ? 0
        : Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(currentProgressRef.current * (TOTAL_FRAMES - 1))));
      drawFrame(targetFrame);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, isReducedMotion]);

  // Smooth animation render loop with linear interpolation (lerp)
  useEffect(() => {
    if (isReducedMotion) {
      drawFrame(0);
      return;
    }

    let running = true;

    const renderLoop = () => {
      if (!running) return;

      // Responsive lerp factor for fluid frame damping
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.18;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );

      if (frameIndex !== lastDrawnFrameRef.current) {
        drawFrame(frameIndex);
      }

      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      running = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [drawFrame, isReducedMotion]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">
      {/* Canvas layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block transition-opacity duration-500"
        style={{ opacity: isFirstFrameLoaded ? 1 : 0 }}
      />

      {/* Fallback image shown before first frame loads into canvas */}
      {!isFirstFrameLoaded && (
        <img
          src={getFrameUrl(0)}
          alt="Yovia Visa Services Airplane Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/50 pointer-events-none" />
    </div>
  );
}
