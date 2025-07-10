import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Site } from './site.entity';
import { Composante } from './composante.entity';

@Entity('pages')
export class Page {
  @PrimaryGeneratedColumn()
  idPage!: number;

  @Column()
  NomPage!: string;

  @OneToMany(() => Composante, composante => composante.idPage)
  composantes!: Composante[];

  @ManyToOne(() => Site, site => site.pages)
  @JoinColumn({ name: 'idSite' })
  idSite!: Site;
}