import { Request, Response } from 'express';
import { SiteService } from '../services/site.service';

const siteService = new SiteService();

export class SiteController {
  async addSite(req: Request, res: Response): Promise<void> {
    try {
      const { NomSite, Domaine } = req.body;
      const site = await siteService.addSite({ NomSite, Domaine });
      res.status(201).json(site);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'ajout du site', error });
    }
  }

  async selectAllSites(req: Request, res: Response): Promise<void> {
    try {
      const sites = await siteService.selectAllSites();
      res.status(200).json(sites);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des sites', error });
    }
  }

  async selectSiteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const site = await siteService.selectSiteById(id);
      if (site) {
        res.status(200).json(site);
      } else {
        res.status(404).json({ message: 'Site non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération du site', error });
    }
  }

  async deleteSiteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await siteService.deleteSiteById(id);
      if (success) {
        res.status(200).json({ message: 'Site supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Site non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression du site', error });
    }
  }

  async deleteAllSites(req: Request, res: Response): Promise<void> {
    try {
      await siteService.deleteAllSites();
      res.status(200).json({ message: 'Tous les sites ont été supprimés' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression des sites', error });
    }
  }

  async updateSite(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const { NomSite, Domaine } = req.body;
      const site = await siteService.updateSite(id, { NomSite, Domaine });
      if (site) {
        res.status(200).json(site);
      } else {
        res.status(404).json({ message: 'Site non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du site', error });
    }
  }
}