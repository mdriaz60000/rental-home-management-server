
export interface TRentalRequest {
  propertyId: string;
  tenantId: string;
  moveInDate: Date;
  duration: string;
  status: 'pending' | 'approved' | 'rejected';
  phone: number
};