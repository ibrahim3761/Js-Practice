import { Router } from "express";
import { usersController } from "./users.controller";

const router = Router()

// User GET API
router.get("/", usersController.getUsers);

// User GET API by ID
router.get("/:id",usersController.getUserById);

// User Create POST API
router.post("/", usersController.createUser);

// User Update PUT API
router.put('/:id', usersController.updateUser);


//User DELETE API
router.delete('/:id', usersController.deleteUser)




export const userRouter = router