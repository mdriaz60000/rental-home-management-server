import express from 'express';
import { tenantController } from './tenant.controller';
import auth from '../../middleware/auth';

const router = express.Router();


router.post('/tenants/requests', auth("landlord", "admin"), tenantController.submitRentalRequest);

router.post('/tenants/requests', auth("landlord", "admin"), tenantController.getTenantRequests);
  
  router.put(
    '/tenants/profile', auth("landlord", "admin"), tenantController.updateTenantProfile);

export const tenantRouter = router;
