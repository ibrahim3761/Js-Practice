import { Router } from "express";
import { profileController } from "./profile.controller";

const router = Router()

// Profile POST API
router.post("/",profileController.createProfile) 

export const profileRoute = router