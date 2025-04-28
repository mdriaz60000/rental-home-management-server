import express from 'express';
import { listingController } from './listing.controller';
import auth from '../../middleware/auth';


const router = express.Router();

router.post("/listings",  listingController.createListing) 

router.get("/admin/listings",  listingController.getAllListings) 

router.get("/property/:id",auth("admin", "landlord"),   listingController.getListingById) 

router.put("/propertyUpdate/:id",auth("admin", "landlord"),   listingController.updateListing)

router.delete("/propertyDelete/:id",auth("admin", "landlord"),   listingController.deleteListing) 




export const listingRouter = router;
