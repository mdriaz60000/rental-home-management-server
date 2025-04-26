import { Schema, model } from 'mongoose';



const listingSchema = new Schema(
  {
   
    title: { type: String, required: true },
    description: { type: String, required: true },
    squareFeet : {type: Number, require: true},
    location: {type: String, required: true },
    rentAmount: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
   
    isAvailable: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const ListingModel = model('Listing', listingSchema);