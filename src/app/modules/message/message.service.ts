import { Imessage } from "./message.interface"
import { MessageModel } from "./message.model"


const createMessageDb = async (messageData : Imessage) => {
const result = await MessageModel.create(messageData)
return result
}
const getMessageDb = async () => {
const result = await MessageModel.find()
return result
}


export const messageService = {
    createMessageDb,
    getMessageDb
}