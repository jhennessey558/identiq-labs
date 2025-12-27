# TypeScript Setup Guide - Identiq Labs Landing Page

Complete TypeScript setup with React, Tailwind CSS, and all necessary configurations.

## 📦 What's Included

### Source Files
- `IdentiqLabs.tsx` - Main component with full TypeScript typing
- `types.ts` - Custom type definitions
- `main.tsx` - Application entry point
- `Identiq-styles.css` - Tailwind CSS with custom styles

### Configuration Files
- `tsconfig.json` - TypeScript configuration
- `tsconfig.node.json` - Node-specific TS config
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind customization
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.cjs` - ESLint rules for TypeScript
- `package.json` - All dependencies
- `index.html` - HTML template

## 🚀 Quick Start

### 1. Create Project Structure

```bash
mkdir Identiq-labs
cd Identiq-labs
```

Organize files like this:

```
Identiq-labs/
├── src/
│   ├── IdentiqLabs.tsx
│   ├── types.ts
│   ├── main.tsx
│   └── Identiq-styles.css
├── public/
├── index.html
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
└── package.json
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- **React & React DOM** - UI framework
- **Lucide React** - Icon library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **ESLint** - Code quality

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## 📝 TypeScript Features

### Type Safety Throughout

```typescript
// Mouse position tracking
const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

// Form events
const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  // Type-safe form handling
};

// Component props
const Icon: LucideIcon = principle.icon;
```

### Custom Types

All custom types are defined in `types.ts`:

```typescript
import { MousePosition, Principle, BetaSignup } from './types';
```

### Strict Type Checking

The project uses strict TypeScript settings:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- Full type inference

## 🎨 Tailwind Integration

### Using Custom Colors

```typescript
// Colors are fully typed through Tailwind
className="bg-Identiq-purple-500 text-Identiq-amber-400"
```

### Custom CSS Classes

All custom classes from `Identiq-styles.css` work seamlessly:
- `gradient-text-primary`
- `card-purple-hover`
- `btn-primary`
- `input-primary`

## 🔧 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Type checking without building
npm run type-check

# Linting
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

## 📊 Project Structure Explained

### `/src` Directory

**IdentiqLabs.tsx**
- Main component
- Fully typed with TypeScript
- Uses custom types from `types.ts`

**types.ts**
- Centralized type definitions
- Export/import across components
- Strongly typed interfaces

**main.tsx**
- Application entry point
- Renders root component
- Imports global CSS

**Identiq-styles.css**
- Tailwind directives
- Custom component classes
- Animation definitions

### Configuration Files

**tsconfig.json**
- Main TypeScript configuration
- Strict mode enabled
- React JSX support
- Path aliases (`@/*` for `./src/*`)

**vite.config.ts**
- Vite build configuration
- React plugin
- Path resolution
- CSS processing

**tailwind.config.js**
- Custom color palette
- Extended theme
- Animation keyframes

## 🎯 TypeScript Best Practices Used

### 1. Explicit Return Types

```typescript
const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  // Function body
};
```

### 2. Interface Definitions

```typescript
interface Principle {
  icon: LucideIcon;
  text: string;
}
```

### 3. Type Inference

```typescript
// TypeScript infers type from useState
const [email, setEmail] = useState<string>('');
```

### 4. Event Types

```typescript
const handleMouseMove = (e: MouseEvent): void => {
  setMousePos({ x: e.clientX, y: e.clientY });
};
```

## 🔐 Type-Safe Email Integration

Update the form submission with full typing:

```typescript
interface EmailResponse {
  success: boolean;
  message: string;
}

const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    const data: EmailResponse = await response.json();
    
    if (data.success) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
};
```

## 🐛 Troubleshooting

### Module Resolution Issues

If you see import errors, make sure:
1. `tsconfig.json` is at project root
2. `baseUrl` and `paths` are configured
3. File extensions are correct (`.tsx` not `.jsx`)

### Type Errors

Run type checking:
```bash
npm run type-check
```

### Tailwind Classes Not Working

Ensure:
1. `Identiq-styles.css` is imported in `main.tsx`
2. `tailwind.config.js` content paths include `.tsx` files
3. PostCSS config is present

## 📚 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🎨 Customization

### Adding New Types

Edit `types.ts`:
```typescript
export interface NewFeature {
  id: string;
  name: string;
}
```

### Extending Components

Create new typed components:
```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {text}
    </button>
  );
};
```

## 📄 License

© 2024 Identiq Labs

## 💬 Support

Contact: hello@Identiq.io
