import { Router } from 'express';
import { FormationController } from '../controllers/formation.controller';

const router = Router();
const formationController = new FormationController();

router.get('/selectallformation', (req, res) => formationController.getAllFormations(req, res));
router.get('/selectbyidformation/:id', (req, res) => formationController.getFormationById(req, res));
router.post('/addformation', (req, res) => formationController.createFormation(req, res));
router.put('/updateformation:id', (req, res) => formationController.updateFormation(req, res));
router.delete('/deleteformation:id', (req, res) => formationController.deleteFormation(req, res));

export default router;

