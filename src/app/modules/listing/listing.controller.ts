import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from 'http-status';
import { listingService } from "./listing.service";
import { Request, Response } from 'express';

const createListing = catchAsync(async (req: Request, res: Response) => {
  const result = await listingService.createListingDb(req.body);
  
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Property listing created successfully',
    data: result,
  });
});

const singleListing = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await listingService.singleListingDb(id);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing id data successfully',
    data: result,
  });
});
const getListingById = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await listingService.getListingByIdDb(userId);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing id data successfully',
    data: result,
  });
});

const getAllListings = catchAsync(async (req: Request, res: Response) => {
  
  const result = await listingService.getAllListingsDb(req.query);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listings retrieved successfully',
    data: result,
  });
});
const getSearchListings = catchAsync(async (req: Request, res: Response) => {
  const result = await listingService.getSearchListingsDb(req.query);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listings retrieved successfully',
    data: result,
  });
});

const updateListing = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const {payload} = req.body;
 
  const result = await listingService.updateListingDb(id, payload);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing updated successfully',
    data: result,
  });
});

const deleteListing = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id)
  const result = await listingService.deleteListingDb(id);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing deleted successfully',
    data: result,
  });
});

const getListingsSearch = catchAsync(async (req: Request, res: Response) => {

// console.log(req.query)
  const result = await listingService.getSearchListingsDb(req.query) ;
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' listings search successfully',
    data: result,
  });
});




export const listingController = {
  createListing,
  getListingById,
  getAllListings,
  updateListing,
  deleteListing,
  getListingsSearch,
  singleListing
};