import express from "express";
import { petCategoryGet } from "../controllers/petCategoryControllers/petCategoryGet";
import { petCategoryPost } from "../controllers/petCategoryControllers/petCategoryPost";
// import { categoryMiddlewarePost } from "../middlewares/categoryMIddlewares/categoryMiddlewaresPost";

export const categoryRouter = express.Router();

categoryRouter.get("/", petCategoryGet);
categoryRouter.post("/", petCategoryPost);
