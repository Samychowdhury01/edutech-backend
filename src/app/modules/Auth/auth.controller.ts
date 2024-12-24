import catchAsync from '../../utils/catchAsync';
import httpStatus from '../../utils/getStatusCode';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const createUser = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const result = await AuthServices.createUserIntoDB(userInfo);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    token: result.accessToken,
    data: result,
  });
});

// login user
const loginUser = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const result = await AuthServices.loginUser(userInfo);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: result.accessToken,
    data: result.restData,
  });
});
// login user
const checkIsEmailExist = catchAsync(async (req, res) => {
  const { email } = req.body;
  const result = await AuthServices.isUserExistIntoDB(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User found successfully',
    data: result,
  });
});
// login user
const logoutUser = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const result = await AuthServices.loginUser(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export const AuthControllers = {
  createUser,
  loginUser,
  checkIsEmailExist,
  logoutUser,
};
