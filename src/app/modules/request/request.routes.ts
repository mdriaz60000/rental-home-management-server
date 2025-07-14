import express from 'express';
import { requestController } from './reqeust.controller';




const router = express.Router();

router.post("/requestRental",  requestController.createRequest) 
router.get("/requestRental",  requestController.getAllRequest) 
router.get("/requestRental/:userId",  requestController.getSingleRequest) 

router.patch("/requestRentalUpdate/:id",  requestController.updateRequest) 




export const requestRouter = router;
