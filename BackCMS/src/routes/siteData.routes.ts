import { Router } from 'express';
import { SiteDataController } from '../controllers/siteData.controller';

const router = Router();
const siteDataController = new SiteDataController();

// Nouvelle route avec nomSite et nomPage comme paramètres
router.get('/site-data/:nomSite/:nomPage?', (req, res) => siteDataController.getSiteDataByName(req, res));

export default router;