import { z } from 'zod';
import { MESSAGES } from '../../../../common/utils/messages';
import {
  generateMaxLengthErrorMessage,
  generateRequiredErrorMessage,
  generateTypeErrorMessage
} from '../../helpers';

export const LoginSchema = z.object({
  "email": z
    .string({
      required_error: generateRequiredErrorMessage("email"),
      invalid_type_error: generateTypeErrorMessage("email", "string")
    })
    .trim()
    .email(MESSAGES.INVALID_EMAIL_FORMAT)
    .max(100, { message: generateMaxLengthErrorMessage("password", 100) }),
  "password": z
    .string({
      required_error: generateRequiredErrorMessage("password"),
      invalid_type_error: generateTypeErrorMessage("password", "string")
    })
    .trim()
    .max(100, { message: generateMaxLengthErrorMessage("password_confirmation", 100) }),
})
