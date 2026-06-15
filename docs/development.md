# Development Workflow

## Local Setup
1. `npm install`
2. `npm run dev`

## Adding Components
- **UI Components:** Reusable components like buttons or cards should be placed in `src/components/ui/`.
- **Layouts:** Application wrappers (Navbar, Footer) go in `src/components/layout/`.
- **Pages & Sections:** Specific screens go in `src/pages/`. For example, `src/pages/home/sections/` contains the logical sections that make up the home page.

## Naming Conventions
- All files must be named using `kebab-case.jsx` or `kebab-case.js`.
- React component functions should still be `PascalCase` internally.

## Imports
- Always use the `@/` path alias for absolute imports.
- E.g., `import Navbar from '@/components/layout/navbar';`
