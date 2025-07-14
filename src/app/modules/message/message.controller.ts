import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { messageService } from "./message.service";
import httpStatus from 'http-status';

const createMessage = catchAsync(async (req, res)=>{
const result = await messageService.createMessageDb(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'message created successfully',
    data: result
  });
})

const getMessage = catchAsync(async (req, res)=>{
const result = await messageService.getMessageDb()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'message get successfully',
    data: result
  });
})

export const messageController = {
    createMessage,
    getMessage
}