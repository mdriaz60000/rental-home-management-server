import { Schema, model } from 'mongoose';

const requestSchema = new Schema(
  {
    listing: { 
      type: Schema.Types.ObjectId, 
      ref: 'Listing', 
      required: true 
    },
    tenant: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    moveInDate: { type: Date, required: true },
    duration: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['pending', 'approved', 'rejected'], 
      default: 'pending' 
    },
    specialRequirements: { type: String },
    landlordContact: { type: String },
    paymentStatus: { 
      type: String, 
      enum: ['pending', 'completed', 'failed'], 
      default: 'pending' 
    }
  },
  { timestamps: true }
);

export const Request = model('Request', requestSchema);