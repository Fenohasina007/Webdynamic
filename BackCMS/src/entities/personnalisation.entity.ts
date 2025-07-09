import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Contenu } from './contenu.entity';

@Entity('personnalisations')
export class Personnalisation {
  @PrimaryGeneratedColumn()
  idPersonnalisation!: number;

  @Column({ type: 'int', nullable: true })
  fontSize!: number;

  @Column({ type: 'int', nullable: true })
  fontWeight!: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  fontFamily!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  color!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  backgroundColor!: string;

  @Column({ type: 'int', nullable: true })
  marginTop!: number;

  @Column({ type: 'int', nullable: true })
  marginBottom!: number;

  @Column({ type: 'int', nullable: true })
  marginLeft!: number;

  @Column({ type: 'int', nullable: true })
  marginRight!: number;

  @Column({ type: 'int', nullable: true })
  paddingTop!: number;

  @Column({ type: 'int', nullable: true })
  paddingBottom!: number;

  @Column({ type: 'int', nullable: true })
  paddingLeft!: number;

  @Column({ type: 'int', nullable: true })
  paddingRight!: number;

  @ManyToOne(() => Contenu, contenu => contenu.personalisations)
  @JoinColumn({ name: 'idContenu' })
  idContenu!: Contenu;
}