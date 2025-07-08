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
      .where('site.NomSite = :nomSite', { nomSite })
      .leftJoinAndSelect('site.pages', 'pages') // Changé de 'composantes' à 'pages'
      .leftJoinAndSelect('pages.composantes', 'composantes') // Ajout pour relier à Composante via Page
      .leftJoinAndSelect('composantes.contenus', 'contenus')
      .leftJoinAndSelect('contenus.personnalisations', 'personnalisations');

    if (nomPage) {
      query.andWhere('pages.NomPage = :nomPage', { nomPage }); // Filtre sur pages.NomPage
    }

    return await query.getOne();
  }
}