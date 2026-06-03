# PROJECT_STRUCTURE.md

# Project Overview

This project is built using:

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Vercel Deployment

The project is mainly a static website with reusable components and scalable structure.

---

# Folder Structure

Current project uses root-level application folders:

```txt
app/                    # App router pages
  page.tsx
  about/
    page.tsx
  layout.tsx

components/             # Shared UI components
  common/
    CourseCard.tsx
    OverviewCard.tsx
    TeamMemberCard.tsx
  layout/
    SiteHeader.tsx
    SiteFooter.tsx
  sections/
    AboutHeroSection.tsx
    CourseSection.tsx
    GoalsSection.tsx
    HomeHeroSection.tsx
    TeamSection.tsx

data/                   # Static content and shared site data
  site.ts
  home.ts
  about.ts

documents/              # Project documentation
```

Reference scalable structure:

```txt
src/
├── app/                # App router pages
│   ├── page.tsx
│   ├── about/
│   ├── contact/
│   └── layout.tsx
│
├── components/         # Shared UI components
│   ├── common/
│   ├── layout/
│   └── sections/
│
├── data/               # Static content and mock data
│
├── hooks/              # Custom React hooks
│
├── lib/                # Utility functions
│
├── services/           # API or external service logic
│
├── styles/             # Global styles
│
└── types/              # TypeScript types
```

---

# Rules

## Components

- Reusable UI goes into `components/common`
- Layout components go into `components/layout`
- Homepage sections go into `components/sections`

## Pages

- Every page must use App Router
- Each route folder must contain `page.tsx`

Example:

```txt
src/app/about/page.tsx
```

---

# Styling Rules

- Use Tailwind CSS only
- Avoid inline styles
- Use responsive classes

Example:

```tsx
className = "px-4 md:px-8 lg:px-12";
```

---

# Naming Convention

## Components

Use PascalCase:

```txt
HeroBanner.tsx
FeatureCard.tsx
```

## Hooks

Use camelCase with `use` prefix:

```txt
useTheme.ts
useNavbar.ts
```

## Utility Functions

```txt
formatDate.ts
generateSlug.ts
```

---

# Import Rules

Use alias import:

```tsx
import Header from "@/components/layout/Header";
```

Avoid:

```tsx
../../../components
```

---

# File Creation Rules

When creating new files:

1. Place the file in the correct folder
2. Update this document if:
   - new folder is added
   - architecture changes
   - naming rules change
   - new core feature is introduced

---

# Structure Update Instructions

Whenever a new component, hook, service, or page is added:

- Update the corresponding section in this file
- Keep folder tree synchronized
- Remove unused structure descriptions

Example:

If adding:

```txt
src/components/forms/LoginForm.tsx
```

Then update:

```txt
components/
├── forms/
```

---

# Code Standards

- Prefer functional components
- Use TypeScript types
- Keep components small and reusable
- Separate UI and logic when possible

---

# Deployment

Deployment platform:

- Vercel

Production branch:

```txt
main
```

Development branch:

```txt
dev
```

---

# Git Workflow

## Feature Branch

```txt
feature/navbar
feature/footer
```

## Commit Style

```txt
feat: add hero section
fix: responsive navbar
refactor: restructure components
```

---

# Notes For AI Assistant

When modifying this project:

- Preserve folder structure consistency
- Reuse existing components first
- Avoid duplicate components
- Update PROJECT_STRUCTURE.md when architecture changes
- Keep code scalable and clean
