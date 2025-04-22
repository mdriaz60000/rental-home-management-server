import express from 'express';
import { tenantController } from './tenant.controller';

const router = express.Router();


router.post('/tenants/requests', tenantController.submitRentalRequest);

router.post('/tenants/requests', tenantController.getTenantRequests);
  
  router.put(
    '/tenants/profile',tenantController.updateTenantProfile);

export const tenantRouter = router;
