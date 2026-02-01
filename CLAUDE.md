# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a **Vertio** marketing website - a digital health compliance platform for Australia's healthcare ecosystem. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and Framer Motion.

### Project Structure

- `src/app/page.tsx` - Single-page landing site composing all sections
- `src/components/sections/` - Page sections (Hero, ProblemStatement, Features, WhyVertio, Testimonials, Contact)
- `src/components/layout/` - Header and Footer
- `src/components/ui/` - Reusable UI primitives (Button, Card)
- `src/lib/animations.ts` - Framer Motion animation variants (fadeInUp, staggerContainer, etc.)
- `src/lib/utils.ts` - `cn()` utility for merging Tailwind classes

### Design System

Dark theme defined in `globals.css` with CSS variables:
- **Primary**: `#00D4AA` (teal/mint green)
- **Background**: `#0a0a0a` (near black)
- **Card**: `#111111`
- **Accents**: orange `#FB4A02`, purple `#AC55FF`, cyan `#00C2FF`

Use Tailwind classes with these colors: `bg-primary`, `text-foreground`, `bg-card`, `border-border`, `text-text-secondary`, `text-text-muted`

### Animation Patterns

Import from `@/lib/animations` and use with Framer Motion:
```tsx
import { staggerContainer, staggerItem } from "@/lib/animations";

<motion.div variants={staggerContainer} initial="initial" whileInView="animate">
  <motion.div variants={staggerItem}>...</motion.div>
</motion.div>
```

### Path Alias

Use `@/*` to import from `src/*` (configured in tsconfig.json).

## Deployment

This site is deployed on **Vercel** and auto-deploys when pushing to the `main` branch.
- Production URL: https://vertio.com.au
- GitHub repo: VertioAUS/VertioWebsite
