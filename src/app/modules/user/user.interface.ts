// /* eslint-disable no-unused-vars */
 import { Model } from 'mongoose';
import { USER_ROLE } from './user.constanst';



export interface TUser {
  
  name : string,
  email: string;
  phoneNumber: string
  password: string;
  role: 'tenant' | 'admin' | 'landlord' | 'user'
  profileImage: string
  isVerified: boolean
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;