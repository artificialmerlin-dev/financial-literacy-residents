# Site Evaluation: Financial Literacy for Medical Residents

**URL:** https://financial-literacy-residents.vercel.app
**Date:** 2026-04-08
**Evaluator:** UX & Content Audit (automated + source code review)
**Stack:** React 19, React Router 7, Vite 8, react-helmet-async, Vercel hosting

---

## Executive Summary

This is a well-crafted, content-driven educational site with strong editorial voice and clean Tufte-inspired design. The typography, spacing, and information hierarchy are above average for a personal project. However, there are meaningful gaps in accessibility, SEO (the site is a client-side SPA with no server-side rendering, making it largely invisible to crawlers that don't execute JavaScript), and a few content accuracy issues. The biggest structural problem is the SPA architecture — search engines and social media link previews see only a blank page with a generic meta description.

---

## 1. Visual Design Quality

### Strengths
- **Typography is excellent.** Georgia serif at 1rem/1.75 line-height is highly readable. Heading hierarchy (2.2/1.5/1.2rem) is well-proportioned. Letter-spacing on h1/h2 (-0.02em) adds refinement.
- **Color palette is restrained and intentional.** Off-white background (#FFFFF8), near-black text (#111111), accent red (#A4262C), steel blue (#264653), muted green (#2D6A4F). No gratuitous color.
- **Content max-width (780px)** keeps line length in the optimal 60-75 character range for readability.
- **Card design** is minimal — thin borders, optional colored top accent, no shadows or rounded corners. Consistent with Tufte philosophy.
- **Stat component** provides strong visual anchors without being flashy.

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1.1 | Minor | Hamburger menu is always visible, even on desktop where there's room for a horizontal nav. On a 780px-max content site, the nav could show inline links on desktop and collapse to hamburger only on mobile. | Add a media query: show inline links >= 769px, hamburger < 769px. |
| 1.2 | Suggestion | Section cards on the Home page use `onMouseEnter`/`onMouseLeave` inline handlers for hover effects. This doesn't work on touch devices and is less maintainable than CSS `:hover`. | Replace with a CSS class and `:hover` pseudo-class. |
| 1.3 | Suggestion | The ReferralCard component uses hardcoded colors (`#1a365d`, `#ffffff`) instead of CSS variables. Inconsistent with the rest of the design system. | Use CSS variables or at minimum define these as additional variables. |

---

## 2. Readability

### Strengths
- **Line height (1.75)** is generous and comfortable for long-form reading.
- **Font size (1rem = 16px)** is the web standard. Body text is never too small.
- **Max-width (780px)** with 1.5rem padding produces ~65-75 characters per line — ideal.
- **Paragraph spacing (1.25rem margin-bottom)** provides clear separation without excess whitespace.
- **Section numbers** (styled red, small caps feel) give the site a print-publication quality.

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 2.1 | Major | Source citations use `--color-source: #BBBBBB` on `--color-bg: #FFFFF8`. This is a **3.8:1 contrast ratio**, which **fails WCAG 2.1 AA** (minimum 4.5:1 for normal text). Every `.source` element on the site is technically inaccessible. | Darken `--color-source` to at least `#767676` (4.54:1) or `#757575`. |
| 2.2 | Minor | Table cells use `white-space: nowrap` globally (line 193 of styles.css). This can cause horizontal overflow on mobile even with the scroll wrapper, and prevents text from wrapping naturally in cells with longer content. | Remove `white-space: nowrap` from `td` — let content wrap. Keep it on `th` only. |
| 2.3 | Suggestion | The `<SideNote>` component renders as a plain italic paragraph. In Tufte's actual design, sidenotes appear in the margin. This is fine for mobile but a missed opportunity on desktop. | No change needed — current implementation is practical. Just noting the gap from true Tufte style. |

---

## 3. Mobile Responsiveness

### Strengths
- **Single breakpoint at 768px** is sufficient for this content-heavy site.
- All grids collapse to single column on mobile.
- Table wrapper provides horizontal scrolling with momentum (`-webkit-overflow-scrolling: touch`).
- Calculator inputs stack vertically on mobile.
- Hamburger menu works on all screen sizes.

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 3.1 | Minor | No intermediate breakpoint for tablets (768-1024px). The 780px max-width means the site looks fine on tablets, but the hamburger menu is unnecessary on iPad landscape (1024px) where there's room for a full nav. | Consider showing inline nav at >= 1024px. |
| 3.2 | Minor | The `calc-inputs` 3-column grid jumps directly to 1-column on mobile. On tablet widths (600-768px), a 2-column layout would be better for the FI calculator. | Add an intermediate breakpoint: `@media (max-width: 768px) and (min-width: 480px)` with 2-column calc inputs. |
| 3.3 | Suggestion | No `<meta name="theme-color">` tag for mobile browser chrome coloring. | Add `<meta name="theme-color" content="#FFFFF8">` to index.html. |

---

## 4. Navigation Flow

### Strengths
- **RelatedLinks component** at the bottom of each page provides contextual next-step navigation.
- **Home page** provides a clear section grid with numbered sections and short descriptions.
- **"New to all of this?" callout** on the home page guides first-time users through the recommended reading order.
- **ScrollToTop** component resets scroll position on route changes.

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 4.1 | Major | **No 404 page.** The Vercel rewrite rule (`"source": "/(.*)", "destination": "/"`) silently redirects all invalid URLs to the home page. Users who mistype a URL or follow a broken link get no indication that the page doesn't exist. Search engines indexing broken links will see a 200 status instead of 404. | Add a `<Route path="*" element={<NotFound />} />` catch-all in App.jsx and create a simple NotFound component. |
| 4.2 | Minor | Nav doesn't indicate the current page with `aria-current="page"` — only visual styling (accent color + underline). Screen readers can't identify the active page. | Add `aria-current={pathname === path ? 'page' : undefined}` to nav links. |
| 4.3 | Minor | The menu dropdown has no close-on-outside-click or close-on-Escape behavior. Users must click the hamburger again to close it. | Add an `onKeyDown` handler for Escape and a click-outside listener. |
| 4.4 | Suggestion | No breadcrumbs or "back to top" link on long pages (Insurance, Investing, and Loans are all 7-8 min reads). | Consider a subtle "Back to top" link in the footer or after long sections. |

---

## 5. Content Accuracy

### Strengths
- **Tax brackets, contribution limits, and deduction numbers** cite specific IRS Revenue Procedures and appear correct for 2026.
- **SPIVA data** is accurately represented with proper attribution.
- **PSLF rules, SAVE plan status, and RAP plan** are current as of early 2026.
- **Insurance advice** (own-occupation, Big 5 carriers, term vs whole) is standard and correct.
- **Disclaimer** is prominently placed on the home page.

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 5.1 | Major | **Home page stat "$303K Avg resident loan balance" has no source citation.** The AAMC 2025 Graduation Questionnaire reports median debt of $200K-$215K. $303K may be an average (not median) from a different source, but it's significantly higher than the commonly cited figure and needs a source. | Add a source citation or change to median debt ($215K) which is cited on the Loans page. |
| 5.2 | Minor | Accounts page FAQ states "The 2026 Roth IRA contribution limit is $7,500. The income phase-out for single filers begins at $153,000." — these numbers need verification against IRS 2026 guidance. The $7,500 limit and $153,000 phase-out were 2025 numbers; 2026 may have inflation adjustments. | Verify against IRS Revenue Procedure 2025-11 (cited as source). Update if IRS adjusted for inflation. |
| 5.3 | Minor | Fees page says "Fewer than 2% of financial advisors in the United States are fee-only fiduciaries" citing "Investment News, 2024 survey." This statistic is commonly cited but the exact percentage varies by source and definition. The citation is vague. | Link to the specific survey or soften to "a small fraction." |
| 5.4 | Minor | Accounts page Roth IRA math SideNote uses 7% return: "Contributing $7,500 per year for 5 years... letting it grow at 7% annualized for 30 years yields approximately $286,000." The FI calculator now defaults to 4% real return. These should be consistent, or the 7% should be labeled as nominal. | Add "(nominal, before inflation)" after "7% annualized" or recalculate using 4% real. |
| 5.5 | Suggestion | The Loans page mentions Student Loan Planner consultation costs "$595" — this price may change. | Consider softening to "a flat fee" or noting "as of 2026." |

---

## 6. Content Gaps

| # | Severity | Gap | Recommendation |
|---|----------|-----|----------------|
| 6.1 | Major | **No content about negotiating physician contracts/compensation.** Contract negotiation is one of the highest-impact financial decisions a new attending makes — often worth $50K-$200K over the first few years. | Add a page on contract negotiation basics: RVU-based comp, signing bonuses, relocation, tail coverage, non-competes. |
| 6.2 | Minor | **No content about emergency funds.** The standard advice is 3-6 months of expenses before aggressive investing. This is especially relevant during residency. | Add a brief section to the Home page or Accounts page. |
| 6.3 | Minor | **No content about estate planning basics** (will, power of attorney, beneficiary designations). Residents often skip this, but beneficiary designations on retirement accounts are critically important. | Add a brief section to Insurance page or create a standalone page. |
| 6.4 | Suggestion | **No content about moonlighting income** and its tax implications. Many residents moonlight, and the 1099 income has different tax treatment. | Could be added to the Taxes page. |
| 6.5 | Suggestion | **Taxes page has no FAQ schema** unlike most other pages. Missing SEO opportunity. | Add 2-3 FAQ items (e.g., "What tax bracket are medical residents in?", "Can residents deduct student loan interest?"). |

---

## 7. Page Load Performance

### Strengths
- **Tiny bundle.** Only 4 production dependencies (React, React DOM, React Router, react-helmet-async). Total JS is ~340KB gzip'd ~104KB. Excellent.
- **No images.** The entire site is text, which means near-instant paint.
- **CSS is a single 359-line file.** No CSS framework bloat.
- **Vite 8** produces optimized, tree-shaken bundles by default.

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 7.1 | Critical | **No code splitting.** All 10 pages are bundled into a single JS chunk (340KB). React Router supports lazy loading via `React.lazy()` and `Suspense`. A user visiting the home page downloads the code for all 9 other pages. | Lazy-load page components: `const Loans = lazy(() => import('./pages/Loans'))` with a `<Suspense>` boundary. |
| 7.2 | Minor | No `<link rel="preconnect">` hints in index.html. If external fonts or APIs were added later, this would matter. Currently low impact since there are no external resources. | Add preconnect for any future external domains. Low priority now. |
| 7.3 | Minor | No `<noscript>` fallback in index.html. Users with JavaScript disabled see a blank page. | Add `<noscript>This site requires JavaScript.</noscript>` to index.html. |

---

## 8. Accessibility

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 8.1 | Critical | **No skip-to-content link.** Keyboard users must tab through the entire nav (10 links + hamburger) on every page before reaching content. This is a WCAG 2.4.1 failure. | Add `<a href="#main-content" class="skip-link">Skip to main content</a>` before `<Nav />` in App.jsx. Add `id="main-content"` to `<main>`. Style the skip link as visually hidden until focused. |
| 8.2 | Critical | **No visible focus indicators.** The CSS resets all margins/padding with `*` selector but defines no `:focus-visible` styles. Browser defaults may or may not render. Keyboard users cannot reliably see which element is focused. WCAG 2.4.7 failure. | Add `*:focus-visible { outline: 2px solid var(--color-steel); outline-offset: 2px; }` to styles.css. |
| 8.3 | Major | **Source citation contrast fails WCAG AA.** `--color-source: #BBBBBB` on `#FFFFF8` = 3.8:1 ratio. Minimum is 4.5:1. (Same as issue 2.1.) | Change `--color-source` to `#767676` or darker. |
| 8.4 | Major | **Hamburger button has no `aria-expanded` attribute.** Screen readers cannot tell whether the menu is open or closed. | Add `aria-expanded={open}` to the hamburger `<button>`. |
| 8.5 | Major | **Menu dropdown appears/disappears with no `aria-hidden` or focus trapping.** When the menu opens, focus doesn't move to it. When it closes, focus doesn't return to the hamburger. | Add `aria-hidden={!open}` to menu div. Trap focus within menu when open. Return focus to hamburger on close. |
| 8.6 | Minor | **Calculator inputs lack `id` attributes.** Labels use implicit association (wrapping), which works, but explicit `<label htmlFor="income">` with `id="income"` on the input is more robust for assistive technology. | Add matching `id` and `htmlFor` attributes. |
| 8.7 | Minor | **Range slider has no visible value announcement.** Screen readers will read the raw value but the `%` suffix in the adjacent `<span>` may not be associated. | Add `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label` to the range input. |
| 8.8 | Minor | **No `lang` attribute on specific foreign terms or proper nouns.** Low impact for this content. | No action needed. |
| 8.9 | Suggestion | **No `role="navigation"` or `aria-label` on `<nav>`.** The semantic `<nav>` element is sufficient for most screen readers, but `aria-label="Main navigation"` adds clarity when multiple nav regions exist. | Add `aria-label="Main navigation"` to `<nav>`. |

---

## 9. SEO Completeness

### Strengths
- **Every page has unique `<title>` and `<meta description>`** via PageSEO component.
- **Open Graph tags** (og:title, og:description, og:type, og:url) on every page.
- **Canonical URLs** set correctly on every page.
- **FAQPage JSON-LD schema** on 6 of 10 pages — these can appear as rich results in Google.
- **sitemap.xml** lists all 10 pages with priorities.
- **robots.txt** allows all crawlers and points to sitemap.

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 9.1 | Critical | **The site is a client-side SPA with no server-side rendering (SSR) or pre-rendering.** When a search engine crawler or social media bot fetches any page, it receives only the shell `index.html` with a generic title ("Financial Literacy for Medical Residents") and generic description. Page-specific titles, descriptions, OG tags, and JSON-LD are injected by React Helmet *after* JavaScript executes. Googlebot executes JS but with delays and lower priority. Other crawlers (Bing, social media previews, AI training crawlers) often don't. This means: (1) Social media link previews show the generic title/description for ALL pages, (2) Non-Google search engines may not index page-specific content, (3) JSON-LD FAQ schema may not be discovered. | Implement pre-rendering with `vite-plugin-ssr`, `@prerenderer/rollup-plugin`, or switch to a framework with SSR (Next.js, Astro). At minimum, use `react-snap` or `prerender-spa-plugin` to generate static HTML at build time. |
| 9.2 | Major | **No `og:image` meta tag on any page.** Social media shares will have no preview image, reducing click-through rates significantly. | Create a single OG image (1200x630px) for the site and add `<meta property="og:image">` to PageSEO. |
| 9.3 | Minor | **No Twitter Card meta tags.** `twitter:card`, `twitter:title`, `twitter:description` are missing. Twitter/X falls back to OG tags but explicit Twitter tags give more control. | Add `<meta name="twitter:card" content="summary_large_image">` and related tags to PageSEO. |
| 9.4 | Minor | **Sitemap `<lastmod>` dates are all identical** (`2026-03-25`). If individual pages are updated at different times, the lastmod should reflect actual modification dates. | Update lastmod dates when pages are modified, or automate via build script. |
| 9.5 | Minor | **No `<changefreq>` in sitemap.** While optional and often ignored by crawlers, it signals update frequency. | Add `<changefreq>monthly</changefreq>` to sitemap entries. |
| 9.6 | Minor | **Home page has no FAQ schema.** The home page has a disclaimer and overview but no structured FAQ data. | Add 2-3 FAQ items to Home (e.g., "What is this guide?", "Who is this for?"). |
| 9.7 | Suggestion | **No `Article` or `WebSite` JSON-LD schema.** Only FAQPage schema is used. Adding `WebSite` schema to the home page and `Article` schema to content pages would improve search appearance. | Add schema types to PageSEO component. |

---

## 10. Overall User Experience

### Strengths
- **The writing is outstanding.** Clear, direct, no jargon without explanation. The editorial voice is authoritative without being condescending — it reads like a well-edited magazine article, not a blog post.
- **Information architecture is logical.** The 9-section structure follows a natural progression: accounts → investing → fees → taxes → loans → insurance → credit cards → calculator → resources.
- **"Start here" callout** on the home page reduces decision paralysis for new visitors.
- **Calculators are interactive and update in real-time** — no submit buttons, no page reloads.
- **Source citations** are present throughout, building credibility.
- **Disclaimer** is clear and prominent.
- **Page load is fast** — no images, tiny bundle, Vercel CDN.
- **Referral disclosure** on the credit card page is honest ("I may benefit financially").

### Issues

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 10.1 | Major | **The PSLF calculator is too simplified for the decisions it's meant to inform.** It assumes a single filer, flat $65K resident salary, and doesn't account for filing status, spouse income, salary growth, or the difference between IDR plans. For a six-figure financial decision, users need more granularity. | Rebuild as a comprehensive PSLF vs Refinance vs IDR decision engine with filing status, spouse income, plan selection, and side-by-side path comparison. |
| 10.2 | Minor | **No print stylesheet.** Users who want to print a page or save as PDF get the nav, footer, and full-width layout. | Add `@media print` styles: hide nav/footer, remove max-width constraint, adjust font sizes. |
| 10.3 | Minor | **No "last updated" date visible on pages.** Financial content has a shelf life — users need to know if the 2026 tax brackets are still current. | Add a last-updated date to each page, either in the caption area or near the source citation. |
| 10.4 | Suggestion | **No dark mode support.** The off-white background and light color scheme are fine, but a `prefers-color-scheme: dark` media query would be a nice touch. | Add a dark mode color scheme using the existing CSS variable system. |

---

## Issue Summary

| Severity | Count | Items |
|----------|-------|-------|
| **Critical** | 4 | Skip link (8.1), focus indicators (8.2), SPA/no SSR (9.1), no code splitting (7.1) |
| **Major** | 7 | Source contrast (2.1/8.3), no 404 page (4.1), aria-expanded (8.4), menu focus (8.5), og:image (9.2), home stat source (5.1), PSLF calc too simple (10.1) |
| **Minor** | 16 | Various (see individual sections) |
| **Suggestion** | 9 | Various (see individual sections) |

### Top 5 Priorities
1. **Add pre-rendering or SSR** — without this, the site is largely invisible to non-Google search engines and social media previews
2. **Add skip-to-content link and focus indicators** — basic accessibility requirements
3. **Fix source citation contrast** — WCAG AA failure
4. **Add `aria-expanded` to hamburger and fix menu accessibility** — screen reader users can't navigate
5. **Add code splitting** — all 10 pages in one bundle is unnecessary weight
