import { Router } from 'express';
import { SiteDataController } from '../controllers/siteData.controller';

const router = Router();
const siteDataController = new SiteDataController();

// Route avec nomSite comme paramètre obligatoire, nomPage optionnel via query string
router.get('/site-data/:nomSite', (req, res) => siteDataController.getSiteDataByName(req, res));

export default router;