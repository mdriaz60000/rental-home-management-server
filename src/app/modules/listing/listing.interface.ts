import mongoose, { Types } from 'mongoose';

export interface TListing  {
  landlordId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  squareFeet: number
  location:string;
  rentAmount: number;
  bedrooms: number;
  amenities: string[];
  images: string[];
  landlord: Types.ObjectId;
  isAvailable: boolean;
  status: "pending" | "reject" | "proved"

}

export type IListingFilters = {
  searchTerm?: string;
  minRent?: string;
  maxRent?: string;
  bedrooms?: string;
  city?: string;
  isAvailable?: string;
};