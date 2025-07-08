import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sites')
export class Site {
  @PrimaryGeneratedColumn()
  idSite!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  NomSite!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Domaine!: string;
}