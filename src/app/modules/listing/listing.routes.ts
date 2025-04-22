import express from 'express';
import { listingController } from './listing.controller';


const router = express.Router();

router.post("/listing",  listingController.createListing) 

router.get("/property",  listingController.getAllListings) 

router.get("/property/:id",  listingController.getListingById) 

router.put("/propertyUpdate/:id",  listingController.updateListing)

router.delete("/propertyDelete/:id",  listingController.deleteListing) 




export const listingRouter = router;
