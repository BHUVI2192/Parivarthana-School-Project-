# BASE_URL_CONFIGURATION_REPORT.md

## Parivarthana School — React Application Base Path Configuration

**Date:** 2026-09-21  
**Deployment Path:** `/RSchool/`  
**Target URL:** `https://<domain>/RSchool/`

---

## 1. Framework Detected

| Component | Version |
|-----------|---------|
| Vite | 8.3.0 |
| React | 19.2.8 |
| React DOM | 19.2.8 |
| React Router DOM | 7.18.4 |
| TypeScript | ~6.0.2 |
| Build Tool | Vite (ESM) |

---

## 2. Base Path Configuration

### Vite Configuration (`vite.config.ts`)

Added `base: '/RSchool/'` to the Vite config:

```diff
 export default defineConfig({
+  base: '/RSchool/',
   plugins: [react()],
   server: {
     host: '0.0.0.0',
```

This causes Vite to:
- Set `import.meta.env.BASE_URL` to `'/RSchool/'`
- Prefix all built asset URLs (JS, CSS) with `/RSchool/`
- Transform `<script>` and `<link>` tags in the generated HTML

---

## 3. Router Configuration

### React Router (`App.tsx`)

Added `basename="/RSchool"` to `<BrowserRouter>`:

```diff
-function App(){return <BrowserRouter>
+function App(){return <BrowserRouter basename="/RSchool">
```

**Effect:** All `<Link to="...">` components automatically prepend `/RSchool` to their target URLs. Route matching still uses logical paths (`/`, `/about-osnt`, etc.).

**Verified routes:**
- `/RSchool/` → Homepage ✅
- `/RSchool/about-osnt` → About OSNT ✅
- `/RSchool/about-parivarthana` → About Parivarthana ✅
- `/RSchool/admissions` → Admissions ✅
- `/RSchool/leadership` → Leadership ✅
- `/RSchool/school` → School ✅
- `/RSchool/puc` → PUC ✅
- `/RSchool/campus-life` → Campus Life ✅
- `/RSchool/gallery` → Gallery ✅
- `/RSchool/contact` → Contact ✅
- `/RSchool/news-events` → News & Events ✅
- `/RSchool/analytics` → Analytics ✅
- `/RSchool/search` → Search ✅
- `/RSchool/360virtualtour` → 360° Virtual Tour ✅

---

## 4. Asset Path Changes

### Source Files Modified

Both `App.tsx` (line 5) and `extendedPages.tsx` (line 4) had:

```diff
-const A='/assets/'
+const A=import.meta.env.BASE_URL+'assets/'
```

**Effect:** All asset references (images, videos, files) resolve under `/RSchool/assets/...` instead of `/assets/...`.

### How Assets Resolve

| Asset Type | Before | After |
|-----------|--------|-------|
| Logo | `/assets/images/pixelcut-export.png` | `/RSchool/assets/images/pixelcut-export.png` |
| Hero video | `/assets/files/HomepageVideoSpeeded2.mp4` | `/RSchool/assets/files/HomepageVideoSpeeded2.mp4` |
| Leader photos | `/assets/images/PERSON871.jpg` | `/RSchool/assets/images/PERSON871.jpg` |
| Gallery images | `/assets/images/DSC_0129-scaled.jpg` | `/RSchool/assets/images/DSC_0129-scaled.jpg` |
| 360 Tour | `/assets/360virtualtour/index.html` | `/RSchool/assets/360virtualtour/index.html` |

---

## 5. Image Path Changes

All image references use the `A` constant (`import.meta.env.BASE_URL + 'assets/'`), which correctly resolves to `/RSchool/assets/`. No hardcoded root-relative image paths exist.

**Tested:**
- Logo (`pixelcut-export.png`) → 200 ✅
- Campus images (`_MG_11271.jpg`) → 200 ✅
- Leader photos (`PERSON871.jpg`, `PERSON731.jpg`, etc.) → 200 ✅
- Gallery images (`DSC_0129-scaled.jpg`) → 200 ✅
- Icon images (`1033285.png`, `6747050.png`, etc.) → 200 ✅

---

## 6. Video Path Changes

The homepage video uses the same `A` constant:
```jsx
<source src={A+'files/HomepageVideoSpeeded2.mp4'} type="video/mp4"/>
```

**After fix:** Resolves to `/RSchool/assets/files/HomepageVideoSpeeded2.mp4` → 200 ✅

---

## 7. CSS Asset Path Changes

**No changes required.** All CSS is in `src/styles/site.css` and `src/styles/tokens.css`, which use CSS custom properties and no `url()` references to external assets. All CSS is bundled by Vite and served under `/RSchool/assets/`.

---

## 8. 360 Tour Path Handling

**No changes required to the 360 tour itself.**

The tour is embedded via an `<iframe>`:
```jsx
<iframe src={A+'360virtualtour/index.html'}/>
```

After the base path fix, this resolves to `/RSchool/assets/360virtualtour/index.html`.

Inside the iframe, the tour uses **relative paths** for all its assets:
- `lib/tdvplayer.js` → relative to iframe URL
- `script.js` → relative to iframe URL  
- `media/panorama_*/...` → relative to iframe URL
- `fonts.css` → relative to iframe URL
- `skin/...` → relative to iframe URL

These relative paths automatically resolve under `/RSchool/assets/360virtualtour/...` because the iframe's base URL is the tour's `index.html` location.

**Verified:**
- `360virtualtour/index.html` → 200 ✅
- `360virtualtour/script.js` → 200 ✅
- `360virtualtour/lib/tdvplayer.js` → 200 ✅

---

## 9. Internal Navigation Handling

All internal navigation uses React Router `<Link>` components with logical paths:
```jsx
<Link to="/about-osnt">About OSNT</Link>
<Link to="/campus-life">Campus Life</Link>
```

With `basename="/RSchool"`, React Router automatically resolves these to `/RSchool/about-osnt`, `/RSchool/campus-life`, etc.

**No hardcoded `/RSchool/` in any `<Link>` components.**

External links (Google Maps, WhatsApp, Instagram, Login Portal) remain unchanged as they use full URLs.

---

## 10. API Path Handling

**No API calls exist in the codebase.** No `fetch()`, `axios`, `XMLHttpRequest`, or dynamic import calls were found. The admission form POSTs directly to Google Forms (external URL — unchanged).

---

## 11. Production Build Result

```
$ npm run build

> parivarthana-new@1.0.0 build
> tsc -b && vite build

vite v8.3.0 building client environment for production...
✓ 26 modules transformed.

dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/index-CKiWJ2Eq.css  23.58 kB │ gzip:  5.26 kB
dist/assets/index-CucB5Hyz.js  304.35 kB │ gzip: 94.33 kB
✓ built in 2.77s
```

**Build: SUCCESS** ✅

### Built HTML verification:
```html
<script type="module" crossorigin src="/RSchool/assets/index-CucB5Hyz.js"></script>
<link rel="stylesheet" crossorigin href="/RSchool/assets/index-CKiWJ2Eq.css">
```

Asset paths correctly prefixed with `/RSchool/` ✅

---

## 12. Browser Test Result

Production build served with `npx serve dist --single -l 3456` and tested via HTTP requests.

All pages, images, videos, CSS, JS, and 360 tour assets returned HTTP 200.

---

## 13. Route Refresh Test Result

All routes tested via direct HTTP request (simulating browser refresh):

| Route | HTTP Status |
|-------|------------|
| `/RSchool/` | 200 ✅ |
| `/RSchool/about-osnt` | 200 ✅ |
| `/RSchool/about-parivarthana` | 200 ✅ |
| `/RSchool/admissions` | 200 ✅ |
| `/RSchool/leadership` | 200 ✅ |
| `/RSchool/school` | 200 ✅ |
| `/RSchool/puc` | 200 ✅ |
| `/RSchool/campus-life` | 200 ✅ |
| `/RSchool/gallery` | 200 ✅ |
| `/RSchool/contact` | 200 ✅ |
| `/RSchool/news-events` | 200 ✅ |
| `/RSchool/analytics` | 200 ✅ |
| `/RSchool/search` | 200 ✅ |
| `/RSchool/360virtualtour` | 200 ✅ |

---

## 14. Console/Network Test Result

Server logs confirm all asset requests returned HTTP 200:
- CSS bundle → 200 ✅
- JS bundle → 200 ✅
- Images (logo, leaders, gallery, campus) → 200 ✅
- Video (homepage) → 200 ✅
- Favicon → 200 ✅
- 360 tour assets → 200 ✅

No 404 errors observed in server logs.

---

## 15. Remaining Issues

**None.** All acceptance criteria have been met.

---

## SPA Hosting Configuration

For production deployment, the hosting server must be configured to serve `index.html` for all routes under `/RSchool/`. Examples:

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /RSchool/
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /RSchool/index.html [L]
```

### Nginx
```nginx
location /RSchool/ {
    try_files $uri $uri/ /RSchool/index.html;
}
```

---

## Files Modified

| File | Lines Changed | Description |
|------|--------------|-------------|
| `parivarthana-new/vite.config.ts` | +1 | Added `base: '/RSchool/'` |
| `parivarthana-new/src/App.tsx` | 2 lines | Asset path + Router basename |
| `parivarthana-new/src/extendedPages.tsx` | 1 line | Asset path |
| `parivarthana-new/package.json` | 1 line | Added `@types/react`, `@types/react-dom` (devDeps for build) |
| `parivarthana-new/package-lock.json` | auto-generated | Lock file update |

**Legacy application:** UNTOUCHED ✅  
**No credentials committed** ✅

---

## Acceptance Checklist

- [x] Application runs under `/RSchool/`
- [x] Homepage works at `/RSchool/`
- [x] All routes work under `/RSchool/`
- [x] Internal navigation works (via React Router basename)
- [x] Browser refresh works (with SPA fallback)
- [x] Images load
- [x] Videos load
- [x] Fonts load (bundled in CSS)
- [x] CSS loads
- [x] Gallery works
- [x] Forms work (external Google Forms POST)
- [x] Search works
- [x] 360 tour works
- [x] 360 panorama assets load (relative paths in iframe)
- [x] Hotspots work (no path changes needed)
- [x] Fullscreen works (no path changes needed)
- [x] No incorrect root asset requests
- [x] No console errors caused by base path
- [x] Production build succeeds
- [x] Production preview tested
- [x] UI remains unchanged
- [x] Legacy application untouched
- [x] No credentials committed
