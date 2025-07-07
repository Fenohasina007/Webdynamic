import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Composante } from './composante.entity';
import { Personnalisation } from './personnalisation.entity';

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

  @OneToMany(() => Personnalisation, personnalisation => personnalisation.contenu)
  personalisations!: Personnalisation[];

  @ManyToOne(() => Composante, composante => composante.contenus)
  @JoinColumn({ name: 'idComposante' })
  composant!: Composante;
}