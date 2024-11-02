import { IUser, IUserResponse } from "../../domain/interfaces/users.interface"
import { prisma } from "../database/prisma-client"

class UserRepository {
  async create(data: IUser): Promise<IUser> {
    const result = await prisma.user.create({
      data: {
        email: data.email,
        password: data.password as string,
        first_name: data?.first_name ?? '',
        last_name: data?.last_name ?? '',
      }
    });

    return result;
  }

  async getById(id: number): Promise<IUser | IUserResponse | null> {
    const result = await prisma.user.findFirst({
      where: { id }
    });
    return result || null;
  }

  async getByEmail(email: string): Promise<IUser | IUserResponse | null> {
    const result = await prisma.user.findFirst({
      where: { email }
    });
    return result || null;
  }
}

export default new UserRepository();
