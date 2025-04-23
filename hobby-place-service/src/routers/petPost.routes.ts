import express from "express";
import { createPetPost } from "../controllers/petPostControllers/createPetPost.controller";
import { putPetPost } from "../controllers/petPostControllers/putPetPost.controller";
import { deletePetPost } from "../controllers/petPostControllers/deletePetPost.controller";
import { getPetPost } from "../controllers/petPostControllers/getPetPost.controller";
import { getPetPostCategoryId } from "../controllers/petPostControllers/getPetPostCategoryId.controller";
import { getPetPostMid } from "../middlewares/petPostMiddlewares/getPetPostMid";
import { postIdFoundMid } from "../middlewares/petPostMiddlewares/postIdFoundMid";

export const petPostRouter = express.Router();
petPostRouter.get("/", getPetPost);
petPostRouter.post("/:id", createPetPost);
petPostRouter.delete("/:id", postIdFoundMid, deletePetPost);
petPostRouter.put("/:id", postIdFoundMid, putPetPost);
petPostRouter.get("/:categoryId", getPetPostMid, getPetPostCategoryId);
