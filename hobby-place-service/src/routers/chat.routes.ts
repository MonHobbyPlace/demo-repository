import express from "express";
import CreateChat from "../controllers/chatControllers/createChat.controller";
import SendMessage from "../controllers/chatControllers/sendMessage.controller";

export const ChatRouter=express.Router();

ChatRouter.post("/conversation",CreateChat);
ChatRouter.post("/chat",SendMessage)