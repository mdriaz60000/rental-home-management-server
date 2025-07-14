import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from 'http-status';
import { requestService } from "./reqest.service";

const createRequest = catchAsync(async (req, res) => {

  console.log(req.body)
    const result = await requestService.createRequestDb (req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Property created successfully',
      data: result,
    });
  });

const getAllRequest = catchAsync(async (req, res) => {
    const result = await requestService.getRequestDb ();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Property get successfully',
      data: result,
    });
  });
const getSingleRequest = catchAsync(async (req, res) => {
  const {userId} = req.params
  console.log(userId)
    const result = await requestService.getSingleRequestDb(userId);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Property get successfully',
      data: result,
    });
  });


  const updateRequest = catchAsync(async (req, res) => {
  
    const {id} = req.params
    const result = await requestService.updateRequestDb(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Property get successfully',
      data: result,
    });
  });

  

 export const requestController ={
    createRequest,
    getAllRequest,
    getSingleRequest,
    updateRequest
  }