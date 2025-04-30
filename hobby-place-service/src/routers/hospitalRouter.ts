import express from "express";
import { addHospital } from "../controllers/hospitalControllers/addHospital";
import { getByCategory } from "../controllers/hospitalControllers/getByCategory";
import { updateHospitalInfo } from "../controllers/hospitalControllers/updateHospitalInfo";
import { getAll } from "../controllers/hospitalControllers/getAll";
import { getHospital } from "../controllers/hospitalControllers/getHospital";
import { getToprated } from "../controllers/hospitalControllers/getTopRated";

export const hospitalRouter = express.Router();

hospitalRouter.get("/topRated", getToprated);
hospitalRouter.get("/hospitalId/:id", getHospital);
hospitalRouter.get("/", getAll);
hospitalRouter.post("/", addHospital);
hospitalRouter.put("/", updateHospitalInfo);
hospitalRouter.get("/:category", getByCategory);
