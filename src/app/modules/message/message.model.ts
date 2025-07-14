import { model, Schema } from "mongoose";
import { Imessage } from "./message.interface";


const messageSchema = new Schema<Imessage>(
    {
        UserName:{type: String},
        email:{type: String, required: true},
        message:{type: String},
        isDeleted: {type: Boolean, default: false}
    }
)


export const MessageModel = model<Imessage>("message", messageSchema)