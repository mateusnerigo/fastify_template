export function safeString(valueToSafe: any, nullSafeValue: string = ''): string {
  try {
    return (valueToSafe ?? nullSafeValue).toString();
  } catch (err) {
    return nullSafeValue;
  }
}
