import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { propertiesService } from "./propaties.service";

const createProperty = catchAsync(async (req, res) => {
  const result = await propertiesService.createPropertyDb(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Property created successfully',
    data: result,
  });
});

const getAllProperties = catchAsync(async (req, res) => {
  const result = await propertiesService.getAllPropertiesDb();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Properties retrieved successfully',
    data: result,
  });
});

const getSingleProperty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await propertiesService.getSinglePropertyDb(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Property retrieved successfully',
    data: result,
  });
});

const updateProperty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await propertiesService.updatePropertyDb(id, updateData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Property updated successfully',
    data: result,
  });
});

const deleteProperty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await propertiesService.deletePropertyDb(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Property deleted successfully',
    data: result,
  });
});

export const propertyController = {
  createProperty,
  getAllProperties,
  getSingleProperty,
  updateProperty,
  deleteProperty
};