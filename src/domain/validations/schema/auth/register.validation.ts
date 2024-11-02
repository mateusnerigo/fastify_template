import { z } from 'zod';
import { MESSAGES } from '../../../../common/utils/messages';
import {
  generateMaxLengthErrorMessage,
  generateMinLengthErrorMessage,
  generateRequiredErrorMessage,
  generateTypeErrorMessage
} from '../../helpers';

export const RegisterSchema = z.object({
  "first_name": z
    .string({
      required_error: generateRequiredErrorMessage("first_name"),
      invalid_type_error: generateTypeErrorMessage("first_name", "string")
    })
    .trim()
    .min(3, { message: generateMinLengthErrorMessage("first_name", 3) })
    .max(50, { message: generateMaxLengthErrorMessage("first_name", 50)}),
  "last_name": z
    .string({
      required_error: generateRequiredErrorMessage("last_name"),
      invalid_type_error: generateTypeErrorMessage("last_name", "string")
    })
    .trim()
    .min(1, { message: generateMinLengthErrorMessage("last_name", 1) })
    .max(50, { message: generateMaxLengthErrorMessage("last_name", 50)}),
  "email": z
    .string({
      required_error: generateRequiredErrorMessage("email"),
      invalid_type_error: generateTypeErrorMessage("email", "string")
    })
    .trim()
    .email(MESSAGES.INVALID_EMAIL_FORMAT)
    .max(100, {message: generateMaxLengthErrorMessage("email", 100)
  }),
  "password": z
    .string({
      required_error: generateRequiredErrorMessage("password"),
      invalid_type_error: generateTypeErrorMessage("password", "string")
    })
    .trim()
    .min(8, { message: generateMinLengthErrorMessage("password", 8) })
    .max(100, { message: generateMaxLengthErrorMessage("password", 100)}),
  "password_confirmation": z
    .string({
      required_error: generateRequiredErrorMessage("password_confirmation"),
      invalid_type_error: generateTypeErrorMessage("password_confirmation", "string")
    })
    .trim()
    .min(8, { message: generateMinLengthErrorMessage("password_confirmation", 8) })
    .max(100, { message: generateMaxLengthErrorMessage("password_confirmation", 100)})
}).refine(
  inputData => (inputData.password === inputData.password_confirmation),
  { message: MESSAGES.PASSWORDS_DONT_MATCH }
)
