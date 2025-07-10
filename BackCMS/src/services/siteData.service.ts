import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Site } from '../entities/site.entity';

export class SiteDataService {
  private siteRepository: Repository<Site>;

  constructor() {
    this.siteRepository = AppDataSource.getRepository(Site);
  }

  async getSiteDataByName(nomSite: string, nomPage?: string): Promise<Site | null> {
    try {
      console.log('Recherche avec nomSite:', nomSite, 'nomPage:', nomPage);
      const query = this.siteRepository.createQueryBuilder('site')
        .where('site.NomSite = :nomSite', { nomSite })
        .leftJoinAndSelect('site.pages', 'pages')
        .leftJoinAndSelect('pages.composantes', 'composantes')
        .leftJoinAndSelect('composantes.contenus', 'contenus')
        .leftJoinAndSelect('contenus.personnalisations', 'personnalisations');

      if (nomPage) {
        console.log('Ajout du filtre nomPage:', nomPage);
        query.andWhere('pages.NomPage = :nomPage', { nomPage });
      }

      const result = await query.getOne();
      console.log('Résultat de la requête:', result);
      return result;
    } catch (error) {
      console.error('Erreur dans getSiteDataByName:', error);
      throw error;
    }
  }
}