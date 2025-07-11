import { Request, Response } from 'express';
import { CompteService } from '../services/compte.service';

const compteService = new CompteService();

export class CompteController {
  async addCompte(req: Request, res: Response): Promise<void> {
    try {
      const { Username, Password } = req.body;
      const compte = await compteService.addCompte({ Username, Password });
      res.status(201).json(compte);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'ajout du compte', error });
    }
  }

  async selectAllComptes(req: Request, res: Response): Promise<void> {
    try {
      const comptes = await compteService.selectAllComptes();
      res.status(200).json(comptes);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des comptes', error });
    }
  }

  async selectCompteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const compte = await compteService.selectCompteById(id);
      if (compte) {
        res.status(200).json(compte);
      } else {
        res.status(404).json({ message: 'Compte non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération du compte', error });
    }
  }

  async deleteCompteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await compteService.deleteCompteById(id);
      if (success) {
        res.status(200).json({ message: 'Compte supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Compte non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression du compte', error });
    }
  }

  async deleteAllComptes(req: Request, res: Response): Promise<void> {
    try {
      await compteService.deleteAllComptes();
      res.status(200).json({ message: 'Tous les comptes ont été supprimés' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression des comptes', error });
    }
  }

  async updateCompte(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const { Username, Password } = req.body;
      const compte = await compteService.updateCompte(id, { Username, Password });
      if (compte) {
        res.status(200).json(compte);
      } else {
        res.status(404).json({ message: 'Compte non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du compte', error });
    }
  }
}