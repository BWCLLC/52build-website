# 52 Build — Re|Imagine + Dark/Light Toggle
## Implementation Guide

### FILES TO UPDATE

1. **css/style.css** — Append the contents of `theme-additions.css` to the bottom
2. **js/main.js** — Replace entirely with the new `main.js`
3. **Every page HTML** — Add the toggle button to the nav (see below)
4. **index.html** — Update the hero h1 with Re|Imagine treatment

---

### NAV TOGGLE BUTTON (add to every page)

Find this in the nav on each page:
```html
<a href="https://app.52-build.com" class="nav-cta" target="_blank">Open App</a>
```

Add this BEFORE it:
```html
<button class="theme-toggle" id="themeToggle" aria-label="Toggle light/dark mode">
    <span class="toggle-dot"></span>
</button>
```

So it becomes:
```html
<button class="theme-toggle" id="themeToggle" aria-label="Toggle light/dark mode">
    <span class="toggle-dot"></span>
</button>
<a href="https://app.52-build.com" class="nav-cta" target="_blank">Open App</a>
```

Pages that need this change:
- index.html
- how-we-work.html
- our-values.html
- gallery.html
- contact.html
- values/initiative.html (and all 7 other value sub-pages)
- blog/index.html
- blog/what-to-expect-whole-home-remodel.html
- blog/kitchen-remodel-cost-guide-franklin-nashville.html
- blog/why-transparency-matters-more-than-lowest-bid.html
- blog/how-to-choose-general-contractor-tennessee.html

---

### RE|IMAGINE HERO TEXT (index.html only)

Find:
```html
Reimagine Your <em>Home</em>
```

Replace with:
```html
Re<span class="reimagine-bar"></span>Imagine Your <em>Home</em>
```

This adds a 2px gold vertical bar between "Re" and "Imagine" with the capital I.

If the tagline appears anywhere else on the site (footer, meta descriptions, etc.),
only the VISUAL hero text gets the bar treatment. Plain text references
stay as "Reimagine Your Home" (no bar needed in text-only contexts).

---

### HOW IT WORKS

- Default theme: Dark (current design, unchanged)
- Toggle saves preference to localStorage as '52build-theme'
- On page load, JS checks localStorage and applies 'light' class if saved
- Gold dot = dark mode (dot on left)
- Teal dot = light mode (dot slides right)
- All color changes use CSS variable overrides — no layout changes
