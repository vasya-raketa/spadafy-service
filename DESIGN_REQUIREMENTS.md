# Design Requirements

These rules define the visual system for the whole site. They take priority over the references in `/refs`. If a reference conflicts with a rule here, follow the rule. Every section, component and stageshow visual must follow them.

---

## Vocabulary

- **Screen**: one full section of the page, roughly one viewport tall, carrying **one idea**.
- **Plate**: a flat, rectangular block of colour or photography that sits on the grid. Plates hold content: text, a product visual, an image or a number.
- **Grid**: the single column and row system that every screen and plate snaps to.

Build every page from these three things.

---

## 1. Typography: more contrast, fewer sizes

**Principle:** big display headlines, quiet body text, and fewer sizes in between.

### Fonts

| Role | Font | Used for |
|---|---|---|
| Display | **Review** (trial) | `display` size only |
| Text | **Aeonik Pro** | `title`, `body`, `small` |

- The font files are in `/src` (e.g. `src/fonts/`). Self-host them with `@font-face`. Do not load them from a CDN or Google Fonts.
- Look in `/src` for the exact file names and available weights before writing any CSS. Prefer `.woff2`, then `.woff`, then `.otf`/`.ttf`.
- Use `font-display: swap`, and preload the display font weight used in the hero.
- Define font stacks as tokens with sensible fallbacks:
  ```css
  --font-display: "Review", Georgia, serif;
  --font-text: "Aeonik Pro", system-ui, -apple-system, sans-serif;
  ```
- Use Review only for the one display headline per screen. Everything else is set in Aeonik Pro.
- If a weight or style isn't in `/src`, don't let the browser fake it with synthetic bold or italic (`font-synthesis: none`). Flag it instead.

Requirements:
- Use **no more than 4 type sizes** across the whole site:
  | Token | Use | Guide size (desktop / mobile) |
  |---|---|---|
  | `display` | One headline per screen | 96–160px / 48–64px |
  | `title` | Plate headings, key numbers | 28–36px / 22–26px |
  | `body` | Paragraphs, descriptions | 16–18px |
  | `small` | Labels, captions, meta | 12–14px |
- Display and body sizes must differ by a ratio of at least **5:1**.
- Use fluid sizing (`clamp()`) for the display size so it scales smoothly.
- Display headlines: tight leading (0.9–1.05) and tight or negative tracking.
- Body text: muted tone, comfortable leading (1.5–1.6), and lines no longer than 65 characters.
- Use at most 2 font weights per family. Create hierarchy with size first and weight second.
- Each screen has **exactly one** display headline.

Not allowed:
- Intermediate "H3/H4/H5" sizes added to create hierarchy
- Bold body paragraphs or all-caps body text
- More than one display headline competing on the same screen

---

## 2. Layout: a simple grid with screens and plates

**Principle:** one system, repeated across the page.

Requirements:
- Use one grid for the whole site: **12 columns on desktop, 6 on tablet, 4 on mobile**, with fixed gutters and outer margins defined as tokens.
- Every plate spans whole columns and snaps to the grid. No free positioning.
- Define a small set of **plate layouts** and reuse them. For example:
  - `full`: one plate across all columns
  - `split`: 2 plates (6+6 or 7+5)
  - `bento`: 3–5 plates of mixed spans, built with the stageshow bento rules
  - `stack`: plates in a single column on mobile
- Each screen uses one of these layouts. New layouts are added to the system rather than invented per section.
- Use a spacing scale of **no more than 6 values**, such as 8 / 16 / 24 / 48 / 96 / 160. All padding and gaps come from this scale.
- Plates have consistent inner padding and a consistent corner radius. Choose one radius for the whole site.

Not allowed:
- One-off layouts that exist only in a single section
- Spacing values outside the scale
- Nested cards inside cards

---

## 3. Screens: compact, informative, room to breathe

**Principle:** one idea per screen, real content on it, and no empty scrolling.

Requirements:
- Every screen states **one idea**, expressed as its display headline.
- Every screen carries **real content** from `/copy` and real or stageshow-built visuals. No lorem ipsum, and no decorative filler.
- On desktop, a screen should fit in about one viewport (≤ 100–120vh). If it needs more, split it into two screens.
- Use whitespace inside the plates and between them. Avoid large empty bands between screens.
- Order content top to bottom within a screen: display headline, then supporting body (≤ 2 short paragraphs or 3 bullets), then the plates.
- Each screen has at most **one primary call to action**.

Not allowed:
- Sections that are mostly empty space to scroll through
- Screens that make two or three different points
- Walls of text. If the copy is too long for one screen, flag it in the design brief rather than shrinking the type.

---

## 4. Motion: functional and repeatable

**Principle:** a few mechanics reused throughout. Motion guides reading rather than decorating.

Allowed mechanics. Use only these three:
| Mechanic | What happens | Used for |
|---|---|---|
| **Rise** | A plate moves up 24–48px and fades in | Plates entering on scroll, in reading order |
| **Slide over** | A plate slides over the previous one | Moving from one screen or step to the next |
| **Stretch** | A plate expands along one axis to its full size | Revealing a key visual, number or image |

Requirements:
- Build each mechanic **once**, as a shared utility or component, and reuse it everywhere.
- Use one easing curve and 2–3 shared durations (for example 300ms / 500ms / 800ms), defined as tokens.
- Motion follows reading order. Headline first, then body, then plates, left to right and top to bottom.
- Each animation plays once on entry. Nothing loops except stageshow product demos, which follow the stageshow loop rules.
- Respect `prefers-reduced-motion`: replace movement with a simple fade or show content instantly.
- Animate only `transform` and `opacity`, to keep motion smooth.

Not allowed:
- Parallax, floating or bobbing elements, spinning, or bouncing
- Motion that has no cause, or that delays the reader
- A different animation style in each section

---

## 5. Colour: more colour blocks

**Principle:** flat brand colours and photography, with charcoal as an accent.

Requirements:
- Create surfaces with **flat colour plates** in the brand colours, plus photography.
- Charcoal is an **accent**, used for text on light plates, key lines, small details and the occasional emphasis plate. It is not the default background.
### Palette tokens

The brand works in **three colour families**. Each family has a loud colour and a soft mist.

```css
/* Brand: loud */
--orange:       #FF521D;
--pink:         #FC029C;
--green:        #0AB574;

/* Brand: mist (soft plate backgrounds) */
--orange-mist:  #F4E8E8;
--pink-mist:    #F5DFEF;
--mint-haze:    #E4F5DF;

/* Primary */
--charcoal:     #2F2F2F;   /* primary text, accent plates */
--ink:          #141414;   /* body text on loud plates only (see contrast rules) */

/* Neutrals (warm greys, tuned to the brand) */
--paper:        #FAF8F6;   /* page background */
--grey-100:     #EDEBE8;   /* neutral plates, image placeholders */
--grey-300:     #CFCBC6;   /* hairlines, dividers, inactive dots/arrows */
--grey-500:     #8C8781;   /* icons and decoration only, never text */
--grey-700:     #5E5A55;   /* muted body text, captions, meta on light surfaces */
--white:        #FFFFFF;   /* text on charcoal only */
```

### How to use the colours

- **The page background is `--paper`**, and colour comes in as **plates** on top of it.
- **Use the mists most.** Most coloured plates are mists. Loud colours are for moments: one loud plate per screen at most, used for the key stat, the CTA, the hero or a highlight tile.
- **Keep families together.** A loud colour pairs with its own mist (orange + orange-mist, pink + pink-mist, green + mint-haze). Don't put two loud colours side by side.
- **Give each colour a role**, and keep the role consistent across the page:
  | Family | Role | Suggested use |
  |---|---|---|
  | Orange | Primary brand / action | Hero, primary buttons, the CTA screen, key highlights |
  | Green | Health & proof | Health Check screen, stats ("green flags"), success states |
  | Pink | People & personality | Team screen, testimonials, "what we care about" |
  | Charcoal | Accent | Text, the nav, one emphasis plate (e.g. the stats or a quote), the footer |
- **Rhythm:** cycle through the families as the page scrolls so no two adjacent screens use the same family, and come back to orange at the end for the CTA.
- **Charcoal is the primary text colour and an accent surface.** It is not the default page background. Use at most 1–2 charcoal plates or screens on the whole page.
- Each screen uses **no more than 2 plate colours** (plus paper).
- Photography sits in plates, cropped to the grid, with no borders or drop shadows. Colour plates can frame photos.

### Contrast rules (checked against WCAG AA)

| Surface | Body text (≥ 4.5:1) | Large text: display, title ≥ 24px (≥ 3:1) | Don't |
|---|---|---|---|
| paper, grey-100, any mist | charcoal (11–12.6), grey-700 (5.4–6.5) | charcoal | loud colours as text, except display-size words on paper (orange 3.1, pink 3.5) |
| **orange** | ink (5.8) | charcoal (4.1), ink | white text (3.2) |
| **pink** | ink (5.1) | charcoal (3.6), ink, white (3.7) | white or charcoal body text |
| **green** | charcoal (5.0), ink (7.1) | charcoal | white text (2.7) |
| **charcoal** | white (13.4) | white, green (5.0), orange (4.1), pink (3.6) | grey text, pink/orange body text |

- **Buttons:** an orange button with charcoal or ink text works on paper and mists. On an orange plate, use a charcoal button with white text.
- **Focus rings:** a 2px charcoal outline works on every surface.
- **Do not** use `--grey-500` for any text.

Not allowed:
- Gradients, glows, drop shadows, glassmorphism or textures
- Grey-on-grey, low-contrast design
- Colours outside the tokens above (no new tints, no opacity-faded brand colours as text)
- Two loud brand colours touching each other

---

## 6. Stageshow visuals

- All product visuals (hero demo, bento tiles, UI stills) are built with the stageshow skill and kit.
- They sit **inside plates** and follow the same grid, radius, colours and type tokens as the rest of the site.
- Their motion should feel consistent with the site mechanics: same easing and similar pace.

---

## Acceptance checklist

Before calling any page done, confirm:
- [ ] At most 4 type sizes are used; each screen has exactly one display headline
- [ ] Every plate snaps to the 12/6/4 grid; every spacing value comes from the scale
- [ ] Each screen has one idea, real content, fits about one viewport, and has no empty scroll
- [ ] Only rise / slide over / stretch are used, all from shared utilities; reduced motion is handled
- [ ] Surfaces are flat colour plates and photography; mostly mists, with at most one loud plate per screen; charcoal is used only as an accent
- [ ] Every text/surface pairing follows the contrast table (no white on orange or green, no grey-500 text)
- [ ] Checked at 375px, 768px and 1440px
