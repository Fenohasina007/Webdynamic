import { Router } from 'express';
import { SiteController } from '../controllers/site.controller';

const router = Router();
const siteController = new SiteController();

/**
 * @swagger
 * /addsites:
 *   post:
 *     summary: Ajoute un nouveau site
 *     tags:
 *       - Site -> ADD SITE WEB  # Étiquette correcte
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomSite:
 *                 type: string
 *                 description: Nom du site
 *               Domaine:
 *                 type: string
 *                 description: Domaine du site
 *             required:
 *               - NomSite
 *               - Domaine
 *     responses:
 *       201:
 *         description: Site créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/addsites', (req, res) => siteController.addSite(req, res));

/**
 * @swagger
 * /selectallsites:
 *   get:
 *     summary: Récupère la liste de tous les sites
 *     tags:
 *       - Site -> SELECT ALL SITE
 *     responses:
 *       200:
 *         description: Succès, retourne la liste des sites
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectallsites', (req, res) => siteController.selectAllSites(req, res));

/**
 * @swagger
 * /selectbyidsites/{id}:
 *   get:
 *     summary: Récupère un site par son ID
 *     tags:
 *       - Site -> SELECT SITE BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du site
 *     responses:
 *       200:
 *         description: Succès, retourne le site
 *       404:
 *         description: Site non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectbyidsites/:id', (req, res) => siteController.selectSiteById(req, res));

/**
 * @swagger
 * /deletesites/{id}:
 *   delete:
 *     summary: Supprime un site par son ID
 *     tags:
 *       - Site -> DELETE SITE BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du site à supprimer
 *     responses:
 *       200:
 *         description: Site supprimé avec succès
 *       404:
 *         description: Site non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deletesites/:id', (req, res) => siteController.deleteSiteById(req, res));

/**
 * @swagger
 * /deleteallsites:
 *   delete:
 *     summary: Supprime tous les sites
 *     tags:
 *       - Site -> DELETE ALL SITES
 *     responses:
 *       200:
 *         description: Tous les sites supprimés avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deleteallsites', (req, res) => siteController.deleteAllSites(req, res));

/**
 * @swagger
 * /updatesites/{id}:
 *   put:
 *     summary: Met à jour un site par son ID
 *     tags:
 *       - Site -> UPDATE SITE
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID du site à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomSite:
 *                 type: string
 *                 description: Nouveau nom du site
 *               Domaine:
 *                 type: string
 *                 description: Nouveau domaine du site
 *             required:
 *               - NomSite
 *               - Domaine
 *     responses:
 *       200:
 *         description: Site mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Site non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/updatesites/:id', (req, res) => siteController.updateSite(req, res));

export default router;