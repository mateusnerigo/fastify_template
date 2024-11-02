import { MESSAGES } from "../../../common/utils/messages";
import { User } from "../../../domain/entities/user.entity";
import { IUser } from "../../../domain/interfaces/users.interface";
import userRepository from "../../../infrastructure/repositories/user.repository";
import { hash } from "../../security/argon2";

export async function registerUserUseCase(newUserData: IUser): Promise<void> {
  const {
    email,
    password
  } = newUserData;

  const existingUser = await userRepository.getByEmail(email);
  if (existingUser) {
    throw ({ code: 409, message: MESSAGES.EMAIL_ALREADY_IN_USE })
  }

  const newUser = new User(newUserData);
  await newUser.setPassword((password ?? '').toString(), hash);

  try {
    await userRepository.create(newUser);
  } catch (err) {
    throw ({ code: 500, message: MESSAGES.ERROR_CREATING_USER })
  }
}
