import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1751791036677 implements MigrationInterface {
    name = 'InitialMigration1751791036677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "formations" ("id" SERIAL NOT NULL, "nom" character varying(100) NOT NULL, "prenom" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "date_inscription" date NOT NULL DEFAULT ('now'::text)::date, "typeFormation" character varying(100) NOT NULL, CONSTRAINT "UQ_7410fe112506e0fe58975e0cf6f" UNIQUE ("email"), CONSTRAINT "PK_e071aaba3322392364953ba5c95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sites" ("idSite" SERIAL NOT NULL, "NomSite" character varying(100) NOT NULL, "Domaine" character varying(100) NOT NULL, CONSTRAINT "PK_e5677f3b766e220ff28aecdefb3" PRIMARY KEY ("idSite"))`);
        await queryRunner.query(`CREATE TABLE "composantes" ("idComposante" SERIAL NOT NULL, "NomComposante" character varying(100) NOT NULL, "idSiteIdSite" integer, CONSTRAINT "PK_9fffd27ea912d1a6157fd94f5ac" PRIMARY KEY ("idComposante"))`);
        await queryRunner.query(`CREATE TABLE "contenus" ("idContenu" SERIAL NOT NULL, "Type" character varying(50) NOT NULL, "Ordre" integer, "ContenuJSON" text, "idComposanteIdComposante" integer, CONSTRAINT "PK_350165db7c1022da0f82cb45729" PRIMARY KEY ("idContenu"))`);
        await queryRunner.query(`CREATE TABLE "personnalisations" ("idPersonnalisation" SERIAL NOT NULL, "Size" integer, "Weight" integer, "TextFamily" character varying(50), "Couleur" character varying(20), "Background" character varying(50), "MarginTop" integer, "MarginBottom" integer, "MarginLeft" integer, "MarginRight" integer, "PaddingTop" integer, "PaddingBottom" integer, "PaddingLeft" integer, "PaddingRight" integer, "idContenuIdContenu" integer, CONSTRAINT "PK_d45f22cc37621298f137bbba82d" PRIMARY KEY ("idPersonnalisation"))`);
        await queryRunner.query(`CREATE TABLE "comptes" ("idCompte" SERIAL NOT NULL, "Username" character varying(100) NOT NULL, "Password" character varying(100) NOT NULL, CONSTRAINT "PK_8851b0bd6ba719bff78ef127dc9" PRIMARY KEY ("idCompte"))`);
        await queryRunner.query(`ALTER TABLE "composantes" ADD CONSTRAINT "FK_bab6308cb6fc0b022dc3856e9c0" FOREIGN KEY ("idSiteIdSite") REFERENCES "sites"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contenus" ADD CONSTRAINT "FK_ba4a89be52fc001c47b61d58551" FOREIGN KEY ("idComposanteIdComposante") REFERENCES "composantes"("idComposante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "personnalisations" ADD CONSTRAINT "FK_61bb28e7257ee67308fa400e262" FOREIGN KEY ("idContenuIdContenu") REFERENCES "contenus"("idContenu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personnalisations" DROP CONSTRAINT "FK_61bb28e7257ee67308fa400e262"`);
        await queryRunner.query(`ALTER TABLE "contenus" DROP CONSTRAINT "FK_ba4a89be52fc001c47b61d58551"`);
        await queryRunner.query(`ALTER TABLE "composantes" DROP CONSTRAINT "FK_bab6308cb6fc0b022dc3856e9c0"`);
        await queryRunner.query(`DROP TABLE "comptes"`);
        await queryRunner.query(`DROP TABLE "personnalisations"`);
        await queryRunner.query(`DROP TABLE "contenus"`);
        await queryRunner.query(`DROP TABLE "composantes"`);
        await queryRunner.query(`DROP TABLE "sites"`);
        await queryRunner.query(`DROP TABLE "formations"`);
    }

}
