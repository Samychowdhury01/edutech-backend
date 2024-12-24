/* eslint-disable @typescript-eslint/no-unused-vars */

import AppError from '../../errors/AppError';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import config from '../../config';
import httpStatus from '../../utils/getStatusCode';
import { generateToken } from '../../utils/generateToken';

const createUserIntoDB = async (payload: TUser) => {
  const isUserExist = await User.findOne({ email: payload?.email });

  if (isUserExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'User already exist with the same email!',
    );
  }
  const result = await User.create(payload);

  const jwtPayload = {
    userId: result._id,
    email: result.email,
    role: result?.role,
  };
  const accessToken = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_expires_in as string,
  );

  const { password, ...restData } = result.toObject();
  return {
    accessToken,
    restData,
  };
};

// login user
const loginUser = async (payload: TLogin) => {
  const user = await User.findOne({
    email: payload?.email,
  });
  if (!user) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }

  const isValidPassword = await User.isPasswordMatched(
    payload.password,
    user?.password,
  );
  if (!isValidPassword) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid password');
  }
  // update the isLoggedIn status to true
  await User.findOneAndUpdate(
    { email: user.email },
    { isLoggedIn: true },
    { new: true },
  );

  const jwtPayload = {
    userId: user._id,
    email: user.email,
    role: user?.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_expires_in as string,
  );

  const { password, ...restData } = user.toObject();
  return {
    accessToken,
    restData,
  };
};

// check user exist or not
const isUserExistIntoDB = async (email: string) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'user not found');
    }
  }
  return true;
};

// logout user
const logoutUser = async (userId: string) => {
  // find the user by userId and update the isLoggedIn status to false
  const user = await User.findByIdAndUpdate(userId, { isLoggedIn: false });
  return user;
};
export const AuthServices = {
  createUserIntoDB,
  loginUser,
  isUserExistIntoDB,
  logoutUser,
};
