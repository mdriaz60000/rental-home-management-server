import express from 'express';
import { propertyController } from './propaties.controller';

const router = express.Router();

router.post("/property",  propertyController.createProperty) 

router.get("/property",  propertyController.getAllProperties) 

router.get("/property/:id",  propertyController.getSingleProperty) 

router.put("/propertyUpdate/:id",  propertyController.updateProperty)

router.delete("/propertyDelete/:id",  propertyController.deleteProperty) 




export const PropertiesRouter = router;
