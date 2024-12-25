import { TCourse } from './course.interface';
import { Course } from './course.model';

const addCourseIntoDB = async (course: TCourse) => {
  const result = await Course.create(course);
  return result;
};

const getAllCoursesFromDB = async () => {
  const result = await Course.find();
  return result;
};

export const CourseServices = {
  addCourseIntoDB,
  getAllCoursesFromDB,
};
