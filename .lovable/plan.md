# JH Product Studio — Contractor PM Site

A single-page marketing site positioning James Hutchinson as an AI-native contractor Product Manager. Dark, technical, editorial aesthetic, distinct from generic PM portfolios.

## Copy rules

- No em-dashes anywhere in the site copy
- Natural, spoken tone. Short sentences. First person where it fits ("I ship", "I've built"). Avoid buzzword stacks like "synergy", "leverage", "unlock value"
- Read every line out loud before shipping. If it sounds like a LinkedIn banner, rewrite it

## Brand & Visual Direction

- **Name:** JH Product Studio (wordmark, monospace accent on "JH")
- **Palette:** Midnight ink `#0A0B0F` background, off-white `#F4F1EA` text, electric lime `#C6F24E` accent, muted slate `#8A8FA3` for meta
- **Type:** Instrument Serif (display headlines), Inter (body), JetBrains Mono (labels, tags, section numbers)
- **Feel:** Editorial dark, generous whitespace, mono tag labels, subtle grain, no purple gradients

## Page Structure (single route `/`)

1. **Nav** JH Product Studio wordmark left, anchor links (Work, Services, About, Contact), email CTA
2. **Hero** Serif headline like *"Product management that ships, powered by AI."* Subline about going from idea to a working product in days instead of months. Availability pill ("Open to contracts, Q3 2026"). Email and phone CTA
3. **Positioning strip** three short pillars: *Ship with AI · Discovery to delivery · Certified Scrum PO*
4. **Selected Work** QuickTrade, TasteMatch, Voco. Each card: name, one line summary, target audience, problem it solves, tech used. Alternating layout, mono tag chips
5. **Experience highlights** Regatta Group (up to 30% CVR lift, 15 sites across 3 brands), Interactive Investor (23% onboarding uplift against a 15% target), Nova venture builder. Metric forward, plain English
6. **Services & engagement models** three cards:
   - *Discovery Sprint*, one to two weeks, fixed price, working prototype at the end
   - *Fractional PM*, ongoing day rate, embedded with your team
   - *Zero to One Build*, project based, shipped MVP using AI tooling
7. **About** short bio, tools (Claude Code, Antigravity, Jira, Figma), CSPO cert, Manchester based, works remote across the UK
8. **Contact** large email and phone, "Based in Manchester. Available UK wide and remote."
9. **Footer** wordmark, copyright, LinkedIn placeholder

## Technical

- TanStack Start, all content on `src/routes/index.tsx` with smooth anchor scrolling
- Design tokens in `src/styles.css`, dark by default, no toggle
- Fonts via `@fontsource/instrument-serif`, `@fontsource/inter`, `@fontsource/jetbrains-mono` installed with `bun add`
- Framer Motion for hero fade and section reveals
- SEO in `head()`: title "JH Product Studio, Contractor Product Manager", meta description, og tags (no og:image yet)
- No backend, no forms, no Lovable Cloud

## Out of scope

- Contact form or backend
- Blog or CMS
- Case study detail pages
- Logo mark (wordmark only for v1)
