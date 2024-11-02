import { isValidEmail } from "../../common/utils";
import { MESSAGES } from "../../common/utils/messages";
import { IBaseEntity } from "../interfaces/base.interface";
import { IUser } from "../interfaces/users.interface";
import { UserId } from "../types";

class User implements IBaseEntity {
  id: UserId;
  first_name?: string | null;
  last_name?: string | null;
  email: string;
  password?: string | null;
  password_reset_hash?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;

  constructor({
    id,
    first_name,
    last_name,
    email,
    password,
    password_reset_hash,
    created_at,
    updated_at,
    deleted_at,
  }: IUser) {
    this.id = id || null;
    this.first_name = first_name || null;
    this.last_name = last_name || null;
    this.email = email;
    this.password = password || null;
    this.password_reset_hash = password_reset_hash || null;
    this.created_at = created_at || null;
    this.updated_at = updated_at || null;
    this.deleted_at = deleted_at || null;

    this.validate();
  }

  validate() {
    if (!isValidEmail(this.email)) {
      throw new Error(MESSAGES.INVALID_EMAIL_FORMAT);
    }
  }

  async setPassword(password: string, passwordHasher: Function) {
    this.password = await passwordHasher(password);
  }
}

export { User }
