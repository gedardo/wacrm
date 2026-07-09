import type { settingsAccount as settingsAccountEn } from "../en/settings-account";

export const settingsAccount: Record<keyof typeof settingsAccountEn, string> = {
  // Page shell
  "settings.page.title": "Configuración",
  "settings.page.description":
    "Todo en un solo lugar — tu cuenta y tu espacio de trabajo. Elegí una sección para gestionarla.",

  // Rail navigation
  "settings.rail.ariaLabel": "Secciones de configuración",
  "settings.rail.groupAccount": "Cuenta",
  "settings.rail.groupWorkspace": "Espacio de trabajo",

  // Section labels (rail + overview tiles)
  "settings.sections.overview": "Resumen",
  "settings.sections.profile": "Tu perfil",
  "settings.sections.security": "Acceso y seguridad",
  "settings.sections.appearance": "Apariencia",
  "settings.sections.whatsapp": "WhatsApp",
  "settings.sections.templates": "Plantillas",
  "settings.sections.fields": "Campos y etiquetas",
  "settings.sections.deals": "Negocios y moneda",
  "settings.sections.members": "Miembros del equipo",
  "settings.sections.api": "Claves de API",

  // Shared across settings panels
  "settings.common.networkError": "No se pudo conectar con el servidor",
  "settings.common.unknownError": "Error desconocido",
  "settings.common.done": "Listo",

  // Overview landing
  "settings.overview.yourAccount": "Tu cuenta",
  "settings.overview.whatsappNotSetup": "Todavía no está configurado",
  "settings.overview.whatsappConnected": "Conectado",
  "settings.overview.whatsappNeedsReconnect": "Necesita reconexión",
  "settings.overview.viewMembers": "Ver miembros del equipo",
  "settings.overview.memberCount.one": "{{count}} miembro",
  "settings.overview.memberCount.other": "{{count}} miembros",
  "settings.overview.pendingInvite.one": "{{count}} invitación pendiente",
  "settings.overview.pendingInvite.other": "{{count}} invitaciones pendientes",
  "settings.overview.manageTemplates": "Gestioná las plantillas de mensajes",
  "settings.overview.templateCount.one": "{{count}} plantilla",
  "settings.overview.templateCount.other": "{{count}} plantillas",
  "settings.overview.pendingReview.one": "{{count}} pendiente de revisión",
  "settings.overview.pendingReview.other": "{{count}} pendientes de revisión",
  "settings.overview.tagsAndFields": "Etiquetas y campos personalizados",
  "settings.overview.tagCount.one": "{{count}} etiqueta",
  "settings.overview.tagCount.other": "{{count}} etiquetas",
  "settings.overview.customFieldCount.one": "{{count}} campo personalizado",
  "settings.overview.customFieldCount.other": "{{count}} campos personalizados",
  "settings.overview.appearanceSubtitle": "Modo {{mode}} · acento {{theme}}",

  // Profile panel
  "settings.profile.title": "Tu perfil",
  "settings.profile.description":
    "Cómo te ves en toda la aplicación. Tu avatar y tu nombre aparecen en el encabezado, la barra lateral y en cualquier lugar donde tus compañeros de equipo te vean.",
  "settings.profile.changePhoto": "Cambiar foto",
  "settings.profile.uploadPhoto": "Subir foto",
  "settings.profile.photoHint": "PNG, JPG, WebP o GIF. Hasta 2 MB.",
  "settings.profile.displayName": "Nombre para mostrar",
  "settings.profile.emailChangeCheckPrefix": "Revisá la bandeja de entrada de",
  "settings.profile.emailChangeAnd": "y de",
  "settings.profile.emailChangeSuffix":
    "— ambas direcciones deben confirmar el cambio antes de que se aplique.",
  "settings.profile.accountDetails": "Detalles de la cuenta",
  "settings.profile.role": "Rol",
  "settings.profile.joined": "Fecha de ingreso",
  "settings.profile.userId": "ID de usuario",
  "settings.profile.loadingProfile": "Cargando tu perfil…",
  "settings.profile.saveChanges": "Guardar cambios",
  "settings.profile.toast.unsupportedType": "Tipo de imagen no compatible",
  "settings.profile.toast.unsupportedTypeDesc": "Usá PNG, JPG, WebP o GIF.",
  "settings.profile.toast.imageTooLarge": "La imagen es demasiado grande",
  "settings.profile.toast.imageTooLargeDesc": "Máximo 2 MB.",
  "settings.profile.toast.nameRequired": "El nombre para mostrar es obligatorio",
  "settings.profile.toast.invalidEmail": "Ingresá una dirección de correo válida",
  "settings.profile.toast.saved": "Perfil guardado",
  "settings.profile.toast.savedCheckEmail":
    "Perfil guardado — revisá tu correo para confirmar el cambio de dirección",
  "settings.profile.errors.uploadFailed": "Error al subir la imagen",
  "settings.profile.errors.saveFailed": "Error al guardar",
  "settings.profile.errors.emailChangeFailed": "Error al cambiar el correo",

  // Security panel (shell)
  "settings.security.title": "Acceso y seguridad",
  "settings.security.description":
    "Cambiá tu contraseña y cerrá sesión en tus dispositivos. Esto mantiene tu cuenta segura.",

  // Password card
  "settings.security.password.title": "Contraseña",
  "settings.security.password.description":
    "Usá al menos {{min}} caracteres. Vas a seguir con la sesión iniciada en este dispositivo después de cambiarla.",
  "settings.security.password.current": "Contraseña actual",
  "settings.security.password.new": "Nueva contraseña",
  "settings.security.password.confirm": "Confirmar nueva contraseña",
  "settings.security.password.updating": "Actualizando…",
  "settings.security.password.submit": "Actualizar contraseña",
  "settings.security.password.noEmailError":
    "No se puede cambiar la contraseña sin un correo actual",
  "settings.security.password.minLengthError":
    "La contraseña debe tener al menos {{min}} caracteres",
  "settings.security.password.mismatchError":
    "La nueva contraseña y su confirmación no coinciden",
  "settings.security.password.incorrectCurrent":
    "La contraseña actual es incorrecta",
  "settings.security.password.updateFailedPrefix":
    "Error al actualizar la contraseña",
  "settings.security.password.updated": "Contraseña actualizada",

  // Active sessions card
  "settings.sessions.title": "Sesiones activas",
  "settings.sessions.description":
    "Cerrá sesión en todos los dispositivos donde tengas la sesión iniciada, incluido este. Es útil si perdiste una laptop o compartiste tu contraseña.",
  "settings.sessions.signOutAll": "Cerrar sesión en todos los dispositivos",
  "settings.sessions.confirmTitle": "¿Cerrar sesión en todos lados?",
  "settings.sessions.confirmDescription":
    "Se cerrará la sesión en todos los dispositivos conectados a esta cuenta y vas a tener que volver a iniciar sesión. Te vamos a redirigir a la página de inicio de sesión.",
  "settings.sessions.signingOut": "Cerrando sesión…",
  "settings.sessions.confirmButton": "Cerrar sesión en todos lados",
  "settings.sessions.signOutFailedPrefix": "Error al cerrar sesión",

  // Members tab
  "settings.members.title": "Miembros del equipo",
  "settings.members.description":
    "Personas con acceso a esta cuenta. Los roles controlan qué puede hacer cada integrante.",
  "settings.members.inviteMember": "Invitar miembro",
  "settings.members.presenceOnline": "{{count}} en línea",
  "settings.members.presenceAway": "{{count}} ausente",
  "settings.members.presenceOffline": "{{count}} desconectado",
  "settings.members.memberCount.one": "{{count}} miembro",
  "settings.members.memberCount.other": "{{count}} miembros",
  "settings.members.unnamed": "Sin nombre",
  "settings.members.memberAlt": "Miembro",
  "settings.members.genericMember": "miembro",
  "settings.members.you": "Vos",
  "settings.members.joinedOn": "Se unió el {{date}}",
  "settings.members.pendingInvitations": "Invitaciones pendientes",
  "settings.members.pendingHint":
    "Por seguridad, la URL de la invitación en texto plano se muestra una sola vez al crearla. Para volver a compartirla, revocá la invitación de abajo y creá una nueva.",
  "settings.members.noPendingInvitations": "No hay invitaciones pendientes.",
  "settings.members.noPendingHintPrefix": "Hacé clic en",
  "settings.members.noPendingHintSuffix":
    "de arriba para generar un enlace para compartir.",
  "settings.members.untitledInvite": "Invitación sin título",
  "settings.members.createdOn": "Creada el {{date}} · {{expires}}",
  "settings.members.revoke": "Revocar",
  "settings.members.removeDialogTitle": "Eliminar miembro",
  "settings.members.removeDialogPrefix": "¿Eliminar a",
  "settings.members.thisTeammate": "este miembro del equipo",
  "settings.members.removeDialogSuffix":
    "de la cuenta? Se le va a cerrar la sesión en esta cuenta y se le va a crear una cuenta personal nueva la próxima vez que inicie sesión. Su acceso no se elimina.",
  "settings.members.removing": "Eliminando...",
  "settings.members.removeConfirm": "Eliminar miembro",
  "settings.members.expired": "vencida",
  "settings.members.expiresInDays.one": "vence en {{count}} día",
  "settings.members.expiresInDays.other": "vence en {{count}} días",
  "settings.members.expiresInHours.one": "vence en {{count}} hora",
  "settings.members.expiresInHours.other": "vence en {{count}} horas",
  "settings.members.errors.loadFailed": "Error al cargar los miembros",
  "settings.members.errors.loadInvitesFailed":
    "Error al cargar las invitaciones",
  "settings.members.errors.updateRoleFailed": "Error al actualizar el rol",
  "settings.members.errors.removeFailed": "Error al eliminar al miembro",
  "settings.members.errors.revokeFailed": "Error al revocar la invitación",
  "settings.members.toast.roleUpdated":
    "Se actualizó el rol de {{name}} a {{role}}",
  "settings.members.toast.removed": "Se eliminó a {{name}}",
  "settings.members.toast.invitationRevoked": "Invitación revocada",
  "settings.members.couldNotReachServer": "No se pudo conectar con el servidor",
  "settings.members.editableRole.admin.hint": "Gestiona miembros y todo lo demás",
  "settings.members.editableRole.agent.hint": "Usa las funciones; sin acceso a configuración",
  "settings.members.editableRole.viewer.hint": "Solo lectura en toda la app",

  // Invite member dialog
  "settings.invite.title": "Invitar a un compañero",
  "settings.invite.description":
    "Generá un enlace de invitación de un solo uso. Compartilo por WhatsApp, Slack o el canal que prefieras — no se necesita servicio de correo.",
  "settings.invite.role": "Rol",
  "settings.invite.linkValidFor": "Vigencia del enlace",
  "settings.invite.labelField": "Etiqueta",
  "settings.invite.labelPlaceholder": "Ej: Sara — equipo de soporte",
  "settings.invite.labelHint":
    "Te ayuda a recordar a quién le enviaste el enlace en la lista de pendientes de abajo.",
  "settings.invite.generateLink": "Generar enlace",
  "settings.invite.creating": "Creando...",
  "settings.invite.createdTitle": "Invitación creada",
  "settings.invite.createdDescPrefix":
    "Compartí este enlace con tu nuevo compañero. Va a poder registrarse (o iniciar sesión) y unirse a la cuenta como",
  "settings.invite.createdDescMiddle": "El enlace es válido por",
  "settings.invite.validForDays.one": "{{count}} día",
  "settings.invite.validForDays.other": "{{count}} días",
  "settings.invite.linkLabel": "Enlace de invitación",
  "settings.invite.saveLinkNow": "Guardá este enlace ahora.",
  "settings.invite.saveLinkBody":
    "Nunca almacenamos el texto plano — al cerrar este diálogo, la URL desaparece. Para volver a compartirlo, revocá esta invitación y creá una nueva.",
  "settings.invite.sendViaWhatsapp": "Enviar por WhatsApp",
  "settings.invite.roleDescription.admin":
    "Puede invitar compañeros, administrar la configuración, enviar mensajes y editar datos.",
  "settings.invite.roleDescription.agent":
    "Puede usar la bandeja de entrada, contactos, difusiones, automatizaciones y flujos. Sin acceso a configuración ni a miembros.",
  "settings.invite.roleDescription.viewer":
    "Acceso de solo lectura a todas las páginas. No puede enviar ni editar nada.",
  "settings.invite.defaultAccountName": "nuestra cuenta de wacrm",
  "settings.invite.whatsappMessage":
    "Uníte a {{accountName}} en wacrm con este enlace (válido por {{days}} días): {{url}}",
  "settings.invite.errors.labelTooLong":
    "La etiqueta debe tener {{max}} caracteres o menos",
  "settings.invite.errors.createFailed": "Error al crear la invitación",
  "settings.invite.errors.networkRetry":
    "No se pudo conectar con el servidor. ¿Intentar de nuevo?",
  "settings.invite.errors.clipboardBlocked":
    "Portapapeles bloqueado — copiá el enlace manualmente",
  "settings.invite.toast.linkCopied": "Enlace de invitación copiado",
  "settings.invite.done": "Listo",

  // API keys panel
  "settings.apiKeys.title": "Claves de API",
  "settings.apiKeys.descBeforeCode":
    "Las claves autentican la API REST pública (",
  "settings.apiKeys.descAfterCode":
    ") para que puedas crear tus propias automatizaciones. Enviálas como",
  "settings.apiKeys.descEnd": ".",
  "settings.apiKeys.newKey": "Nueva clave de API",
  "settings.apiKeys.empty": "Todavía no hay claves de API.",
  "settings.apiKeys.emptyAdminHintPrefix": "Hacé clic en",
  "settings.apiKeys.emptyAdminHintSuffix": "para crear una.",
  "settings.apiKeys.emptyNonAdminHint": "Pedile a un administrador que cree una.",
  "settings.apiKeys.statusRevoked": "Revocada",
  "settings.apiKeys.statusExpired": "Vencida",
  "settings.apiKeys.noScopes": "Sin permisos",
  "settings.apiKeys.createdOn": "Creada el {{date}}",
  "settings.apiKeys.lastUsedOn": "usada por última vez el {{date}}",
  "settings.apiKeys.neverUsed": "nunca usada",
  "settings.apiKeys.expiresOn": "vence el {{date}}",
  "settings.apiKeys.revoke": "Revocar",
  "settings.apiKeys.copyTitle": "Copiá tu clave de API",
  "settings.apiKeys.copyDescription":
    "Esta es la única vez que se muestra la clave completa. Guardala en un lugar seguro — si la perdés, revocala y creá una nueva.",
  "settings.apiKeys.keyLabel": "Clave de API",
  "settings.apiKeys.newKeyTitle": "Nueva clave de API",
  "settings.apiKeys.newKeyDescription":
    "Ponele el nombre de la integración que la va a usar y otorgale solo los permisos que necesita.",
  "settings.apiKeys.namePlaceholder": "Ej: Automatización de Zapier",
  "settings.apiKeys.scopes": "Permisos",
  "settings.apiKeys.scopesHintPrefix":
    "Una clave sin permisos igual puede llamar a",
  "settings.apiKeys.scopesHintSuffix": "para verificar que funciona.",
  "settings.apiKeys.creating": "Creando…",
  "settings.apiKeys.createKey": "Crear clave",
  "settings.apiKeys.errors.loadFailed": "Error al cargar las claves de API",
  "settings.apiKeys.errors.revokeFailed": "Error al revocar la clave",
  "settings.apiKeys.errors.nameRequired": "Ponele un nombre a la clave",
  "settings.apiKeys.errors.createFailed": "Error al crear la clave",
  "settings.apiKeys.errors.copyFailed":
    "Error al copiar — seleccioná y copiá manualmente",
  "settings.apiKeys.toast.revoked": "Se revocó \"{{name}}\"",
  "settings.apiKeys.toast.copied": "Clave de API copiada",

  // Appearance panel
  "settings.appearance.title": "Apariencia",
  "settings.appearance.description":
    "Configurá el modo y el color de acento que se usan en toda la aplicación. Se guarda en este dispositivo — probalo, cambia al instante.",
  "settings.appearance.modeHeading": "Modo",
  "settings.appearance.colorModeAriaLabel": "Modo de color",
  "settings.appearance.useModeAriaLabel": "Usar modo {{mode}}",
  "settings.appearance.modeLight": "Claro",
  "settings.appearance.modeDark": "Oscuro",
  "settings.appearance.accentHeading": "Color de acento",
  "settings.appearance.useThemeAriaLabel": "Usar tema {{name}}",
  "settings.appearance.themeIdSrOnly": "ID del tema: {{id}}",
};
