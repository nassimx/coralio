import express from 'express';

import {
  getClientSec,
  getHeroSection,
  getService,
  getPartenaires,
  getContact,
  getClients,
} from '../controllers/herosectionController.js';

const router = express.Router();

router.get('/', getHeroSection);
router.get('/services', getService);
router.get('/clientsec', getClientSec);
router.get('/partenaires', getPartenaires);
router.get('/contact', getContact);
router.get('/clients', getClients);

export default router;
