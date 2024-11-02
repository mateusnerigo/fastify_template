export interface IUser {
  id?: BigInt | null,
  first_name?: string | null,
  last_name?: string | null,
  email: string,
  password?: string | null,
  password_reset_hash?: string | null,
  created_at?: Date | null,
  updated_at?: Date | null,
  deleted_at?: Date | null,
}

export interface IUserResponse extends Omit<IUser, 'password' | 'password_reset_hash'> { }

export interface IUserLogin {
  email: string,
  password: string,
}
