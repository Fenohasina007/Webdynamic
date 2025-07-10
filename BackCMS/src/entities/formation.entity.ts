import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('formations')
export class Formation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nom!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  prenom!: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  email!: string;

  @Column({ type: 'date', nullable: false, default: () => 'CURRENT_DATE' })
  date_inscription!: Date;

  @Column({ type: 'varchar', length: 100, nullable: false })
  typeFormation !: string;
}