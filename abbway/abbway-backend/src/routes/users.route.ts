import { Router } from "express";
import userController from "../controller/user.controller";

const userRouter = Router();

userRouter.post("/signup", userController.newUser);
userRouter.post("/signin", userController.signin);
userRouter.post("/verify", userController.verify);

export default userRouter;
