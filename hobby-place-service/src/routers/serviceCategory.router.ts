import express from "express";
import { deleteServiceCategory } from "../controllers/serviceCategory/deleteServiceCategory";
import { getServiceCategory } from "../controllers/serviceCategory/getServiceCategory";
import { validateServiceCatName } from "../middlewares/serviceMiddlewares/validateServiceCatName";
import { createServiceCategory } from "../controllers/serviceCategory/createServiceCategory";

export const serviceCategory = express.Router();

serviceCategory.post("/", validateServiceCatName, createServiceCategory);
serviceCategory.delete("/:id", deleteServiceCategory),
  serviceCategory.get("/", getServiceCategory);
