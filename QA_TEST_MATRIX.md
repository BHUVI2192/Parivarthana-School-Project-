# Final QA Test Matrix

This matrix records only tests actually performed. **PASS** means the behavior was exercised and verified. **BLOCKED** means the behavior may be implemented, but this browser automation session could not physically reproduce the required test. **NOT APPLICABLE** means the test was intentionally not performed because it would create a real external record.

## Routes

| Route | Direct navigation / response | Browser content check | Status | Evidence |
| --- | --- | --- | --- | --- |
| `/` | HTTP 200 | Homepage rendered with header, hero, CTA, images, footer | PASS | Public dev browser + DOM/resource audit |
| `/about-osnt` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/about-parivarthana` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/admissions` | HTTP 200 | Form, header, footer, and content rendered | PASS | Browser route check; required fields and action inspected |
| `/leadership` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/school` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/puc` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/campus-life` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/gallery` | HTTP 200 | Gallery rendered; all 21 images loaded; no horizontal overflow | PASS | Browser image audit found and fixed one stale path, then retested |
| `/contact` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/analytics` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/news-events` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/search` | HTTP 200 | Not separately rendered in browser this pass | BLOCKED | Direct HTTP route check passed; individual visual pass not performed |
| `/360virtualtour` | HTTP 200 | Generated viewer initialized and rendered | PASS | Browser runtime test on development and production preview |
| `/invalid-test-route` | HTTP 200 | SPA fallback response verified | PASS | Direct HTTP route check passed; route component is registered |

## Desktop viewport checks

The browser session provided a 1280px-wide viewport with a height different from the requested 800px/900px/1080px heights. Exact requested viewport results are therefore not marked PASS.

| Viewport | Status | Evidence |
| --- | --- | --- |
| 1920×1080 | BLOCKED | Exact viewport not available in this browser session |
| 1440×900 | BLOCKED | Exact viewport not available in this browser session |
| 1280×800 | BLOCKED | Width matched, height did not match the requested viewport |
| 1024×768 | BLOCKED | Exact viewport not available in this browser session |

## Tablet viewport checks

| Viewport | Status | Evidence |
| --- | --- | --- |
| 768×1024 | BLOCKED | Physical viewport resize not available in this browser session |
| 1024×768 | BLOCKED | Exact viewport test not performed |

## Mobile viewport checks

| Viewport | Status | Evidence |
| --- | --- | --- |
| 480×800 | BLOCKED | Physical viewport resize and touch input not available |
| 390×844 | BLOCKED | Physical viewport resize and touch input not available |
| 360×800 | BLOCKED | Physical viewport resize and touch input not available |

No mobile gesture test is marked PASS. Touch swipes, pinch zoom, orientation changes, and mobile fullscreen were not physically reproducible in this session.

## Standard site behavior

| Test | Status | Evidence |
| --- | --- | --- |
| Header renders | PASS | Homepage, gallery, admissions, and tour browser views |
| Header internal links use React Router | PASS | Source and rendered navigation inspection |
| Mobile menu state implementation | PASS | React state and click-boundary close behavior inspected; exact mobile viewport blocked |
| Hero video path | PASS | Homepage rendered and local asset path present |
| Gallery image loading | PASS | 21/21 images loaded after fixing stale first-image path |
| Gallery overflow | PASS | `scrollWidth` 1265px < 1280px viewport in browser |
| Admission form required validation | PASS | `checkValidity()` false when empty; required fields were name/email/contact/course |
| Admission form submission | NOT APPLICABLE | Not submitted to Google Forms to avoid creating a real external record |
| Contact form submission | NOT APPLICABLE | Not submitted to external service |
| Search interaction | BLOCKED | Direct route response verified; live filter interaction not separately exercised |
| Footer rendering | PASS | Homepage, gallery, and admissions browser content included footer links |
| Browser back/forward | BLOCKED | No dedicated browser history control was available in this session |
| Direct URL navigation | PASS | All listed paths returned the SPA shell; representative direct routes rendered |

## 360° desktop viewer

| Interaction | Implemented | Tested | Status | Evidence |
| --- | --- | --- | --- | --- |
| Panorama initialization | YES | YES | PASS | Generated runtime loaded in dev and preview |
| Initial scene | YES | YES | PASS | `Aerial View` rendered with tiled panorama |
| Scene/location playlist | YES | YES | PASS | Location labels rendered; Office clicked successfully |
| Scene switching | YES | YES | PASS | Browser click changed rendered scene to Office |
| Mouse drag | YES | YES | PASS | Simulated rendered-canvas mouse drag changed exported yaw |
| Mouse drag left/right/up/down separately | YES | PARTIAL | BLOCKED | One combined drag was exercised; four-direction matrix not completed |
| Zoom in/out | YES | NO | BLOCKED | Wheel event was not a reliable isolated FOV test in this runtime |
| Rotation control | YES | NO | BLOCKED | Dedicated control not manually clicked |
| Mute/unmute | YES | NO | BLOCKED | Dedicated control not manually clicked |
| Fullscreen enter/exit | YES | NO | BLOCKED | Browser fullscreen permission/action not exercised |
| Every visible hotspot | YES | NO | BLOCKED | Generated hotspot configuration loaded; exhaustive hotspot pass not completed |
| Every available scene/location | YES | NO | BLOCKED | Office and initial scene tested; all locations not individually visited |
| Navigation arrows | YES | NO | BLOCKED | Exhaustive arrow pass not completed |
| Overlay controls | YES | NO | BLOCKED | Exhaustive overlay pass not completed |
| Deep-link media state | YES | YES | PASS | `/360virtualtour#media-name=Office...` opened Office |
| Deep-link camera state | YES | PARTIAL | BLOCKED | Media and pitch loaded; exact yaw normalization differed after runtime initialization |
| Browser refresh | YES | YES | PASS | Direct deep-link route reloaded and initialized |
| Representative panorama tile | YES | YES | PASS | HTTP 200 in dev and production preview |
| Generated runtime assets | YES | YES | PASS | `index.html`, `script.js`, `tdvplayer.js`, and media paths served |

## 360° mobile viewer

| Interaction | Implemented | Tested | Status | Evidence |
| --- | --- | --- | --- | --- |
| Mobile panorama initialization | YES | NO | BLOCKED | Mobile viewport unavailable |
| Touch swipe left/right/up/down | YES | NO | BLOCKED | Physical touch gestures unavailable |
| Pinch zoom | YES | NO | BLOCKED | Physical multi-touch unavailable |
| Hotspot tap | YES | NO | BLOCKED | Mobile viewport/touch unavailable |
| Mobile scene switching | YES | NO | BLOCKED | Mobile viewport unavailable |
| Mobile playlist | YES | NO | BLOCKED | Mobile viewport unavailable |
| Mobile fullscreen | YES | NO | BLOCKED | Mobile viewport unavailable |
| Mobile rotation/mute controls | YES | NO | BLOCKED | Mobile viewport unavailable |
| Portrait/landscape behavior | YES | NO | BLOCKED | Orientation control unavailable |
| UI scaling/clipping | YES | NO | BLOCKED | Exact mobile viewport unavailable |
| Mobile horizontal overflow | YES | NO | BLOCKED | Exact mobile viewport unavailable |

## Network and console audit

| Area | Status | Evidence |
| --- | --- | --- |
| Homepage same-origin image audit | PASS | `badImageCount: 0`; no horizontal overflow in browser |
| Gallery image audit | PASS | Found one missing image, fixed it, then retest returned `badImageCount: 0` |
| Tour entry files | PASS | `/360virtualtour/index.html`, `script.js`, and `lib/tdvplayer.js` returned HTTP 200 |
| Representative panorama tile | PASS | WebP tile returned HTTP 200 in dev and preview |
| Generated tour runtime | PASS | 141 canvases and initialized tour observed in dev and preview |
| Migration-caused browser runtime error | PASS | No migration-caused runtime error observed during exercised routes |
| Generated/vendor warnings | PASS with documented exclusion | Generated TDV tree is excluded from lint because it is preserved third-party output |
| React source lint | PASS | `npx oxlint src`: 0 warnings, 0 errors |
| Whole-project lint | PASS with warnings | 0 errors; 6,217 warnings from existing/vendor files, including Nicepage and intlTelInput |

## Production verification

| Test | Status | Evidence |
| --- | --- | --- |
| `npm install --no-audit --no-fund` | PASS | Completed before final QA |
| `npm run dev` | PASS | Live route and asset checks returned HTTP 200 |
| `npm run build` | PASS | TypeScript and Vite build completed |
| `npm run preview` | PASS | Preview homepage, gallery, tour, entry script, and tile returned HTTP 200 |
| Preview browser tour initialization | PASS | 141 canvases; initialized tour; exported Aerial View state |
| Dev watcher stability | PASS | `public/360virtualtour/**` remains excluded from Vite watching |

## Fixes made during final QA

1. Replaced the missing gallery path `WhatsAppImage2024-07-22at8.41.01PM.jpeg` with the existing repository asset `WhatsAppImage2024-07-22at8.40.08PM.jpeg`.
2. Removed the migration-owned header `set-state-in-effect` warning by closing the mobile menu from its click boundary rather than from a route-change effect.
3. Excluded only the unchanged generated TDV tour tree from oxlint using `.eslintignore`; migrated source lint now reports zero warnings and zero errors.
4. Changed the homepage tour CTA from the external production URL to the React `/360virtualtour` route.
5. Forwarded the React route hash into the generated tour iframe so supported media/camera deep links can be opened through `/360virtualtour`.

## Final QA conclusion

The application builds and runs, all route shell responses pass, the gallery regression found during browser testing is fixed, the React source is cleanly linted, and the generated tour works in development and production preview. Exact responsive viewport, mobile gesture, fullscreen, exhaustive hotspot, and every-scene tests remain **BLOCKED** because this session did not provide the required physical viewport/gesture/fullscreen controls. They are not marked PASS.


## UI/UX revamp verification addendum

| Area | Status | Evidence |
| --- | --- | --- |
| Homepage hero heading alignment | PASS | Legacy 318px width collision removed; measured 1000px centered heading at 1280px |
| Hero CTA contrast and size | PASS | Orange rounded CTA with visible padding, hover, focus, and active states |
| Numbered feature grouping | PASS | Two-card row plus three-card row; cards measured full grid tracks with no overflow |
| Tour Our Campus overlap | PASS | Deliberate 1140×360 split card; text/CTA left and existing portrait right |
| Campus supporting cards | PASS | Three equal aligned cards below the tour CTA |
| Leadership cards | PASS | Four equal 244×502 cards with consistent image crop and actions |
| Header order | PASS | Logo left, navigation after logo, admissions action at edge |
| Admissions form alignment | PASS | Two 555px columns; form width 419px inside right panel |
| Admissions CTA contrast | PASS | Submit button uses brand orange with white text |
| Gallery alignment | PASS | Three-column desktop grid, two-column tablet CSS, one-column mobile CSS; 21 images loaded |
| Reduced motion | PASS | `prefers-reduced-motion` rules added |
| Exact mobile visual pass | BLOCKED | Browser session did not expose physical viewport/touch controls |


## All-pages visual audit addendum

| Route family | Status | Verified correction |
| --- | --- | --- |
| About OSNT | PASS | Hero title centered; five repeated story sections now use balanced marker/image/text rhythm |
| About Parivarthana | PASS | Hero title centered; core belief and objective content receive editorial card/grid treatment |
| School | PASS | Hero cards aligned in three columns; curriculum panels restored to readable equal-width cards |
| PUC | PASS | Content hero separated from title-only pages; Science, image, and Commerce options align equally |
| Campus Life | PASS | Dedicated hero, boarding introduction, facility heading, and seven image-text facility cards |
| Contact | PASS | Centered form card, careers split panel, CTA hierarchy, and full-width map block |
| Leadership | PASS | Four biography sections use balanced text/portrait panels with no blank column |
| Analytics | PASS | Dashboard remains a functional dashboard instead of inheriting title-hero styling |
| Search | PASS | Functional search layout preserved; heading contrast and result text hierarchy corrected |
| News & Events | PASS | Shared title hero and three-card news grid with consistent media crop |
| Tablet/mobile CSS | PASS (CSS verified) | Internal grids stack at max-width 900px and single-column at 600px |
| Exact physical mobile browser pass | BLOCKED | Current browser session did not expose a physical touch viewport control |


## Footer and navigation correction addendum

| Area | Status | Evidence |
| --- | --- | --- |
| Footer desktop grid | PASS | Explicit four-column grid; contact and quick links render with normal horizontal text flow |
| Footer responsive layout | PASS (CSS verified) | Two-column tablet layout and single-column mobile layout added |
| About dropdown | PASS | React-controlled open state; 225px usable submenu; About OSNT, About Parivarthana, Leadership |
| Academics dropdown | PASS | React-controlled open state; School and PUC links visible |
| Student Corner dropdown | PASS | React-controlled open state; Life at Parivarthana, 360° Tour, Gallery, Login Portal |
| About OSNT subsection layout | PASS | Removed punctuation-only marker columns and restored full-width image/story rhythm |
| Leadership page | PASS | Hero plus balanced biography/portrait panels rechecked live |
| Full route smoke test | PASS | All preserved routes returned HTTP 200 after final build |


## Navbar hover-gap correction

| Area | Status | Evidence |
| --- | --- | --- |
| Desktop submenu transition | PASS | Popup top equals parent bottom with measured gap of 0px |
| Pointer-safe submenu bridge | PASS | Added a 12px invisible bridge and removed the previous 10px top offset |
| Dropdown usability | PASS | React-controlled open state remains active while moving into submenu links |
| Post-correction build | PASS | Lint completed with 0 errors and production build completed successfully |
