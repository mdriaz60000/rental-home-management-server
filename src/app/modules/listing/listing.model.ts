import mongoose, { Schema, model } from 'mongoose';
import { TListing } from './listing.interface';
import { User } from '../user/user.model';



const listingSchema = new Schema<TListing>(
  {
   landlordId:{  type: mongoose.Schema.Types.ObjectId,
    required: true, Ref: User},
    title: { type: String, required: true },
    description: { type: String, required: true },
    squareFeet : {type: Number, require: true},
    location: {type: String, required: true },
    rentAmount: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
    status:{ 
      type: String, 
      enum: [ 'proved', 'reject', 'pending'], 
      default: "pending"
    },
   
    isAvailable: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const ListingModel = model('Listing', listingSchema);