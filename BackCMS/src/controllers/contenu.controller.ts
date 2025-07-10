import { Request, Response } from 'express';
import { ContenuService } from '../services/contenu.service';

const contenuService = new ContenuService();

export class ContenuController {
  async addContenu(req: Request, res: Response): Promise<void> {
    try {
      const { Type, Ordre, ContenuJSON, idComposante } = req.body;
      const contenu = await contenuService.addContenu({ Type, Ordre, ContenuJSON, idComposante });
      res.status(201).json(contenu);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'ajout du contenu', error });
    }
  }

  async selectAllContenus(req: Request, res: Response): Promise<void> {
    try {
      const contenus = await contenuService.selectAllContenus();
      res.status(200).json(contenus);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des contenus', error });
    }
  }

  async selectContenuById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const contenu = await contenuService.selectContenuById(id);
      if (contenu) {
        res.status(200).json(contenu);
      } else {
        res.status(404).json({ message: 'Contenu non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération du contenu', error });
    }
  }

  async deleteContenuById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await contenuService.deleteContenuById(id);
      if (success) {
        res.status(200).json({ message: 'Contenu supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Contenu non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression du contenu', error });
    }
  }

  async deleteAllContenus(req: Request, res: Response): Promise<void> {
    try {
      await contenuService.deleteAllContenus();
      res.status(200).json({ message: 'Tous les contenus ont été supprimés' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression des contenus', error });
    }
  }

  async updateContenu(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const { Type, Ordre, ContenuJSON, idComposante } = req.body;
      const contenu = await contenuService.updateContenu(id, { Type, Ordre, ContenuJSON, idComposante });
      if (contenu) {
        res.status(200).json(contenu);
      } else {
        res.status(404).json({ message: 'Contenu non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du contenu', error });
    }
  }
}