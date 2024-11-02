import { FastifyReply, FastifyRequest } from "fastify";
import { constants } from "../../../infrastructure/config";
import { isAuthenticated } from "../../../common/middleware/auth.middleware";
import { MESSAGES } from "../../../common/utils/messages";

export function preHandler(request: FastifyRequest, reply: FastifyReply, done: any) {
  reply.log.info({
    reqId: request.id,
    method: request.method,
    url: request.routeOptions.url,
    parameters: request.params,
    headers: request.headers,
    body: request.body,
  }, 'request received');

  if (constants.app.no_auth_routes.includes(request.routeOptions.url ?? '')) {
    done();
    return reply;
  }

  if (!isAuthenticated(request)) {
    throw ({ code: 401, message: MESSAGES.INVALID_TOKEN });
  }

  done();
}
