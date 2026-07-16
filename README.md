# SALT — Website

A static, single-page editorial website for SALT, a hospitality house rooted
in Saint Vincent & the Grenadines. Built with plain HTML5, CSS3 and vanilla
JavaScript — no frameworks, no build step, no backend, no paid dependencies.

## Files

- `index.html` — all page content and structure
- `styles.css` — all styling, including the colour and typography system
- `script.js` — mobile menu, scroll-reveal animation, smooth scrolling, footer year
- `images/` — folder structure for photography, with a placeholder system already wired in (see `images/README.md`)

## Publishing to GitHub Pages

1. Create a new repository on GitHub (e.g. `salt-website`). It can be public or private, but GitHub Pages on a free plan requires a public repository unless you have GitHub Pro/Team/Enterprise.
2. Upload `index.html`, `styles.css`, `script.js`, `images/` and `README.md` to the root of the repository. You can drag and drop them in the GitHub web interface, or push via Git:
   ```
   git init
   git add .
   git commit -m "Initial SALT website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/salt-website.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch".
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. GitHub will publish the site at `https://YOUR-USERNAME.github.io/salt-website/` within a minute or two. Refresh the Pages settings screen to see the live link once it's ready.
7. Share that URL directly with partners (e.g. Mandarin Oriental) for a soft launch — nothing about a `github.io` address needs to be public or indexed until you're ready.
8. When ready for a custom domain, add a `CNAME` file at the repository root containing the domain (e.g. `salt-grenadines.com`) and configure the corresponding DNS records with your domain registrar, then set the custom domain in **Settings → Pages**.

## Before you go live: replace these placeholders

- **Email addresses** — every `mailto:` link in `index.html` uses a placeholder address (`partnerships@`, `experiences@`, `advisors@`, `journal@`, `hello@salt-grenadines.com`). Search for `salt-grenadines.com` in `index.html` and swap in real addresses.
- **Instagram handle** — the placeholder `@salt.grenadines` appears in the contact section and footer. Update or remove it.
- **Open Graph URL and image** — update `og:url` and `og:image` in the `<head>` once the site has a permanent address and a real social share image.
- **Favicon** — replace the three placeholder filenames in `images/favicon/` with a real SALT mark exported at 16×16, 32×32 and 180×180.
- **Photography** — every image on the site is currently an elegant textured placeholder labelled with the exact filename it expects. See `images/README.md` for the full list and the two-line swap needed to bring in a real photograph.

## Typography rationale

**Fraunces** (serif, headings and editorial moments) paired with **Inter**
(sans-serif, navigation and body copy). Both are free, open-source and
served via Google Fonts — no licence cost, no build tooling required.

Fraunces has the warmth and slightly irregular, hand-set character of old
travel-publishing type without tipping into anything overly decorative or
"tropical" — it reads as considered rather than themed, which is why it
carries the wordmark, headlines and the pull-quotes in the Philosophy
section. Inter is deliberately quiet: a well-balanced grotesque built for
screens, so navigation, captions and long-form paragraphs stay legible at
small sizes on a phone without competing with Fraunces for attention. The
pairing gives the site one voice for feeling (Fraunces) and one voice for
function (Inter), which is the same discipline described in the site's own
"SALT World" section — one shared typographic system underneath every
experience.

## Colour system

All colours are defined once as CSS custom properties at the top of
`styles.css` (`:root`), split into a neutral master palette (used for the
overall site) and five small accent sets, one per signature experience
(SALT Air, Salt & Sorrel, SALT After Dark, SALT Studio, SALT Private). To
change any colour site-wide, edit its variable in `styles.css` — nothing
else needs to change.

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a
  skip-to-content link are included.
- All interactive elements are keyboard-reachable with visible focus states.
- Image placeholders use `role="img"` with descriptive `aria-label` text so
  screen readers announce the intended photograph even before real images
  are added.
- All animation respects `prefers-reduced-motion: reduce`.
- No external JavaScript libraries, trackers, or web fonts beyond Google
  Fonts are loaded, keeping the page fast on mobile connections.

## Analytics

No analytics are included by default. If you'd like to add a
privacy-respecting analytics tool later, there is a clearly marked comment
near the closing `</body>` tag in `index.html`, and a matching note at the
bottom of `script.js`, indicating exactly where to add it.
