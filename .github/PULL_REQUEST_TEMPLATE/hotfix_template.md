---
name: Hotfix
about: Urgent fix for a problem already in production
title: 'hotfix: '
labels: hotfix, urgent
---

# Hotfix

> Urgent fix for production. Keep the change as small as possible and merge only after it has been verified.

## Incident summary

<!-- What is broken in production right now? -->

## Severity

- [ ] Critical — the app is unusable or data is being lost
- [ ] High — a core flow is blocked (form submission, data loading)
- [ ] Medium — a visible but non-blocking problem

**Affected users / flows:**

## Related issues

<!-- Example: Closes #123 -->

## Root cause

<!-- Short explanation of what caused the failure. -->

## Fix applied

<!-- What this PR changes. Keep it minimal and targeted. -->

## Why this cannot wait for the normal release cycle

<!-- Justify the hotfix path. -->

## Scope check

- [ ] The change is the minimum required to stop the incident
- [ ] No refactors, dependency bumps, or unrelated changes are included
- [ ] A follow-up issue was opened for the proper long-term fix, if needed:

## Verification

- [ ] The failure was reproduced before the fix
- [ ] The failure no longer occurs after the fix
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Verified with a production build (`npm run preview`) or on a preview deployment

**Preview deployment URL:**

## Rollback plan

<!-- How to revert if the hotfix makes things worse. -->

## Post-merge actions

- [ ] Verify the fix on production after deployment
- [ ] Notify the team / stakeholders
- [ ] Port the change back to any long-lived branches
- [ ] Write a short post-mortem if the severity was critical
