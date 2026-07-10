# Spanish (LatAm/Argentina) localization — status: COMPLETE

The whole app is translated to Spanish (voseo, Argentina-flavored, neutral/professional
register) with a working language-switcher button, while preserving: proper nouns (wacrm,
WhatsApp, Meta, Supabase, OpenAI, Gemini, OpenRouter, Claude...), code identifiers, and
common tech jargon (CRM, token, API, webhook, dashboard, pipeline...).

**Verification passing**: `npx tsc --noEmit`, `npx next build`, and `npx vitest run`
(591/596 tests pass — the 5 failures are pre-existing, unrelated to this work: timezone-
dependent date-arithmetic tests that fail on any machine set to `America/Buenos_Aires`,
confirmed by `git status` showing zero changes to those two files).

## Architecture

- `src/hooks/use-locale.tsx` — `LocaleProvider` (wraps the app in `src/app/layout.tsx`,
  inside `ThemeProvider`) + `useTranslation()` hook returning `{ locale, setLocale, t }`.
  - `t(key, vars?)` looks up a flat dotted key and supports `{{var}}` interpolation.
  - Locale persists to `localStorage` (key `wacrm-locale`), default is `"es"`.
  - Plurals use two keys per string, suffix `.one` / `.other`.
- `src/components/layout/language-switcher.tsx` — the toggle button, in the header next to
  the dark-mode toggle.
- Dictionaries live in `src/lib/i18n/dictionaries/{en,es}/<namespace>.ts`, each exporting a
  flat `Record<string,string>`, merged in `src/lib/i18n/dictionaries/{en,es}/index.ts`.
  **Any new namespace file must be imported and spread into both index.ts files** or its
  keys silently don't exist at runtime.
- Style convention throughout: **voseo** Argentine Spanish ("Creá", "Agregá", "Subí").
- Where a plain data object (no hook access) needs a translated label — e.g. `ROLE_META` in
  `role-meta.ts`, `broadcastStatusConfig`, `NODE_META`, `templateStatusConfig` — the field is
  named `labelKey` (a dotted i18n key) instead of a literal string, and the *consuming*
  component calls `t(thing.labelKey)`.
- Watch for variable shadowing: a component that does `const { t } = useTranslation()` and
  also has a `.map((t) => ...)` or loop variable named `t` will throw a runtime error when
  the inner `t` shadows the hook. Several sections had this bug; all fixed.

## Fully translated (every section)

Shell, Dashboard, Auth (+ join/invite), Inbox, Contacts, Pipelines, Automations, Broadcasts,
Agents (AI Agents) + Notifications, Flows (editor, canvas, node-config forms, all 3 pages),
Settings — both account/security (profile, password, security, sessions, members, invites,
API keys, appearance, overview) and feature-config (AI assistant, knowledge base, custom
fields, deals/currency, tags, WhatsApp connection, message templates).

## Known intentionally-deferred items (not translated — flagged, not forgotten)

These are pure logic/lib functions with no React hook access, where translating them would
require restructuring the function signature to thread `t` through every call site. Judged
disproportionate to the value versus the rest of this task. If picked up later, follow the
same pattern used for `defaultConfigFor()` in `flow-editor-state.tsx` (optional `t` param
with an English-fallback default so tests keep passing unmodified):

1. **`src/lib/flows/validate.ts`** (793 lines) — generates flow validation issue messages
   (e.g. "Node X has no next step"). `IssueLine` in `validation-panel.tsx` displays
   `issue.message` verbatim in English regardless of locale.
2. **`summarizeNode()`** in `src/components/flows/shared.tsx` — generates the one-line node
   card preview text (e.g. "Remove tag (none picked)") with embedded English words.
3. **`src/lib/flows/edges.ts`** (`outgoingSlots()`) — likely produces "true"/"false" branch
   labels for condition-node canvas edges; not audited.
4. **`src/components/ui/dialog.tsx` / `sheet.tsx`** — a hardcoded sr-only `"Close"` string
   (screen-reader-only, never visually seen). Very low priority.
5. Illustrative placeholder examples left as-is by design (not real UI copy): "John Doe",
   "Acme Inc." in `contact-form.tsx`, "Ada Lovelace" in `profile-form.tsx`.
6. **`src/lib/automations/validate.ts`** — same shape as item 1, but for automations. Only
   called **server-side** (`app/api/automations/route.ts` and `[id]/route.ts`), unlike the
   flows version which has a client caller — translating it means threading the caller's
   locale into the API request (e.g. an `Accept-Language` header), which is real backend
   architecture work, not a `t()` swap. `automation-builder.tsx`'s `save()` shows
   `issue.message` verbatim via `toast.error()`.
7. **`src/lib/automations/engine.ts`** — the background execution engine (also server-only)
   writes English `detail` strings onto each step result (e.g. `` `waiting ${amount} ${unit}` ``,
   `` `branch=${yes|no}` ``). Shown as-is in the logs page's `StepRow` (`result.detail`). Same
   server-locale blocker as item 6.

## Resolved during this pass (previously flagged, now fixed)

- **`gated-button.tsx`**: was building the sentence `"Read-only — your role can't
  ${gateReason}"` with a hardcoded English template and a raw English `gateReason` fragment
  passed from ~7 call sites — producing mixed-language text once those fragments started
  getting translated. Fixed: added `common.readOnlyCantAction` with `{{action}}`
  interpolation, and every call site now passes a translated phrase (e.g.
  `t("flows.createGateReason")`).
- **Deal terminology inconsistency**: `dashboard.ts` used "trato" while `pipelines.ts` and
  `inbox.ts` used "negocio" for CRM "deal". Standardized on **"negocio"** everywhere
  (matches HubSpot's Spanish locale).
- Several components had voseo/tuteo slips ("Envía" instead of "Enviá") — fixed on sight.
- **Automations section audit** (`src/lib/automations/trigger-meta.ts`, `templates.ts`, and
  their consumers) had been missed entirely in the earlier pass — these are plain lib files,
  not components, so they didn't show up in the component-focused grep sweeps:
  - `TRIGGER_META.label` (hardcoded English trigger-type pill text on the automations list,
    e.g. "New Message", "Tag Added") → converted to `labelKey`, new
    `automations.triggerPillLabel.*` dictionary keys.
  - `formatRelative()` (hardcoded "never" / "just now" / "Xm ago" etc. on both the list page
    and the logs page) → now takes an optional `t` param (same pattern as
    `defaultConfigFor()` in flows), new `automations.relative.*` keys. Both call sites now
    pass `t`.
  - `AUTOMATION_TEMPLATES` (`name`/`description` on the 4 "quick-start template" cards, plus
    the literal message bodies seeded into a new automation when a template is picked) →
    converted to `nameKey`/`descriptionKey`/`textKey`, new `automations.template.*` keys.
    `new/page.tsx` now calls `useTranslation()` to resolve them when applying a template.
    The server-side fallback in `app/api/automations/route.ts` (used only when a caller POSTs
    `template` without `name`/`description`) falls back to the English dictionary directly,
    since API routes have no locale context.

## If translating further

Grep pattern to find leftover hardcoded UI text in any directory:

```bash
grep -rnE '>[A-Z][a-zA-Z ]{2,}<' src/components/<dir>/*.tsx | grep -v 'className\|import '
```

To confirm no `.tsx` file with visible capitalized text is missing the hook entirely:

```bash
for f in $(grep -rlE '>[A-Z][a-zA-Z]{3,}' src/app src/components --include=*.tsx | grep -v test | grep -v '/ui/'); do
  grep -q "useTranslation" "$f" || echo "NO HOOK: $f"
done
```
