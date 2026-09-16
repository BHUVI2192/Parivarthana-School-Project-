# Parivarthana School Final QA Report

## Verification Summary

The application was run in the live Vite development preview and tested through the browser across the homepage, internal pages, navigation, footer, forms, and the virtual-tour route. The production bundle was also built successfully and all key routes returned HTTP 200.

## Build and Route Results

| Check | Result |
| --- | --- |
| `npm run build` | PASS |
| `npm run lint` | PASS with 0 errors; generated/vendor files still emit existing warnings |
| Homepage route | HTTP 200 |
| About OSNT | HTTP 200 |
| About Parivarthana | HTTP 200 |
| Admissions | HTTP 200 |
| Leadership | HTTP 200 |
| School | HTTP 200 |
| PUC | HTTP 200 |
| Campus Life | HTTP 200 |
| Gallery | HTTP 200 |
| Contact | HTTP 200 |
| Analytics | HTTP 200 |
| News & Events | HTTP 200 |
| Search | HTTP 200 |
| 360° tour route | HTTP 200 |

## Browser QA

The live browser review confirmed the following: the footer no longer wraps contact and quick-link text into narrow vertical strips; navbar dropdowns open with a measured 0px parent-to-popup gap; About, Academics, and Student Corner subsection links are available; Leadership uses consistent biography/portrait panels; About OSNT no longer displays punctuation-only red marker columns; contact and analytics utility layouts remain readable; and the virtual-tour route is still available.

## Responsive QA Strategy

The CSS system defines desktop, tablet, and mobile compositions rather than merely shrinking desktop content. Desktop uses a 1,200px maximum container, tablet grids collapse to fewer tracks, and mobile layouts use 16px side margins, one-column editorial stacks, stacked footer sections, and touch-sized controls. The source was checked for horizontal overflow guards, grid child `min-width: 0`, controlled image sizing, and reduced-motion behavior.

A physical-device browser viewport pass was not available in the current browser connector; responsive behavior was therefore verified from the CSS breakpoints and route-level source/layout checks. This limitation is recorded rather than represented as a device screenshot pass.

## Accessibility QA

Visible focus styles are present for links, buttons, and form fields. Navigation subsection parents expose their children through keyboard/focus state and React-controlled click behavior. Decorative About OSNT markers are aria-hidden. Existing image alt text and form labels remain. The remaining generated Nicepage/vendor files produce lint warnings but no lint errors.

## 360° Tour QA

The generated tour engine and asset tree were preserved. The React route continues to serve the generated entry file and bootstrap script, including panorama assets, scene configuration, controls, hotspots, fullscreen support, deep links, and mobile runtime selection.

## Remaining Limitations

The generated legacy/vendor JavaScript files still produce linter warnings because they are preserved source assets. A physical-device viewport connector was not available for pixel-level tests at every requested width. No content or route was removed to address these limitations.


## Final Structural Overhaul Addendum

The follow-up overhaul added shared design tokens, a coherent 1,200px container, spacing tokens, global image containment, readable paragraph limits, semantic cleanup for decorative About OSNT markers, reduced-motion support, and a non-blocking homepage admission experience. The timed homepage admission popup was removed so it no longer interrupts navigation or obscures the first viewport; the dedicated admission route and form remain available.

The fresh production preview on port 4174 served `/`, `/leadership`, and `/360virtualtour` with HTTP 200 after the final build. The development route smoke test also returned HTTP 200 for every preserved route, the generated tour entry, and the generated tour bootstrap script.
