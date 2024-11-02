import { MESSAGES } from "../../../common/utils/messages";

export function generateRequiredErrorMessage(fieldName: string): string {
  return MESSAGES.REQUIRED_FIELD_MISSING.replace('[_REPLACE_FIELD_]', fieldName);
}
