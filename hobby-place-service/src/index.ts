import express, { Request, Response } from "express";
import { hospitalRouter } from "./routers/hospitalRouter";
import { petPostRouter } from "./routers/petPost.routes";
import { servicePostRouter } from "./routers/servicePost.routes";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});
app.use("/hospital", hospitalRouter);
app.use("/petPost", petPostRouter);
app.use("/servicePost", servicePostRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
