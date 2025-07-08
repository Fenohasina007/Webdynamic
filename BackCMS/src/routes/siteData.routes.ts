import { Router } from 'express';
import { SiteDataController } from '../controllers/siteData.controller';

const router = Router();
const siteDataController = new SiteDataController();

router.get('/site-data/:nomSite', (req, res) => siteDataController.getSiteDataByName(req, res));

export default router;