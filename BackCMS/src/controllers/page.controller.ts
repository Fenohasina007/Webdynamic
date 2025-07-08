import { Request, Response } from 'express';
import { PageService } from '../services/page.service';

const pageService = new PageService();

export class PageController {
  async addPage(req: Request, res: Response): Promise<void> {
    try {
      const pageData = req.body;
      const newPage = await pageService.addPage(pageData);
      res.status(201).json(newPage);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'ajout de la page', error });
    }
  }

  async selectAllPages(req: Request, res: Response): Promise<void> {
    try {
      const pages = await pageService.selectAllPages();
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des pages', error });
    }
  }

  async selectPageById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const page = await pageService.selectPageById(id);
      if (page) {
        res.status(200).json(page);
      } else {
        res.status(404).json({ message: `Page avec l'ID ${id} non trouvée` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération de la page', error });
    }
  }

  async updatePage(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const pageData = req.body;
      const updatedPage = await pageService.updatePage(id, pageData);
      if (updatedPage) {
        res.status(200).json(updatedPage);
      } else {
        res.status(404).json({ message: `Page avec l'ID ${id} non trouvée` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la page', error });
    }
  }

  async deletePageById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await pageService.deletePageById(id);
      if (success) {
        res.status(200).json({ message: `Page avec l'ID ${id} supprimée` });
      } else {
        res.status(404).json({ message: `Page avec l'ID ${id} non trouvée` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression de la page', error });
    }
  }

  async deleteAllPages(req: Request, res: Response): Promise<void> {
    try {
      await pageService.deleteAllPages();
      res.status(200).json({ message: 'Toutes les pages ont été supprimées' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression de toutes les pages', error });
    }
  }
}