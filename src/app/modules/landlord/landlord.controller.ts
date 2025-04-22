import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { ListingModel } from '../listing/listing.model';
import { Request } from '../request/request.model';
import httpStatus from 'http-status';

const createListing = catchAsync(async (req, res) => {
   const landlordId = req.user?.userId;
   const listingData = { ...req.body, landlordId };
  
  const listing = await ListingModel.create(listingData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Listing created successfully',
    data: listing
  });
});

const getLandlordListings = catchAsync(async (req, res) => {
   const landlordId = req.user?.userId;
  
  const listings = await ListingModel.find(landlordId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listings retrieved successfully',
    data: listings
  });
});

const updateListing = catchAsync(async (req, res) => {
   const landlordId = req.user?.userId;
  const listingId = req.params.id;
  
  const listing = await ListingModel.findOneAndUpdate(
    { _id: listingId,  },
    req.body,
    { new: true }
  );

  if (!listing) { 
    throw new Error('Listing not found or unauthorized');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing updated successfully',
    data: listing
  });
});

const deleteListing = catchAsync(async (req, res) => {
   const landlordId = req.user?.userId;
  const listingId = req.params.id;
  
  const listing = await ListingModel.findOneAndDelete({
    _id: listingId,
     landlord: landlordId
  });

  if (!listing) {
    throw new Error('Listing not found or unauthorized');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing deleted successfully',
    data: null
  });
});

const getLandlordRequests = catchAsync(async (req : any, res) => {
  const landlordId = req.user.userId;
  
  // Get all listings by this landlord
  const listings = await ListingModel.find({ landlord: landlordId });
  const listingIds = listings.map(listing => listing._id);
  
  // Get all requests for these listings
  const requests = await Request.find({ listing: { $in: listingIds } })
    .populate('tenant', 'name email phoneNumber')
    .populate('listing', 'title rentAmount');

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental requests retrieved successfully',
    data: requests
  });
});

const respondToRequest = catchAsync(async (req, res) => {
   const landlordId = req.user?.userId;
  const requestId = req.params.id;
  const { status, landlordContact } = req.body;
  
  // Verify the request belongs to landlord's listing
  const request = await Request.findById(requestId).populate('listing');
  
  // if (!request || request.listing?.landlord.toString() !== landlordId) {
  //   throw new Error('Request not found or unauthorized');
  // }

  // // Update request status
  // request.status = status;
  // if (status === 'approved') {
  //   request.landlordContact = landlordContact;
  // }
  // await request.save();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Request updated successfully',
    data: request
  });
});

export const landlordController = {
  createListing,
  getLandlordListings,
  updateListing,
  deleteListing,
  getLandlordRequests,
  respondToRequest
};