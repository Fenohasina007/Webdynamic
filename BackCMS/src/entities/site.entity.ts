import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Page } from './page.entity';

@Entity('sites')
export class Site {
  @PrimaryGeneratedColumn()
  idSite!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  NomSite!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Domaine!: string;

  @OneToMany(() => Page, page => page.site)
  pages!: Page[];
}
