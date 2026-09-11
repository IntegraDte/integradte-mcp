---
"@integradte/mcp": patch
---

Sync tools with the current IntegraDTE public API.

- `list_purchases` now calls `GET /api/v1/purchase-acknowledgments`; `/api/v1/purchases` does not exist in the public API and returned 404.
- `get_dte_balance` describes the current balance shape (`billing_mode`, plan quota per bucket, on-demand usage) instead of prepaid packs.
- `list_businesses` and `get_business_detail` no longer claim to report the certificate itself; the API returns only its metadata.
- README lists all 11 registered tools.
