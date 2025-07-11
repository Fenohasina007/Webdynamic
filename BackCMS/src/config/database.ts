import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Formation } from '../entities/formation.entity';
import { Site } from '../entities/site.entity';
import { Composante } from '../entities/composante.entity';
import { Contenu } from '../entities/contenu.entity';
import { Personnalisation } from '../entities/personnalisation.entity';
import { Compte } from '../entities/compte.entity';
import { Page } from '../entities/page.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false, // Désactivé pour la production, utilisez les migrations
  logging: true,
  entities: [Formation, Site, Composante, Contenu, Personnalisation, Compte, Page], // Ajout de Page
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});