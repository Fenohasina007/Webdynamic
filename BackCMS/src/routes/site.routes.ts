import { Router } from 'express';
import { SiteController } from '../controllers/site.controller';

const router = Router();
const siteController = new SiteController();

router.post('/addsites', (req, res) => siteController.addSite(req, res));
router.get('/selectallsites', (req, res) => siteController.selectAllSites(req, res));
router.get('/selectbyidsites/:id', (req, res) => siteController.selectSiteById(req, res));
router.delete('/deletesites/:id', (req, res) => siteController.deleteSiteById(req, res));
router.delete('/deleteallsites', (req, res) => siteController.deleteAllSites(req, res));
router.put('/updatesites/:id', (req, res) => siteController.updateSite(req, res));

export default router;