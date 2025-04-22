import express from 'express';
import { landlordController } from './landlord.controller';


const router = express.Router();

router.post(
    '/landlords/listings', landlordController.createListing);

  router.get('/landlords/listings', landlordController.getLandlordListings);

  router.put(
    '/landlords/listings/:id', landlordController.updateListing);
    
  router.delete('/landlords/listings/:id', landlordController.deleteListing);
  
  router.get('/landlords/requests',landlordController.getLandlordRequests);
  router.put(
    '/landlords/requests/:id', landlordController.updateListing);


export const landlordRouter = router;