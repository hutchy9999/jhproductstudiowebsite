Update the Services section to remove the Discovery Sprint option and reflect that two engagement models remain.

## Proposed changes

**1. Remove Discovery Sprint from the services array** (lines 407-430 of `src/routes/index.tsx`)

Delete this object from the `services` array:

```
    {
      n: "a",
      name: "Discovery Sprint",
      length: "One to two weeks, fixed price",
      body: "You have an idea or a fuzzy problem. I go away, do the research, and come back with a working prototype, a validated direction and a build plan you can act on.",
      for: "Founders and product leads who want proof before they commit budget.",
    },
```

**2. Update the section heading** (line 437)

Change:

```
Three ways to hire me, sized to what you actually need.
```

To:

```
Two ways to hire me, sized to what you actually need.
```

## Files to edit

- `src/routes/index.tsx` — remove one array item and change one heading string.

## Verification

- `bun run build` to confirm the change compiles cleanly.

## Scope

Only copy and data changes in the Services section. No visual, layout, or backend changes.