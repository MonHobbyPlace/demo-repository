import express from "express";

import { CreateUser } from "../controllers/authControllers/createUser";
import { LogIn } from "../controllers/authControllers/LogIn";
import { getUser } from "../controllers/authControllers/getUser";

export const userRouter = express.Router();

userRouter.post("/", CreateUser);
userRouter.post("/login", LogIn);
userRouter.get("/", getUser);
