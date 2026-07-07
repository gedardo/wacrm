import type { agentsNotifications as agentsNotificationsEn } from "../en/agents-notifications";

export const agentsNotifications: Record<keyof typeof agentsNotificationsEn, string> = {
  "agents.description":
    "Tu agente de IA con clave propia (BYOK) — configuralo y probalo en el playground antes de que responda a los clientes en la bandeja de entrada.",
  "agents.playgroundTab": "Playground",
  "agents.setupTab": "Configuración",

  "agents.playground.subtitle": "— probá respuestas como si fueras un cliente",
  "agents.playground.reset": "Reiniciar",
  "agents.playground.emptyTitle": "Enviá un mensaje para ver cómo respondería tu agente.",
  "agents.playground.emptyDescription":
    "Usa tu base de conocimiento y se comporta igual que el bot de respuesta automática, incluida la derivación a un humano.",
  "agents.playground.goToSetup": "¿Todavía no lo configuraste? Ir a Configuración",
  "agents.playground.handoffNotice": "Acá derivaría la conversación a un humano",
  "agents.playground.thinking": "Pensando…",
  "agents.playground.inputPlaceholder": "Escribí un mensaje de cliente…",
  "agents.playground.notConfigured": "Todavía no hay un agente configurado — terminá la Configuración primero.",
  "agents.playground.replyError": "No se pudo obtener una respuesta.",
  "agents.playground.connectionError": "No se pudo conectar con el agente.",

  "notifications.title": "Notificaciones",
  "notifications.description": "Acá aparecen las conversaciones que otros miembros del equipo te asignan.",
  "notifications.markAllRead": "Marcar todo como leído",
  "notifications.emptyTitle": "Todavía no tenés notificaciones",
  "notifications.emptyDescription":
    "Vas a ver un aviso acá cuando alguien te asigne una conversación.",
  "notifications.unread": "No leído",
  "notifications.markReadError": "No se pudo marcar la notificación como leída",
  "notifications.markAllReadError": "No se pudo marcar todo como leído",
};
