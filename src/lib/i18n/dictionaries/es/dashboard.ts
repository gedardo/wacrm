import type { dashboard as dashboardEn } from "../en/dashboard";

export const dashboard: Record<keyof typeof dashboardEn, string> = {
  "dashboard.title": "Dashboard",
  "dashboard.subtitle":
    "Análisis en vivo de conversaciones, contactos, tratos, difusiones y automatizaciones.",

  "dashboard.metrics.activeConversations": "Conversaciones activas",
  "dashboard.metrics.newContactsToday": "Contactos nuevos hoy",
  "dashboard.metrics.openDealsValue": "Valor de tratos abiertos",
  "dashboard.metrics.messagesSentToday": "Mensajes enviados hoy",
  "dashboard.metrics.newTodayVsYesterday": "nuevos hoy vs. ayer",
  "dashboard.metrics.vsYesterday": "vs. ayer",
  "dashboard.metrics.noChange": "Sin cambios {{suffix}}",
  "dashboard.metrics.delta": "{{sign}}{{value}} {{suffix}}",
  "dashboard.metrics.openDeal.one": "{{count}} trato abierto",
  "dashboard.metrics.openDeal.other": "{{count}} tratos abiertos",

  "dashboard.quickActions.newContact": "Nuevo contacto",
  "dashboard.quickActions.newDeal": "Nuevo trato",
  "dashboard.quickActions.newBroadcast": "Nueva difusión",
  "dashboard.quickActions.newAutomation": "Nueva automatización",

  "dashboard.conversationsChart.title": "Conversaciones a lo largo del tiempo",
  "dashboard.conversationsChart.subtitle": "Volumen diario de mensajes por dirección",
  "dashboard.conversationsChart.rangeDays": "{{days}} días",
  "dashboard.conversationsChart.emptyTitle": "Sin actividad de mensajes en este rango",
  "dashboard.conversationsChart.emptyHint":
    "Envía o recibe mensajes para empezar a completar este gráfico.",
  "dashboard.conversationsChart.incoming": "Entrantes",
  "dashboard.conversationsChart.outgoing": "Salientes",
  "dashboard.conversationsChart.incomingCount": "{{count}} entrantes",
  "dashboard.conversationsChart.outgoingCount": "{{count}} salientes",
  "dashboard.conversationsChart.ariaLabel": "Conversaciones por día",

  "dashboard.pipeline.title": "Valor del pipeline",
  "dashboard.pipeline.subtitle": "Tratos abiertos por etapa",
  "dashboard.pipeline.emptyTitle": "Todavía no hay tratos abiertos",
  "dashboard.pipeline.emptyHint":
    "Creá tratos en Pipelines para ver el desglose por etapa aquí.",
  "dashboard.pipeline.dealCount.one": "{{count}} trato",
  "dashboard.pipeline.dealCount.other": "{{count}} tratos",
  "dashboard.pipeline.ariaLabel": "Valor del pipeline por etapa",
  "dashboard.pipeline.total": "Total",

  "dashboard.responseTime.title": "Tiempo promedio de primera respuesta",
  "dashboard.responseTime.subtitle":
    "Minutos para responder al primer mensaje sin contestar de un cliente, por día de la semana",
  "dashboard.responseTime.target": "objetivo {{minutes}}m",
  "dashboard.responseTime.thisWeek": "Esta semana:",
  "dashboard.responseTime.lastWeek": "Semana pasada:",
  "dashboard.responseTime.emptyTitle": "Todavía no hay respuestas registradas",
  "dashboard.responseTime.emptyHint":
    "Este gráfico se completa a medida que respondés mensajes de clientes.",

  "dashboard.activity.title": "Actividad reciente",
  "dashboard.activity.viewAll": "Ver todo",
  "dashboard.activity.emptyTitle": "Todavía no hay actividad",
  "dashboard.activity.emptyHint":
    "Aquí aparecerá la actividad de mensajes, tratos, difusiones y automatizaciones.",
  "dashboard.activity.showing": "Mostrando {{visible}} de {{total}}",
  "dashboard.activity.show": "Mostrar",
  "dashboard.activity.secondsAgo": "hace {{n}}s",
  "dashboard.activity.minutesAgo": "hace {{n}}m",
  "dashboard.activity.hoursAgo": "hace {{n}}h",
  "dashboard.activity.daysAgo": "hace {{n}}d",

  "dashboard.emptyState.defaultTitle": "Todavía no hay suficientes datos",

  "dashboard.dow.mon": "Lun",
  "dashboard.dow.tue": "Mar",
  "dashboard.dow.wed": "Mié",
  "dashboard.dow.thu": "Jue",
  "dashboard.dow.fri": "Vie",
  "dashboard.dow.sat": "Sáb",
  "dashboard.dow.sun": "Dom",
};
