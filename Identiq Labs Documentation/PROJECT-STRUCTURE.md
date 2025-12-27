# Project Structure

Your project should be organized like this:

```
Identiq-labs/
├── src/
│   ├── IdentiqLabs.tsx          # Main component
│   ├── types.ts                  # Type definitions
│   ├── main.tsx                  # Entry point
│   └── Identiq-styles.css       # Tailwind CSS
├── public/
│   └── (static assets)
├── index.html                     # HTML template
├── tsconfig.json                  # TypeScript config
├── tsconfig.node.json             # Node TS config
├── vite.config.ts                 # Vite config
├── tailwind.config.js             # Tailwind config
├── postcss.config.js              # PostCSS config
├── .eslintrc.cjs                  # ESLint config
├── package.json                   # Dependencies
├── .gitignore                     # Git ignore
└── README.md                      # Documentation
```

## Setup Steps

### 1. Create the directory structure:

```bash
mkdir -p Identiq-labs/src
mkdir -p Identiq-labs/public
cd Identiq-labs
```

### 2. Place files in correct locations:

**Root directory files:**
- `index.html`
- `package.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
- `tailwind.config.js`
- `postcss.config.js`
- `.eslintrc.cjs`
- `.gitignore`

**`src/` directory files:**
- `IdentiqLabs.tsx`
- `types.ts`
- `main.tsx`
- `Identiq-styles.css`

### 3. Install dependencies:

```bash
npm install
```

### 4. Run development server:

```bash
npm run dev
```

## Why This Structure?

- **`src/`** - All TypeScript/React source code
- **`public/`** - Static assets (images, fonts, etc.)
- **Root** - Configuration files
- **`index.html`** - Vite entry point (must be at root)

This structure matches what the TypeScript configs expect (`"include": ["src"]`).
