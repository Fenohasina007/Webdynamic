import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('comptes')
export class Compte {
  @PrimaryGeneratedColumn()
  idCompte!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Username!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Password!: string;

  message_succes(): void {
    console.log('Connexion réussie avec succès !');
  }

  message_erreur(): void {
    console.log('Échec de la connexion. Veuillez vérifier vos identifiants.');
  }
}