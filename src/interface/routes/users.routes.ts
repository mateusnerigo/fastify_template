import { FastifyInstance } from "fastify";
import { IUserResponse } from "../../domain/interfaces/users.interface";
import { UsersController } from "../controllers/users.controller";
import { profileSerializer } from "../serializers/user.serializer";

export async function usersRoutes(fastify: FastifyInstance) {
  const usersController = new UsersController();

  fastify.get<{ Body: IUserResponse }>(
    '/profile',
    { schema: profileSerializer },
    usersController.profile,
  );
}
