# RYG Fitness — Website

A personal project built for **RYG Fitness** — Janet Slye's women-only fitness studio in Tralee, Co. Ciarraí. Live at [ryg.ie](https://ryg.ie).

> Friendly fitness classes for women, in the heart of Tralee.

Single-page site, no build step, deployed via GitHub Pages from `main`. Brand built around the Kerry palette, the dumbbell motif, and a "chat first" voice — Janet replies to every enquiry herself on WhatsApp.

## How this is hosted

GitHub Pages serves the root `index.html`, which loads the editable JSX source files from `src/` straight into the browser (transpiled via in-browser Babel — no bundling step). The custom domain is configured through the root `CNAME` file.

The deploy workflow lives in `.github/workflows/pages.yml` — every push to `main` redeploys automatically.

## Updating the site

The most common content changes:

| What | Edit |
|---|---|
| Term dates | `src/website-v4-dates.jsx` → `TERM` object |
| Course start date | `src/website-v4-sections-2.jsx` → `ScheduleSection` heading |
| Class schedule | `src/website-v4-sections-2.jsx` → `SCHEDULE` array |
| Pricing | `src/website-v4-sections-2.jsx` → `ScheduleSection` |
| Testimonials | `src/website-v4-sections-2.jsx` → `TESTIMONIALS` array |
| About Janet + her photo | `src/website-v4-sections-2.jsx` → `AboutSection`, image at `janet.png` |
| Class descriptions | `src/website-v4-sections-1.jsx` → `CLASSES` array |
| FAQ | `src/website-v4-app.jsx` → `FAQ` array |
| Title, meta, structured data | `index.html` `<head>` |

Commit + push to `main` and the site redeploys in ~30 seconds.

**When the term changes,** update in three places: `TERM` in `website-v4-dates.jsx`, the `ScheduleSection` heading, and the `Course` block in the `index.html` structured data.

## SEO

- `index.html` carries Open Graph + Twitter cards, canonical URL, geo meta, and JSON-LD for `HealthClub`, `WebSite`, `FAQPage` and `Course`
- A `<noscript>` block holds a plain-HTML version of the headline, timetable, prices and address — the site renders via JS, so this is what non-rendering crawlers read
- `robots.txt` and `sitemap.xml` sit at the root

## Brand tokens

```
Cream       #EFE8D6   Background
Cream soft  #DDD3B8   Surfaces
Ink         #2E3530   Type
Ink soft    #5A6359   Secondary type
Hot         #C66A6E   Accent — Kerry rose
Sun         #D9B36A   Highlight
Leaf        #6A8170   Sage — calm/ground
Accent      #5D7D7C   Sea slate

Serif:    Instrument Serif
Sans:     DM Sans
Mono:     JetBrains Mono

Motif:    Dumbbell (the only one — use big for watermarks, small beside mono labels)
```

## Credits

**Client:** Janet Slye · [rygfitnesstralee@gmail.com](mailto:rygfitnesstralee@gmail.com) · [Instagram](https://instagram.com/janetslyeryg) · [Facebook](https://www.facebook.com/RYGfitnessTralee/)

**Design & build:** [Laís Golin](https://github.com/lgolin)
