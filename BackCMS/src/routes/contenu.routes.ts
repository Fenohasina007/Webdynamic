import { Router } from 'express';
import { ContenuController } from '../controllers/contenu.controller';

const router = Router();
const contenuController = new ContenuController();

/**
 * @swagger
 * /addcontenus:
 *   post:
 *     summary: Ajoute un nouveau contenu
 *     tags:
 *       - Content -> ADD CONTENT  # Étiquette pour regrouper avec d'autres endpoints
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ContenuJSON:
 *                 type: string
 *                 description: Contenu JSON (par exemple, pour navbar ou autre)
 *               idComposante:
 *                 type: integer
 *                 description: ID de la composante associée
 *               type:
 *                 type: string
 *                 description: Type de contenu (ex. horizontalmenu)
 *               ordre:
 *                 type: integer
 *                 description: Ordre d'affichage
 *             required:
 *               - ContenuJSON
 *               - idComposante
 *               - type
 *               - ordre
 *     responses:
 *       201:
 *         description: Contenu créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/addcontenus', (req, res) => contenuController.addContenu(req, res));

/**
 * @swagger
 * /selectallcontenus:
 *   get:
 *     summary: Récupère la liste de tous les contenus
 *     tags:
 *       - Content -> SELECT ALL CONTENUS
 *     responses:
 *       200:
 *         description: Succès, retourne la liste des contenus
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectallcontenus', (req, res) => contenuController.selectAllContenus(req, res));

/**
 * @swagger
 * /selectbyidcontenus/{id}:
 *   get:
 *     summary: Récupère un contenu par son ID
 *     tags:
 *       - Content -> SELECT CONTENUS BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du contenu
 *     responses:
 *       200:
 *         description: Succès, retourne le contenu
 *       404:
 *         description: Contenu non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectbyidcontenus/:id', (req, res) => contenuController.selectContenuById(req, res));

/**
 * @swagger
 * /deletecontenus/{id}:
 *   delete:
 *     summary: Supprime un contenu par son ID
 *     tags:
 *       - Content -> DELETE CONTENUS BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du contenu à supprimer
 *     responses:
 *       200:
 *         description: Contenu supprimé avec succès
 *       404:
 *         description: Contenu non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deletecontenus/:id', (req, res) => contenuController.deleteContenuById(req, res));

/**
 * @swagger
 * /deleteallcontenus:
 *   delete:
 *     summary: Supprime tous les contenus
 *     tags:
 *       - Content -> DELETE ALL CONTENUS
 *     responses:
 *       200:
 *         description: Tous les contenus supprimés avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deleteallcontenus', (req, res) => contenuController.deleteAllContenus(req, res));

/**
 * @swagger
 * /updatecontenus/{id}:
 *   put:
 *     summary: Met à jour un contenu par son ID
 *     tags:
 *       - Content -> UPDATE CONTENU
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du contenu à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ContenuJSON:
 *                 type: string
 *                 description: Nouveau contenu JSON
 *               idComposante:
 *                 type: integer
 *                 description: Nouvel ID de la composante associée
 *               type:
 *                 type: string
 *                 description: Nouveau type de contenu
 *               ordre:
 *                 type: integer
 *                 description: Nouvel ordre d'affichage
 *             required:
 *               - ContenuJSON
 *               - idComposante
 *               - type
 *               - ordre
 *     responses:
 *       200:
 *         description: Contenu mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Contenu non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/updatecontenus/:id', (req, res) => contenuController.updateContenu(req, res));

export default router;