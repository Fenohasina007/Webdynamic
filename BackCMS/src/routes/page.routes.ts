import { Router } from 'express';
import { PageController } from '../controllers/page.controller';

const router = Router();
const pageController = new PageController();

/**
 * @swagger
 * /addpages:
 *   post:
 *     summary: Ajoute une nouvelle page
 *     tags:
 *       - Page -> ADD PAGES  # Étiquette pour regrouper avec d'autres endpoints
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomPage:
 *                 type: string
 *                 description: Nom de la page
 *               idSite:
 *                 type: integer
 *                 description: ID du site associé
 *             required:
 *               - NomPage
 *               - idSite
 *     responses:
 *       201:
 *         description: Page créée avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/addpages', (req, res) => pageController.addPage(req, res));

/**
 * @swagger
 * /selectallpages:
 *   get:
 *     summary: Récupère la liste de toutes les pages
 *     tags:
 *       - Page -> SELECT ALL PAGES
 *     responses:
 *       200:
 *         description: Succès, retourne la liste des pages
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectallpages', (req, res) => pageController.selectAllPages(req, res));

/**
 * @swagger
 * /selectbyidpages/{id}:
 *   get:
 *     summary: Récupère une page par son ID
 *     tags:
 *       - Page -> SELECT PAGE BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la page
 *     responses:
 *       200:
 *         description: Succès, retourne la page
 *       404:
 *         description: Page non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectbyidpages/:id', (req, res) => pageController.selectPageById(req, res));

/**
 * @swagger
 * /updatepages/{id}:
 *   put:
 *     summary: Met à jour une page par son ID
 *     tags:
 *       - Page -> UPDATE PAGE
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la page à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomPage:
 *                 type: string
 *                 description: Nouveau nom de la page
 *               idSite:
 *                 type: integer
 *                 description: Nouvel ID du site associé
 *             required:
 *               - NomPage
 *               - idSite
 *     responses:
 *       200:
 *         description: Page mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Page non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/updatepages/:id', (req, res) => pageController.updatePage(req, res));

/**
 * @swagger
 * /deletebyidpages/{id}:
 *   delete:
 *     summary: Supprime une page par son ID
 *     tags:
 *       - Page -> DELETE PAGE BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la page à supprimer
 *     responses:
 *       200:
 *         description: Page supprimée avec succès
 *       404:
 *         description: Page non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deletebyidpages/:id', (req, res) => pageController.deletePageById(req, res));

/**
 * @swagger
 * /deleteallpages:
 *   delete:
 *     summary: Supprime toutes les pages
 *     tags:
 *       - Page -> DELETE ALL PAGES
 *     responses:
 *       200:
 *         description: Toutes les pages supprimées avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deleteallpages', (req, res) => pageController.deleteAllPages(req, res));

export default router;