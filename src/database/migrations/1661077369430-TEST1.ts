import {MigrationInterface, QueryRunner} from "typeorm";

export class TEST11661077369430 implements MigrationInterface {
    name = 'TEST11661077369430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "karyawan" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "PK_fdb8d1ca3cdb99f669a0d9085a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tugas" ("id" SERIAL NOT NULL, "assignedId" integer NOT NULL, "title" character varying(50) NOT NULL, "description" character varying(200) NOT NULL, CONSTRAINT "PK_c47128bea268a373b07dd6ba74a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tugas" ADD CONSTRAINT "FK_11e5bdce10753945aabe241077c" FOREIGN KEY ("assignedId") REFERENCES "karyawan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tugas" DROP CONSTRAINT "FK_11e5bdce10753945aabe241077c"`);
        await queryRunner.query(`DROP TABLE "tugas"`);
        await queryRunner.query(`DROP TABLE "karyawan"`);
    }

}
