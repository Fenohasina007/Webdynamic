import { Router } from 'express';
import { PageController } from '../controllers/page.controller';

const router = Router();
const pageController = new PageController();

router.post('/addpages', (req, res) => pageController.addPage(req, res));
router.get('/selectallpages', (req, res) => pageController.selectAllPages(req, res));
router.get('/selectbyidpages/:id', (req, res) => pageController.selectPageById(req, res));
router.put('/updatepages/:id', (req, res) => pageController.updatePage(req, res));
router.delete('/deletebyidpages/:id', (req, res) => pageController.deletePageById(req, res));
router.delete('/deleteallpages', (req, res) => pageController.deleteAllPages(req, res));

export default router;