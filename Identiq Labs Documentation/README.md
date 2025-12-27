
# Identiq Labs Landing Page - TypeScript + React + Tailwind

A production-ready landing page with beta signup for Prism, built with TypeScript, React, and Tailwind CSS.

## 🎯 What You Have

A complete TypeScript project with:
- ✅ Fully typed React components
- ✅ Custom purple/violet/amber color scheme
- ✅ Tailwind CSS with reusable classes
- ✅ Beta signup form
- ✅ Responsive design
- ✅ Production build configuration
- ✅ ESLint + TypeScript strict mode

## 📦 All Files Included

### Source Files (go in `src/`)
- `IdentiqLabs.tsx` - Main component with full typing
- `types.ts` - Type definitions
- `main.tsx` - Application entry point
- `Identiq-styles.css` - Tailwind + custom styles

### Configuration Files (go in root)
- `tsconfig.json` - TypeScript configuration
- `tsconfig.node.json` - Node TypeScript config
- `vite.config.ts` - Vite build tool config
- `tailwind.config.js` - Custom colors and theme
- `postcss.config.js` - PostCSS for Tailwind
- `.eslintrc.cjs` - Linting rules
- `package.json` - All dependencies
- `index.html` - HTML template
- `.gitignore` - Git ignore rules

### Documentation
- `QUICKSTART.md` - **START HERE** 👈
- `TYPESCRIPT-SETUP.md` - Detailed TypeScript guide
- `PROJECT-STRUCTURE.md` - Directory layout
- `SETUP.md` - Original setup guide

### Helper Scripts
- `setup.sh` - Automatic project setup

## 🚀 Quick Setup (3 Steps)

### Option A: Automatic (Recommended)

```bash
# 1. Run setup script
chmod +x setup.sh && ./setup.sh

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

### Option B: Manual

```bash
# 1. Create structure
mkdir -p src public

# 2. Move source files to src/
mv IdentiqLabs.tsx types.ts main.tsx Identiq-styles.css src/

# 3. Install and run
npm install
npm run dev
```

## 📁 Important: File Structure

The TypeScript configuration expects this structure:

```
Identiq-labs/
├── src/                        ← Source files HERE
│   ├── IdentiqLabs.tsx
│   ├── types.ts
│   ├── main.tsx
│   └── Identiq-styles.css
├── public/                     ← Static assets
├── index.html                  ← Root level
├── tsconfig.json               ← Root level
├── package.json                ← Root level
└── [other config files]        ← Root level
```

**Why?** The `tsconfig.json` has:
```json
"include": ["src"]
```

This tells TypeScript to look for source files in the `src/` directory.

## 🎨 Project Features

### Custom Color Palette
- **Primary:** Purple (#9333ea) & Violet (#8b5cf6)
- **Accent:** Amber (#fbbf24) & Gold (#f59e0b)
- **Background:** Deep Purple-Black (#0B0A0F)

### TypeScript Benefits
- Full type safety
- IntelliSense in VS Code
- Catch errors at compile time
- Self-documenting code

### Tailwind Classes
Reusable CSS classes in `Identiq-styles.css`:
- `.gradient-text-primary` - Hero gradient
- `.card-purple` / `.card-purple-hover` - Cards
- `.btn-primary` - Buttons
- `.input-primary` - Form inputs
- `.logo-gradient` - Logo styling

## 📝 Available Scripts

```bash
npm run dev          # Development server (http://localhost:5173)
npm run build        # Production build with type checking
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking
npm run lint         # Run ESLint
```

## 🔧 Customization

### Update Content
Edit `src/IdentiqLabs.tsx`:
- Line 82: Company name
- Lines 42-57: Engineering principles
- Lines 166-186: Metrics

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'Identiq': {
    purple: { /* your colors */ },
    // ...
  }
}
```

### Email Integration
Update `handleSubmit` in `IdentiqLabs.tsx`:
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

## 📚 Documentation

1. **QUICKSTART.md** - Start here for setup
2. **TYPESCRIPT-SETUP.md** - Deep dive into TypeScript
3. **PROJECT-STRUCTURE.md** - Directory organization
4. **SETUP.md** - Original detailed guide

## 🐛 Troubleshooting

### TypeScript can't find files
**Problem:** Error: Cannot find module './IdentiqLabs'

**Solution:** 
```bash
# Files must be in src/ directory
mv IdentiqLabs.tsx src/
mv types.ts src/
mv main.tsx src/
mv Identiq-styles.css src/
```

### Import errors
**Problem:** Module not found

**Solution:**
```bash
# Verify structure
ls src/  # Should show all source files
npm install  # Reinstall dependencies
```

### Build errors
**Problem:** Type errors during build

**Solution:**
```bash
npm run type-check  # Check types
npm run lint        # Check code quality
```

## 🎯 Next Steps

1. ✅ Set up project structure (`./setup.sh` or manual)
2. ✅ Install dependencies (`npm install`)
3. ✅ Start dev server (`npm run dev`)
4. 🎨 Customize content (edit `src/IdentiqLabs.tsx`)
5. 🎨 Adjust colors (edit `tailwind.config.js`)
6. 📧 Integrate email service
7. 🚀 Deploy to production

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output in `dist/` folder.

### Deploy To:
- **Vercel:** `vercel deploy`
- **Netlify:** Drag `dist/` folder
- **Cloudflare Pages:** Connect Git repo

## 📄 License

© 2024 Identiq Labs

## 💬 Support

Questions? Contact: hello@Identiq.io

---

**Made with TypeScript ❤️ React ⚛️ Tailwind 🎨**
