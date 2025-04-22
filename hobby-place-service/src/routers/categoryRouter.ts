import express from "express"
import { petCategoryGet } from "../controllers/petCategoryControllers/petCategoryGet"
import { petCategoryPost } from "../controllers/petCategoryControllers/petCategoryPost"


export const categoryRouter = express.Router()

categoryRouter.get("/", petCategoryGet)
categoryRouter.post("/", petCategoryPost)