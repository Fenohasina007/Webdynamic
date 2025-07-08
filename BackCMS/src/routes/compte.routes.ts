import { Router } from 'express';
import { CompteController } from '../controllers/compte.controller';

const router = Router();
const compteController = new CompteController();

router.post('/addcomptes', (req, res) => compteController.addCompte(req, res));
router.get('/selectallcomptes', (req, res) => compteController.selectAllComptes(req, res));
router.get('/selectbyidcomptes/:id', (req, res) => compteController.selectCompteById(req, res));
router.delete('/deletecomptes/:id', (req, res) => compteController.deleteCompteById(req, res));
router.delete('/deleteallcomptes', (req, res) => compteController.deleteAllComptes(req, res));
router.put('/updatecomptes/:id', (req, res) => compteController.updateCompte(req, res));

export default router;