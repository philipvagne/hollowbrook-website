# Hollowbrook Outdoor Living

A premium multi-page concept website for a fictional residential landscape design and outdoor living company.

The finished website will be displayed on a web-design business site to demonstrate visual design, frontend implementation, responsiveness, and overall polish to prospective clients.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router

## Routes

- `/`
- `/projects`
- `/services`
- `/about`
- `/faq`
- `/contact`

## Design Direction

Hollowbrook should feel:

- Calm
- Premium
- Warm
- Architectural
- Natural
- Professional
- Photography-led
- Timeless

See:

- `AGENTS.md` for implementation rules
- `DESIGN.md` for the visual system and approved homepage structure
- `CONTENT.md` for current content and placeholders
- `TODO.md` for the implementation plan

## Local Development

Once the project is initialized:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Initial Repository Setup

Recommended command:

```bash
npm create vite@latest . -- --template react-ts
```

Then install routing:

```bash
npm install react-router-dom
```

Set up Tailwind CSS using the current official Vite installation approach appropriate to the installed Tailwind version.

Do not rely on outdated Tailwind configuration instructions without checking the installed version.

## Intended Structure

A suitable starting structure:

```text
src/
├── app/
│   ├── App.tsx
│   └── router.tsx
├── assets/
│   ├── images/
│   └── brand/
├── components/
│   ├── layout/
│   ├── shared/
│   └── sections/
├── content/
├── pages/
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   ├── ServicesPage.tsx
│   ├── AboutPage.tsx
│   ├── FaqPage.tsx
│   └── ContactPage.tsx
├── styles/
├── main.tsx
└── index.css
```

This is guidance, not a requirement to overengineer the application.

## Current Scope

Version one is a polished static marketing website.

In scope:

- Six routes
- Responsive layouts
- Supplied photography
- Subtle interactions
- Accessible navigation
- Contact form UI
- High-quality visual implementation

Out of scope unless explicitly added later:

- CMS
- Authentication
- Database
- Admin area
- Customer accounts
- Live quoting
- Payment handling
- Blog
- Complex backend
- Individual project routes
- Developer case-study presentation
