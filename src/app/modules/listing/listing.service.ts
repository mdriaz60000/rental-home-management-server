
import { FilterQuery, QueryOptions } from 'mongoose';


import { ListingModel } from './listing.model';
import { IListingFilters, TListing } from './listing.interface';

const createListingDb = async (payload: TListing) => {
  return await ListingModel.create(payload);
};
const singleListingDb = async (id : string) => {
  return await ListingModel.findById({_id : id});
};

const getListingByIdDb = async (userId: string)=> {
  return await ListingModel.find({ landlordId : userId  });
};

// const getAllListingsDb = async (query: any) =>{

//   const result = await ListingModel.find()
//   return result
// }


const getAllListingsDb = async (query: any) => {
  const { searchTerm, page = 1, limit = 6 } = query;

  const andConditions: any[] = [];

  if (searchTerm) {
    const isNumeric = !isNaN(Number(searchTerm));

    andConditions.push({
      $or: [
        { location: { $regex: searchTerm, $options: 'i' } },
        ...(isNumeric ? [{ rentAmount: Number(searchTerm) }] : []),
        ...(isNumeric ? [{ bedrooms: Number(searchTerm) }] : [])
      ]
    });
  }

  const whereCondition = andConditions.length ? { $and: andConditions } : {};

  const skip = (Number(page) - 1) * Number(limit);

  const listings = await ListingModel.find(whereCondition)
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 }); 

  const total = await ListingModel.countDocuments(whereCondition);

  return {
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
    },
    data: listings,
  };
};


const updateListingDb = async (
  id: string,
  payload: Partial<TListing>
): Promise<TListing | null> => {
  return await ListingModel.findOneAndUpdate({id}, payload);
};

const deleteListingDb = async (id: string) => {
  const result = await ListingModel.updateOne({_id: id}, {isDelete:true});
  return result
};

const getSearchListingsDb = async (params: any) => {
  
  const { location } = params;
 

  const matchStage: any = {};
  const cleanedLocation = location?.trim();

  if (cleanedLocation) {
    matchStage.$or = [
      { location: { $regex: cleanedLocation, $options: 'i' } },
      { address: { $regex: cleanedLocation, $options: 'i' } },
      { city: { $regex: cleanedLocation, $options: 'i' } },
      { title: { $regex: cleanedLocation, $options: 'i' } }
    ];
  }

  const listings = await ListingModel.aggregate([
    { $match: matchStage },

    
    {
      $addFields: {
        matchScore: {
          $cond: [
            { $eq: [{ $toLower: "$location" }, cleanedLocation.toLowerCase()] }, 2,
            {
              $cond: [
                { $regexMatch: { input: "$location", regex: cleanedLocation, options: "i" } },
                1,
                0
              ]
            }
          ]
        }
      }
    },

   
    { $sort: { matchScore: -1, createdAt: -1 } },

    
    { $limit: 50 }
  ]);

  return listings;
};



export const listingService = {
  createListingDb,
  getListingByIdDb,
  getAllListingsDb,
  updateListingDb,
  deleteListingDb,
  getSearchListingsDb,
  singleListingDb
};