import mongoose, { Types } from 'mongoose';

export interface TListing  {
  landlordId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  squareFeet: string
  location:string;
  rentAmount: string;
  bedrooms: string;
  amenities: string[];
  images: string[];
  landlord: Types.ObjectId;
  isAvailable: boolean;
  status: "pending" | "reject" | "proved",
  isDelete: boolean;

}

export type IListingFilters = {
  searchTerm?: string;
  minRent?: string;
  maxRent?: string;
  bedrooms?: string;
  city?: string;
  isAvailable?: string;
  
};