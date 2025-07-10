import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Composante } from './composante.entity';

@Entity('contenus')
export class Contenu {
  @PrimaryGeneratedColumn()
  idContenu!: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  Type!: string;

  @Column({ type: 'int', nullable: true })
  Ordre!: number;

  @Column({ type: 'text', nullable: true })
  ContenuJSON!: string;

  @ManyToOne(() => Composante, (composante) => composante.idComposante)
  idComposante!: Composante;
}