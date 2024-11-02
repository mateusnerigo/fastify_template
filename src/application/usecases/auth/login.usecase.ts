import { MESSAGES } from "../../../common/utils/messages";
import { IUser, IUserLogin } from "../../../domain/interfaces/users.interface";
import { constants } from "../../../infrastructure/config";
import UserRepository from "../../../infrastructure/repositories/user.repository";
import { sign } from "../../../infrastructure/security/jwt";
import { verify } from "../../security/argon2";

export async function loginUserUseCase(loginData: IUserLogin): Promise<string> {
  const { email, password } = loginData;

  const existingUser: IUser | null = await UserRepository.getByEmail(email);

  const isValidCredentials = async () => {
    return existingUser && await verify(existingUser.password, password)
  }

  if (!isValidCredentials || existingUser?.deleted_at) {
    throw ({ code: 409, message: MESSAGES.INVALID_CREDENTIALS })
  }

  const token = sign({
    [constants.jwt.keys.user_id]: existingUser?.id,
    [constants.jwt.keys.user_email]: existingUser?.email,
    [constants.jwt.keys.expiration]: constants.jwt.expiration,
  });

  if (!token) {
    throw ({ code: 400, message: MESSAGES.ERROR_GENERATING_TOKEN })
  }

  return `Bearer ${token}`;
}
