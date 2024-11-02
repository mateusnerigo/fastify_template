import { FastifyRequest } from "fastify";
import { verifyToken } from "../../infrastructure/security/jwt";

export function isAuthenticated(request: FastifyRequest) {
  const rawToken = (request.headers?.authorization ?? '');
  return verifyToken(rawToken.replace('Bearer ', ''));
}
