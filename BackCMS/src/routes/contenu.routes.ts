import { Router } from 'express';
import { ContenuController } from '../controllers/contenu.controller';

const router = Router();
const contenuController = new ContenuController();

router.post('/addcontenus', (req, res) => contenuController.addContenu(req, res));
router.get('/selectallcontenus', (req, res) => contenuController.selectAllContenus(req, res));
router.get('/selectbyidcontenus/:id', (req, res) => contenuController.selectContenuById(req, res));
router.delete('/deletecontenus/:id', (req, res) => contenuController.deleteContenuById(req, res));
router.delete('/deleteallcontenus', (req, res) => contenuController.deleteAllContenus(req, res));
router.put('/updatecontenus/:id', (req, res) => contenuController.updateContenu(req, res));

export default router;
