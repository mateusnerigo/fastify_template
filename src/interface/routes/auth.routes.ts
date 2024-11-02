import { FastifyInstance } from "fastify";
import { AuthController} from "../controllers/auth.controller";
import { IUserLogin } from "../../domain/interfaces/users.interface";

export async function authRoutes(fastify: FastifyInstance) {
  const authController = new AuthController();

  fastify.post<{ Body: { message: string } }>('/register', authController.register);
  fastify.post<{ Body: IUserLogin }>('/login', authController.login);
}
