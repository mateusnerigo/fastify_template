import { FastifyReply, FastifyRequest } from "fastify";
import { MESSAGES } from "../../common/utils/messages";
import { verifyFieldsBySchema } from "../../domain/validations/helpers";
import { LoginSchema, RegisterSchema } from "../../domain/validations/schema/auth";
import { loginUserUseCase, registerUserUseCase } from "../../application/usecases/auth";
import { defaultCatch } from "./utils";
import { ILoginResponse } from "../../domain/interfaces/login.interface";

class AuthController {
  async register(request: FastifyRequest, reply: FastifyReply): Promise<{ message: string }> {
    try {
      const registerData = verifyFieldsBySchema(request.body ?? {}, RegisterSchema);
      await registerUserUseCase(registerData);

      return reply.code(201).send({ message: MESSAGES.USER_CREATED });
    } catch(err: any) {
      return defaultCatch(reply, err);
    }
  }

  async login(request: FastifyRequest, reply: FastifyReply): Promise<ILoginResponse> {
    try {
      const loginData = verifyFieldsBySchema(request.body ?? {}, LoginSchema);
      const token = await loginUserUseCase(loginData);

      return reply.code(200).send({
        message: MESSAGES.LOGGED_IN_SUCCESSFULLY,
        token
      });
    } catch (err: any) {
      return defaultCatch(reply, err);
    }
  }
}

export { AuthController }
