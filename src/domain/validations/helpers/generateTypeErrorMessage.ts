import { MESSAGES } from "../../../common/utils/messages";

export function generateTypeErrorMessage(fieldName: string, correctType: string): string {
  return MESSAGES.INVALID_FIELD_TYPE.replace('[_REPLACE_FIELD_]', fieldName).replace('[_REPLACE_TYPE_]', correctType);
}
