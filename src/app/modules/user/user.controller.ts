import catchAsync from '../../utils/catchAsync';
import httpStatus from '../../utils/getStatusCode';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';

// login user
const getUserActivities = catchAsync(async (req, res) => {
  const result = await UserService.getAllUserActivitiesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export const UserControllers = {
    getUserActivities,
};
