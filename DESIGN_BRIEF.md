# Spadafy: Design Brief

**Revision 2.** Updated for the new palette in DESIGN_REQUIREMENTS §5, the dark logo, desktop-only scope, and your answers to the first round of questions. Phase 3 (the build) waits for your approval.

Sources read: `CLIENT_FEEDBACK.md`, `copy.md`, `DESIGN_REQUIREMENTS.md` (rev. with §5 palette), all files in `refs/` (no `refs/README.md`), the fonts in `src/`, `symbol/Group 2087333476.svg` and `refs/dark.svg`, and the five installed skills (stageshow: SKILL.md plus framing, craft, motion, bento and looks references and the `hero-demo` gold).

> **Scope: desktop only.**
> - Designed at **1440px**, and checked at **1280px** and **1920px**.
> - One 12-column grid. No breakpoints, no responsive layouts, no mobile menu, and no 375/768 checks.
> - Mobile and tablet requirements in all sources are set aside for this round.
> - Every size, span and gap is a token (`--cols`, `--gutter`, `--margin`, span classes), and nothing has a hard-coded width. Mobile can be added later by overriding tokens and spans, without rewriting components.

---

## 0. Decisions from the inputs

| Topic | Decision |
|---|---|
| **Page split** | copy.md is one 11-screen list. CLIENT_FEEDBACK puts Screens 6, 8 and 10 on the Services page. Followed CLIENT_FEEDBACK (mapping in §4). |
| **Palette** | The DESIGN_REQUIREMENTS §5 tokens and contrast rules are used exactly. I re-checked every pairing myself (§3.1). |
| **Logo** | Two files, both used unchanged: **`refs/dark.svg`** (black) on paper, mists and loud plates, and **`symbol/Group 2087333476.svg`** (`#F5EFEF`) on charcoal. Black on orange is ≥ 5.7:1 and black on mists ≥ 15:1. Light on charcoal is 11.8:1. There's no wordmark file, so the accessible name is "Spadafy, home". |
| **Fonts** | `src/`: ReviewCondensed Medium/Bold, AeonikPro Regular/Medium/Bold (OTF). Converted to woff2 locally, OTF kept as fallback. Review is the **trial for the design phase**, licensed for production (swap the files later, same names). |
| **Media** | **Placeholders everywhere for this round:** doctor image, Care photos, Screen 4 banner, team photos. Each is a `--grey-100` plate (the token for image placeholders) with a visible `[PLACEHOLDER: …]` label at its real crop. No generated images. |
| **Missing headlines** | Approved: H4 **"Services."** and S3 **"All services."** |
| **CTA labels** | Not in copy.md. Proposed: hero "Explore Services" (from Screen 6) + "Free VDI Health Check" (service name); nav button "Free VDI Health Check"; hero platform line = Screen 5 plate 2, verbatim. |
| **Motion conflict** | DESIGN_REQUIREMENTS allows rise, slide over and stretch. The prompt allows rise + sticky stacking. The prompt wins: **rise + sticky stacking (= slide over). No stretch.** |
| **Nav colour conflict** | DESIGN_REQUIREMENTS lists charcoal for "the nav". CLIENT_FEEDBACK #8 (which outranks it) says nav and menu use brand colour. Resolved in §7: **an orange nav and an orange menu plate**, with charcoal as the button accent. |

---

## 1. Visual direction

Spadafy reads as a **poster wall of flat brand plates, set tight on an 8px seam**. Screens are colour plates on warm paper, butting against each other with the same 8px gap used between plates inside a screen. There are no bands between sections, which removes the "black space" complaint at the root. The three families take turns as you scroll: orange opens and closes the page, green carries the proof, pink carries the people. The voice comes from **Review Condensed Bold at poster scale** in charcoal and ink (refs `124241`, `237`, `244`, and the BPM hoarding `543`, where coloured posters stand edge-to-edge). Product credibility comes from one **stageshow VDI console** inside the orange hero plate. The plate/photo split and the service list pinned to a plate's foot come from the previous Spadafy screens (`10.52.06`, `Group 2136141614`). Calm comes from discipline: one display headline per screen, quiet Aeonik body, at most one loud plate per screen, and only two scroll mechanics.

**What I take from each ref, and why**

| Ref | Take | Leave |
|---|---|---|
| `124241` / `214421` (duplicate) | The palette in one strip; proof the colours sit edge-to-edge | The merch props |
| `Slide 16_9 - 237` | A loud colour with its own mist as the core pairing | — |
| `Slide 16_9 - 244` | A warm light ground; a headline set big and tight | Dark screen as the main surface |
| `Slide 16_9 - 236` | Large stacked type as navigation → **the expanded menu** | Charcoal ground → my menu is **orange** |
| `Slide 16_9 - 349` / `214241` | A loud plate beside a photo, with display type filling the plate | Tone-on-tone pink text and glass cards (not allowed) |
| `10.52.06` (Core VDI) | Split plate: colour + photo, the service list pinned to the plate's foot | Tab switcher; glass UI over the photo |
| `10.52.15` (Care) | **The doctor image on "Giving doctors more time"**; a 6/3/3 bento | White type over photos → titles go in a mist strip |
| `10.52.22` (Green flags) | Green screen, mint stat rows, ruled rhythm | 120px numbers (over the 4-size limit) |
| `10.51.57` (old hero) | Headline on one line; the floating pill nav | **The stock-photo hero (rejected)** |
| `Slide 16_9 - 238` | Photo taxonomy for when real photos arrive | — |
| `BATCH` (`32523`, `3523`, `56465`) | Condensed headlines; a product UI plate beside display type | Charcoal surfaces, uppercase eyebrows |
| `2141` | A ruled step grid with small numbers → **Health Check 01/02/03** (a real sequence) | Black cells |
| `436643` / `543` (BPM) | Poster colour blocking | — |
| `image 1` (Fursys) | Menu as big plain type in two columns | Grey on grey |
| `10.56.29` (hh) | — | Gradients and glow (not allowed) |

---

## 2. How each client feedback point is solved

| # | Feedback | Solution |
|---|---|---|
| 1 | Black space, long transitions | Plates on `--paper` with an **8px seam**. Never more than 8px of paper between screens. Two charcoal plates on the whole site, both small (H4 Health Check card, footer). |
| 2 | Too much scrolling | Only the hero is near-viewport height. Intro, Contact and Health Check are content-sized. Estimated homepage at 1440: **~5,600px vs 7,200px** for 8 × 100vh. The hero fits above the fold at 1280×800 / 1440×900 / 1920×1080. |
| 3 | Opening image | Stageshow **VDI console loop** in the orange hero plate. No photography. |
| 4 | Slow intro / space above "OK." | Intro plate 8px below the hero. "OK, before we go any further…" is its display line, starting at the plate's top padding. |
| 5 | Photo arrangement | Photos only in grid plates (split 7+5, bento 6/3/3) beside their text. No full-bleed banners. |
| 6 | Services and contact buried | Hero CTAs, the nav (Services + Health Check button), the menu (all 7 services) and homepage screen 4 = Services. |
| 7 | "Tech" label | Not used anywhere (labels, slugs, alt, ARIA). `/services`. I'll grep the build for `\bTech\b`. |
| 8 | Not enough brand | **Orange nav pill**, a full-screen **orange menu plate** with display-size type, and a family colour on every screen. Charcoal stays an accent. |
| 9 | History too prominent | No history on the homepage; the team screen is a light row. |
| 10 | Service pages led with detail | Template: **Essence** → why it matters → what's included → how we work → related → contact. |
| Keep | Central message, humour, doctor image, tech names early | Hero headline; copy verbatim; doctor plate on S2 plate 1 (placeholder until the original arrives); the 5 platforms in the hero above the fold. |

---

## 3. Tokens

### 3.1 Colour: DESIGN_REQUIREMENTS §5 exactly

| Family | Loud | Mist | Role |
|---|---|---|---|
| Orange | `--orange #FF521D` | `--orange-mist #F4E8E8` | Primary brand / action: hero, primary buttons, CTA screen, **nav + menu** |
| Green | `--green #0AB574` | `--mint-haze #E4F5DF` | Health & proof: Health Check, green flags |
| Pink | `--pink #FC029C` | `--pink-mist #F5DFEF` | People & personality: intro, care, testimonials |
| Charcoal | `--charcoal #2F2F2F` (+ `--ink #141414`) | — | Text, buttons, 1–2 emphasis plates, footer |

Neutrals:

- `--paper #FAF8F6`: page
- `--grey-100`: neutral plates and image placeholders
- `--grey-300`: hairlines, inactive arrows
- `--grey-500`: icons only, never text
- `--grey-700`: muted body text and captions on light surfaces
- `--white`: text on charcoal only

**Contrast, re-computed (WCAG 2.x)**

| Surface | charcoal | ink | grey-700 | white | What I put on it |
|---|---|---|---|---|---|
| paper / grey-100 / mists | 10.6–12.6 | 14.6–17.4 | 5.4–6.5 | ✗ | Display + title in charcoal, body in grey-700 or charcoal |
| orange | 4.13 | **5.68** | ✗ | 3.24 ✗ | Display/title charcoal, **body + links ink**, charcoal button with white text |
| pink | 3.59 | **4.94** | ✗ | 3.73 (large only) | Display/title charcoal, body ink |
| green | **5.02** | 6.91 | ✗ | ✗ | Everything in charcoal |
| charcoal | — | — | ✗ | **13.39** | White text; light logo (11.78) |

The requirements table rounds a few values (ink/orange 5.8 vs my 5.68; ink/green 7.1 vs 6.91). Every pairing still passes.

**Rules I'm holding to**

- A loud plate only touches its **own mist** or paper.
- Two loud plates never touch, including across the 8px seam between screens. A loud plate that ends a screen is followed by a mist or neutral plate.
- ≤ 2 plate colours per screen (+ paper).
- No two adjacent screens share a family.
- The page starts and ends on orange.
- Charcoal: 2 plates in total.
- Focus ring: a 2px charcoal outline everywhere.

**Buttons**

- **Primary:** orange with ink text on paper and mists; charcoal with white text on an orange plate.
- **Secondary:** a 1px charcoal outline with charcoal text.

**Screen rhythm**

| Page | Screen order and families |
|---|---|
| Home | **Orange** → Pink-mist → Mint + photo → Neutral + charcoal → **Green** → Neutral → **Pink** → **Orange** → Footer (charcoal) |
| Services | **Orange** → Pink-mist + photos → Neutral → **Green** → **Orange** |

### 3.2 Type: 4 sizes, 2 families, 3 weights in use

| Token | Font / weight | Size (1280 / 1440 / 1920) | Leading / tracking |
|---|---|---|---|
| `display` | Review Condensed **Bold** | `clamp(7.5rem, 1.6rem + 7.4vw, 10rem)` → 120 / 132 / 160px | 0.92 / −0.01em |
| `title` | Aeonik Pro **Medium** | `clamp(1.75rem, 0.75rem + 1.4vw, 2.25rem)` → 30 / 32 / 36px | 1.15 / −0.005em |
| `body` | Aeonik Pro **Regular** | `clamp(1.0625rem, 0.9rem + 0.25vw, 1.125rem)` → 17 / 17.5 / 18px | 1.55; max 62ch; `--grey-700` on light, `--ink` on loud |
| `small` | Aeonik Pro Medium | 13px | 1.4 / +0.01em; sentence case |

- Display:body is **≥ 7:1** at every width.
- Review Medium and Aeonik Bold are unused (2 weights per family max). `font-synthesis: none`.
- `font-display: swap`, Review Bold woff2 preloaded, and metric-matched fallbacks (`size-adjust`, `ascent-override`) so font loading causes no layout shift.
- The hero headline is uppercase because copy.md is. Everything else is sentence case as written.

### 3.3 Spacing: 6 values

`8 / 16 / 24 / 48 / 96 / 160`

- Seam between plates and screens: **8**
- Plate padding: **48**
- Headline → body: **24**
- Body → plates: **48**
- Hero top padding: **96**
- **160** only inside the hero plate at 1920×1080. Never a gap between screens.

### 3.4 Grid

- **12 columns** (`--cols`), **8px gutter** (`--gutter`), **24px outer margin** (`--margin`).
- No max width: columns stretch from 1280 to 1920, so there are no empty side bands. Readability comes from the 62ch measure.
- Column width: ~95px @1280, ~109 @1440, ~149 @1920.
- Plates span whole columns via span classes (`span-7`, …).

**Plate layouts**

- `full`: 12
- `split`: 7+5 or 6+6
- `bento`: 6/6 + 4/4/4, or 6/3/3
- `rail`: a horizontal scroll row, team only

### 3.5 Radius

**16px** on every plate and photo. Buttons and the nav are pills (999px). *(Default taken, since you didn't comment on this one.)*

### 3.6 Motion

- `--ease: cubic-bezier(0.25, 0.8, 0.25, 1)` (one curve)
- `--dur-1: 300ms` (UI)
- `--dur-2: 800ms` (rise)
- Only `transform` and `opacity` are animated. Hover colour changes are instant.

---

## 4. Screen-by-screen plan

Height key: **V** = about one viewport, **C** = content-sized. Motion key: **R** = rise, **S** = sticky, — = none.

### Homepage `/`

| ID | copy.md | One idea | Layout & plates | Colours | Height | Motion |
|---|---|---|---|---|---|---|
| H1 | Screen 1 | Your first and last VDI partner | `full` **orange** plate. Headline across 12 cols at the top. Lower row: **5 cols** with the platform line (ink) + 2 CTAs (charcoal primary, outline secondary); **7 cols** with the stageshow console on an orange-mist ground, corner-bled off the plate's right and bottom. | Orange + orange-mist | V (above the fold at all 3 sizes) | hero loop only |
| H2 | Screen 2 | Serious about VDI (with a wink) | `full` **pink-mist** plate. Eyebrow "So, who are we?" (small) → **display "OK, before we go any further there's something you should know."** → body (7 cols) beside the supporting line at title size (5 cols, hairline above) | Pink-mist | **C** | R |
| H3 | Screen 4 | When we're in, we're all in | `split` 7+5: photo plate (7) `[PLACEHOLDER: Screen 4 banner photo/video]` on grey-100 + **mint-haze** plate (5) with display + body | Mint-haze + placeholder | C | R |
| H4 | Screen 7 | Pick where to start | `full` grey-100 headline plate: display **"Services."** → `bento`: Managed (6) · **Health Check (6, charcoal emphasis plate, white text)** · Infrastructure / Healthcare SSO / IGEL (4/4/4) · Nerdio / Hybrid Cloud (6/6). Each card is a whole-card link to `/services/[slug]` with title + body + arrow. | Grey-100 + charcoal | C | R (stagger 80ms) |
| H5 | Screen 5 | Our green flags | **Green** headline plate (12) → 5 **mint-haze** stat plates (`bento` 6/6 + 4/4/4: value at title size, label at body). "Tech managed" is one of the 6-col plates, listing the 5 platforms. | Green + mint-haze | C | R |
| H6 | Screen 3 | Serious, not too serious | `full` grey-100 plate: display → `rail` of 12 team plates (`[PLACEHOLDER: photo]` at 4:5 + name + title, small) with horizontal snap `x proximity` and ‹ › buttons → secondary button "Get to know the team better" → `/about` | Neutral | C | R (no autoplay) |
| H7 | Screen 9 | Other people vouch for us | **Pink** headline plate (12, display charcoal) → 3 **pink-mist** quote plates (4/4/4: quote at title size, attribution small grey-700) | Pink + pink-mist | C | R |
| H8 | Screen 11 | Let's talk | `split` 7+5: **orange** plate with display + body (ink) + charcoal button "Start a conversation." + orange-mist plate (5) holding `[PLACEHOLDER: contact details]` | Orange + orange-mist | **C** | R |
| — | footer | — | **Charcoal** plate (radius 16, inset like any plate): light logo, nav and service links in white, `[PLACEHOLDER: legal line]`. Compact, ~200px. | Charcoal | C | — |

Seam check: H1 orange → H2 pink-mist ✓ · H5 ends mint → H6 grey ✓ · H6 grey → H7 pink ✓ · H7 ends pink-mist → H8 orange ✓.

### Services `/services`

| ID | copy.md | One idea | Layout & plates | Colours | Height | Motion |
|---|---|---|---|---|---|---|
| S1 | Screen 6 | One connected system | `split` 7+5: **orange-mist** plate (7) with display + 2 paragraphs + "Explore Services" (anchors to S3) · **orange** plate (5) with a **stageshow still**: a connected-stack diagram (Identity · Security · Infrastructure · Cloud · Desktop, connectors, one path highlighted) | Orange + orange-mist | C | R |
| S2 | Screen 8 | People first | **Pink-mist** headline plate (display + body) → `bento` 6/3/3: plate 1 = **doctor image** `[PLACEHOLDER]`, plates 2/3 `[PLACEHOLDER]`. Under each photo, a pink-mist strip with title + body. | Pink-mist + placeholders | C | R |
| S3 | Screen 7 | Every service at a glance | Grey-100 headline plate: display **"All services."** → `full` index of 7 rows (title 5 cols · body 6 · arrow 1), grey-300 hairlines, each row a link. Same data as H4, in a different rhythm. | Neutral | C | R |
| S4 | Screen 10 | A free second set of eyes | `split` 7+5: **green** display plate "Are we good?" + mint-haze plate with 2 paragraphs → 3 **mint-haze** step plates (01/02/03: number small, title, body), **sticky stacking** | Green + mint-haze | C (3 × ~320px + 2 × 24px offset) | R + **S** (the only sticky section) |
| S5 | Screen 11 | Let's talk | Shared `ContactScreen` | Orange + orange-mist | C | R |

### Service template `/services/[slug]` (7 slugs)

Slugs:

- `vdi-managed-services`
- `free-vdi-health-check`
- `vdi-infrastructure`
- `healthcare-sso-authentication`
- `igel-endpoint-solutions`
- `nerdio-solutions`
- `hybrid-cloud-infrastructure-modernization`

| ID | One idea | Content | Layout & colours | Height | Motion |
|---|---|---|---|---|---|
| T1 Essence | What it is and why it matters | Display = service name; body = copy.md paragraph (verbatim); primary button "Start a conversation." | `split` 7+5: mist text plate + loud visual plate `[PLACEHOLDER: service visual]`. Family per service: **Health Check → green**, **Healthcare SSO → pink**, the other 5 → **orange**. | C | R |
| T2 Why it matters | The outcome | `[PLACEHOLDER: headline + ≤ 2 short paragraphs]` | `full` grey-100 | C | R |
| T3 What's included | Technical detail | `[PLACEHOLDER: 3–6 items, title + one line]` | `bento` 4/4/4 in a mist that isn't T1's family | C | R |
| T4 How we work | Process | `[PLACEHOLDER: 3 steps]` (the Health Check page reuses Screen 10's 3 steps) | `bento` 4/4/4 grey-100 | C | R |
| T5 Related | Next service | 3 other `ServiceCard`s | `bento` 4/4/4 | C | R |
| T6 Contact | Let's talk | Shared `ContactScreen` | Orange | C | R |

On orange-family services (T1 orange → T6 orange), T2–T5 stay neutral or another family so the rhythm still cycles.

Each screen is its own component (`components/screens/home/Hero.tsx` etc.). A page is an ordered list of screens: delete or reorder one line.

---

## 5. Motion map (whole site)

| # | What | Where | Trigger | Spec | Why | Reduced motion |
|---|---|---|---|---|---|---|
| 1 | **Rise** | Plates on every screen except the hero | IntersectionObserver, once, 15% visible | translateY 24px → 0, opacity 0 → 1, `--dur-2`, `--ease`. Stagger 80ms in reading order. | Guides reading order; one shared `<Rise>` | Shown instantly |
| 2 | **Sticky stacking** | S4 Health Check steps only | CSS `position: sticky`, `top: nav + n × 24px` | Each card slides over the last. No JS, scale or fade. Clean release at the section's end. | "Slide over" for a real 3-step sequence | Normal flow |
| 3 | **Hero loop** | H1 stageshow console | In view (paused off-screen and when the tab is hidden) | ~14s per scene, 2 scenes (28s cycle) | The one moving visual | Static poster frame |
| UI | Menu open/close | Nav | Click / Esc | Opacity + translateY −16 → 0, `--dur-1` | Answers a person's action | Instant |
| UI | Team rail ‹ › | H6 | Click | `scrollBy` one card, smooth; snap `x proximity` | User-driven, no autoplay | `behavior: auto` |
| UI | Card arrow | Service cards | Hover / focus | Arrow translateX 4px, `--dur-1` | Affordance | None |

Not used: parallax, letter animation, scroll-jacking, cursor followers, loaders, stretch, `mandatory` snap, page-level snap.

---

## 6. Hero moving visual (stageshow)

- **Story shape:** "what the system does", with no cursor. A VDI operations console catches a slow desktop pool and Spadafy fixes it: logon time drops and users come back.
- **Look:**
  - Kit `light` theme mapped to the site tokens: white window over `--orange-mist` chrome, `--ss-font` = Aeonik, `--ss-accent` = charcoal, success = `--green`, warning = `--orange`.
  - The green success pill sits on white inside the window, not touching the orange plate.
  - Standard fidelity. Platform names as text (or the kit's `BrandMark` if it has the real marks; never look-alikes). No invented product name.
- **Frame:**
  - Corner bleed on the orange plate, stage **440px tall**, as wide as its 7-col slot: ~715 @1280 / ~809 @1440 / ~1089 @1920.
  - UI text stays native 13–14px (stage width tracks the slot, so a wider screen shows more table, not bigger type).
  - The window is inset ~10% top/left and runs 20–30% off the right and bottom.
- **Real strings (≤ 7):**
  1. "Desktop pools"
  2. "Clinical · Omnissa Horizon"
  3. "Finance · Azure Virtual Desktop"
  4. "Remote · Citrix"
  5. "Logon time"
  6. the satellite title
  7. its result

  Everything else is bars.

**Storyboard, scene A (~14s)**

| t | Beat |
|---|---|
| 0.0 | **Finished still:** 3 pools; Clinical shows a "Logon time 41s" warning pill. |
| 1.2 | A satellite card arrives, straddling the window's left edge over its sidebar: "Health check finding: profile storage latency". |
| 3.2 | 3 fix lines tick in, staggered 60ms (one real line: "Storage tier rebalanced"). |
| 6.0 | "41s" rolls to "12s"; the pill changes on itself, Warning → Healthy. |
| 7.4 | Sessions roll 1,204 → 1,318. |
| 8.5–10.5 | **Payoff holds 2s;** the satellite reads "Resolved". |
| 10.5–11 | The satellite exits in a reverse stagger. |
| 11–14 | **Conveyor:** the Finance row takes the warning ("Autoscale lag") and scene B begins. Data never rewinds on screen. |

- **Scene B** mirrors A on Azure Virtual Desktop.
- **Poster:** scene A at 9.0s (all healthy, "Resolved").
- **Verification:** `film.mjs --gate` at 715 / 809 / 1089 plus `--states`; `REHEARSAL.md` beside the component.

---

## 7. Nav and expanded menu

**Nav bar**

- Sticky at `top: 8px`, inside the margins.
- An **orange pill** holding:
  - the **dark logo** (`refs/dark.svg`, unchanged, 28px tall) linking home
  - "Services", "About", "Contact" in ink (5.7:1)
  - a **charcoal "Free VDI Health Check" button** with white text
  - a "Menu" button (`aria-expanded`, `aria-controls`)
- One state: no hide-on-scroll, no colour change.
- **Over the orange hero:** the pill keeps a 1px charcoal hairline so its edge reads.
- **When it floats over the green (H5) or pink (H7) loud plates while scrolling:** the pill's contents stay legible (ink on orange), but two loud colours touch for a moment. If you'd rather avoid even that, the fallback is a charcoal pill with an orange Health Check button, keeping the orange menu (Q2).

**Expanded menu:** a full-viewport **orange plate** inset 8px (radius 16) above the page.

- **Left 7 cols:** "Services", "About", "Contact" at **display size** (Review Bold, charcoal), the current page marked by a charcoal bar.
- **Right 5 cols:** the 7 services at title size in charcoal, each linked, and the charcoal "Free VDI Health Check" button at the foot.
- **Behaviour:**
  - The "Menu" button becomes "Close".
  - Focus trap, Esc closes, focus returns to the trigger.
  - Body scroll locked; `inert` on the page behind.
- **Fit:** fits 1280×800 without scrolling.

---

## 8. Open questions

**Resolved:**

- Palette → DESIGN_REQUIREMENTS §5
- Page split → CLIENT_FEEDBACK
- Headlines → "Services." / "All services."
- Logo → `dark.svg` + light symbol
- Media → placeholders
- Font → trial for the design phase

**Still open (I'll go ahead with the default in brackets):**

1. **CTA labels** (not in copy.md): hero "Explore Services" + "Free VDI Health Check", nav "Free VDI Health Check", and the hero platform line from Screen 5. *[yes]*
2. **Nav colour:** orange pill (client feedback #8) vs a charcoal pill with an orange CTA (DESIGN_REQUIREMENTS role table). *[orange pill]*
3. **Links without destinations:**
   - "About" and "Get to know the team better" → *[a stub `/about` page reading `[PLACEHOLDER: About page]`]*
   - "Start a conversation." → *[`#contact` + `[PLACEHOLDER: contact destination]`]*
   - Footer legal → *[placeholder]*
4. **Service pages:** T2–T4 copy and the T1 visuals → *[placeholders this round]*

**From copy.md's Notes for review** (wording kept; placeholders stay visible)

- **1:** Carl O. title → `[PLACEHOLDER: title, see note 1]`
- **2:** "Cody H."
- **3:** stat shown as **15**, as written
- **4:** missing full stops kept
- **5:** "everyday" kept
- **6:** banner → placeholder

---

**STOP: waiting for your approval** to start Phase 3. Checks in Phase 4 run at 1280 / 1440 / 1920 only.
