# Read To Excel International School — Website

A complete, responsive static website for RTEI (Akure, Ondo State).
Built with semantic HTML5, mobile-first CSS (Flexbox/Grid) and vanilla JS — no build tools or frameworks.

## File structure
```
rtei-website/
├── index.html        Home (hero, programmes, why-choose, gallery preview, CTA)
├── about.html        Mission, vision, motto, proprietor's message, why-choose
├── programmes.html   The 4 sections, admission steps, Admission Enquiry form (#enquiry)
├── gallery.html      Photo grid
├── contact.html      Address, phones, emails, contact form, Google Map
├── styles.css        Shared styles + design tokens (colours/fonts)
└── script.js         Mobile nav, scroll-reveal, form validation, footer year
```

## How to deploy
It's a static site — host it anywhere:
- Drag the `rtei-website` folder into **Netlify Drop** (netlify.com/drop), or
- Push to a **GitHub** repo and enable **GitHub Pages**, or
- Upload the files to any web host / cPanel `public_html`.

No server, database or build step required.

## Before going live — edit checklist
Search the code for `EDIT HERE` comments. Key items:
1. **Photos** — replace the placeholder Unsplash image URLs with real RTEI photos.
   Drop your images in the `images/` folder and point each `src` to them
   (e.g. `src="images/classroom.jpg"`). Add an `images/og-cover.jpg` (1200×630) for nice link previews.
2. **Forms** — they currently validate and show a success message but don't send anything.
   To receive submissions by email, create a free form at **formspree.io**, then on each
   `<form data-form …>` set `action="https://formspree.io/f/XXXXXX"` and `method="POST"`,
   and remove the `data-form` attribute so the browser submits normally.
3. **Map** — on contact.html, replace the embed `src` with the exact pin for the school
   (Google Maps → Share → Embed a map → copy the iframe `src`).
4. **Content** — add real founding year/history (about.html), the official vision statement,
   the proprietor's message, and any admission fees or form fees (programmes.html).
5. **Social links** — set the real Facebook/Instagram/WhatsApp URLs in the footer.

## Brand reference
- Maroon `#7A1F2B`, gold `#D4A017`, navy `#1A2A6C`
- Programme accent colours: Creche pink, KG green, Basic orange, College purple
- Fonts: Poppins (headings), Inter (body), Fraunces italic (motto/quotes)
- Motto: *Cradle of Excellence and Godliness* · Slogan: *Building Great Minds, Raising Godly Leaders.*
