# Powerhouse Law — Website Redesign PRD v2.0

**Document Status:** Active
**Version:** 2.0 (Client Feedback Round 2)
**Date:** 2025
**Owner:** Design & Development Team
**Reference Sites:** [hagestadlaw.com](https://hagestadlaw.com/) · [quastels.com](https://www.quastels.com/)

---

## 1. Executive Summary

This document captures the design direction shift following client feedback on the v1 redesign. While the v1 concept successfully communicated **strength and authority**, the client has identified that the predominantly dark + bright-red palette reads more as a **fitness or gym brand** than a premium law firm. The v2 direction softens the aesthetic by introducing alternating dark/light sections, restraining red to an accent role, reducing typographic weight, adding brand-derived design elements, and increasing whitespace — while preserving the gravitas and confidence of the v1 layout.

**Core principle for v2:** *Combine the editorial sophistication of hagestadlaw.com with the refined institutional polish of quastels.com.*

---

## 2. What's Working (Retained from v1)

- Overall layout structure and section composition
- Premium animation language and micro-interactions
- Hamburger menu drawer experience on mobile
- AI Chat Assistant concept and positioning
- Loading screen concept
- Strong typographic hierarchy (just needs softening)
- Animation timing and cinematic transitions

---

## 3. Key Design Direction Changes

### 3.1 Color Palette Shift

| Element | v1 (Current) | v2 (Target) |
|---|---|---|
| Primary surface | `#060606` near-black | Charcoal `#1a1a1a` for dark sections + warm off-white `#f5f3ee` for light sections |
| Red accent | `#c41e1a` bright crimson | **Blood-red / oxblood** `#7a1010` – `#5a0a0a` (darker, more sophisticated) |
| Body text (dark sections) | Cream `#f0eee8` | Warm cream `#e8e4dc` |
| Body text (light sections) | N/A | Charcoal `#2a2622` |
| Muted text | `#8b8884` | Stone gray `#6e6a64` |
| Borders | Hairline cream alpha | Hairline + soft stone tones |

**Critical rule:** Red is an **accent color only** — used for buttons, icons, highlights, hover states, and CTAs. It must NOT dominate large sections. No more full-red CTA banners or full-red mobile menu buttons.

### 3.2 Light/Dark Section Alternation

The page must alternate between dark and light surfaces to create rhythm, breathing room, and visual contrast.

**New page order (homepage):**

| # | Section | Tone | Notes |
|---|---|---|---|
| 1 | Hero | **Dark** (charcoal/black) | Background imagery or animated logo watermark, with dark overlay |
| 2 | Trust Strip / Stats | **Dark** (extension of hero) | 5★ rating + 2,400+ cases moved up here, immediately under hero (like Hagestad) |
| 3 | Practice Areas | **Dark** (black/charcoal) | Service list with refined typography |
| 4 | About / Founder | **Light** (warm off-white) | Includes photo box + biography text |
| 5 | Testimonials / Reviews | **Light** (white or light stone gray) | Refined editorial card layout |
| 6 | Contact / CTA | **Dark** (black/charcoal) | Primary contact CTA + form preview |
| 7 | Results / Case Outcomes | **Light** (white) | Showcase of case results |
| 8 | FAQ | **Dark** | (Optional — could stay as-is) |
| 9 | Footer | **Dark** (deep charcoal) | Final brand block |

### 3.3 Typography Refinement

- **Reduce display font weights:** Move from Switzer 900 (Black) to Switzer 600–700 (SemiBold–Bold) for most headings
- **Reduce display font sizes:** Trim ~20% across all headings (hero, section titles, stat numbers)
- **Letter-spacing:** Less negative tracking (-0.025em max instead of -0.04em)
- **Tone:** Confident and authoritative, not aggressive or shouting

### 3.4 Shape Language — Soft Edges

- Buttons: `border-radius: 6–8px` (currently 1–2px sharp)
- Cards & containers: `border-radius: 8–12px`
- Image frames: `border-radius: 8–12px`
- Input fields: `border-radius: 6px`
- Chat panel: `border-radius: 12px`
- Maintains crispness on hairlines and dividers (no rounded dividers)

### 3.5 Whitespace Expansion

- Increase vertical section padding: `120px → 160–180px` on desktop
- Increase horizontal section padding: `52px → 72–96px` on desktop
- Increase paragraph spacing and line-height
- More breathing room between content blocks
- Tighter typographic density, looser spatial density

---

## 4. Brand Identity & Visual Elements

### 4.1 Logo as Design Element

The Powerhouse Law logo should be more deeply integrated into the visual language rather than just appearing in the nav and footer.

**Hero treatment:**
- Replace the current scrolling text ticker ("Criminal Defence · Traffic Law · …") with an **enlarged logo watermark** in the background
- The logo can be subtly animated: slow zoom, slow rotation, soft pulse, or expansion
- Should sit at low opacity (8–15%) so it provides texture without competing with the headline
- Could be positioned off-center for editorial effect

**Throughout the site:**
- Logo elements (e.g., the lettering style or central glyph) can be reused as section dividers, accent marks, or background watermarks
- Consider extracting a single icon/glyph from the logo for use as a brand mark on cards, buttons, or section openers

### 4.2 Symbolic Imagery

Add a **statue head image** that aligns with the brand identity:
- **Option A:** Lady Justice statue head (classic legal symbolism)
- **Option B:** Alexander the Great / Roman warrior bust (aligns with "Powerhouse" name and existing logo character)
- **Option C:** Greek/Roman classical bust (Caesar, Athena, generic classical)

This image should appear in the hero section (per Hagestad reference) as a layered editorial element — typically:
- Black & white or duotone treatment
- Positioned to the right of the headline content
- Partially cropped for editorial composition
- Could be paired with the logo watermark behind it

### 4.3 Full-Width Imagery with Dark Overlays

Replace some solid dark backgrounds with rich imagery to add depth and texture. Suggested image categories:

- Sydney CBD skyline (especially Parramatta CBD, given local focus)
- Architectural photography (court precincts, civic buildings)
- Interior of premium law offices (warm wood, leather, books)
- Black & white portrait/editorial shots
- Court entrance precincts (Downing Centre, Parramatta Local Court — as silhouettes/textures)

**Overlay treatment:**
- Dark gradient overlay: `rgba(20, 18, 17, 0.65)` to `rgba(10, 8, 8, 0.85)`
- Subtle blood-red tint where appropriate (very low opacity)
- Maintains text legibility while adding atmosphere

---

## 5. Section-by-Section Specifications

### 5.1 Navigation (Top Bar)

**Critical addition:** Prominent phone icon + number must be visible in the nav at all times — clients searching for urgent legal help should be able to call in one tap.

**Desktop nav layout (left to right):**
- Logo (left)
- Nav links (center): About · Services · Results · Reviews · FAQ
- Phone icon + "1800 100 529" (right, prominent)
- "Book a Consultation" button (right, rounded, blood-red)

**Mobile nav:**
- Logo (left)
- **Phone icon button** (visible, easy tap)
- Hamburger (right)

The phone CTA should be styled as a refined chip with a phone icon — not just text. Could include a subtle pulse animation or live dot to signal availability.

### 5.2 Hero Section

**Background:**
- Dark charcoal base
- Enlarged Powerhouse logo watermark (animated — slow expansion/breathing)
- Optional statue head image layered (right side, partial crop)
- Subtle dark overlay if image is used

**Content:**
- Eyebrow: "SYDNEY · NSW CRIMINAL DEFENCE" (smaller, refined mono)
- Headline: "Uncompromising / *Criminal Defence.*" — reduce weight to 600–700, reduce size by ~25%
- Subhead: ~16px, warm cream, generous line-height
- CTAs: Two buttons with **rounded corners** (6–8px radius)
  - Primary: "Book a Consultation" (blood-red, white text)
  - Secondary: "Call 1800 100 529" (outline ghost, with phone icon)

**Hero footer bar (above the stats strip):**
- Scroll hint (left)
- Subtle brand tag or location indicator (right)
- Trust dots/items REMOVED from here (moved to standalone stats strip)

### 5.3 Stats / Trust Strip (NEW position — directly under hero)

Per Hagestad reference, move stats and trust signals **immediately under the hero**. This acts as a credibility anchor immediately after the headline.

**Content:**
- ★ 5.0 Google Rating · 200+ verified reviews
- 98% Success Rate
- 2,400+ Cases Defended
- Sect. 10 Frequent Outcome

**Treatment:**
- Dark surface continuing from hero
- Refined gold star with toned-down emphasis
- Numbers in display font but **smaller and lighter weight** than v1
- Hairline dividers between blocks

### 5.4 Practice Areas (Services)

**Surface:** Dark charcoal

**Content unchanged** — 6 service rows (Criminal Defence, Traffic Law, Bail Applications, Drug Offences, AVO & Domestic Violence, Appeals & Reviews)

**Refinements:**
- Service row name weight reduced (700 instead of 900)
- More vertical padding per row (44–48px instead of 36px)
- Rounded hover state container (subtle 8px radius wash on hover)
- Description text re-enabled on tablet
- Service number style refined

### 5.5 About / Founder Section (NEW: Light Surface + Photo Box)

**Major addition** — this section needs a photo placeholder for the founder/principal lawyer (as the client mentions "a Photo of me").

**Surface:** Warm off-white `#f5f3ee` or light stone gray

**Layout (2-column on desktop):**
- **Left column:** Photo box
  - Aspect ratio ~4:5 (portrait)
  - Rounded corners (12px)
  - Subtle drop shadow for elevation
  - Could include a thin frame/border
  - Placeholder text: "PRINCIPAL LAWYER · [Name]"
- **Right column:** Biography text
  - Eyebrow: "ABOUT US" or "MEET THE PRINCIPAL"
  - Heading: "Boutique expertise. *Unmatched access.*" (in dark text on light background)
  - Body copy (introduces the founder personally)
  - Credentials list
  - "View Profile" / "Learn More" CTA

### 5.6 Testimonials / Reviews

**Surface:** Light (white or light stone gray)

**Layout:**
- Editorial card layout
- 3 cards on desktop, 1 on mobile
- Rounded corners (10–12px)
- Subtle borders / soft shadows for elevation on light surface
- Star ratings in muted gold (not bright)
- Quote attribution with case detail
- "Read all reviews →" link

### 5.7 Contact / CTA Section

**Surface:** Dark (charcoal/black with possible imagery overlay)

**Refinements from v1 CTA banner:**
- Reduce red dominance — should NOT be a full red surface
- Use dark surface with a single accent (e.g., red phone icon, red CTA button)
- More breathing room
- Add secondary content: address, hours, contact options
- Could include a small contact form preview or "Quick consultation" form

### 5.8 Results / Case Outcomes (NEW Section)

**Surface:** Light (white)

This is a new section that showcases case outcomes — important for legal credibility.

**Content suggestions:**
- 3–6 case outcome cards
- Each card: charge, outcome, court, brief description
- Anonymized client names (e.g., "Client A.M.")
- Filter chips: Drink Driving · Drug Possession · Assault · etc.

### 5.9 FAQ Section

**Surface:** Dark (kept consistent with v1)

**Refinements:**
- Reduce overall heading sizes
- Softer toggle button styling (rounded)
- More breathing room between items
- Possibly add a "Still have questions? Call us" CTA at the end

### 5.10 Footer

**Surface:** Deep charcoal

**Refinements:**
- Maintains current 4-column structure
- Uppercase Switzer 900 footer tagline reduced to 700 weight
- Add more whitespace
- Refined social icons with subtle hover states

---

## 6. Component Refinements

### 6.1 Buttons

| Variant | Background | Border | Radius | Text |
|---|---|---|---|---|
| Primary | Blood-red `#7a1010` | None | 8px | White |
| Primary Hover | Slightly lighter blood-red | None | 8px | White |
| Secondary | Transparent | 1px stone | 8px | Cream / charcoal (context) |
| Ghost | Transparent | None | — | Cream / charcoal |
| Phone CTA (nav) | Subtle red tinted bg | 1px red alpha | 6px | Cream + phone icon |

### 6.2 Cards

- Default radius: 10–12px
- Subtle borders or soft shadows for elevation
- On dark surfaces: hairline border with cream alpha
- On light surfaces: soft drop shadow + optional border
- Hover lift: 2–4px translate up + shadow deepening

### 6.3 Input Fields

- Radius: 6px
- Subtle background tint
- Focus state: blood-red accent border + soft red glow

### 6.4 Chat Assistant

**Refinements:**
- Launcher: blood-red gradient (not bright red), rounded
- Panel: softer corners (12px), warm tints
- Maintain glass effect but with warmer palette
- AI bubble background: subtle warm tint instead of cream alpha
- User bubble: blood-red tinted instead of bright red

### 6.5 Loading Screen

**Refinements:**
- Replace bright red gradient background with darker, deeper oxblood / charcoal blend
- Logo watermark animation could subtly preview the hero's logo animation
- Progress bar accent in blood-red (not bright)
- Slower, more confident animations

---

## 7. Visual Reference Mapping

| Element | Reference | What to Borrow |
|---|---|---|
| Overall structure & rhythm | hagestadlaw.com | Light/dark alternation, section order |
| Hero composition | hagestadlaw.com | Logo watermark + statue head layered |
| Stats placement under hero | hagestadlaw.com | Trust strip immediately after hero |
| About section with photo | hagestadlaw.com | 2-column with founder photo |
| Editorial restraint | quastels.com | Refined typography, generous whitespace |
| Premium institutional feel | quastels.com | Color restraint, sophisticated palette |
| Soft shape language | hagestadlaw.com | Rounded buttons and cards |

---

## 8. Implementation Phases

### Phase 1: Foundation (Highest Priority)
1. Update color system in CSS variables (blood-red, charcoal, off-white)
2. Reduce display font weights globally (900 → 700)
3. Add border-radius variables and update buttons + cards
4. Update nav: add prominent phone CTA with icon

### Phase 2: Section Rework
1. Hero: Replace text ticker with logo watermark animation
2. Hero: Add statue head image slot (placeholder for now)
3. Move stats section to position immediately under hero
4. Convert About to light surface with photo box (placeholder for now)
5. Convert Reviews/Testimonials to light surface
6. Add new Results/Outcomes section (light)
7. Refine Contact/CTA section (less red, more sophisticated)

### Phase 3: Refinement
1. Increase whitespace globally
2. Soften animations (longer durations, gentler easings)
3. Update chat assistant palette
4. Update loading screen palette
5. Asset integration: statue head image, founder photo, optional CBD/architectural imagery
6. Final spacing pass + accessibility check

### Phase 4: Polish
1. Cross-browser QA
2. Mobile QA (iOS + Android)
3. Performance audit
4. Final stakeholder review

---

## 9. Open Questions for Client

1. **Founder photo** — Can you provide a high-resolution photo for the About section? Portrait orientation preferred (4:5 aspect).
2. **Statue choice** — Lady Justice, Roman warrior, or another classical bust? Any reference images?
3. **Imagery library** — Do you have licensed photography of Sydney CBD, court precincts, or your offices? Or should we source stock imagery?
4. **Phone number priority** — Is `1800 100 529` the only number, or are there office-specific numbers we should consider?
5. **Founder name & bio** — What should appear in the About section copy?
6. **Case outcomes** — Can you provide 4–6 anonymized case studies for the Results section?
7. **Quastels.com specific elements** — Are there any specific elements from Quastels you want incorporated (their type system, navigation pattern, etc.)?

---

## 10. Success Criteria

The v2 design will be considered successful when:

- [ ] The site **does not read as a fitness brand** — feels distinctly like a premium law firm
- [ ] Red is clearly used as an accent only, never dominating large surfaces
- [ ] Dark and light sections alternate to create visual rhythm
- [ ] The brand identity (logo + symbolic imagery) is integrated into the design language
- [ ] Buttons and surfaces feel softer through tasteful rounded corners
- [ ] Typography reads as confident, not aggressive
- [ ] Whitespace makes content feel curated, not crowded
- [ ] Phone contact is immediately visible and tap-friendly
- [ ] The overall feel sits at the intersection of hagestadlaw.com and quastels.com

---

## 11. Out of Scope (For This Round)

- E-commerce or payment integration
- Multi-language support (English only for now)
- CMS integration (static for now)
- Live chat (AI chat assistant is scripted)
- Booking/calendar integration

---

**End of PRD v2.0**

*This PRD supersedes v1. All design and development work should reference this document until a v3 is issued.*
