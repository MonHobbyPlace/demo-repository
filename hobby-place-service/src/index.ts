import express, { Request, Response } from "express";
import { hospitalRouter } from "./routers/hospitalRouter";
import { categoryRouter } from "./routers/categoryRouter";
// import dotenv from "dotenv";
// dotenv.config();

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});
app.use("/hospital", hospitalRouter);
app.use("/category", categoryRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
