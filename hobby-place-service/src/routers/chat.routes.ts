import { Router } from "express";
import CreateChat from "../controllers/chatControllers/createChat.controller";
import SendMessage from "../controllers/chatControllers/sendMessage.controller";
import getMessages from "../controllers/chatControllers/getChat.controller";

const ChatRouter = Router();

ChatRouter.post("/conversation", CreateChat);
ChatRouter.post("/message", SendMessage);
ChatRouter.get("/:conversationId/message", getMessages);

export default ChatRouter;
