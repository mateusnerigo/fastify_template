import { z } from "zod";

export function verifyFieldsBySchema(fields: any, schema: z.ZodSchema) {
  try {
    const parsed = schema.parse(fields);
    return parsed;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw ({ code: 400, message: error.errors.map(err => err.message) });
    }
  }
}
