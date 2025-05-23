import express, { Request, Response } from "express";
import { hospitalRouter } from "./routers/hospitalRouter";
import { petPostRouter } from "./routers/petPost.routes";
import { servicePostRouter } from "./routers/servicePost.routes";
import { categoryRouter } from "./routers/categoryRouter";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routers/userRouter";
import { serviceCategory } from "./routers/serviceCategory.router";
import { createServer } from "http";
import { Server } from "socket.io";
import { addNewMessage } from "./controllers/messageController/addNewMessage";
import ChatRouter from "./routers/chat.routes";
dotenv.config();
import prisma from "./prismaClient";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/hospital", hospitalRouter);
app.use("/petPost", petPostRouter);
app.use("/servicePost", servicePostRouter);
app.use("/petCategory", categoryRouter);
app.use("/serviceCategory", serviceCategory);
app.use("/users", userRouter);
app.use("/chat", ChatRouter);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*", // for development
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Example: Listen to a custom event
  socket.on("chatMessage", async (msg) => {
    console.log("Received message:", msg);
    // socket.to
    // Broadcast the message to everyone except the sender
    const a = await prisma.message.create({
      data: {
        senderId: Number(msg.sender),
        receiverId: Number(msg.reciever),
        content: msg.content,
        conversationId: Number(msg.room),
      },
    });
    socket.broadcast.emit("chatMessage", msg.content);
    console.log("asudfajsf", { content: msg.content, sender: msg.sender });

    socket.to(msg.room).emit("chatMessage", {
      content: msg.content,
      sender: msg.sender,
    });
  });
  socket.on("join_room", (id) => {
    console.log("room id:", id);
    socket.join(id);
  });
  socket.on("id", (id) => {
    console.log(id);
  });
  // On disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
