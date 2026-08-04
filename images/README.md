# SALT — Image Folder Structure

This folder mirrors the placeholders already wired into `index.html`. Each
`.gitkeep` file simply keeps the empty folder tracked in Git — delete it once
a real image sits in that folder.

Drop each photograph in at the exact filename below, then follow the
"how to activate a real image" step at the bottom of this file.

```
images/
├── favicon/
│   ├── favicon-16.png            16×16 site icon
│   ├── favicon-32.png            32×32 site icon
│   └── apple-touch-icon.png      180×180 iOS home-screen icon
├── social/
│   └── salt-og-image.jpg         1200×630 image used when the site is shared
├── hero/
│   └── salt-hero-grenadines-aerial.jpg
├── world/
│   └── salt-world-detail-textures.jpg
├── experiences/
│   ├── salt-air-aerial-grenadines.jpg
│   ├── salt-sorrel-tasting-table.jpg
│   ├── salt-afterdark-stargazing.jpg
│   ├── salt-studio-craftsmanship.jpg
│   └── salt-private-villa-terrace.jpg
├── partners/
│   └── salt-partners-villa-hosting.jpg
├── passport/
│   └── salt-passport-journal.jpg
└── journal/
    ├── salt-journal-islands-from-above.jpg
    ├── salt-journal-breadfruit.jpg
    └── salt-journal-after-dark.jpg
```

## How to activate a real image

Every placeholder in `index.html` is currently an illustrated scene panel —
a gradient, a bit of line art and a grain texture, standing in for a real
photograph. It looks like this:

```html
<!-- IMAGE: images/experiences/salt-air-aerial-grenadines.jpg
     Suggested shot: view from a small aircraft window over the Grenadines,
     islands and reefs visible below. -->
<div class="scene-panel scene-air" role="img" aria-label="Descriptive alt text here">
  <svg class="scene-art" ...>...</svg>
  <span class="panel-caption">The islands, seen from the air</span>
</div>
```

The intended filename lives in the HTML comment directly above each panel,
not in the visible caption — the caption is a short evocative label, not a
file path, so nothing reading as a "todo" is visible on the page. Once the
real photograph is saved into the matching folder, delete the `<svg>` and
the `scene-panel`/`scene-*` classes, and replace the whole block with a
standard image tag, keeping the same descriptive text as the `alt`
attribute:

```html
<img src="images/experiences/salt-air-aerial-grenadines.jpg"
     alt="Descriptive alt text here"
     loading="lazy">
```

Recommended: keep photographs under ~400KB each (export at 2000px on the
long edge, JPEG quality ~75–80) so the site stays fast on mobile connections.
