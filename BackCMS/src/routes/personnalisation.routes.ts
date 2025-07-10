import { Router } from 'express';
import { PersonnalisationController } from '../controllers/personnalisation.controller';

const router = Router();
const personnalisationController = new PersonnalisationController();

router.post('/addpersonnalisations', (req, res) => personnalisationController.addPersonnalisation(req, res));
router.get('/selectallpersonnalisations', (req, res) => personnalisationController.selectAllPersonnalisations(req, res));
router.get('/selectbyidpersonnalisations/:id', (req, res) => personnalisationController.selectPersonnalisationById(req, res));
router.delete('/deletbyidpersonnalisations/:id', (req, res) => personnalisationController.deletePersonnalisationById(req, res));
router.delete('/deleteallpersonnalisations', (req, res) => personnalisationController.deleteAllPersonnalisations(req, res));
router.put('/updatepersonnalisations/:id', (req, res) => personnalisationController.updatePersonnalisation(req, res));

export default router;