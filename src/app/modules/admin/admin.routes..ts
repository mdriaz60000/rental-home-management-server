import express from 'express';
import { adminController } from './admin.controller';




const router = express.Router();

router.get('/admin/users',adminController.getAllUsers );
router.put('/admin/users/:id', adminController.updateUserRole );
router.delete('/admin/users/:id', adminController.deleteUser  );
router.get('/admin/listings',  adminController.getAllListings);
router.put('/admin/listings/:id',  adminController.updateListing);
router.delete('/admin/listings/:id',  adminController.deleteListing);


export const adminRouter  = router;