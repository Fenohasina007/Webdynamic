import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Site } from './site.entity';
import { Contenu } from './contenu.entity';
import { Page } from './page.entity';

@Entity('composantes')
export class Composante {
  @PrimaryGeneratedColumn()
  idComposante!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  NomComposante!: string;

  @OneToMany(() => Contenu, contenu => contenu.composant)
  contenus!: Contenu[];

  @ManyToOne(() => Page, page => page.composantes) // Ensure no conflict with ImportedComposante
  @JoinColumn({ name: 'idPage' })  // Cette colonne est la clé étrangère
  page!: Page;
}
