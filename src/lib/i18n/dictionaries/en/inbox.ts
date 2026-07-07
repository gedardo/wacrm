export const inbox = {
  // Connection banner (inbox page)
  "inbox.banner.whatsappNotConnected":
    "WhatsApp® is not connected. Go to Settings to connect your account.",

  // Shared / generic
  "inbox.tags": "Tags",
  "inbox.noMessagesYet": "No messages yet",
  "inbox.sendTemplate": "Send template",
  "inbox.emptyState.title": "Select a conversation",
  "inbox.emptyState.subtitle": "Choose a conversation from the left to start messaging",
  "inbox.status.open": "Open",
  "inbox.status.pending": "Pending",
  "inbox.status.closed": "Closed",

  // Search + filters (conversation list)
  "inbox.search.placeholder": "Search conversations...",
  "inbox.filters.all": "All",
  "inbox.filters.unread": "Unread",
  "inbox.filters.company": "Company",
  "inbox.filters.allCompanies": "All companies",
  "inbox.filters.tag": "Tag",
  "inbox.filters.clearAll": "Clear all",

  // Conversation list
  "inbox.conversationList.noConversationsFound": "No conversations found",
  "inbox.conversationList.unknownContact": "Unknown",

  // Message thread
  "inbox.thread.sendTemplateToStart": "Send a template to start the conversation",
  "inbox.thread.backToConversations": "Back to conversations",
  "inbox.thread.hideContactPanel": "Hide contact panel",
  "inbox.thread.showContactPanel": "Show contact panel",
  "inbox.thread.hideContact": "Hide contact",
  "inbox.thread.showContact": "Show contact",
  "inbox.thread.refreshConversation": "Refresh conversation",
  "inbox.thread.refresh": "Refresh",
  "inbox.thread.customerFallback": "Customer",
  "inbox.thread.you": "You",

  // 24h session timer
  "inbox.session.noCustomerMessages": "No customer messages",
  "inbox.session.expired": "Expired",
  "inbox.session.hoursRemaining": "{{count}}h remaining",
  "inbox.session.minutesRemaining": "{{count}}m remaining",

  // Assignment dropdown
  "inbox.assign.assign": "Assign",
  "inbox.assign.assigned": "Assigned",
  "inbox.assign.unassign": "Unassign",
  "inbox.assign.noTeammates": "No teammates available",
  "inbox.assign.me": " (me)",

  // Toasts (message thread)
  "inbox.toast.waitForMessage": "Wait for the message to finish sending",
  "inbox.toast.reactionFailed": "Reaction failed: {{reason}}",
  "inbox.toast.assignmentFailed": "Failed to update assignment",
  "inbox.toast.sendFailed": "Failed to send: {{reason}}",
  "inbox.toast.sendTemplateFailed": "Failed to send template: {{reason}}",

  // Composer
  "inbox.composer.sessionExpiredBanner":
    "24-hour session expired. Use a template to re-engage.",
  "inbox.composer.templatesButton": "Templates",
  "inbox.composer.photo": "Photo",
  "inbox.composer.video": "Video",
  "inbox.composer.document": "Document",
  "inbox.composer.voiceNote": "Voice note",
  "inbox.composer.readOnlyTooltip": "Read-only — your role can't send messages",
  "inbox.composer.attachMedia": "Attach media",
  "inbox.composer.draftWithAiTooltip": "Draft a reply with AI",
  "inbox.composer.placeholderReadOnly": "Read-only — viewers can browse but not reply",
  "inbox.composer.placeholderSessionExpired": "Session expired - use a template",
  "inbox.composer.placeholderDefault": "Type a message... (Shift+Enter for new line)",
  "inbox.composer.aiHint":
    "Tap the ✨ to draft a reply with AI — you can edit it before sending",
  "inbox.composer.recording": "Recording… {{current}} / {{max}}",
  "inbox.composer.stopAndAttach": "Stop and attach",
  "inbox.composer.removeAttachment": "Remove attachment",
  "inbox.composer.addCaptionPlaceholder": "Add a caption…",
  "inbox.composer.aiNotConfigured":
    "AI isn't set up yet — enable it in Settings → AI Assistant.",
  "inbox.composer.draftFailedGeneric": "Couldn't draft a reply.",
  "inbox.composer.aiEmptyReply": "The assistant didn't return a reply.",
  "inbox.composer.aiUnreachable": "Couldn't reach the AI assistant.",
  "inbox.composer.fileTooLarge": "File is {{size}} MB — {{kind}} limit is {{limit}} MB.",
  "inbox.composer.mediaKind.image": "image",
  "inbox.composer.mediaKind.video": "video",
  "inbox.composer.mediaKind.document": "document",
  "inbox.composer.mediaKind.audio": "audio",
  "inbox.composer.uploadFailed": "Upload failed.",
  "inbox.composer.recordingTooLong": "Recording is too long (over 16 MB).",
  "inbox.composer.recordingNotSupported": "Voice recording isn't supported in this browser.",
  "inbox.composer.micDenied": "Microphone access denied or unavailable.",

  // Message actions (hover toolbar)
  "inbox.actions.nothingToCopy": "Nothing to copy",
  "inbox.actions.copyFailed": "Copy failed",
  "inbox.actions.react": "React",
  "inbox.actions.reactWith": "React with {{emoji}}",
  "inbox.actions.reply": "Reply",

  // Message bubble
  "inbox.bubble.mediaUnavailable": "{{label}} unavailable",
  "inbox.bubble.image": "Image",
  "inbox.bubble.video": "Video",
  "inbox.bubble.audio": "Audio",
  "inbox.bubble.document": "Document",
  "inbox.bubble.sharedImageAlt": "Shared image",
  "inbox.bubble.templateBadge": "Template",
  "inbox.bubble.locationShared": "Location shared",
  "inbox.bubble.buttonReply": "Button reply",
  "inbox.bubble.interactiveReplyFallback": "[Interactive reply]",
  "inbox.bubble.unsupportedMessageType": "[Unsupported message type]",

  // Reply quote
  "inbox.replyQuote.cancelReply": "Cancel reply",
  "inbox.replyQuote.imagePreview": "[Image]",
  "inbox.replyQuote.videoPreview": "[Video]",
  "inbox.replyQuote.audioPreview": "[Audio]",
  "inbox.replyQuote.documentPreview": "[Document]",
  "inbox.replyQuote.locationPreview": "[Location]",
  "inbox.replyQuote.templatePreview": "[Template]",
  "inbox.replyQuote.messagePreview": "[Message]",

  // Template picker
  "inbox.templatePicker.fillPlaceholders":
    "Fill in the placeholders to render this template. Meta requires every variable to be set.",
  "inbox.templatePicker.pickTemplate":
    "Pick an approved WhatsApp template to send to this contact.",
  "inbox.templatePicker.noApprovedTemplates": "No approved templates",
  "inbox.templatePicker.approveHint":
    "Approve a template in Meta WhatsApp Manager, then sync it from Settings → Templates.",
  "inbox.templatePicker.preview": "Preview",
  "inbox.templatePicker.header": "Header",
  "inbox.templatePicker.body": "Body",
  "inbox.templatePicker.headerValuePlaceholder": "Value for the header variable",
  "inbox.templatePicker.valueForPrefix": "Value for",
  "inbox.templatePicker.urlButtonValueForPrefix": 'URL button "{{text}}" — value for ',
  "inbox.templatePicker.urlSuffixPlaceholder": "URL suffix value",
  "inbox.templatePicker.finalUrl": "Final URL: {{url}}",

  // Contact sidebar
  "inbox.contactSidebar.noTags": "No tags",
  "inbox.contactSidebar.activeDeals": "Active Deals",
  "inbox.contactSidebar.noDeals": "No deals",
  "inbox.contactSidebar.notes": "Notes",
  "inbox.contactSidebar.addNotePlaceholder": "Add a note...",
} as const;
