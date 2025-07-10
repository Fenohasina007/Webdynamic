import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Contenu } from '../entities/contenu.entity';

export class ContenuService {
  private contenuRepository: Repository<Contenu>;

  constructor() {
    this.contenuRepository = AppDataSource.getRepository(Contenu);
  }

  async addContenu(contenuData: Partial<Contenu>): Promise<Contenu> {
    const contenu = this.contenuRepository.create(contenuData);
    return await this.contenuRepository.save(contenu);
  }

  async selectAllContenus(): Promise<Contenu[]> {
    return await this.contenuRepository.find({ relations: ['idComposante'] });
  }

  async selectContenuById(id: number): Promise<Contenu | null> {
    return await this.contenuRepository.findOne({ where: { idContenu: id }, relations: ['idComposante'] });
  }

  async deleteContenuById(id: number): Promise<boolean> {
    const result = await this.contenuRepository.delete(id);
    return result.affected !== 0;
  }

  async deleteAllContenus(): Promise<void> {
    await this.contenuRepository.clear();
  }

  async updateContenu(id: number, contenuData: Partial<Contenu>): Promise<Contenu | null> {
    await this.contenuRepository.update(id, contenuData);
    return await this.contenuRepository.findOne({ where: { idContenu: id }, relations: ['idComposante'] });
  }
}