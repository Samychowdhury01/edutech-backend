import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { CourseRoutes } from '../modules/course/course.routes';


const router = Router();

const moduleRoutes = [
  
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
