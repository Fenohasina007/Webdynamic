import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Composante } from '../entities/composante.entity';

export class ComposanteService {
  private composanteRepository: Repository<Composante>;

  constructor() {
    this.composanteRepository = AppDataSource.getRepository(Composante);
  }

  async addComposante(composanteData: Partial<Composante>): Promise<Composante> {
    const composante = this.composanteRepository.create(composanteData);
    return await this.composanteRepository.save(composante);
  }

  async selectAllComposantes(): Promise<Composante[]> {
    return await this.composanteRepository.find({ relations: ['idPage'] });
  }

  async selectComposanteById(id: number): Promise<Composante | null> {
    return await this.composanteRepository.findOne({ where: { idComposante: id }, relations: ['idPage'] });
  }

  async deleteComposanteById(id: number): Promise<boolean> {
    const result = await this.composanteRepository.delete(id);
    return result.affected !== 0;
  }

  async deleteAllComposantes(): Promise<void> {
    await this.composanteRepository.query('TRUNCATE TABLE "composantes" CASCADE');
  }

  async updateComposante(id: number, composanteData: Partial<Composante>): Promise<Composante | null> {
    await this.composanteRepository.update(id, composanteData);
    return await this.composanteRepository.findOne({ where: { idComposante: id }, relations: ['idPage'] });
  }
}