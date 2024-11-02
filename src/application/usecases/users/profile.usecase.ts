import { MESSAGES } from "../../../common/utils/messages";
import { IUserResponse } from "../../../domain/interfaces/users.interface";
import UserRepository from "../../../infrastructure/repositories/user.repository";


export async function getProfileByIdUseCase(id: number): Promise<IUserResponse> {
  const user: IUserResponse | null = await UserRepository.getById(id);

  if (!user) {
    throw ({ code: 401, message: MESSAGES.USER_NOT_FOUND })
  }

  return user;
}
