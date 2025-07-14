import express from "express"
import { messageController } from "./message.controller"
import auth from "../../middleware/auth"

const router = express.Router()

router.post("/message", messageController.createMessage)
router.get("/message",  messageController.getMessage)




export const messageRouter = router