import { Model } from 'mongoose';

export type TRole = 'user' | 'admin';

export type TUser = {
  email: string;
  password: string;
  role?: TRole;
  isLoggedIn?: boolean;
};

export interface IUserModel extends Model<TUser> {
  isPasswordMatched(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
