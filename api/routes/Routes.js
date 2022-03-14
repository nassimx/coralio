import express from 'express';

import {
  getClientSec,
  getHeroSection,
  getServices,
  getPartenaires,
  getContact,
  getClients,
  getService,
} from '../controllers/herosectionController.js';

const router = express.Router();

router.get('/', getHeroSection);

router.get('/services', getServices);
router.get('/services/:id', getService);

router.get('/clientsec', getClientSec);
router.get('/clients', getClients);

router.get('/partenaires', getPartenaires);

router.get('/contact', getContact);

export default router;
