import { AppDataSource } from '../config/database';
import { Formation } from '../entities/formation.entity';

export class FormationRepository {
  private repository = AppDataSource.getRepository(Formation);

  async findAll(): Promise<Formation[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Formation | null> {
    return this.repository.findOneBy({ id });
  }

  async create(formation: Partial<Formation>): Promise<Formation> {
    const newFormation = this.repository.create(formation);
    return this.repository.save(newFormation);
  }

  async update(id: number, formation: Partial<Formation>): Promise<Formation | null> {
    await this.repository.update(id, formation);
    return this.repository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}