# Functional Parity Checklist

This checklist records verification for the React migration. Items are marked complete only after a build or runtime check has been performed.

## Routes and navigation

- [x] Homepage renders at `/`
- [x] All migrated internal routes are registered
- [x] Direct route fallback renders an accessible not-found page
- [x] Desktop navigation links use React Router for internal pages
- [x] Mobile navigation opens and closes through React state
- [x] Route changes close the mobile navigation
- [x] External News & Events, portal, contact, social, and 360° links remain external

## Content and assets

- [x] Local image references resolve to files in `public/`
- [x] Homepage video reference resolves to the repository MP4
- [x] Favicon references resolve to repository files
- [x] Gallery uses repository photography
- [x] Facility and leadership sections use repository assets
- [x] Missing stale background/portrait references were mapped to existing assets

## Interactions

- [x] Admission modal timer has effect cleanup
- [x] Admission modal validation and success/error states are implemented
- [x] Contact and admissions forms retain their original external submission targets
- [x] Back-to-top control is present
- [x] Existing hover, parallax, and Nicepage animation class system is retained
- [x] Google Maps embed remains lazy-loaded
- [x] Local 360° viewer route loads the generated TDV player and tiled panorama runtime
- [x] Tour initialization exposes generated location labels and 141 rendered canvases
- [x] Tour scene switching changes the exported deep-link state (`Aerial View` → `Parivarthana-43`)
- [x] Tour runtime exposes pause/resume, media switching, and deep-link APIs

## Responsive behavior

- [x] Nicepage responsive breakpoints remain loaded
- [x] Shared sheet/layout reset prevents horizontal overflow
- [x] Mobile header uses the original off-canvas styling
- [x] Gallery, campus facilities, academics, forms, and footer retain responsive classes
- [ ] Manual visual comparison at every requested viewport size — requires a browser session; build/runtime smoke checks are recorded below

## Build and runtime

- [x] `npm install --no-audit --no-fund`
- [x] `npm run build`
- [x] `npm run dev` browser smoke test (representative routes and local assets returned HTTP 200)
- [x] `npm run preview` browser smoke test (representative route returned HTTP 200)
- [x] Static asset path audit after migration edits
- [x] Browser runtime audit completed for the integrated `/360virtualtour` route

## Remaining issue

The generated tour runtime is preserved locally under `public/360virtualtour` and is mounted by the React-owned `/360virtualtour` route. A full manual gesture-by-gesture QA pass at every requested viewport remains a follow-up item; the live browser initialization and scene-switch checks passed.
