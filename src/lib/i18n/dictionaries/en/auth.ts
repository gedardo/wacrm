export const auth = {
  // Login page
  "auth.login.title": "Welcome back",
  "auth.login.titleInvite": "Sign in to accept",
  "auth.login.description": "Sign in to your account",
  "auth.login.descriptionInvite": "Sign in and we'll take you to the invitation.",
  "auth.login.emailLabel": "Email",
  "auth.login.emailPlaceholder": "you@example.com",
  "auth.login.passwordLabel": "Password",
  "auth.login.passwordPlaceholder": "Enter your password",
  "auth.login.forgotPassword": "Forgot password?",
  "auth.login.submit": "Sign in",
  "auth.login.submitLoading": "Signing in...",
  "auth.login.noAccount": "Don't have an account?",
  "auth.login.createAccount": "Create account",

  // Signup page
  "auth.signup.errorPasswordMismatch": "Passwords do not match",
  "auth.signup.errorPasswordTooShort": "Password must be at least 6 characters",
  "auth.signup.successTitle": "Check your email",
  "auth.signup.successBodyPrefix": "We've sent a confirmation link to",
  "auth.signup.successBodySuffix":
    ". Please check your inbox and click the link to verify your account.",
  "auth.signup.backToSignIn": "Back to sign in",
  "auth.signup.titleInvite": "Create account & join",
  "auth.signup.title": "Create account",
  "auth.signup.descriptionInvite":
    "Verify your email, then accept the invitation to join your team.",
  "auth.signup.description": "Get started with CRM Template for WhatsApp",
  "auth.signup.fullNameLabel": "Full name",
  "auth.signup.fullNamePlaceholder": "John Doe",
  "auth.signup.emailLabel": "Email",
  "auth.signup.emailPlaceholder": "you@example.com",
  "auth.signup.passwordLabel": "Password",
  "auth.signup.passwordPlaceholder": "At least 6 characters",
  "auth.signup.confirmPasswordLabel": "Confirm password",
  "auth.signup.confirmPasswordPlaceholder": "Repeat your password",
  "auth.signup.submit": "Create account",
  "auth.signup.submitLoading": "Creating account...",
  "auth.signup.haveAccount": "Already have an account?",
  "auth.signup.signInLink": "Sign in",

  // Forgot password page
  "auth.forgotPassword.successTitle": "Check your email",
  "auth.forgotPassword.successBodyPrefix": "We've sent a password reset link to",
  "auth.forgotPassword.successBodySuffix": ". Please check your inbox.",
  "auth.forgotPassword.backToSignIn": "Back to sign in",
  "auth.forgotPassword.title": "Reset password",
  "auth.forgotPassword.description":
    "Enter your email and we'll send you a reset link",
  "auth.forgotPassword.emailLabel": "Email",
  "auth.forgotPassword.emailPlaceholder": "you@example.com",
  "auth.forgotPassword.submit": "Send reset link",
  "auth.forgotPassword.submitLoading": "Sending...",

  // Join (invite redemption) page
  "auth.join.roleAdmin": "Admin",
  "auth.join.roleAgent": "Agent",
  "auth.join.roleViewer": "Viewer",
  "auth.join.notFoundTitle": "Invite not found",
  "auth.join.notFoundBody":
    "This link doesn’t match a valid invitation. Double-check the URL or ask the person who invited you to send a new one.",
  "auth.join.usedTitle": "Invite already used",
  "auth.join.usedBody":
    "This invitation has already been accepted. If that wasn’t you, ask the account admin to send a fresh link.",
  "auth.join.expiredTitle": "Invite expired",
  "auth.join.expiredBody":
    "This invitation has expired. Ask the account admin to send a new one — they take a few seconds to generate.",
  "auth.join.serverErrorTitle": "Something went wrong",
  "auth.join.serverErrorBody":
    "We couldn’t verify this invitation right now. Try refreshing the page in a moment.",
  "auth.join.verifying": "Verifying invitation…",
  "auth.join.tryAgain": "Try again",
  "auth.join.createAccountInstead": "Create a new account instead",
  "auth.join.signIn": "Sign in",
  "auth.join.invitedTo": "You're invited to",
  "auth.join.willJoinAs": "You'll join as",
  "auth.join.linkValidUntil": ". Link valid until",
  "auth.join.accepting": "Accepting…",
  "auth.join.acceptInvitation": "Accept invitation",
  "auth.join.acceptNotePrefix": "Accepting moves your login into",
  "auth.join.acceptNoteSuffix":
    ". Your empty personal account from signup will be cleaned up.",
  "auth.join.conflictTitle": "Can't join {{accountName}} with this account",
  "auth.join.conflictBodyPrefix": "To join",
  "auth.join.conflictBodySuffix":
    ", sign out and sign up again with a different email address. The invite link stays valid as long as it hasn't expired.",
  "auth.join.staySignedIn": "Stay signed in",
  "auth.join.signingOut": "Signing out…",
  "auth.join.signOutAndUseDifferentEmail": "Sign out & use a different email",
  "auth.join.createAccountAndJoin": "Create account & join",
  "auth.join.alreadyHaveAccount": "I already have an account",
  "auth.join.conflictDefaultMessage":
    "You are already in another account. Sign in with a different email to join this one.",
  "auth.join.acceptFailed": "Failed to accept invitation",
  "auth.join.welcomeToast": "Welcome to the team",
  "auth.join.serverUnreachable": "Could not reach the server",
  "auth.join.signOutFailed": "Could not sign out. Try refreshing the page.",
} as const;
