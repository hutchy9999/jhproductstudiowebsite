Update the About heading to remove the time reference and lean into the "shipped across every stage" direction.

## Proposed copy changes

**About heading** (line 487-489 of `src/routes/index.tsx`)

Change to:

```
Shipped across every stage, from discovery to the App Store.
```

This keeps the emphasis on end-to-end delivery without anchoring it to a number of years. It also matches the body copy below, which talks about Regatta, Interactive Investor, Nova, and the two iOS apps + web platform.

**Pillar 03 description** (line 180-183)

The current pillar still says "Five years across B2B, B2C, SaaS, fintech and e-commerce." If we are removing time from the About heading, this should be consistent. Change to:

```
Built across B2B, B2C, SaaS, fintech and e-commerce. Agile by default, pragmatic in practice.
```

This keeps the range of sectors but drops the time anchor.

## Files to edit

- `src/routes/index.tsx` — two small string replacements.

## Verification

- `bun run build` to confirm the copy change does not break the build.

## Scope

No visual, layout, or backend changes. Only copy.