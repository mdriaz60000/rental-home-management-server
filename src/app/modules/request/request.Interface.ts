
// export interface TRentalRequest {
//   propertyId: string;
//   tenantId: string;
//   moveInDate: Date;
//   duration: string;
//   status: 'pending' | 'approved' | 'rejected';
//   phone: number
// };

import { TListing } from "../listing/listing.interface";



export interface IRental {
  phone: string;
  moveInDate: Date;
  duration: string; 
  rentId: object;
  listingsId: object;
 
  status: 'pending' | 'accepted' | 'rejected';
  isAvailable : boolean
  isDelete: boolean
}