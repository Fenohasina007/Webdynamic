import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Site } from './site.entity';
import { Contenu } from './contenu.entity';

@Entity('composantes')
export class Composante {
  @PrimaryGeneratedColumn()
  idComposante!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  NomComposante!: string;

  @OneToMany(() => Contenu, contenu => contenu.composant)
  contenus!: Contenu[];

  @ManyToOne(() => Site, site => site.composantes) // Ensure no conflict with ImportedComposante
  @JoinColumn({ name: 'idSite' })  // Cette colonne est la clé étrangère
  site!: Site;
}
