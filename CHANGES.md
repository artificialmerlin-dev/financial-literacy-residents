# Changes from Site Evaluation (2026-04-08)

Based on the comprehensive evaluation in `SITE_EVALUATION.md`, the following triage decisions were made and changes implemented.

## Implemented

### Critical (all 4 implemented)

| Issue | What changed |
|-------|-------------|
| **8.1 Skip-to-content link** | Added `<a class="skip-link">` before nav in App.jsx. Visually hidden until focused. CSS in styles.css. |
| **8.2 Visible focus indicators** | Added `*:focus-visible { outline: 2px solid var(--color-steel); outline-offset: 2px; }` to styles.css. |
| **9.1 SPA invisible to crawlers** | Created `scripts/prerender-meta.js` — runs after `vite build` and generates per-route HTML files with correct `<title>`, `<meta description>`, OG tags, Twitter cards, and canonical URLs. Crawlers and social previews now see the right metadata without executing JS. |
| **7.1 No code splitting** | All page components except Home are now lazy-loaded via `React.lazy()` + `Suspense`. Build now produces separate chunks per page (~5-17KB each) instead of one monolithic bundle. |

### Major (5 of 7 implemented, 2 deferred)

| Issue | What changed |
|-------|-------------|
| **2.1/8.3 Source citation contrast** | Changed `--color-source` from `#BBBBBB` (3.8:1) to `#767676` (4.54:1). Now meets WCAG AA. |
| **4.1 No 404 page** | Created `src/pages/NotFound.jsx`. Added `<Route path="*">` catch-all in App.jsx. |
| **8.4 No aria-expanded** | Added `aria-expanded={open}` to hamburger button in Nav.jsx. |
| **8.5 Menu accessibility** | Added `role="menu"`, `aria-hidden`, and Escape key handler to close the menu. |
| **5.1 Home stat unsourced** | Changed "$303K Avg resident loan balance" to "$215K Median medical student debt, Class of 2025 (AAMC)" — matches the AAMC figure cited on the Loans page. |

### Minor (16 implemented)

| Issue | What changed |
|-------|-------------|
| **1.2 Inline hover handlers** | Replaced `onMouseEnter`/`onMouseLeave` on Home section cards with a `.section-card` CSS class. |
| **2.2 Table td nowrap** | Removed `white-space: nowrap` from `td` in styles.css. |
| **3.3 No theme-color** | Added `<meta name="theme-color" content="#FFFFF8">` to index.html. |
| **4.2 No aria-current** | Added `aria-current="page"` to active nav link. |
| **4.3 No Escape to close** | Added `keydown` listener for Escape key in Nav.jsx. |
| **5.3 Fee-only stat** | Softened "are fee-only fiduciaries" to "meet the fee-only fiduciary standard." |
| **5.4 Roth math inconsistency** | Added "(nominal, before inflation)" to the 7% return figure on Accounts page. |
| **5.5 SLP price** | Removed specific "$595" price — now says "flat-fee loan strategy consultations." |
| **7.3 No noscript** | Added `<noscript>This site requires JavaScript to run.</noscript>` to index.html. |
| **8.6 Calculator input IDs** | Added `id` and `htmlFor` attributes to all FI calculator and PSLF calculator inputs. |
| **8.7 Range slider ARIA** | Added `aria-label`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` to the return slider. |
| **8.9 Nav aria-label** | Added `aria-label="Main navigation"` to `<nav>`. |
| **9.3 No Twitter cards** | Added `twitter:card`, `twitter:title`, `twitter:description` to PageSEO.jsx. |
| **9.5 Sitemap changefreq** | Added `<changefreq>monthly</changefreq>` to all sitemap entries. Updated lastmod for changed pages. |
| **9.6 Home FAQ schema** | Added FAQPage JSON-LD with 2 Q&As to Home.jsx. |
| **10.2 No print stylesheet** | Added `@media print` rules: hide nav/footer, remove max-width, append URLs to links. |

## Deferred

| Issue | Severity | Reason |
|-------|----------|--------|
| **9.2 No og:image** | Major | Requires creating a 1200x630px design asset. Recommend commissioning one and adding to PageSEO. |
| **10.1 PSLF calculator too simple** | Major | Separate project — comprehensive loan calculator rebuild is planned independently. |
| **6.1 No contract negotiation content** | Major | New page needed. Recommend as a future content addition. |
| **1.1 Desktop inline nav** | Minor | Hamburger-only nav works fine at 780px content width. Lower priority. |
| **3.1/3.2 Tablet breakpoints** | Minor | Current single breakpoint works well enough. Could add intermediate later. |
| **5.2 Verify 2026 IRA limits** | Minor | Needs IRS research to confirm inflation adjustments. Existing numbers may be correct. |
| **6.2 Emergency fund content** | Minor | Brief addition to Accounts or Home page. |
| **6.3 Estate planning content** | Minor | Brief addition to Insurance page. |
| **6.4 Moonlighting tax content** | Suggestion | Addition to Taxes page. |
| **6.5 Taxes page FAQ schema** | Suggestion | Quick addition, low impact. |
| **7.2 Preconnect hints** | Minor | No external resources currently loaded. Revisit if fonts/APIs are added. |
| **9.4 Sitemap lastmod automation** | Minor | Needs a build script to read git commit dates per file. |
| **9.7 Article/WebSite schema** | Suggestion | Additional structured data types for richer search results. |
| **10.3 Last-updated dates** | Minor | Needs a process for maintaining per-page dates. |

## Rejected

| Issue | Reason |
|-------|--------|
| **10.4 Dark mode** | Changes the Tufte editorial design philosophy. The warm off-white background is intentional. |
| **4.4 Back-to-top link** | Not consistent with the clean Tufte-inspired page aesthetic. Users can scroll. |
| **2.3 True margin sidenotes** | Acknowledged in evaluation as "no change needed." The current SideNote implementation is practical for responsive layouts. |
