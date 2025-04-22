import express, { Request, Response } from "express";
import { hospitalRouter } from "./routers/hospitalRouter";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});
app.use("/hospital", hospitalRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//lkdfngnsdg