import { FastifyReply, FastifyRequest } from "fastify";

export interface IAuthController {
  register(request: FastifyRequest, reply: FastifyReply): Promise<{ message: string }>;
}
