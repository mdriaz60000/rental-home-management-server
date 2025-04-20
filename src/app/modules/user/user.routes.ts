import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constanst';




const router = express.Router();

router.post("/user",  UserController.createUser) 

router.get("/users", auth(USER_ROLE.admin), UserController.getAllUsers) 

router.get("/user/:id",  UserController.getUserById) 

router.put("/user/:id",  UserController.updateUser) 

router.delete("/user/:id",  UserController.deleteUser) 


export const UserRouter = router;
