# RYG Fitness — Website
 
Small classes for women, in the heart of Tralee.

This is the source for [ryg.ie](https://ryg.ie) — a single-page site built around the new RYG brand (Kerry palette, fuchsia motif, "chat first" voice).

## How this is hosted

Static HTML, no build step.

GitHub Pages serves the root `index.html`. That file loads the editable source
files from `src/`, so both the root `index.html` and the `src/` folder are part
of the live site.

The custom domain is configured through the root `CNAME` file.

When content changes, edit the relevant file in `src/` and commit it. There is
no bundling step.

## Updating the site

The most common changes:

| What | Edit |
|---|---|
| Class schedule | `src/website-v4-sections-2.jsx` → `SCHEDULE` array |
| Pricing | `src/website-v4-sections-2.jsx` → `ScheduleSection` |
| Testimonials | `src/website-v4-sections-2.jsx` → `TESTIMONIALS` array |
| About Janet | `src/website-v4-sections-2.jsx` → `AboutSection` |
| FAQ | `src/website-v4-app.jsx` → `FAQ` array |

## Brand tokens 

```
Cream       #EFE8D6   Background
Cream soft  #DDD3B8   Surfaces
Ink         #2E3530   Type
Ink soft    #5A6359   Secondary type
Hot         #C66A6E   Accent — fuchsia pink (Deora Dé)
Sun         #D9B36A   Highlight
Leaf        #6A8170   Sage — calm/ground
Accent      #5D7D7C   Sea slate

Serif:    Instrument Serif
Sans:     DM Sans
Mono:     JetBrains Mono
```

## Contact

Janet Slye · [rygfitnesstralee@gmail.com](mailto:rygfitnesstralee@gmail.com)
[Instagram](https://instagram.com/janetslyeryg) · [Facebook](https://www.facebook.com/RYGfitnessTralee/)
