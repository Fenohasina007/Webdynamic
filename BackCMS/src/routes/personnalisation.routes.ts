import { Router } from 'express';
import { PersonnalisationController } from '../controllers/personnalisation.controller';

const router = Router();
const personnalisationController = new PersonnalisationController();

/**
 * @swagger
 * /addpersonnalisations:
 *   post:
 *     summary: Ajoute une nouvelle personnalisation
 *     tags:
 *       - Personnalisation -> ADD STYLE  # Étiquette pour regrouper avec d'autres endpoints
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fontSize:
 *                 type: integer
 *                 nullable: true
 *                 description: Taille de la police (en px)
 *               fontWeight:
 *                 type: integer
 *                 nullable: true
 *                 description: Poids de la police
 *               fontFamily:
 *                 type: string
 *                 nullable: true
 *                 description: Famille de police
 *                 maxLength: 50
 *               color:
 *                 type: string
 *                 nullable: true
 *                 description: Couleur du texte
 *                 maxLength: 20
 *               backgroundColor:
 *                 type: string
 *                 nullable: true
 *                 description: Couleur de fond
 *                 maxLength: 50
 *               marginTop:
 *                 type: integer
 *                 nullable: true
 *                 description: Marge supérieure (en px)
 *               marginBottom:
 *                 type: integer
 *                 nullable: true
 *                 description: Marge inférieure (en px)
 *               marginLeft:
 *                 type: integer
 *                 nullable: true
 *                 description: Marge gauche (en px)
 *               marginRight:
 *                 type: integer
 *                 nullable: true
 *                 description: Marge droite (en px)
 *               paddingTop:
 *                 type: integer
 *                 nullable: true
 *                 description: Rembourrage supérieur (en px)
 *               paddingBottom:
 *                 type: integer
 *                 nullable: true
 *                 description: Rembourrage inférieur (en px)
 *               paddingLeft:
 *                 type: integer
 *                 nullable: true
 *                 description: Rembourrage gauche (en px)
 *               paddingRight:
 *                 type: integer
 *                 nullable: true
 *                 description: Rembourrage droite (en px)
 *               idContenu:
 *                 type: integer
 *                 description: ID du contenu associé (non nullable via relation)
 *             required:
 *               - idContenu
 *     responses:
 *       201:
 *         description: Personnalisation créée avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/addpersonnalisations', (req, res) => personnalisationController.addPersonnalisation(req, res));

/**
 * @swagger
 * /selectallpersonnalisations:
 *   get:
 *     summary: Récupère la liste de toutes les personnalisations
 *     tags:
 *       - Personnalisation -> SELECTE ALL STYLE
 *     responses:
 *       200:
 *         description: Succès, retourne la liste des personnalisations
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectallpersonnalisations', (req, res) => personnalisationController.selectAllPersonnalisations(req, res));

/**
 * @swagger
 * /selectbyidpersonnalisations/{id}:
 *   get:
 *     summary: Récupère une personnalisation par son ID
 *     tags:
 *       - Personnalisation -> SELECTE STYLE BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la personnalisation
 *     responses:
 *       200:
 *         description: Succès, retourne la personnalisation
 *       404:
 *         description: Personnalisation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/selectbyidpersonnalisations/:id', (req, res) => personnalisationController.selectPersonnalisationById(req, res));

/**
 * @swagger
 * /deletbyidpersonnalisations/{id}:
 *   delete:
 *     summary: Supprime une personnalisation par son ID
 *     tags:
 *       - Personnalisation -> DELETE STYLE BY [ID]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la personnalisation à supprimer
 *     responses:
 *       200:
 *         description: Personnalisation supprimée avec succès
 *       404:
 *         description: Personnalisation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deletbyidpersonnalisations/:id', (req, res) => personnalisationController.deletePersonnalisationById(req, res));

/**
 * @swagger
 * /deleteallpersonnalisations:
 *   delete:
 *     summary: Supprime toutes les personnalisations
 *     tags:
 *       - Personnalisation -> DELETE ALL STYLE
 *     responses:
 *       200:
 *         description: Toutes les personnalisations supprimées avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/deleteallpersonnalisations', (req, res) => personnalisationController.deleteAllPersonnalisations(req, res));

/**
 * @swagger
 * /updatepersonnalisations/{id}:
 *   put:
 *     summary: Met à jour une personnalisation par son ID
 *     tags:
 *       - Personnalisation -> UPDATE STYLE
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la personnalisation à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fontSize:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouvelle taille de la police (en px)
 *               fontWeight:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouveau poids de la police
 *               fontFamily:
 *                 type: string
 *                 nullable: true
 *                 description: Nouvelle famille de police
 *                 maxLength: 50
 *               color:
 *                 type: string
 *                 nullable: true
 *                 description: Nouvelle couleur du texte
 *                 maxLength: 20
 *               backgroundColor:
 *                 type: string
 *                 nullable: true
 *                 description: Nouvelle couleur de fond
 *                 maxLength: 50
 *               marginTop:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouvelle marge supérieure (en px)
 *               marginBottom:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouvelle marge inférieure (en px)
 *               marginLeft:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouvelle marge gauche (en px)
 *               marginRight:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouvelle marge droite (en px)
 *               paddingTop:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouveau rembourrage supérieur (en px)
 *               paddingBottom:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouveau rembourrage inférieur (en px)
 *               paddingLeft:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouveau rembourrage gauche (en px)
 *               paddingRight:
 *                 type: integer
 *                 nullable: true
 *                 description: Nouveau rembourrage droite (en px)
 *               idContenu:
 *                 type: integer
 *                 description: Nouvel ID du contenu associé (non nullable via relation)
 *             required:
 *               - idContenu
 *     responses:
 *       200:
 *         description: Personnalisation mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Personnalisation non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/updatepersonnalisations/:id', (req, res) => personnalisationController.updatePersonnalisation(req, res));

export default router;