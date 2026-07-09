
## Goal

Add a **Testimonials** section to the site that surfaces the five highest-priority LinkedIn recommendations as social proof, placed directly after the "Selected work" section and before Services.

## People to include

1. Ian Dixon — Digital, Creative & Tech Sector Growth Specialist
2. Paul Dodd — Fractional Head of Marketing for AI Safety / EA + mission-driven tech
3. Chris Alcock — Experienced Technology Leader
4. Liam Burns — Lead Product Manager
5. Richard Dean — Product Leader | Coach

Each card shows: **Name**, **Job title**, and the recommendation text (verbatim from the LinkedIn screenshots, em-dashes swapped out to match the site's copy rule). No photos, no dates, no "worked with" metadata.

## Placement

In `src/routes/index.tsx`, insert `<Testimonials />` between `<WorkSection />` and `<Services />` so the flow is: Hero → Pillars → Work → **Testimonials** → Services → Contact.

## Design

Match the existing "Midnight ink" aesthetic:

- Same section wrapper padding/max width as the neighbouring sections.
- Eyebrow label ("Testimonials" or "Social proof") + short heading in the same sans style as the rest of the site.
- Grid of quote cards: 1 column on mobile, 2 on md, 3 on lg. All 5 render by default (no carousel, no "show more" toggle) so the section reads as a wall of proof.
- Card styling: subtle border, soft surface background, generous padding, quote text in body font, name in semibold, role in muted foreground below. Small quotation glyph or left-border accent to lift it visually without feeling generic.
- Uses existing semantic tokens only (`bg-card`, `border-border`, `text-foreground`, `text-muted-foreground`) — no hardcoded colors.

## Copy rule

Preserve the recommenders' words. Only edit to strip em-dashes (replace with a comma or period, whichever reads cleaner) so the section follows the site-wide "no em-dashes" rule.

## Files to edit

- `src/routes/index.tsx` — add a `testimonials` data array and a `Testimonials` component, render it in the page.

## Verification

- `bun run build` to confirm it compiles.
- Visual check of the new section at desktop and mobile widths.
