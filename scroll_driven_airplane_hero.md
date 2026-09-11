# Scroll-Driven 3D Airplane Hero — Implementation Guide

## Goal

Upgrade the **existing homepage hero only** with a cinematic airplane scroll animation.

Do not rebuild or redesign the rest of the webpage.

The existing website uses **React + Tailwind CSS**. Keep the current design, branding, navigation, content, and sections unchanged unless a small change is required to connect the new hero.

The airplane visual should feel like a premium global visa/travel website.

---

## 1. Main Hero Concept

Create a full-screen hero where a realistic airplane moves through the scene as the user scrolls.

The experience should work like this:

**Initial view**
- Large realistic airplane flying above clouds.
- Strong hero headline and CTA content.
- Cinematic background.
- Airplane is the main visual focus.

**While scrolling**
- The page uses a sticky hero/canvas area.
- Scroll position controls the airplane animation.
- The airplane moves forward naturally.
- The camera slowly follows/pushes forward.
- Clouds create subtle depth/parallax.
- Hero text gradually fades or moves away.
- The scene transitions smoothly into the next homepage section.

**End of animation**
- Airplane continues toward the distance.
- Hero visual fades naturally.
- The next section becomes fully visible.
- No sudden jump or hard transition.

---

## 2. Assets

Use the provided realistic airplane image/video/frame sequence.

### Important

Use the **exact provided airplane asset**.

Do not:
- Replace it with stock images.
- Generate a different airplane.
- Change the aircraft design.
- Stretch or distort the airplane.
- Add unrelated travel images.

If a video is available, use it to create the scroll animation.

If a frame sequence is available, use the frames directly.

Recommended frame sequence:

```text
/public/airplane-frames/
  frame-0001.webp
  frame-0002.webp
  frame-0003.webp
  ...
  frame-0180.webp
```

Prefer **WebP or AVIF** for frames to reduce file size.

---

## 3. Animation Method

Use a scroll-driven frame animation.

Preferred approach:

```text
User scroll
     ↓
Scroll progress 0 → 1
     ↓
Frame index
     ↓
Airplane frame displayed
```

Example:

```js
const frameIndex = Math.floor(
  scrollProgress * (totalFrames - 1)
);
```

Use `requestAnimationFrame` or an efficient animation library to avoid excessive React re-renders.

Do not update the entire React component on every scroll event if it can be avoided.

A `<canvas>` is preferred for large frame sequences because it provides better control and performance.

---

## 4. Hero Structure

Use a structure similar to:

```text
Hero Section
│
├── Background
│   ├── Sky
│   ├── Clouds
│   └── Subtle gradients
│
├── Sticky Animation Area
│   └── Airplane canvas/video
│
├── Hero Content
│   ├── Badge
│   ├── Main heading
│   ├── Supporting text
│   ├── Primary CTA
│   └── Secondary CTA
│
└── Scroll indicator
```

The existing hero content should be preserved unless it conflicts with the animation.

---

## 5. Desktop Layout

For desktop:

- Hero should occupy the full viewport.
- Use a tall scroll section to give the animation enough time.
- Recommended scroll area: approximately `250vh–400vh`.
- Use a sticky visual area around `100vh`.
- Airplane should be large and clearly visible.
- Keep the hero text readable.
- Avoid placing text directly over important airplane details.

Suggested layout:

```text
┌──────────────────────────────────────┐
│                                      │
│        HERO CONTENT                  │
│                                      │
│                 ✈                    │
│            AIRPLANE                  │
│                                      │
│                                      │
│             ↓ SCROLL                 │
└──────────────────────────────────────┘
```

The exact positioning should adapt to the existing webpage.

---

## 6. Tablet Layout

For tablet:

- Keep the hero full-screen.
- Reduce airplane size slightly.
- Keep the aircraft fully visible.
- Adjust text width.
- Reduce the animation distance if necessary.
- Keep enough spacing between text and airplane.
- Avoid horizontal overflow.

Use Tailwind responsive classes rather than fixed desktop dimensions.

---

## 7. Mobile Layout

Do **not** simply shrink the desktop hero.

Mobile should be intentionally designed.

Requirements:

- Use a mobile-friendly composition.
- Keep the airplane clearly visible.
- Do not cut off important parts of the aircraft.
- Keep CTA buttons usable.
- Keep text readable.
- Avoid excessive animation.
- Reduce the number of frames loaded if necessary.
- Reduce scroll distance if required.
- Prevent horizontal scrolling.

If a separate mobile frame sequence exists, use it.

Example:

```text
Desktop:
16:9 airplane sequence

Mobile:
9:16 airplane sequence
```

Use responsive logic to select the correct sequence.

If a separate mobile sequence does not exist, use the desktop sequence with carefully controlled `object-position`/canvas scaling rather than creating a distorted crop.

---

## 8. Responsive Behavior

Test at:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Check:

- Hero height
- Airplane position
- Airplane size
- Text position
- CTA position
- Canvas size
- Frame rendering
- Scroll progress
- Section transition
- Horizontal overflow

Nothing should break at any of these widths.

---

## 9. Scroll Animation

The animation should feel smooth and cinematic.

Suggested timeline:

### 0–20%

- Airplane starts close and large.
- Hero content is fully visible.
- Subtle cloud movement.

### 20–50%

- Airplane begins moving forward.
- Camera slowly pushes forward.
- Hero text begins fading/moving.
- Cloud depth becomes more noticeable.

### 50–80%

- Airplane becomes smaller/distant.
- Hero content is mostly hidden.
- Background transitions toward the next section.

### 80–100%

- Airplane reaches the end of the flight sequence.
- Visual gradually fades or transitions.
- Next section becomes dominant.

Do not make the animation too fast.

---

## 10. Camera / Depth Effect

Create a realistic sense of depth.

Use subtle:

- Scale
- Translation
- Parallax
- Opacity
- Blur on distant elements

Avoid excessive effects.

The airplane should remain the sharpest and most important visual.

---

## 11. Existing Hero Content

Keep the current hero content.

If the current hero contains:

- Heading
- Description
- CTA buttons
- Badge
- Trust indicators
- Stats

do not remove them.

Position them around the airplane animation so the content remains readable.

The airplane should support the content, not make the page difficult to use.

---

## 12. CTA Buttons

Existing buttons must remain functional.

Do not replace existing links.

Make sure:

- Buttons remain clickable.
- Buttons stay above the animation layer.
- Hover states continue to work.
- Mobile buttons are easy to tap.

Use appropriate `z-index` values.

Example:

```text
Background       z-0
Airplane         z-10
Hero content     z-20
Navigation       z-30
```

Adjust this according to the existing project.

---

## 13. Performance

Performance is important.

Do not load hundreds of large images at once.

Use:

- WebP/AVIF
- Lazy loading where appropriate
- Frame preloading
- `requestAnimationFrame`
- Canvas rendering
- Efficient memory management
- Responsive frame loading

Do not block the initial page load with the entire frame sequence.

Recommended behavior:

```text
Load first frame
      ↓
Show hero immediately
      ↓
Preload upcoming frames
      ↓
Continue loading remaining frames
```

If the browser/device is weak, use a lower frame count or simpler animation.

---

## 14. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- Do not run aggressive scroll animation.
- Show a suitable static airplane frame.
- Keep the page fully usable.
- Avoid unnecessary movement.

---

## 15. Loading State

Do not show a broken canvas while frames are loading.

Show the first airplane frame immediately as the fallback.

Then replace it with the animated sequence once enough frames are ready.

Avoid visible flashing.

---

## 16. Tailwind CSS

Use **Tailwind CSS** for layout and styling.

Prefer:

```text
flex
grid
absolute
relative
sticky
min-h-screen
w-full
max-w-*
overflow-hidden
z-*
opacity-*
transition-*
```

Avoid large custom CSS files unless necessary for the animation implementation.

Do not introduce another CSS framework.

---

## 17. React Component Structure

Keep the implementation reusable.

Suggested components:

```text
Hero
├── HeroContent
├── AirplaneScrollAnimation
├── HeroBackground
└── ScrollIndicator
```

If the project already has similar components, reuse them instead of creating duplicates.

Keep animation logic separate from normal hero content.

---

## 18. Browser Behavior

Support:

- Chrome
- Edge
- Safari
- Firefox

Handle:

- Window resizing
- Device pixel ratio
- Orientation changes
- Mobile browser viewport changes

When resizing, recalculate the canvas dimensions without breaking the current frame.

---

## 19. No Layout Shift

The hero must have a stable height before the animation loads.

Do not allow:

- Content jumping
- Images changing layout size
- Buttons moving unexpectedly
- Hero height changing during frame loading

Reserve the required hero/animation space from the start.

---

## 20. Visual Style

The final result should feel:

- Premium
- Cinematic
- Modern
- Smooth
- Professional
- Travel-focused
- High-end

Avoid:

- Cheap-looking animations
- Excessive glowing effects
- Cartoon effects
- Fast zooms
- Shaky camera movement
- Excessive blur
- Random floating objects
- Generic template styling

The animation should look like a premium travel brand website.

---

## 21. Important Restrictions

Do not:

- Rebuild the entire homepage.
- Change unrelated sections.
- Change the existing navigation.
- Remove existing content.
- Replace the brand identity.
- Replace the airplane with another asset.
- Distort the airplane.
- Add unnecessary libraries.
- Break existing routes.
- Break existing functionality.
- Add horizontal scrolling.

Only improve the homepage hero and connect it cleanly to the existing page.

---

## 22. Implementation Process

Follow this order:

### Step 1
Inspect the existing homepage and understand its current hero.

### Step 2
Find the existing airplane asset/video/frame sequence.

### Step 3
Create the scroll animation component.

### Step 4
Connect scroll progress to the animation.

### Step 5
Place the existing hero content over/around the animation.

### Step 6
Add responsive behavior.

### Step 7
Add loading and performance handling.

### Step 8
Add reduced-motion support.

### Step 9
Test all required viewport sizes.

### Step 10
Compare the result with the existing website and fix any layout or visual problems.

---

## 23. Final Result

The finished hero should feel like:

```text
OPEN WEBSITE
      ↓
Cinematic airplane scene
      ↓
User scrolls
      ↓
Airplane flies forward
      ↓
Camera follows
      ↓
Clouds move with depth
      ↓
Hero content fades naturally
      ↓
Airplane reaches the end
      ↓
Next section appears smoothly
```

The result must be **responsive, smooth, performant, and production-ready** while keeping the existing website intact.

## Final Priority

1. Existing website functionality
2. Exact airplane asset
3. Smooth scroll animation
4. Responsive behavior
5. Performance
6. Visual quality

Do not sacrifice usability or performance just to add an effect.
