import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { User } from '../user/user.model';
import {  ListingModel } from '../listing/listing.model';
import httpStatus from 'http-status';

const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find().select('-password');
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: users
  });
});

const updateUserRole = catchAsync(async (req, res) => {
  const userId = req.params.id;
  const { role } = req.body;
  
  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  ).select('-password');

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User role updated successfully',
    data: user
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.id;
  
  await User.findByIdAndDelete(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: null
  });
});

const getAllListings = catchAsync(async (req, res) => {
  const listings = await ListingModel.find().populate('landlord', 'name email');
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listings retrieved successfully',
    data: listings
  });
});

const updateListing = catchAsync(async (req, res) => {
  const listingId = req.params.id;
  
  const listing = await ListingModel.findByIdAndUpdate(
    listingId,
    req.body,
    { new: true }
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing updated successfully',
    data: listing
  });
});

const deleteListing = catchAsync(async (req, res) => {
  const listingId = req.params.id;
  
  await ListingModel.findByIdAndDelete(listingId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Listing deleted successfully',
    data: null
  });
});

export const adminController = {
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAllListings,
  updateListing,
  deleteListing
};