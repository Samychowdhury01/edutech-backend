import { Router } from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../Auth/auth.constant';

const router = Router();

router.get(
  '/user-activities',
  // auth(USER_ROLE.admin),
  UserControllers.getUserActivities,
);

export const UserRoutes = router