import { MESSAGES } from "../../../common/utils/messages";

export function generateMaxLengthErrorMessage(fieldName: string, maxLength: number): string {
  return MESSAGES.INVALID_MAX_FIELD_LENGTH.replace('[_REPLACE_FIELD_]', fieldName).replace('[_REPLACE_MAX_]', maxLength.toString());
}
