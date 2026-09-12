# @integradte/mcp

MCP Server para consultar datos de facturación electrónica chilena desde la API IntegraDTE.

Permite a modelos de lenguaje (Claude, etc.) consultar documentos tributarios, folios, estadísticas y más mediante el protocolo MCP (Model Context Protocol).

## Tools disponibles

| Tool | Descripción |
|------|-------------|
| `get_user_info` | Info del usuario autenticado (nombre, email, estado) |
| `get_certificate_info` | Si la empresa tiene certificado digital válido para firmar (`has_valid_certificate`) |
| `list_businesses` | Empresas del usuario (sin el certificado ni su contraseña) |
| `get_business_detail` | Detalle de una empresa por ID, incluidos los umbrales de recarga automática de folios (sin el certificado ni su contraseña) |
| `list_documents` | Listar DTEs con filtros (tipo, estado, fechas, paginación) |
| `get_document` | Detalle de un documento por ID |
| `get_document_stats` | Estadísticas: totales emitidos, montos, por tipo DTE |
| `get_numeration_summary` | Resumen de folios disponibles por tipo |
| `get_last_folio` | Último folio usado para un tipo de DTE |
| `get_dte_balance` | Modo de facturación y cupo del plan (o consumo on-demand) del mes |
| `list_purchases` | Documentos de compra recibidos y su acuse (`/purchase-acknowledgments`) |

## Instalación

```bash
npm install
npm run build
```

## Variables de entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `API_BASE_URL` | URL de la API IntegraDTE | `http://localhost:5058` |
| `API_KEY` | API Key de autenticación (requerida) | — |

## Uso con Claude Desktop

Agregar a `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "integradte": {
      "command": "npx",
      "args": ["-y", "@integradte/mcp"],
      "env": {
        "API_BASE_URL": "https://api.integradte.cl",
        "API_KEY": "tu_api_key"
      }
    }
  }
}
```

## Uso con npx (una vez publicado)

```json
{
  "mcpServers": {
    "integradte": {
      "command": "npx",
      "args": ["-y", "@integradte/mcp"],
      "env": {
        "API_BASE_URL": "https://api.integradte.cl",
        "API_KEY": "tu_api_key"
      }
    }
  }
}
```

## Tipos de DTE soportados

| Código | Tipo |
|--------|------|
| 33 | Factura Electrónica |
| 34 | Factura Exenta |
| 39 | Boleta Electrónica |
| 41 | Boleta Exenta |
| 46 | Factura de Compra |
| 52 | Guía de Despacho |
| 56 | Nota de Débito |
| 61 | Nota de Crédito |

## Desarrollo

```bash
npm install
npm run dev    # Watch mode
npm run build  # Build
npm start      # Run
```

## Publicación a npm con versiones automáticas

Este repo usa [Changesets](https://github.com/changesets/changesets) + GitHub Actions.

### Configuración inicial

1. Crear el secret `NPM_TOKEN` en GitHub (`Settings > Secrets and variables > Actions`).
2. El token debe tener permisos para publicar en el scope `@integradte`.
3. Si la organización exige 2FA para publish, usa un token con `bypass 2fa`.

### Flujo de versiones

1. Para cada cambio que quieras versionar, crea un changeset:
   ```bash
   pnpm changeset
   ```
2. Haz commit del archivo en `.changeset/*.md` junto a tu cambio.
3. Al hacer merge a `main`, el workflow `Release` crea/actualiza un PR de release con el nuevo versionado.
4. Cuando ese PR se mergea, el mismo workflow publica automáticamente a npm.
