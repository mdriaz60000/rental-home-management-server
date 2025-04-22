import mongoose, { Schema, model } from 'mongoose';
 import bcrypt from "bcrypt";
import { TUser } from './user.interface';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true
    },
      
    email: {
      type: String,
      required: true,
      unique: true,
    },
   
    password: {
      type: String,
      required: true,
      select: 0,
    },
 
    role: { 
      type: String, 
      enum: ['tenant', 'landlord', 'admin'], 
      default: "user"
    },
    profileImage: { type: String },
    isVerified: {
       type: Boolean, default: false
      },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, 
  }
);

userSchema.pre('save', async function (next) {
  
  const user = this; 
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({ id }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};



userSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

userSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const User = model<TUser>('User', userSchema);
