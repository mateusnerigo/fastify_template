import { FastifyReply } from "fastify";
import { MESSAGES } from "../../../common/utils/messages";

export function defaultCatch(
  reply: FastifyReply,
  err: { code?: number, message?: string, }
) {
  return reply
    .code(err?.code ?? 500)
    .send({ message: err?.message ?? MESSAGES.UNKNOWN_SERVER_ERROR });
}
