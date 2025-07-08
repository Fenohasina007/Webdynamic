import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Contenu } from './contenu.entity';

@Entity('personnalisations')
export class Personnalisation {
  @PrimaryGeneratedColumn()
  idPersonnalisation!: number;

  @Column({ type: 'int', nullable: true })
  Size!: number;

  @Column({ type: 'int', nullable: true })
  Weight!: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  TextFamily!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  Couleur!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  Background!: string;

  @Column({ type: 'int', nullable: true })
  MarginTop!: number;

  @Column({ type: 'int', nullable: true })
  MarginBottom!: number;

  @Column({ type: 'int', nullable: true })
  MarginLeft!: number;

  @Column({ type: 'int', nullable: true })
  MarginRight!: number;

  @Column({ type: 'int', nullable: true })
  PaddingTop!: number;

  @Column({ type: 'int', nullable: true })
  PaddingBottom!: number;

  @Column({ type: 'int', nullable: true })
  PaddingLeft!: number;

  @Column({ type: 'int', nullable: true })
  PaddingRight!: number;

  @ManyToOne(() => Contenu, contenu => contenu.personalisations)
  @JoinColumn({ name: 'idContenu' })
  idContenu!: Contenu;
}