# Design Guidelines: Premium Portfolio Experience

## Design Approach
**Reference-Based Luxury Minimalism** - Drawing inspiration from high-end editorial design and luxury brand websites, focusing on sophisticated typography, subtle animations, and premium material treatments.

## Typography System

**Primary Font (Serif):** EB Garamond - 300, 400 weights
- Hero name: 4.8rem, 300 weight, 3px letter-spacing
- Card headings: 2rem
- Body text: 1.05rem, 1.75 line-height

**Secondary Font (Sans-serif):** Montserrat - 300, 400, 500 weights
- Subtitle: 1rem
- Links and UI elements: inherit
- Footer: 0.85rem

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Max content width: 960px (custom, not standard Tailwind)
- Section spacing: mb-16 (4rem between sections)
- Card padding: p-10 (2.4rem equivalent)
- Page top margin: mt-24 (6rem)
- Page bottom padding: pb-28 (7rem)

**Structure:**
- Single-column centered layout
- No hero image - pure typographic impact
- Vertically stacked card sections

## Component Library

**Hero Section:**
- Animated name reveal with blur-to-sharp effect
- Centered subtitle with delayed fade-up animation
- Page-level fade-in on load (1.2s duration)

**Card Components:**
- Glass morphism: backdrop-blur, 2% white background overlay
- 1px border with 8% white opacity edge treatment
- 10px border radius
- Hover state: -6px translateY, gold border, expanded shadow
- Gold radial gradient overlay on hover (top-left origin, 60% spread)

**Links:**
- Underline on hover (bottom border transition)
- No default underline
- 0.3s transition

**Footer:**
- Center-aligned, 70% opacity
- 8rem top margin for breathing room

## Visual Treatment

**No Color References** - Layout focuses on:
- Sophisticated hierarchy through size relationships
- Precise spacing and breathing room
- Glass morphism depth effects
- Smooth micro-interactions

## Animations

**Strategic Use Only:**
1. Page load fade-in (1.2s)
2. Hero name reveal with blur + transform (1.8s)
3. Subtitle delayed fade-up (1.4s delay)
4. Card hover transforms (0.45s ease)
5. Gold mist fade-in on card hover (0.5s)

All animations use easing curves for premium feel.

## Images
**No images used** - This is a pure typographic and card-based design. The visual impact comes from elegant typography, sophisticated spacing, and premium material effects rather than imagery.