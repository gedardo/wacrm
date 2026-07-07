import type { auth as authEn } from "../en/auth";

export const auth: Record<keyof typeof authEn, string> = {
  // Login page
  "auth.login.title": "Bienvenido de nuevo",
  "auth.login.titleInvite": "Iniciá sesión para aceptar",
  "auth.login.description": "Iniciá sesión en tu cuenta",
  "auth.login.descriptionInvite": "Iniciá sesión y te llevaremos a la invitación.",
  "auth.login.emailLabel": "Email",
  "auth.login.emailPlaceholder": "tu@ejemplo.com",
  "auth.login.passwordLabel": "Contraseña",
  "auth.login.passwordPlaceholder": "Ingresá tu contraseña",
  "auth.login.forgotPassword": "¿Olvidaste tu contraseña?",
  "auth.login.submit": "Iniciar sesión",
  "auth.login.submitLoading": "Iniciando sesión...",
  "auth.login.noAccount": "¿No tenés una cuenta?",
  "auth.login.createAccount": "Crear cuenta",

  // Signup page
  "auth.signup.errorPasswordMismatch": "Las contraseñas no coinciden",
  "auth.signup.errorPasswordTooShort": "La contraseña debe tener al menos 6 caracteres",
  "auth.signup.successTitle": "Revisá tu correo electrónico",
  "auth.signup.successBodyPrefix": "Te enviamos un enlace de confirmación a",
  "auth.signup.successBodySuffix":
    ". Revisá tu bandeja de entrada y hacé clic en el enlace para verificar tu cuenta.",
  "auth.signup.backToSignIn": "Volver a iniciar sesión",
  "auth.signup.titleInvite": "Crear cuenta y unirte",
  "auth.signup.title": "Crear cuenta",
  "auth.signup.descriptionInvite":
    "Verificá tu email y luego aceptá la invitación para unirte a tu equipo.",
  "auth.signup.description": "Comenzá con la plantilla de CRM para WhatsApp",
  "auth.signup.fullNameLabel": "Nombre completo",
  "auth.signup.fullNamePlaceholder": "Juan Pérez",
  "auth.signup.emailLabel": "Email",
  "auth.signup.emailPlaceholder": "tu@ejemplo.com",
  "auth.signup.passwordLabel": "Contraseña",
  "auth.signup.passwordPlaceholder": "Al menos 6 caracteres",
  "auth.signup.confirmPasswordLabel": "Confirmar contraseña",
  "auth.signup.confirmPasswordPlaceholder": "Repetí tu contraseña",
  "auth.signup.submit": "Crear cuenta",
  "auth.signup.submitLoading": "Creando cuenta...",
  "auth.signup.haveAccount": "¿Ya tenés una cuenta?",
  "auth.signup.signInLink": "Iniciar sesión",

  // Forgot password page
  "auth.forgotPassword.successTitle": "Revisá tu correo electrónico",
  "auth.forgotPassword.successBodyPrefix":
    "Te enviamos un enlace para restablecer tu contraseña a",
  "auth.forgotPassword.successBodySuffix": ". Revisá tu bandeja de entrada.",
  "auth.forgotPassword.backToSignIn": "Volver a iniciar sesión",
  "auth.forgotPassword.title": "Restablecer contraseña",
  "auth.forgotPassword.description":
    "Ingresá tu email y te enviaremos un enlace para restablecerla",
  "auth.forgotPassword.emailLabel": "Email",
  "auth.forgotPassword.emailPlaceholder": "tu@ejemplo.com",
  "auth.forgotPassword.submit": "Enviar enlace",
  "auth.forgotPassword.submitLoading": "Enviando...",

  // Join (invite redemption) page
  "auth.join.roleAdmin": "Admin",
  "auth.join.roleAgent": "Agente",
  "auth.join.roleViewer": "Espectador",
  "auth.join.notFoundTitle": "Invitación no encontrada",
  "auth.join.notFoundBody":
    "Este enlace no corresponde a una invitación válida. Verificá la URL o pedile a la persona que te invitó que te envíe una nueva.",
  "auth.join.usedTitle": "Invitación ya utilizada",
  "auth.join.usedBody":
    "Esta invitación ya fue aceptada. Si no fuiste vos, pedile al administrador de la cuenta que envíe un nuevo enlace.",
  "auth.join.expiredTitle": "Invitación vencida",
  "auth.join.expiredBody":
    "Esta invitación venció. Pedile al administrador de la cuenta que envíe una nueva; tardan solo unos segundos en generarse.",
  "auth.join.serverErrorTitle": "Algo salió mal",
  "auth.join.serverErrorBody":
    "No pudimos verificar esta invitación en este momento. Intentá actualizar la página en un momento.",
  "auth.join.verifying": "Verificando invitación…",
  "auth.join.tryAgain": "Intentar de nuevo",
  "auth.join.createAccountInstead": "Crear una cuenta nueva",
  "auth.join.signIn": "Iniciar sesión",
  "auth.join.invitedTo": "Estás invitado a",
  "auth.join.willJoinAs": "Te unirás como",
  "auth.join.linkValidUntil": ". El enlace es válido hasta",
  "auth.join.accepting": "Aceptando…",
  "auth.join.acceptInvitation": "Aceptar invitación",
  "auth.join.acceptNotePrefix": "Al aceptar, tu inicio de sesión se moverá a",
  "auth.join.acceptNoteSuffix":
    ". Tu cuenta personal vacía creada durante el registro se eliminará.",
  "auth.join.conflictTitle": "No podés unirte a {{accountName}} con esta cuenta",
  "auth.join.conflictBodyPrefix": "Para unirte a",
  "auth.join.conflictBodySuffix":
    ", cerrá sesión y registrate de nuevo con una dirección de email diferente. El enlace de invitación sigue siendo válido mientras no haya vencido.",
  "auth.join.staySignedIn": "Mantener la sesión iniciada",
  "auth.join.signingOut": "Cerrando sesión…",
  "auth.join.signOutAndUseDifferentEmail": "Cerrar sesión y usar otro email",
  "auth.join.createAccountAndJoin": "Crear cuenta y unirte",
  "auth.join.alreadyHaveAccount": "Ya tengo una cuenta",
  "auth.join.conflictDefaultMessage":
    "Ya formás parte de otra cuenta. Iniciá sesión con un email diferente para unirte a esta.",
  "auth.join.acceptFailed": "No se pudo aceptar la invitación",
  "auth.join.welcomeToast": "Bienvenido al equipo",
  "auth.join.serverUnreachable": "No se pudo conectar con el servidor",
  "auth.join.signOutFailed": "No se pudo cerrar sesión. Intentá actualizar la página.",
};
