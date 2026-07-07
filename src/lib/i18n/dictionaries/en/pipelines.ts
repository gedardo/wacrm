export const pipelines = {
  // Page header / pipeline selector
  "pipelines.selectPipeline": "Select Pipeline",
  "pipelines.noPipelinesYet": "No pipelines yet",
  "pipelines.managePipelines": "Manage Pipelines",
  "pipelines.addPipeline": "Add Pipeline",
  "pipelines.addDeal": "Add Deal",
  "pipelines.createPipelineHint": "Create a pipeline to start tracking deals",
  "pipelines.createPipeline": "Create Pipeline",
  "pipelines.newPipelineTitle": "New Pipeline",
  "pipelines.pipelineNameLabel": "Pipeline Name",
  "pipelines.pipelineNamePlaceholder": "e.g., Enterprise Sales",
  "pipelines.defaultStagesHint":
    "Default stages (New Lead → Won) will be created automatically.",
  "pipelines.creatingEllipsis": "Creating...",
  "pipelines.toastMoveDealFailed": "Failed to move deal",
  "pipelines.toastNoAccountLinked": "Your profile is not linked to an account.",
  "pipelines.toastCreatePipelineFailed": "Failed to create pipeline",
  "pipelines.toastPipelineCreated": "Pipeline created",
  "pipelines.defaultPipelineName": "Sales Pipeline",
  "pipelines.stageSeedNewLead": "New Lead",
  "pipelines.stageSeedQualified": "Qualified",
  "pipelines.stageSeedProposalSent": "Proposal Sent",
  "pipelines.stageSeedNegotiation": "Negotiation",

  // Deal card
  "pipelines.noContact": "No contact",
  "pipelines.won": "Won",
  "pipelines.lost": "Lost",

  // Deal form
  "pipelines.toastTitleContactStageRequired":
    "Title, contact, and stage are required",
  "pipelines.editDealTitle": "Edit Deal",
  "pipelines.newDealTitle": "New Deal",
  "pipelines.dealTitleLabel": "Title",
  "pipelines.dealTitlePlaceholder": "Deal title",
  "pipelines.contactLabel": "Contact",
  "pipelines.selectContactOption": "Select a contact",
  "pipelines.linkToConversation": "Link to Conversation",
  "pipelines.valueLabel": "Value",
  "pipelines.currencyLabel": "Currency",
  "pipelines.expectedCloseDateLabel": "Expected Close Date",
  "pipelines.stageLabel": "Stage",
  "pipelines.assignedToLabel": "Assigned To",
  "pipelines.unassignedOption": "Unassigned",
  "pipelines.notesLabel": "Notes",
  "pipelines.notesPlaceholder": "Add notes...",
  "pipelines.markAsWon": "Mark as Won",
  "pipelines.markAsLost": "Mark as Lost",
  "pipelines.reopenDeal": "Reopen deal",
  "pipelines.saveChanges": "Save Changes",
  "pipelines.createDeal": "Create Deal",
  "pipelines.deleteDealConfirm": "Delete this deal?",
  "pipelines.deletingEllipsis": "Deleting...",
  "pipelines.deleteDeal": "Delete Deal",
  "pipelines.toastSaveDealFailed": "Failed to save deal",
  "pipelines.toastNotSignedIn": "Not signed in",
  "pipelines.toastCreateDealFailed": "Failed to create deal",
  "pipelines.dealUpdated": "Deal updated",
  "pipelines.dealCreated": "Deal created",
  "pipelines.toastUpdateStatusFailed": "Failed to update deal status",
  "pipelines.markedAsWonToast": "Marked as won",
  "pipelines.markedAsLostToast": "Marked as lost",
  "pipelines.dealReopenedToast": "Deal reopened",
  "pipelines.toastDeleteDealFailed": "Failed to delete deal",
  "pipelines.dealDeletedToast": "Deal deleted",

  // Pipeline analytics
  "pipelines.totalDeals": "Total Deals",
  "pipelines.totalDealsTooltip":
    "Count of every deal in this pipeline that isn't marked as Lost. Won deals are still included.",
  "pipelines.pipelineValue": "Pipeline Value",
  "pipelines.pipelineValueTooltip":
    "Sum of the dollar values of all deals in this pipeline, excluding deals marked as Lost.",
  "pipelines.avgDealSize": "Avg Deal Size",
  "pipelines.avgDealSizeTooltip":
    "Pipeline Value divided by Total Deals — the average value of a single non-lost deal.",
  "pipelines.weightedValue": "Weighted Value",
  "pipelines.weightedValueTooltip":
    "Expected revenue: each open deal's value × its stage probability. First stage ≈ 10%, stages progress up to 90%, Won = 100%. Lost deals are excluded.",
  "pipelines.wonThisMonth": "Won This Month",
  "pipelines.wonThisMonthTooltip":
    "Deals marked as Won since the first day of the current month.",
  "pipelines.lostThisMonth": "Lost This Month",
  "pipelines.lostThisMonthTooltip":
    "Deals marked as Lost since the first day of the current month.",
  "pipelines.howCalculatedAria": "How {{label}} is calculated",

  // Pipeline board
  "pipelines.dropDealHere": "Drop a deal here",

  // Pipeline settings
  "pipelines.managePipelineTitle": "Manage Pipeline",
  "pipelines.deletePipeline": "Delete Pipeline",
  "pipelines.deletePipelineWarning":
    "This will archive all deals in this pipeline. This cannot be undone.",
  "pipelines.stagesLabel": "Stages",
  "pipelines.pickColorAria": "Pick color {{color}}",
  "pipelines.newStageNamePlaceholder": "New stage name",
  "pipelines.createNewPipeline": "Create a new pipeline",
  "pipelines.toastSavePipelineFailed": "Failed to save pipeline",
  "pipelines.pipelineSavedToast": "Pipeline saved",
  "pipelines.toastAddStageFailed": "Failed to add stage",
  "pipelines.toastStageHasDeals": "Move or delete deals in this stage first",
  "pipelines.toastDeleteStageFailed": "Failed to delete stage",
  "pipelines.toastDeletePipelineFailed": "Failed to delete pipeline",
  "pipelines.pipelineDeletedToast": "Pipeline deleted",
  "pipelines.dragToReorderAria": "Drag to reorder",
  "pipelines.changeColorAria": "Change color",
} as const;
