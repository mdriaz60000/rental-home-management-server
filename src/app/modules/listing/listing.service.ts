
import { FilterQuery, QueryOptions } from 'mongoose';

// import { IPaginationOptions } from '../../../interfaces/pagination';
// import { paginationHelpers } from '../../../utils/paginationHelper';
import { ListingModel } from './listing.model';
import { IListingFilters, TListing } from './listing.interface';

const createListingDb = async (payload: TListing) => {
  return await ListingModel.create(payload);
};

const getListingByIdDb = async (id: string)=> {
  return await ListingModel.find();
};

const getAllListingsDb = async () =>{
  return await ListingModel.find()
}
// const getAllListingsDb = async (
//   filters: IListingFilters,
//   paginationOptions: IPaginationOptions
// ) => {
//   const { page, limit, skip, sortBy, sortOrder } = 
//     paginationHelpers.calculatePagination(paginationOptions);
  
//   const { searchTerm, ...filtersData } = filters;
//   const andConditions = [];
  
//   if (searchTerm) {
//     andConditions.push({
//       $or: [
//         { title: { $regex: searchTerm, $options: 'i' } },
//         { 'location.city': { $regex: searchTerm, $options: 'i' } },
//         { 'location.address': { $regex: searchTerm, $options: 'i' } }
//       ]
//     });
//   }
  
//   if (Object.keys(filtersData).length) {
//     andConditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value
//       }))
//     });
//   }
  
//   const sortConditions: { [key: string]: 1 | -1 } = {};
//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder === 'asc' ? 1 : -1;
//   }
  
//   const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
  
//   const result = await ListingModel.find(whereConditions)
//     .populate('landlord')
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit);
  
//   const total = await ListingModel.countDocuments(whereConditions);
  
//   return {
//     meta: {
//       page,
//       limit,
//       total
//     },
//     data: result
//   };
// };

const updateListingDb = async (
  id: string,
  payload: Partial<TListing>
): Promise<TListing | null> => {
  return await ListingModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteListingDb = async (id: string): Promise<TListing | null> => {
  return await ListingModel.findByIdAndDelete(id);
};

const getListingsByLandlordDb = async (
  landlordId: string
) => {
  return await ListingModel.find({ landlord: landlordId }).populate('landlord');
};

// const searchListingsDb = async (filters: IListingFilters): Promise<TListing[]> => {
//   const query: any = {};
  
//   if (filters.minRent || filters.maxRent) {
//     query.rentAmount = {};
//     if (filters.minRent) query.rentAmount.$gte = Number(filters.minRent);
//     if (filters.maxRent) query.rentAmount.$lte = Number(filters.maxRent);
//   }
  
//   if (filters.bedrooms) query.bedrooms = Number(filters.bedrooms);
//   if (filters.city) query['location.city'] = filters.city;
//   if (filters.isAvailable) query.isAvailable = filters.isAvailable === 'true';
  
//   return await ListingModel.find(query).populate('landlord');
// };

const toggleListingAvailabilityDb = async (
  id: string
) => {
  const listing = await ListingModel.findById(id);
  if (!listing) return null;
  
  listing.isAvailable = !listing.isAvailable;
  return await listing.save();
};

export const listingService = {
  createListingDb,
  getListingByIdDb,
  getAllListingsDb,
  updateListingDb,
  deleteListingDb,
  getListingsByLandlordDb,
  // searchListingsDb,
  toggleListingAvailabilityDb
};