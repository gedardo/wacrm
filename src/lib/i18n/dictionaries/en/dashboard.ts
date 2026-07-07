export const dashboard = {
  "dashboard.title": "Dashboard",
  "dashboard.subtitle":
    "Live analytics across conversations, contacts, deals, broadcasts, and automations.",

  "dashboard.metrics.activeConversations": "Active Conversations",
  "dashboard.metrics.newContactsToday": "New Contacts Today",
  "dashboard.metrics.openDealsValue": "Open Deals Value",
  "dashboard.metrics.messagesSentToday": "Messages Sent Today",
  "dashboard.metrics.newTodayVsYesterday": "new today vs yesterday",
  "dashboard.metrics.vsYesterday": "vs yesterday",
  "dashboard.metrics.noChange": "No change {{suffix}}",
  "dashboard.metrics.delta": "{{sign}}{{value}} {{suffix}}",
  "dashboard.metrics.openDeal.one": "{{count}} open deal",
  "dashboard.metrics.openDeal.other": "{{count}} open deals",

  "dashboard.quickActions.newContact": "New Contact",
  "dashboard.quickActions.newDeal": "New Deal",
  "dashboard.quickActions.newBroadcast": "New Broadcast",
  "dashboard.quickActions.newAutomation": "New Automation",

  "dashboard.conversationsChart.title": "Conversations Over Time",
  "dashboard.conversationsChart.subtitle": "Daily message volume by direction",
  "dashboard.conversationsChart.rangeDays": "{{days}} days",
  "dashboard.conversationsChart.emptyTitle": "No message activity in this range",
  "dashboard.conversationsChart.emptyHint":
    "Send or receive messages to start populating this chart.",
  "dashboard.conversationsChart.incoming": "Incoming",
  "dashboard.conversationsChart.outgoing": "Outgoing",
  "dashboard.conversationsChart.incomingCount": "{{count}} incoming",
  "dashboard.conversationsChart.outgoingCount": "{{count}} outgoing",
  "dashboard.conversationsChart.ariaLabel": "Conversations per day",

  "dashboard.pipeline.title": "Pipeline Value",
  "dashboard.pipeline.subtitle": "Open deals by stage",
  "dashboard.pipeline.emptyTitle": "No open deals yet",
  "dashboard.pipeline.emptyHint":
    "Create deals in Pipelines to see stage breakdowns here.",
  "dashboard.pipeline.dealCount.one": "{{count}} deal",
  "dashboard.pipeline.dealCount.other": "{{count}} deals",
  "dashboard.pipeline.ariaLabel": "Pipeline value by stage",
  "dashboard.pipeline.total": "Total",

  "dashboard.responseTime.title": "Average First Response Time",
  "dashboard.responseTime.subtitle":
    "Minutes to reply to a customer's first unreplied message, by weekday",
  "dashboard.responseTime.target": "target {{minutes}}m",
  "dashboard.responseTime.thisWeek": "This week:",
  "dashboard.responseTime.lastWeek": "Last week:",
  "dashboard.responseTime.emptyTitle": "No replies recorded yet",
  "dashboard.responseTime.emptyHint":
    "This chart fills in as you reply to customer messages.",

  "dashboard.activity.title": "Recent Activity",
  "dashboard.activity.viewAll": "View all",
  "dashboard.activity.emptyTitle": "No activity yet",
  "dashboard.activity.emptyHint":
    "Activity from messages, deals, broadcasts, and automations will appear here.",
  "dashboard.activity.showing": "Showing {{visible}} of {{total}}",
  "dashboard.activity.show": "Show",
  "dashboard.activity.secondsAgo": "{{n}}s ago",
  "dashboard.activity.minutesAgo": "{{n}}m ago",
  "dashboard.activity.hoursAgo": "{{n}}h ago",
  "dashboard.activity.daysAgo": "{{n}}d ago",

  "dashboard.emptyState.defaultTitle": "Not enough data yet",

  "dashboard.dow.mon": "Mon",
  "dashboard.dow.tue": "Tue",
  "dashboard.dow.wed": "Wed",
  "dashboard.dow.thu": "Thu",
  "dashboard.dow.fri": "Fri",
  "dashboard.dow.sat": "Sat",
  "dashboard.dow.sun": "Sun",
} as const;
