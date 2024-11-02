import { FastifyReply, FastifyRequest } from "fastify";
import { IUserResponse } from "../../domain/interfaces/users.interface";
import { getUserIdFromToken } from "../../common/utils/getUserIdFromToken";
import { defaultCatch } from "./utils";
import { getProfileByIdUseCase } from "../../application/usecases/users/profile.usecase";

class UsersController {
  async profile(request: FastifyRequest, reply: FastifyReply): Promise<IUserResponse> {
    try {
      const userId = getUserIdFromToken(request);
      const userData: IUserResponse = await getProfileByIdUseCase(userId);

      return reply.code(200).send(userData);
    } catch (err: any) {
      return defaultCatch(reply, err);
    }
  }
}

export {
  UsersController
}
