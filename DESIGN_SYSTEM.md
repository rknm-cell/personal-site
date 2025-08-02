# Design System

## Color Palette

### Primary Colors

#### Isabelline (Light Neutral Base)
- **100**: `#34342a` - Darkest shade for text
- **200**: `#676754` - Dark shade for headings
- **300**: `#989881` - Medium dark for secondary text
- **400**: `#c2c2b5` - Medium light for borders
- **500**: `#edede9` - Base color for backgrounds
- **600**: `#f0f0ed` - Light background
- **700**: `#f4f4f2` - Lighter background
- **800**: `#f8f8f6` - Very light background
- **900**: `#fbfbfb` - Lightest background

#### Timberwolf (Warm Neutral)
- **100**: `#312921` - Darkest shade for text
- **200**: `#625241` - Dark shade for headings
- **300**: `#937a62` - Medium dark for secondary text
- **400**: `#b6a391` - Medium light for borders
- **500**: `#d6ccc2` - Base color for backgrounds
- **600**: `#ded6ce` - Light background
- **700**: `#e7e0da` - Lighter background
- **800**: `#efebe7` - Very light background
- **900**: `#f7f5f3` - Lightest background

#### Linen (Warm Cream)
- **100**: `#473017` - Darkest shade for text
- **200**: `#8e5f2e` - Dark shade for headings
- **300**: `#c78f52` - Medium dark for secondary text
- **400**: `#debd99` - Medium light for borders
- **500**: `#f5ebe0` - Base color for backgrounds
- **600**: `#f7efe6` - Light background
- **700**: `#f9f3ed` - Lighter background
- **800**: `#fbf7f3` - Very light background
- **900**: `#fdfbf9` - Lightest background

#### Champagne Pink (Soft Pink)
- **100**: `#38291e` - Darkest shade for text
- **200**: `#70523b` - Dark shade for headings
- **300**: `#a87b59` - Medium dark for secondary text
- **400**: `#c5a891` - Medium light for borders
- **500**: `#e3d5ca` - Base color for backgrounds
- **600**: `#e8ddd4` - Light background
- **700**: `#eee6df` - Lighter background
- **800**: `#f4eeea` - Very light background
- **900**: `#f9f7f4` - Lightest background

#### Pale Dogwood (Muted Rose)
- **100**: `#33241b` - Darkest shade for text
- **200**: `#664735` - Dark shade for headings
- **300**: `#986b50` - Medium dark for secondary text
- **400**: `#ba937c` - Medium light for borders
- **500**: `#d5bdaf` - Base color for backgrounds
- **600**: `#ddcabf` - Light background
- **700**: `#e6d7cf` - Lighter background
- **800**: `#eee4df` - Very light background
- **900**: `#f7f2ef` - Lightest background

## Usage Guidelines

### Text Colors
- **Primary Text**: Use `timberwolf-100` for main content
- **Secondary Text**: Use `timberwolf-200` for less important text
- **Accent Text**: Use `pale-dogwood-400` for highlights

### Background Colors
- **Primary Background**: Use `isabelline-500` for main areas
- **Secondary Background**: Use `isabelline-600` for cards and sections
- **Accent Background**: Use `linen-500` for call-to-action areas

### Border Colors
- **Primary Borders**: Use `timberwolf-300` for subtle borders
- **Accent Borders**: Use `champagne-pink-400` for highlights

### Interactive Elements
- **Primary Buttons**: Use `linen-500` background with `timberwolf-100` text
- **Secondary Buttons**: Use transparent background with `timberwolf-300` border
- **Hover States**: Use `linen-400` for primary buttons, `timberwolf-100` for secondary

## Tailwind Classes

### Background Colors
```html
<!-- Primary backgrounds -->
<div class="bg-isabelline-500">Main background</div>
<div class="bg-isabelline-600">Card background</div>
<div class="bg-linen-500">Accent background</div>

<!-- Text backgrounds -->
<div class="bg-timberwolf-100">Dark text background</div>
<div class="bg-champagne-pink-500">Soft accent background</div>
```

### Text Colors
```html
<!-- Text colors -->
<h1 class="text-timberwolf-100">Primary heading</h1>
<p class="text-timberwolf-200">Body text</p>
<span class="text-pale-dogwood-400">Accent text</span>
```

### Borders
```html
<!-- Border colors -->
<div class="border-timberwolf-300">Subtle border</div>
<div class="border-champagne-pink-400">Accent border</div>
```

### Gradients
```html
<!-- Gradient backgrounds -->
<div class="gradient-warm">Warm gradient</div>
<div class="gradient-neutral">Neutral gradient</div>
<div class="gradient-accent">Accent gradient</div>
```

## Component Examples

### Cards
```html
<div class="card">
  <h3 class="text-heading">Card Title</h3>
  <p class="text-body">Card content goes here</p>
</div>
```

### Buttons
```html
<button class="button-primary">Primary Action</button>
<button class="button-secondary">Secondary Action</button>
```

### Animated Elements
```html
<div class="animate-fade-in-up">Fade in from bottom</div>
<div class="animate-float">Floating animation</div>
<div class="animate-pulse-soft">Soft pulse animation</div>
```

## Accessibility

- All color combinations meet WCAG AA contrast requirements
- Focus states use `champagne-pink-400` for visibility
- Selection color uses `linen-400` for good contrast 