import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Site } from './site.entity';

@Entity('composantes')
export class Composante {
  @PrimaryGeneratedColumn()
  idComposante!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  NomComposante!: string;

  @ManyToOne(() => Site, (site) => site.idSite)
  idSite!: Site;
}