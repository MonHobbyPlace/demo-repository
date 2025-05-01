import express from "express";

import { CreateUser } from "../controllers/authControllers/createUser";
import { LogIn } from "../controllers/authControllers/LogIn";
import { getUser } from "../controllers/authControllers/getUser";
import { getCurrentUser } from "../controllers/authControllers/getCurrentUser";
import { userExist } from "../middlewares/userMiddleware/userExist";
import { updateUser } from "../controllers/authControllers/updateUser";

export const userRouter = express.Router();

userRouter.post("/", CreateUser);
userRouter.post("/login", LogIn);
userRouter.get("/allUser", getUser);
userRouter.get("/get", userExist, getCurrentUser);
userRouter.put("/", updateUser);
