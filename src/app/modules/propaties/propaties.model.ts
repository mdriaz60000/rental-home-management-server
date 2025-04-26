import mongoose, { Schema, model } from 'mongoose';
import { TProperty } from './propaties.interface';

const propatiesSchema = new Schema<TProperty>(
    {
    
      title: {
        type: String,
        required: true,
      },
      RepresentativeImages: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      rentAmount: {
        type: Number,
        required: true,
      },
      bedrooms: {
        type: Number,
        required: true,
      },
      MultipleImage:[ {
        type: String,
        
      }],
      location: {
        type: String,
        required: true,
      },
      squareFeet: {
        type: Number,
        required: true,
      },
      Amenities:[{
        type: String,       
      }],
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
  // Soft delete middleware (same as in User model)
  propatiesSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
  });
  
  propatiesSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
  });
  
  export const PropertiesModel = model<TProperty>('Propaties', propatiesSchema);