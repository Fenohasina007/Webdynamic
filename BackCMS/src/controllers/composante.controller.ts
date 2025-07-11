import { Request, Response } from 'express';
import { ComposanteService } from '../services/composante.service';

const composanteService = new ComposanteService();

export class ComposanteController {
  async addComposante(req: Request, res: Response): Promise<void> {
    try {
      const { NomComposante, idPage} = req.body;
      const composante = await composanteService.addComposante({ NomComposante, idPage});
      res.status(201).json(composante);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'ajout de la composante', error });
    }
  }

  async selectAllComposantes(req: Request, res: Response): Promise<void> {
    try {
      const composantes = await composanteService.selectAllComposantes();
      res.status(200).json(composantes);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des composantes', error });
    }
  }

  async selectComposanteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const composante = await composanteService.selectComposanteById(id);
      if (composante) {
        res.status(200).json(composante);
      } else {
        res.status(404).json({ message: 'Composante non trouvée' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération de la composante', error });
    }
  }

  async deleteComposanteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await composanteService.deleteComposanteById(id);
      if (success) {
        res.status(200).json({ message: 'Composante supprimée avec succès' });
      } else {
        res.status(404).json({ message: 'Composante non trouvée' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression de la composante', error });
    }
  }

  async deleteAllComposantes(req: Request, res: Response): Promise<void> {
    try {
      await composanteService.deleteAllComposantes();
      res.status(200).json({ message: 'Toutes les composantes ont été supprimées' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression des composantes', error });
    }
  }

  async updateComposante(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const { NomComposante, idPage} = req.body;
      const composante = await composanteService.updateComposante(id, { NomComposante, idPage});
      if (composante) {
        res.status(200).json(composante);
      } else {
        res.status(404).json({ message: 'Composante non trouvée' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la composante', error });
    }
  }
}