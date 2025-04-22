import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { Request } from '../request/request.model';
import { User } from '../user/user.model';
import httpStatus from 'http-status';

const submitRentalRequest = catchAsync(async (req, res) => {
  const tenantId = req.user?.userId;
  const requestData = { ...req.body, tenant: tenantId };
  
  const request = await Request.create(requestData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Rental request submitted successfully',
    data: request
  });
});

const getTenantRequests = catchAsync(async (req, res) => {
  const tenantId = req.user?.userId;
  
  const requests = await Request.find({ tenant: tenantId })
    .populate('listing', 'title location.address rentAmount');

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental requests retrieved successfully',
    data: requests
  });
});

const updateTenantProfile = catchAsync(async (req, res) => {
  const userId = req.user?.userId;
  const updateData = req.body;

  const user = await User.findByIdAndUpdate(
    userId,
    updateData,
    { new: true }
  ).select('-password');

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: user
  });
});

export const tenantController = {
  submitRentalRequest,
  getTenantRequests,
  updateTenantProfile
};