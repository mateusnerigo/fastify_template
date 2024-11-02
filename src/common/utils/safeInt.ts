export function safeInt(valueToSafe: any, nullsafeValue: number = 0): number {
  try {
    return parseInt(valueToSafe ?? nullsafeValue);
  } catch (err) {
    return nullsafeValue;
  }
}
