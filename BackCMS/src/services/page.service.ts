import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Page } from '../entities/page.entity';

export class PageService {
  private pageRepository: Repository<Page>;

  constructor() {
    this.pageRepository = AppDataSource.getRepository(Page);
  }

  async addPage(pageData: Partial<Page>): Promise<Page> {
    const page = this.pageRepository.create(pageData);
    return await this.pageRepository.save(page);
  }

  async selectAllPages(): Promise<Page[]> {
    return await this.pageRepository.find({ relations: ['idSite'] });
  }

  async selectPageById(id: number): Promise<Page | null> {
    return await this.pageRepository.findOne({ where: { idPage: id }, relations: ['idSite'] });
  }

  async updatePage(id: number, pageData: Partial<Page>): Promise<Page | null> {
    await this.pageRepository.update(id, pageData);
    return await this.pageRepository.findOne({ where: { idPage: id }, relations: ['idSite'] });
  }

  async deletePageById(id: number): Promise<boolean> {
    const result = await this.pageRepository.delete(id);
    return result.affected !== 0;
  }

  async deleteAllPages(): Promise<void> {
    await this.pageRepository.query('TRUNCATE TABLE "pages" CASCADE');
  }
}