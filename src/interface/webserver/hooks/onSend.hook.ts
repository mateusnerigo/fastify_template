import { FastifyReply, FastifyRequest } from "fastify";

export function onSend(request: FastifyRequest, reply: FastifyReply, payload: any, done: any) {
  let body;
  try {
    body = JSON.parse(payload);
  } catch (err) {
    body = {};
  }

  reply.log.info({
    reqId: request.id,
    headers: (typeof reply.getHeaders === 'function') ? reply.getHeaders : {},
    body,
  }, 'Response');
  done();
}
