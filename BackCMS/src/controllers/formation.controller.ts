import { Request, Response } from 'express';
import { FormationService } from '../services/formation.service';

export class FormationController {
  private formationService: FormationService;

  constructor() {
    this.formationService = new FormationService();
  }

  async getAllFormations(req: Request, res: Response): Promise<void> {
    try {
      const formations = await this.formationService.getAllFormations();
      res.status(200).json(formations);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching formations', error });
    }
  }

  async getFormationById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const formation = await this.formationService.getFormationById(id);
      if (!formation) {
        res.status(404).json({ message: 'Formation not found' });
        return;
      }
      res.status(200).json(formation);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching formation', error });
    }
  }

  async createFormation(req: Request, res: Response): Promise<void> {
    try {
      const formationData = req.body;
      const newFormation = await this.formationService.createFormation(formationData);
      res.status(201).json(newFormation);
    } catch (error) {
      res.status(500).json({ message: 'Error creating formation', error });
    }
  }

  async updateFormation(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const formationData = req.body;
      const updatedFormation = await this.formationService.updateFormation(id, formationData);
      if (!updatedFormation) {
        res.status(404).json({ message: 'Formation not found' });
        return;
      }
      res.status(200).json(updatedFormation);
    } catch (error) {
      res.status(500).json({ message: 'Error updating formation', error });
    }
  }

  async deleteFormation(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      await this.formationService.deleteFormation(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting formation', error });
    }
  }
}