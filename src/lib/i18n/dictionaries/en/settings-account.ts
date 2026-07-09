export const settingsAccount = {
  // Page shell
  "settings.page.title": "Settings",
  "settings.page.description":
    "Everything in one place — your account and your workspace. Pick a section to manage it.",

  // Rail navigation
  "settings.rail.ariaLabel": "Settings sections",
  "settings.rail.groupAccount": "Account",
  "settings.rail.groupWorkspace": "Workspace",

  // Section labels (rail + overview tiles)
  "settings.sections.overview": "Overview",
  "settings.sections.profile": "Your profile",
  "settings.sections.security": "Login & security",
  "settings.sections.appearance": "Appearance",
  "settings.sections.whatsapp": "WhatsApp",
  "settings.sections.templates": "Templates",
  "settings.sections.fields": "Fields & tags",
  "settings.sections.deals": "Deals & currency",
  "settings.sections.members": "Team members",
  "settings.sections.api": "API keys",

  // Shared across settings panels
  "settings.common.networkError": "Could not reach the server",
  "settings.common.unknownError": "Unknown error",
  "settings.common.done": "Done",

  // Overview landing
  "settings.overview.yourAccount": "Your account",
  "settings.overview.whatsappNotSetup": "Not set up yet",
  "settings.overview.whatsappConnected": "Connected",
  "settings.overview.whatsappNeedsReconnect": "Needs reconnecting",
  "settings.overview.viewMembers": "View team members",
  "settings.overview.memberCount.one": "{{count}} member",
  "settings.overview.memberCount.other": "{{count}} members",
  "settings.overview.pendingInvite.one": "{{count}} pending invite",
  "settings.overview.pendingInvite.other": "{{count}} pending invites",
  "settings.overview.manageTemplates": "Manage message templates",
  "settings.overview.templateCount.one": "{{count}} template",
  "settings.overview.templateCount.other": "{{count}} templates",
  "settings.overview.pendingReview.one": "{{count}} pending review",
  "settings.overview.pendingReview.other": "{{count}} pending reviews",
  "settings.overview.tagsAndFields": "Tags and custom fields",
  "settings.overview.tagCount.one": "{{count}} tag",
  "settings.overview.tagCount.other": "{{count}} tags",
  "settings.overview.customFieldCount.one": "{{count}} custom field",
  "settings.overview.customFieldCount.other": "{{count}} custom fields",
  "settings.overview.appearanceSubtitle": "{{mode}} mode · {{theme}} accent",

  // Profile panel
  "settings.profile.title": "Your profile",
  "settings.profile.description":
    "How you show up across the app. Your avatar and name appear in the header, sidebar, and anywhere your teammates see you.",
  "settings.profile.changePhoto": "Change photo",
  "settings.profile.uploadPhoto": "Upload photo",
  "settings.profile.photoHint": "PNG, JPG, WebP, or GIF. Up to 2 MB.",
  "settings.profile.displayName": "Display name",
  "settings.profile.emailChangeCheckPrefix": "Check the inbox for",
  "settings.profile.emailChangeAnd": "and",
  "settings.profile.emailChangeSuffix":
    "— both need to confirm before the change takes effect.",
  "settings.profile.accountDetails": "Account details",
  "settings.profile.role": "Role",
  "settings.profile.joined": "Joined",
  "settings.profile.userId": "User ID",
  "settings.profile.loadingProfile": "Loading your profile…",
  "settings.profile.saveChanges": "Save changes",
  "settings.profile.toast.unsupportedType": "Unsupported image type",
  "settings.profile.toast.unsupportedTypeDesc": "Use PNG, JPG, WebP, or GIF.",
  "settings.profile.toast.imageTooLarge": "Image is too large",
  "settings.profile.toast.imageTooLargeDesc": "Maximum 2 MB.",
  "settings.profile.toast.nameRequired": "Display name is required",
  "settings.profile.toast.invalidEmail": "Enter a valid email address",
  "settings.profile.toast.saved": "Profile saved",
  "settings.profile.toast.savedCheckEmail":
    "Profile saved — check your email to confirm the address change",
  "settings.profile.errors.uploadFailed": "Upload failed",
  "settings.profile.errors.saveFailed": "Save failed",
  "settings.profile.errors.emailChangeFailed": "Email change failed",

  // Security panel (shell)
  "settings.security.title": "Login & security",
  "settings.security.description":
    "Change your password and sign out of your devices. These keep your account safe.",

  // Password card
  "settings.security.password.title": "Password",
  "settings.security.password.description":
    "Use at least {{min}} characters. You will stay signed in on this device after changing it.",
  "settings.security.password.current": "Current password",
  "settings.security.password.new": "New password",
  "settings.security.password.confirm": "Confirm new password",
  "settings.security.password.updating": "Updating…",
  "settings.security.password.submit": "Update password",
  "settings.security.password.noEmailError":
    "Cannot change password without a current email",
  "settings.security.password.minLengthError":
    "Password must be at least {{min}} characters",
  "settings.security.password.mismatchError":
    "New password and confirmation do not match",
  "settings.security.password.incorrectCurrent":
    "Current password is incorrect",
  "settings.security.password.updateFailedPrefix": "Password update failed",
  "settings.security.password.updated": "Password updated",

  // Active sessions card
  "settings.sessions.title": "Active sessions",
  "settings.sessions.description":
    "Sign out of every device where you're logged in — including this one. Useful if you lost a laptop or shared your password.",
  "settings.sessions.signOutAll": "Sign out of all devices",
  "settings.sessions.confirmTitle": "Sign out everywhere?",
  "settings.sessions.confirmDescription":
    "Every device logged into this account will be signed out and will need to log in again. You will be redirected to the login page.",
  "settings.sessions.signingOut": "Signing out…",
  "settings.sessions.confirmButton": "Sign out everywhere",
  "settings.sessions.signOutFailedPrefix": "Sign-out failed",

  // Members tab
  "settings.members.title": "Team members",
  "settings.members.description":
    "People with access to this account. Roles control what each teammate can do.",
  "settings.members.inviteMember": "Invite member",
  "settings.members.presenceOnline": "{{count}} online",
  "settings.members.presenceAway": "{{count}} away",
  "settings.members.presenceOffline": "{{count}} offline",
  "settings.members.memberCount.one": "{{count}} member",
  "settings.members.memberCount.other": "{{count}} members",
  "settings.members.unnamed": "Unnamed",
  "settings.members.memberAlt": "Member",
  "settings.members.genericMember": "member",
  "settings.members.you": "You",
  "settings.members.joinedOn": "Joined {{date}}",
  "settings.members.pendingInvitations": "Pending invitations",
  "settings.members.pendingHint":
    "The plaintext invite URL is only shown once at creation for security — to re-share, revoke the invite below and create a new one.",
  "settings.members.noPendingInvitations": "No pending invitations.",
  "settings.members.noPendingHintPrefix": "Click",
  "settings.members.noPendingHintSuffix":
    "above to generate a shareable link.",
  "settings.members.untitledInvite": "Untitled invite",
  "settings.members.createdOn": "Created {{date}} · {{expires}}",
  "settings.members.revoke": "Revoke",
  "settings.members.removeDialogTitle": "Remove member",
  "settings.members.removeDialogPrefix": "Remove",
  "settings.members.thisTeammate": "this teammate",
  "settings.members.removeDialogSuffix":
    "from the account? They'll be signed out of this account and given a fresh personal account on their next sign-in. Their login isn't deleted.",
  "settings.members.removing": "Removing...",
  "settings.members.removeConfirm": "Remove member",
  "settings.members.expired": "expired",
  "settings.members.expiresInDays.one": "expires in {{count}} day",
  "settings.members.expiresInDays.other": "expires in {{count}} days",
  "settings.members.expiresInHours.one": "expires in {{count}} hour",
  "settings.members.expiresInHours.other": "expires in {{count}} hours",
  "settings.members.errors.loadFailed": "Failed to load members",
  "settings.members.errors.loadInvitesFailed": "Failed to load invitations",
  "settings.members.errors.updateRoleFailed": "Failed to update role",
  "settings.members.errors.removeFailed": "Failed to remove member",
  "settings.members.errors.revokeFailed": "Failed to revoke invitation",
  "settings.members.toast.roleUpdated": "Updated {{name}} to {{role}}",
  "settings.members.toast.removed": "Removed {{name}}",
  "settings.members.toast.invitationRevoked": "Invitation revoked",
  "settings.members.couldNotReachServer": "Could not reach the server",
  "settings.members.editableRole.admin.hint": "Manage members + everything",
  "settings.members.editableRole.agent.hint": "Use features; no settings",
  "settings.members.editableRole.viewer.hint": "Read-only across the app",

  // Invite member dialog
  "settings.invite.title": "Invite a teammate",
  "settings.invite.description":
    "Generate a one-time invite link. Share it via WhatsApp, Slack, or any channel you like — no email service required.",
  "settings.invite.role": "Role",
  "settings.invite.linkValidFor": "Link valid for",
  "settings.invite.labelField": "Label",
  "settings.invite.labelPlaceholder": "e.g. Sara — support team",
  "settings.invite.labelHint":
    "Helps you remember who you sent the link to in the pending list below.",
  "settings.invite.generateLink": "Generate link",
  "settings.invite.creating": "Creating...",
  "settings.invite.createdTitle": "Invite created",
  "settings.invite.createdDescPrefix":
    "Share this link with your new teammate. They'll be able to sign up (or sign in) and join the account as",
  "settings.invite.createdDescMiddle": "The link is valid for",
  "settings.invite.validForDays.one": "{{count}} day",
  "settings.invite.validForDays.other": "{{count}} days",
  "settings.invite.linkLabel": "Invite link",
  "settings.invite.saveLinkNow": "Save this link now.",
  "settings.invite.saveLinkBody":
    "We never store the plaintext — once you close this dialog the URL is gone. To re-share, revoke this invite and create a new one.",
  "settings.invite.sendViaWhatsapp": "Send via WhatsApp",
  "settings.invite.roleDescription.admin":
    "Can invite teammates, manage settings, send messages, and edit data.",
  "settings.invite.roleDescription.agent":
    "Can use the inbox, contacts, broadcasts, automations, and flows. No settings or member access.",
  "settings.invite.roleDescription.viewer":
    "Read-only access across every page. Cannot send or edit anything.",
  "settings.invite.defaultAccountName": "our wacrm account",
  "settings.invite.whatsappMessage":
    "Join {{accountName}} on wacrm using this link (valid for {{days}} days): {{url}}",
  "settings.invite.errors.labelTooLong":
    "Label must be {{max}} characters or fewer",
  "settings.invite.errors.createFailed": "Failed to create invitation",
  "settings.invite.errors.networkRetry":
    "Could not reach the server. Try again?",
  "settings.invite.errors.clipboardBlocked":
    "Clipboard blocked — copy the link manually",
  "settings.invite.toast.linkCopied": "Invite link copied",
  "settings.invite.done": "Done",

  // API keys panel
  "settings.apiKeys.title": "API keys",
  "settings.apiKeys.descBeforeCode": "Keys authenticate the public REST API (",
  "settings.apiKeys.descAfterCode":
    ") so you can build your own automations. Send them as",
  "settings.apiKeys.descEnd": ".",
  "settings.apiKeys.newKey": "New API key",
  "settings.apiKeys.empty": "No API keys yet.",
  "settings.apiKeys.emptyAdminHintPrefix": "Click",
  "settings.apiKeys.emptyAdminHintSuffix": "to create one.",
  "settings.apiKeys.emptyNonAdminHint": "Ask an admin to create one.",
  "settings.apiKeys.statusRevoked": "Revoked",
  "settings.apiKeys.statusExpired": "Expired",
  "settings.apiKeys.noScopes": "No scopes",
  "settings.apiKeys.createdOn": "Created {{date}}",
  "settings.apiKeys.lastUsedOn": "last used {{date}}",
  "settings.apiKeys.neverUsed": "never used",
  "settings.apiKeys.expiresOn": "expires {{date}}",
  "settings.apiKeys.revoke": "Revoke",
  "settings.apiKeys.copyTitle": "Copy your API key",
  "settings.apiKeys.copyDescription":
    "This is the only time the full key is shown. Store it somewhere safe — if you lose it, revoke it and create a new one.",
  "settings.apiKeys.keyLabel": "API key",
  "settings.apiKeys.newKeyTitle": "New API key",
  "settings.apiKeys.newKeyDescription":
    "Name it after the integration that will use it, and grant only the scopes it needs.",
  "settings.apiKeys.namePlaceholder": "e.g. Zapier automation",
  "settings.apiKeys.scopes": "Scopes",
  "settings.apiKeys.scopesHintPrefix":
    "A key with no scopes can still call",
  "settings.apiKeys.scopesHintSuffix": "to verify it works.",
  "settings.apiKeys.creating": "Creating…",
  "settings.apiKeys.createKey": "Create key",
  "settings.apiKeys.errors.loadFailed": "Failed to load API keys",
  "settings.apiKeys.errors.revokeFailed": "Failed to revoke key",
  "settings.apiKeys.errors.nameRequired": "Give the key a name",
  "settings.apiKeys.errors.createFailed": "Failed to create key",
  "settings.apiKeys.errors.copyFailed":
    "Copy failed — select and copy manually",
  "settings.apiKeys.toast.revoked": "Revoked \"{{name}}\"",
  "settings.apiKeys.toast.copied": "API key copied",

  // Appearance panel
  "settings.appearance.title": "Appearance",
  "settings.appearance.description":
    "Set the mode and accent colour used across the app. Saved to this device — try it, it changes live.",
  "settings.appearance.modeHeading": "Mode",
  "settings.appearance.colorModeAriaLabel": "Color mode",
  "settings.appearance.useModeAriaLabel": "Use {{mode}} mode",
  "settings.appearance.modeLight": "Light",
  "settings.appearance.modeDark": "Dark",
  "settings.appearance.accentHeading": "Accent color",
  "settings.appearance.useThemeAriaLabel": "Use {{name}} theme",
  "settings.appearance.themeIdSrOnly": "Theme id: {{id}}",
} as const;
