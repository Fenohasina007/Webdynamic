import { Router } from 'express';
import { ComposanteController } from '../controllers/composante.controller';

const router = Router();
const composanteController = new ComposanteController();

router.post('/addcomposantes', (req, res) => composanteController.addComposante(req, res));
router.get('/selectallcomposantes', (req, res) => composanteController.selectAllComposantes(req, res));
router.get('/selectbyidcomposantes/:id', (req, res) => composanteController.selectComposanteById(req, res));
router.delete('/deletecomposantes/:id', (req, res) => composanteController.deleteComposanteById(req, res));
router.delete('/deleteallcomposantes', (req, res) => composanteController.deleteAllComposantes(req, res));
router.put('/updatecomposantes/:id', (req, res) => composanteController.updateComposante(req, res));

export default router;