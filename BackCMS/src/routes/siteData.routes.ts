import { Router } from 'express';
import { SiteDataController } from '../controllers/siteData.controller';

const router = Router();
const siteDataController = new SiteDataController();

/**
 * @swagger
 * /site-data/{nomSite}:
 *   get:
 *     summary: Récupère les données d'un site via [NOM_SITE] et [NOM_PAGE] (optionnel)
 *     tags:
 *       - SELECT DATA BY [NomSite] et [NomPage]  # Étiquette personnalisée pour regrouper cet endpoint
 *     parameters:
 *       - in: path
 *         name: nomSite
 *         required: true
 *         schema:
 *           type: string
 *         description: Le nom du site
 *       - in: query
 *         name: nomPage
 *         schema:
 *           type: string
 *         description: Le nom de la page (optionnel)
 *     responses:
 *       200:
 *         description: Succès, retourne les données du site
 *       404:
 *         description: Site ou page non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/site-data/:nomSite', (req, res) => siteDataController.getSiteDataByName(req, res));

export default router;