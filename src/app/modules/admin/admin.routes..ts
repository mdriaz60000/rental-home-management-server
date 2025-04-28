import express from 'express';
import { adminController } from './admin.controller';
import auth from '../../middleware/auth';




const router = express.Router();

router.get('/admin/users', auth("admin"), adminController.getAllUsers );
router.put('/admin/users/:id', auth("admin"), adminController.updateUserRole );
router.delete('/admin/users/:id', auth("admin"), adminController.deleteUser  );
router.get('/admin/listing',   adminController.getAllListings);
router.put('/admin/listings/:id', auth("admin"),  adminController.updateListing);
router.delete('/admin/listings/:id', auth("admin"),  adminController.deleteListing);


export const adminRouter  = router;