import { MESSAGES } from "../../../common/utils/messages";

export function generateMinLengthErrorMessage(fieldName: string, minLength: number): string {
  return MESSAGES.INVALID_MIN_FIELD_LENGTH.replace('[_REPLACE_FIELD_]', fieldName).replace('[_REPLACE_MIN_]', minLength.toString());
}
