import { Request, Response } from 'express';
import { PersonnalisationService } from '../services/personnalisation.service';

const personnalisationService = new PersonnalisationService();

export class PersonnalisationController {
  async addPersonnalisation(req: Request, res: Response): Promise<void> {
    try {
      const {
        Size, Weight, TextFamily, Couleur, Background, MarginTop, MarginBottom,
        MarginLeft, MarginRight, PaddingTop, PaddingBottom, PaddingLeft, PaddingRight, idContenu
      } = req.body;
      const personnalisation = await personnalisationService.addPersonnalisation({
        Size, Weight, TextFamily, Couleur, Background, MarginTop, MarginBottom,
        MarginLeft, MarginRight, PaddingTop, PaddingBottom, PaddingLeft, PaddingRight, idContenu
      });
      res.status(201).json(personnalisation);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'ajout de la personnalisation', error });
    }
  }

  async selectAllPersonnalisations(req: Request, res: Response): Promise<void> {
    try {
      const personnalisations = await personnalisationService.selectAllPersonnalisations();
      res.status(200).json(personnalisations);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des personnalisations', error });
    }
  }

  async selectPersonnalisationById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const personnalisation = await personnalisationService.selectPersonnalisationById(id);
      if (personnalisation) {
        res.status(200).json(personnalisation);
      } else {
        res.status(404).json({ message: 'Personnalisation non trouvée' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération de la personnalisation', error });
    }
  }

  async deletePersonnalisationById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await personnalisationService.deletePersonnalisationById(id);
      if (success) {
        res.status(200).json({ message: 'Personnalisation supprimée avec succès' });
      } else {
        res.status(404).json({ message: 'Personnalisation non trouvée' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression de la personnalisation', error });
    }
  }

  async deleteAllPersonnalisations(req: Request, res: Response): Promise<void> {
    try {
      await personnalisationService.deleteAllPersonnalisations();
      res.status(200).json({ message: 'Toutes les personnalisations ont été supprimées' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression des personnalisations', error });
    }
  }

  async updatePersonnalisation(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const {
        Size, Weight, TextFamily, Couleur, Background, MarginTop, MarginBottom,
        MarginLeft, MarginRight, PaddingTop, PaddingBottom, PaddingLeft, PaddingRight, idContenu
      } = req.body;
      const personnalisation = await personnalisationService.updatePersonnalisation(id, {
        Size, Weight, TextFamily, Couleur, Background, MarginTop, MarginBottom,
        MarginLeft, MarginRight, PaddingTop, PaddingBottom, PaddingLeft, PaddingRight, idContenu
      });
      if (personnalisation) {
        res.status(200).json(personnalisation);
      } else {
        res.status(404).json({ message: 'Personnalisation non trouvée' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la personnalisation', error });
    }
  }
}