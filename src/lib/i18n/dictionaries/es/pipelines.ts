import type { pipelines as pipelinesEn } from "../en/pipelines";

export const pipelines: Record<keyof typeof pipelinesEn, string> = {
  // Page header / pipeline selector
  "pipelines.selectPipeline": "Seleccionar pipeline",
  "pipelines.noPipelinesYet": "Todavía no hay pipelines",
  "pipelines.managePipelines": "Administrar pipelines",
  "pipelines.addPipeline": "Agregar pipeline",
  "pipelines.addDeal": "Agregar negocio",
  "pipelines.createPipelineHint":
    "Creá un pipeline para empezar a seguir tus negocios",
  "pipelines.createPipeline": "Crear pipeline",
  "pipelines.newPipelineTitle": "Nuevo pipeline",
  "pipelines.pipelineNameLabel": "Nombre del pipeline",
  "pipelines.pipelineNamePlaceholder": "Ej: Ventas Corporativas",
  "pipelines.defaultStagesHint":
    "Las etapas predeterminadas (Nuevo Lead → Ganado) se crearán automáticamente.",
  "pipelines.creatingEllipsis": "Creando...",
  "pipelines.toastMoveDealFailed": "No se pudo mover el negocio",
  "pipelines.toastNoAccountLinked": "Tu perfil no está vinculado a ninguna cuenta.",
  "pipelines.toastCreatePipelineFailed": "No se pudo crear el pipeline",
  "pipelines.toastPipelineCreated": "Pipeline creado",
  "pipelines.defaultPipelineName": "Pipeline de Ventas",
  "pipelines.stageSeedNewLead": "Nuevo Lead",
  "pipelines.stageSeedQualified": "Calificado",
  "pipelines.stageSeedProposalSent": "Propuesta Enviada",
  "pipelines.stageSeedNegotiation": "Negociación",

  // Deal card
  "pipelines.noContact": "Sin contacto",
  "pipelines.won": "Ganado",
  "pipelines.lost": "Perdido",

  // Deal form
  "pipelines.toastTitleContactStageRequired":
    "El título, el contacto y la etapa son obligatorios",
  "pipelines.editDealTitle": "Editar negocio",
  "pipelines.newDealTitle": "Nuevo negocio",
  "pipelines.dealTitleLabel": "Título",
  "pipelines.dealTitlePlaceholder": "Título del negocio",
  "pipelines.contactLabel": "Contacto",
  "pipelines.selectContactOption": "Seleccioná un contacto",
  "pipelines.linkToConversation": "Vincular a la conversación",
  "pipelines.valueLabel": "Valor",
  "pipelines.currencyLabel": "Moneda",
  "pipelines.expectedCloseDateLabel": "Fecha de cierre estimada",
  "pipelines.stageLabel": "Etapa",
  "pipelines.assignedToLabel": "Asignado a",
  "pipelines.unassignedOption": "Sin asignar",
  "pipelines.notesLabel": "Notas",
  "pipelines.notesPlaceholder": "Agregar notas...",
  "pipelines.markAsWon": "Marcar como ganado",
  "pipelines.markAsLost": "Marcar como perdido",
  "pipelines.reopenDeal": "Reabrir negocio",
  "pipelines.saveChanges": "Guardar cambios",
  "pipelines.createDeal": "Crear negocio",
  "pipelines.deleteDealConfirm": "¿Eliminar este negocio?",
  "pipelines.deletingEllipsis": "Eliminando...",
  "pipelines.deleteDeal": "Eliminar negocio",
  "pipelines.toastSaveDealFailed": "No se pudo guardar el negocio",
  "pipelines.toastNotSignedIn": "No iniciaste sesión",
  "pipelines.toastCreateDealFailed": "No se pudo crear el negocio",
  "pipelines.dealUpdated": "Negocio actualizado",
  "pipelines.dealCreated": "Negocio creado",
  "pipelines.toastUpdateStatusFailed": "No se pudo actualizar el estado del negocio",
  "pipelines.markedAsWonToast": "Marcado como ganado",
  "pipelines.markedAsLostToast": "Marcado como perdido",
  "pipelines.dealReopenedToast": "Negocio reabierto",
  "pipelines.toastDeleteDealFailed": "No se pudo eliminar el negocio",
  "pipelines.dealDeletedToast": "Negocio eliminado",

  // Pipeline analytics
  "pipelines.totalDeals": "Negocios totales",
  "pipelines.totalDealsTooltip":
    "Cantidad de todos los negocios de este pipeline que no están marcados como perdidos. Los negocios ganados se siguen incluyendo.",
  "pipelines.pipelineValue": "Valor del pipeline",
  "pipelines.pipelineValueTooltip":
    "Suma de los valores de todos los negocios de este pipeline, excluyendo los marcados como perdidos.",
  "pipelines.avgDealSize": "Tamaño promedio del negocio",
  "pipelines.avgDealSizeTooltip":
    "Valor del pipeline dividido por Negocios totales: el valor promedio de un negocio no perdido.",
  "pipelines.weightedValue": "Valor ponderado",
  "pipelines.weightedValueTooltip":
    "Ingreso esperado: el valor de cada negocio abierto multiplicado por la probabilidad de su etapa. La primera etapa ≈ 10%, las etapas avanzan hasta 90%, Ganado = 100%. Los negocios perdidos quedan excluidos.",
  "pipelines.wonThisMonth": "Ganados este mes",
  "pipelines.wonThisMonthTooltip":
    "Negocios marcados como ganados desde el primer día del mes actual.",
  "pipelines.lostThisMonth": "Perdidos este mes",
  "pipelines.lostThisMonthTooltip":
    "Negocios marcados como perdidos desde el primer día del mes actual.",
  "pipelines.howCalculatedAria": "Cómo se calcula {{label}}",

  // Pipeline board
  "pipelines.dropDealHere": "Soltá un negocio acá",

  // Pipeline settings
  "pipelines.managePipelineTitle": "Administrar pipeline",
  "pipelines.deletePipeline": "Eliminar pipeline",
  "pipelines.deletePipelineWarning":
    "Esto archivará todos los negocios de este pipeline. Esta acción no se puede deshacer.",
  "pipelines.stagesLabel": "Etapas",
  "pipelines.pickColorAria": "Elegir color {{color}}",
  "pipelines.newStageNamePlaceholder": "Nombre de la nueva etapa",
  "pipelines.createNewPipeline": "Crear un nuevo pipeline",
  "pipelines.toastSavePipelineFailed": "No se pudo guardar el pipeline",
  "pipelines.pipelineSavedToast": "Pipeline guardado",
  "pipelines.toastAddStageFailed": "No se pudo agregar la etapa",
  "pipelines.toastStageHasDeals": "Primero mové o eliminá los negocios de esta etapa",
  "pipelines.toastDeleteStageFailed": "No se pudo eliminar la etapa",
  "pipelines.toastDeletePipelineFailed": "No se pudo eliminar el pipeline",
  "pipelines.pipelineDeletedToast": "Pipeline eliminado",
  "pipelines.dragToReorderAria": "Arrastrar para reordenar",
  "pipelines.changeColorAria": "Cambiar color",
  "pipelines.createPipelineGateReason": "crear pipelines",
  "pipelines.createDealGateReason": "crear negocios",
};
