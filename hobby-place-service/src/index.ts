import express, { Request, Response } from "express";
import { hospitalRouter } from "./routers/hospitalRouter";
import { petPostRouter } from "./routers/petPost.routes";
import { servicePostRouter } from "./routers/servicePost.routes";
import { categoryRouter } from "./routers/categoryRouter";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routers/userRouter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/hospital", hospitalRouter);
app.use("/petPost", petPostRouter);
app.use("/servicePost", servicePostRouter);
app.use("/category", categoryRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
