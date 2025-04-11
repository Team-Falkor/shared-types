import { APIResponse } from "../../types";

export * from "./search";

export interface PluginProvider {
  id: string;
  setupUrl: string;
  setupJSON: string;
  name: string;
  offical: boolean;
  createdAt: string;
  updatedAt: string;
  approved: boolean;
}

export type PluginProviderResponse = APIResponse<Array<PluginProvider>>;
