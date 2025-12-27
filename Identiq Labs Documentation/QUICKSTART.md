# Quick Start Guide

## Option 1: Automatic Setup (Recommended)

```bash
# Make setup script executable
chmod +x setup.sh

# Run setup
./setup.sh

# Install dependencies
npm install

# Start development server
npm run dev
```

## Option 2: Manual Setup

### 1. Create Project Directory

```bash
mkdir Identiq-labs
cd Identiq-labs
```

### 2. Create Directory Structure

```bash
mkdir src
mkdir public
```

### 3. Place Files

**In the root directory:**
```bash
# Copy these files to root:
- index.html
- package.json
- tsconfig.json
- tsconfig.node.json
- vite.config.ts
- tailwind.config.js
- postcss.config.js
- .eslintrc.cjs
- .gitignore
```

**In the `src/` directory:**
```bash
# Copy these files to src/:
- IdentiqLabs.tsx
- types.ts
- main.tsx
- Identiq-styles.css
```

### 4. Install Dependencies

```bash
npm install
```

This installs:
- react ^18.2.0
- react-dom ^18.2.0
- lucide-react ^0.294.0
- typescript ^5.3.3
- tailwindcss ^3.4.0
- vite ^5.0.8
- All necessary @types packages

### 5. Start Development

```bash
npm run dev
```

Visit http://localhost:5173

## Project Structure Result

After setup, your structure should look like:

```
Identiq-labs/
├── src/
│   ├── IdentiqLabs.tsx       ✅ Main component
│   ├── types.ts               ✅ Type definitions
│   ├── main.tsx               ✅ Entry point
│   └── Identiq-styles.css    ✅ Tailwind CSS
├── public/
│   └── (empty for now)
├── index.html                  ✅ HTML template
├── tsconfig.json               ✅ TypeScript config
├── tsconfig.node.json          ✅ Node TS config
├── vite.config.ts              ✅ Vite config
├── tailwind.config.js          ✅ Tailwind config
├── postcss.config.js           ✅ PostCSS config
├── .eslintrc.cjs               ✅ ESLint config
├── package.json                ✅ Dependencies
└── .gitignore                  ✅ Git ignore
```

## Why This Structure?

1. **`tsconfig.json` expects `src/` directory**
   - Line: `"include": ["src"]`
   - This tells TypeScript to look in `src/` for all source files

2. **Vite expects `index.html` at root**
   - Vite uses `index.html` as entry point
   - The `<script>` tag points to `/src/main.tsx`

3. **Standard React/TS project structure**
   - Source code in `src/`
   - Static assets in `public/`
   - Config files at root

## Verifying Setup

Check TypeScript compilation:
```bash
npm run type-check
```

Should output: "No errors found"

## Common Issues

### Issue: TypeScript can't find source files

**Problem:** `"include": ["src"]` in tsconfig.json but files are at root

**Solution:** Move all `.tsx`, `.ts`, and `.css` files to `src/` directory

### Issue: Import errors for CSS

**Problem:** CSS not found

**Solution:** Ensure `Identiq-styles.css` is in `src/` and imported in `main.tsx`

### Issue: Module resolution errors

**Problem:** Can't resolve imports

**Solution:** 
1. Check `baseUrl` in tsconfig.json is `"."`
2. Check files are in `src/` directory
3. Run `npm install` again

## Scripts Reference

```bash
npm run dev          # Start dev server with HMR
npm run build        # Build for production (includes type check)
npm run preview      # Preview production build
npm run type-check   # Check types without building
npm run lint         # Run ESLint
```

## Next Steps

1. ✅ Set up project structure
2. ✅ Install dependencies
3. ✅ Run dev server
4. 🎯 Integrate email service (see TYPESCRIPT-SETUP.md)
5. 🎨 Customize colors (edit tailwind.config.js)
6. 📝 Update content (edit IdentiqLabs.tsx)

## Support

For issues or questions: hello@Identiq.io
