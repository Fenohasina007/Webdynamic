import { FormationRepository } from '../repositories/formation.repository';
import { Formation } from '../entities/formation.entity';

export class FormationService {
  private formationRepository: FormationRepository;

  constructor() {
    this.formationRepository = new FormationRepository();
  }

  async getAllFormations(): Promise<Formation[]> {
    return this.formationRepository.findAll();
  }

  async getFormationById(id: number): Promise<Formation | null> {
    return this.formationRepository.findById(id);
  }

  async createFormation(formationData: Partial<Formation>): Promise<Formation> {
    return this.formationRepository.create(formationData);
  }

  async updateFormation(id: number, formationData: Partial<Formation>): Promise<Formation | null> {
    return this.formationRepository.update(id, formationData);
  }

  async deleteFormation(id: number): Promise<void> {
    return this.formationRepository.delete(id);
  }
}