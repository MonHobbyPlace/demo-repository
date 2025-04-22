import express from "express";
import { addHospital } from "../controllers/hospitalControllers/addHospital";
import { getByCategory } from "../controllers/hospitalControllers/getByCategory";
import { updateHospitalInfo } from "../controllers/hospitalControllers/updateHospitalInfo";
export const hospitalRouter = express.Router();
hospitalRouter.get("/:category", getByCategory);
hospitalRouter.post("/", addHospital);
hospitalRouter.put("/", updateHospitalInfo);
