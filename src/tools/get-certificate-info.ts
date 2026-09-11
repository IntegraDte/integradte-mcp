import { ApiClient } from "../api-client.js";
import type { Tool } from "./types.js";

export const getCertificateInfo: Tool = {
  definition: {
    name: "get_certificate_info",
    description:
      "Indica si la empresa tiene un certificado digital válido para firmar: cargado, que " +
      "abre con su contraseña y no vencido (la misma validación que aplica la emisión). " +
      "Responde solo has_valid_certificate (true/false); no retorna datos del certificado. " +
      "Usar cuando el cliente pregunta si puede emitir o si su certificado está vigente.",
    inputSchema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  execute: async (api: ApiClient) => {
    return api.get("/api/v1/business/certificate-info");
  },
};
