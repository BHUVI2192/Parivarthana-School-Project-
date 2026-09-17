# Parivarthana School Website

A professional React application for **Parivarthana Residential School & PU College**. The active frontend is maintained in `parivarthana-new/`, with the original migrated React implementation removed from the repository. The project preserves the school’s original content, imagery, videos, navigation structure, and interactive 360° virtual tour.

## Active application

The new application is a React 19 + TypeScript + Vite single-page application using React Router. It is designed as an institutional, responsive website rather than a generic template or dashboard. The interface uses a deep green, warm cream, and orange visual system with responsive CSS Grid and Flexbox layouts.

### Directory structure

```text
parivarthana-school/
├── parivarthana-new/       # Active React application
│   ├── public/
│   │   └── assets/          # Images, video files, and asset references
│   ├── src/
│   │   ├── App.tsx         # Shared shell, routes, and page sections
│   │   ├── main.tsx        # React entry point
│   │   └── styles/         # Design tokens and responsive site styles
│   ├── package.json
│   └── vite.config.ts
├── public/                 # Preserved original public assets
│   └── 360virtualtour/     # Tracked 3DVista/TDV virtual-tour output
└── README.md
```

The new application references the preserved root virtual-tour assets through `parivarthana-new/public/assets/360virtualtour`. This avoids duplicating the approximately 479 MB generated tour tree while keeping the route functional in the repository workspace.

## Requirements

- Node.js 20 or later
- npm
- Git

## Local development

Install dependencies and start the Vite development server:

```bash
cd parivarthana-new
npm install
npm run dev -- --host 0.0.0.0 --port 5180
```

The application is then available at `http://localhost:5180/`.

For a production-style local preview:

```bash
cd parivarthana-new
npm run build
npm run preview -- --host 0.0.0.0 --port 5180
```

## Validation commands

Run the TypeScript validation and production build from the application directory:

```bash
cd parivarthana-new
npm run lint
npm run build
```

`npm run lint` runs `tsc --noEmit`. `npm run build` runs the TypeScript project build followed by `vite build`.

## Available routes

| Route | Purpose |
|---|---|
| `/` | Homepage with video hero, institutional overview, learning experience cards, virtual-tour callout, and leadership cards |
| `/about-osnt` | About the Oom Shreenikethana Trust |
| `/about-parivarthana` | Institution overview, core beliefs, mission, vision, and strategic objectives |
| `/leadership` | Leadership profiles |
| `/school` | School academic programs and infrastructure |
| `/puc` | PUC pathways and campus facilities |
| `/campus-life` | Residential campus life and facilities |
| `/gallery` | Campus and student-life image gallery |
| `/admissions` | Admission process and enquiry form |
| `/contact` | Contact information, enquiry form, and map |
| `/news-events` | News and events route |
| `/analytics` | Analytics route |
| `/search` | Search route |
| `/360virtualtour` | Interactive 360° campus tour |

The **360° Virtual Tour** is also available from the **Student Corner** navigation submenu.

## Design and accessibility notes

The active UI uses semantic page sections, one primary H1 per page, keyboard-accessible navigation buttons and links, responsive layouts from mobile through large desktop widths, visible focus styling for form controls, descriptive image alt text, and reduced-motion support. The navigation dropdowns are controlled buttons so submenu items remain accessible on desktop and mobile.

The homepage feature cards use a consistent grid and internal vertical rhythm: number, heading, and description. Leadership cards use equal-height responsive columns with consistent image cropping and content alignment.

## Asset handling

The site uses the existing school imagery and video content. Images and videos for the new app are located under `parivarthana-new/public/assets/`. The generated 360° tour remains in the root `public/360virtualtour/` directory and is intentionally not duplicated. Do not remove or rename that directory without updating the new app’s tour asset reference.

The Vite configuration excludes the generated virtual-tour tree from the development file watcher. This is required because the tour contains tens of thousands of generated files and watching it directly can exceed the operating system’s file-watcher limit.

## Repository history

The active application was introduced in the `parivarthana-new/` directory. The superseded React migration and its root-level build configuration were removed after the new app was verified. The original public assets and 360° tour were retained for use by the active application.

## Git workflow

From the repository root:

```bash
git status
git add -A
git commit -m "Describe the change"
git push origin main
```

Before deleting or relocating preserved assets, verify that the new application’s routes and asset paths still resolve successfully.
