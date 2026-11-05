# Client Feedback (from our previous designs)

Source: Website Messaging Brief, Nov 3 discussion.
**These points are requirements, not suggestions.** Each one fixes something the client didn't like in the previous design. If any rule elsewhere conflicts with this file, this file wins.

---

## Goal

Visitors should:
1. **recognize a problem** we can help solve,
2. **understand the value** of working with us,
3. **feel comfortable starting a conversation.**

**Audience:** busy CIOs, CTOs, IT leaders and technical teams evaluating a partner. They scan, so the value has to land in seconds, followed by enough specific detail to prove we understand their environment.

---

## What was wrong before → what to do now

| # | Previous design problem | Requirement now |
|---|---|---|
| 1 | **Too much unused black space** and long transitions between sections | Sections connect tightly. No empty dark bands, no spacer sections, no "breathing" gaps taller than the largest spacing token (160px desktop / 96px mobile) between screens. |
| 2 | **Too much scrolling** | Not every screen is full-height. Short sections (Intro, Contact, condensed Health Check) are sized to their content. Target: the homepage is noticeably shorter than a stack of 100vh screens. |
| 3 | **Opening image didn't work** | Replace it with a **technology-focused moving visual** (the one stageshow loop on the site). No stock photography in the hero. |
| 4 | **Slow intro**: long transition and dark space above "OK." | The intro follows the hero directly and is compact. Remove any empty space above "OK." |
| 5 | **Photo arrangement** | Revisit it. Photos sit in grid plates beside the content, not as isolated full-bleed banners. |
| 6 | **Services and contact buried** | Service choices and the Free VDI Health Check / contact appear **early**: in the hero CTAs, the nav, and screen 4 of the homepage. |
| 7 | **"Tech" label** | Rename to **"Services"** everywhere: desktop nav, mobile nav, expanded menu, overview title, links, page slugs (`/services`), and alt or ARIA text. |
| 8 | **Not enough brand**: dark and neutral, little personality, plain menu | Use more of the approved Spadafy colours (see DESIGN_REQUIREMENTS.md §5), especially in the **menu and navigation**. The expanded menu is a brand-colour plate with large type. Charcoal stays an accent, never the dominant surface. |
| 9 | **Company history too prominent** | Keep the homepage human and short. Extended history goes on About Us. |
| 10 | **Service pages led with detail** | Each service page leads with its **essence** (what it is and why it matters), then technical detail. |

## Keep (the client liked these)

- **"Your first and last VDI partner"** as the central message
- The **human voice and personality** of the copy (the humour stays)
- The **image associated with "Giving doctors more time with patients."**
- Our surrounding **technology expertise** (Citrix, Omnissa Horizon, AVD, Nerdio, Imprivata), visible early

## Process expectation

Build the **fuller version** first. The client wants to review the layout and trim it together, so **don't cut copy**. Make sections easy to remove (one component per screen).

## Checks before handing over

- [ ] No empty dark space between any two sections; no spacer sections
- [ ] Hero shows the central message, tech expertise and both CTAs above the fold at 1440px and 375px
- [ ] Services are reachable from the hero, nav and homepage screen 4, with every service linking to its page
- [ ] The word "Tech" doesn't appear as a label anywhere
- [ ] The menu and nav use brand colour; the expanded menu is a colour plate
- [ ] The doctor image is kept on the "Giving doctors more time" plate
- [ ] Homepage order matches copy.md: Hero → Intro → All in → Services → Green flags → Team → (Testimonials) → Contact
- [ ] Services page order matches copy.md: Connected → Care → All services → Health Check (condensed) → Contact
