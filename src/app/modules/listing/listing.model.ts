import mongoose, { Schema, model } from 'mongoose';
import { TListing } from './listing.interface';
import { User } from '../user/user.model';

const listingSchema = new Schema<TListing>(
  {
    
   landlordId:{  type: mongoose.Schema.Types.ObjectId,
    required: true, Ref: User},
    title: { type: String, required: true },
    description: { type: String, required: true },
    squareFeet : {type: String, require: true},
    location: {type: String, required: true },
    rentAmount: { type: String, required: true },
    bedrooms: { type: String, required: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
    status:{ 
      type: String, 
      enum: [ 'proved', 'reject', 'pending'], 
      default: "pending"
    },
    isDelete: { type: Boolean, default: false },
   
    isAvailable: { type: Boolean, default: true },
    
  },
  { timestamps: true }
);

listingSchema.pre('find', function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});

listingSchema.pre('findOne', function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});

export const ListingModel = model('Listing', listingSchema);