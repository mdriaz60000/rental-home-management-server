import {  Schema, model } from 'mongoose';
import { IRental } from './request.Interface';

const rentalSchema = new Schema<IRental>({
  phone: {
    type: String,
    required: true
  },
  moveInDate: {
    type: Date,
    required: true
  },
  duration: {
    type: String, 
    required: true
  },
  rentId: {
      type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  listingsId: {
    type: Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  
  isDelete: {
    type: Boolean,
    default: false
  },
 isAvailable: {
    type: Boolean,
    default: true
  },
  status: { 
    type: String, 
    enum: ["pending", "accepted", "rejected"], 
    default: "pending"
  },

});

rentalSchema.pre('find', function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});

rentalSchema.pre('findOne', function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});

export const Rental = model<IRental>('Rental', rentalSchema);

