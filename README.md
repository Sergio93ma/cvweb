# sergio93ma.dev — CV / Portfolio

Personal CV and portfolio of Sergio Martín Alonso, built with **Astro** as a static site: no UI framework, a few kilobytes of vanilla TypeScript, and HTML that is fully rendered at build time.

**Live:** [sergio93ma.dev](https://www.sergio93ma.dev)

## Highlights

- **Static HTML** for `/` (English) and `/es/` (Spanish): fast first paint, fully indexable, `hreflang` alternates.
- **Instant language switch**: one click swaps every text in place (no reload), using the same dictionaries the build uses.
- **Light / dark theme** applied before first paint (no flash).
- **Optimised assets**: AVIF/WebP responsive images (`astro:assets`), subset variable fonts (Inter, JetBrains Mono), and a Font Awesome subset of only the icons in use.
- **Accessibility**: semantic landmarks and headings, real buttons and links, native `<dialog>` for project details (focus trap + Esc).

## Requirements

- Node.js ≥ 22.12 (even versions)

## Scripts

| Command           | Action                                 |
| ----------------- | -------------------------------------- |
| `npm install`     | Install dependencies                   |
| `npm run dev`     | Dev server at `http://localhost:4321`  |
| `npm run check`   | Type-check `.astro` and `.ts` files    |
| `npm run build`   | Production build to `dist/`            |
| `npm run preview` | Serve the production build             |
| `npm run deploy`  | Build and deploy to Firebase Hosting   |

## Project structure

```
src/
  components/   One .astro component per section (markup + scoped SCSS + its own script)
  data/         Language-neutral content: dates, numbers, technologies, metrics
  i18n/         en.ts / es.ts dictionaries (all user-facing text) + helpers
  layouts/      Base.astro: <head>, SEO, theme and language bootstrapping
  pages/        index.astro (/), es/index.astro (/es/), 404.astro
  scripts/      Shared client logic (scroll, counters, timeline)
  styles/       Global styles, design tokens, theme, generated icons.css
  assets/       Images and fonts processed at build time
public/         Files served as-is (CV PDF, og:image, robots.txt, sitemap.xml)
scripts/        subset-icons.py + icons.txt
```

## Content and translations

- Text lives only in `src/i18n/en.ts` and `src/i18n/es.ts`. `es` is type-checked against `en`, so a missing key fails the build.
- Elements that change language carry `data-i18n="key"` (text), `data-i18n-html="key"` (own trusted HTML) or `data-i18n-attr="attr:key"`.
- Lists (e.g. experience bullets) must keep the same number of items in both languages.

## Icons

Icons come from Font Awesome Pro, which is **not** stored in this repository. Only a subset of the used glyphs is committed.

To add an icon:

1. Add a line `<style> <name>` (style: `solid`, `regular` or `brands`) to `scripts/icons.txt`.
2. Run `python scripts/subset-icons.py [path-to-fontawesome-pro]` (needs `pip install fonttools brotli`). It regenerates `src/assets/fonts/fa-*.woff2` and `src/styles/icons.css`.

## Fonts

`src/assets/fonts/inter-variable.woff2` and `jetbrains-mono-variable.woff2` are Latin / Latin-Extended subsets of the original variable fonts (all axes kept), made with:

```bash
pyftsubset <Font>.ttf --unicodes="U+0000-00FF,U+0100-017F,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2190-21FF,U+2212,U+2215" --flavor=woff2 --output-file=<name>.woff2
```

## Deployment

Firebase Hosting serves `dist/` (`firebase.json`: short redirects `/cv`, `/linkedin`, `/github`, cache and security headers, real 404 page).

```bash
npm run build && firebase deploy --only hosting
```
