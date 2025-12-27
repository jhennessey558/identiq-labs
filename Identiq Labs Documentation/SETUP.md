# Quick Setup Guide

## Files Included

1. **IdentiqLabs.jsx** - Main React component
2. **Identiq-styles.css** - All Tailwind CSS and custom styles
3. **tailwind.config.js** - Tailwind configuration with custom colors

## Installation Steps

### 1. Install Dependencies

```bash
npm install react react-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
```

### 2. File Placement

```
your-project/
├── src/
│   ├── IdentiqLabs.jsx       # Place here
│   ├── Identiq-styles.css    # Place here
│   └── main.jsx               # Import CSS here
├── tailwind.config.js          # Place at root
└── package.json
```

### 3. Import CSS in your entry file

**src/main.jsx:**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import IdentiqLabs from './IdentiqLabs';
import './Identiq-styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdentiqLabs />
  </React.StrictMode>
);
```

### 4. Create PostCSS Config (if using Vite)

**postcss.config.js:**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. Run Development Server

```bash
npm run dev
```

## Custom Colors Reference

All colors are prefixed with `Identiq-`:

**Purple Shades:**
- `Identiq-purple-400` to `Identiq-purple-950`

**Violet Shades:**
- `Identiq-violet-400` to `Identiq-violet-950`

**Amber Shades:**
- `Identiq-amber-400` to `Identiq-amber-950`

**Background:**
- `Identiq-bg` → #0B0A0F

## Reusable CSS Classes

**Text Gradients:**
- `.gradient-text-primary` - White → Purple → Amber
- `.gradient-text-secondary` - White → Light Purple → White
- `.gradient-text-accent` - Purple → Amber

**Cards:**
- `.card-purple` - Basic purple card
- `.card-purple-hover` - Purple card with hover effects
- `.card-amber` - Amber-themed card

**Components:**
- `.btn-primary` - Primary button
- `.input-primary` - Form input
- `.logo-gradient` - Logo background
- `.nav-glass` - Glass navigation bar
- `.section-spacing` - Consistent section padding

**Effects:**
- `.grid-background` - Animated grid
- `.orb-purple`, `.orb-violet`, `.orb-amber` - Floating orbs

## Email Integration

Update the `handleSubmit` function in `IdentiqLabs.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Replace with your email service
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  
  if (response.ok) {
    setSubmitted(true);
    // Optional: Track with analytics
  }
};
```

## Quick Customizations

**Change Company Name:**
Line 82 and throughout: "Identiq Labs"

**Update Email:**
Lines 89, 318, 380: "hello@Identiq.io"

**Modify Principles:**
Lines 42-57: `principles` array

**Change Metrics:**
Lines 166-186: Stats in hero section

## Production Build

```bash
npm run build
```

Your optimized build will be in the `dist/` folder.

## Need Help?

Contact: hello@Identiq.io
