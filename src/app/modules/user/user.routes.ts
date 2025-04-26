import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constanst';




const router = express.Router();

router.post("/user",  UserController.createUser) 

router.get("/users",  UserController.getAllUsers) 

router.get("/user/:id",  UserController.getUserById) 

router.put("/user/:id", auth("user", "admin"),  UserController.updateUser) 

router.delete("/user/:id", auth("user", "admin"),  UserController.deleteUser) 


export const UserRouter = router;
