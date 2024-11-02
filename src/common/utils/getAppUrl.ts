import { constants } from "../../infrastructure/config";

export function getAppUrl(): string {
  const { protocol, domain, port, mode } = constants.app;
  return `${protocol}://${domain}:${port} - ${mode} mode!`
}
