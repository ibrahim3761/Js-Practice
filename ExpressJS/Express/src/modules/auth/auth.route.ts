import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router()

// Login User API
router.post("/login",authController.loginUser)


export const authRoute = router