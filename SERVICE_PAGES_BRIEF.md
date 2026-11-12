# Service Pages: Grayscale Prototype Brief

Status: **draft, waiting for approval.** Nothing is built yet. The current state is committed as `cb3b6ed` ("before service pages prototype").

Scope: 7 standalone pages at `/services/[slug]`, desktop only (1440 main, checked at 1280 and 1920). There is no `/services` hub page. All 7 pages come from one template.

Inputs read: `service page.md`, `refs 2/image 1.png` (main reference), every other image in `refs/` and `refs 2/`, `copy.md`, `CLIENT_FEEDBACK.md`, `DESIGN_REQUIREMENTS.md` (colour section ignored, as you asked).

---

## 1. What I take from `refs 2/image 1.png`

The reference is a full-page capture of an IoT services page. Some sections were caught mid-animation, so a few blocks look faded or overlapping. What I take from it is the **structure**, not the colours or the dot-wave graphics.

**Layout and grid**
- One left-aligned content column inset about 13% from each edge (≈180px of 1378px). At 1440 that is ≈1060–1120px of content with ≈160px margins. Content never runs edge to edge. Only the background bands do.
- Everything hangs off one left edge: headline, body, buttons, list rows and grid columns all start on the same vertical line. That shared edge is most of why the page feels calm.
- Body paragraphs fill only about 55–60% of the content width, even when there's room. Text columns stay short.
- Detail sits in a simple **3-column grid** (title + muted paragraph) or a **2-column grid** (two lists side by side). There are no cards, borders or shadows. Whitespace separates the columns.

**Spacing**
- Sections are separated by large, even vertical space (≈120–160px). Inside a section, the steps are smaller and consistent: headline → body ≈32px, body → grid ≈64px, grid → CTA ≈64px.
- Every section ends with its own left-aligned CTA, so a next step is always in reach.

**Type**
- One sans family, two weights. Headlines are moderate: the hero is about 48px at that width, section headings about 30px, item titles about 20px, and body 16–17px. There is no oversized display type.
- Hierarchy comes from size and colour (black titles, muted grey body). Weight changes are rare.

**Section treatment**
- A **section opener** separates each major section: a short band with the section headline, then a band with a 2–3 line intro, then the detail on white. It signals "new chapter" clearly, but the bands are too tall and partly empty. That is the "empty dark band" problem the client flagged, so I keep the idea and make it **compact and content-filled**.
- Technical detail appears as **scannable lists**: hairline-separated rows with an icon, a short label and a `+` to expand (the industries block), or an ordered step list with the active step's description beside it (the roadmap block, which is sticky in the original).
- The case study is a **split**: label + title + arrow link on the left, image on the right, prev/next arrows below. It is a browsable set.
- The footer is dark with one statement line and the contact details.

**Secondary refs (fresh look, lower priority)**
- `image 2090010830` / `2090010898` / `image 35`: hairline rows with small labels and `+` toggles, lots of white, and meta text set small. These confirm the list treatment.
- `image 2090010896`: a sticky left list where the active item is highlighted while the image on the right stays. This confirms sticky for ordered sequences.
- `refs/2141.png`: numbered step tiles (01 Consulting … 06 Service). This is a simple, technical way to show process.
- `image 2090010895` / `2090010828`: horizontal rails with visible overflow and arrows for browsable sets.
- The loud ones (Batch, Habitat, HubSpot) are brand-expression refs. They don't apply to a grayscale structural prototype, so I set them aside for now.

---

## 2. The template

Every page follows the order in `service page.md`: **essence first → compact visual break → supporting detail → CTA again**. Each block below is one component, so we can remove, merge or reorder blocks during review.

Grid: 12 columns, 1120px content at 1440 (see §3). "Cols 1–7" means grid columns.

| # | Section | Layout | Motion | Reason |
|---|---|---|---|---|
| **A** | **Essence** | | | |
| 1 | **Opening**: eyebrow (service icon + service name), lead headline (display), essence paragraph, primary CTA (service-specific), and a secondary text link to the Free VDI Health Check. Health Check page: the three home-page steps sit here (see §4). | Split 7 + 5: text on cols 1–6, grey placeholder visual on cols 8–12 `[IMAGE: service visual]`. White surface. Height fits the content (≈ 70vh), not 100vh. | **None.** It's visible on load, without waiting. | Above-the-fold content shouldn't be delayed. The essence has to land in seconds. |
| 2 | **Customer pressures** ("the recognizable problem"): 2–3 short statements, each with a line icon. | 3 columns (4 + 4 + 4) with icon on top, then the statement. A hairline above. No heading at display size. A small label carries the section. | **Rise** (staggered, left to right). | Reading order is the point: problem 1, 2, 3. A stagger lets each one register. |
| **B** | **Compact visual break** | | | |
| 3 | **Overview band**: small label "What it covers", the `copy.md` short description at title size (cols 1–7), and the service's technologies as **text logos** (cols 9–12). | Full-bleed `surface-alt` band. Height fits the content (≈ 200–240px), with no empty area. It replaces the reference's two tall bands. | **None.** | Its job is to mark the switch from essence to detail. Motion would compete with that. |
| **C** | **Supporting detail** | | | |
| 4 | **Capabilities** ("Details worth keeping"): 3 items, each an icon + one sentence. | Section title on cols 1–4, **sticky** while the list scrolls. List on cols 6–12: hairline rows, icon, sentence (≤ 60ch). | **Sticky heading.** | The heading stays in view as context while you scan the rows. That's the technical "spec sheet" reading pattern. |
| 5 | **Supported technologies**: one cell per platform, with the platform text logo and a one-line "what we cover" note. | 4-column grid of hairline-topped cells (3 for fewer platforms). Text logos in one consistent style (see §3). | **None.** | Four to six items fit on one row, so they don't need a scroll mechanic. |
| 6 | **Service options** (e.g. Full Managed vs Retainer). | Split 6 + 6: two `surface-alt` plates, each with a title, a 2-line description and a short bullet list. | **Rise.** | Two plates arrive together and read as a side-by-side choice. |
| 7 | **How it works** (Health Check only, where the source has steps). | Numbered steps (01 / 02 / 03) as **sticky stacking cards**: each card pins below the nav and the next slides over it. | **Sticky stack.** | It's an ordered sequence. Stacking makes the order physical, and you can't skip ahead without passing a step. |
| 8 | **Practical examples**: approved project stories (to be supplied). | Horizontal **rail** of split cards: grey image block `[IMAGE: project photo]` + client type + one-line outcome. Visible overflow on the right, prev/next arrows. | **Horizontal scroll.** | It's a browsable set of unknown length. The rail keeps the page short whether there are 2 stories or 6. |
| 9 | **What you can expect**: deliverables and working norms. | 2-column checklist (cols 1–6 / 7–12), check icon + sentence, hairline rows. | **None.** | It's a short static list, and the sections on either side already move. |
| 10 | **FAQs** (VDI Managed Services lists them). | Section title on cols 1–4, accordion on cols 6–12: hairline rows with a `+` toggle, the same treatment as the reference's industries block. | **None** (the disclosure is user-triggered, not scroll-triggered). | It keeps the page short by default. Visitors open only what they need. |
| 11 | **Final CTA + inquiry form**: service CTA line, short form (name, email, company, message) with a **service field preselected** to this page's service. | Inverse plate (`surface-inverse`) inside the grid, not a full-bleed band: CTA text on cols 1–5, form on cols 7–12. | **Rise.** | This is the last action on the page. One entrance brings the eye to it. |
| 12 | **Next service**: a full-width link row with the next service's icon + name + `copy.md` description + arrow. The 7th page loops back to the 1st. | Hairline-topped row across cols 1–12. Hover: the arrow moves 8px. | **None.** | It's navigation, not content. |

Then the existing footer.

**Motion rules as specified**
- At most one mechanic per section. No two adjacent sections share one. Order on a full page: none → rise → none → sticky → none → rise → (sticky stack) → rail → none → none → rise → none.
- **Scroll-snap: not used.** None of the sections need it. The rail uses plain `scroll-snap-type: x proximity` on its items only, so arrows and trackpads land on whole cards. Tell me if you'd rather have zero snap.
- One easing curve (`--ease`) and shared durations (`--dur-1` 300ms for UI, `--dur-2` 800ms for rise). Rise is 24px + fade, plays once.
- `prefers-reduced-motion`: rise becomes an instant show, the stack becomes a normal vertical list (not sticky), and rail arrows jump without smooth scrolling.
- This extends DESIGN_REQUIREMENTS §4 (rise / slide over / stretch). You allowed horizontal scroll and sticky for this task. The sticky stack *is* the "slide over" mechanic.

**Navigation**
- The nav's "Services" item becomes a menu that lists all 7 services (icon + name), each linking to `/services/[slug]`. It no longer links to `/services`.
- The current home page has "Explore Services" and nav links pointing to `/services`, which won't exist. I'll point "Explore Services" to the home page's services section (`/#services`). See open question 3.

---

## 3. Tokens

### 3.1 Grayscale (role-named, so brand colours can be swapped in later)

The tokens apply **only to the service pages** (set on the route's layout wrapper), so the home page keeps its brand palette.

```css
/* Scale */
--white:    #FFFFFF;
--grey-50:  #F7F7F7;
--grey-100: #EDEDED;
--grey-200: #DCDCDC;
--grey-400: #A3A3A3;
--grey-600: #6B6B6B;
--grey-800: #2E2E2E;
--black:    #0F0F0F;

/* Roles: components use only these */
--surface:            var(--white);     /* page */
--surface-alt:        var(--grey-50);   /* break band, option plates */
--surface-sunk:       var(--grey-100);  /* image placeholders, form fields */
--surface-inverse:    var(--black);     /* final CTA plate, footer */
--line:               var(--grey-200);  /* hairlines, dividers */
--text:               var(--grey-800);  /* headlines, body, text logos */
--text-muted:         var(--grey-600);  /* secondary body, labels, meta */
--text-inverse:       var(--white);
--text-inverse-muted: var(--grey-400);
--icon:               var(--grey-600);
--action:             var(--black);     /* primary button fill; text --white */
--focus:              var(--black);     /* 2px outline; --white on inverse */
```

**Contrast (WCAG AA, computed)**

| Text | on white | on grey-50 | on grey-100 | on black |
|---|---|---|---|---|
| `--text` grey-800 | 13.6 | 12.7 | 11.6 | n/a |
| `--text-muted` grey-600 | 5.3 | 5.0 | 4.55 | n/a |
| `--text-inverse` white | n/a | n/a | n/a | 19.2 |
| `--text-inverse-muted` grey-400 | 2.5 ✗ | n/a | n/a | 7.6 |

Rules that follow from this: grey-400 is **never text on light surfaces**, and is used only for decoration and disabled-state lines. No text goes on grey-200 (muted text there is only 3.9). Icons in grey-600 are 5.3:1, above the 3:1 non-text minimum.

### 3.2 Type (four sizes, Review Condensed + Aeonik Pro)

| Token | Use | 1280 / 1440 / 1920 | Font |
|---|---|---|---|
| `display` | One headline per section (the lead, and section titles) | 56 / 64 / 72px | Review Condensed Medium, leading 1.0, tracking −0.01em |
| `title` | Overview band statement, plate titles, text logos | 24 / 26 / 28px | Aeonik Pro Medium, leading 1.25 |
| `body` | Paragraphs, list rows | 17px | Aeonik Pro Regular, leading 1.6, measure `--measure` (≈ 58 characters) |
| `small` | Eyebrows, labels, meta, captions | 13px | Aeonik Pro Medium, tracking 0.02em |

- Display drops from 86–104px (home v2) to **56–72px**, as you asked ("moderate headline sizes"). **This breaks DESIGN_REQUIREMENTS §1** (display 96–160px, display:body ≥ 5:1). At 1440 the ratio is 3.8:1. I'm treating your instruction as the override for service pages. Flagged so it's a conscious decision.
- **Text logos**: the platform name in Aeonik Pro Medium at `title` size, `--text` colour, no icon, the vendor's own capitalisation (e.g. "Omnissa Horizon", "IGEL OS"), and a `small` muted "Platform" / "Partner" label above. Every logo is set the same way.
- Weights: Review Medium only. Aeonik Regular + Medium only (Bold not used).

### 3.3 Spacing and grid (scale raised, still six values)

| Token | Home v2 | Service pages | Used for |
|---|---|---|---|
| `--s-1` | 8 | 8 | icon ↔ label |
| `--s-2` | 16 | 16 | label ↔ text, row padding |
| `--s-3` | 32 | 32 | headline ↔ body, **gutter** |
| `--s-4` | 64 | 64 | body ↔ grid, plate padding |
| `--s-5` | 96 | **128** | section padding (top) |
| `--s-6` | 160 | 160 | outer page margin at 1440, sticky offsets |

- **Gutter**: 16 → **32px** (`--s-3`).
- **Outer margin**: 64 → **160px** at 1440 (`--s-6`). Content is capped at **1120px** and centred, so at 1920 the margins grow to 400px and the measure stays the same. At 1280 the margin stays at 160 (960px content). That's the reference's proportion.
- **Between sections**: one `--s-5` (128px) gap plus a hairline. That's within CLIENT_FEEDBACK #1's limit (no gap taller than 160px), and it's much more air than now.
- `--s-5` changes globally from 96 to 128, which also adds air to the home page. If you want the home page untouched, I'll scope the new value to service pages like the colours. See open question 4.
- Radius: one value, `--radius` 16px, kept. Plates: `surface-alt`, no borders, no shadows.

### 3.4 Icons
Lucide (already installed), 24-grid, stroke 1.5, `--icon` colour. Service icons are the ones already in `ServiceIcon.tsx` (MonitorCog, Activity, Server, Fingerprint, Laptop, Workflow, CloudCog). Capability and pressure rows get one icon each (e.g. Wrench, Users, Layers, ShieldCheck, Gauge), and checklists use `Check`.

---

## 4. Content per service: what exists and what's a placeholder

Copy sources: **SP** = `service page.md` (lead, essence, customer pressures, details, CTA), **C** = `copy.md` (name + short description). All of it is used verbatim, including small typos, which are listed in §5.

`✓` = real copy · `◐` = partial · `☐` = `[PLACEHOLDER: …]`

| Section | VDI Managed | Health Check | VDI Infra | Healthcare SSO | IGEL | Nerdio | Hybrid Cloud |
|---|---|---|---|---|---|---|---|
| 1 Opening (lead, essence, CTA) | ✓ SP | ✓ SP + 3 steps from C Screen 10 | ✓ SP | ✓ SP | ✓ SP | ✓ SP | ✓ SP |
| 2 Customer pressures | ✓ 3 | ✓ 2 | ✓ 3 | ✓ 2 | ✓ 3 | ✓ 2 | ✓ 3 |
| 3 Overview band (C description + text logos) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 4 Capabilities | ✓ 3 | ✓ "What we review" (5, with titles) | ✓ 3 | ✓ 3 | ✓ 3 | ✓ 3 | ✓ 3 |
| 5 Supported technologies | ◐ Horizon, Citrix, AVD, W365. ☐ per-platform note | ☐ platforms in scope | ☐ platforms + on-prem/cloud | ◐ Imprivata. ☐ clinical apps | ◐ IGEL OS, IGEL UMS | ◐ Nerdio Manager, AVD, W365, Intune | ☐ platforms |
| 6 Service options | ◐ Full Managed / Retainer (1 line each in SP). ☐ bullets | omitted (single free offer) | ☐ | ☐ | ☐ | ☐ | ☐ |
| 7 How it works (sticky stack) | omitted | ✓ 3 steps (SP) | omitted | omitted | omitted | omitted | omitted |
| 8 Practical examples (rail) | ☐ 3 stories | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 9 What you can expect | ☐ | ✓ "What you receive" (2) + scope note | ☐ | ☐ | ☐ | ☐ | ☐ |
| 10 FAQs | ☐ 5 Q&A (SP lists "FAQs", no content) | omitted | omitted | omitted | omitted | omitted | omitted |
| 11 Final CTA + form | ✓ "Talk to a VDI expert" | ✓ home contact copy (C Screen 11) | ✓ | ✓ | ✓ | ✓ | ✓ |
| 12 Next service | ✓ → Health Check | → VDI Infra | → SSO | → IGEL | → Nerdio | → Hybrid | → VDI Managed |

Placeholder wording follows your pattern, e.g. `[PLACEHOLDER: 3 approved project examples: client type, challenge, outcome, ~25 words each]`, `[PLACEHOLDER: 5 FAQs with ~40-word answers, from the Oct 30 technical document]`, `[PLACEHOLDER: one line per platform on what we manage, ~12 words]`. Placeholders are styled as dashed-outline grey blocks so nobody reads them as final copy.

**Most of the supporting detail is placeholder because the October 30 technical document isn't in the repo.** SP says it's the source for sections 5, 6, 8 and 9. With it, most of the ☐ cells become ◐ or ✓.

---

## 5. Notes and conflicts in the source (kept verbatim, flagged here)

1. **Health Check repeats its steps.** SP puts the home page's 3 steps at the top *and* a separate 3-step "How it works" lower down. For the first pass I show both, since the client asked for "more, then refine". I recommend merging them after review.
2. **Health Check CTA text in SP** is a rough version of the home contact copy ("shoot us a message were quick texters don't work"). I use the clean `copy.md` Screen 11 wording, as SP says "(like home page)".
3. **Typos kept verbatim** in SP: "We`ve" (backtick), "the experience" (probably "that experience"), "Standard desktops are more vulnerable to security threats, IGEL is a hardened OS" (comma splice), and a double space in "across  the full stack". I'll render them as written unless you say "fix obvious typos".
4. **Service name**: SP says "Healthcare SSO and Authentication **with Imprivata**", and `copy.md` drops "with Imprivata". I use the `copy.md` name in nav and headings, and Imprivata appears as a text logo.
5. **"Customer pressures"** are written as internal notes ("Clients want to save budget…"). SP says PRA should develop them into relatable stories. I show them verbatim for now. They're the first thing to rewrite.
6. **Technology Partners** is in SP but isn't one of the 7 services, so it's **out of scope** here (Cisco, Veeam etc. aren't used).

---

## 6. Open questions (answer with the approval, or I'll use the defaults)

1. **Display size 56–72px** overrides the 5:1 rule. OK? *(Default: yes.)*
2. **FAQs only on VDI Managed Services** (as in SP), or a placeholder FAQ on all 7? *(Default: VDI MS only.)*
3. **Home page links to `/services`** (the hero's outline button in `Hero.tsx` and the nav item): retarget the hero button to `/#services` and turn the nav item into the 7-service menu? *(Default: yes. These are the only home page changes.)*
4. **`--s-5` 96 → 128px**: global, or service pages only? *(Default: service pages only, so the home page stays as approved.)*
5. Can you add the **October 30 technical document** to the repo? Not needed for the first build.

After approval: build the template, fill in VDI Managed Services, and send 1440px screenshots to `screenshots/04-service-vdi-managed/`.
