import { ApiClient } from "../api-client.js";
import type { Tool } from "./types.js";

export const getDteBalance: Tool = {
  definition: {
    name: "get_dte_balance",
    description:
      "Obtiene el estado de facturación del cliente en el ciclo vigente. " +
      "Retorna billing_mode (plan u on_demand); en modo plan, el plan contratado y el cupo " +
      "del mes por bucket (documentos y consultas: límite, usados, restantes; 0/-1 = ilimitado); " +
      "en modo on_demand, el consumo acumulado del mes (cantidad de cargos y costo). " +
      "Usar cuando el cliente pregunta cuántos documentos le quedan en su plan o cuánto lleva consumido.",
    inputSchema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  execute: async (api: ApiClient) => {
    return api.get("/api/v1/billing/balance");
  },
};
