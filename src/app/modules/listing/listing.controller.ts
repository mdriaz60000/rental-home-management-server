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

const getListingById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await listingService.getListingByIdDb(id);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing retrieved successfully',
    data: result,
  });
});

const getAllListings = catchAsync(async (req: Request, res: Response) => {
  const result = await listingService.getAllListingsDb();
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listings retrieved successfully',
    data: result,
  });
});

const updateListing = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
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
  const result = await listingService.deleteListingDb(id);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing deleted successfully',
    data: result,
  });
});

const getListingsByLandlord = catchAsync(async (req: Request, res: Response) => {
  const { landlordId } = req.params;
  const result = await listingService.getListingsByLandlordDb(landlordId);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Landlord listings retrieved successfully',
    data: result,
  });
});

const searchListings = catchAsync(async (req: Request, res: Response) => {
  const filters = req.query;
  const result = await listingService.searchListingsDb(filters);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listings filtered successfully',
    data: result,
  });
});

const toggleListingAvailability = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await listingService.toggleListingAvailabilityDb(id);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing availability toggled successfully',
    data: result,
  });
});

export const listingController = {
  createListing,
  getListingById,
  getAllListings,
  updateListing,
  deleteListing,
  getListingsByLandlord,
  searchListings,
  toggleListingAvailability
};