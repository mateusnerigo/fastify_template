export function safeJsonParse(teste: unknown): any {
  if (typeof teste === 'string') {
    try {
      return JSON.parse(teste);
    } catch (error) {
      return {};
    }
  }
}
