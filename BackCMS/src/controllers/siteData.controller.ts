import { Request, Response } from 'express';
import { SiteDataService } from '../services/siteData.service';

const siteDataService = new SiteDataService();

export class SiteDataController {
  async getSiteDataByName(req: Request, res: Response): Promise<void> {
    try {
      const nomSite = req.params.nomSite;
      const nomPage = req.params.nomPage; // Récupéré depuis l'URL, optionnel
      if (!nomSite) {
        res.status(400).json({ message: 'Le nom du site est requis' });
        return;
      }
      const siteData = await siteDataService.getSiteDataByName(nomSite, nomPage);
      if (siteData) {
        res.status(200).json(siteData);
      } else {
        res.status(404).json({ message: `Aucun site trouvé avec le nom ${nomSite}${nomPage ? ` et la page ${nomPage}` : ''}` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des données du site', error });
    }
  }
}