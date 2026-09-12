# @integradte/mcp

## 1.0.5

### Patch Changes

- 02b597a: `get_business_detail` describes the automatic folio refill settings the API returns with the business: `lowStockThresholds` (available-folio threshold per DTE type) and `lowStockRequestQuantities` (how many folios are requested when it is reached). The MCP stays read-only; those settings are changed through `PATCH /api/v1/numerations/low-stock`.

## 1.0.4

### Patch Changes

- 38a3f80: Sync tools with the current IntegraDTE public API.

  - `list_purchases` now calls `GET /api/v1/purchase-acknowledgments`; `/api/v1/purchases` does not exist in the public API and returned 404.
  - `get_dte_balance` describes the current balance shape (`billing_mode`, plan quota per bucket, on-demand usage) instead of prepaid packs.
  - `list_businesses` and `get_business_detail` no longer claim to report the certificate itself; the API returns only its metadata.
  - README lists all 11 registered tools.

## 1.0.1

### Patch Changes

- 702b17b: Align package branding to `@integradte/mcp` across docs and MCP server metadata.

  - Update README examples and references to `integradte-mcp` and `@integradte/mcp`
  - Clarify npm token requirements for scoped publish with 2FA enforcement
  - Update MCP server name metadata to `@integradte/mcp`
