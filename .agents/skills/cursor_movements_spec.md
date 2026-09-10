# Cursor-Responsive Web Motion Specifications

This document outlines the implementation details, logic, and production-ready code snippets for **cursor-responsive UI movements** (Magnetic Effects, 3D Tilt, and Proximity Floats). Pass this file directly to your development agent to implement these micro-interactions.

---

## 1. Technical Framework & Optimization Principles
To maintain smooth **60+ FPS performance** and avoid layout thrashing, your agent must follow these rules:
*   **Hardware Acceleration:** Only animate `transform` properties (`translate3d`, `rotateX`, `rotateY`, `scale`). Never animate layout triggers like `top`, `left`, `margin`, or `width`.
*   **Linear Interpolation (Lerp):** Use a dampening/easing factor to smoothly bridge the distance between the current element position and the target cursor position. This prevents rigid, unnatural jumps.
*   **Will-Change:** Apply `will-change: transform;` in CSS to hint to the browser to optimize the element rendering layer ahead of time.
*   **Accessibility:** Wrap interactions inside a media query checking for `(prefers-reduced-motion: no-preference)` to respect user device preferences.

---

## 2. Core Interaction Types & Code Templates

### Interaction A: The Magnetic Button
The element tracks the cursor coordinates once the pointer enters its designated boundary area, creating a smooth snapping attraction.

#### HTML Structure
```html
<button class="magnetic-btn">
  <span class="btn-text">Explore Work</span>
</button>
```

#### CSS Styling
```css
.magnetic-btn {
  position: relative;
  padding: 1.5rem 3rem;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  will-change: transform;
  display: inline-block;
}

.btn-text {
  display: inline-block;
  pointer-events: none; /* Prevents text from disrupting hover calculations */
  will-change: transform;
}
```

#### JavaScript (Vanilla JS + GSAP)
*Recommended implementation framework using the high-performance [GSAP Core Engine](https://gsap.com/).*
```javascript
import { gsap } from "gsap";

const button = document.querySelector('.magnetic-btn');
const buttonText = document.querySelector('.btn-text');

if (button && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  
  button.addEventListener('mousemove', (e) => {
    const boundBox = button.getBoundingClientRect();
    
    // Calculate cursor position relative to the center of the button
    const mouseX = e.clientX - boundBox.left - boundBox.width / 2;
    const mouseY = e.clientY - boundBox.top - boundBox.height / 2;
    
    // Move the outer button shell (stronger magnet pull)
    gsap.to(button, {
      x: mouseX * 0.5,
      y: mouseY * 0.5,
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Move the inner text text slightly less for layered parallax depth
    gsap.to(buttonText, {
      x: mouseX * 0.25,
      y: mouseY * 0.25,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  // Smoothly return element to starting position when mouse leaves
  button.addEventListener('mouseleave', () => {
    gsap.to([button, buttonText], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  });
}
```

---

### Interaction B: 3D Tilt / Parallax Hover Card
The element maps the cursor location to rotate itself relative to its center matrix, creating depth.

#### HTML Structure
```html
<div class="tilt-card">
  <div class="card-glow"></div>
  <div class="card-content">
    <h3>Project Title</h3>
    <p>Interaction Concept</p>
  </div>
</div>
```

#### CSS Styling
```css
.tilt-card {
  width: 320px;
  height: 400px;
  background: linear-gradient(135deg, #1e1e24 0%, #111115 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  position: relative;
  transform-style: preserve-3d; /* Crucial for internal 3D depth layers */
  transform: perspective(1000px);
  will-change: transform;
  overflow: hidden;
}

.card-content {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  transform: translateZ(40px); /* Pushes typography into foreground plane */
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tilt-card:hover .card-glow {
  opacity: 1;
}
```

#### JavaScript (Vanilla JS Solution)
```javascript
const card = document.querySelector('.tilt-card');
const glow = document.querySelector('.card-glow');

if (card && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    
    // Cursor position absolute coordinates relative to element box
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates around zero middle axis (-0.5 to 0.5 range)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    
    // Tilt calculations (Max tilt constraint: 15 degrees)
    const maxTilt = 15;
    const tiltX = -(dy / yc) * maxTilt;
    const tiltY = (dx / xc) * maxTilt;
    
    // Map glow overlay directly beneath the mouse pointer position
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.12) 0%, transparent 60%)`;
    
    // Execute 3D hardware matrix rotate
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });
  
  // Snap clean reset on pointer exit
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
}
```

---

### Interaction C: Floating Asset Proximity
Floating assets subtly nudge away or float toward the pointer position based on close tracking vectors.

#### JavaScript (Lerp Function Setup for Custom Loops)
*For lightweight implementations without animation libraries.*
```javascript
// Linear interpolation math helper
const lerp = (current, target, factor) => (1 - factor) * current + factor * target;

let mousePosition = { x: 0, y: 0 };
let currentElementPosition = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
});

function animationLoop() {
  // Apply a 0.1 ease interpolation factor for continuous float damping
  currentElementPosition.x = lerp(currentElementPosition.x, mousePosition.x * 0.03, 0.1);
  currentElementPosition.y = lerp(currentElementPosition.y, mousePosition.y * 0.03, 0.1);
  
  const floatingObject = document.querySelector('.floating-asset');
  if(floatingObject) {
    floatingObject.style.transform = `translate3d(${currentElementPosition.x}px, ${currentElementPosition.y}px, 0)`;
  }
  
  requestAnimationFrame(animationLoop);
}

// Start rendering frames
requestAnimationFrame(animationLoop);
```

---

## 3. Checklist for Agent Verification
Before approving the build from your agent, verify these testing conditions are met:
1. [ ] **Zero Layout Shifts:** Verify no layout changes trigger under the `Network -> Performance` tab inside Chrome DevTools.
2. [ ] **Device Handling:** The script features an explicit condition disabling hover tracking on `pointer: coarse` screens (smartphones/tablets).
3. [ ] **Bound Box Reset:** Elements smoothly ease back to absolute zero origin point (`x: 0, y: 0`) when the mouse exits rapidly.