---
"@integradte/mcp": patch
---

`get_business_detail` describes the automatic folio refill settings the API returns with the business: `lowStockThresholds` (available-folio threshold per DTE type) and `lowStockRequestQuantities` (how many folios are requested when it is reached). The MCP stays read-only; those settings are changed through `PATCH /api/v1/numerations/low-stock`.
