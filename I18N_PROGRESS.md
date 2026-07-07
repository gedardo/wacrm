# Spanish (LatAm/Argentina) localization — progress & resumption plan

Goal: translate the whole app to Spanish (voseo, Argentina-flavored, neutral/professional
register) with a language-switcher button, while preserving: proper nouns (wacrm, WhatsApp,
Meta, Supabase, OpenAI, Gemini, OpenRouter, Claude...), code identifiers, and common tech
jargon (CRM, token, API, webhook, dashboard, pipeline...).

**Status as of this doc**: `npx tsc --noEmit` passes with zero errors. Everything described
as "done" below is wired and working — you can build/run right now and see Spanish by default
with a working EN/ES toggle in the header.

## Architecture (already built, don't redo this part)

- `src/hooks/use-locale.tsx` — `LocaleProvider` (wraps the app in `src/app/layout.tsx`,
  inside `ThemeProvider`) + `useTranslation()` hook returning `{ locale, setLocale, t }`.
  - `t(key, vars?)` looks up a flat dotted key (e.g. `"contacts.addContact"`) and supports
    `{{var}}` interpolation.
  - Locale persists to `localStorage` (key `wacrm-locale`), default is `"es"`.
  - Plurals use two keys per string, suffix `.one` / `.other`, picked in code:
    `t(count === 1 ? "x.one" : "x.other", { count })`.
- `src/components/layout/language-switcher.tsx` — the toggle button, already in
  `src/components/layout/header.tsx` next to the dark-mode toggle.
- Dictionaries live in `src/lib/i18n/dictionaries/{en,es}/<namespace>.ts`, each exporting a
  flat `Record<string,string>` (English source strings in `en/`, actual translations in
  `es/`, with the `es` file importing the `en` file as a type-only import so TS enforces key
  parity — copy this pattern for any new namespace file: see
  `src/lib/i18n/dictionaries/es/common.ts`).
- **`src/lib/i18n/dictionaries/{en,es}/index.ts` is the merge point** — every namespace file
  MUST be imported and spread in here or its keys silently don't exist at runtime (this was
  broken until just now — it's fixed as of this doc, but if you add a new namespace file,
  remember to wire it into both `index.ts` files).
- Style convention established across all completed sections: **voseo** Argentine Spanish
  ("Creá", "Agregá", "Subí", not "Crea"/"Agrega"/"Sube"). Match it in anything new.
- Bug pattern that bit multiple sections: if a component does
  `const { t } = useTranslation()` and then ALSO has a local variable/map-callback param
  named `t` (e.g. `items.map((t) => ...)`), the inner `t` shadows the hook and calling
  `t('key')` inside that scope throws `"X has no call signatures"`. Watch for this whenever
  adding the hook to a file that already has a loop variable called `t`.
- Shared "plain data" objects that multiple components read a `.label` from but that have no
  hook access (e.g. `ROLE_CHIP` in `sidebar.tsx`, `broadcastStatusConfig` in
  `broadcast-status.ts`, `NODE_META`/`NODE_CATEGORIES` in `flows/shared.tsx`) were converted
  to store a `labelKey` (dotted i18n key) instead of a literal `label` string; the *consuming*
  component calls `t(thing.labelKey)`. Reuse this pattern for any similar case in the
  remaining work (settings `role-meta.ts`, `settings-sections.ts` likely need it).

## Fully done (translated + dictionary wired)

- Shell: `sidebar.tsx`, `header.tsx`, `mode-toggle.tsx`, `language-switcher.tsx`,
  `src/app/layout.tsx` (default `lang="es"`).
- Dashboard: page + all components (`activity-feed`, `conversations-chart`, `pipeline-donut`,
  `quick-actions`, `response-time-chart`, day-of-week labels).
- Auth: login, signup, forgot-password, join/[token] pages.
- Inbox: page + all components (conversation-list, contact-sidebar, message-*, template-picker,
  reply-quote) + presence components.
- Contacts: page + all components (contact-detail-view, contact-form,
  custom-fields-manager, import-modal).
- Pipelines: page + all components (deal-card, deal-form, pipeline-analytics,
  pipeline-board, pipeline-settings).
- Automations: all 4 pages (list/new/edit/logs) + automation-builder.tsx.
- Broadcasts: all 3 pages (list/new/[id]) + all 4 step components +
  `src/lib/broadcast-status.ts` (converted to `labelKey` pattern).
- Agents (AI Agents feature) + Notifications: both pages + ai-playground.tsx.

## In progress: Flows section

Files **done** (have `useTranslation`, dictionary keys exist in
`src/lib/i18n/dictionaries/{en,es}/flows.ts`):
- `src/components/flows/validation-panel.tsx`
- `src/components/flows/header.tsx`
- `src/components/flows/flow-editor-shell.tsx`
- `src/components/flows/flow-builder.tsx` (list view — the big one, ~611 lines)
- `src/components/flows/flow-canvas.tsx` (canvas/mind-map view, ~775 lines)
- `src/components/flows/shared.tsx` — `NODE_META`/`NODE_CATEGORIES` converted to
  `labelKey`/`blurbKey` pattern (this was the type-error source that just got fixed).

Files **NOT yet done** (next steps, in priority order):
1. `src/components/flows/flow-editor-state.tsx` (565 lines) — check for toast/error
   messages (e.g. save failures, delete confirmations). NODE_META import was removed here
   since `addNode()`'s node-key generation now correctly uses the raw `type` enum instead of
   the translated label (translating that would have made node_keys locale-dependent — don't
   revert this).
2. `src/components/flows/forms/fields.tsx` (134 lines) — smaller, do this before the big one.
3. `src/components/flows/forms/node-config-form.tsx` (**1048 lines — the single biggest
   remaining file in the app**). This is the per-node-type config form dispatcher (message
   text, buttons, list rows, media upload, condition builder, tag picker, handoff note, etc).
   Budget real time for this one.
4. `src/app/(dashboard)/flows/page.tsx` (437 lines) — flow list page.
5. `src/app/(dashboard)/flows/[id]/page.tsx` (88 lines) — thin wrapper, quick.
6. `src/app/(dashboard)/flows/[id]/runs/page.tsx` (340 lines) — run history/logs page.

Use namespace prefix `flows.*` (already has `flows.validation.*`, `flows.header.*`,
`flows.status.*`, `flows.shell.*`, `flows.category.*`, `flows.node.*`, `flows.builder.*`,
`flows.trigger.*`, `flows.entryPicker.*`, `flows.nodeCard.*`, `flows.addNode.*` — check
existing keys before adding new ones, there's likely reuse available e.g. `common.save`,
`common.cancel`, `common.delete`).

## Not started: Settings (biggest remaining chunk after flows)

Split into two logical halves (was originally planned as two parallel agents):

**settings-account** (~15 files, namespace `settings.*` sub-keyed by feature, e.g.
`settings.profile.*`, `settings.security.*`, `settings.members.*`):
- `src/app/(dashboard)/settings/page.tsx`
- `src/components/settings/profile-form.tsx`
- `src/components/settings/password-form.tsx`
- `src/components/settings/security-panel.tsx`
- `src/components/settings/sessions-card.tsx`
- `src/components/settings/members-tab.tsx`
- `src/components/settings/invite-member-dialog.tsx`
- `src/components/settings/role-meta.ts` (plain data — apply the `labelKey` pattern; can
  probably reuse `nav.role.owner` / `.admin` / `.agent` / `.viewer` which already exist)
- `src/components/settings/api-keys-settings.tsx`
- `src/components/settings/appearance-panel.tsx`
- `src/components/settings/settings-overview.tsx`
- `src/components/settings/settings-panel-head.tsx`
- `src/components/settings/settings-rail.tsx`
- `src/components/settings/settings-sections.ts` (plain data — `labelKey` pattern again)
- `src/components/settings/settings-chip.tsx`

**settings-config** (~8 files, namespace `settings.*` sub-keyed, e.g. `settings.ai.*`,
`settings.whatsapp.*`, `settings.templates.*`):
- `src/components/settings/ai-config.tsx` — **CAUTION**: this file has the user's own
  in-progress, uncommitted work adding Gemini + OpenRouter provider support (see
  `src/lib/ai/providers/gemini.ts`, `openrouter.ts`, and
  `supabase/migrations/031_add_gemini_openrouter_providers.sql`, all untracked/modified in git
  status). Only translate literal display strings; do not touch the provider logic. Never
  translate provider brand names (Gemini, OpenRouter, OpenAI, Anthropic, Claude, Google).
- `src/components/settings/ai-knowledge.tsx`
- `src/components/settings/custom-fields-settings.tsx`
- `src/components/settings/deals-settings.tsx`
- `src/components/settings/fields-and-tags-panel.tsx`
- `src/components/settings/tag-manager.tsx`
- `src/components/settings/template-manager.tsx`
- `src/components/settings/whatsapp-config.tsx`

## Known deferred / flagged items (intentionally out of scope so far — mention to user before closing this out)

1. **`src/components/ui/gated-button.tsx`** — builds a hardcoded English sentence
   `` `Read-only — your role can't ${gateReason}` `` where `gateReason` is an English fragment
   passed from many call sites (contacts, pipelines, broadcasts, automations...). Flagged
   independently by two different translation passes. Needs a proper fix: change `gateReason`
   call sites to pass an i18n key instead of a raw English string, and template the full
   sentence in the dictionary (`common.readOnlyCantX` with `{{action}}` interpolation).
2. **`src/lib/flows/validate.ts`** (793 lines) — pure functions that generate validation
   issue messages (e.g. "Node X has no next step"). Not a component, no hook access;
   translating requires converting every message-producing function to accept `t` as a
   parameter (like the Zod-schema-factory pattern used elsewhere) and threading it through
   from `flow-editor-state.tsx`. Deferred due to size — currently `IssueLine` in
   `validation-panel.tsx` displays `issue.message` verbatim in English regardless of locale.
3. **`summarizeNode()`** in `src/components/flows/shared.tsx` — generates the one-line node
   card preview text (e.g. "Remove tag (none picked)", "3 options across 2 sections") with
   embedded English words. Same issue as above — pure function, no hook access. Lower
   priority than validate.ts since it's secondary/preview text, not primary chrome.
4. **`src/lib/flows/edges.ts`** (`outgoingSlots()`) — likely produces "true"/"false" branch
   labels for condition nodes shown on canvas edges. Not yet audited — check when doing
   node-config-form.tsx since they're related.
5. **Deal terminology inconsistency**: `dashboard.ts` dictionary uses "trato" for CRM "deal",
   `pipelines.ts` uses "negocio". Pick one (recommend "negocio" — matches HubSpot's Spanish
   locale, a well-known reference) and reconcile both dictionary files with a find/replace.
6. `src/components/ui/dialog.tsx` and `sheet.tsx` have a hardcoded sr-only `"Close"` string
   (screen-reader-only, not visually seen) — skipped as very low priority.

## Session note: why this took multiple long passes

Background subagents were used to parallelize section translation, but repeatedly hit an
account-wide Claude usage/session limit (not a code problem) regardless of concurrency level
(failed at 9 parallel, then 4, then 1 solo). Once that started happening, all remaining
work was done directly, file-by-file, without subagents. If you resume this in a fresh
session, you can either continue by hand following the file lists above, or re-attempt
parallelizing across subagents if your usage limit has reset — the per-file scoping and
"don't touch index.ts" instructions used earlier in this session are reusable verbatim.

## Before calling it done, run

```bash
npx tsc --noEmit -p tsconfig.json   # must be clean
npx next build                       # catches anything tsc misses (e.g. unused vars as warnings)
```

Then manually click through the app in both languages (the toggle is in the header) —
type-checking doesn't catch missed strings, only grep/reading does. A good spot-check grep
for "did I miss anything" in a given directory:

```bash
grep -rnE '>[A-Z][a-zA-Z ]{2,}<' src/components/<section>/*.tsx src/app/'(dashboard)'/<section>/*.tsx | grep -v 'className\|import '
```
