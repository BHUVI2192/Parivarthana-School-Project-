# Parivarthana School UI/UX Revamp Report

## Executive Summary

The presentation layer was re-engineered while preserving the existing React route structure, page order, factual content, images, forms, external links, and generated 360° tour. The work focused on replacing inherited Nicepage geometry with intentional containers, grid layouts, responsive breakpoints, readable typography, and institutional visual styling.

## Shared Design System

The site now uses a shared deep-green, cream, orange, and muted-text palette. Design tokens define the container maximum, spacing scale, typography families, radii, shadows, and motion easing. The global content container uses a fluid width with a 1,200px maximum and comfortable 24px desktop / 16px mobile side margins. Grid children receive `min-width: 0` to prevent long text from collapsing or forcing overflow.

The visual language is editorial and institutional rather than dashboard-like. Photography remains from the repository. Cards use restrained borders and shadows, while buttons use the existing orange accent for clear calls to action. Reduced-motion preferences are respected.

## Navigation and Footer

The header was rebuilt as a stable sticky navigation system with a logo, primary navigation, admission CTA, desktop dropdowns, and mobile navigation. About, Academics, and Student Corner dropdowns use React-controlled state. Desktop popups have no dead gap between parent and submenu and include a pointer-safe bridge. Mobile parent items reveal their subsections without closing the menu.

The footer uses an explicit four-column desktop grid for logo, contact details, quick links, and social links. Tablet and mobile layouts stack naturally without one-character wrapping.

## Page-by-Page Section Map

| Route | Preserved section sequence | Presentation treatment |
| --- | --- | --- |
| `/` | Hero, welcome, numbered features 1–5, campus highlights, leadership preview, contact CTA, footer | Full visual hero, feature grid, split campus CTA, four-card leadership grid |
| `/about-osnt` | Hero, five OSNT narrative sections, footer | Alternating image/story editorial sections; punctuation-only decoration removed from semantic headings |
| `/about-parivarthana` | Hero, core belief, mission/vision, objectives, footer | Editorial sections and responsive information cards |
| `/admissions` | Hero, admission form, application steps, supporting content, footer | Form-first hierarchy, readable steps, responsive fields and CTA |
| `/leadership` | Hero, chairman, managing director, managing trustee, treasurer, footer | Consistent biography/portrait panels with controlled image ratios |
| `/school` | Hero, primary/middle/high school cards, classes 1–8, classes 9–10, facilities, footer | Academic feature cards and readable curriculum panels |
| `/puc` | PUC hero, Science, image, Commerce, facilities, footer | Distinct content hero and equal three-track academic grid |
| `/campus-life` | Hero, boarding, facility heading, seven facilities, footer | Editorial hero, introduction, and image/text facility cards |
| `/gallery` | Hero, gallery image collection, footer | Responsive image grid with controlled crops |
| `/contact` | Contact form, careers, map, footer | Centered form card, careers split panel, full-width map |
| `/news-events` | Hero, event cards, footer | Consistent editorial cards and media treatment |
| `/analytics` | Dashboard content, footer | Functional dashboard surface kept separate from title-hero pages |
| `/search` | Search heading, query field, result list, footer | Utility layout with readable result hierarchy |
| `/360virtualtour` | Generated viewer runtime | Existing generated tour preserved and mounted through React route |

## Responsive Strategy

At desktop widths, content uses two- and three-column grids where the content supports them. At tablet widths, grids reduce to two columns or a split layout. At mobile widths, editorial sections become image-then-text stacks, cards become single-column flows, the footer stacks, and the navigation becomes a touch-friendly menu. Images use controlled object-fit and background positioning rather than arbitrary absolute placement.

## Accessibility Improvements

The revamp adds visible keyboard focus states, larger touch targets, readable contrast, explicit navigation behavior, meaningful image alt text where supplied by the source, and reduced-motion handling. Decorative punctuation headings on About OSNT were converted to aria-hidden visual markers so they no longer pollute the document outline.

## Preserved Integrations

The existing admission and contact form integrations, external portal links, map embed, gallery assets, video assets, social links, and generated 360° runtime remain in place. The tour route continues to expose the generated scenes, panorama assets, controls, hotspots, fullscreen behavior, and deep-link handoff.
