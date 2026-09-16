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
- [ ] Local 360° viewer controls and scene navigation — not verifiable because the supplied repository contains no local tour implementation or panorama assets

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
- [ ] Full console-error audit in a browser session

## Remaining issue

The only unresolved source-level feature is the 360° tour implementation, which is absent from the supplied repository. The navigation now points to the corresponding external production destination instead of a broken local path.
