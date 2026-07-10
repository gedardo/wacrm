import type { AutomationTriggerType } from '@/types'

export interface TriggerMeta {
  labelKey: string
  /** Tailwind classes for the Badge pill on the list row. */
  pillClass: string
}

export const TRIGGER_META: Record<AutomationTriggerType, TriggerMeta> = {
  new_message_received: {
    labelKey: 'automations.triggerPillLabel.new_message_received',
    pillClass: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  },
  first_inbound_message: {
    labelKey: 'automations.triggerPillLabel.first_inbound_message',
    pillClass: 'border-teal-500/30 bg-teal-500/10 text-teal-300',
  },
  keyword_match: {
    labelKey: 'automations.triggerPillLabel.keyword_match',
    pillClass: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
  },
  new_contact_created: {
    labelKey: 'automations.triggerPillLabel.new_contact_created',
    pillClass: 'border-primary/30 bg-primary/10 text-primary',
  },
  conversation_assigned: {
    labelKey: 'automations.triggerPillLabel.conversation_assigned',
    pillClass: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
  },
  tag_added: {
    labelKey: 'automations.triggerPillLabel.tag_added',
    pillClass: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  },
  time_based: {
    labelKey: 'automations.triggerPillLabel.time_based',
    pillClass: 'border-slate-500/30 bg-slate-500/10 text-muted-foreground',
  },
}

export function triggerMeta(type: AutomationTriggerType | string): TriggerMeta {
  return (
    TRIGGER_META[type as AutomationTriggerType] ?? {
      labelKey: type,
      pillClass: 'border-slate-500/30 bg-slate-500/10 text-muted-foreground',
    }
  )
}

type Translate = (key: string, vars?: Record<string, string | number>) => string

/** English fallback so callers that don't have a `t` handy (e.g. tests)
 *  still get sensible output — mirrors the pattern used by
 *  `defaultConfigFor()` in flow-editor-state.tsx. */
const DEFAULT_RELATIVE_T: Translate = (key, vars) => {
  switch (key) {
    case 'automations.relative.never':
      return 'never'
    case 'automations.relative.justNow':
      return 'just now'
    case 'automations.relative.minutesAgo':
      return `${vars?.count}m ago`
    case 'automations.relative.hoursAgo':
      return `${vars?.count}h ago`
    case 'automations.relative.daysAgo':
      return `${vars?.count}d ago`
    default:
      return key
  }
}

export function formatRelative(
  iso: string | null | undefined,
  t: Translate = DEFAULT_RELATIVE_T,
): string {
  if (!iso) return t('automations.relative.never')
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return t('automations.relative.never')
  const diffSec = Math.round((Date.now() - then) / 1000)
  if (diffSec < 60) return t('automations.relative.justNow')
  if (diffSec < 3600) return t('automations.relative.minutesAgo', { count: Math.floor(diffSec / 60) })
  if (diffSec < 86400) return t('automations.relative.hoursAgo', { count: Math.floor(diffSec / 3600) })
  if (diffSec < 2_592_000) return t('automations.relative.daysAgo', { count: Math.floor(diffSec / 86400) })
  return new Date(iso).toLocaleDateString()
}
