import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1751896944262 implements MigrationInterface {
    name = 'InitialMigration1751896944262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "formations" ("id" SERIAL NOT NULL, "nom" character varying(100) NOT NULL, "prenom" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "date_inscription" date NOT NULL DEFAULT ('now'::text)::date, "typeFormation" character varying(100) NOT NULL, CONSTRAINT "UQ_7410fe112506e0fe58975e0cf6f" UNIQUE ("email"), CONSTRAINT "PK_e071aaba3322392364953ba5c95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personnalisations" ("idPersonnalisation" SERIAL NOT NULL, "Size" integer, "Weight" integer, "TextFamily" character varying(50), "Couleur" character varying(20), "Background" character varying(50), "MarginTop" integer, "MarginBottom" integer, "MarginLeft" integer, "MarginRight" integer, "PaddingTop" integer, "PaddingBottom" integer, "PaddingLeft" integer, "PaddingRight" integer, "idContenu" integer, CONSTRAINT "PK_d45f22cc37621298f137bbba82d" PRIMARY KEY ("idPersonnalisation"))`);
        await queryRunner.query(`CREATE TABLE "contenus" ("idContenu" SERIAL NOT NULL, "Type" character varying(50) NOT NULL, "Ordre" integer, "ContenuJSON" text, "idComposante" integer, CONSTRAINT "PK_350165db7c1022da0f82cb45729" PRIMARY KEY ("idContenu"))`);
        await queryRunner.query(`CREATE TABLE "composantes" ("idComposante" SERIAL NOT NULL, "NomComposante" character varying(100) NOT NULL, "idSite" integer, CONSTRAINT "PK_9fffd27ea912d1a6157fd94f5ac" PRIMARY KEY ("idComposante"))`);
        await queryRunner.query(`CREATE TABLE "sites" ("idSite" SERIAL NOT NULL, "NomSite" character varying(100) NOT NULL, "Domaine" character varying(100) NOT NULL, CONSTRAINT "PK_e5677f3b766e220ff28aecdefb3" PRIMARY KEY ("idSite"))`);
        await queryRunner.query(`CREATE TABLE "comptes" ("idCompte" SERIAL NOT NULL, "Username" character varying(100) NOT NULL, "Password" character varying(100) NOT NULL, CONSTRAINT "PK_8851b0bd6ba719bff78ef127dc9" PRIMARY KEY ("idCompte"))`);
        await queryRunner.query(`ALTER TABLE "personnalisations" ADD CONSTRAINT "FK_467bdb6b9db322c44bb16312662" FOREIGN KEY ("idContenu") REFERENCES "contenus"("idContenu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contenus" ADD CONSTRAINT "FK_d33142bac51ca9c2a00b0b1106d" FOREIGN KEY ("idComposante") REFERENCES "composantes"("idComposante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "composantes" ADD CONSTRAINT "FK_c950a46274ffadf5f509349e1c0" FOREIGN KEY ("idSite") REFERENCES "sites"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "composantes" DROP CONSTRAINT "FK_c950a46274ffadf5f509349e1c0"`);
        await queryRunner.query(`ALTER TABLE "contenus" DROP CONSTRAINT "FK_d33142bac51ca9c2a00b0b1106d"`);
        await queryRunner.query(`ALTER TABLE "personnalisations" DROP CONSTRAINT "FK_467bdb6b9db322c44bb16312662"`);
        await queryRunner.query(`DROP TABLE "comptes"`);
        await queryRunner.query(`DROP TABLE "sites"`);
        await queryRunner.query(`DROP TABLE "composantes"`);
        await queryRunner.query(`DROP TABLE "contenus"`);
        await queryRunner.query(`DROP TABLE "personnalisations"`);
        await queryRunner.query(`DROP TABLE "formations"`);
    }

}
