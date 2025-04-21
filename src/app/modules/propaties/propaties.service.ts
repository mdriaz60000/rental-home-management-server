import { TProperty } from "./propaties.interface";
import { PropertiesModel } from "./propaties.model";

const createPropertyDb = async (payload: TProperty) => {
  const result = await PropertiesModel.create(payload);
  return result;
};

const getAllPropertiesDb = async () => {
  const result = await PropertiesModel.find({ isDeleted: false });
  return result;
};

const getSinglePropertyDb = async (id: string) => {
  const result = await PropertiesModel.findOne({ 
    _id: id, 
    isDeleted: false 
  });
  return result;
};

const updatePropertyDb = async (id: string, payload: Partial<TProperty>) => {
  const result = await PropertiesModel.findOneAndUpdate(
    { _id: id, isDeleted: false },
    payload,
    { new: true }
  );
  return result;
};

const deletePropertyDb = async (id: string) => {
  const result = await PropertiesModel.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const propertiesService = {
  createPropertyDb,
  getAllPropertiesDb,
  getSinglePropertyDb,
  updatePropertyDb,
  deletePropertyDb
};