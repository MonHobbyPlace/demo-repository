import express from "express";
import CreateChat from "../controllers/chatControllers/createChat.controller";
import SendMessage from "../controllers/chatControllers/sendMessage.controller";
import getMessages from "../controllers/chatControllers/getChat.controller";

export const ChatRouter=express.Router();

ChatRouter.post("/conversation",CreateChat);
ChatRouter.post("/message",SendMessage)
ChatRouter.get("/:conversationId/message",getMessages)