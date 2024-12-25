import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./auth.constant";

const router = Router();

router.post('/sign-up', AuthControllers.createUser)
router.post('/check-email', AuthControllers.checkIsEmailExist)
router.post('/login', AuthControllers.loginUser)
router.put('/logout', auth(USER_ROLE.admin, USER_ROLE.user),AuthControllers.logoutUser)

export const AuthRoutes = router
