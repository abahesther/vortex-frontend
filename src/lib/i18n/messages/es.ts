// Spanish (es) message catalog.
// Keys must stay in sync with en.ts — the test suite enforces this.
export const es = {
  "nav.branding": "Vortex",
  "nav.explore": "Explorar",
  "nav.becomeSolver": "Conviértete en Solver",
  "nav.docs": "Documentación",
  "nav.myIntents": "Mis Intenciones",
  "nav.openMenu": "Abrir menú",
  "nav.closeMenu": "Cerrar menú",

  "wallet.connect.cta": "Conectar Freighter",
  "wallet.connect.connecting": "Conectando...",
  "wallet.connect.retry": "Reintentar conexión",
  "wallet.disconnect.cta": "Desconectar",
  "wallet.disconnect.aria": "Desconectar billetera {address}",
  "wallet.error.freighterUnavailable":
    "La extensión Freighter no está instalada o habilitada.",
  "wallet.error.connectFailed": "No se pudo conectar la billetera.",

  "swap.chainPicker.title": "Seleccionar cadena origen",
  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección Stellar válida (comienza con G).",

  "activityFeed.status.live": "En vivo",
  "activityFeed.status.polling": "Actualizando",
  "activityFeed.error.unavailable": "El feed en vivo no está disponible ahora.",
  "activityFeed.empty": "Aún no hay llenados.",
  "activityFeed.item.route": "{chain} · vía {solver}",

  "swap.from.label": "De",
  "swap.from.amountLabel": "Cantidad a intercambiar",
  "swap.from.amountPlaceholder": "0",
  "swap.from.selectChain": "Cadena origen, actualmente {name}",
  "swap.from.selectToken": "Seleccionar token origen, actualmente {symbol}",
  "swap.from.approxValue": "≈ ${value}",

  "swap.prices.estimated": "est.",
  "swap.prices.asOf": "Precio estimado al {date}. La cotización en vivo actualizará esto cuando esté disponible.",

  "swap.to.label": "A",
  "swap.to.tokenGroup": "Token de destino",
  "swap.to.quoteLoading": "Cargando cotización…",

  "swap.slippage.label": "Tolerancia de deslizamiento",
  "swap.slippage.inputLabel": "Porcentaje de tolerancia de deslizamiento",
  "swap.slippage.minOut": "Mínimo recibido: {amount} {token}",
  "swap.slippage.zeroWarning": "Un deslizamiento del 0% puede hacer que tu swap falle ante cualquier movimiento de precio.",

  "swap.quote.solver": "Mejor solver",
  "swap.quote.fillTime": "Tiempo estimado",
  "swap.quote.fillTimeValue": "~{seconds}s",
  "swap.quote.priceImpact": "Impacto de precio",
  "swap.quote.priceImpactValue": "{percent}%",
  "swap.quote.priceImpactBelowMin": "<0.01",
  "swap.quote.protocolFee": "Comisión de protocolo",
  "swap.quote.protocolFeeValue": "{percent}%",
  "swap.quote.rate": "Tasa",

  "swap.quote.fillTime.tooltip": "Tiempo estimado para que un solver complete tu swap después de enviarlo. El tiempo real puede variar.",
  "swap.quote.priceImpact.tooltip": "Cuánto mueve tu operación el precio efectivo respecto al precio de mercado. Un impacto alto significa que recibirás menos que la tasa de mercado.",
  "swap.quote.protocolFee.tooltip": "Pequeño porcentaje de comisión que cobra el protocolo Vortex en cada swap liquidado. Se deduce del monto de destino.",
  "swap.quote.unavailable": "Cotización en tiempo real no disponible — mostrando tasa estimada.",
  "swap.quote.noSolver": "No hay solvers disponibles para esta ruta en este momento.",
  "swap.quote.highPriceImpactWarning": "Impacto de precio alto por encima de {threshold}% — revisa antes de intercambiar.",
  "swap.quote.staleWarning": "La cotización está desactualizada. Espera a que se recargue antes de enviar.",

  "swap.submit.connecting": "Conectando billetera…",
  "swap.submit.building": "Preparando swap…",
  "swap.submit.awaitingSignature": "Confirmar en Freighter…",
  "swap.submit.submitting": "Enviando…",
  "swap.submit.findingRoute": "Buscando mejor ruta…",
  "swap.submit.success": "Swap enviado ✓ — iniciar un nuevo swap",
  "swap.submit.enterAmount": "Ingresa un monto",
  "swap.submit.cta": "Intercambiar {amount} {srcToken} → {dstToken}",
  "swap.submit.retryCta":
    "Reintentar: Intercambiar {amount} {srcToken} → {dstToken}",

  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección de Stellar válida (empieza con G).",

  "swap.disclaimer": "El swap se liquida directamente en Stellar · Sin tokens envueltos · Protegido por bonos de solver",

  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección Stellar válida (comienza con G).",

  "home.hero.eyebrow": "Stellar Agentic Hackathon 2025",
  "home.hero.titleLine1": "Intercambia desde cualquier cadena",
  "home.hero.titleLine2": "directamente a Stellar.",
  "home.hero.body":
    "Vortex es un protocolo cross-chain basado en intenciones. Expresa lo que quieres y los solvers compiten por cumplirlo — sin puentes, sin tokens envueltos, sin suposiciones de confianza más allá del bono del solver.",
  "home.hero.solverCta": "Conviértete en solver →",

  "home.stats.totalVolume": "Volumen Total",
  "home.stats.intentsFilled": "Intenciones Completadas",
  "home.stats.activeSolvers": "Solvers Activos",
  "home.stats.avgFillTime": "Tiempo Medio de Llenado",

  "home.pipeline.title": "Cómo funciona",
  "home.pipeline.intent.label": "Intención",
  "home.pipeline.intent.sub": "Tú envías",
  "home.pipeline.auction.label": "Subasta",
  "home.pipeline.auction.sub": "Solvers pujan",
  "home.pipeline.relay.label": "Relay",
  "home.pipeline.relay.sub": "El mejor llena",
  "home.pipeline.settle.label": "Liquidar",
  "home.pipeline.settle.sub": "En Stellar",

  "home.feed.title": "Llenados en Vivo",
  "home.feed.viewAll": "Ver todos →",

  "home.chains.title": "Cadenas soportadas",
  "home.chains.stellarDestination": "Stellar (dest.)",

  "notFound.backHome": "← Volver a Vortex",

  // ── Estados vacíos ─────────────────────────────────────────────────────────

  // /explore — filtros sin resultados
  "explore.empty.title": "Ninguna intención coincide con tus filtros",
  "explore.empty.message": "Intenta ajustar o borrar los filtros de estado y cadena para ver más resultados.",
  "explore.empty.clearFilters": "Limpiar filtros",

  // /explore — error al cargar
  "explore.error.title": "No se pudieron cargar las intenciones",
  "explore.error.message": "Algo salió mal al obtener las intenciones. Verifica tu conexión e inténtalo de nuevo.",

  // /my-intents — sin intenciones aún
  "myIntents.empty.title": "Sin swaps aún",
  "myIntents.empty.message": "No has enviado ningún swap desde esta billetera. Haz tu primer swap para empezar.",
  "myIntents.empty.cta": "Hacer mi primer swap →",

  // /my-intents — filtros sin resultados
  "myIntents.filterEmpty.title": "Ninguna intención coincide con tus filtros",
  "myIntents.filterEmpty.message": "Prueba con un filtro de estado o cadena diferente, o limpia todos los filtros para ver todo.",
  "myIntents.filterEmpty.clearFilters": "Limpiar filtros",

  // ActivityFeed — vacío en despliegue nuevo
  "activityFeed.empty.title": "Sin actividad aún",
  "activityFeed.empty.message": "Esperando las primeras intenciones de swap. Envía un swap para comenzar.",
  "activityFeed.empty.cta": "Hacer swap ahora →",

  "activityFeed.status.live": "En vivo",
  "activityFeed.status.polling": "Consultando",
  "activityFeed.error.unavailable": "Feed en vivo no disponible ahora mismo.",
  "activityFeed.item.route": "{chain} · vía {solver}",

  // solve/[address] — historial de llenados vacío
  "solverDetail.fillHistory.empty.title": "Sin llenados aún",
  "solverDetail.fillHistory.empty.message": "Una vez que este solver empiece a aceptar y llenar intenciones, su historial aparecerá aquí.",

  // ── Analytics — KPI cards (#467) ──────────────────────────────────────────
  "analytics.kpi.totalVolume.label": "Volumen Total",
  "analytics.kpi.totalVolume.tooltip": "Volumen USD acumulado de todas las intenciones cargadas.",
  "analytics.kpi.rollingVolume.label": "Últimos 7 días",
  "analytics.kpi.rollingVolume.tooltip": "Volumen USD en los últimos 7 días.",
  "analytics.kpi.avgSize.label": "Intención Prom.",
  "analytics.kpi.avgSize.tooltip": "Valor USD promedio por intención.",
  "analytics.kpi.intentCount.label": "Intenciones",
  "analytics.kpi.intentCount.tooltip": "Número total de intenciones en este conjunto de datos.",
  "analytics.kpi.delta.up": "Sube {percent}% vs período anterior",
  "analytics.kpi.delta.down": "Baja {percent}% vs período anterior",
  "analytics.kpi.delta.neutral": "Sin cambio significativo vs período anterior",
  "analytics.kpi.delta.new": "Nueva actividad (sin datos del período anterior)",
  "analytics.kpi.delta.noData": "Sin datos del período anterior",
  "analytics.dataBanner.capped": "Basado en las últimas {n} intenciones (desde {since}). Los datos pueden ser parciales.",
  "analytics.dataBanner.link": "Conocer las limitaciones de datos",

  // ── Analytics — Export (#466) ──────────────────────────────────────────────
  "analytics.export.button": "Exportar",
  "analytics.export.csv": "Descargar CSV",
  "analytics.export.png": "Descargar PNG",
  "analytics.export.copyLink": "Copiar enlace compartible",
  "analytics.export.linkCopied": "¡Enlace copiado!",
  "analytics.export.pngTheme.light": "Claro",
  "analytics.export.pngTheme.dark": "Oscuro",
  "analytics.export.ariaLabel": "Exportar instantánea de analíticas",
  "analytics.export.csvFilename": "vortex-analytics-{date}.csv",
  "analytics.export.pngFilename": "vortex-analytics-{date}.png",

  // ── Analytics — SLA panel (#465) ─────────────────────────────────────────
  "analytics.sla.title": "Tiempo de Llenado y SLA",
  "analytics.sla.description": "Qué tan rápido y de forma confiable se llenan las intenciones.",
  "analytics.sla.p50.label": "p50 (mediana)",
  "analytics.sla.p90.label": "p90",
  "analytics.sla.p99.label": "p99",
  "analytics.sla.pass": "Cumple",
  "analytics.sla.fail": "Falla",
  "analytics.sla.seconds": "{n}s",
  "analytics.sla.histogram.title": "Distribución de tiempo de llenado",
  "analytics.sla.histogram.xAxis": "Tiempo de llenado (segundos)",
  "analytics.sla.histogram.yAxis": "Cantidad de intenciones",
  "analytics.sla.pendingNote": "{n} intención(es) aún pendiente(s) excluidas de las estadísticas de tiempo de llenado.",
  "analytics.sla.clampNote": "{n} intención(es) con duración negativa se ajustaron a 0 (sesgo de reloj).",
  "analytics.sla.successRate.title": "Tasa de éxito a lo largo del tiempo",
  "analytics.sla.successRate.movingAvg": "Media móvil 7 días",
  "analytics.sla.noData": "Aún no hay intenciones llenadas con datos de tiempo de llenado.",
  "analytics.sla.percentile.definition": "Percentil de rango más cercano: p50 significa que el 50% de los llenados se completó dentro de este tiempo.",

  // ── Analytics — Route flow (#464) ────────────────────────────────────────
  "analytics.routeFlow.title": "Flujo de Rutas",
  "analytics.routeFlow.description": "Volumen desde cadenas origen hacia tokens de destino.",
  "analytics.routeFlow.threshold.label": "Umbral mínimo de volumen",
  "analytics.routeFlow.other": "Otros",
  "analytics.routeFlow.link.tooltip": "{src} → {dst}: {volume} en {count} intención(es) ({share}% del total)",
  "analytics.routeFlow.node.tooltip": "{label}: {volume} total",
  "analytics.routeFlow.explore.link": "Explorar intenciones {chain} → {token}",
  "analytics.routeFlow.tableAlt.title": "Todas las rutas (tabla)",
  "analytics.routeFlow.tableAlt.route": "Ruta",
  "analytics.routeFlow.tableAlt.volume": "Volumen (USD)",
  "analytics.routeFlow.tableAlt.count": "Intenciones",
  "analytics.routeFlow.tableAlt.share": "Participación",
  "analytics.routeFlow.tableAlt.export": "Exportar CSV de rutas",
  "analytics.routeFlow.noData": "No hay datos de rutas disponibles.",
} as const;
