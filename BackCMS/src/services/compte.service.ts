import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Compte } from '../entities/compte.entity';

export class CompteService {
  private compteRepository: Repository<Compte>;

  constructor() {
    this.compteRepository = AppDataSource.getRepository(Compte);
  }

  async addCompte(compteData: Partial<Compte>): Promise<Compte> {
    const compte = this.compteRepository.create(compteData);
    return await this.compteRepository.save(compte);
  }

  async selectAllComptes(): Promise<Compte[]> {
    return await this.compteRepository.find();
  }

  async selectCompteById(id: number): Promise<Compte | null> {
    return await this.compteRepository.findOneBy({ idCompte: id });
  }

  async deleteCompteById(id: number): Promise<boolean> {
    const result = await this.compteRepository.delete(id);
    return result.affected !== 0;
  }

  async deleteAllComptes(): Promise<void> {
    await this.compteRepository.clear();
  }

  async updateCompte(id: number, compteData: Partial<Compte>): Promise<Compte | null> {
    await this.compteRepository.update(id, compteData);
    return await this.compteRepository.findOneBy({ idCompte: id });
  }
}