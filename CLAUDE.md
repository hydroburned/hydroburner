# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website for a Senior Product Designer, built with Vite and TypeScript. The project showcases design case studies and live projects with modern UI components and animations.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Environment Setup

The project requires a Gemini API key for certain features:
- Create `.env.local` file in the root directory
- Add `GEMINI_API_KEY=your_api_key_here`

## Architecture

### Tech Stack
- **Framework**: React 19.2.0 with TypeScript
- **Routing**: React Router DOM with HashRouter for GitHub Pages compatibility
- **Build Tool**: Vite with React plugin
- **Deployment**: GitHub Pages via gh-pages package

### Project Structure
```
├── components/           # Reusable UI components
│   ├── icons/           # SVG icon components
│   └── ...              # Core components (Header, Footer, etc.)
├── pages/               # Page components (HomePage, CaseStudyPage)
├── context/             # React context (ThemeContext)
├── data/                # Static data files (projects, skills, live-projects)
├── types.ts             # TypeScript type definitions
└── App.tsx              # Main application component
```

### Key Components
- **App.tsx**: Main router setup with HashRouter and scroll-to-top functionality
- **ThemeProvider**: Context for theme management (light/dark mode)
- **HomePage**: Landing page with project showcase
- **CaseStudyPage**: Dynamic case study pages based on project ID
- **Header/Footer**: Global navigation and footer components

### Data Management
- Projects data stored in `data/projects.ts`
- Live projects in `data/live-projects.ts`
- Skills data in `data/skills.ts`
- All data follows TypeScript interfaces defined in `types.ts`

### Routing
- Uses HashRouter for GitHub Pages compatibility
- Routes: `/` (home), `/project/:projectId` (case studies)
- All unknown routes redirect to home page

### Build Configuration
- **Base URL**: `/hydroburner/` for GitHub Pages deployment
- **Port**: Development server runs on port 3000
- **Path Alias**: `@/*` maps to project root
- **Environment Variables**: Gemini API key injected via Vite define

### TypeScript Configuration
- Target: ES2022 with modern features
- JSX: react-jsx transform
- Module resolution: bundler
- Experimental decorators enabled
- No emit (handled by Vite)

## Development Notes

- The project uses HashRouter instead of BrowserRouter for GitHub Pages compatibility
- Environment variables are injected through Vite's define feature
- All paths use the `@/` alias for imports relative to project root
- The build output goes to `dist/` directory
- Deployment automatically builds and pushes to `gh-pages` branch