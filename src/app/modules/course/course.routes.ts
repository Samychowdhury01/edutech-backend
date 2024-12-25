import { Router } from 'express';
import { CourseControllers } from './course.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../Auth/auth.constant';
import validateRequest from '../../middlewares/validateRequest';
import { courseSchemas } from './course.validation';

const router = Router();

// create a course into the system
router.post(
  '/create',
  // auth(USER_ROLE.admin),
  validateRequest(courseSchemas.createCourseSchema),
  CourseControllers.addCourse,
);

// get all courses
router.get('/', CourseControllers.getAllCourses);


export const CourseRoutes = router