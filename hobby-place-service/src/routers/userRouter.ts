import express from "express";
import { CreateUser } from "../controllers/authControllers/createUser";
import { LogIn } from "../controllers/authControllers/LogIn";
import { getUser } from "../controllers/authControllers/getUser";
import { getCurrentUser } from "../controllers/authControllers/getCurrentUser";
import { userExist } from "../middlewares/userMiddleware/userExist";
import { updateUser } from "../controllers/authControllers/updateUser";
import { googleLogin } from "../controllers/authControllers/googleLogin";
import { likePost } from "../controllers/authControllers/likePost/likePost";
import { unLikePost } from "../controllers/authControllers/likePost/unLikePost";

export const userRouter = express.Router();

userRouter.post("/", CreateUser);
userRouter.post("/login", LogIn);
userRouter.get("/allUser", getUser);
userRouter.get("/get", userExist, getCurrentUser);
userRouter.put("/", updateUser);
userRouter.post("/google-login", googleLogin);
userRouter.get("/like/:userId/:hospitalId", likePost);
userRouter.get("/unlike/:userId/:hospitalId", unLikePost);
