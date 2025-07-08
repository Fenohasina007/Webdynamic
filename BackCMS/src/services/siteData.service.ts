import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Site } from '../entities/site.entity';

export class SiteDataService {
  private siteRepository: Repository<Site>;

  constructor() {
    this.siteRepository = AppDataSource.getRepository(Site);
  }

  async getSiteDataByName(nomSite: string, nomPage?: string): Promise<Site | null> {
    const query = this.siteRepository.createQueryBuilder('site')
      .where('site.NomSite = :nomSite', { nomSite }) // Contrainte principale
      .leftJoinAndSelect('site.pages', 'pages')
      .leftJoinAndSelect('pages.composantes', 'composantes')
      .leftJoinAndSelect('composantes.contenus', 'contenus')
      .leftJoinAndSelect('contenus.personnalisations', 'personnalisations');

    if (nomPage) {
      query.andWhere('pages.NomPage = :nomPage', { nomPage }); // Contrainte secondaire optionnelle
    }

    return await query.getOne();
  }
}