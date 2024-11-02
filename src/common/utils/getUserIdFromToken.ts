import { FastifyRequest } from 'fastify';
import { verifyToken } from '../../infrastructure/security/jwt';
import { MESSAGES } from './messages';
import { constants } from '../../infrastructure/config';

export function getUserIdFromToken(request: FastifyRequest): number {
  const rawToken = (request.headers?.authorization ?? '');
  const payload: any = verifyToken(rawToken.replace('Bearer ', ''));

  if (!payload) {
    throw ({ code: 401, message: MESSAGES.INVALID_USER_TOKEN })
  }

  return payload[constants.jwt.keys.user_id];
}
