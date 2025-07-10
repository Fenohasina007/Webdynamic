import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Site } from '../entities/site.entity';

export class SiteService {
  private siteRepository: Repository<Site>;

  constructor() {
    this.siteRepository = AppDataSource.getRepository(Site);
  }

  async addSite(siteData: Partial<Site>): Promise<Site> {
    const site = this.siteRepository.create(siteData);
    return await this.siteRepository.save(site);
  }

  async selectAllSites(): Promise<Site[]> {
    return await this.siteRepository.find();
  }

  async selectSiteById(id: number): Promise<Site | null> {
    return await this.siteRepository.findOneBy({ idSite: id });
  }

  async deleteSiteById(id: number): Promise<boolean> {
    const result = await this.siteRepository.delete(id);
    return result.affected !== 0;
  }

  async deleteAllSites(): Promise<void> {
    await this.siteRepository.clear();
  }

  async updateSite(id: number, siteData: Partial<Site>): Promise<Site | null> {
    await this.siteRepository.update(id, siteData);
    return await this.siteRepository.findOneBy({ idSite: id });
  }
}