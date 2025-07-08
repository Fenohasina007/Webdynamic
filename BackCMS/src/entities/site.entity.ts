import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Composante } from './composante.entity'; // Adjust the path as needed

@Entity('sites')
export class Site {
  @PrimaryGeneratedColumn()
  idSite!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  NomSite!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Domaine!: string;

  @OneToMany(() => Composante, composante => composante.site)
  composantes!: Composante[];
}
