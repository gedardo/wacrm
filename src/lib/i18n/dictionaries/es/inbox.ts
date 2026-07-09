import type { inbox as inboxEn } from "../en/inbox";

export const inbox: Record<keyof typeof inboxEn, string> = {
  // Connection banner (inbox page)
  "inbox.banner.whatsappNotConnected":
    "WhatsApp® no está conectado. Andá a Configuración para conectar tu cuenta.",

  // Shared / generic
  "inbox.tags": "Etiquetas",
  "inbox.noMessagesYet": "Aún no hay mensajes",
  "inbox.sendTemplate": "Enviar plantilla",
  "inbox.emptyState.title": "Seleccioná una conversación",
  "inbox.emptyState.subtitle": "Elegí una conversación de la izquierda para empezar a chatear",
  "inbox.status.open": "Abierta",
  "inbox.status.pending": "Pendiente",
  "inbox.status.closed": "Cerrada",

  // Search + filters (conversation list)
  "inbox.search.placeholder": "Buscar conversaciones...",
  "inbox.filters.all": "Todas",
  "inbox.filters.unread": "No leídas",
  "inbox.filters.company": "Empresa",
  "inbox.filters.allCompanies": "Todas las empresas",
  "inbox.filters.tag": "Etiqueta",
  "inbox.filters.clearAll": "Limpiar todo",

  // Conversation list
  "inbox.conversationList.noConversationsFound": "No se encontraron conversaciones",
  "inbox.conversationList.unknownContact": "Desconocido",

  // Message thread
  "inbox.thread.sendTemplateToStart": "Enviá una plantilla para iniciar la conversación",
  "inbox.thread.backToConversations": "Volver a las conversaciones",
  "inbox.thread.hideContactPanel": "Ocultar panel de contacto",
  "inbox.thread.showContactPanel": "Mostrar panel de contacto",
  "inbox.thread.hideContact": "Ocultar contacto",
  "inbox.thread.showContact": "Mostrar contacto",
  "inbox.thread.refreshConversation": "Actualizar conversación",
  "inbox.thread.refresh": "Actualizar",
  "inbox.thread.customerFallback": "Cliente",
  "inbox.thread.you": "Vos",

  // 24h session timer
  "inbox.session.noCustomerMessages": "Sin mensajes del cliente",
  "inbox.session.expired": "Expirada",
  "inbox.session.hoursRemaining": "Quedan {{count}}h",
  "inbox.session.minutesRemaining": "Quedan {{count}}m",

  // Assignment dropdown
  "inbox.assign.assign": "Asignar",
  "inbox.assign.assigned": "Asignado",
  "inbox.assign.unassign": "Quitar asignación",
  "inbox.assign.noTeammates": "No hay compañeros disponibles",
  "inbox.assign.me": " (yo)",

  // Toasts (message thread)
  "inbox.toast.waitForMessage": "Esperá a que el mensaje termine de enviarse",
  "inbox.toast.reactionFailed": "Error en la reacción: {{reason}}",
  "inbox.toast.assignmentFailed": "No se pudo actualizar la asignación",
  "inbox.toast.sendFailed": "Error al enviar: {{reason}}",
  "inbox.toast.sendTemplateFailed": "Error al enviar la plantilla: {{reason}}",

  // Composer
  "inbox.composer.sessionExpiredBanner":
    "La sesión de 24 horas expiró. Usá una plantilla para volver a contactar.",
  "inbox.composer.templatesButton": "Plantillas",
  "inbox.composer.photo": "Foto",
  "inbox.composer.video": "Video",
  "inbox.composer.document": "Documento",
  "inbox.composer.voiceNote": "Nota de voz",
  "inbox.composer.readOnlyTooltip": "Solo lectura — tu rol no puede enviar mensajes",
  "inbox.composer.attachMedia": "Adjuntar archivo",
  "inbox.composer.draftWithAiTooltip": "Redactar una respuesta con IA",
  "inbox.composer.placeholderReadOnly": "Solo lectura — los espectadores pueden ver pero no responder",
  "inbox.composer.placeholderSessionExpired": "Sesión expirada - usá una plantilla",
  "inbox.composer.placeholderDefault": "Escribí un mensaje... (Shift+Enter para nueva línea)",
  "inbox.composer.aiHint":
    "Tocá el ✨ para redactar una respuesta con IA — podés editarla antes de enviarla",
  "inbox.composer.recording": "Grabando… {{current}} / {{max}}",
  "inbox.composer.stopAndAttach": "Detener y adjuntar",
  "inbox.composer.removeAttachment": "Quitar archivo adjunto",
  "inbox.composer.addCaptionPlaceholder": "Agregá una descripción…",
  "inbox.composer.aiNotConfigured":
    "La IA todavía no está configurada — activala en Configuración → Asistente de IA.",
  "inbox.composer.draftFailedGeneric": "No se pudo redactar una respuesta.",
  "inbox.composer.aiEmptyReply": "El asistente no devolvió ninguna respuesta.",
  "inbox.composer.aiUnreachable": "No se pudo conectar con el asistente de IA.",
  "inbox.composer.fileTooLarge": "El archivo pesa {{size}} MB — el límite para {{kind}} es de {{limit}} MB.",
  "inbox.composer.mediaKind.image": "imagen",
  "inbox.composer.mediaKind.video": "video",
  "inbox.composer.mediaKind.document": "documento",
  "inbox.composer.mediaKind.audio": "audio",
  "inbox.composer.uploadFailed": "Error al subir el archivo.",
  "inbox.composer.recordingTooLong": "La grabación es demasiado larga (supera los 16 MB).",
  "inbox.composer.recordingNotSupported": "La grabación de voz no es compatible con este navegador.",
  "inbox.composer.micDenied": "Acceso al micrófono denegado o no disponible.",

  // Message actions (hover toolbar)
  "inbox.actions.nothingToCopy": "No hay nada para copiar",
  "inbox.actions.copyFailed": "Error al copiar",
  "inbox.actions.react": "Reaccionar",
  "inbox.actions.reactWith": "Reaccionar con {{emoji}}",
  "inbox.actions.reply": "Responder",

  // Message bubble
  "inbox.bubble.mediaUnavailable": "{{label}} no disponible",
  "inbox.bubble.image": "Imagen",
  "inbox.bubble.video": "Video",
  "inbox.bubble.audio": "Audio",
  "inbox.bubble.document": "Documento",
  "inbox.bubble.sharedImageAlt": "Imagen compartida",
  "inbox.bubble.templateBadge": "Plantilla",
  "inbox.bubble.locationShared": "Ubicación compartida",
  "inbox.bubble.buttonReply": "Respuesta de botón",
  "inbox.bubble.interactiveReplyFallback": "[Respuesta interactiva]",
  "inbox.bubble.unsupportedMessageType": "[Tipo de mensaje no compatible]",

  // Reply quote
  "inbox.replyQuote.cancelReply": "Cancelar respuesta",
  "inbox.replyQuote.imagePreview": "[Imagen]",
  "inbox.replyQuote.videoPreview": "[Video]",
  "inbox.replyQuote.audioPreview": "[Audio]",
  "inbox.replyQuote.documentPreview": "[Documento]",
  "inbox.replyQuote.locationPreview": "[Ubicación]",
  "inbox.replyQuote.templatePreview": "[Plantilla]",
  "inbox.replyQuote.messagePreview": "[Mensaje]",

  // Template picker
  "inbox.templatePicker.fillPlaceholders":
    "Completá los campos para armar esta plantilla. Meta requiere que todas las variables tengan un valor.",
  "inbox.templatePicker.pickTemplate":
    "Elegí una plantilla de WhatsApp aprobada para enviarle a este contacto.",
  "inbox.templatePicker.noApprovedTemplates": "No hay plantillas aprobadas",
  "inbox.templatePicker.approveHint":
    "Aprobá una plantilla en Meta WhatsApp Manager y después sincronizala desde Configuración → Plantillas.",
  "inbox.templatePicker.preview": "Vista previa",
  "inbox.templatePicker.header": "Encabezado",
  "inbox.templatePicker.body": "Cuerpo",
  "inbox.templatePicker.headerValuePlaceholder": "Valor para la variable del encabezado",
  "inbox.templatePicker.valueForPrefix": "Valor para",
  "inbox.templatePicker.urlButtonValueForPrefix": 'Botón URL "{{text}}" — valor para ',
  "inbox.templatePicker.urlSuffixPlaceholder": "Valor del sufijo de la URL",
  "inbox.templatePicker.finalUrl": "URL final: {{url}}",

  // Contact sidebar
  "inbox.contactSidebar.noTags": "Sin etiquetas",
  "inbox.contactSidebar.activeDeals": "Negocios activos",
  "inbox.contactSidebar.noDeals": "Sin negocios",
  "inbox.contactSidebar.notes": "Notas",
  "inbox.contactSidebar.addNotePlaceholder": "Agregá una nota...",
  "inbox.sendMessagesGateReason": "enviar mensajes",
};
