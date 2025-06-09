# Portfolio Website Project

## Project Overview
Set up the foundational structure and scaffolding for a personal portfolio website built with React and TypeScript. Focus on creating the component architecture, file organization, and basic boilerplate - NOT a complete website.

## Tech Stack
- **Frontend**: React 18, TypeScript
- **Routing**: React Router DOM
- **Styling**: Vanilla CSS/CSS Modules (NO Tailwind CSS)
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## Project Structure
```
src/
├── components/
│   ├── Header/
│   ├── Intro/
│   ├── Projects/
│   ├── Skills/
│   └── shared/
├── styles/
├── types/
├── data/
└── assets/
```

## What to Create
**STRUCTURE ONLY** - Create the project scaffolding, component files, and basic setup:

### File Structure to Generate
```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Intro/
│   │   ├── Intro.tsx
│   │   └── Intro.module.css
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Projects.module.css
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   └── Skills.module.css
│   └── Layout/
│       ├── Layout.tsx
│       └── Layout.module.css
├── types/
│   └── index.ts
├── data/
│   └── projects.ts
├── styles/
│   ├── globals.css
│   └── variables.css
└── App.tsx
```

### Component Setup Requirements
- Create empty/skeleton TypeScript components with proper exports
- Set up basic TypeScript interfaces in types/index.ts
- Create empty CSS module files for each component
- Set up React Router structure in App.tsx
- Create placeholder data files with proper TypeScript types
- **DO NOT** fill in actual content - just create the structure

## TypeScript Interfaces Needed
Create these basic type definitions in `src/types/index.ts`:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  deployedLink?: string;
  repoLink?: string;
  duration: string;
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}
```

## Component Structure Requirements
Each component should:
- Be a functional TypeScript component with proper typing
- Export as default
- Have a corresponding CSS module file
- Include basic JSX structure with semantic HTML
- Have placeholder content/comments indicating what goes where

## Routing Setup
Set up React Router in App.tsx with:
- Routes for smooth scrolling to sections (using hash routing or scroll behavior)
- Basic layout component that wraps all sections
- Navigation structure ready for implementation