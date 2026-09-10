# Tailwind CSS Responsive Webpage Guidelines

## Objective

Generate webpages that are fully responsive across mobile, tablet, laptop, desktop, and large-screen devices using Tailwind CSS.

## 1. Mobile-First

Always build the base layout for mobile first.

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

* Default classes → mobile
* `sm:` → small screens
* `md:` → tablets
* `lg:` → laptops/desktops
* `xl:` → large desktops
* `2xl:` → very large screens

Do not build desktop first and then force it to fit mobile.

## 2. Responsive Containers

Use fluid containers with maximum widths.

```html
<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
```

Avoid fixed page widths such as:

```html
<div class="w-[1200px]">
```

## 3. Responsive Grid

Use one column by default and increase columns at larger breakpoints.

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

Common patterns:

```text
Mobile  → 1 column
Tablet  → 2 columns
Desktop → 3/4 columns
```

## 4. Responsive Flexbox

Use vertical layouts on mobile and horizontal layouts when there is enough space.

```html
<div class="flex flex-col gap-4 md:flex-row">
```

For navigation/actions:

```html
<div class="flex flex-col sm:flex-row">
```

## 5. Responsive Typography

Scale text when necessary.

```html
<h1 class="text-3xl sm:text-4xl lg:text-6xl">
```

Avoid fixed typography that causes overflow on small screens.

## 6. Responsive Spacing

Scale padding and margins according to viewport size.

```html
<section class="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
```

Avoid excessive spacing on mobile.

## 7. Responsive Widths

Prefer fluid widths.

```html
w-full
max-w-xl
max-w-2xl
max-w-7xl
```

Use fixed widths only when technically necessary.

## 8. Responsive Images

Images must remain within their containers.

```html
<img
  src="/image.jpg"
  alt="Description"
  class="h-auto w-full object-cover"
/>
```

Use responsive aspect ratios when required.

```html
<div class="aspect-square sm:aspect-video">
```

## 9. Responsive Navigation

Desktop navigation should collapse on smaller screens.

```html
<nav class="hidden md:flex">
```

```html
<button class="md:hidden">
  Menu
</button>
```

Do not allow desktop navigation to overflow on mobile.

## 10. Responsive Forms

Forms should default to one column.

```html
<form class="grid grid-cols-1 gap-4 md:grid-cols-2">
```

Inputs should normally use:

```html
class="w-full"
```

## 11. Responsive Buttons

Buttons should stack when necessary.

```html
<div class="flex flex-col gap-3 sm:flex-row">
```

Use:

```html
class="w-full sm:w-auto"
```

when buttons should be full-width on mobile.

## 12. Responsive Tables

Prevent tables from causing page overflow.

```html
<div class="w-full overflow-x-auto">
  <table class="min-w-[700px]">
    ...
  </table>
</div>
```

## 13. Prevent Horizontal Overflow

Every page must be checked for unintended horizontal scrolling.

Avoid unnecessary:

```text
w-[fixed-width]
min-w-[large-width]
absolute left-[large-value]
translate-x-[large-value]
```

Use:

```html
class="w-full max-w-full"
```

where appropriate.

## 14. Responsive Positioning

Do not use absolute positioning for the main page layout.

Prefer:

```text
grid
flex
container
max-width
margin auto
```

Use absolute positioning only when required for individual UI elements.

## 15. Responsive Visibility

Use breakpoint utilities when content genuinely needs different behavior.

```html
<div class="hidden md:block">
```

```html
<div class="block md:hidden">
```

Avoid duplicating entire sections unnecessarily.

## 16. Responsive Cards

Cards should automatically fit available space.

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
```

Avoid fixed card widths and fixed heights when content can vary.

## 17. Responsive Modals

Modals must fit smaller screens.

```html
<div class="w-[calc(100%-2rem)] max-w-lg">
```

For large content:

```html
<div class="max-h-[90vh] overflow-y-auto">
```

## 18. Responsive Breakpoint Testing

Test generated pages at minimum at:

```text
320px
375px
390px
430px
640px
768px
1024px
1280px
1440px
1536px
1920px
```

The page must remain functional between these widths as well.

## 19. Required Responsive QA

Before completing a webpage:

* [ ] Mobile layout works correctly.
* [ ] Tablet layout works correctly.
* [ ] Laptop layout works correctly.
* [ ] Desktop layout works correctly.
* [ ] Large-screen layout works correctly.
* [ ] No unintended horizontal scrolling.
* [ ] No text overflow.
* [ ] Images remain responsive.
* [ ] Navigation works on mobile.
* [ ] Forms adapt to smaller screens.
* [ ] Buttons remain usable on mobile.
* [ ] Cards adapt to available width.
* [ ] Tables do not break the page.
* [ ] Modals fit within the viewport.
* [ ] No important content is hidden unintentionally.
* [ ] No unnecessary mobile/desktop duplication.

## 20. Core Rule

Use Tailwind CSS responsive utilities to create **one flexible layout** that adapts to different viewport sizes.

Do not create separate fixed layouts for individual devices.
