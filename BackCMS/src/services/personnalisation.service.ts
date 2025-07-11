import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Personnalisation } from '../entities/personnalisation.entity';

export class PersonnalisationService {
  private personnalisationRepository: Repository<Personnalisation>;

  constructor() {
    this.personnalisationRepository = AppDataSource.getRepository(Personnalisation);
  }

  async addPersonnalisation(personnalisationData: Partial<Personnalisation>): Promise<Personnalisation> {
    const personnalisation = this.personnalisationRepository.create(personnalisationData);
    return await this.personnalisationRepository.save(personnalisation);
  }

  async selectAllPersonnalisations(): Promise<Personnalisation[]> {
    return await this.personnalisationRepository.find({ relations: ['idContenu'] });
  }

  async selectPersonnalisationById(id: number): Promise<Personnalisation | null> {
    return await this.personnalisationRepository.findOne({ where: { idPersonnalisation: id }, relations: ['idContenu'] });
  }

  async deletePersonnalisationById(id: number): Promise<boolean> {
    const result = await this.personnalisationRepository.delete(id);
    return result.affected !== 0;
  }

  async deleteAllPersonnalisations(): Promise<void> {
    await this.personnalisationRepository.clear();
  }

  async updatePersonnalisation(id: number, personnalisationData: Partial<Personnalisation>): Promise<Personnalisation | null> {
    await this.personnalisationRepository.update(id, personnalisationData);
    return await this.personnalisationRepository.findOne({ where: { idPersonnalisation: id }, relations: ['idContenu'] });
  }
}