import catchAsync from '../../utils/catchAsync';
import httpStatus from '../../utils/getStatusCode';
import sendResponse from '../../utils/sendResponse';
import { CourseServices } from './course.service';

const addCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.addCourseIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course added successfully',
    data: result,
  });
});

// get all the courses
const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All courses fetched successfully',
    data: result,
  });
});


export const CourseControllers = {
  addCourse,
  getAllCourses
};
