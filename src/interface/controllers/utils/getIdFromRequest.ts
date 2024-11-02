import { FastifyRequest } from "fastify";
import { httpStatusCode } from "../../../infrastructure/config";
import { MESSAGES } from "../../../common/utils/messages";

export function getIdFromRequest(request: FastifyRequest) {
  const { id } = request.params as { id: number };
  if (!id) {
    throw ({ code: httpStatusCode.BAD_REQUEST, message: MESSAGES.NO_REGISTER_FOUND });
  }

  return id;
}
