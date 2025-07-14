import express from 'express';
import { listingController } from './listing.controller';
import auth from '../../middleware/auth';


const router = express.Router();

router.post("/listings",  listingController.createListing) 

router.get("/listings",  listingController.getAllListings)

router.get("/listings/:id",  listingController.singleListing) 

router.get("/search",  listingController.getListingsSearch) 
 
router.get("/listingsed/:userId",  listingController.getListingById) 

router.patch("/listings/:id",   listingController.updateListing)

router.patch("/listingsDelete/:id",   listingController.deleteListing) 




export const listingRouter = router;
