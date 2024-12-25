import { Router } from "express";
import { AuthControllers } from "./auth.controller";

const router = Router();

router.post('/sign-up', AuthControllers.createUser)
router.post('/check-email', AuthControllers.checkIsEmailExist)
router.post('/login', AuthControllers.loginUser)
router.put('/logout', AuthControllers.logoutUser)

export const AuthRoutes = router
