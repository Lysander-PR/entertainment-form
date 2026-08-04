---
name: Bug fix
about: Fix an incorrect or unexpected behaviour
title: 'fix: '
labels: bug
---

# Bug fix

## Summary

<!-- One or two sentences describing the bug that is being fixed. -->

## Related issues

<!-- Example: Closes #123 -->

## Current behaviour (before the fix)

<!-- What was happening, including any error message or stack trace. -->

## Expected behaviour (after the fix)

<!-- What should happen instead. -->

## Steps to reproduce

1.
2.
3.

## Root cause

<!-- Explain why the bug happened, not only what was changed. -->

## Solution

<!-- Describe the fix and why this approach was chosen over the alternatives. -->

## Scope of the change

- [ ] The fix is limited to the affected area
- [ ] No unrelated refactors are included in this PR
- [ ] Other places with the same pattern were checked

## Screenshots / Recordings

| Before (bug) | After (fixed) |
| ------------ | ------------- |
|              |               |

## Regression risk

<!-- Which parts of the app could be affected by this change? -->

- **Risk level:** Low / Medium / High
- **Areas to re-test:**

## How to verify

1.
2.
3.

## Checklist

- [ ] The bug can no longer be reproduced with the steps above
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Verified on desktop and mobile viewports
- [ ] Edge cases (empty values, invalid input, slow network) were checked
- [ ] A regression test was added, or a reason is given for not adding one
- [ ] No debug code left behind
