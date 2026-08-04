---
name: Refactor
about: Improve the code without changing its behaviour
title: 'refactor: '
labels: refactor
---

# Refactor

## Summary

<!-- What was refactored and why now? -->

## Motivation

<!-- Duplication, unclear naming, oversized component, poor separation of concerns, performance, etc. -->

## Behaviour guarantee

- [ ] **This PR does not change any user-facing behaviour**
- [ ] The public API of the touched modules is unchanged, or every caller was updated

<!-- If behaviour does change, explain exactly how and why: -->

## What changed

| Before | After | Reason |
| ------ | ----- | ------ |
|        |       |        |

## Principles applied

- [ ] DRY — duplicated logic was extracted
- [ ] KISS — unnecessary complexity was removed
- [ ] Single responsibility — components/hooks now do one thing
- [ ] Clearer naming for variables, functions, and files
- [ ] Better typing (removed `any`, added shared types)

## How to verify nothing broke

1.
2.
3.

**Areas to re-test:**

## Checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] All existing flows (song, movie, and book forms) were tested manually
- [ ] No new dependencies were added, or the addition is justified below
- [ ] The diff contains only the refactor — no unrelated features or fixes

