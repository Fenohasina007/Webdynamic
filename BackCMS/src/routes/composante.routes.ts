import { Router } from 'express';
import { ComposanteController } from '../controllers/composante.controller';

const router = Router();
const composanteController = new ComposanteController();

/**
 * @swagger
 * /addcomposantes:
 *   post:
 *     summary: Ajoute une nouvelle composante
 *     tags:
 *       - Component -> ADD COMPONENT  # Étiquette pour regrouper avec d'autres endpoints
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomComposante:
 *                 type: string
 *                 description: Nom de la composante
 *               idPage:
 *                 type: integer
 *                 description: ID de la page associée
 *             required:
 *               - NomComposante
 *               - idPage
 *     responses:
 *       201:
 *         description: Composante créée avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/addcomposantes', (req, res) => composanteController.addComposante(req, res));

/**
 * @swagger
 * /selectallcomposantes:
 *   get:
 *     summary: Récupère la liste de toutes les composantes
 *     tags:
 *       - Component -> SELECT ALL COMPONENTS
 *     responses:
 *       200:
 *         description: Succès, retourne la liste des composantes
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectallcomposantes', (req, res) => composanteController.selectAllComposantes(req, res));

/**
 * @swagger
 * /selectbyidcomposantes/{id}:
 *   get:
 *     summary: Récupère une composante par son ID
 *     tags:
 *       - Component -> SELECT COMPONENTES BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la composante
 *     responses:
 *       200:
 *         description: Succès, retourne la composante
 *       404:
 *         description: Composante non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectbyidcomposantes/:id', (req, res) => composanteController.selectComposanteById(req, res));

/**
 * @swagger
 * /deletecomposantes/{id}:
 *   delete:
 *     summary: Supprime une composante par son ID
 *     tags:
 *       - Component -> DELETE COMPONENTS BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la composante à supprimer
 *     responses:
 *       200:
 *         description: Composante supprimée avec succès
 *       404:
 *         description: Composante non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deletecomposantes/:id', (req, res) => composanteController.deleteComposanteById(req, res));

/**
 * @swagger
 * /deleteallcomposantes:
 *   delete:
 *     summary: Supprime toutes les composantes
 *     tags:
 *       - Component -> DELETE ALL COMPONENTS
 *     responses:
 *       200:
 *         description: Toutes les composantes supprimées avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deleteallcomposantes', (req, res) => composanteController.deleteAllComposantes(req, res));

/**
 * @swagger
 * /updatecomposantes/{id}:
 *   put:
 *     summary: Met à jour une composante par son ID
 *     tags:
 *       - Component -> UPDATE COMPONENTS
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la composante à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomComposante:
 *                 type: string
 *                 description: Nouveau nom de la composante
 *               idPage:
 *                 type: integer
 *                 description: Nouvel ID de la page associée
 *             required:
 *               - NomComposante
 *               - idPage
 *     responses:
 *       200:
 *         description: Composante mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Composante non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/updatecomposantes/:id', (req, res) => composanteController.updateComposante(req, res));

export default router;