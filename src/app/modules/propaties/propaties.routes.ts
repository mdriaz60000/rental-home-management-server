import express from 'express';
import { propertyController } from './propaties.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post("/property", auth("admin"), propertyController.createProperty) 

router.get("/property",  propertyController.getAllProperties) 

router.get("/property/:id",  propertyController.getSingleProperty) 

router.put("/propertyUpdate/:id", auth("admin") , propertyController.updateProperty)

router.delete("/propertyDelete/:id", auth('admin'),  propertyController.deleteProperty) 




export const PropertiesRouter = router;
